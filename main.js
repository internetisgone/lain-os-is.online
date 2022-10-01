const trackList = [
  {
	name: "afalfl - just some kick noyze",
	path: "/21sept-master-mp3/afalfl - just some kick noyze [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Fetus - Footprints",
	path: "/21sept-master-mp3/Fetus - Footprints [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "GRASPS X NERDIE - I AM HURTING",
	path: "/21sept-master-mp3/GRASPS X NERDIE - I AM HURTING [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Imryll - Family Portrait (Imryll Reimagined)",
	path: "/21sept-master-mp3/Imryll - Family Portrait (Imryll Reimagined) [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Jennifer Walton - At Last, Lain Is Free",
	path: "/21sept-master-mp3/Jennifer Walton - At Last, Lain Is Free [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Kagami Smile -  Acts of Betrayal",
	path: "/21sept-master-mp3/Kagami Smile -  Acts of Betrayal [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "lovefear - SEL compilation track final",
  	path: "/21sept-master-mp3/lovefear - SEL compilation track final  [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Nerve - I_m Gonna Diss You",
  	path: "/21sept-master-mp3/Nerve - I_m Gonna Diss You [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Sour Gout - Transmigration",
	path: "/21sept-master-mp3/Sour Gout - Transmigration [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "thegn ft. vrain - phantoma",
	path: "/21sept-master-mp3/thegn ft. vrain - phantoma [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Wa_ste - cyberia texture 5a x professed intention and real intention",
	path: "/21sept-master-mp3/Wa_ste - cyberia texture 5a x professed intention and real intention [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "xo - 200529-DuvetBoa8",
	path: "/21sept-master-mp3/xo - 200529-DuvetBoa8  [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Yikii - Ancient Scanner",
  	path: "/21sept-master-mp3/Yikii - Ancient Scanner [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Yraki - Lights Down",
	path: "/21sept-master-mp3/Yraki - Lights Down [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Yumea Horiike - lain",
	path: "/21sept-master-mp3/Yumea Horiike - lain [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
  {
  	name: "Yuting Wu - Help me to Breathe",
	path: "/21sept-master-mp3/Yuting Wu - Help me to Breathe [master 20220921].mp3",
	linkName: "artist link",
	link: "credits.html"
  },
]; 

//entry page texts
const entryInitString = "initialising";
const entryOnloadString = "log in";
const entryBottomString = "public domain operating system"

//music player texts
const bitrateStereoString = "320 KBPS 44.1 KHZ";  
const bitrateStereoPlaceholder = "&nbsp;&nbsp;&nbsp;&nbsp;KBPS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KHZ"
const loadingTrackString = "loading metadata..."; 
const totalTime = "68:21" //calculated with totalLengthTest() in onload()

//terminal texts
const invalidInputString = "idk that word!"

//initial audio node params
//gain node
const initialGain = 0.77;
let currentFilter = 0 // filter preset index in filterPresetsArray. 0 means none

// colors
let plEntryBgColor = "rgba(255, 255, 255, 0.7)" //bg highlight color for current song in playlist

//bg color #e1e4eb

//media queries
let isLandscape = window.matchMedia("(min-aspect-ratio: 4/3)").matches

////////////// entry page //////////////

// let entryPage = document.getElementById("entry-page")
// let entryTextsEl = document.getElementById("entry-texts")
// let entryBottomTexts = document.getElementById("entry-bottom-text")

// // let bgAudio = document.getElementById("bg-track")
// // let bgAudioToggle = document.getElementById("temp-bg-audio-toggle")
// // let hasBgAudio = false

// // bgAudioToggle.addEventListener("click", function(){
// // 	if (hasBgAudio) {bgAudio.pause(); hasBgAudio = false}
// // 	else {bgAudio.play(); hasBgAudio = true}
// // })

// // manually center the loading text so its position is fixed while adding the "..."
// let initialLeft = entryTextsEl.parentElement.offsetWidth/2 - entryTextsEl.offsetWidth/2
// entryTextsEl.style.left = initialLeft + "px"
// let loadingTimer = setInterval(loadingText, 777)
// let loadingIndex = 0

// function loadingText()
// {
// 	if (loadingIndex < 3)
// 	{
// 		entryTextsEl.textContent += ".";
// 		loadingIndex++;
// 	}
// 	else 
// 	{
// 		entryTextsEl.textContent = entryInitString;
// 		loadingIndex = 0;
// 	}
// }

// //unicode chars 33-122, 161-404. see getUnicodeChars() in utilities
// let chars = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","­","®","¯","°","±","²","³","´","µ","¶","·","¸","¹","º","»","¼","½","¾","¿","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","×","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","÷","ø","ù","ú","û","ü","ý","þ","ÿ","Ā","ā","Ă","ă","Ą","ą","Ć","ć","Ĉ","ĉ","Ċ","ċ","Č","č","Ď","ď","Đ","đ","Ē","ē","Ĕ","ĕ","Ė","ė","Ę","ę","Ě","ě","Ĝ","ĝ","Ğ","ğ","Ġ","ġ","Ģ","ģ","Ĥ","ĥ","Ħ","ħ","Ĩ","ĩ","Ī","ī","Ĭ","ĭ","Į","į","İ","ı","Ĳ","ĳ","Ĵ","ĵ","Ķ","ķ","ĸ","Ĺ","ĺ","Ļ","ļ","Ľ","ľ","Ŀ","ŀ","Ł","ł","Ń","ń","Ņ","ņ","Ň","ň","ŉ","Ŋ","ŋ","Ō","ō","Ŏ","ŏ","Ő","ő","Œ","œ","Ŕ","ŕ","Ŗ","ŗ","Ř","ř","Ś","ś","Ŝ","ŝ","Ş","ş","Š","š","Ţ","ţ","Ť","ť","Ŧ","ŧ","Ũ","ũ","Ū","ū","Ŭ","ŭ","Ů","ů","Ű","ű","Ų","ų","Ŵ","ŵ","Ŷ","ŷ","Ÿ","Ź","ź","Ż","ż","Ž","ž","ſ","ƀ","Ɓ","Ƃ","ƃ","Ƅ","ƅ","Ɔ","Ƈ","ƈ","Ɖ","Ɗ","Ƌ","ƌ","ƍ","Ǝ","Ə","Ɛ","Ƒ","ƒ","Ɠ","Ɣ"]
// let BottomTextLength = 33
// let bottomTextTimer = setInterval(scrambleBottomText, 100)

// function scrambleBottomText()
// {
// 	entryBottomTexts.textContent = ""
// 	for (let i = 0; i < BottomTextLength; i++)
// 	{
// 		randIndex = Math.round(Math.random() * chars.length)
// 		entryBottomTexts.textContent += chars[randIndex]
// 	}
// }

// window.onload = function() {
// 	clearInterval(loadingTimer)
// 	clearInterval(bottomTextTimer)

// 	entryTextsEl.parentElement.style.display = "flex"
// 	entryTextsEl.parentElement.style.justifyContent = "center"
// 	entryTextsEl.style.left = "auto"

// 	entryTextsEl.textContent = entryOnloadString
// 	entryBottomTexts.style.fontFamily = "LoveLetter"
// 	entryBottomTexts.textContent = entryBottomString

// 	entryPage.addEventListener("click", function(){
// 		entryPage.style.opacity = "0"
// 		if (audioContext.state === 'suspended') {audioContext.resume();}

// 		// bgAudio.load();
// 		// bgAudio.addEventListener("canplaythrough", function(){bgAudio.play();})
// 		// hasBgAudio = true;
// 		// bgAudio.volume = 0.2;

// 		//setInterval(totalLengthTest, 3000);
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

//mini wondows closing animation
const closeAnimation = [
	//display the whole window
	{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"}, 

	{clipPath: "polygon(0% 0%, 0% 70%, 100% 70%, 100% 0%)", opacity: "1"},
	{clipPath: "polygon(0% 0%, 0% 20%, 100% 20%, 100% 0%)", transform: "translate(0%, 0%)", opacity: "0.8"},

	//display the top 5% rect area of window, shift left (landscape) or down (portrait)
	{clipPath: "polygon(0% 0%, 0% 5%, 100% 5%, 100% 0%)", 
	transform: isLandscape? ("translate(-20%, 10%)"):("translate(0%, 40%)"), 
	opacity: "0.3"}    
]
const closeAnimDuration = 333 //ms
const closeTiming = {duration: closeAnimDuration, iterations: 1}
//const windowAnimationArr = new Array()

console.log("mini windows count " + miniWindows.length + " icon count " + icons.length)

for (let i = 0; i < miniWindows.length; i++)
{
	let miniWindow = miniWindows.item(i)
	let icon = icons.item(i)
	let closeBtn = miniWindow.querySelector(".mini-window-close")
	console.log("mini windows " + miniWindows.item(i).id)

	let closeCurWindow = miniWindow.animate(closeAnimation, closeTiming)
	closeCurWindow.pause()
	//windowAnimationArr.push(closeCurWindow)

	//hide / show window n corresponding icon
	// todo animation only plays once in safari
	closeBtn.addEventListener("click", function(){
		//windowAnimationArr[i].play(); 
		closeCurWindow.play()
		
		//hide window n show icon when the animation finishes 
		setTimeout(() => {
			miniWindow.style.display = "none"
			icon.style.display = "block"
		}, closeAnimDuration * 0.95);
	})
	icon.addEventListener("click", function(){
		miniWindow.style.zIndex = maxZ; maxZ++;

		//open animation??
		// windowAnimationArr[i].reverse()
		// windowAnimationArr[i].play(); 

		setTimeout(() => {
			if(miniWindow.id == "chat-window") miniWindow.style.display = "flex";
			else miniWindow.style.display = "block";
		
			icon.style.display = "none"
		}, closeAnimDuration);
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
		//console.log("touch event")
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

  // use document instead of movingWindow so drag continues even when cursor / touch pos leaves the movingWindow
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



////////////// terminal //////////////

let terminalTxtContainer = document.getElementById("terminal-txt-container")
let terminalDisplay = document.getElementById("terminal-display") //pre
let fakeCaret = document.getElementById("fake-caret")
let inputEl = document.getElementById("terminal-input")

let initialIndent = 111 //need to get from element tbh
let fontWidth = 8 //subject to changee
let caretOffest

let inputPattern = /^[a-zA-Z\d\s]*$/; //letters, digits, and whitespace
let invalidCount = 0 //todo
inputEl.onkeydown = validateInput

function validateInput(e)
{	
	let inputLength = (e.key == "Backspace")? (inputEl.value.length - 1) : (inputEl.value.length + 1);
	if (inputLength < 0) inputLength = 0;
	caretOffest =  inputLength * fontWidth + initialIndent
	fakeCaret.style.marginLeft = caretOffest + "px"

	//console.log(e)
	//console.log("input length " + inputLength + " caret offest" + caretOffest)

	if (e.key == "Enter")
	{
		terminalDisplay.innerHTML += "lain@navi ~ % " + inputEl.value + "</br>";
		//easter egg
		if (inputEl.value.toLowerCase().includes("lain"))
		{
			terminalDisplay.innerHTML += "let's all love lain (づ◡﹏◡)づ</br>"; //todo add more lines n choose one at random
		}
		//valid input
		else if (inputEl.value.match(inputPattern))	
		{
			checkCommand(inputEl.value);
		}
		else //invalid input
		{
			//terminalDisplay.innerHTML += "invalid input (´;ω;`) letters, numbers, and spaces only pls</br>";
			terminalDisplay.innerHTML += invalidInputString + "<br>"
		}
		inputEl.value = "";
		fakeCaret.style.marginLeft = initialIndent + "px";
		caretOffest = 0;
		//auto scrolls to the bottom
		terminalTxtContainer.scrollTop = terminalTxtContainer.scrollHeight; 
	}
}

terminalTxtContainer.onscroll = function()
{
	//prevent scrolling past the ascii art. since the ascii art is scaled down there's blank space above it
	if (terminalTxtContainer.scrollTop < 580) terminalTxtContainer.scrollTop = 580;
	//console.log("terminal scroll pos " + terminalTxtContainer.scrollTop + ", scroll height = " + terminalTxtContainer.scrollHeight)
}

//for non user input 
function appendTerminalOutput(output) 
{
	terminalDisplay.innerHTML += output + "<br>";
	terminalTxtContainer.scrollTop = terminalTxtContainer.scrollHeight; 
}

let helpText = "¸„ø¤º°¨°º¤ø„¸¸„ø¤º°¨°º¤ø„¸„ø¤º°¨°º¤ø„¸<br><br>available commands:<br><br>"
							+ "playback controls<br>"
							+ "&emsp;&emsp;<span style='color:lime'>play </span> &emsp;&emsp; play the currently loaded song<br>"
							+ "&emsp;&emsp;<span style='color:lime'>pause </span><br>"
							+ "&emsp;&emsp;<span style='color:lime'>stop </span><br>"
							+ "&emsp;&emsp;<span style='color:lime'>prev </span><br>"
							+ "&emsp;&emsp;<span style='color:lime'>next </span><br>"
							+ "&emsp;&emsp;<span style='color:lime'>random </span>&nbsp;play a random song<br><br>"
							+ "audio filters<br>"
							+ "&emsp;&emsp;<span style='color:lime'>toilet </span>&nbsp;test filter 1 (pay a visit to the toilet)<br>"
							+ "&emsp;&emsp;<span style='color:lime'>test2 </span>&nbsp;&nbsp;test filter 2<br>"
							+ "&emsp;&emsp;<span style='color:lime'>test3 </span>&nbsp;&nbsp;test filter 3<br>"
							+ "&emsp;&emsp;<span style='color:lime'>leave </span>&nbsp; clear all audio filters<br><br>"
							+ "¨°º¤ø„¸¸„ø¤º°¨°º¤ø„¸„ø¤º°¨°º¤ø„¸¸„ø¤º°¨<br>"
function checkCommand(input) 
{
	switch (input.trim().toLowerCase()) 
	{
		//playback
		case "play": playTrack(); break;
		case "pause": pauseTrack(); break;
		case "stop": stopTrack(); break;
		case "prev": prevTrack(); break;
		case "next": nextTrack(); break;
		case "random": 
			curIndex = Math.round(Math.random() * (trackList.length - 1));
			loadTrack(); playTrack();
			break;

		case "help": terminalDisplay.innerHTML += helpText; break;

		//filters
		case "leave": applyFilter(0); break;
		case "toilet": applyFilter(1); break;
		case "test2": applyFilter(2); break;
		case "test3": applyFilter(3); break;

		default: terminalDisplay.innerHTML += invalidInputString + "</br>"
	}
}

////////////// terminal //////////////


////////////// music player //////////////

let playPauseBtn = document.getElementById("old-play-pause-btn")
let volumeSlider = document.getElementById("volume-slider")

let progressBar = document.getElementById("progress-bar-container")
let oldProgressBar = document.getElementById("old-progress-bar-container")
let progressFill = document.getElementById("old-progress-bar-fill")
let curTrackText = document.getElementById("cur-track-info")

//load a random song
let curIndex = Math.round(Math.random() * (trackList.length - 1))
let curTrack = document.getElementById("cur-track")
let isPlaying = false
let progressTimer = null

let nowPlayingContainer = document.getElementById("now-playing-container")
let nowPlayingWrapper = document.getElementById("now-playing")
let nowPlayingText = document.getElementById("now-playing-marquee")
let nowPlayingStatic = document.getElementById("now-playing-static")
let changingVolumeText = document.getElementById("changing-volume")
let nowPlayingWidth
let isScrolling

let curTrackStateIcon = document.getElementById("cur-track-state") //play / pause icon
let curBitrate = document.getElementById("cur-track-bitrate") //320kbps 44khz //toggle inner html
let monoStereo = document.getElementById("mono-stereo") //toggle its opacity

let shuffleBtn = document.getElementById("shuffle-btn")
let isShuffle = false
let loopBtn = document.getElementById("loop-btn")

let miniTotalTime = document.getElementById("mini-total-time")
let miniCurTime = document.getElementById("mini-cur-time")

//visualiserr
let visualiserCanvas = document.getElementById("visualiser")
let canvasContext = visualiserCanvas.getContext("2d")
canvasContext.fillStyle = "black"

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

//function initAudio()
loadTrack();
stopTrack(); //stop icon, no bitrate display

let loopIndex = 2 //0 no loop, 1 loop album, 2 loop one song
switchLoop() //no loop 

//todo new progress barrrr
//progressBar.addEventListener("click", setProgress)
oldProgressBar.addEventListener("click", setProgress);

///////initial state///////

function loadTrack()
{
	if (progressTimer != null) 	{clearInterval(progressTimer)}
	curTrack.src = trackList[curIndex].path;
	curTrackText.textContent = loadingTrackString //old music player

	setNowPlayingAnim(false)
	nowPlayingStatic.textContent = loadingTrackString
	curBitrate.innerHTML = bitrateStereoString
	monoStereo.style.opacity = "1"

	curTrack.load();
	progressTimer = setInterval(updateProgress, 1000);	
	
	//set playlist entry bg color 
	for (let i = 0; i < trackList.length; i++)
	{
		if (i === curIndex) playlistEntries.item(i).style.backgroundColor = plEntryBgColor;
		else playlistEntries.item(i).style.backgroundColor = "transparent";
	}
}

//curTrack.addEventListener("ended", nextTrack)

let artistLink = document.getElementById("artist-link-container").querySelector("a")

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

		appendTerminalOutput("now playing " + trackList[curIndex].name)

		artistLink.querySelector("p").textContent = trackList[curIndex].linkName
		artistLink.href = trackList[curIndex].link 
	}

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
	curBitrate.innerHTML = bitrateStereoString
	monoStereo.style.opacity = "1"

	//visualiser
	drawFrame()

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
	if (wrapperClone)	
	{
		nowPlayingContainer.removeChild(wrapperClone)
		wrapperClone = null;
	}

	if (playAnim) //show the scrolling divs
	{
		nowPlayingWrapper.style.opacity = "1"
		nowPlayingText.style.opacity = "1"

		//todoo continuous scrolling text
		// wrapperClone = nowPlayingWrapper.cloneNode(true) //deep clone, clones its content 
		// wrapperClone.id = "now-playing-clone"
		// wrapperClone.children.item(0).id = "now-playing-marquee-clone"
				
		// nowPlayingContainer.appendChild(wrapperClone) 
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
		curIndex = Math.round(Math.random() * (trackList.length - 1));
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

	curBitrate.innerHTML = bitrateStereoPlaceholder
	monoStereo.style.opacity = "0"
	
	requestAnimationFrame(function() {
		canvasContext.clearRect(0, 0, visualiserCanvas.width, visualiserCanvas.height)
	})
}

function toggleShuffle()
{
	if (isShuffle == false) 
	{
		isShuffle = true; appendTerminalOutput("shuffle on")
	}
	else 
	{
		isShuffle = false; appendTerminalOutput("shuffle off")
	}
}

function switchLoop() 
{
	if (loopIndex == 0) 
	{
		loopIndex++ // 1 loop album
		appendTerminalOutput("loop album")
		curTrack.addEventListener("ended", nextTrack); //handled in nextTrack()
	}
	else if (loopIndex == 1) 
	{
		loopIndex++ // 2 loop song 
		appendTerminalOutput("loop song")
		curTrack.removeEventListener("ended", nextTrack)
		curTrack.addEventListener("ended", loopSong)
	}
	else 
	{
		loopIndex = 0 // 0 no loop
		appendTerminalOutput("loop off")
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
	changingVolumeText.textContent = "volume: " + Math.round(gainNode.gain.value * 10) / 10

	//set the gain instead of curTrack.volume otherwise volume can't be changed in safari (this is a konwn bug)
	gainNode.gain.setValueAtTime((volumeSlider.value / volumeSlider.max), audioContext.currentTime);
	if (isScrolling)  setNowPlayingAnim(false);
	else  			  nowPlayingStatic.style.opacity = "0";

	//in case it gets stuck
	setTimeout(onFinishSettingVolume, "2000")
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
	progressFill.style.width = progress * oldProgressBar.offsetWidth + "px";

	//set time
	let timeStrings = parseTime(curTrack.currentTime)
	oldCurTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;

	curTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;
	miniCurTime.textContent = timeStrings.min + ":" + timeStrings.sec;
	//console.log("updated progress, progress = " + progress + ", width = " + progressFill.style.width)
}

function setProgress(el)
{
	let jumpTo = curTrack.duration * (el.offsetX / oldProgressBar.offsetWidth);
	curTrack.currentTime = jumpTo;
	updateProgress()
	console.log("progressss " + el)
	console.log("set progress: el.offsetX  = " + el.offsetX + ", curTrack.duration = " + curTrack.duration + ", max width = " + oldProgressBar.offsetWidth + ", jumpTo = " + jumpTo)
}

let oldPlaylist = document.getElementById("old-playlist-content")
fillPlaylist(oldPlaylist);
////////////// old music player //////////////

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
let detuneSlider = document.getElementById("detune-slider")
let detuneEl = document.getElementById("cur-detine")

let reverbToggle = document.getElementById("reverb-toggle")
let reverbDurationSlider = document.getElementById("reverb-duration")
let reverbDecaySlider = document.getElementById("reverb-decay")

let reverbDurationText = document.getElementById("cur-reverb-duration")
let reverbDecayText = document.getElementById("cur-reverb-decay")

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const biquadFilter = new BiquadFilterNode(audioContext, {frequency:1000});
let impulse = impulseResponse(reverbDurationSlider.value, reverbDecaySlider.value)
const convolver = new ConvolverNode(audioContext, {buffer:impulse})
const gainNode = new GainNode(audioContext, {gain:initialGain}) 

/////// frequency visualiser ///////
const analyser = new AnalyserNode(audioContext, {
													fftSize: 32,
													// maxDecibels: -25,
													// minDecibels: -60,
													smoothingTimeConstant: 0.7
												})

let bufferLength = analyser.frequencyBinCount
let frequencyData = new Uint8Array(bufferLength)
let barGap = 1
let barWidth = visualiserCanvas.width / bufferLength - barGap

// console.log("barWidth " + barWidth)

function drawFrame()
{
	if (isPlaying) requestAnimationFrame(drawFrame);

	analyser.getByteFrequencyData(frequencyData)
	//console.log("analyserrr bin count " + analyser.frequencyBinCount + ", data " + frequencyData)

	canvasContext.clearRect(0, 0, visualiserCanvas.width, visualiserCanvas.height)
	let x = 0
	for (let i = 0; i < bufferLength; i++)
	{
		let barHeight = frequencyData[i] / 2.5;
		//console.log("index = " + i + ", x = " + x + ", bar height " + barHeight)
		canvasContext.fillRect(x, visualiserCanvas.height - barHeight, barWidth, barHeight)

		x += barWidth + barGap
	}
}

/////// frequency visualiser end ///////


let biquadIndex = 0
let biquadTypes = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]
let hasReverb = false

let source = audioContext.createMediaElementSource(curTrack);
source.connect(gainNode).connect(analyser).connect(audioContext.destination)

biquadSelectionEl.addEventListener("change", function(){switchBiquad(biquadSelectionEl.value);}) 

function impulseResponse(duration, decay)
{
	var length = audioContext.sampleRate * duration
	var impulse = audioContext.createBuffer(2, length, audioContext.sampleRate)
	var IR0 = impulse.getChannelData(0)
	var IR1 = impulse.getChannelData(1)
	for (var i = 0; i < length; i++) 
	{
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
		biquadFilter.detune.setValueAtTime(detuneSlider.value, audioContext.currentTime)
		if (hasReverb)
		{
			// convolver.buffer = null;
			// convolver.disconnect();
			source.connect(convolver).connect(biquadFilter).connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{	
			source.connect(biquadFilter).connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		frequencyEl.style.color = "black";
		gainEl.style.color = "black";
		qEl.style.color = "black";
		detuneEl.style.color = "black";
		console.log(biquadIndex + ", biquad type = " + biquadTypes[biquadIndex - 1] + "frequency  = " + biquadFilter.frequency)
	}
	else //turn off biquad 
	{
		biquadFilter.disconnect()
		if (hasReverb)
		{
			source.connect(convolver).connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{
			source.connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		frequencyEl.style.color = "grey";
		gainEl.style.color = "grey";
		qEl.style.color = "grey"
		detuneEl.style.color = "grey";
		console.log("biquad index " + biquadIndex + ", biquad type = none") 
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

function setDetune()
{
	biquadFilter.detune.value = detuneSlider.value;
	detuneEl.textContent = "detune: " + detuneSlider.value;
}

function setReverb() 
{
	reverbDurationText.textContent = "duration :" + reverbDurationSlider.value
	reverbDecayText.textContent = "decay: " + reverbDecaySlider.value
	impulse = impulseResponse(reverbDurationSlider.value, reverbDecaySlider.value)
	convolver.buffer = impulse
}

function toggleReverb() //to be deleted
{
	if (hasReverb)
	{
		convolver.disconnect()
		convolver.buffer = null
		reverbToggle.textContent = "turn on reverb "
		reverbDurationText.style.color = "grey"
		reverbDecayText.style.color = "grey"
		hasReverb = false
	}
	else 
	{
		setReverb();
		if (biquadIndex > 0) 
		{
			source.connect(convolver).connect(biquadFilter).connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{
			source.connect(convolver).connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		reverbToggle.textContent = "turn off reverb"
		reverbDurationText.style.color = "black"
		reverbDecayText.style.color = "black"
		hasReverb = true
	}
}

function turnOffReverb()
{
	if (hasReverb)
	{
		convolver.buffer = null;
		convolver.disconnect();
		hasReverb = false;
	}
}

function turnOnReverb()
{
	if (!hasReverb)
	{	
		if (biquadIndex > 0) 
		{
			source.connect(convolver).connect(biquadFilter).connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{
			source.connect(convolver).connect(gainNode).connect(analyser).connect(audioContext.destination)
		}
		hasReverb = true
	}
}

// function clearReverbBuffer()
// {
// }

////////////// end of audio filter //////////////


////////////// audio filter presets //////////////

const crossfadeGainDelta = 0.05;
const crossfadeStep = 20; //in ms

function clearAllFilters()
{
	turnOffReverb();
    switchBiquad(0);
}

function gotoToilet() //test filter 1
{
	//lowshelf
	switchBiquad(4);
	biquadFilter.gain.value = 40;
}

function TestFilter2()
//lowpass + reverb
{
	switchBiquad(1); //["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]
	// biquadFilter.frequency.value = 1000;
	// biquadFilter.gain.value = 20;
	// biquadFilter.Q.value = 1;
	
	turnOffReverb(); //clear convolver buffer 
	impulse = impulseResponse(100, 15) //duration, decay
	convolver.buffer = impulse
	turnOnReverb();
}

function TestFilter3()
//reverb
{
	switchBiquad(0);

	turnOffReverb(); //clear convolver buffer 
	impulse = impulseResponse(100, 15) //duration, decay
	convolver.buffer = impulse
	turnOnReverb();
}

let filterPresetsArray = [
	clearAllFilters, 
	gotoToilet,
	TestFilter2, 
	TestFilter3]

function applyFilter(index)
{
	volumeSlider.disabled = true;
	let initialVolume = gainNode.gain.value;

	if (index != currentFilter) 
	{
		currentFilter = index;
		let fadeOut = setInterval(function(){
			if (gainNode.gain.value > crossfadeGainDelta)
			//gradually decrease volume 
			{
				gainNode.gain.setValueAtTime((gainNode.gain.value - crossfadeGainDelta), audioContext.currentTime);
				console.log("fading out, current volume " + gainNode.gain.value)
			}	
			else 
			//set filter and gradually increase volume 
			{
				clearInterval(fadeOut);
	
				//apply filter 
				gainNode.gain.setValueAtTime(0, audioContext.currentTime);
				filterPresetsArray[index]();
				console.log("applied audio filter at index " + index)
				
				//fade in
				let fadeIn = setInterval(function(){
					if (gainNode.gain.value < (initialVolume - crossfadeGainDelta))
					{
						gainNode.gain.setValueAtTime((gainNode.gain.value + crossfadeGainDelta), audioContext.currentTime);
						console.log("fading in, current volume " + gainNode.gain.value)
					}
					else 
					{
						clearInterval(fadeIn)
						volumeSlider.disabled = false
					}
				}, crossfadeStep)
			}
		}, crossfadeStep)
	}
	else 
	{
		terminalDisplay.innerHTML += "filter " + index + " has already been applied<br>";
	}	
}

////////////// audio filter presets //////////////


////////////// utilities //////////////

//get total length of album
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
// 	else //loaded all tracks
// 	{
// 		testTotalMin += Math.floor(testTotalSec / 60)
// 		testTotalSec = testTotalSec % 60
// 		console.log("total length " + testTotalMin + "min " + testTotalSec + "sec")
// 	} 
// }

//prints unicode char array in console
// function getUnicodeChars()
// {
// 	let chars = new Array()
// 	let unicodeIndex
// 	let charArrayIndex = 0

// 	// 33-122, 161-404
// 	for (unicodeIndex = 33; unicodeIndex <= 404; unicodeIndex++)
// 	{
// 		if (unicodeIndex <= 122 | unicodeIndex >= 161)
// 		{
// 			currentChar = String.fromCharCode(unicodeIndex)
// 			chars.push(currentChar)
// 			//console.log(unicodeIndex + " " + chars[charArrayIndex])
// 			charArrayIndex++;
// 		}
// 	}
// 	console.log(JSON.stringify(chars)) // prints the full array 
// }

////////////// utilities //////////////