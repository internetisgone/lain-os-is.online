// test tracks
// const trackList = [
// 	{
// 		name: "boa - duvet",
// 		path: "mp3/boa_duvet.mp3",
// 		link: "https://bandcamp.com"
// 	},
// 	{
// 		name: "exxy44 - TWICE 트와이스 TT 3XXY EDIT",
// 		path: "mp3/exxy44_twice_TT.mp3",
// 		link: "https://bandcamp.com"
// 	},
// ]

const trackList = [
	{
		name: "x/o - Duvet cyberia re-chopped & screwed-MiX",
		path: "21sept-master-mp3/xo - 200529-DuvetBoa8  [master 20220921].mp3",
		link: "https://x-o-xio.bandcamp.com"
	},
	{
		name: "Wa?ste - cyberia texture 5a x professed intention and real intention",
		path: "21sept-master-mp3/Wa_ste - cyberia texture 5a x professed intention and real intention [master 20220929].mp3",
		link: "https://wa-ste222.bandcamp.com"
	},
	{
		name: "Thegn ft. Vrain - phantoma_-_track04.wav",
		path: "21sept-master-mp3/thegn ft. vrain - phantoma [master 20220921].mp3",
		link: "" //handled in loadTrack()
	},
	{
		name: "Nerve - I'm Gonna Diss You",
		path: "21sept-master-mp3/Nerve - I_m Gonna Diss You [master 20220921].mp3",
		link: "https://www.lo4nerve.com"
	},
	{
		name: "Fetus - Footprints",
		path: "21sept-master-mp3/Fetus - Footprints [master 20220921].mp3",
		link: "https://fetusmusic.bandcamp.com"
	},
	{
		name: "GRASPS X NERDIE - I AM HURTING",
		path: "21sept-master-mp3/GRASPS X NERDIE - I AM HURTING [master 20220921].mp3",
		link: "" //handled in loadTrack()
	},
	{
		name: "Yraki - Lights Down",
		path: "21sept-master-mp3/Yraki - Lights Down [master 20220921].mp3",
		link: "https://yraki.bandcamp.com"
	},
	{
		name: "Sour Gout - Transmigration",
		path: "21sept-master-mp3/Sour Gout - Transmigration [master 20220921].mp3",
		link: "https://sourgout.bandcamp.com/"
	},
	{
		name: "lovefear - Breathe",
		path: "21sept-master-mp3/lovefear - SEL compilation track final  [master 20220921].mp3",
		link: "https://lovefear.bandcamp.com/"
	},
	{
		name: "堀池ゆめぁ - lain ",
		path: "21sept-master-mp3/Yumea Horiike - lain [master 20220921].mp3",
		link: "https://uuumea.bandcamp.com"
	},
	{
		name: "Yuting Wu - Help me to Breathe",
		path: "21sept-master-mp3/Yuting Wu - Help me to Breathe [master 20220921].mp3",
		link: "https://yutingwu.bandcamp.com"
	},
	{
		name: "ΛFΛLFL - just some kick noyze",
		path: "21sept-master-mp3/afalfl - just some kick noyze [master 20220921].mp3",
		link: "https://afalfl.bandcamp.com/"
	  },
	  {
		name: "Yikii - Ancient Scanner",
		path: "21sept-master-mp3/Yikii - Ancient Scanner [master 20220921].mp3",
		link: "https://yikii.bandcamp.com"
	},
	{
		name: "Kagami Smile -  Acts of Betrayal",
		path: "21sept-master-mp3/Kagami Smile -  Acts of Betrayal [master 20220921].mp3",
		link: "https://kagamismile.bandcamp.com/"
	},
	{
		name: "Imryll - Family Portrait (Imryll Reimagined)",
		path: "21sept-master-mp3/Imryll - Family Portrait (Imryll Reimagined) [master 20220921].mp3",
		link: "https://phantomlimblabel.bandcamp.com/album/psalm008-mortal"
	},
	{
		name: "Jennifer Walton - At Last, Lain Is Free",
		path: "21sept-master-mp3/Jennifer Walton - At Last, Lain Is Free [master 20220921].mp3",
		link: "https://allcentre.bandcamp.com/album/flash-on"
	},
]; 

//entry page texts
const entryInitStr = "initialising";
const entryOnloadStr = "log in";
// const entryBottomStr = "public domain operating system"
const entryBottomStr = "at last, lain is free"
let bgImgPath = "img/lain_extended_3k.jpg"

//bg color #e1e4eb

////////////// entry page //////////////

let entryPage = document.getElementById("entry-page")
let entryTextsEl = document.getElementById("entry-texts")
let entryBottomTexts = document.getElementById("entry-bottom-text")
entryTextsEl.textContent = entryInitStr

