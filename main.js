//test tracksssssssssss
let trackList = [
  {
		name: "boa - duvet",
		path: "/mp3/boa_duvet.mp3"
  },
   {
		name: "dj stingray - hypoalgesia",
		path: "/mp3/hypoalgesia_compressed.mp3"
  },
  {
		name: "exxy4 - TWICE 트와이스 TT 3XXY EDIT",
		path: "/mp3/exxy4_TWICE 트와이스 TT 3XXY EDIT.mp3"
  },
   {
		name: "casper mcfadden - .dancecore",
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
//   	name: "xo - 200529-DuvetBoa8-absurd3bF",
// 		path: "/demo-mp3/xo - 200529-DuvetBoa8-absurd3bF.mp3"
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

//load a random song
let curIndex = Math.floor(Math.random() * trackList.length)
let curTrack = document.getElementById("cur-track")
let isPlaying = false
let progressTimer = null

loadTrack();
fillPlaylist();
progressBar.addEventListener("click", setProgress);

////////////// entry page //////////////

// let entryPage = document.getElementById("entry-page")
// let entryTextsEl = document.getElementById("entry-texts")

// entryPage.addEventListener("click", function(){
// 	entryPage.style.opacity = "0"
// 	if (audioContext.state === 'suspended') {audioContext.resume();}
// })
// entryPage.addEventListener('transitionend', function() {
// 	entryPage.parentNode.removeChild(entryPage)
// })

function onPageLoaded()
{
	console.log("booting complete")
	//entryTextsEl.textContent = "log in"
}
//or document.addEventListener('DOMContentLoaded', function() {}? wahts the diff 

////////////// entry page //////////////


////////////// mini windows //////////////

let miniWindows = document.getElementsByClassName("mini-window")
let movingWindow;
let cursorPos;
let offset = [0,0];
let isMoving = false;

for (let i = 0; i < miniWindows.length; i++)
{
	let miniWindow = miniWindows.item(i)
	let closeBtn = miniWindow.querySelector(".mini-window-close")
	closeBtn.addEventListener("click", function(){miniWindow.style.display = "none"})

	let draggable = miniWindow.querySelector(".mini-window-draggable")
	draggable.onmousedown = dragStart
	draggable.ontouchstart = dragStart

	console.log("mini windows count " + miniWindows.length)
}

function dragStart(e)
{
	e.preventDefault()
	isMoving = true
	movingWindow = e.target.parentElement
	// console.log(movingWindow)
	offset = [
		movingWindow.offsetLeft - e.clientX,
	  movingWindow.offsetTop - e.clientY
  ]
  if (e.touches != null)
	{
		console.log("touch event")
		offset = [
			movingWindow.offsetLeft - e.touches[0].clientX,
		  movingWindow.offsetTop - e.touches[0].clientY
	  ]
	}
	//set z-index
  for (let i = 0; i < miniWindows.length; i++)
  {
  	if (miniWindows.item(i) == movingWindow)
  		{movingWindow.style.zIndex = "7"}
  	else
  	{miniWindows.item(i).style.zIndex = "5"}
  }

  document.addEventListener("mousemove", doDrag)
	document.addEventListener("mouseup", dragEnd)
	document.addEventListener("touchmove", doDrag)
	document.addEventListener("touchend", dragEnd)
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

		if (e.touches != null)
		{
			cursorPos = {
				x : e.touches[0].clientX,
				y : e.touches[0].clientY
			}
		}
		movingWindow.style.left = (cursorPos.x + offset[0]) + 'px';
    movingWindow.style.top  = (cursorPos.y + offset[1]) + 'px';
	}
}

function dragEnd() 
{
	isMoving = false;

	//need 2 remove event listeners otherwise sliders cannot be dragged
	document.removeEventListener("mousemove", doDrag)
	document.removeEventListener("mouseup", dragEnd)
	document.removeEventListener("touchmove", doDrag)
	document.removeEventListener("touchend", dragEnd)
}

// windowDock.addEventListener("click", function(){
// 	if (miniWindow.style.display === "none")
// 		miniWindow.style.display = "block";
// })

let terminalTxtContainer = document.getElementById("terminal-txt-container")
let terminalDisplay = document.getElementById("terminal-display") //pre
let inputEl = document.getElementById("terminal-input")
inputEl.onkeydown = checkInput

function checkInput(e)
{	
	let letters = /^[A-Za-z]+$/;
	//console.log(e)
	//todo take whitespace. remove trailing whitespace

	if (e.key == "Enter")
	{
		if (inputEl.value.match(letters))	
		{
			terminalDisplay.innerHTML += "lain@navi ~ % " + inputEl.value + "</br>";
			//auto scrolls to the bottom
			terminalTxtContainer.scrollTop = terminalTxtContainer.scrollHeight
		}
		inputEl.value = "";
	}
}

////////////// mini windows //////////////

//////temppppp switch  view
let windowDock = document.getElementById("mini-window-dock")
let sideBar = document.getElementById("side-bar")
let oldPlayerContainer = document.getElementById("old-player-container")
let playlistEl = document.getElementById("playlist-container")
let playlistToggle = document.getElementById("pl-toggle")

let showingOldUI = false
windowDock.addEventListener("click", function(){
	if (showingOldUI)
	{
		document.body.style.backgroundImage = 'url("img/extended_bg_s.png")'
		oldPlayerContainer.style.display = "none"
		playlistEl.style.display = "none"
		for (let i = 0; i < miniWindows.length; i++)
		{
			miniWindows.item(i).style.display = "block"
		}
		showingOldUI = false
	}
	else 
	{
		document.body.style.backgroundImage = "none"
		oldPlayerContainer.style.display = "block"
		//playlistEl.style.display = "block"
		for (let i = 0; i < miniWindows.length; i++)
		{
			miniWindows.item(i).style.display = "none"
		}
		showingOldUI = true
	}
})

playlistEl.style.display = "none"
playlistToggle.addEventListener("click", function(){
	if (playlistEl.style.display == "none") {playlistEl.style.display = "block";}
	else {playlistEl.style.display = "none";}	
})
//////tempppppppppppppppp

////////////// audio filter //////////////

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
let curTimeEl = document.getElementById("cur-time")
let totalTimeEl = document.getElementById("total-time")

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
}

