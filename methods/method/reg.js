// 1.富文本去标签（过滤富文本中文字、图片、样式便签，只保留文字标点空格，用来计算富文本的字符数）
export function htmlToText() {
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

// 2.获取当前域名下的localStorage中存储内容的size （目前该方法按全中文来计算）
// TODO：一个英文字符 = 1字节
export function getLocalStorageSize() {
    //
    let size = 0;
    const obj = window.localStorage;
    for(let item in obj) {
        if(obj.hasOwnProperty(item)) {
            size += obj.getItem(item).length;
        }
    }
    console.log('当前已用存储：' + ((size * 3) / 1024) + 'KB'); // 一个中文字符 = 3字节 （1024字节 = 1kb）
}
