'use strict'


function init() {
    console.log("Hello project");
    renderMeme()
}

function renderMeme() {
    const canvas = document.getElementById("canvas")
    const gCtx = canvas.getContext("2d")

    const elImg = new Image()
    elImg.src = '/css/imgs/meme-imgs-square/1.jpg'
  
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
    }
}
