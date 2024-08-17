'use strict'

let gElcanvas
let gCtx

let imgLoaded = false

//const canTxtArea = {x,}

function renderMeme(elImg, url) {
    toggleElement('.meme-gallery', '.meme-editor', '.bar')
    gElcanvas = document.getElementById("canvas")
    gCtx = gElcanvas.getContext("2d")


    elImg.src = url
    elImg.onload = () => {
        imgLoaded = true
        gCtx.drawImage(elImg, 0, 0, gElcanvas.width, gElcanvas.height)
    }

    addElementListeners()
    addMouseListeners()
  //  addTouchListeners()

}


function addElementListeners() {
    const listenerForElme = ['topText', 'bottomText', 'strokeColor', 'fillColor', 'lineWidth']
    listenerForElme.forEach(id => {
        document.getElementById(id).addEventListener('input', onEditInputChange)
    })
}

function addMouseListeners() {
    gElcanvas.addEventListener('click', onMouseClick)
    // gElcanvas.addEventListener('mousedown', onDown)
    // gElcanvas.addEventListener('mousemove', onMove)
    // gElcanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElcanvas.addEventListener('touchstart', onDown)
    gElcanvas.addEventListener('touchmove', onMove)
    gElcanvas.addEventListener('touchend', onUp)
}
function onDown() {
    console.log("on-Down")
}
function onMove() {
    console.log("on-Mown")
}
function onUp() {
    console.log("on-Up")
}

function onEditInputChange() {
    if (!imgLoaded) return

    gCtx.clearRect(0, 0, gElcanvas.width, gElcanvas.height)
    gCtx.drawImage(elImg, 0, 0, gElcanvas.width, gElcanvas.height)


    gCtx.font = `48px bold Arial`
    gCtx.fillStyle = fillColor.value
    gCtx.strokeStyle = strokeColor.value
    gCtx.lineWidth = lineWidth.value

    console.log()

    gCtx.textAlign = "center"
    gCtx.fillText(topText.value, gElcanvas.width / 2, 60)
    gCtx.strokeText(topText.value, gElcanvas.width / 2, 60)

    gCtx.fillText(bottomText.value, gElcanvas.width / 2, gElcanvas.height - 30)
    gCtx.strokeText(bottomText.value, gElcanvas.width / 2, gElcanvas.height - 30)
}


function toggleElement(...selector) {
    selector.forEach(selector => {
        var element = document.querySelector(selector)
        if (element) element.classList.toggle('hide')
    })
}

function onDownloadImg(elLink) {
    const imgContent = gElcanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onSaveMeme() {
}


function onMouseClick(ev) {
    // console.log('gStars:', gStars)
    const { offsetX, offsetY, clientX, clientY } = ev
    console.log('offsetX:', offsetX, '\noffsetY:', offsetY)
    console.log('clientX:', clientX, '\nclientY:', clientY)
    // const clickedStar = gStars.find(star => {
    //     return (
    //         offsetX >= star.x && offsetX <= star.x + BAR_WIDTH &&
    //         offsetY >= star.y && offsetY < gElCanvas.height
    //     )
    // })
    // if (clickedStar) {
    //     const { name, rate } = clickedStar
    //     openModal(name, rate, clientX, clientY)
    // } else {
    //     closeModal()
    // }
}