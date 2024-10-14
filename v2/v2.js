const trackList = [
    {'name': 'Bungalovv - Where\'s The Real Me', 'path': 'final_master_mp3/Where_s The Real Me.mp3', 'duration': '05:00', 'link': 'https://soundcloud.com/bungalovv'}, 

    {'name': 'aDeAD  - 真実は真実だからこそ強いんだ', 'path': 'final_master_mp3/真実は真実だからこそ強いんだ.mp3', 'duration': '03:48', 'link': 'https://adeadmusic.bandcamp.com'}, 

    {'name': 'georg-i - Spliced fom Memory ', 'path': 'final_master_mp3/Spliced fom Memory .mp3', 'duration': '03:53', 'link': 'https://georg-i.bandcamp.com'}, 

    {'name': 'moemiki - PCB in the Garbage ', 'path': 'final_master_mp3/PCB in the Garbage .mp3', 'duration': '03:24', 'link': 'https://soundcloud.com/moemiki'}, 

    {'name': 'NTFL - 765', 'path': 'final_master_mp3/765.mp3', 'duration': '03:42', 'link': 'https://soundcloud.com/n-t-f-l'},

    {'name': 'Axorst2k - Simulated Bionic Tears', 'path': 'final_master_mp3/Simulated Bionic Tears.mp3', 'duration': '02:22', 'link': 'https://cyanidesystem.bandcamp.com'}, 

    {'name': 'Cicada Shell - 霊性 Wired Unconscious', 'path': 'final_master_mp3/霊性 Wired Unconscious.mp3', 'duration': '04:24', 'link': 'https://soundcloud.com/cicadas-shell'}, 

    {'name': 'Akira Takemoto  - 一人ぼっち1a (Videopunks works)', 'path': 'final_master_mp3/一人ぼっち1a (Videopunks works).mp3', 'duration': '09:09', 'link': 'https://videopunks.bandcamp.com'},

    {'name': '7mint - Slip The Hoax', 'path': 'final_master_mp3/Slip The Hoax.mp3', 'duration': '05:05', 'link': 'https://7mint.bandcamp.com'}, 

    {'name': 'Yau Hei ASJ - Virtual Material Uploading... ', 'path': 'final_master_mp3/Virtual Material Uploading... .mp3', 'duration': '04:18', 'link': ' https://soundcloud.com/weareasj'}, 

    {'name': 'd3br1s - El Nexo', 'path': 'final_master_mp3/El Nexo.mp3', 'duration': '04:04', 'link': 'https://d3br1s.bandcamp.com'}, 

    {'name': 'Kwan - Arisu', 'path': 'final_master_mp3/Arisu.mp3', 'duration': '05:25', 'link': 'https://kwanw.bandcamp.com'}, 

    {'name': 'provinceofnowhere feat. SimonBB - The Music Just Turns Me On', 'path': 'final_master_mp3/The Music Just Turns Me On.mp3', 'duration': '02:49', 'link': ' https://soundcloud.com/province-of-nowhere'}, 
    
    {'name': 'FINGERGAP - Lain is Everywhere ', 'path': 'final_master_mp3/Lain is Everywhere .mp3', 'duration': '02:51', 'link': 'https://fingergap.bandcamp.com'}, 

    {'name': '444theGod  - AIR Sword \'94', 'path': 'final_master_mp3/AIR Sword _94.mp3', 'duration': '03:13', 'link': 'https://instagram.com/444_thegod'}, 
    
    {'name': 'Emo Betriebswerk - Nonverbal communication', 'path': 'final_master_mp3/Nonverbal communication.mp3', 'duration': '02:14', 'link': 'https://soundcloud.com/emobetriebswerk'}, 

    {'name': 'Rench Kee - Fake Trauma Orchestra', 'path': 'final_master_mp3/Fake Trauma Orchestra.mp3', 'duration': '07:55', 'link': 'https://instagram.com/totaldedly08river'}
]


// *+-------              -------+* //
// *+------- mini windows -------+* //
// *+-------              -------+* //

const miniWindows = document.getElementsByClassName("mini-window")
const icons = document.getElementsByClassName("icon")

initMiniWindows()

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

// *+-------              -------+* //
// *+------- music player -------+* //
// *+-------              -------+* //

const trackListEl = document.getElementById("tracklist").getElementsByTagName("li")
const curTrack = document.getElementById("cur-track")
const curTrackName = document.getElementById("cur-track-name")
const curTrackNameClone = document.getElementById("cur-track-name-clone") // invisible clone for getting text width
const artistLinksEl = document.getElementById("artist-links")
const curTimeEls = document.getElementsByClassName("cur-time")
const volSlider = document.getElementById("volume-slider")
const progressBar = document.getElementById("progress-bar")
const playhead = document.getElementById("progress-bar-playhead")

let curIndex = 0
let marqueeId, marqueeDelayId
let progressTimer
const fontWidth = 9 
progressBar.addEventListener("click", setProgress)

