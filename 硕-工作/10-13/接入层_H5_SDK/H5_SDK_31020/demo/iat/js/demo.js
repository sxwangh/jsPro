let mic_pressed = 0 // 0:初始状态, 1:录音开始, 2:录音停止中
var pgsResult = ''

var iat_result = document.querySelector('#iat_result')
var volumeTip = document.querySelector('#volume')
var button = document.querySelector('#iat_start')
volumeTip.width = parseFloat(button.style.width - 100)
volumeTip.height = 10
var volumeWrapper = document.querySelector('#canvas_wrapper')

var volumeEvent = (function(){
    // 音量检测
    var lowVolumeLimit = 8
    var maxTooLow = 5
    var maxVol = 0
    var isTooLow = false
    var tooLowCnt = 0
    var volCheckId

    // 音频大小显示
    var lastVolume = 0
    var cwidth = volumeTip.width
    var cheight = volumeTip.height
    var ctx = volumeTip.getContext('2d')
    var gradient = ctx.createLinearGradient(0, 0, cwidth, 0)
    var animationId
    gradient.addColorStop(1, 'red')
    gradient.addColorStop(0.8, 'yellow')
    gradient.addColorStop(0.5, '#9ec5f5')
    gradient.addColorStop(0, '#c1f1c5')
    volumeWrapper.style.display = 'none'

    var listen = function(volume){
        lastVolume = volume
        maxVol = Math.max(maxVol, volume)
    }
    var draw = function(){
        if(volumeWrapper.style.display === "none"){
            window.cancelAnimationFrame(animationId)
        }
        ctx.clearRect(0, 0, cwidth, cheight)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 1 + lastVolume*cwidth/30, cheight)
        animationId = window.requestAnimationFrame(draw)
    }
    var checkVol = function(){
        if (!isTooLow && maxVol < lowVolumeLimit) {
            tooLowCnt++
            if (tooLowCnt >= maxTooLow) {
                isTooLow = true
                console.log('声音过小')
            }
            return
        }
        if (isTooLow && maxVol >= lowVolumeLimit) {
            console.log('声音正常')
        }
        if (maxVol >= lowVolumeLimit) {
            tooLowCnt = 0
            window.clearInterval(volCheckId)
        }
    }
    var start = function(){
        maxVol = 0
        isTooLow = false
        tooLowCnt = 0
        volCheckId = window.setInterval(checkVol, 500)
        animationId = window.requestAnimationFrame(draw)
        volumeWrapper.style.display = 'block'
    }
    var stop = function(){
        window.cancelAnimationFrame(animationId)
        window.clearInterval(volCheckId)
        volumeWrapper.style.display = 'none'
    }
    return {
        "listen":listen, // 监听音量
        "start":start,
        "stop":stop
    }
})()

function isSpeex() {
    return document.querySelector('#speex').checked
}

// 获取识别参数
function getParams() {
    var params = {}
    var parArr = document.querySelector('#iat_params').value.split("&")
    for (var i = 0; i < parArr.length; i++) {
        var idx = parArr[i].indexOf("=")
        params[parArr[i].substr(0, idx)] = parArr[i].substr(idx+1)
    }

    return params
}

function getUrls() {
    return document.querySelector('#iat_url').value
}

function isAuth() {
    return document.querySelector('#auth').checked
}

var audioBuffer = []
var audioLen = 0

function saveWave(buf) {
    if (buf) {
        var audio = new Uint8Array(buf.buffer)
        audioBuffer.push(audio)
        audioLen += audio.length
    }
}

function download() {
	if (audioLen === 0) {
		return
	}
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
    document.querySelector('#download').setAttribute('download', 'recoder.pcm')
    // 高亮显示下载按钮,表示音频可下载
    document.querySelector('#download').className = document.querySelector('#download').className.replace('btn-secondary', 'btn-primary')
}

var iat = new Iat()

iat.onStart(function () {
    console.log('iat.onStart...');
    button.textContent = '停止录音'
    button.className = button.className.replace('btn-secondary', 'btn-primary')
})

iat.onMessage(function (obj) {
    console.log('iat.onMessage...');
    if (obj.pgs === 1) {
        pgsResult = pgsResult + obj.result
        iat_result.textContent = pgsResult
    } else if (obj.pgs === 0){
        iat_result.textContent = pgsResult + obj.result
    }
})

iat.onError(function (obj) {
    console.log('iat.onError...');
    console.log(JSON.stringify(obj))
    mic_pressed = 0
    if (audioBuffer.length) {
        download()
    }
    // 异常情况处理
    volumeEvent.stop()
    button.textContent = '开始录音'
    button.className = button.className.replace('btn-primary', 'btn-secondary')
})

iat.onEnd(function () {
    console.log('iat.onEnd...');
    mic_pressed = 0
    if (audioBuffer.length) {
        download()
    }
    // 关闭音量检测
    // 异常情况处理
    volumeEvent.stop()
    button.textContent = '开始录音'
    button.className = button.className.replace('btn-primary', 'btn-secondary')
})

document.querySelector('#iat_start').addEventListener('click', function(){
    if (mic_pressed === 0) {
        mic_pressed = 1
        audioBuffer = []
        audioLen = 0
        document.querySelector('#download').setAttribute('href', '#')
        document.querySelector('#download').removeAttribute('download')
        document.querySelector('#download').className = document.querySelector('#download').className.replace('btn-primary', 'btn-secondary')

        var par = getParams()
        var url = getUrls()
        var speex = isSpeex()
        var bAuth = isAuth()
        // 打开音量检测
        volumeEvent.start()
        // 设置发送频率, 6帧发送一次音频, 每次识别开始前设置
        iat.setFrameCount(5)
        // 清空上次识别结果
        iat_result.textContent = ''
        pgsResult = ''
        // 启动识别
      debugger;
        iat.start(url, par, speex, volumeEvent.listen, bAuth, saveWave)
    } else if (mic_pressed === 1) {
        mic_pressed = 2
        iat.stop()
        volumeEvent.stop()
    }
})