// manually center the loading text so its position is fixed while adding the "..."
entryTextsEl.style.left = `${(entryTextsEl.parentElement.offsetWidth - entryTextsEl.offsetWidth)/2}px` 

let loadingTimer = setInterval(loadingText, 777)
let loadingIndex = 0

function loadingText()
{
	if (loadingIndex < 3)
	{
		entryTextsEl.textContent += ".";
		loadingIndex++;
	}
	else 
	{
		entryTextsEl.textContent = entryInitStr;
		loadingIndex = 0;
	}
}

//unicode chars 33-122. see getUnicodeChars() in utilities
let chars = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let BottomTextLength = 27
let bottomTextTimer = setInterval(scrambleBottomText, 100)

function scrambleBottomText()
{
	entryBottomTexts.textContent = ""
	for (let i = 0; i < BottomTextLength; i++)
	{
		randIndex = getRandomInt(0, chars.length)
		entryBottomTexts.textContent += chars[randIndex]
	}
}

// make sure entry frame img is fully loaded b4 showing
let frameImg = new Image();
frameImg.src = "img/frame_c1.png";
frameImg.onload = function() {
	frameImg.id = "entry-img";
	entryPage.appendChild(frameImg)
	frameImg.classList.add("zoom-into-view")
	console.log("loaded entry page frame img")

	// large imgs are loaded after frame img
	setPlayerAndBgImg()

	// load first song
	initPlayer()

	// text is shown after frame animation finishes
	setTimeout(() => {
		clearInterval(bottomTextTimer)
		document.getElementById("lain-os-text").style.opacity = "1"		
		entryBottomTexts.classList.add("entry-bottom-text-loaded")
		entryBottomTexts.textContent = entryBottomStr
	}, 2500);

	initMiniWindows()
}

function setPlayerAndBgImg()
{
	let playerImgPath = "img/player-final77-small.png"
	loadImg(playerImgPath).then(function() {
		document.getElementById("music-player").style.backgroundImage = `url(${playerImgPath})`
		console.log("loaded player img")
	})

	loadImg(bgImgPath).then(function() {
		document.getElementById("main-container").style.backgroundImage = `url(${bgImgPath})`
		console.log("loaded bg img")
	})
}

function loadImg(src) 
{
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}

window.onload = function() {
	clearInterval(loadingTimer)

	entryTextsEl.parentElement.style.display = "flex"
	entryTextsEl.parentElement.style.justifyContent = "center"
	entryTextsEl.style.left = "auto"

	entryTextsEl.textContent = entryOnloadStr
	entryTextsEl.classList.add("entry-text-bg")
	
	let loginClickArea = document.createElement("div")
	loginClickArea.id = "login-click-area"
	entryPage.appendChild(loginClickArea)

	loginClickArea.addEventListener("click", function(){
		entryPage.style.opacity = "0"
		if (audioContext.state === 'suspended') {audioContext.resume();}
		//setInterval(totalLengthTest, 3000);

		// play animation on click, zooms in to fill the whole screen
		frameImg.classList.remove("zoom-into-view")
		frameImg.classList.add("zoom-fill-screen")
	})

	entryPage.addEventListener('transitionend', function() {
		entryPage.parentNode.removeChild(entryPage)
	})

	// chat embed
	// initChatEmbedV1()

	// server room bg
	fetch("/v1/bg-mp3/serv113.mp3")
	.then(function(response) {return response.arrayBuffer()})
	.then(decode);
} //end of onload

function initChatEmbedV1()
{
	let chatScript = document.createElement("script")
	chatScript.id = "cid0020000328095633756"
	chatScript.setAttribute("data-cfasync", "false")
	chatScript.async = true;
	chatScript.src = "//st.chatango.com/js/gz/emb.js"
	chatScript.style.width = "100%"
	chatScript.style.height = "100%"
	chatScript.innerHTML = '{"handle":"lain-os-is-online","arch":"js","styles":{"a":"f5f5f5","b":100,"c":"000000","d":"000000","e":"f5f5f5","h":"f5f5f5","l":"f5f5f5","m":"FFFFFF","p":"12","q":"f5f5f5","r":100,"t":0,"usricon":0,"surl":0,"allowpm":0}}'

	document.getElementById("chat-container").appendChild(chatScript)
}

////////////// entry page //////////////

////////////// mini windows //////////////

const miniWindows = document.getElementsByClassName("mini-window")
let dockContainer = document.getElementById("dock-container")
const icons = dockContainer.getElementsByClassName("icon")

function initMiniWindows() {
	for (let i = 0; i < miniWindows.length; i++) {
		let miniWindow = new MiniWindow(
			i,
			miniWindows.item(i), 
			icons.item(i), 
		)	
		miniWindow.init()
	}
}

////////////// mini windows //////////////


////////////// terminal //////////////

