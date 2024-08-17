'use strict'
let elImg

function init() {
    renderGallery()
}

function renderGallery(filter = '') {

    let imgs = localStorage.getItem(STORAGE_KEY)
    if (imgs) imgs = JSON.parse(imgs)
    else imgs = getImgs()

    if (imgs && imgs.length > 0) {
        if (filter) imgs = getMemeByKeyword(filter)
        const strHtml = imgs.map(({ id, url }) => {
            return `
                <div class="meme">
                    <img src="${url}" class=${id} alt="meme image" onclick="onImgSelect('${url}')">
                </div>`;
        }).join('')

        const elGallery = document.querySelector('.meme-gallery')
        elGallery.innerHTML = strHtml
    }
}


function onSetFilterBy(filterBy) {
    renderGallery(filterBy)
}

function onImgSelect(url) {
    elImg = new Image()
    renderMeme(elImg, url)
}

