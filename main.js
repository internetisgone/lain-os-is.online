let trackList = [
  {
  	name: "afalfl - just some kick noyze",
		path: "/demo-mp3/afalfl - just some kick noyze.mp3"
  },
  {
  	name: "Fetus - Footprints (premix)",
		path: "/demo-mp3/Fetus - Footprints (premix).mp3"
  },
  {
  	name: "GRASPS X NERDIE - I AM HURTING (PREMASTER)",
		path: "/demo-mp3/GRASPS X NERDIE - I AM HURTING (PREMASTER).mp3"
  },
  {
  	name: "Imryll - Family Portrait (Imryll Reimagined)",
		path: "/demo-mp3/Imryll - Family Portrait (Imryll Reimagined).mp3"
  },
  {
  	name: "Jennifer Walton - At Last, Lain Is Free",
		path: "/demo-mp3/Jennifer Walton - At Last, Lain Is Free.mp3"
  },
  {
  	name: "Kagami Smile -  Acts of Betrayal",
		path: "/demo-mp3/Kagami Smile -  Acts of Betrayal.mp3"
  },
  {
  	name: "lovefear - SEL compilation track final",
  	path: "/demo-mp3/lovefear - SEL compilation track final.mp3"
  },
  {
  	name: "Nerve - I'm Gonna Diss You",
  	path: "/demo-mp3/Nerve - I'm Gonna Diss You.mp3"
  },
  {
  	name: "Sour Gout - Transmigration(-60db_unmastered)",
		path: "/demo-mp3/Sour Gout - Transmigration(-60db_unmastered).mp3"
  },
  {
  	name: "thegn ft. vrain - phantoma_-_track04.wav (unmastered)",
		path: "/demo-mp3/thegn ft. vrain - phantoma_-_track04.wav (unmastered).mp3"
  },
  {
  	name: "Wa_ste - cyberia texture 5a x professed intention and real intention",
		path: "/demo-mp3/Wa_ste - cyberia texture 5a x professed intention and real intention.mp3"
  },
  {
  	name: "xo - 200529-DuvetBoa8-absurd3bF",
		path: "/demo-mp3/xo - 200529-DuvetBoa8-absurd3bF.mp3"
  },
  {
  	name: "Yikii - Ancient Scanner",
  	path: "/demo-mp3/Yikii - Ancient Scanner.mp3"
  },
  {
  	name: "Yraki - Lights Down - PREMASTER24bit",
		path: "/demo-mp3/Yraki - Lights Down - PREMASTER24bit.mp3"
  },
  {
  	name: "Yumea Horiike - lain - 2022_05_18 23",
		path: "/demo-mp3/Yumea Horiike - lain - 2022_05_18 23.mp3"
  },
  {
  	name: "Yuting Wu - Help me to Breathe",
		path: "/demo-mp3/Yuting Wu - Help me to Breathe.mp3"
  },
]; 

////////////// entry page //////////////

// let entryPage = document.getElementById("entry-page")
// let entryTextsEl = document.getElementById("entry-texts")

// // let bgAudio = document.getElementById("bg-track")
// // let bgAudioToggle = document.getElementById("temp-bg-audio-toggle")
// // let hasBgAudio = false

// // bgAudioToggle.addEventListener("click", function(){
// // 	if (hasBgAudio) {bgAudio.pause(); hasBgAudio = false}
// // 	else {bgAudio.play(); hasBgAudio = true}
// // })

// let loadingTimer = setInterval(loadingText, 500)
// let loadingIndex = 0
// function loadingText()
// {
// 	if (loadingIndex < 3)
// 	{
// 		entryTextsEl.textContent += ".";
// 		loadingIndex++;
// 	}
// 	else 
// 		{
// 			entryTextsEl.textContent = "initialising";
// 			loadingIndex = 0;
// 		}
// }

// window.onload = function() {
// 	clearInterval(loadingTimer)
// 	entryTextsEl.textContent = "log in"

// 	entryPage.addEventListener("click", function(){
// 		entryPage.style.opacity = "0"
// 		if (audioContext.state === 'suspended') {audioContext.resume();}

// 		// bgAudio.load();
// 		// bgAudio.addEventListener("canplaythrough", function(){bgAudio.play();})
// 		// hasBgAudio = true;
// 		// bgAudio.volume = 0.2;

