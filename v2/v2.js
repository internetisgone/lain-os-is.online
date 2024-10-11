const trackList = [{'name': 'Axorst2k - Simulated Bionic Tears', 'path': 'final_master_mp3/Simulated Bionic Tears.mp3', 'duration': '02:22', 'link': 'artist_link'}, {'name': 'Cicada Shell - 霊性 Wired Unconscious', 'path': 'final_master_mp3/霊性 Wired Unconscious.mp3', 'duration': '04:24', 'link': 'artist_link'}, {'name': 'Kwan - Arisu', 'path': 'final_master_mp3/Arisu.mp3', 'duration': '05:25', 'link': 'artist_link'}, {'name': 'Akira Takemoto  - 一人ぼっち1a (Videopunks works)', 'path': 'final_master_mp3/一人ぼっち1a (Videopunks works).mp3', 'duration': '09:09', 'link': 'artist_link'}, {'name': '7mint - Slip The Hoax', 'path': 'final_master_mp3/Slip The Hoax.mp3', 'duration': '05:05', 'link': 'artist_link'}, {'name': '444theGod  - AIR Sword _94', 'path': 'final_master_mp3/AIR Sword _94.mp3', 'duration': '03:13', 'link': 'artist_link'}, {'name': 'georg-i - Spliced fom Memory ', 'path': 'final_master_mp3/Spliced fom Memory .mp3', 'duration': '03:53', 'link': 'artist_link'}, {'name': 'Bungalovv - Where_s The Real Me', 'path': 'final_master_mp3/Where_s The Real Me.mp3', 'duration': '05:00', 'link': 'artist_link'}, {'name': 'provinceofnowhere feat. SimonBB - The Music Just Turns Me On', 'path': 'final_master_mp3/The Music Just Turns Me On.mp3', 'duration': '02:49', 'link': 'artist_link'}, {'name': 'd3br1s - El Nexo', 'path': 'final_master_mp3/El Nexo.mp3', 'duration': '04:04', 'link': 'artist_link'}, {'name': 'moemiki - PCB in the Garbage ', 'path': 'final_master_mp3/PCB in the Garbage .mp3', 'duration': '03:24', 'link': 'artist_link'}, {'name': 'FINGERGAP - Lain is Everywhere ', 'path': 'final_master_mp3/Lain is Everywhere .mp3', 'duration': '02:51', 'link': 'artist_link'}, {'name': 'aDeAD  - 真実は真実だからこそ強いんだ', 'path': 'final_master_mp3/真実は真実だからこそ強いんだ.mp3', 'duration': '03:48', 'link': 'artist_link'}, {'name': 'Rench Kee - Fake Trauma Orchestra', 'path': 'final_master_mp3/Fake Trauma Orchestra.mp3', 'duration': '07:55', 'link': 'artist_link'}, {'name': 'Yau Hei ASJ - Virtual Material Uploading... ', 'path': 'final_master_mp3/Virtual Material Uploading... .mp3', 'duration': '04:18', 'link': 'artist_link'}, {'name': 'Emo Betriebswerk - Nonverbal communication', 'path': 'final_master_mp3/Nonverbal communication.mp3', 'duration': '02:14', 'link': 'artist_link'}, {'name': 'NTFL - 765', 'path': 'final_master_mp3/765.mp3', 'duration': '03:42', 'link': 'artist_link'}]


// mini windows
const miniWindows = document.getElementsByClassName("mini-window")
const icons = document.getElementsByClassName("icon")

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


// music player
const trackListEl = document.getElementById("tracklist").getElementsByTagName("li")
let curTrack = document.getElementById("cur-track")
let curIndex = 0
// visualiser
canvasContext.fillStyle = "red"

loadTrack()
initTracklistClickEvent()

let source = audioContext.createMediaElementSource(curTrack);
source.connect(analyser).connect(audioContext.destination)

function loadTrack() {
    curTrack.src = trackList[curIndex].path
    curTrack.load()
    console.log("loaded", trackList[curIndex].name) 
    document.getElementById("cur-track-name").textContent = `${curIndex + 1}. ${trackList[curIndex].name} ${trackList[curIndex].duration}`
    setTracklistHighlight()
}

function playTrackV2() {
    _playTrack()    
}

function pauseTrackV2() {
    _pauseTrack()
}

function stopTrackV2() {
    _stopTrack()
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

function setVolume() {

}

function onFinishSettingVolume() {
    
}

// terminal input

const COMMANDS = ["help", "cd", "ls", "pwd", "whoami", "neofetch", "ssh", "clear"]
const INPUT_PATTERN = /^[\w\s]*$/
const inputEl = document.getElementById("terminal-input")
const terminalContentEl = document.getElementById("terminal-content")
inputEl.onkeydown = processInput
terminalContentEl.scrollTop = terminalContentEl.scrollHeight

// todo history
let historyArr = []
const historySize = 10
let historyIndex = 0

function processInput(e)
{	
    switch(e.key) {
        case "Enter":
            let outputStr = ""
            if (inputEl.value.match(INPUT_PATTERN) == null) {
                outputStr = "what did u just say u faggot"
            }

            let userInputEl = document.createElement("span")
            userInputEl.textContent = "lain@navi ~ % " + inputEl.value
            terminalContentEl.appendChild(userInputEl).appendChild(document.createElement("br"))

            let outputEl = document.createElement("span")
            outputEl.textContent = outputStr
            terminalContentEl.appendChild(outputEl).appendChild(document.createElement("br"))

            inputEl.value = "";
            terminalContentEl.scrollTop = terminalContentEl.scrollHeight; 
            break
		
        case "ArrowUp":
            historyIndex++
            break
        
        case "ArrowDown":
            historyIndex--
            break

        case "Tab":
            break
	}
}


initMiniWindows()


window.onload = ()=> 
{

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