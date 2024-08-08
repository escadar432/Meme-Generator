'use strict'

function init() {
    renderGallery()
}
//FILTER 
//QUERY PARAMS
//PAGENATION

function renderGallery(filterBy = '') {


        const strHtml = gImgs.map(({ id, url }) => {
            return `
                <div class="meme">
                    <img src="${url}" alt="meme image" onclick="onImgSelect(${id},'${url}')">
                </div>`;
        }).join('')
        const elGallery = document.querySelector('.meme-gallery')
        elGallery.innerHTML = strHtml
    }
    
    // let imgs = localStorage.getItem(STORAGE_KEY)

    // if (imgs) imgs = JSON.parse(imgs)
    // else imgs = getImgs()

    // if (imgs && imgs.length > 0) {
    //     if (filterBy) imgs = getMemeByKeyword()

    //     const strHtml = imgs.map(({ id, url }) => {
    //         return `
    //             <div class="meme">
    //                 <img src="${url}" alt="meme image" onclick="onImgSelect(${id},'${url}')">
    //             </div>`;
    //     }).join('')
    //     const elGallery = document.querySelector('.meme-gallery')
    //     elGallery.innerHTML = strHtml
    // }


function onSetFilterBy(filterBy) {
    renderGallery(filterBy)
}
function onImgSelect(id, url) {
    renderMeme(id, url)
}


function getImgById(id) {
    return gImgs.find(img => img.id === id)
}
