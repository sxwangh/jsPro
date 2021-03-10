// webpack use jquery

// 1. npm install jquery 前置条件
//    npm install jquery.cookie
// 2. webpack plugin  --- ProvidePlugin : Automatically load modules instead of having to import or require them everywhere.
// webpack.base.conf.js
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ],
  entry: {},
  output: {},
  resolve: {},
  module: { rules: [] }, // loader
};

// 入口.js 中不用再import $ from 'jquery';
// 入口.js 中 import xx from 'query.cookie';

// Then in any of our source code:
// in a module
//  $('#item'); // <= just works
//  jQuery('#item'); // <= just works
// $ is automatically set to the exports of module "jquery"


// cookie  (document.cookie)
// document.cookie = 'name=123; expires=xxx'

// cookie 失效时间  -- 浏览器用
// 1.默认失效时间：关闭浏览器时
// 2.Cookie有两个属性可以用于控制存活时长: Expires 和 Max-Age. Expires指定一个时间点, 超过这个时间点之后客户端Cookie过期
// (将会由浏览器清除). Max-Age指定浏览器自从收到该cookie后可以保存多少时间, 单位是秒.

// js 客户端cookie：example
var d = new Date();
d.setTime(d.getTime() + 5*60*1000); // in milliseconds
document.cookie = 'foo=bar;path=/;expires='+d.toGMTString()+';'; // 推荐

document.cookie = 'foo=bar;path=/;max-age='+5*60+';';

// 后台cookie设置
Cookie cookie = new Cookie("time","20080808"); // 新建Cookie
cookie.setDomain(".helloweenvsfei.com");           // 设置域名
cookie.setPath("/");                              // 设置路径
cookie.setMaxAge(Integer.MAX_VALUE);               // 设置有效期
response.addCookie(cookie);                       // 输出到客户端



// token过期
axios.interceptors.response.use(response => {
  console.log('axios请求正常！');
  return Promise.resolve(response); // !
}, error => {
  if (error.response.data.statusCode) {
    switch (error.response.data.statusCode) {
      // 410: 未登录， token过期，跳转回登录界面
      case 410:
        localStorage.removeItem('token');
        window.location = "login.html";
        break;
    }
  }
});
// 请求携带token api.js
if (token && token !== '') {
  axios.defaults.headers.token = localStorage.getItem('token');
}
// 登录
function login(params) {
  return axios.post(`${SECURITY}/login`, params, {
    headers: {
      token: ''
    }
  });
}
