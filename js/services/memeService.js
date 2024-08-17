'use strict'


var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2}

function getMemeById(memeId) {
    return gMeme.find(meme => meme.id === memeId)
}

function updateMeme(memeId) {
    const meme = getMemeById(memeId)
    _saveCarsToStorage()
    return meme
}


function _saveCarsToStorage() {
    saveToStorage(STORAGE_KEY, gMeme)
}

function onTextInput(){
}


var gMeme = [{
        selectedImgId: 1,
        selectedLineIdx: 6,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    }, {
        selectedImgId: 2,
        selectedLineIdx: 3,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    }, {
        selectedImgId: 3,
        selectedLineIdx: 6,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    },
    {
        selectedImgId: 4,
        selectedLineIdx: 9,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    },
    {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    },
    {
        selectedImgId: 6,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    },
    {
        selectedImgId: 7,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            }
        ]
    }]