// 		//temppp 
// 		//setInterval(totalLengthTest, 5000);
// 	})

// 	entryPage.addEventListener('transitionend', function() {
// 		entryPage.parentNode.removeChild(entryPage)
// 	})
// }//end of onload


////////////// entry page //////////////

////////////// mini windows //////////////

let miniWindows = document.getElementsByClassName("mini-window")
let dockContainer = document.getElementById("dock-container")
let icons = dockContainer.getElementsByClassName("icon")
let movingWindow;
let cursorPos;
let offset = [0,0];
let isMoving = false;
let maxZ = 10;

console.log("mini windows count " + miniWindows.length + " icon count " + icons.length)

for (let i = 0; i < miniWindows.length; i++)
{
	let miniWindow = miniWindows.item(i)
	let icon = icons.item(i)
	let closeBtn = miniWindow.querySelector(".mini-window-close")
	console.log("mini windows " + miniWindows.item(i).id)

	//hide / show window n corresponding icon
	closeBtn.addEventListener("click", function(){
		miniWindow.style.display = "none"
		icon.style.display = "block"
	})
	icon.addEventListener("click", function(){
		if(miniWindow.id == "chat-window") miniWindow.style.display = "flex";
		else miniWindow.style.display = "block";
		miniWindow.style.zIndex = maxZ; maxZ++;
		icon.style.display = "none"
	})

	// click to bring to front
	miniWindow.addEventListener("click", function(){
		miniWindow.style.zIndex = maxZ; maxZ++;
	})

	//set drag 
	let draggable = miniWindow.querySelector(".mini-window-draggable")
	draggable.onmousedown = dragStart
	draggable.ontouchstart = dragStart

	// miniWindow.addEventListener("click", function(){
	// 	miniWindow.style.zIndex = "7"
	// })
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
  		{
  			movingWindow.style.zIndex = maxZ + "";
  			maxZ++;
  		}
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

////////////// mini windows //////////////


////////////// music player //////////////

let playPauseBtn = document.getElementById("old-play-pause-btn")
let volumeSlider = document.getElementById("volume-slider")
let progressBar = document.getElementById("progress-bar-container")
let progressFill = document.getElementById("progress-bar-fill")
let curTrackText = document.getElementById("cur-track-info")

//load a random song
let curIndex = Math.floor(Math.random() * trackList.length)
let curTrack = document.getElementById("cur-track")
let isPlaying = false
let progressTimer = null

let nowPlayingContainer = document.getElementById("now-playing-container")
let nowPlayingWrapper = document.getElementById("now-playing")
let nowPlayingText = document.getElementsByClassName("now-playing-marquee").item(0)
let nowPlayingStatic = document.getElementById("now-playing-static")
let changingVolumeText = document.getElementById("changing-volume")
let nowPlayingWidth
let isScrolling

let curTrackStateIcon = document.getElementById("cur-track-state") //play / pause icon
let curBitrate = document.getElementById("cur-track-bitrate") //192kbps 44khz //toggle inner html
let monoStereo = document.getElementById("mono-stereo") //toggle its opacity

let shuffleBtn = document.getElementById("shuffle-btn")
let isShuffle = false
let loopBtn = document.getElementById("loop-btn")

let miniTotalTime = document.getElementById("mini-total-time")
let miniCurTime = document.getElementById("mini-cur-time")
let totalTime = "69:09" //tempppp

let playlistUl = document.getElementById("playlist-content")

fillPlaylist(playlistUl);

function fillPlaylist(playlist)
{
	for (let i = 0; i < trackList.length; i++)
	{
		let li = document.createElement("li")
		li.className = "playlist-entry"
		li.textContent = (i + 1) + ". " + trackList[i].name 
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


////////////// old music player //////////////

let oldCurTimeEl = document.getElementById("old-cur-time")
let curTimeEl = document.getElementById("cur-time")
let oldTotalTimeEl = document.getElementById("old-total-time")

let wrapperClone
let playlistEntries = playlistUl.getElementsByClassName("playlist-entry")

///////initial state///////

loadTrack();
stopTrack(); //stop icon, no bitrate display

let loopIndex = 2 //0 no loop, 1 loop album, 2 loop one song
switchLoop() //no loop

progressBar.addEventListener("click", setProgress);

///////initial state///////

function loadTrack()
{
	if (progressTimer != null) 	{clearInterval(progressTimer)}
	curTrack.src = trackList[curIndex].path;
	curTrackText.textContent = "loading metadata..." //deletee

	setNowPlayingAnim(false)
	nowPlayingStatic.textContent = "loading metadata..."
	curBitrate.innerHTML = "192 KBPS 44.1 KHZ"
	monoStereo.style.opacity = "1"

	curTrack.load();
	progressTimer = setInterval(updateProgress, 1000);	
	
	//set playlist entry bg color 
	for (let i = 0; i < trackList.length; i++)
	{
		if (i === curIndex) playlistEntries.item(i).style.backgroundColor = "white";
		else playlistEntries.item(i).style.backgroundColor = "transparent";
	}
}

//curTrack.addEventListener("ended", nextTrack)

curTrack.onloadedmetadata = function() 
	{
		console.log("loaded track metadata " + trackList[curIndex].name)
		let timeStrings = parseTime(curTrack.duration)

		oldTotalTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;

		miniTotalTime.textContent = timeStrings.min + ":" + timeStrings.sec + " / " + totalTime
		curTrackText.textContent = trackList[curIndex].name	

		nowPlayingText.textContent = trackList[curIndex].name	+ " " + timeStrings.min + ":" + timeStrings.sec;
		//only scroll if track name + length is longer than the container 
		nowPlayingWidth = nowPlayingWrapper.offsetWidth
		isScrolling = nowPlayingWidth > nowPlayingContainer.offsetWidth
		if (!isScrolling) 
		{
			setNowPlayingAnim(false); //set the animated divs' opacity to 0
			nowPlayingStatic.textContent = trackList[curIndex].name	+ " " + timeStrings.min + ":" + timeStrings.sec;
		}
		else 
		{
			setNowPlayingAnim(true); 
			nowPlayingStatic.textContent = "";		
		}

		//console.log("nowPlayingWidth = " + nowPlayingWidth + ", nowPlayingContainer width = " + nowPlayingContainer.offsetWidth)

		//terminal 
		terminalDisplay.innerHTML += "now playing " + trackList[curIndex].name + "<br>"
		terminalTxtContainer.scrollTop = terminalTxtContainer.scrollHeight; 
	}

//test func. gets total length of album
// let testIndex = 0;
// let testTotalMin = 0;
// let testTotalSec = 0;
// function totalLengthTest()
// {
// 	if (testIndex < trackList.length)
// 	{
// 		curIndex = testIndex;
// 		loadTrack();

// 		curTrack.onloadedmetadata = function()
// 		{
// 			let minutes = Math.floor(curTrack.duration/60)
// 			let seconds = Math.round(curTrack.duration % 60)

// 			testTotalMin += minutes
// 			testTotalSec += seconds
// 			console.log("loaded track metadata at " + testIndex + ", length " + minutes + ":" + seconds)
// 			testIndex++;
// 		}
// 	}
// 	else console.log("total length " + testTotalMin + "min " + testTotalSec + "sec")
// }
//test func end

function parseTime(duration)
{
	let minutes = Math.floor(duration/60)
	let seconds = Math.round(duration % 60)
	let minString = (minutes < 10)? ("0" + minutes) : ("" + minutes);
	let secString = (seconds < 10)? ("0" + seconds) : ("" + seconds);

	return { 
     min: minString,
     sec: secString
   }; 
}

//playback controls
function playTrack()
{
	////temp. move this to entry page click event later 
	if (audioContext.state === 'suspended') {
		audioContext.resume();
	}
	//temp

	curTrack.play();
	isPlaying = true;
	curTrackStateIcon.src = "img/test-play.png"
	curBitrate.innerHTML = "192 KBPS 44.1 KHZ"
	monoStereo.style.opacity = "1"

	playPauseBtn.textContent = "pause";//to be deleted
}

function pauseTrack() 
{
	if (isPlaying) 
	{
		curTrack.pause();
		isPlaying = false;
		curTrackStateIcon.src = "img/test-pause.png"

		playPauseBtn.textContent = "play";//to be deleted
	}
}

function setNowPlayingAnim(playAnim)
{
	//if (wrapperClone)	wrapperClone = null;

	if (playAnim) //show the scrolling divs
	{
		nowPlayingWrapper.style.opacity = "1"
		nowPlayingText.style.opacity = "1"

		//todoo continuous scrolling text
		// wrapperClone = nowPlayingWrapper.cloneNode(true) //deep clone, clones its content 
		// nowPlayingContainer.appendChild(wrapperClone) 
		// wrapperClone.style.top = "0"

		// wrapperClone.style.animationDelay = "3.5s"
		// wrapperClone.getElementsByClassName("now-playing-marquee").item(0).style.animationDelay = "3.5s"

		// nowPlayingWrapper.style.animationDelay = "1.33s"
		// nowPlayingText.style.animationDelay = "1.33s"
	}
	else //show the static element
	{
		nowPlayingWrapper.style.opacity = "0"
		nowPlayingText.style.opacity = "0"
	}
}

function playOrPause()
{
	////temp. move this to entry page click event later 
	if (audioContext.state === 'suspended') {
		audioContext.resume();
	}
	//temp
	if (isPlaying) pauseTrack();
	else playTrack();
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
	if (isShuffle) // always play a random song 
	{
		curIndex = Math.floor(Math.random() * trackList.length);
	} 
	else 
	{
		if (loopIndex == 0) //no loop 
		{
			if (curIndex == (trackList.length - 1)) 
			{
				curTrack.addEventListener("ended", stopTrack);
				curTrack.removeEventListener("ended", nextTrack);
				return; //end at last song
			}
			else curIndex++;
		}
		else //loop album / loop song
		{
			curIndex < trackList.length - 1 ? curIndex += 1 : curIndex = 0;
		}
	}

	loadTrack();
	playTrack();
	updateProgress();
}

function stopTrack() 
{
	curTrack.pause();
	isPlaying = false;
	curTrack.currentTime = 0; 
	updateProgress();
	curTrackStateIcon.src = "img/test-stop.png";

	curBitrate.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;KBPS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KHZ"
	monoStereo.style.opacity = "0"
}

function toggleShuffle()
{
	if (isShuffle == false) 
	{
		isShuffle = true; shuffleBtn.textContent = "shuffle on"
	}
	else 
	{
		isShuffle = false; shuffleBtn.textContent = "shuffle off"
	}
}

function switchLoop() 
{
	if (loopIndex == 0) 
	{
		loopIndex++ // 1 loop album
		loopBtn.textContent = "loop album"
		curTrack.addEventListener("ended", nextTrack); //handled in nextTrack()
	}
	else if (loopIndex == 1) 
	{
		loopIndex++ // 2 loop song 
		loopBtn.textContent = "loop song"
		curTrack.removeEventListener("ended", nextTrack)
		curTrack.addEventListener("ended", loopSong)
	}
	else 
	{
		loopIndex = 0 // 0 no loop
		loopBtn.textContent = "no loop"
		curTrack.removeEventListener("ended", loopSong)
		curTrack.addEventListener("ended", nextTrack); //handled in nextTrack()
	}
}

function loopSong()
{
	curTrack.currentTime = 0;
	curTrack.play()
}

// function onBeforeSettingVolume()
// {
// 	console.log("onBeforeSettingVolume")
// }

function setVolume()
{
	changingVolumeText.style.opacity = "1"
	changingVolumeText.textContent = "volume: " + Math.round(curTrack.volume * 10) / 10

	curTrack.volume = volumeSlider.value / volumeSlider.max;
	if (isScrolling) setNowPlayingAnim(false);
	else nowPlayingStatic.style.opacity = "0";
}

function onFinishSettingVolume()
{
	changingVolumeText.style.opacity = "0"
	changingVolumeText.textContent = ""

	if (isScrolling) setNowPlayingAnim(true);
	else nowPlayingStatic.style.opacity = "1";
}

//progress bar
function updateProgress()
{
	let progress = curTrack.currentTime / curTrack.duration;
	progressFill.style.width = progress * progressBar.offsetWidth + "px";

	//set time
	let timeStrings = parseTime(curTrack.currentTime)
	oldCurTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;

	curTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;
	miniCurTime.textContent = timeStrings.min + ":" + timeStrings.sec;
	//console.log("updated progress, progress = " + progress + ", width = " + progressFill.style.width)
}

function setProgress(el)
{
	let jumpTo = curTrack.duration * (el.offsetX / progressBar.offsetWidth);
	curTrack.currentTime = jumpTo;
	updateProgress()
	console.log("set progress: el.offsetX  = " + el.offsetX + ", curTrack.duration = " + curTrack.duration + ", max width = " + progressBar.offsetWidth + ", jumpTo = " + jumpTo)
}

let oldPlaylist = document.getElementById("old-playlist-content")
fillPlaylist(oldPlaylist);
////////////// old music player //////////////


////////////// terminal //////////////

let terminalTxtContainer = document.getElementById("terminal-txt-container")
let terminalDisplay = document.getElementById("terminal-display") //pre
let fakeCaret = document.getElementById("fake-caret")
let inputEl = document.getElementById("terminal-input")
let initialIndent = 111 //need to get from element tbh
let fontWidth = 8 //subject to changee
let caretOffest
inputEl.onkeydown = validateInput

function validateInput(e)
{	
	let letters = /^[a-zA-Z\d\s]*$/;
	
	let inputLength = (e.key == "Backspace")? (inputEl.value.length - 1) : (inputEl.value.length + 1);
	if(inputLength < 0) inputLength = 0;
	caretOffest =  inputLength * fontWidth + initialIndent
	fakeCaret.style.marginLeft = caretOffest + "px"

	//console.log(e)
	//console.log("input length " + inputLength + " caret offest" + caretOffest)

	if (e.key == "Enter")
	{
		if (inputEl.value.match(letters))	
		{
			terminalDisplay.innerHTML += "lain@navi ~ % " + inputEl.value + "</br>";	
			checkCommand(inputEl.value);
		}
		else //invalid input
		{
			terminalDisplay.innerHTML += "invalid input (´;ω;`) letters, numbers, and spaces only pls</br>";
		}
		inputEl.value = "";
		fakeCaret.style.marginLeft = initialIndent + "px";
		caretOffest = 0;
		//auto scrolls to the bottom
		terminalTxtContainer.scrollTop = terminalTxtContainer.scrollHeight; 
	}
}

let helpText = "¸„ø¤º°¨°º¤ø„¸¸„ø¤º°¨°º¤ø„¸„ø¤º°¨°º¤ø„¸<br>available commands:<br><br>playback control<br>&emsp;&emsp;play &emsp;&emsp; play the currently loaded song <br>&emsp;&emsp;pause <br>&emsp;&emsp;next <br>&emsp;&emsp;prev <br>&emsp;&emsp;random &nbsp;play a random song<br><br>audio filters<br>&emsp;&emsp;toilet &nbsp;pay a visit to the toilet<br>&emsp;&emsp;leave &nbsp; clear all audio filters<br>¨°º¤ø„¸¸„ø¤º°¨°º¤ø„¸„ø¤º°¨°º¤ø„¸¸„ø¤º°¨<br>"
function checkCommand(input) 
{
	switch (input.trim().toLowerCase()) 
	{
		case "play": playTrack(); break;
		case "pause": pauseTrack(); break;
		case "next": nextTrack(); break;
		case "prev": prevTrack(); break;
		case "random": 
			curIndex = Math.floor(Math.random() * trackList.length);
			loadTrack(); playTrack();
			break;

		case "help": terminalDisplay.innerHTML += helpText; break;

		//filter presets//
		case "toilet": gotoToilet(); break;
		case "leave": clearFilters(); break;

		default: terminalDisplay.innerHTML += "idk that word!</br>"
	}

}

////////////// terminal //////////////


//////temppppp switch  view
let tempToggle = document.getElementById("temp-toggle")
let oldPlayerContainer = document.getElementById("old-player-container")
let playlistEl = document.getElementById("old-playlist-container")
let playlistToggle = document.getElementById("pl-toggle")

let showingOldUI = false
tempToggle.addEventListener("click", function(){
	if (showingOldUI)
	{
		document.body.style.backgroundImage = 'url("img/lain_extended_m.png")'
		oldPlayerContainer.style.display = "none"
		playlistEl.style.display = "none"
		dockContainer.style.display = "flex"
		for (let i = 0; i < miniWindows.length; i++)
		{
			miniWindows.item(i).style.display = "block"
			if(miniWindows.item(i).id == "chat-window") miniWindows.item(i).style.display = "flex"
		}
		showingOldUI = false
	}
	else 
	{
		document.body.style.backgroundImage = "none"
		oldPlayerContainer.style.display = "block"
		dockContainer.style.display = "none"
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
let qSlider = document.getElementById("q-slider")
let qEl = document.getElementById("cur-q")

let reverbToggle = document.getElementById("reverb-toggle")
let reverbDurationSlider = document.getElementById("reverb-duration")
let reverbDecaySlider = document.getElementById("reverb-decay")

let reverbDurationText = document.getElementById("cur-reverb-duration")
let reverbDecayText = document.getElementById("cur-reverb-decay")

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
		biquadFilter.gain.setValueAtTime(gainSlider.value, audioContext.currentTime)
		biquadFilter.frequency.setValueAtTime(frequencySlider.value, audioContext.currentTime)
		biquadFilter.Q.setValueAtTime(qSlider.value, audioContext.currentTime)
		if (hasReverb)
		{
			convolver.disconnect()
			source.connect(convolver).connect(biquadFilter).connect(audioContext.destination)
		}
		else 
		{	
			source.connect(biquadFilter).connect(audioContext.destination)
		}
		frequencyEl.style.color = "black";
		gainEl.style.color = "black";
		qEl.style.color = "black"
		console.log(biquadIndex + ", biquad type = " + biquadTypes[biquadIndex - 1] + "frequency  = " + biquadFilter.frequency)
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
		qEl.style.color = "grey"
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
	//biquadFilter.gain.setValueAtTime(gainSlider.value, audioContext.currentTime);
	gainEl.textContent = "gain: " + gainSlider.value
}

function setQ()
{
	biquadFilter.Q.value = qSlider.value
	qEl.textContent = "Q factor: " + qSlider.value
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
		reverbDurationText.style.color = "black"
		reverbDecayText.style.color = "black"
		hasReverb = true
	}
}

////////////// end of audio filter //////////////


////////////// audio filter presets //////////////

//todo crossfade 
function switchFilter(bqdIndex = 0, bqdFrequency = 1000, bqdGain = 25, bqdQ = 1, hasRvrb, rvrbbDuration, rvrbDecay)
{
	// switchBiquad(bqdIndex);
	// biquadFilter.frequency.value = bqdFrequency;
	// biquadFilter.gain.value = bqdGain;
	// biquadFilter.Q.value = bqdQ;
}

//test 
function gotoToilet()
{
	volumeSlider.disabled = true
	let initialVolume = curTrack.volume

	let fadeOut = setInterval(function(){
		if (curTrack.volume > 0.05)
		//gradually decrease volume 
		{
			curTrack.volume -= 0.05
			console.log("fading out, current volume " + curTrack.volume)
		}	
		else 
		//set filter and gradually increase volume 
		{
			clearInterval(fadeOut);

			//switch filter 
			switchBiquad(4)
			biquadFilter.gain.setValueAtTime(40, audioContext.currentTime)
			//switch filter end 

			//fade in
			let fadeIn = setInterval(function(){
				if (curTrack.volume < initialVolume)
				{
					curTrack.volume += 0.05
					console.log("fading in, current volume " + curTrack.volume)
				}
				else 
				{
					clearInterval(fadeIn)
					volumeSlider.disabled = false
				}
			}
			, 50)
		}
	}
	, 50)
}

//todo write a general func for fade in / fade out
function clearFilters()
{
	volumeSlider.disabled = true
	let initialVolume = curTrack.volume

	let fadeOut = setInterval(function(){
	if (curTrack.volume > 0.05)
	//gradually decrease volume 
	{
		curTrack.volume -= 0.05
		console.log("fading out, current volume " + curTrack.volume)
	}	
	else 
	//set filter and gradually increase volume 
	{
		clearInterval(fadeOut);

		if (hasReverb) toggleReverb();
		switchBiquad(0);

		//fade in
		let fadeIn = setInterval(function(){
			if (curTrack.volume < initialVolume)
			{
				curTrack.volume += 0.05
				console.log("fading in, current volume " + curTrack.volume)
			}
			else 
			{
				clearInterval(fadeIn)
				volumeSlider.disabled = false
			}
		}
		, 50)
	}
}
, 50)
}

////////////// audio filter presets //////////////

