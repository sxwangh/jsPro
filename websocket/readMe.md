### WebsocketHeart 使用
```javascript
myWs = new WebsocketHeart({
    url: `wss://${window.location.host}/api/cpts/ws/v1/job/status?scenseId=${scenseId}`,
});
myWs.onopen = () => {
    console.log('open');
};
myWs.onerror = () => {
    console.log('onerror');
};
myWs.onclose = () => {
    console.log('onclose');
};
myWs.onmessage = evt => {
    console.log(`onmessage--not pong：${JSON.parse(evt.data)}`);
    const resultData = JSON.parse(evt.data);
    console.log('处理返回数据：resultData')；
};
```

### ts改造
