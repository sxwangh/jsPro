window.URL = window.URL || window.webkitURL
var audioBuffer = []
var audioLen = 0

var sampleRate = 16000
var isStart = false
var wavEnd = true

// 播放和合成进度相关
var audioCount = 0
var audioTimethEstimate = 0
var mBufferPecent = 0
var mSpeakPecent = 0
var mSpeakPecentTemp = 0
var textLength = 0
var audioPause = false
var barTimer
var barSpeeckTimer

// 播放相关
var myAudio = document.createElement('audio')
var mediaSource = null
var audioSegments = []
var sourceBuffer = null
var mp3Encoder = null

function initSpeeckBarParam() {
    audioCount = 0
    mBufferPecent = 0
    mSpeakPecent = 0
    mSpeakPecentTemp = 0
    audioPause = false

    //var bytePersecond = sampleRate * 2
    if (sampleRate === 8000) {
        audioTimethEstimate = textLength * 4000
    } else {
        audioTimethEstimate = textLength * 8000
    }
    //audioTimethEstimate = audioTimethEstimate / bytePersecond
}

//写入缓冲进度和播放进度回调
function setBarProcess() {
    //缓冲进度 播放进度回调写入
    if (wavEnd) {
        mBufferPecent = 100
    } //缓冲结束
    mSpeakPecentTemp = Math.max(mSpeakPecentTemp, mSpeakPecent) //播放进度取最大值，防止缓冲结束进度条出现回落
    onSpeekProcess(mBufferPecent, mSpeakPecentTemp)

    if (mBufferPecent === 100 && mSpeakPecentTemp === 100) {
        onAudioPlayStatus(2)
        window.clearInterval(barTimer)
    }
}

var totalLength = 0

function setSpeekBitProcess() {
    var curLength = myAudio.currentTime * sampleRate * 2
    if (wavEnd) {
        mSpeakPecent = Math.round(100 * curLength / totalLength)//缓冲结束使用实际总长计算播放进度
    } else {
        mSpeakPecent = Math.round(100 * curLength / audioTimethEstimate)  //缓冲阶段使用估算总长计算播放进度
    }

    if (audioCount <= 1 && mSpeakPecent >= 98) {
        mSpeakPecent = 100
        window.clearInterval(barSpeeckTimer)
    }
}

function audioPlayInit() {
    wavEnd = false
    audioCount = 0
    totalLength = 0
    //缓冲进度和播放进度参数初始化
    initSpeeckBarParam()
    //开启缓冲和播放进度回调
    barTimer = window.setInterval(function () {
        setBarProcess()
    }, 10)
    barSpeeckTimer = window.setInterval(function () {
        setSpeekBitProcess()
    }, 1)
}

function audioPlayPause() {
    if (audioPause) {
        return
    }
    audioPause = true
    myAudio.pause()

    //关闭缓冲和播放进度回调
    window.clearInterval(barSpeeckTimer)
    window.clearInterval(barTimer)
}

function audioPlayResume() {
    if (!audioPause) {
        return
    }
    audioPause = false
    myAudio.play()

    //开启缓冲和播放进度回调
    barTimer = window.setInterval(function () {
        setBarProcess()
    }, 10)
    barSpeeckTimer = window.setInterval(function () {
        setSpeekBitProcess()
    }, 1)
}

//合成缓存进度和播放进度回调
function onSpeekProcess(mBufferPecent,mSpeakPecent){
    //缓冲进度
    var processbar = document.querySelector('#processbar1')
    processbar.style.width = mBufferPecent + "%"
    processbar.innerHTML = processbar.style.width

    //播放进度
    var processbar2 = document.querySelector('#processbar2')
    processbar2.style.width = mSpeakPecent + "%"
    processbar2.innerHTML = processbar2.style.width
}

//播放状态回调 1=播放中 2=播放结束
function onAudioPlayStatus(status) {
    if (status === 1) {
        document.querySelector('#tts_start').textContent = '播放中'
    } else {
        document.querySelector('#tts_start').textContent = '开始播放'
        isStart = false
    }
}

function audioPlayOver() {
    wavEnd = true

    //关闭缓冲和播放进度回调
    window.clearInterval(barSpeeckTimer)
    window.clearInterval(barTimer)
    // 修改播放状态
    onAudioPlayStatus(2)
}

function appendSegment(audioSegment) {
    audioSegments.push(audioSegment)
    doAppendSegmentsToSource()
}

function doAppendSegmentsToSource() {
    if (!sourceBuffer || sourceBuffer.updating) {
        return
    }

    if (audioSegments.length > 0) {
        var segment = audioSegments.shift()
        try {
            sourceBuffer.appendBuffer(segment)
        } catch (error) {
            audioSegments.unshift(segment)
            console.log(error)
        }
    }
}

function onUpdateEnd() {
    if (audioSegments.length > 0) {
        doAppendSegmentsToSource()
    } else if (wavEnd) {
        if (mediaSource && mediaSource.readyState === 'open') {
            mediaSource.endOfStream()
        }
    }
}

