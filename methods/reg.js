// 过滤富文本中文字、
function htmlToText() {
    let html = val;
    html = html.replace(/(\n)/g, '');
    html = html.replace(/(\t)/g, '');
    html = html.replace(/(\r)/g, '');
    html = html.replace(/<\/?[^>]*>/g, '');
    html = html.replace(/\s*/g, '');
    html = html.replace(/&nbsp;/ig, ' ');
    return html;
}
htmlToText();