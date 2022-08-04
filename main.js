let trackList = [
  {
  	artist: "boa",
		name: "duvet",
		//image: "path"
		path: "/mp3/boa_duvet.mp3"
  },
  {
  	artist: "exxy4",
		name: "TWICE 트와이스 TT 3XXY EDIT",
		//image: "path"
		path: "/mp3/exxy4_TWICE 트와이스 TT 3XXY EDIT.mp3"
  },
];
 
let play_pause_btn = document.getElementById("play-pause-btn")
let volume_slider = document.getElementById("volume-slider")
let progress_bar = document.getElementById("progress-bar-container")
let progress_fill = document.getElementById("progress-bar-fill")
let cur_filter_el = document.getElementById("current-filter")
let entry_page = document.getElementById("entry-page")
let biquadSelectionEl = document.getElementById("switch-biquad")

let curIndex = 0
let curTrack = document.getElementById("cur-track")
let isPlaying = false
let progressTimer = null

loadTrack();
progress_bar.addEventListener("click", setProgress);

entry_page.addEventListener("click", function(){entry_page.style.opacity = "0"})
entry_page.addEventListener('transitionend', function() {entry_page.parentNode.removeChild(entry_page)})


/////// audio filter ///////
const audioContext = new AudioContext();
const biquadFilter = audioContext.createBiquadFilter();
let impulse =impulseResponse(0.7, 0.4)
const convolver = new ConvolverNode(audioContext, {buffer:impulse})

let source = audioContext.createMediaElementSource(curTrack);

let biquadIndex = 0
let biquadTypes = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]

//temppp
source.connect(audioContext.destination)
// source.connect(convolver)
// convolver.connect(audioContext.destination)
//source.connect(biquadFilter).connect(audioContext.destination)

biquadSelectionEl.addEventListener("change", function(){switchBiquad(biquadSelectionEl.value);}) 

function impulseResponse(duration, decay)
{
	var length = audioContext.sampleRate * duration
  var impulse = audioContext.createBuffer(2, length,audioContext.sampleRate)
  var IR0 = impulse.getChannelData(0)
  var IR1 = impulse.getChannelData(1)
  for (var i = 0; i < length; i++) 
  {
  	//todo make the noise less harsh 
  	IR0[i] = (2*Math.random() - 1) * Math.pow(1 - i/length, decay)
  	IR1[i] = IR0[i]
  }
  return impulse
}

function switchBiquad(index)
{
	if(index > 0)
	{
		biquadFilter.disconnect()

		biquadFilter.type = biquadTypes[index - 1]
		biquadFilter.frequency.setValueAtTime(700, audioContext.currentTime);
		biquadFilter.gain.setValueAtTime(25, audioContext.currentTime);

		source.connect(biquadFilter).connect(audioContext.destination)
		console.log("milady " + index + ", biquad type = " + biquadTypes[index - 1])
	}
	else 
	{
		biquadFilter.disconnect()
		source.connect(audioContext.destination)
		console.log("milady " + index + ", biquad type = none") 
	}
}

// function toggleReverb(isOn)
// {
// 	convolver.disconnect()
// 	if(isOn) 
// 	{
// 		convolver.connect(audioContext.destination)
// 	}
// }

/////// end of audio filter ///////


/////// music player ///////
function loadTrack()
{
	if (progressTimer != null) 
	{
		clearInterval(progressTimer)
	}
	canPlayThru = false
	curTrack.src = trackList[curIndex].path;
	curTrack.load();
	progressTimer = setInterval(updateProgress, 1000);
	curTrack.addEventListener("ended", nextTrack)
	//curTrack.addEventListener("canplaythrough", setCanPlayThru);
}

function playTrack()
{
	curTrack.play();
	isPlaying = true;
	play_pause_btn.textContent = "pause";
}

//playback controls
function playOrPause()
{
	if (audioContext.state === 'suspended') {
		audioContext.resume();
	}

	if (isPlaying) 
	{
		curTrack.pause();
		isPlaying = false;
		play_pause_btn.textContent = "play";
	}
	else { playTrack() }
}

function prevTrack()
{
	curIndex > 0 ? curIndex -= 1 : curIndex = trackList.length - 1;
	loadTrack();
	playTrack();
	updateProgress();
}

function nextTrack()
{
	curIndex < trackList.length - 1 ? curIndex += 1 : curIndex = 0;
	loadTrack();
	playTrack();
	updateProgress();
}

function setVolume()
{
	curTrack.volume = volume_slider.value / volume_slider.max
}

//progress bar
function updateProgress()
{
	//if (isPlaying) 
	let progress = curTrack.currentTime / curTrack.duration;
	progress_fill.style.width = progress * progress_bar.offsetWidth;
	//console.log("updated progress. currentTime = " + curTrack.currentTime)
}

function setProgress(el)
{
	let jumpTo = curTrack.duration * (el.offsetX / progress_bar.offsetWidth);
	curTrack.currentTime = jumpTo;
	updateProgress()
	//console.log("set progress: el.offsetX  = " + el.offsetX + ", curTrack.duration = " + curTrack.duration + ", max width = " + progress_bar.offsetWidth + ", jumpTo = " + jumpTo)
}

/////// end of music player ///////