// visualiser
let source = audioContext.createMediaElementSource(curTrack);
source.connect(analyser).connect(audioContext.destination)
canvasContext.fillStyle = "red"

function loadTrack() {
    _loadTrack()
    console.log("loaded", trackList[curIndex].name) 
    appendTerminalOutput("loaded " + trackList[curIndex].name)

    curTrackName.innerHTML = `${curIndex + 1}. ${trackList[curIndex].name} ${trackList[curIndex].duration}`
    curTrackNameClone.innerHTML = `${curIndex + 1}. ${trackList[curIndex].name} ${trackList[curIndex].duration}`

    setTracklistHighlight()
 
    startMarquee()

    updateArtistLink()

    resetProgress()
    clearInterval(progressTimer);
    progressTimer = setInterval(updateProgress, 1000);	    

    document.getElementById("cur-track-duration").textContent = trackList[curIndex].duration
}

function playTrackV2() {
    _playTrack()
}

function pauseTrackV2() {
    _pauseTrack()
}

function stopTrackV2() {
    _stopTrack()
    resetProgress()
}

function prevTrackV2() {
    _prevTrack()
    curIndex > 0 ? curIndex -= 1 : curIndex = trackList.length - 1;
    loadTrack()
    playTrackV2()
}

function nextTrackV2() {
    _nextTrack()
    curIndex < trackList.length - 1 ? curIndex += 1 : curIndex = 0;
    loadTrack()
    playTrackV2()
}

function setTracklistHighlight() {
    for (let i = 0; i < trackListEl.length; i++) {
        let li = trackListEl[i]
        if (i == curIndex) {
            li.classList.add("highlighted-track")
        }
        else {
            li.classList.remove("highlighted-track")
        }
    }
}

function initTracklistClickEvent() {
    for (let i = 0; i < trackListEl.length; i++) {
        trackListEl[i].addEventListener("click", () => {
            curIndex = i
            loadTrack()
            playTrackV2()
        })
    }
}

function startMarquee() {

    if (marqueeId) {
        // clearInterval(marqueeId)
        cancelAnimationFrame(marqueeId)
        curTrackName.style.marginLeft = "0"
        marqueeId = null
    }
    if (marqueeDelayId) {
        clearTimeout(marqueeDelayId)
    }

    // only start marquee if text width is longer than display width
    var width = (curTrackNameClone.clientWidth + 1); 
    if (width <= curTrackName.clientWidth) return; 

    const initialDelay = 1500
    const defaultStep = 0.5
    const space = '&nbsp;&nbsp;';

    function go() {
        i = i < width ? i + step : -17;
        curTrackName.style.marginLeft = -i + 'px';
        marqueeId = requestAnimationFrame(go)
    }
    var i = 0
    var step = defaultStep
    var t = curTrackName.innerHTML; // text

    marqueeDelayId = setTimeout(() => {
        curTrackName.innerHTML = t + space + t + space;
        // marqueeId = setInterval(go, speed);
        marqueeId = requestAnimationFrame(go)
    }, initialDelay);

    // pause scrolling on hover
    curTrackName.addEventListener('mouseenter', () => {
        step = 0;
    }, true);
    curTrackName.addEventListener('mouseleave', () => {
        step = defaultStep;
    }, true);
}

function updateArtistLink() {
    artistLinksEl.href = trackList[curIndex].link
    linkText = trackList[curIndex].link.split("//")[1]
    // artistLinksEl.textContent = linkText == null ? trackList[curIndex].link : linkText
    artistLinksEl.textContent = `[${linkText}]`
}

function setVolume() {
    curTrack.volume = volSlider.value / volSlider.max // temp. does not work in safari. use gain node instead
}

function onFinishSettingVolume() {
    
}

function updateProgress() {
    if (isPlaying) {
        let timeStr = parseTime(curTrack.currentTime)
        for (i = 0; i < curTimeEls.length; i++) {
            curTimeEls[i].textContent = timeStr.min + ":" + timeStr.sec;
        }

        let progress = curTrack.currentTime / curTrack.duration;
        let marginCharCount = 2
        playhead.style.left = progress * (progressBar.clientWidth - playhead.clientWidth - 2 * marginCharCount * fontWidth) + marginCharCount * fontWidth + "px"
    }
}

function resetProgress() {
    for (i = 0; i < curTimeEls.length; i++) {
        curTimeEls[i].textContent = "00:00";
    }
    playhead.style.left = 2 * fontWidth + "px"
}

// *+-------          -------+* //
// *+------- terminal -------+* //
// *+-------          -------+* //

