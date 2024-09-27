const trackList = [
    {

    }
]

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
let curTrackAudioElement = document.getElementById("cur-track")

curTrackAudioElement.src = "final_master_mp3/PCB in the Garbage .mp3"
curTrackAudioElement.load()




// terminal input
let historyArr = []
const historySize = 69
let historyIndex = 0
let inputEl = document.getElementById("terminal-input")
inputEl.onkeydown = processInput

function processInput(e)
{	
    switch(e.key) {
        case "Enter":
            // let userInputEl = document.createElement("span");
            // userInputEl.textContent = "lain@navi ~ % " + inputEl.value;
            // terminalDisplay.appendChild(userInputEl).appendChild(document.createElement("br"));

            inputEl.value = "";
            // terminalTxtContainer.scrollTop = terminalTxtContainer.scrollHeight; 
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