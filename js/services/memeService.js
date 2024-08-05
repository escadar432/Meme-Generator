'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMemeById(memeId) {
    return gMeme.find(meme => meme.id === memeId)
}

function setImg(){
    
}

function updateMeme(memeId, newVendor, newSpeed) {
    const meme = getMemeById(memeId)
    _saveCarsToStorage()
    return meme
}

function crateMeme() {
}

function createMemes() {
    _saveCarsToStorage()
}
function _saveCarsToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}

