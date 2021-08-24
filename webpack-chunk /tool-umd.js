!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() :
        "function" == typeof define && define.amd ? define([], t) :
            "object" == typeof exports ? exports.anyNameIsOk = t() : e.anyNameIsOk = t()
}(this, (function() {
        return (()=>{
                "use strict";
                var e = {
                    484: (e,t,o)=>{
                        o.r(t),
                            o.d(t, {
                                default: ()=>n
                            });
                        const n = {
                            getUrlParamByName: function(e) {
                                let t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
                                    , o = null;
                                return window.location.href.split("?")[1] && (o = window.location.href.split("?")[1].match(t)),
                                    null != o ? decodeURIComponent(o[2]) : null
                            },
                            trim: function(e) {
                                return e.replace(/(^\s*)|(\s*$)/g, "")
                            },
                            getToday: function(e=!1) {
                                const t = new Date;
                                return e || (t.setHours(0),
                                    t.setMinutes(0),
                                    t.setSeconds(0)),
                                    t.setMilliseconds(0),
                                    t
                            },
                            getDaysAgo: function(e, t=!1) {
                                const o = new Date;
                                return o.setDate(o.getDate() - e + 1),
                                t || (o.setHours(0),
                                    o.setMinutes(0),
                                    o.setSeconds(0)),
                                    o.setMilliseconds(0),
                                    o
                            },
                            getFormatDate: function(e) {
                                const t = new Date(e);
                                return `${t.getFullYear()}-${t.getMonth() + 1 < 10 ? `0${t.getMonth() + 1}` : t.getMonth() + 1}-${t.getDate() < 10 ? `0${t.getDate()}` : t.getDate()} `
                            }
                        }
                    }
                }
                    , t = {};
                function o(n) {
                    if (t[n])
                        return t[n].exports;
                    var r = t[n] = {
                        exports: {}
                    };
                    return e[n](r, r.exports, o),
                        r.exports
                }
                return o.d = (e,t)=>{
                    for (var n in t)
                        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: t[n]
                        })
                }
                    ,
                    o.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
                    o.r = e=>{
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                    }
                    ,
                    o(484)
            }
        )()
    }
));
