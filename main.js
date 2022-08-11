//test tracksssssssssss
let trackList = [
  {
  	artist: "boa",
		name: "duvet",
		path: "/mp3/boa_duvet.mp3"
  },
   {
  	artist: "dj stingray",
		name: "hypoalgesia",
		path: "/mp3/hypoalgesia_compressed.mp3"
  },
  {
  	artist: "exxy4",
		name: "TWICE 트와이스 TT 3XXY EDIT",
		path: "/mp3/exxy4_TWICE 트와이스 TT 3XXY EDIT.mp3"
  },
   {
  	artist: "casper mcfadden",
		name: ".dancecore",
		path: "/mp3/dancecore_compressed.mp3"
  },
];

// demooooooooooooooo
// let trackList = [
//   {
//   	name: "afalfl - just some kick noyze",
// 		path: "/demo-mp3/afalfl - just some kick noyze.mp3"
//   },
//   {
//   	name: "Fetus - Footprints (premix)",
// 		path: "/demo-mp3/Fetus - Footprints (premix).mp3"
//   },
//   {
//   	name: "GRASPS X NERDIE - I AM HURTING (PREMASTER)",
// 		path: "/demo-mp3/GRASPS X NERDIE - I AM HURTING (PREMASTER).mp3"
//   },
//   {
//   	name: "Imryll - Family Portrait (Imryll Reimagined)",
// 		path: "/demo-mp3/Imryll - Family Portrait (Imryll Reimagined).mp3"
//   },
//   {
//   	name: "Jennifer Walton - At Last, Lain Is Free",
// 		path: "/demo-mp3/Jennifer Walton - At Last, Lain Is Free.mp3"
//   },
//   {
//   	name: "Kagami Smile -  Acts of Betrayal",
// 		path: "/demo-mp3/Kagami Smile -  Acts of Betrayal.mp3"
//   },
//   {
//   	name: "Sour Gout - Transmigration(-60db_unmastered)",
// 		path: "/demo-mp3/Sour Gout - Transmigration(-60db_unmastered).mp3"
//   },
//   {
//   	name: "thegn ft. vrain - phantoma_-_track04.wav (unmastered)",
// 		path: "/demo-mp3/thegn ft. vrain - phantoma_-_track04.wav (unmastered).mp3"
//   },
//   {
//   	name: "Wa_ste - cyberia texture 5a x professed intention and real intention",
// 		path: "/demo-mp3/Wa_ste - cyberia texture 5a x professed intention and real intention.mp3"
//   },
//   {
//   	name: "xo - DuvetBoa8-absurd3b",
// 		path: "/demo-mp3/xo - DuvetBoa8-absurd3b.mp3"
//   },
//   {
//   	name: "Yraki - Lights Down - PREMASTER24bit",
// 		path: "/demo-mp3/Yraki - Lights Down - PREMASTER24bit.mp3"
//   },
//   {
//   	name: "Yumea Horiike - lain - 2022_05_18 23",
// 		path: "/demo-mp3/Yumea Horiike - lain - 2022_05_18 23.mp3"
//   },
//   {
//   	name: "Yuting Wu - Help me to Breathe",
// 		path: "/demo-mp3/Yuting Wu - Help me to Breathe.mp3"
//   },
// ]; 

let playPauseBtn = document.getElementById("play-pause-btn")
let volumeSlider = document.getElementById("volume-slider")
let progressBar = document.getElementById("progress-bar-container")
let progressFill = document.getElementById("progress-bar-fill")
let curTrackText = document.getElementById("cur-track-info")
let entryPage = document.getElementById("entry-page")

let biquadSelectionEl = document.getElementById("switch-biquad")
let frequencySlider = document.getElementById("frequency-slider")
let frequencyEl = document.getElementById("cur-frequency")
let gainSlider = document.getElementById("gain-slider")
let gainEl = document.getElementById("cur-gain")

let reverbToggle = document.getElementById("reverb-toggle")
let reverbDurationSlider = document.getElementById("reverb-duration")
let reverbDecaySlider = document.getElementById("reverb-decay")

let reverbDurationText = document.getElementById("reverb-duration-text")
let reverbDecayText = document.getElementById("reverb-decay-text")

//load a random song
let curIndex = Math.floor(Math.random() * trackList.length)
let curTrack = document.getElementById("cur-track")
let isPlaying = false
let progressTimer = null

loadTrack();
progressBar.addEventListener("click", setProgress);

entryPage.addEventListener("click", function(){entryPage.style.opacity = "0"})
entryPage.addEventListener('transitionend', function() {entryPage.parentNode.removeChild(entryPage)})

//todo
function onPageLoaded()
{
	//or window.addEventListener('DOMContentLoaded'??? wahts the diff 
	console.log("booting complete")
	//hide entry page loading element
	//show entry page login
}


////////////// mini windows //////////////

//for each mini window
let miniWindow = document.getElementById("test-music-player")
let draggable = document.getElementById("test-music-player-drag")
let closeBtn = document.getElementById("test-close")
let windowDock = document.getElementById("mini-window-dock")

closeBtn.addEventListener("click", function(){miniWindow.style.display = "none"})
windowDock.addEventListener("click", function(){
	if (miniWindow.style.display === "none")
		miniWindow.style.display = "block";
})

//todo add touch events?

// let draggables = document.getElementsByClassName("mini-window-draggable")

// for (let i = 0; i < draggables.length - 1; i++)
// {
// 	console.log(draggables[i])
// 	draggables[i].addEventListener("mousedown", dragStart)

// }

draggable.addEventListener("mousedown", dragStart)
document.addEventListener("mousemove", doDrag)
document.addEventListener("mouseup", dragEnd)

