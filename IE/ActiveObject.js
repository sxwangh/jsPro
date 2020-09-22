
function openChrome(){
    var url = "http://xxx";
    // ActiveObject仅在IE下可创建
    var objShell = new ActiveObject("WScript.Shell");
    // 注意这里是/c，不可使用/k，否则资源不会释放(关闭窗口)
    var cmd = "cmd.exe /c start D:\\software\\xxx\\chrome.exe " + url;
    objShell.Run(cmd, 0, true);

    // objShell.Run("cmd.exe /c start chrome www.baidu.com",0,true);

}

// 注意：使用/c，不可用/k，否则资源不会释放，页面会变得很卡。
//
// 但是由于IE的安全设置，需要对IE进行配置后才可执行。请见：https://blog.csdn.net/weixin_41949786/article/details/80700898
//
//     JS可调用客户端的cmd，所以可以实现客户端点击链接跳转chrome的功能。
//
//  
//
// IE中打开其他浏览器的资料：
//
// https://blog.csdn.net/qq_24598601/article/details/80225655
// cmd.exe /c dir 是执行完dir命令后关闭命令窗口。
//
// cmd.exe /k dir 是执行完dir命令后不关闭命令窗口。
//
// cmd.exe /c start dir 会打开一个新窗口后执行dir指令，原窗口会关闭。
//
// cmd.exe /k start dir 会打开一个新窗口后执行dir指令，原窗口不会关闭。

// java 通过默认浏览器打开链接（本机：服务器）   https://blog.csdn.net/qq_30273259/article/details/55232407



// WScript.Shell（Windows Script Host Runtime Library）是一个对象，对应的文件是C:/WINDOWS/system32/wshom.ocx，Wscript.shell是服务器系统会用到的一种组件。shell 就是“壳”的意思，这个对象可以执行操作系统外壳常用的操作，比如运行程序、读写注册表、环境变量等。这个对象通常被用在VB或VBS编程中。
//
// 　　安装WScript.Shell对象：regsvr32 WShom.Ocx
//
// 卸载WScript.Shell对象：regsvr32 -u WShom.Ocx 或者 regsvr32 /u WShom.Ocx
//
// For Example:
//
//     1. 建立test.bat文件，存于D:根目录下，作用是将*txt文件拷贝到d:/test目录下。　　
//
// 1
// 2
// 3
// md test
// copy d:/*.txt d:/test
// pause



//注意: ActiveX 对象可能会出现安全问题。要使用ActiveXObject, 对于本地局域网，你通常需要将自定义设置更改为"对未标记为可安全执行脚本ActiveX控件执行初始化并执行脚本"。
// MDN  https://developer.mozilla.org/zh-CN/docs/Archive/Web/JavaScript/Microsoft_Extensions/ActiveXOb