curTrack.addEventListener("ended", nextTrack)
curTrack.onloadedmetadata = function() 
	{
		console.log("loaded track metadata " + trackList[curIndex].name)
		// let duration = Math.round(curTrack.duration)
		let timeStrings = parseTime(curTrack.duration)

		totalTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;
		curTrackText.textContent = trackList[curIndex].name		
	}

curTrack.onloadeddata = function()
	{
		console.log("loaded track data " + trackList[curIndex].name)
	}

function parseTime(duration)
{
	let minutes = Math.floor(duration/60)
	let seconds = Math.round(duration % 60)
	let minString = (minutes < 10)? ("0" + minutes) : ("" + minutes);
	let secString = (seconds < 10)? ("0" + seconds) : ("" + seconds)

	return { 
     min: minString,
     sec: secString
   }; 
}

function playTrack()
{
	////temp. move this to entry page click event later 
	if (audioContext.state === 'suspended') {
		audioContext.resume();
	}
	//temp

	curTrack.play();
	isPlaying = true;
	playPauseBtn.textContent = "pause";
}

//playback controls
function playOrPause()
{
	////temp. move this to entry page click event later 
	if (audioContext.state === 'suspended') {
		audioContext.resume();
	}
	//temp

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

	let timeStrings = parseTime(curTrack.currentTime)
	curTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;

	//console.log("updated progress, progress = " + progress + ", width = " + progressFill.style.width)
}

function setProgress(el)
{
	let jumpTo = curTrack.duration * (el.offsetX / progressBar.offsetWidth);
	curTrack.currentTime = jumpTo;
	updateProgress()
	console.log("set progress: el.offsetX  = " + el.offsetX + ", curTrack.duration = " + curTrack.duration + ", max width = " + progressBar.offsetWidth + ", jumpTo = " + jumpTo)
}

function fillPlaylist()
{
	let playlist =  document.getElementById("playlist-content")
	for (let i = 0; i < trackList.length; i++)
	{
		let li = document.createElement("li")
		li.textContent = trackList[i].name 
		playlist.appendChild(li)

		li.addEventListener("click", function(){
			curIndex = i 
			loadTrack()
			playTrack()
			updateProgress()
		})
	}
}
////////////// music player //////////////