let cursorPos;
let offset = [0,0];
let isMoving = false;

function dragStart(e)
{
	isMoving = true
	offset = [
		draggable.parentElement.offsetLeft - e.clientX,
	  draggable.parentElement.offsetTop - e.clientY
  ]
  //todo set z index of self n other windows
}

function doDrag(e)
{
	e.preventDefault()
	if (isMoving)
	{
		cursorPos = {
			x : e.clientX,
			y : e.clientY
		};
		draggable.parentElement.style.left = (cursorPos.x + offset[0]) + 'px';
    draggable.parentElement.style.top  = (cursorPos.y + offset[1]) + 'px';
	}
}

function dragEnd() {isMoving = false}

////////////// mini windows //////////////



////////////// audio filter //////////////
const audioContext = new AudioContext();
const biquadFilter = new BiquadFilterNode(audioContext, {frequency:1000})
// biquadFilter.frequency.setValueAtTime(700, audioContext.currentTime);
let impulse = impulseResponse(reverbDurationSlider.value, reverbDecaySlider.value)
const convolver = new ConvolverNode(audioContext, {buffer:impulse})
let hasReverb = false

let source = audioContext.createMediaElementSource(curTrack);

let biquadIndex = 0
let biquadTypes = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]

source.connect(audioContext.destination)

biquadSelectionEl.addEventListener("change", function(){switchBiquad(biquadSelectionEl.value);}) 

function impulseResponse(duration, decay)
{
	var length = audioContext.sampleRate * duration
  var impulse = audioContext.createBuffer(2, length, audioContext.sampleRate)
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
	biquadIndex = index
	if(biquadIndex > 0) //turn on biquad
	{
		biquadFilter.type = biquadTypes[biquadIndex - 1]
		biquadFilter.gain.setValueAtTime(gainSlider.value, audioContext.currentTime);
		if (hasReverb)
		{
			convolver.disconnect()
			source.connect(convolver).connect(biquadFilter).connect(audioContext.destination)
		}
		else 
		{	
			source.connect(biquadFilter).connect(audioContext.destination)
		}
		frequencyEl.style.color = "whitesmoke";
		gainEl.style.color = "whitesmoke";
		console.log("milady " + biquadIndex + ", biquad type = " + biquadTypes[biquadIndex - 1] + "frequency  = " + biquadFilter.frequency)
	}
	else //turn off biquad 
	{
		biquadFilter.disconnect()
		if (hasReverb)
		{
			source.connect(convolver).connect(audioContext.destination)
		}
		else 
		{
			source.connect(audioContext.destination)
		}
		frequencyEl.style.color = "grey";
		gainEl.style.color = "grey";
		console.log("milady " + biquadIndex + ", biquad type = none") 
	}
}

function setFrequency() 
{
	biquadFilter.frequency.value = frequencySlider.value
	frequencyEl.textContent = "frequency: " + frequencySlider.value
}

function setGain()
{
	biquadFilter.gain.value = gainSlider.value
	gainEl.textContent = "gain: " + gainSlider.value
}

function setReverb()
{
	reverbDurationText.textContent = "duration :" + reverbDurationSlider.value
	reverbDecayText.textContent = "decay: " + reverbDecaySlider.value
	impulse = impulseResponse(reverbDurationSlider.value, reverbDecaySlider.value)
	convolver.buffer = impulse
}

function toggleReverb()
{
	if (hasReverb)
	{
		convolver.disconnect()
		reverbToggle.textContent = "turn on reverb "
		reverbDurationText.style.color = "grey"
		reverbDecayText.style.color = "grey"
		hasReverb = false
	}
	else 
	{
		if (biquadIndex > 0) 
		{
			source.connect(convolver).connect(biquadFilter).connect(audioContext.destination)
		}
		else 
		{
			source.connect(convolver).connect(audioContext.destination)
		}
		reverbToggle.textContent = "turn off reverb"
		reverbDurationText.style.color = "whitesmoke"
		reverbDecayText.style.color = "whitesmoke"
		hasReverb = true
	}
}

////////////// end of audio filter //////////////


////////////// music player //////////////
function loadTrack()
{
	if (progressTimer != null) 
	{
		clearInterval(progressTimer)
	}
	curTrack.src = trackList[curIndex].path;
	curTrackText.textContent = "loading metadata..."
	curTrack.load();
	progressTimer = setInterval(updateProgress, 1000);

	curTrack.addEventListener("ended", nextTrack)
	curTrack.onloadedmetadata = function() 
	{
		let duration = Math.round(curTrack.duration)
		let minutes = Math.floor(duration/60)
		let seconds = duration % 60 
		let minString = (minutes < 10)? ("0" + minutes) : ("" + minutes)
		let secString = (seconds < 10)? ("0" + seconds) : ("" + seconds)

		curTrackText.textContent = trackList[curIndex].name + " " + minString + ":" + secString;
	}
	curTrack.onloadeddata = function()
	{
		console.log("loaded track " + trackList[curIndex].name)
	}
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
	progressFill.style.width = progress * progressBar.offsetWidth + "px";
	//console.log("updated progress, progress = " + progress + ", width = " + progressFill.style.width)
}

function setProgress(el)
{
	let jumpTo = curTrack.duration * (el.offsetX / progressBar.offsetWidth);
	curTrack.currentTime = jumpTo;
	updateProgress()
	console.log("set progress: el.offsetX  = " + el.offsetX + ", curTrack.duration = " + curTrack.duration + ", max width = " + progressBar.offsetWidth + ", jumpTo = " + jumpTo)
}

////////////// music player //////////////