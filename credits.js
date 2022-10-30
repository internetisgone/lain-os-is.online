//fade in bg img when it's fully loaded
const bgImgPath = "/img/credits-bg4-small.jpg";
let mainContainer = document.getElementById("main-container");

function load(src) 
{
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}

load(bgImgPath).then(() => 
{
    mainContainer.style.backgroundImage = `url(${bgImgPath})`;
    mainContainer.style.opacity = "1";
});

//all links will open in new tab
let links = document.getElementsByTagName("a")
for (let i = 0; i < links.length; i++)
{
    // console.log(links.item(i))
    links.item(i).target = "_blank";
}