window.onload = ()=> 
{
    // 2d sprite walking animation

    let sprites = document.getElementById("lain-ascii").getElementsByTagName("pre")
    let curIndex = 1;

    function updateSprite()
    {
        curIndex = (curIndex >= sprites.length - 1) ? 0 : curIndex + 1
        for (let i = 0; i < sprites.length; i++)
        {
            if (i != curIndex) sprites[i].style.display = "none";
            else sprites[i].style.display = "block";
        }
    }

    setInterval(updateSprite, 433);
}