//terminal texts
const helpText = "¸„ø¤º°¨°º¤ø„¸¸„ø¤º°¨°º¤ø„¸„ø¤º°¨°º¤ø„¸<br><br>"
				+ "available commands:<br><br>"
				+ "playback controls<br>"
				+ "&emsp;&emsp;<span style='color:lime'>play </span>&nbsp;&nbsp;&nbsp; play the currently loaded song<br>"
				+ "&emsp;&emsp;<span style='color:lime'>pause </span><br>"
				+ "&emsp;&emsp;<span style='color:lime'>stop </span><br>"
				+ "&emsp;&emsp;<span style='color:lime'>prev </span><br>"
				+ "&emsp;&emsp;<span style='color:lime'>next </span><br>"
				+ "&emsp;&emsp;<span style='color:lime'>random </span>&nbsp;&nbsp;play a random song<br><br>"
				+ "audio filters<br>"
				+ "&emsp;&emsp;<span style='color:lime'>serv </span>&nbsp;&nbsp;&nbsp; go to server room<br>"
				+ "&emsp;&emsp;<span style='color:lime'>smok </span>&nbsp;&nbsp;&nbsp; go to smoking area<br>"
				+ "&emsp;&emsp;<span style='color:lime'>look </span>&nbsp;&nbsp;&nbsp; check your surroundings<br>"
				// + "&emsp;&emsp;<span style='color:lime'>toilet</span><br>"
				+ "&emsp;&emsp;<span style='color:lime'>leave </span>&nbsp;&nbsp; clear all audio filters<br><br>"
				+ "note: i only look at the first 4 letters u type, for example <span style='color:lime'>rand</span> is equivalent to <span style='color:lime'>random</span>. there's a secret command that's exempt from this rule (>ω•)<br><br>"
				+ "¨°º¤ø„¸¸„ø¤º°¨°º¤ø„¸„ø¤º°¨°º¤ø„¸¸„ø¤º°¨<br>"

const lainStrings = [
	"let's all love lain (づ◡﹏◡)づ",
	"syncing with u at 7.83Hz",
	"<span style='color:#AAA4FF'>root access granted<br>audio filter debug mode enabled</span>",
	"(づ◡﹏◡)づ you're already a developer",
	"when i grow up i wanna be smart like gpt-3...",
	"¨°º¤ø„(☾)ɠℂᴜ̣̣℃↔ɠƒƒϊz<3↕⁷ℂᴜ̣̣℃(^)„ø¤º°¨"
]
// const invalidInputStr = "idk that word (´;ω;`)" 

const randCommandStrings = [
	"idk that word (´;ω;`)",
	"type <span style='color:lime'>help</span> if u feel lost!",
	"imma head to the <span style='color:lime'>smok</span>ing area do u wanna come with me?",
	"listen to a <span style='color:lime'>rand</span>om song with me!",
	"take a <span style='color:lime'>look</span> at your surroundings!",
	"i heard there are otherworldly entities lurking in the <span style='color:lime'>serv</span>er room...",
	"i heard there are otherworldly entities lurking in the <span style='color:lime'>serv</span>er room..."
]

let terminalTxtContainer = document.getElementById("terminal-txt-container")
let terminalDisplay = document.getElementById("terminal-display") //pre
let fakeCaret = document.getElementById("fake-caret")
let inputEl = document.getElementById("terminal-input")

let initialIndent = 111 //need to get from element tbh
let fontWidth = 8 //subject to changee
let caretOffest

let inputPattern = /^[a-zA-Z\d]+$/; //letters and digits
let lainCount = 0 
let invalidCount = 0
//let rangeDelta = 2  // output index range lainCount +- rangeDelta

inputEl.onkeydown = validateInput

