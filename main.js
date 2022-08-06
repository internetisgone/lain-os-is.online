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
 
let playPauseBtn = document.getElementById("play-pause-btn")
let volumeSlider = document.getElementById("volume-slider")
let progressBar = document.getElementById("progress-bar-container")
let progressFill = document.getElementById("progress-bar-fill")
let entryPage = document.getElementById("entry-page")
let biquadSelectionEl = document.getElementById("switch-biquad")
let reverbToggle = document.getElementById("reverb-toggle")
let frequencySlider = document.getElementById("frequency-slider")
let frequencyEl = document.getElementById("cur-frequency")

let curIndex = 0
let curTrack = document.getElementById("cur-track")
let isPlaying = false
let progressTimer = null

loadTrack();
progressBar.addEventListener("click", setProgress);

entryPage.addEventListener("click", function(){entryPage.style.opacity = "0"})
entryPage.addEventListener('transitionend', function() {entryPage.parentNode.removeChild(entryPage)})


/////// audio filter ///////
const audioContext = new AudioContext();
const biquadFilter = new BiquadFilterNode(audioContext, {frequency:1000})
let impulse = impulseResponse(0.7, 0.4)
const convolver = new ConvolverNode(audioContext, {buffer:impulse})

let source = audioContext.createMediaElementSource(curTrack);

let biquadIndex = 0
let biquadTypes = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]


source.connect(audioContext.destination)
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
		// biquadFilter.frequency.setValueAtTime(700, audioContext.currentTime);
		biquadFilter.gain.setValueAtTime(25, audioContext.currentTime);

		source.connect(biquadFilter).connect(audioContext.destination)
		console.log("milady " + index + ", biquad type = " + biquadTypes[index - 1] + "frequency  = " + biquadFilter.frequency)
	}
	else 
	{
		biquadFilter.disconnect()
		source.connect(audioContext.destination)
		console.log("milady " + index + ", biquad type = none") 
	}
}

function setFrequency(frequency) 
{
	biquadFilter.frequency.value = frequencySlider.value
	frequencyEl.textContent = "frequency: " + frequencySlider.value
}

// function createReverb()
// {
// 	convolver.disconnect()
// 	impulse = impulseResponse(1, 1)
// 	convolver = new ConvolverNode(audioContext, {buffer:impulse})
// 	convolver.connect(audioContext.destination)
// }

/////// end of audio filter ///////


/////// music player ///////
function loadTrack()
{
	if (progressTimer != null) 
	{
		clearInterval(progressTimer)
	}
	curTrack.src = trackList[curIndex].path;
	curTrack.load();
	progressTimer = setInterval(updateProgress, 1000);
	curTrack.addEventListener("ended", nextTrack)
}

function playTrack()
{
	curTrack.play();
	isPlaying = true;
	playPauseBtn.textContent = "pause";
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
		playPauseBtn.textContent = "play";
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
	curTrack.volume = volumeSlider.value / volumeSlider.max
}

//progress bar
function updateProgress()
{
	let progress = curTrack.currentTime / curTrack.duration;
	//todo cant set width 
	progressFill.style.maxWidth = progress * progressBar.offsetWidth;
	console.log("updated progress, progress = " + progress + ", width = " + progressFill.style.maxWidth)
}

function setProgress(el)
{
	let jumpTo = curTrack.duration * (el.offsetX / progressBar.offsetWidth);
	curTrack.currentTime = jumpTo;
	updateProgress()
	console.log("set progress: el.offsetX  = " + el.offsetX + ", curTrack.duration = " + curTrack.duration + ", max width = " + progressBar.offsetWidth + ", jumpTo = " + jumpTo)
}

/////// end of music player ///////