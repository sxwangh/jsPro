const arr = {"agentId":"1604304206778","callId":"保险场景.xlsx_44b16246-997b-460f-ab6d-21b5689318d4","currentFlowList":["开场--1"],"customerId":"customer001","navigations":[{"comment":"","hit":true,"intent_name":"","name":"开场", "no": 1, "nodes":[{"description":"1、您好！请问是**先生/女士吗？\n2、我是招商银行总行的线上客户经理XXX，今天联系跟您做个电话拜访，以后您在招行投资理财、用卡问题、都可以联系我；工作时间您可以登陆手机银行——首页——点击小招顾问（十宫格内可以找到/第三排第一个菜单就可以看到，这里客户经理可根据自己的沟通习惯来选择）——小招理财顾问就可以直接找到我。","optional":false,"role":"any","sg_id":"55c72c9cd09f4fe49c1000aef258a0db","sg_name":"开场介绍"}],"role":"staff","type":"fixed"},{"comment":"","hit":true,"intent_name":"","name":"促成","no": 2,"nodes":[{"description":"咱们这款产品额度也比较有限，给您约好后您在*月*日前买上就可以，*月*日就起息了，我可以给您发送订单，体验订单功能，快速订单一键购买，方便安全，还可以参与订单体验礼哦~","optional":false,"role":"any","sg_id":"855866797ab242b09614b50f3d2f0cd7","sg_name":"促成1"},{"description":"为便于后续的沟通，冒昧问一下，您的手机方便添加我行的企业微信吗？您有任何的金融相关需求都可以在企业微信这里随时联系我哟！","optional":false,"role":"any","sg_id":"e1aa9701480f4758857643277b035e65","sg_name":"促成2"}],"role":"staff","type":"fixed"}]};

const flowList = arr.navigations;

flowList.sort((x, y) => {
  return y.no - x.no;
});
console.log(JSON.stringify(flowList,null,2));