function validateInput(e)
{	
	let inputLength = (e.key === "Backspace")? (inputEl.value.length - 1) : (inputEl.value.length + 1); 
	if (inputLength < 0) inputLength = 0;
	caretOffest =  inputLength * fontWidth + initialIndent
	fakeCaret.style.marginLeft = caretOffest + "px"
	//console.log(e)
	//console.log("input length " + inputLength + " caret offest" + caretOffest)

	if (e.key === "Enter") // “enter”
	{
		// use textContent instead of innerHTML for user input
		let userInputEl = document.createElement("span");
		userInputEl.textContent = "lain@navi ~ % " + inputEl.value;
		terminalDisplay.appendChild(userInputEl).appendChild(document.createElement("br"));

		//easter egg
		if (inputEl.value.toLowerCase().includes("lain"))
		{			
			// let lowerBound = (lainCount > rangeDelta)? (lainCount - rangeDelta) : 0
			// let upperBound = (lainCount > lainStrings.length - 1 - rangeDelta)? (lainStrings.length - 1) : (lainCount + rangeDelta)
			// if (lowerBound > upperBound) lowerBound = upperBound;

			// method 1 random int w range
			// let outputIndex = getRandomInt(lowerBound, upperBound)

			// method 2 normally distributed int w range 
			// let outputIndex = getIntNormallyDistributed(lowerBound, upperBound)

			// method 3 use input count directly
			// prob gonna go with this method cuz lainStrings has a rather small size and this way the user can go thru every string element
			
			//let outputIndex = (lainCount > lainStrings.length - 1)? (lainStrings.length - 1) : lainCount;
			if (lainCount < lainStrings.length) 
			{
				// unhide audio filter setting toggle 
				if (lainCount === 2) settingsViewToggle.style.display = "block";

				terminalDisplay.innerHTML += lainStrings[lainCount] + "<br>";
			}
			else
			{
				// generate a string of random chars of random length 
				let randLength = getRandomInt(20, 50)
				for (let i = 0; i < randLength; i++)
				{
					randIndex = getRandomInt(0, chars.length)
					terminalDisplay.innerHTML += chars[randIndex]
				}
				terminalDisplay.innerHTML += "<br>";
			}
			// method 4 generate random numbers 6 times and take the avr (central limit theorem)
			// todo

			//console.log(`range ${lowerBound} to ${upperBound}, input count ${lainCount}, output ${outputIndex}`)
		
			lainCount++;
		}
		else 
		{
			let trimmedInput = inputEl.value.trim();
			// only look at the first 4 letters
			if (trimmedInput.substring(0, 4).match(inputPattern))
				checkCommand(trimmedInput.substring(0, 4).toLowerCase());
			else if (trimmedInput.length > 0)
				appendInvalidResponse();
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
	if (terminalTxtContainer.scrollTop < 620) terminalTxtContainer.scrollTop = 620;
	//console.log("terminal scroll pos " + terminalTxtContainer.scrollTop + ", scroll height = " + terminalTxtContainer.scrollHeight)
}

document.getElementById("terminal-inner-container").addEventListener("click", (e) => {
	// make sure texts can still be selected 
	let selection = window.getSelection();
    if (selection.type != "Range") {
		if (!inputEl.focused) inputEl.focus();
	}
})

//for non user input 
function appendTerminalOutput(output) 
{
	terminalDisplay.innerHTML += output + "<br>";
	terminalTxtContainer.scrollTop = terminalTxtContainer.scrollHeight; 
}

function appendInvalidResponse()
{
	invalidCount++;	
	if (invalidCount > 2) 
	{
		let rand = getRandomInt(0, randCommandStrings.length)
		terminalDisplay.innerHTML += randCommandStrings[rand] + "<br>";
	}
	else
	{
		terminalDisplay.innerHTML += randCommandStrings[invalidCount - 1] + "<br>";	
	}	
}

function checkCommand(input) 
{
	// console.log("trimmed command " + input)
	switch (input) 
	{
		//playback
		case "play": playTrackV1(); break;
		case "paus": pauseTrackV1(); break;
		case "stop": stopTrackV1(); break;
		case "prev": prevTrackV1(); break;
		case "next": nextTrackV1(); break;
		case "rand": 
			curIndex = getRandomInt(0, trackList.length)
			loadTrack(); 
			playTrackV1();
			break;

		case "help": terminalDisplay.innerHTML += helpText; break;

		//filters
		case "leav": applyFilter(0); break;
		case "serv": applyFilter(1); break;
		case "smok": applyFilter(2); break;
		// case "toil": applyFilter(3); break;
		case "look": 
			appendTerminalOutput("you are in " + filterNames[currentFilter].name + ". " + filterNames[currentFilter].desc);
			break;

		default: appendInvalidResponse();
	}
}

////////////// terminal //////////////


////////////// music player //////////////
const bitrateStereoStr = "320 KBPS 48 KHZ";  
const bitrateStereoPlaceholder = "&nbsp;&nbsp;&nbsp;&nbsp;KBPS&nbsp;&nbsp;&nbsp;&nbsp;KHZ"
const loadingTrackStr = "loading metadata..."; 
const totalTime = "68:21" //calculated with totalLengthTest() in onload()

let playPauseBtn = document.getElementById("old-play-pause-btn")
let volumeSlider = document.getElementById("volume-slider")

let oldProgressBar = document.getElementById("old-progress-bar-container")
let progressBar = document.getElementById("progress-bar-container")

let curTrackText = document.getElementById("cur-track-info")

let curIndex = 0
let curTrack = document.getElementById("cur-track")
let progressTimer

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
let shuffleImg = shuffleBtn.querySelector("img")
let isShuffle = false
let loopBtn = document.getElementById("loop-btn")
let loopImg = loopBtn.querySelector("img")

let miniTotalTime = document.getElementById("mini-total-time")
let miniCurTime = document.getElementById("mini-cur-time")

let artistLink = document.getElementById("artist-link-container").querySelector("p")

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
			playTrackV1()
			updateProgress()
		})
	}
}

