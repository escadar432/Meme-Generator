'use strict'
const gElcanvas = document.getElementById("canvas")
const gCtx = gElcanvas.getContext("2d")

let elImg = new Image()
let imgLoaded = false;

document.getElementById('topText').addEventListener('input', handleInputChange)
document.getElementById('bottomText').addEventListener('input', handleInputChange)
document.getElementById('strokeColor').addEventListener('input', handleInputChange)
document.getElementById('fillColor').addEventListener('input', handleInputChange)
document.getElementById('lineWidth').addEventListener('input', handleInputChange)

function renderMeme(id, url) {
    toggleElement('.meme-gallery')
    toggleElement('.meme-editor')
    toggleElement('.bar')

    elImg.src = url;
    elImg.onload = () => {
        imgLoaded = true
        gCtx.drawImage(elImg, 0, 0, gElcanvas.width, gElcanvas.height)
    };
}

function handleInputChange() {
    if (!imgLoaded) return 

    gCtx.clearRect(0, 0, gElcanvas.width, gElcanvas.height)
    gCtx.drawImage(elImg, 0, 0, gElcanvas.width, gElcanvas.height)

    gCtx.font = `${lineWidth.value * 10}px Arial`
    gCtx.fillStyle = fillColor.value
    gCtx.strokeStyle = strokeColor.value
    gCtx.lineWidth = lineWidth.value

    gCtx.textAlign = "center"
    gCtx.fillText(topText.value, gElcanvas.width / 2, 60)
    gCtx.strokeText(topText.value, gElcanvas.width / 2, 60)

    gCtx.fillText(bottomText.value, gElcanvas.width / 2, gElcanvas.height - 30)
    gCtx.strokeText(bottomText.value, gElcanvas.width / 2, gElcanvas.height - 30)
}


function toggleElement(selector) {
    var element = document.querySelector(selector)
    if (element) {
        element.classList.toggle('hide')
    }
}


function downloadImg(elLink) {
    const imgContent = gElcanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
