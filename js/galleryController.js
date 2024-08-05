'use strict'
function init() {

    renderGallery()
}
function renderGallery() {
    // const memes = loadFromStorage('memeDB');
    // if (!memes) return;

    var strHtml = gImgs.map(meme => {
        return `
            <div class="meme">
                <img src="${meme.url}" alt="meme image" onclick="onImgSelect(${meme.id})">
            </div`
    }).join('');

    var elGallery = document.querySelector('.meme-gallery')
    elGallery.innerHTML += strHtml
}

var gImgs = [
    { id: 1, url: 'css/imgs/meme-imgs-square/p1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'css/imgs/meme-imgs-square/p2.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'css/imgs/meme-imgs-square/p3.jpg', keywords: ['animal', 'dog'] },
    { id: 5, url: 'css/imgs/meme-imgs-square/p4.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'css/imgs/meme-imgs-square/p5.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'css/imgs/meme-imgs-square/p6.jpg', keywords: ['wild', 'cat'] },
    { id: 8, url: 'css/imgs/meme-imgs-square/p7.jpg', keywords: ['funny', 'cat'] }
];

function onImgSelect(imgId) {
    // Assuming this function opens the editor and selects the image
    console.log('Image selected:', imgId)
    setImg(imgId)
    // Your logic to open the editor and select the image goes here
}