let oldCurTimeEl = document.getElementById("old-cur-time")
let curTimeEl = document.getElementById("cur-time")
let oldTotalTimeEl = document.getElementById("old-total-time")

// let wrapperClone
let playlistEntries = playlistUl.getElementsByClassName("playlist-entry")

///////initial state
function initPlayer()
{
	loadTrack();
	stopTrackV1(); //stop icon, no bitrate display
}

let loopIndex = 2 //0 no loop, 1 loop album, 2 loop one song
switchLoop() //no loop 

progressBar.addEventListener("click", setProgress)
oldProgressBar.addEventListener("click", oldSetProgress);

// visualiser
canvasContext.fillStyle = "black"

function loadTrack()
{
	_loadTrack()

	clearInterval(progressTimer);
	curTrackText.textContent = loadingTrackStr //old music player

	setNowPlayingAnim(false)
	nowPlayingStatic.textContent = loadingTrackStr
	curBitrate.innerHTML = bitrateStereoStr
	monoStereo.style.opacity = "1"

	progressTimer = setInterval(updateProgress, 1000);	
	
	//set playlist entry bg color 
	for (let i = 0; i < trackList.length; i++)
	{
		let curEntry = playlistEntries.item(i)
		if (i === curIndex) 
		{
			curEntry.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
			curEntry.style.color = "white";
		}
		else 
		{
			curEntry.style.backgroundColor = "transparent";
			curEntry.style.color = "black";
		}
	}

	//artist link
	if (curIndex == 2)
	{
		artistLink.innerHTML = '<a href="https://thegn.bandcamp.com" target="_blank">thegn.bandcamp.com</a><br><a href="https://nghttrrrs.bandcamp.com/album/zenith" target="_blank">nghttrrrs.bandcamp.com/album/zenith</a>'
	}
	else if (curIndex == 5)
	{
		artistLink.innerHTML = '<a href="https://grasps.bandcamp.com/" target="_blank">grasps.bandcamp.com</a><br><a href="https://soundcloud.com/nerdiecuzz" target="_blank">soundcloud.com/nerdiecuzz</a>'
	}
	else
	{
		//remove the "https://" in link text 
		artistLink.innerHTML = `<a href=${trackList[curIndex].link} target="_blank">${trackList[curIndex].link.substring(8)}</a>` 
	}
}

curTrack.onloadedmetadata = function() 
	{
		console.log("loaded track metadata at " + curIndex + " " + trackList[curIndex].name)
		// console.log(curTrack.duration)
		let timeStrings = parseTime(curTrack.duration)

		oldTotalTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;

		miniTotalTime.textContent = timeStrings.min + ":" + timeStrings.sec + " / " + totalTime
		curTrackText.textContent = trackList[curIndex].name	

		nowPlayingText.textContent = trackList[curIndex].name	+ " " + timeStrings.min + ":" + timeStrings.sec;

		// only scroll if track name + length is longer than the container 
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

		// todo can't get width when player window is hidden... 
		// maybe calc the width using font width * char count?
		// console.log(`nowPlayingWidth = ${nowPlayingWidth}, nowPlayingContainer width = ${nowPlayingContainer.offsetWidth}`)
		// console.log(`nowPlayingWrapper computed width ${window.getComputedStyle(nowPlayingWrapper).getPropertyValue("width")}`)

		appendTerminalOutput("loaded track " + trackList[curIndex].name)
	}


//playback controls
function playTrackV1()
{
	_playTrack()

	curTrackStateIcon.src = "img/music-player-components/test-play.png"
	curBitrate.innerHTML = bitrateStereoStr
	monoStereo.style.opacity = "1"

	playPauseBtn.textContent = "pause";//to be deleted
}

function pauseTrackV1() 
{
	_pauseTrack()
	if (isPlaying) 
	{
		curTrackStateIcon.src = "img/music-player-components/test-pause.png"
		playPauseBtn.textContent = "play";//to be deleted
	}
}

function setNowPlayingAnim(playAnim)
{
	// if (wrapperClone)	
	// {
	// 	nowPlayingContainer.removeChild(wrapperClone)
	// 	wrapperClone = null;
	// }

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
	if (isPlaying) pauseTrackV1();
	else playTrackV1();
}

function prevTrackV1()
{
	_prevTrack()

	curIndex > 0 ? curIndex -= 1 : curIndex = trackList.length - 1;
	loadTrack();
	playTrackV1();
	updateProgress();
}