const COMMANDS = [
    "play", "pause", "prev", "next", "stop", "rand",
    "help", "clear", "exit",
    // todo "lain", "cd", "ls", "pwd", "whoami", "neofetch", "ssh", 
]
const HELP_TEXT = 
`+-------··                              .
|  playback commands:                   ¦
¦  <span style="font-weight:bold;">play  pause  prev  next  stop  rand</span>  |
.                              ··-------+
+-------··              .
|  utility commands:    ¦ 
¦  <span style="font-weight:bold;">help   clear   exit</span>  |
.              ··-------+`

const WELCOME_TEXT = "type \"help\" and hit enter to view available commands :3"

const INPUT_PATTERN = /^[\w\s]*$/
const inputEl = document.getElementById("terminal-input")
const terminalContentEl = document.getElementById("terminal-content")
scrollTerminal()

// todo history
let historyArr = []
const historySize = 10
let historyIndex = 0

function processInput(e)
{	
    switch(e.key) {
        case "Enter":
            // display usr input
            var usrInput = inputEl.value.trim()
            appendTerminalOutput("lain@navi ~ % " + usrInput)
            inputEl.value = "";

            // check for illegal chars
            if (usrInput.match(INPUT_PATTERN) == null) {
                appendTerminalOutput("what did u just say u faggot")
                return
            } 

            // process command
            for (let command of COMMANDS) {
                if (usrInput.toLowerCase() == command) {
                    processCommand(command)
                }
            }

            scrollTerminal()
            break
		
        case "ArrowUp":
            e.preventDefault()       
            historyIndex++
            break
        
        case "ArrowDown":
            e.preventDefault()       
            historyIndex--
            break

        case "Tab":
            e.preventDefault()
            var usrInput = inputEl.value.trim().toLowerCase()
            if (usrInput.length == 0 || usrInput.match(INPUT_PATTERN) == null) return; 

            var matches = []
            for (let command of COMMANDS) {
                if(command.startsWith(usrInput)) {
                    matches.push(command)
                }
            }
            if (matches.length == 1) {
                // auto complete
                inputEl.value = matches[0]
            }
            if (matches.length > 1) {      
                // show all matches      
                appendTerminalOutput(matches) 
                // todo
                // press tab again to go to next match
            }
            break
	}
}

function processCommand(command) {
    switch(command) {
        case "play": playTrackV2(); break;
		case "pause": pauseTrackV2(); break;
		case "stop": stopTrackV2(); break;
		case "prev": prevTrackV2(); break;
		case "next": nextTrackV2(); break;
		case "rand": 
            stopTrackV2();
			curIndex = getRandomInt(0, trackList.length);
			loadTrack(); 
			playTrackV2();
			break;
		case "help": 
            appendTerminalOutput(HELP_TEXT, true); 
            break;

        case "clear":
            terminalContentEl.replaceChildren();
            break;

        case "exit":
            window.location.href = "/offline.html"
            break;
    }
}

function appendTerminalOutput(str, useInnerHtml = false) 
{
    let outputEl
    if (useInnerHtml) {
        outputEl = document.createElement("pre")
        outputEl.innerHTML = str;
    }
    else {
        outputEl = document.createElement("div")
        outputEl.textContent = str;
    }
    terminalContentEl.appendChild(outputEl).appendChild(document.createElement("br"))
    scrollTerminal()
}

function scrollTerminal() {
    // scroll to bottom
	terminalContentEl.scrollTop = terminalContentEl.scrollHeight; 
}

function initChatEmbedV2()
{
	let chatScript = document.createElement("script")
	chatScript.id = "cid0020000389860191718"
	chatScript.setAttribute("data-cfasync", "false")
	chatScript.async = true;
	chatScript.src = "//st.chatango.com/js/gz/emb.js"
	chatScript.style.width = "100%"
	chatScript.style.height = "100%"
	chatScript.innerHTML = '{"handle":"lain-os-is-online","arch":"js","styles":{"a":"ffffff","b":100,"c":"ff0000","d":"ff0000","g":"ff0000","j":"ff0000","k":"ff0000","l":"ff0000","m":"CC0000","n":"FFFFFF","p":"11","q":"ffffff","r":100,"t":0,"ab":false,"usricon":0,"surl":0}}'

	document.getElementById("chat-container").appendChild(chatScript)
}

window.onload = ()=> 
{
    inputEl.onkeydown = processInput
    appendTerminalOutput(WELCOME_TEXT)

    loadTrack()
    initTracklistClickEvent()
    curTrack.addEventListener("ended", nextTrackV2); 


    // chat
    // initChatEmbedV2()

    // // 2d sprite walking animation

    // let sprites = document.getElementById("lain-ascii").getElementsByTagName("pre")
    // let curIndex = 1;

    // function updateSprite()
    // {
    //     curIndex = (curIndex >= sprites.length - 1) ? 0 : curIndex + 1
    //     for (let i = 0; i < sprites.length; i++)
    //     {
    //         if (i != curIndex) sprites[i].style.display = "none";
    //         else sprites[i].style.display = "block";
    //     }
    // }

    // setInterval(updateSprite, 433);
}