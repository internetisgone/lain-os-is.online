// functions, vars, and classes shared between v1 and v2

/////////// global vars ///////////

// mini windows //
let movingWindow
let windowIsMoving = false;
let offset = [0,0];
let maxZ = 10;

let isLandscape = window.matchMedia("(min-aspect-ratio: 4/3)").matches

/////////// mini windows ///////////

const closeAnimation = [
	// display the whole window
	{clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"}, 

	{clipPath: "polygon(0% 0%, 0% 70%, 100% 70%, 100% 0%)", opacity: "1"},
	{clipPath: "polygon(0% 0%, 0% 20%, 100% 20%, 100% 0%)", transform: "translate(0%, 0%)", opacity: "0.8"},

	// display the top 5% rect area of window, shift left (landscape) or down (portrait)
	{clipPath: "polygon(0% 0%, 0% 5%, 100% 5%, 100% 0%)", 
	transform: isLandscape? ("translate(-20%, 10%)"):("translate(0%, 40%)"), 
	opacity: "0.3"}    
]
const closeAnimDuration = 333 // ms

// draggable mini window class
class MiniWindow {
	constructor(index, element, icon) {
		this.index = index,
		this.element = element
		this.icon = icon
	}

	init() {
		let closeBtn = this.element.querySelector(".mini-window-close")
		let dragArea = this.element.querySelector(".mini-window-draggable")
		let closeAnim = this.element.animate(closeAnimation, {duration: closeAnimDuration, iterations: 1})
		closeAnim.pause()
		let curIndex = this.index // not elegant but werks

		this.element.addEventListener("click", () => bringWindowToFront(curIndex))

		// close btn
		closeBtn.addEventListener("click", function(){
			closeAnim.play()

			setTimeout(() => {
				toggleWindow(curIndex, false)
				toggleIcon(curIndex, true)
			}, closeAnimDuration * 0.95);
		})

		// icon
		this.icon.addEventListener("click", function(){
			toggleWindow(curIndex, true)
			bringWindowToFront(curIndex)
			toggleIcon(curIndex, false)
		})

		// drag area
		dragArea.onmousedown = dragStart
		dragArea.ontouchstart = dragStart
	}
}

function bringWindowToFront(index) {
	miniWindows.item(index).style.zIndex = maxZ.toString()
	maxZ++
}

function toggleWindow(index, isVisible) {
	miniWindows.item(index).style.display = isVisible ? "block" : "none"
}

function toggleIcon(index, isVisible) {
	icons.item(index).style.display = isVisible ? "block" : "none"
}

function dragStart(e) {
	e.preventDefault()
	windowIsMoving = true
	movingWindow = e.target.parentElement
	// console.log(movingWindow)
	offset = [
		movingWindow.offsetLeft - e.clientX,
		movingWindow.offsetTop - e.clientY
	]
	if (e.touches != null) {
		//console.log("touch event")
		offset = [
			movingWindow.offsetLeft - e.touches[0].clientX,
			movingWindow.offsetTop - e.touches[0].clientY
		]
	}

	//set z-index
	for (let i = 0; i < miniWindows.length; i++) {
		if (miniWindows.item(i) == movingWindow) {
				bringWindowToFront(i)
			}
	}

	// use document instead of movingWindow so drag continues even when cursor / touch pos leaves the movingWindow
	document.addEventListener("mousemove", doDrag)
	document.addEventListener("mouseup", dragEnd)
	document.addEventListener("touchmove", doDrag)
	document.addEventListener("touchend", dragEnd)
}

function doDrag(e) {
	e.preventDefault()
	if (windowIsMoving)
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
	windowIsMoving = false;

	document.removeEventListener("mousemove", doDrag)
	document.removeEventListener("mouseup", dragEnd)
	document.removeEventListener("touchmove", doDrag)
	document.removeEventListener("touchend", dragEnd)
}


/////////// music player ///////////

let isPlaying = false

// playback controls

function _playTrack()
{
	if (audioContext.state === 'suspended') {
		audioContext.resume();
	}

	curTrack.play();
	isPlaying = true;

	// curTrackStateIcon.src = "img/music-player-components/test-play.png"
	// curBitrate.innerHTML = bitrateStereoStr
	// monoStereo.style.opacity = "1"

	// visualiser
	drawFrame()
}

function _pauseTrack() {
	if (isPlaying) 
	{
		curTrack.pause();
		isPlaying = false;
	}
}

function _stopTrack() {
	curTrack.pause();
	curTrack.currentTime = 0; 
	isPlaying = false;

	requestAnimationFrame(function() {
		canvasContext.clearRect(0, 0, visualiserCanvas.width, visualiserCanvas.height)
	})
}

function _prevTrack() {

}

function _nextTrack() {

}

// todo loop, shuffle, random



// visualiser
const audioContext = new (window.AudioContext || window.webkitAudioContext)()
const analyser = new AnalyserNode(audioContext, {
    fftSize: 32,
    // maxDecibels: -25,
    // minDecibels: -60,
    smoothingTimeConstant: 0.7
})

let bufferLength = analyser.frequencyBinCount
let frequencyData = new Uint8Array(bufferLength)

let visualiserCanvas = document.getElementById("visualiser")
let canvasContext = visualiserCanvas.getContext("2d")
const barGap = 1
const barWidth = visualiserCanvas.width / bufferLength - barGap

function drawFrame()
{
	if (isPlaying) requestAnimationFrame(drawFrame);

	analyser.getByteFrequencyData(frequencyData)
	// console.log("analyserrr bin count " + analyser.frequencyBinCount + ", data " + frequencyData)

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


/////////// chat ///////////
function initChatEmbed()
{
	let chatScript = document.createElement("script")
	chatScript.id = "cid0020000328095633756"
	chatScript.setAttribute("data-cfasync", "false")
	chatScript.async = true;
	chatScript.src = "//st.chatango.com/js/gz/emb.js"
	chatScript.style.width = "100%"
	chatScript.style.height = "100%"
	chatScript.innerHTML = '{"handle":"lain-os-is-online","arch":"js","styles":{"a":"f5f5f5","b":100,"c":"000000","d":"000000","e":"f5f5f5","h":"f5f5f5","l":"f5f5f5","m":"FFFFFF","p":"12","q":"f5f5f5","r":100,"t":0,"usricon":0,"surl":0,"allowpm":0}}'

	//<script id="cid0020000328095633756" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 100%;height: 100%;">{"handle":"lain-os-is-online","arch":"js","styles":{"a":"f5f5f5","b":100,"c":"000000","d":"000000","e":"f5f5f5","h":"f5f5f5","l":"f5f5f5","m":"FFFFFF","p":"12","q":"f5f5f5","r":100,"t":0,"usricon":0,"surl":0,"allowpm":0}}</script>

	document.getElementById("chat-container").appendChild(chatScript)
}

/////////// utils ///////////

// min inclusive, max exclusive
function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}