function nextTrackV1()
{
	_nextTrack()

	if (isShuffle) // always play a random song 
	{
		curIndex = getRandomInt(0, trackList.length)
	} 
	else 
	{
		if (loopIndex == 0) //no loop 
		{
			if (curIndex == (trackList.length - 1)) 
			{
				curTrack.addEventListener("ended", stopTrackV1);
				curTrack.removeEventListener("ended", nextTrackV1);
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
	playTrackV1();
	updateProgress();
}

function stopTrackV1() 
{
	_stopTrack()
	
	updateProgress();
	curTrackStateIcon.src = "img/music-player-components/test-stop.png";

	curBitrate.innerHTML = bitrateStereoPlaceholder
	monoStereo.style.opacity = "0"
}

function toggleShuffle()
{
	if (isShuffle == false) 
	{
		isShuffle = true; 
		// appendTerminalOutput("shuffle on")
		shuffleImg.src = "img/music-player-components/shuffle_on.png"
	}
	else 
	{
		isShuffle = false; 
		// appendTerminalOutput("shuffle off")
		shuffleImg.src = "img/music-player-components/shuffle_off.png"
	}
}

function switchLoop() 
{
	if (loopIndex == 0) 
	{
		loopIndex++ // 1 loop album
		// appendTerminalOutput("loop album")
		loopImg.src = "img/music-player-components/loop_album.png"

		curTrack.addEventListener("ended", nextTrackV1); //handled in nextTrackV1()
	}
	else if (loopIndex == 1) 
	{
		loopIndex++ // 2 loop song 
		// appendTerminalOutput("loop song")
		loopImg.src = "img/music-player-components/loop_song_inverted.png"
		curTrack.removeEventListener("ended", nextTrackV1)
		curTrack.addEventListener("ended", loopSong)
	}
	else 
	{
		loopIndex = 0 // 0 no loop
		// appendTerminalOutput("loop off")
		loopImg.src = "img/music-player-components/loop_off.png"

		curTrack.removeEventListener("ended", loopSong)
		curTrack.addEventListener("ended", nextTrackV1); //handled in nextTrackV1()
	}
}

function loopSong()
{
	curTrack.currentTime = 0;
	curTrack.play()
}

function setVolume()
{
	changingVolumeText.style.opacity = "1"
	changingVolumeText.textContent = "volume: " + Math.round(gainNode.gain.value * 10) / 10

	//set the gain instead of curTrack.volume otherwise volume can't be changed in safari (this is a konwn bug)
	gainNode.gain.setValueAtTime((volumeSlider.value / volumeSlider.max), audioContext.currentTime);
	if (isScrolling)  setNowPlayingAnim(false);
	else  			  nowPlayingStatic.style.opacity = "0";

	//in case it gets stuck
	setTimeout(onFinishSettingVolume, "3000")
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

	document.getElementById("progress-bar-fill").style.clipPath = `polygon(0% 0%, ${progress*100}% 0%, ${progress*100}% 100%, 0% 100%)`
	document.getElementById("old-progress-bar-fill").style.width = progress * oldProgressBar.offsetWidth + "px";

	//set time
	let timeStrings = parseTime(curTrack.currentTime)
	oldCurTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;

	curTimeEl.textContent = timeStrings.min + ":" + timeStrings.sec;
	miniCurTime.textContent = timeStrings.min + ":" + timeStrings.sec;
	//console.log("updated progress, progress = " + progress + ", width = " + oldPprogressFill.style.width)
}

function setProgress(el)
{
	let jumpTo = curTrack.duration * (el.offsetX / progressBar.offsetWidth);
	curTrack.currentTime = jumpTo;
	updateProgress()
}

function oldSetProgress(el)
{
	let oldJumpTo = curTrack.duration * (el.offsetX / oldProgressBar.offsetWidth);
	curTrack.currentTime = oldJumpTo;
	updateProgress()
	// console.log("progressss " + el)
	// console.log("set progress: el.offsetX  = " + el.offsetX + ", curTrack.duration = " + curTrack.duration + ", max width = " + oldProgressBar.offsetWidth + ", oldJumpTo = " + oldJumpTo)
}

let oldPlaylist = document.getElementById("old-playlist-content")
fillPlaylist(oldPlaylist);
////////////// music player //////////////

////// audio filter settings view //////
let settingsViewToggle = document.getElementById("temp-toggle")

let oldPlayerContainer = document.getElementById("old-player-container")
let playlistEl = document.getElementById("old-playlist-container")
let playlistToggle = document.getElementById("pl-toggle")
let mainContainer = document.getElementById("main-container")
let creditsBtn = document.getElementById("credits-btn")

let showingOldUI = false
settingsViewToggle.addEventListener("click", function(){
	if (showingOldUI)
	{
		mainContainer.style.backgroundImage = `url(${bgImgPath})`
		creditsBtn.style.display = "block"
		oldPlayerContainer.style.display = "none"
		playlistEl.style.display = "none"
		dockContainer.style.display = "flex"
		for (let i = 0; i < miniWindows.length; i++)
		{
			miniWindows.item(i).style.visibility = "visible"
		}
		showingOldUI = false
	}
	else 
	{
		mainContainer.style.backgroundImage = "none"
		creditsBtn.style.display = "none"
		oldPlayerContainer.style.display = "block"
		dockContainer.style.display = "none"
		//playlistEl.style.display = "block"
		for (let i = 0; i < miniWindows.length; i++)
		{
			miniWindows.item(i).style.visibility = "hidden"
		}
		showingOldUI = true
	}
})

playlistEl.style.display = "none"
playlistToggle.addEventListener("click", function(){
	if (playlistEl.style.display == "none") {playlistEl.style.display = "block";}
	else {playlistEl.style.display = "none";}	
})
////// audio filter settings view //////


////////////// audio filter //////////////
//initial audio node params
const initialGain = 0.77;
let currentFilter = 0 // filter preset index in filterPresetsArray. 0 means none

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

// const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const biquadFilter = new BiquadFilterNode(audioContext, {frequency:350});
const convolver = new ConvolverNode(audioContext)
const gainNode = new GainNode(audioContext, {gain:initialGain})  // can be adjusted by the user 
const masterGainNode = new GainNode(audioContext, {gain: 1})     // specific to filter presets


let biquadIndex = 0
let biquadTypes = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]
let hasReverb = false

let source = audioContext.createMediaElementSource(curTrack);
source.connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)

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
			source.connect(convolver).connect(biquadFilter).connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{	
			source.connect(biquadFilter).connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		frequencyEl.style.color = "black";
		gainEl.style.color = "black";
		qEl.style.color = "black";
		detuneEl.style.color = "black";
		console.log("biquad " + biquadIndex + ", biquad type = " + biquadTypes[biquadIndex - 1] + ", frequency = " + biquadFilter.frequency.value)
	}
	else //turn off biquad 
	{
		biquadFilter.disconnect()
		if (hasReverb)
		{
			source.connect(convolver).connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{
			source.connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		// todo disable sliders
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

function toggleReverb() 
{
	if (hasReverb)
	{
		convolver.disconnect()
		convolver.buffer = null
		// todo disable sliders
		reverbToggle.textContent = "turn on reverb"
		reverbDurationText.style.color = "grey"
		reverbDecayText.style.color = "grey"
		hasReverb = false
	}
	else 
	{
		setReverb();
		if (biquadIndex > 0) 
		{
			source.connect(convolver).connect(biquadFilter).connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{
			source.connect(convolver).connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		// todo enable sliders 
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

		reverbToggle.textContent = "turn on reverb"
		reverbDurationText.style.color = "grey"
		reverbDecayText.style.color = "grey"
	}
}

function turnOnReverb()
{
	if (!hasReverb)
	{	
		if (biquadIndex > 0) 
		{
			source.connect(convolver).connect(biquadFilter).connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		else 
		{
			source.connect(convolver).connect(gainNode).connect(masterGainNode).connect(analyser).connect(audioContext.destination)
		}
		reverbToggle.textContent = "turn off reverb"
		reverbDurationText.style.color = "black"
		reverbDecayText.style.color = "black"
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

// for "leave" command
function clearAllFilters()
{
	masterGainNode.gain.value = 1;
	turnOffReverb();
    switchBiquad(0);
}

// for reset btn in old player
function resetAllFilters()
{
	clearAllFilters();

	biquadSelectionEl.value = 0; //none
	frequencySlider.value = 350;
	gainSlider.value = 0;
	qSlider.value = 1;
	detuneSlider.value = 0;
	setFrequency();
	setGain();
	setQ();
	setDetune();

	reverbDurationSlider.value = 15;
	reverbDecaySlider.value = 5;
	setReverb();
}

let servBgBufferData
let servBgBufferNode
let servBgGain

function decode(buffer) 
{
	audioContext.decodeAudioData(buffer, success);
}

function success(buffer)
{
	servBgBufferData = buffer;
	console.log("decoded server room bg");
}

function playServerRoomBg()
{
	// if (servBgBufferData == null)
	// {
	// 	fetch("/bg-mp3/serv113.mp3")
	// 	.then(function(response) {return response.arrayBuffer()})
	// 	.then(decode);
	// }
	servBgBufferNode = audioContext.createBufferSource();
	servBgBufferNode.buffer = servBgBufferData;
	servBgGain = new GainNode(audioContext, {gain: 0.7});

	servBgBufferNode.connect(servBgGain).connect(masterGainNode).connect(audioContext.destination);
	servBgBufferNode.loop = true;
	servBgBufferNode.start();
}

// servBgTrack = document.getElementById("server-room-bg-track")
// servBgTrack.addEventListener("ended", function(){
// 	servBgTrack.currentTime = 0;
// 	servBgTrack.play()
// })

function stopServerRoomBg()
{
	servBgBufferNode.stop();
	servBgBufferNode = null; // reset node, cannot start() the same node twice
}

function gotoServerRoom()
{
	masterGainNode.gain.value = 0.2;

	switchBiquad(8); 
	//["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"]
	biquadFilter.frequency.value = 10000;
	biquadFilter.Q.value = 1.8;
	biquadFilter.detune.value = 2400

	turnOffReverb(); //clear convolver buffer 
	impulse = impulseResponse(11, 80) //duration, decay
	convolver.buffer = impulse
	turnOnReverb();

	playServerRoomBg();
}

function gotoSmokingArea()
{
	masterGainNode.gain.value = 0.4;

	switchBiquad(8); //allpass
	biquadFilter.frequency.value = 2000;
	biquadFilter.Q.value = 0.01;

	turnOffReverb(); //clear convolver buffer 
	impulse = impulseResponse(10, 60) //duration, decay
	convolver.buffer = impulse
	turnOnReverb();
}

// function gotoToilet() //test filter 1
// {
// 	masterGainNode.gain.value = 0.1;

// 	switchBiquad(4); //lowshelf
// 	biquadFilter.gain.value = 0;

// 	turnOffReverb(); //clear convolver buffer 
// 	impulse = impulseResponse(7, 13) //duration, decay
// 	convolver.buffer = impulse
// 	turnOnReverb();
// }

let filterPresetsArray = [
	clearAllFilters, 
	gotoServerRoom,
	gotoSmokingArea, 
	// gotoToilet
]

const filterNames = [
	{
		name: "a white room",
		desc: "it feels like you've always been here."
	},
	{
		name: "server room",
		desc: "you hear machines humming softly and occasional beeps. it's warm."
	},
	{
		name: "smoking area",
		desc: "you hear faint music oozing through the brick wall."
	}
	// "toilet"
]

function applyFilter(index)
{
	volumeSlider.disabled = true;
	let initialVolume = gainNode.gain.value;

	if (index != currentFilter) 
	{
		let prevFilter = currentFilter;
		currentFilter = index;

		if (prevFilter === 1) //server room
			stopServerRoomBg();

		let fadeOut = setInterval(function(){
			if (gainNode.gain.value > crossfadeGainDelta)
			//gradually decrease volume 
			{
				gainNode.gain.setValueAtTime((gainNode.gain.value - crossfadeGainDelta), audioContext.currentTime);
				// console.log("fading out, current volume " + gainNode.gain.value)
			}	
			else 
			//set filter and gradually increase volume 
			{
				clearInterval(fadeOut);
	
				//apply filter 
				gainNode.gain.setValueAtTime(0, audioContext.currentTime);
				filterPresetsArray[index]();
				// console.log("applied audio filter at index " + index)

				if (index === 0)
					appendTerminalOutput("you've left " + filterNames[prevFilter].name);
				else appendTerminalOutput("you are now in " + filterNames[index].name + ". " + filterNames[index].desc);
				
				//fade in
				let fadeIn = setInterval(function(){
					if (gainNode.gain.value < (initialVolume - crossfadeGainDelta))
					{
						gainNode.gain.setValueAtTime((gainNode.gain.value + crossfadeGainDelta), audioContext.currentTime);
						// console.log("fading in, current volume " + gainNode.gain.value)
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
		appendTerminalOutput("you are already in " + filterNames[index].name +"!")
	}	
}

////////////// audio filter presets end //////////////


////////////// utilities //////////////

// based on this answer, converted to int and minus skew 
// stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve/49434653#49434653
// function getIntNormallyDistributed(min, max) 
// {
// 	let u = 0, v = 0;
// 	while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
// 	while(v === 0) v = Math.random()
// 	let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
	
// 	num = num / 10.0 + 0.5 // Translate to 0 -> 1
// 	if (num > 1 || num < 0) 
// 		num = getIntNormallyDistributed(min, max); // resample between 0 and 1 if out of range
// 	else
// 		num = Math.floor(num * (max - min) + min); //convert to int
// 	return num
// 	//todo upper limit - 1 not inclusive??
//   }

// testing getIntNormallyDistributed
// function testRandInt(min, max)
// {
// 	// let randomNumArr = new Array()
// 	for (let i = 0; i < 100; i++)
// 	{
// 		let num = getIntNormallyDistributed(min, max)
// 		// randomNumArr.push(num)
// 		console.log(num)
// 	}
// }
//testRandInt(0, 6);

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
//getUnicodeChars()
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

////////////// utilities end //////////////