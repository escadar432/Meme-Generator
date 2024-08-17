
'use strict'

const STORAGE_KEY = 'imgDB'

var gImgs = [
    { id: 1, url: 'css/imgs/meme-imgs-square/p1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'css/imgs/meme-imgs-square/p2.jpg', keywords: ['dog', 'cat'] },
    { id: 4, url: 'css/imgs/meme-imgs-square/p3.jpg', keywords: ['animal', 'dog'] },
    { id: 5, url: 'css/imgs/meme-imgs-square/p4.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'css/imgs/meme-imgs-square/p5.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'css/imgs/meme-imgs-square/p6.jpg', keywords: ['wild', 'cat'] },
    { id: 6, url: 'css/imgs/meme-imgs-square/p7.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'css/imgs/meme-imgs-square/p8.jpg', keywords: ['wild', 'cat'] },
    { id: 8, url: 'css/imgs/meme-imgs-square/p9.jpg', keywords: ['funny', 'cat'] }
    // { id: 6, url: 'css/imgs/meme-imgs-square/p17.jpg', keywords: ['funny', 'cat'] },
    // { id: 7, url: 'css/imgs/meme-imgs-square/p18.jpg', keywords: ['wild', 'cat'] },
    // { id: 8, url: 'css/imgs/meme-imgs-square/p16.jpg', keywords: ['funny', 'cat'] },
    // { id: 7, url: 'css/imgs/meme-imgs-square/p10.jpg', keywords: ['wild', 'cat'] },
    // { id: 8, url: 'css/imgs/meme-imgs-square/p11.jpg', keywords: ['funny', 'cat'] },
    // { id: 6, url: 'css/imgs/meme-imgs-square/p12pg', keywords: ['funny', 'cat'] },
    // { id: 7, url: 'css/imgs/meme-imgs-square/p13.jpg', keywords: ['wild', 'cat'] },
    // { id: 8, url: 'css/imgs/meme-imgs-square/p14.jpg', keywords: ['funny', 'cat'] }
    // { id: 5, url: 'css/imgs/meme-imgs-various-aspect-ratios/img5.jpg', keywords: ['funny', 'cat'] },
    // { id: 5, url: 'css/imgs/meme-imgs-various-aspect-ratios/drevil.jpg', keywords: ['funny', 'cat'] },
    // { id: 5, url: 'css/imgs/meme-imgs-various-aspect-ratios/patrick.jpg', keywords: ['funny', 'cat'] },
    // { id: 5, url: 'css/imgs/meme-imgs-various-aspect-ratios/img6.jpg', keywords: ['funny', 'cat'] },
    // { id: 5, url: 'css/imgs/meme-imgs-various-aspect-ratios/drevil.jpg', keywords: ['funny', 'cat'] },
    // { id: 5, url: 'css/imgs/meme-imgs-various-aspect-ratios/005.jpg', keywords: ['funny', 'cat'] },
    // { id: 5, url: 'css/imgs/meme-imgs-various-aspect-ratios/003.jpg', keywords: ['funny', 'cat'] },

]
function getImgs() {
    _saveImgsToStorage()
    return gImgs
}

function getMemeByKeyword(filterBy) {
    return gImgs.filter(img => img.keywords.includes(filterBy))
}

function _saveImgsToStorage() {
    saveToStorage(STORAGE_KEY, gImgs)
}

function getImgById(id) {
    return gImgs.find(img => img.id === id)
}
