function getUrls() {
    return document.querySelector('#nlp_url').value
}

function getText() {
    return document.querySelector('#nlp_text').value
}

function getParams() {
    var params = {}
    var parArr = document.querySelector('#nlp_params').value.split("&")
    for (var i = 0; i < parArr.length; i++) {
        var idx = parArr[i].indexOf("=")
        params[parArr[i].substr(0, idx)] = parArr[i].substr(idx+1)
    }

    return params
}

function isAuth() {
    return document.querySelector('#auth').checked
}

var nlp = new Nlp()

nlp.onMessage(function (obj) {
    nlpResult.textContent = JSON.stringify(obj)
})

nlp.onError(function (obj) {
    console.log(JSON.stringify(obj))
    alert(JSON.stringify(obj))
})

var nlpResult = document.querySelector('#nlp_result')

document.querySelector('#nlp_start').addEventListener('click', function(){
    nlpResult.textContent = ''

    var url = getUrls()
    var text = getText()
    var param = getParams()
    var bAuth = isAuth()

    nlp.start(url, param, text, bAuth)
})