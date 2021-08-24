// serverRouter.js  commonjs
const express = require('express');
const expressWs = require('express-ws');

const router = express.Router();
expressWs(router);
// new Date('2020-3-14 11:30:00').getTime()
const startTime = new Date().getTime();
router
  .ws('/job', (ws, req) => {
    const data1 = {
        "prepare": {
            "startTime": startTime,
            "expectDuration": 4,
            "stageStatus": "running",
            "errMsg": null
        },
        "execute": {
            "startTime": null,
            "expectDuration": 2,
            "stageStatus": "waiting",
            "errMsg": null
        },
        "report": {
            "startTime": null,
            "expectDuration": 3,
            "stageStatus": "waiting",
            "errMsg": null
        },
        "jobStatus": "running"
    };
    const data2 = {
        "prepare": {
            "startTime":  startTime,
            "expectDuration": 4,
            "stageStatus": "running",
            "errMsg": null
        },
        "execute": {
            "startTime":  null, // 更新处
            "expectDuration": 2,
            "stageStatus": "waiting", // 更新处
            "errMsg": null
        },
        "report": {
            "startTime": null,
            "expectDuration": 3,
            "stageStatus": "waiting",
            "errMsg": null
        },
        "jobStatus": "running"
    };
    const data3 = {
        "prepare": {
            "startTime": startTime,
            "expectDuration": 4,
            "stageStatus": "success",
            "errMsg": null
        },
        "execute": {
            "startTime": new Date().getTime(),  // 更新处
            "expectDuration": 2,
            "stageStatus": "running",
            "errMsg": null
        },
        "report": {
            "startTime": null,
            "expectDuration": 3,
            "stageStatus": "waiting",
            "errMsg": null
        },
        "jobStatus": "running"
    };
    // ws.send('asr..');
    ws.send(JSON.stringify(data1));
    ws.send(JSON.stringify(data2));
    ws.send(JSON.stringify(data3));

    setInterval(() => {
      ws.send('pang');
    }, 2000);

  setTimeout(() => {
      JSON.stringify(data1)
  }, 8000);
  setTimeout(() => {
      JSON.stringify(data2)
  }, 16000);
  setTimeout(() => {
      JSON.stringify(data3)
  }, 24000);

    ws.on('message', (msg) => {
      console.log(`/job接到数据：${msg}`);
      console.log(req);
    });
    ws.on('close', () => {
      console.log('/job链接关闭');
      console.log(req);
    });
  });

module.exports = router;