function onSourceOpen() {
    sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg')
    sourceBuffer.addEventListener('updateend', onUpdateEnd)
    sourceBuffer.addEventListener('error', (e) => {
        console.log('MSE source buffer error, ', e)
    })
}

function initMediaSource() {
    mp3Encoder = new lamejs.Mp3Encoder(1, sampleRate, 64)
    mediaSource = new window.MediaSource()
    mediaSource.addEventListener('sourceopen', onSourceOpen)
    mediaSource.addEventListener('sourceended', () => {
        console.log('load audio segment finish')
    })
    mediaSource.addEventListener('sourceclose', () => {
        console.log('audio player close')
    })

    myAudio.setAttribute('src', window.URL.createObjectURL(mediaSource))
    myAudio.addEventListener('ended', () => {
        audioPlayOver()
        uninitMediaSource()
    })
    myAudio.addEventListener('playing', () => {
        onAudioPlayStatus(1)
    })
    myAudio.play()
}

function uninitMediaSource() {
    mp3Encoder = null
    audioSegments = []
    if (mediaSource) {
        if (sourceBuffer) {
            if (mediaSource.readyState !== 'closed') {
                mediaSource.removeSourceBuffer(sourceBuffer)
            }
    
            sourceBuffer = null
            if (mediaSource.readyState === 'open') {
                mediaSource.endOfStream()
            }
        }
        mediaSource = null
    }

    myAudio.src = ''
    myAudio.removeAttribute('src')
}

// 保存一次合成音频文件
function audioSave(isEnd, audio) {
    if (isEnd) {
        if (audioLen !== 0) {
            var offset = 0
            var audioBlob = new Int8Array(audioLen)
            for (var i = 0; i < audioBuffer.length; i++) {
                audioBlob.set(audioBuffer[i], offset)
                offset += audioBuffer[i].length
            }
            // 保存整个合成音频
            var blob = new Blob([audioBlob])
            var audioUrl = window.URL.createObjectURL(blob)
            document.querySelector('#download').setAttribute('href', audioUrl)
            document.querySelector('#download').setAttribute('download', 'tts.pcm')
            // 高亮显示下载按钮,表示音频可下载
            document.querySelector('#download').className = document.querySelector('#download').className.replace('btn-secondary', 'btn-primary')
        }

        // 清空合成音频缓存数据
        audioBuffer = []
        audioLen = 0
        wavEnd = true

        var mp3bufLast = mp3Encoder.flush()
        if (mp3bufLast.length > 0) {
            appendSegment(mp3bufLast.buffer)
        }
        return
    }

    if (audio !== "") {
        totalLength += audio.length
        var segment = new Int8Array(audio.length)
        for (var i = 0; i < audio.length; i++) {
            segment[i] = audio.charCodeAt(i)
        }

        audioBuffer.push(segment)
        audioLen += segment.length

        var mp3buf = mp3Encoder.encodeBuffer(new Int16Array(segment.buffer))
        if (mp3buf.length > 0) {
            appendSegment(mp3buf.buffer)
        }

        // 估算缓冲进度
        audioCount++
        mBufferPecent = Math.round(100 * (Math.min(audioCount, textLength / 5) / (textLength / 5)))
    }
}

function getParams() {
    var params = {}
    var parArr = document.querySelector('#tts_params').value.split("&")
    for (var i = 0; i < parArr.length; i++) {
        var idx = parArr[i].indexOf("=")
        params[parArr[i].substr(0, idx)] = parArr[i].substr(idx + 1)
    }

    return params
}

function getUrls() {
    return document.querySelector('#tts_url').value
}

function getText() {
    return document.querySelector('#tts_text').value
}

function isAuth() {
    return document.querySelector('#auth').checked
}

var tts = new Tts(audioSave)

tts.onError(function (obj) {
    tts.stop()

    uninitMediaSource()

    audioPlayOver()
    isStart = false
    console.log(obj)
    alert(JSON.stringify(obj))
})

document.querySelector('#tts_start').addEventListener('click', function () {
    if (isStart) {
        return
    }
    // 开始按钮已按
    isStart = true

    // 下载音频按钮重置
    document.querySelector('#download').setAttribute('href', '#')
    document.querySelector('#download').removeAttribute('download')
    document.querySelector('#download').className = document.querySelector('#download').className.replace('btn-primary', 'btn-secondary')
    var params = getParams()
    var url = getUrls()
    var text = getText()
    var bAuth = isAuth()

    sampleRate = params['auf'] === '3' ? 8000 : 16000
    textLength = text.length
    audioPlayInit()

    initMediaSource()

    tts.start(url, params, text, bAuth)
})

document.querySelector('#tts_pause').addEventListener('click', function () {
    // 没有点击开始, 暂停无效
    if (!isStart) {
        return
    }
    audioPlayPause()
})

document.querySelector('#tts_resume').addEventListener('click', function () {
    // 没有点击开始, 继续播放无效
    if (!isStart) {
        return
    }
    audioPlayResume()
})

document.querySelector('#tts_stop').addEventListener('click', function () {
    if (!isStart) {
        return
    }

    tts.stop()

    uninitMediaSource()

    audioPlayOver()
    isStart = false
})
