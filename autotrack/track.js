var __tea_iife_export__ = function(exports) {
    "use strict";
    var __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in t = arguments[i])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    };
    function __rest(e, t) {
        var i = {};
        for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 && (i[n[r]] = e[n[r]])
        }
        return i
    }
    function __values(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator]
          , i = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && i >= e.length && (e = void 0),
                {
                    value: e && e[i++],
                    done: !e
                }
            }
        }
    }
    function __read(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i)
            return e;
        var n, r, o = i.call(e), s = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
                s.push(n.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (i = o.return) && i.call(o)
            } finally {
                if (r)
                    throw r.error
            }
        }
        return s
    }
    function __spread() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(__read(arguments[t]));
        return e
    }
    var commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function createCommonjsModule(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var js_cookie = createCommonjsModule(function(e, t) {
        var i;
        i = function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i)
                        t[n] = i[n]
                }
                return t
            }
            function t(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function i(n) {
                function r() {}
                function o(t, i, o) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (o = e({
                            path: "/"
                        }, r.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)),
                        o.expires = o.expires ? o.expires.toUTCString() : "";
                        try {
                            var s = JSON.stringify(i);
                            /^[\{\[]/.test(s) && (i = s)
                        } catch (e) {}
                        i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var a = "";
                        for (var c in o)
                            o[c] && (a += "; " + c,
                            !0 !== o[c] && (a += "=" + o[c].split(";")[0]));
                        return document.cookie = t + "=" + i + a
                    }
                }
                function s(e, i) {
                    if ("undefined" != typeof document) {
                        for (var r = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
                            var a = o[s].split("=")
                              , c = a.slice(1).join("=");
                            i || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                            try {
                                var u = t(a[0]);
                                if (c = (n.read || n)(c, u) || t(c),
                                i)
                                    try {
                                        c = JSON.parse(c)
                                    } catch (e) {}
                                if (r[u] = c,
                                e === u)
                                    break
                            } catch (e) {}
                        }
                        return e ? r[e] : r
                    }
                }
                return r.set = o,
                r.get = function(e) {
                    return s(e, !1)
                }
                ,
                r.getJSON = function(e) {
                    return s(e, !0)
                }
                ,
                r.remove = function(t, i) {
                    o(t, "", e(i, {
                        expires: -1
                    }))
                }
                ,
                r.defaults = {},
                r.withConverter = i,
                r
            }(function() {})
        }
        ,
        e.exports = i()
    })
      , Memory = function() {
        function e() {
            this.cache = {}
        }
        return e.prototype.setItem = function(e, t) {
            this.cache[e] = t
        }
        ,
        e.prototype.getItem = function(e) {
            return this.cache[e]
        }
        ,
        e.prototype.removeItem = function(e) {
            this.cache[e] = void 0
        }
        ,
        e.prototype.setCookie = function(e, t, i, n) {
            this.cache[e] = t
        }
        ,
        e.prototype.getCookie = function(e, t) {
            return this.cache[e]
        }
        ,
        e
    }();
    function isSupportLS() {
        try {
            return localStorage.setItem("_ranger-test-key", "hi"),
            localStorage.getItem("_ranger-test-key"),
            localStorage.removeItem("_ranger-test-key"),
            !0
        } catch (e) {
            return !1
        }
    }
    function isSupportSession() {
        try {
            return sessionStorage.setItem("_ranger-test-key", "hi"),
            sessionStorage.getItem("_ranger-test-key"),
            sessionStorage.removeItem("_ranger-test-key"),
            !0
        } catch (e) {
            return !1
        }
    }
    var local = {
        getItem: function(e) {
            try {
                var t = localStorage.getItem(e)
                  , i = t;
                try {
                    t && "string" == typeof t && (i = JSON.parse(t))
                } catch (e) {}
                return i || void 0
            } catch (e) {}
        },
        setItem: function(e, t) {
            try {
                var i = "string" == typeof t ? t : JSON.stringify(t);
                localStorage.setItem(e, i)
            } catch (e) {}
        },
        removeItem: function(e) {
            try {
                localStorage.removeItem(e)
            } catch (e) {}
        },
        getCookie: function(e, t) {
            try {
                return js_cookie.get(e, {
                    domain: t || document.domain
                })
            } catch (e) {
                return ""
            }
        },
        setCookie: function(e, t, i, n) {
            try {
                var r = n || document.domain
                  , o = +new Date + i;
                js_cookie.set(e, t, {
                    expires: new Date(o),
                    path: "/",
                    domain: r
                })
            } catch (e) {}
        },
        isSupportLS: isSupportLS()
    }
      , session = {
        getItem: function(e) {
            try {
                var t = sessionStorage.getItem(e)
                  , i = t;
                try {
                    t && "string" == typeof t && (i = JSON.parse(t))
                } catch (e) {}
                return i || void 0
            } catch (e) {}
        },
        setItem: function(e, t) {
            try {
                var i = "string" == typeof t ? t : JSON.stringify(t);
                sessionStorage.setItem(e, i)
            } catch (e) {}
        },
        removeItem: function(e) {
            try {
                sessionStorage.removeItem(e)
            } catch (e) {}
        },
        isSupportSession: isSupportSession()
    }
      , Storage = function() {
        function e(e, t) {
            this._storage = t && "session" === t ? session : !e && local.isSupportLS ? local : new Memory
        }
        return e.prototype.getItem = function(e) {
            return this._storage.getItem(e)
        }
        ,
        e.prototype.setItem = function(e, t) {
            this._storage.setItem(e, t)
        }
        ,
        e.prototype.getCookie = function(e, t) {
            return this._storage.getCookie(e, t)
        }
        ,
        e.prototype.setCookie = function(e, t, i, n) {
            this._storage.setCookie(e, t, i, n)
        }
        ,
        e.prototype.removeItem = function(e) {
            this._storage.removeItem(e)
        }
        ,
        e
    }()
      , LOG_URL = {
        cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az21z1lz21z21z1bz1iz4az1az1mz1k",
        sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
        va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
        in: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z49z24z18z49z23z21z1cz18z21z22z4ez18z4az22z1gz1iz22z1mz1iz24z4az1az1mz1k"
    }
      , WEBID_URL = "/v1/user/webid"
      , SSID_URL = "/v1/user/ssid"
      , REPORT_URL = "/v1/list"
      , NEW_REPORT_URL = "/list"
      , GIF_URL = "/v1/gif"
      , SDK_VERSION = "4.1.62_1"
      , ERROR = {
        NO_URL: 4001,
        IMG_ON: 4e3,
        IMG_CATCH: 4002,
        BEACON_FALSE: 4003,
        XHR_ON: 500,
        RESPONSE: 5001,
        TIMEOUT: 5005
    }
      , CACHEKEY = function(e, t) {
        return t ? "__tea_cache_tokens_" + e : "__tea_cache_events_" + e
    }
      , CONFIGKEY = function(e) {
        return "__tea_cache_config_" + e
    }
      , COOKIEKEY = function(e) {
        return "__tea_cookie_tokens_" + e
    }
      , SESSIONKEY = function(e) {
        return "__tea_session_id_" + e
    }
      , getNameSpace = function() {
        if ("undefined" != typeof window)
            return window.TeaAnalyticsObject
    }
      , DOMAINS = {
        cn: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
        va: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
        sg: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k"
    }
      , COOKIE_EXPIRE = 6048e5
      , API = "/service/2/abtest_config/"
      , STYLE_ID = "__rangers_ab_style__"
      , STORAGE_DATA_KEY = "__tea_sdk_ab_version"
      , STORAGE_DATA_EXPRIRE = 2592e6
      , ET_TEST_URL = "v1/list_test"
      , EDITOR_URL_NEW_ASC = "1fz22z22z1nz21z4mz4bz4bz1jz1dz4fz49z1bz18z22z18z4az24z1mz1jz1az1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz1bz18z22z18z49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz24z1gz21z23z18z1jz49z1cz1bz1gz22z1mz20z49z20z18z1lz1ez1cz20z21z4az1hz21"
      , EDITOR_URL_OLD_ASC = "1fz22z22z1nz21z4mz4bz4bz21z4fz4az1nz21z22z18z22z1nz4az1az1mz1kz4bz1nz1ez1az4bz22z1cz1az1fz4bz1az1mz1jz1jz1cz1az22z4bz24z1gz21z23z18z1jz49z1cz1bz1gz22z1mz20z4az1hz21"
      , VISUAL_URL_ASC = "1fz22z22z1nz21z4mz4bz4bz1jz1dz4fz49z1bz18z22z18z4az24z1mz1jz1az1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz1bz18z22z18z49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz24z1gz21z23z18z1jz49z18z19z49z1az1mz20z1cz4az1hz21"
      , VISUAL_URL_RANGER = "1fz22z22z1nz21z4mz4bz4bz1jz1dz4fz49z1bz18z22z18z4az24z1mz1jz1az1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz1bz18z22z18z49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz24z1gz21z23z18z1jz49z18z19z49z1jz1mz18z1bz1cz20z4az1hz21"
      , HOT_PIC_URL = "1fz22z22z1nz21z4mz4bz4bz1jz1dz4fz49z1bz18z22z18z4az24z1mz1jz1az1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz1bz18z22z18z49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz1fz1cz18z22z1kz18z1nz49z1az1mz20z1c"
      , VISUAL_URL_INSPECTOR = "1fz22z22z1nz21z4mz4bz4bz1jz1dz4fz49z1bz18z22z18z4az24z1mz1jz1az1az1bz1lz4az1az1mz1kz4bz1mz19z1hz4bz1bz18z22z18z49z21z22z18z22z1gz1az4bz1jz1mz1ez49z21z1bz1iz4bz1az1mz1jz1jz1cz1az22z4bz22z1cz21z22z1cz20z49z1cz24z1cz1lz22z49z1gz1lz21z1nz1cz1az22z1mz20";
    function xhr(e, t, i, n, r, o, s, a) {
        try {
            var c = new XMLHttpRequest
              , u = a || "POST";
            c.open(u, "" + e, !0),
            c.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
            r && c.setRequestHeader("X-MCS-AppKey", "" + r),
            s && (c.withCredentials = !0),
            c.onload = function() {
                if (i) {
                    var e = null;
                    if (c.responseText) {
                        try {
                            e = JSON.parse(c.responseText)
                        } catch (t) {
                            e = {}
                        }
                        i(e, t)
                    }
                }
            }
            ;
            try {
                o && (c.timeout = o),
                o && (c.ontimeout = function() {
                    n && n(t, ERROR.TIMEOUT)
                }
                ),
                c.onerror = function() {
                    c.abort(),
                    n && n(t, ERROR.XHR_ON)
                }
                ,
                c.send(JSON.stringify(t))
            } catch (e) {}
        } catch (e) {}
    }
    var isSupportBeacon = function() {
        return !(!window.navigator || !window.navigator.sendBeacon)
    }
      , NOOP = function() {}
      , encodePayload = function(e) {
        var t = "";
        for (var i in e)
            e.hasOwnProperty(i) && void 0 !== e[i] && (t += "&" + i + "=" + encodeURIComponent(JSON.stringify(e[i])));
        return t = "&" === t[0] ? t.slice(1) : t
    }
      , sendByImg = function(e, t, i, n) {
        try {
            var r = e.match(/\/v\d\//)
              , o = "";
            o = r ? r[0] : -1 !== e.indexOf("/v1/") ? "/v1/" : "/v2/";
            var s = e.split(o)[0];
            if (!s)
                return void n(e, t, ERROR.NO_URL);
            t.forEach(function(r) {
                var o = encodePayload(r)
                  , a = new Image(1,1);
                a.onload = function() {
                    a = null,
                    i && i()
                }
                ,
                a.onerror = function() {
                    a = null,
                    n && n(e, t, ERROR.IMG_ON)
                }
                ,
                a.src = "" + s + GIF_URL + "?" + o
            })
        } catch (i) {
            n && n(e, t, ERROR.IMG_CATCH, i.message)
        }
    }
      , request = function(e, t, i, n, r, o, s, a, c, u) {
        var h = window.navigator.userAgent
          , d = -1 !== window.navigator.appName.indexOf("Microsoft Internet Explorer") && (-1 !== h.indexOf("MSIE 8.0") || -1 !== h.indexOf("MSIE 9.0"))
          , l = !!n;
        if (!l && d)
            sendByImg(e, i, r, o);
        else if (!l && a)
            return isSupportBeacon() ? (u ? u() : NOOP(),
            void (window.navigator.sendBeacon(e, JSON.stringify(i)) ? r() : o(e, i, ERROR.BEACON_FALSE))) : void sendByImg(e, i, r, o);
        s && delete i.app_key,
        xhr(e, i, r, o, n, t, c)
    };
    function b(e) {
        return e ? (e ^ 16 * Math.random() >> e / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b)
    }
    var webid = function() {
        return b().replace(/-/g, "").slice(0, 19)
    };
    function decrypto(e, t, i) {
        if ("string" == typeof e && "number" == typeof t && "number" == typeof i) {
            var n, r = [];
            i = i <= 25 ? i : i % 25;
            var o = String.fromCharCode(i + 97);
            n = e.split(o);
            for (var s = 0; s < n.length; s++) {
                var a = parseInt(n[s], i);
                a = 1 * a ^ t;
                var c = String.fromCharCode(a);
                r.push(c)
            }
            return r.join("")
        }
    }
    var decodeUrl = function(e) {
        return decrypto(e, 64, 25)
    }
      , UTM = function(e, t, i, n) {
        var r = new Storage(!1)
          , o = new Storage(!1,"session")
          , s = e ? "_tea_utm_cache_" + e : "_tea_utm_cache"
          , a = e ? "_$utm_from_url_" + e : "_$utm_from_url"
          , c = {}
          , u = ["tr_shareuser", "tr_admaster", "tr_param1", "tr_param2", "tr_param3", "tr_param4", "$utm_from_url"]
          , h = {
            creative_id: Number(t.creative_id) || void 0,
            ad_id: Number(t.ad_id) || void 0,
            campaign_id: Number(t.campaign_id) || void 0,
            utm_source: t.utm_source,
            utm_medium: t.utm_medium,
            utm_campaign: t.utm_campaign,
            utm_term: t.utm_term,
            utm_content: t.utm_content,
            tr_shareuser: t.tr_shareuser,
            tr_admaster: t.tr_admaster,
            tr_param1: t.tr_param1,
            tr_param2: t.tr_param2,
            tr_param3: t.tr_param3,
            tr_param4: t.tr_param4
        }
          , d = n;
        try {
            var l = !1;
            for (var f in h)
                h[f] && (-1 !== u.indexOf(f) ? (c.hasOwnProperty("tracer_data") || (c.tracer_data = {}),
                c.tracer_data[f] = h[f]) : c[f] = h[f],
                l = !0);
            if (l)
                o.setItem(a, "1"),
                r.setCookie(s, JSON.stringify(c), d, i);
            else {
                var p = r.getCookie(s, i);
                p && (c = JSON.parse(p),
                r.setCookie(s, p, d, i))
            }
            o.getItem(a) && (c.hasOwnProperty("tracer_data") || (c.tracer_data = {}),
            c.tracer_data.$utm_from_url = 1)
        } catch (e) {
            return h
        }
        return c
    }
      , parseURL = function(e) {
        var t = document.createElement("a");
        return t.href = e,
        t
    }
      , parseUrlQuery = function(e) {
        var t = parseURL(e).search;
        t = t.slice(1);
        var i = {};
        return t.split("&").forEach(function(e) {
            var t, n, r = e.split("=");
            r.length && (t = r[0],
            n = r[1]);
            try {
                i[t] = decodeURIComponent(void 0 === n ? "" : n)
            } catch (e) {
                i[t] = n
            }
        }),
        i
    }
      , client = function(e, t, i) {
        var n, r, o = window.screen.width, s = window.screen.height, a = window.navigator.appVersion, c = window.navigator.userAgent, u = window.navigator.language, h = document.referrer, d = h ? parseURL(h).hostname : "", l = "", f = "", p = "", _ = parseUrlQuery(window.location.href), g = "", m = "", v = "", y = "" + parseFloat(a);
        l = "",
        f = "",
        p = "";
        -1 !== (n = c.indexOf("Opera")) && (v = "Opera",
        y = c.substring(n + 6),
        -1 !== (n = c.indexOf("Version")) && (y = c.substring(n + 8))),
        -1 !== c.indexOf("Edge") || -1 !== c.indexOf("Edg") ? (v = "Microsoft Edge",
        -1 !== c.indexOf("Edge") ? (n = c.indexOf("Edge"),
        y = c.substring(n + 5)) : (n = c.indexOf("Edg"),
        y = c.substring(n + 4))) : -1 !== (n = c.indexOf("MSIE")) ? (v = "Microsoft Internet Explorer",
        y = c.substring(n + 5)) : -1 !== (n = c.indexOf("Lark")) ? (v = "Lark",
        y = c.substring(n + 5, n + 11)) : -1 !== (n = c.indexOf("MetaSr")) ? (v = "sougoubrowser",
        y = c.substring(n + 7, n + 10)) : -1 !== c.indexOf("MQQBrowser") || -1 !== c.indexOf("QQBrowser") ? (v = "qqbrowser",
        -1 !== c.indexOf("MQQBrowser") ? (n = c.indexOf("MQQBrowser"),
        y = c.substring(n + 11, n + 15)) : -1 !== c.indexOf("QQBrowser") && (n = c.indexOf("QQBrowser"),
        y = c.substring(n + 10, n + 17))) : -1 !== c.indexOf("Chrome") ? -1 !== (n = c.indexOf("MicroMessenger")) ? (v = "weixin",
        y = c.substring(n + 15, n + 20)) : -1 !== (n = c.indexOf("360")) ? (v = "360browser",
        y = c.substring(c.indexOf("Chrome") + 7)) : -1 !== c.indexOf("baidubrowser") || -1 !== c.indexOf("BIDUBrowser") ? (-1 !== c.indexOf("baidubrowser") ? (n = c.indexOf("baidubrowser"),
        y = c.substring(n + 13, n + 16)) : -1 !== c.indexOf("BIDUBrowser") && (n = c.indexOf("BIDUBrowser"),
        y = c.substring(n + 12, n + 15)),
        v = "baidubrowser") : -1 !== (n = c.indexOf("xiaomi")) ? -1 !== c.indexOf("openlanguagexiaomi") ? (v = "openlanguage xiaomi",
        y = c.substring(n + 7, n + 13)) : (v = "xiaomi",
        y = c.substring(n - 7, n - 1)) : -1 !== (n = c.indexOf("TTWebView")) ? (v = "TTWebView",
        y = c.substring(n + 10, n + 23)) : -1 !== (n = c.indexOf("Chrome")) && (v = "Chrome",
        y = c.substring(n + 7)) : -1 !== c.indexOf("Safari") ? -1 !== (n = c.indexOf("QQ")) ? (v = "qqbrowser",
        y = c.substring(n + 10, n + 16)) : -1 !== (n = c.indexOf("Safari")) && (v = "Safari",
        y = c.substring(n + 7),
        -1 !== (n = c.indexOf("Version")) && (y = c.substring(n + 8))) : -1 !== (n = c.indexOf("Firefox")) ? (v = "Firefox",
        y = c.substring(n + 8)) : -1 !== (n = c.indexOf("MicroMessenger")) ? (v = "weixin",
        y = c.substring(n + 15, n + 20)) : -1 !== (n = c.indexOf("QQ")) && (v = "qqbrowser",
        y = c.substring(n + 3, n + 8)),
        -1 !== (r = y.indexOf(";")) && (y = y.substring(0, r)),
        -1 !== (r = y.indexOf(" ")) && (y = y.substring(0, r)),
        -1 !== (r = y.indexOf(")")) && (y = y.substring(0, r));
        for (var b, w, z = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(a) ? "wap" : "web", k = [{
            s: "Windows 10",
            r: /(Windows 10.0|Windows NT 10.0|Windows NT 10.1)/
        }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: "Android",
            r: /Android/
        }, {
            s: "Sun OS",
            r: /SunOS/
        }, {
            s: "Linux",
            r: /(Linux|X11)/
        }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
        }, {
            s: "Mac OS X",
            r: /Mac OS X/
        }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }], S = 0; S < k.length; S++) {
            var E = k[S];
            if (E.r.test(c)) {
                g = E.s;
                break
            }
        }
        function I(e, t) {
            var i = e.exec(t);
            return i && i[1] ? i[1] : ""
        }
        switch (/Windows/.test(g) && (m = I(/Windows (.*)/, g),
        g = "windows"),
        g) {
        case "Mac OS X":
            b = c,
            m = (w = RegExp("(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:" + "Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?" + ")", "i").exec(b)) ? w.slice(1)[0] : "",
            g = "mac";
            break;
        case "Android":
            m = function(e) {
                var t = I(/Android ([\.\_\d]+)/, e);
                return t || (t = I(/Android\/([\.\_\d]+)/, e)),
                t
            }(c),
            g = "android";
            break;
        case "iOS":
            m = (m = /OS (\d+)_(\d+)_?(\d+)?/.exec(a)) ? m[1] + "." + m[2] + "." + (0 | m[3]) : "",
            g = "ios"
        }
        var O = UTM(e, _, t, i);
        return {
            browser: v,
            browser_version: y,
            platform: z,
            os_name: g,
            os_version: m,
            userAgent: c,
            screen_width: o,
            screen_height: s,
            device_model: function(e) {
                var t = "";
                try {
                    if ("android" === e)
                        navigator.userAgent.split(";").forEach(function(e) {
                            e.indexOf("Build/") > -1 && (t = e.slice(0, e.indexOf("Build/")))
                        });
                    else if ("ios" === e || "mac" === e || "windows" === e) {
                        var i = navigator.userAgent.replace("Mozilla/5.0 (", "")
                          , n = i.indexOf(";");
                        t = i.slice(0, n)
                    }
                } catch (e) {}
                return t.trim()
            }(g),
            language: u,
            referrer: h,
            referrer_host: d,
            creative_id: O.creative_id,
            ad_id: O.ad_id,
            campaign_id: O.campaign_id,
            utm_source: O.utm_source,
            utm_medium: O.utm_medium,
            utm_campaign: O.utm_campaign,
            utm_term: O.utm_term,
            utm_content: O.utm_content,
            tracer_data: O.tracer_data,
            latest_data: function() {
                var e = location.hostname
                  , t = !1;
                if (h && d && e === d) {
                    l = h,
                    f = d,
                    t = !0;
                    var i = parseUrlQuery(h);
                    i.keyword && (p = i.keyword)
                }
                return {
                    $latest_referrer: l,
                    $latest_referrer_host: f,
                    $latest_search_keyword: p,
                    isLast: t
                }
            }()
        }
    }
      , Token = function() {
        function e(e, t, i, n) {
            this.tokenReadyInit = !1,
            this.enable_ttwebid = !1,
            this.enableCustomWebid = !1,
            this.config = e,
            this.cfg = t,
            this.storage = new Storage(!1),
            this.appInfo = e.app_key || e.app_id,
            this.isNoWebid = e.disable_webid,
            this.enable_ttwebid = e.enable_ttwebid || !1,
            this.isNoSsid = e.disable_webid || e.disable_ssid,
            this.enableCustomWebid = e.enable_custom_webid,
            this.domain = e.channel_domain || decodeUrl(LOG_URL[e.channel]),
            this.tokenReady = !1,
            this.checkExp = e.checkExp || !1,
            this.enableCookie = e.cross_subdomain || !1,
            this.expiresTime = e.cookie_expire || COOKIE_EXPIRE,
            this.fetchUrl = "" + this.domain + WEBID_URL,
            this.uuidQueue = [],
            this.sendQueue = [],
            this.hook = i,
            this.cookieDomain = e.cookie_domain || "",
            this.session = n
        }
        return e.prototype._getToken = function() {
            var e = this;
            try {
                if (this.tokensKey = CACHEKEY(this.appInfo, !0),
                this.cookieKey = COOKIEKEY(this.appInfo),
                this.enableCustomWebid)
                    return void this.hook.on("custom-webid", function() {
                        e.tokenReady = !0,
                        e.tokenReadyInit = !0,
                        e.hook.emit("token-ready")
                    });
                if (this._checkEnv())
                    return;
                var t = this.storage.getItem(this.tokensKey);
                if (this.enable_ttwebid)
                    if (t) {
                        var i = {
                            user_unique_id: t.user_unique_id || "",
                            timestamp: Date.now()
                        };
                        this.storage.setItem(this.tokensKey, i),
                        this._setTtWid(t, !1)
                    } else
                        this._setTtWid(t, !0);
                else if (this.enableCookie) {
                    var n = this.storage.getCookie(this.cookieKey, this.cookieDomain);
                    if (n) {
                        n = decodeURIComponent(n);
                        var r = (n = JSON.parse(n)).user_unique_id
                          , o = n.web_id
                          , s = n.timestamp
                          , a = n.ssid;
                        this._setToken(o, r, a, s)
                    } else {
                        if (!t)
                            return void this._requestWebId();
                        this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(t)), this.expiresTime, this.cookieDomain),
                        this._checkLocal(t)
                    }
                } else {
                    if (!t)
                        return void this._requestWebId();
                    this._checkLocal(t)
                }
            } catch (e) {}
        }
        ,
        e.prototype._checkEnv = function() {
            if (-1 !== window.navigator.userAgent.indexOf("miniProgram")) {
                var e = parseUrlQuery(window.location.href);
                return !(!e || !e.Web_ID) && (this._setTokenId("" + e.Web_ID, "", "", !0),
                !0)
            }
            return !1
        }
        ,
        e.prototype._checkLocal = function(e) {
            var t = e.user_unique_id
              , i = e.web_id
              , n = e.timestamp
              , r = e.ssid;
            i && t ? this._setToken(i, t, r, n) : this._requestWebId()
        }
        ,
        e.prototype._setToken = function(e, t, i, n) {
            if (this.uuid = t,
            this.web_id = e,
            this.ssid = i,
            this.checkExp) {
                var r = Date.now() - parseFloat(n);
                if (r > 7344e6)
                    return void this._requestWebId();
                if (r > 432e7)
                    return void this._updateWebId(e)
            }
            this._complete(e, t, i)
        }
        ,
        e.prototype._complete = function(e, t, i) {
            this.cfg.envInfo.user.ssid = i,
            this.cfg.envInfo.user.web_id = e,
            this.cfg.envInfo.user.user_unique_id = t,
            this.tokenReady = !0,
            this.tokenReadyInit = !0
        }
        ,
        e.prototype._requestWebId = function() {
            this.isNoWebid ? this._setTokenId(webid(), "", "", !0) : this._fetchWebId(this.fetchUrl, !1)
        }
        ,
        e.prototype._updateWebId = function(e) {
            var t = "" + this.domain + WEBID_URL + "/" + e + "/update";
            this._fetchWebId(t, !0)
        }
        ,
        e.prototype._fetchWebId = function(e, t) {
            var i = this;
            this.isGetWebId = !0,
            request(e, 5e3, {
                app_key: this.config.app_key,
                app_id: this.config.app_id,
                url: location.href,
                user_agent: window.navigator.userAgent,
                referer: document.referrer,
                user_unique_id: ""
            }, this.config.app_key, function(e) {
                i.isGetWebId = !1,
                e && 0 === e.e ? (i.web_id = e.web_id,
                i.uuidQueue.length ? i._requestSsId(i.uuidQueue[0]) : i._setTokenId(e.web_id, "", t ? i.ssid : e.ssid, !0)) : (i.hook.emit("token-error"),
                console.warn("[]appid: " + i.config.app_id + ", get webid error, init error~"))
            }, function() {
                i.isGetWebId = !1,
                i.hook.emit("token-error"),
                console.warn("[]appid: " + i.config.app_id + ", get webid error, init error~")
            }, !0)
        }
        ,
        e.prototype._setTtWid = function(e, t) {
            if (!t) {
                var i = {
                    web_id: e.web_id || "",
                    timestamp: Date.now()
                }
                  , n = e.user_unique_id || "";
                this.cfg.envInfo.user.user_unique_id = this.cfg.envInfo.user.user_unique_id || n,
                this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(i)), 108e5, this.cookieDomain)
            }
            this.tokenReady = !0,
            this.tokenReadyInit = !0,
            this.hook.emit("token-ready")
        }
        ,
        e.prototype._setTokenId = function(e, t, i, n) {
            var r = this.cfg.envInfo.user.web_id || e
              , o = {
                web_id: r,
                ssid: i,
                user_unique_id: t || r,
                timestamp: Date.now()
            };
            this.enableCookie && this.storage.setCookie(this.cookieKey, encodeURIComponent(JSON.stringify(o)), this.expiresTime, this.cookieDomain),
            this.storage.setItem(this.tokensKey, o),
            this.cfg.envInfo.user.ssid = i || void 0,
            this.cfg.envInfo.user.web_id = r,
            this.cfg.envInfo.user.user_unique_id = t || r,
            this.uuid = t || r,
            this.web_id = r,
            this.ssid = i,
            n && (this.tokenReady = !0,
            this.tokenReadyInit = !0,
            this.hook.emit("token-ready"))
        }
        ,
        e.prototype._setWebid = function(e) {
            if (!this.enable_ttwebid) {
                var t = this.storage.getItem(this.tokensKey);
                t && t.web_id ? t.web_id !== e && (t.user_unique_id = t.web_id === t.user_unique_id ? e : t.user_unique_id,
                t.web_id = e) : ((t = {}).web_id = e,
                t.user_unique_id = e),
                t.timestamp = Date.now(),
                this.storage.setItem(this.tokensKey, t),
                this.cfg.envInfo.user.user_unique_id && this.cfg.envInfo.user.user_unique_id !== this.cfg.envInfo.user.web_id || (this.cfg.envInfo.user.user_unique_id = e,
                this.hook.emit("uuid-change"),
                this.enableCustomWebid ? this.hook.emit("token-change", {
                    type: "uuid",
                    info: t
                }) : this._getSsid(e)),
                e !== this.cfg.envInfo.user.web_id && (this.cfg.envInfo.user.web_id = e,
                this.hook.emit("token-change", {
                    type: "webid",
                    info: t
                }))
            }
        }
        ,
        e.prototype._setUuid = function(e) {
            var t = this.storage.getItem(this.tokensKey);
            if (e && -1 === ["0", "Null", "None", "", "undefined"].indexOf(e)) {
                var i = String(e);
                this.cfg.envInfo.user.user_unique_id !== i && (t && t.user_unique_id ? t.user_unique_id !== i && (t.user_unique_id = i) : (t = {}).user_unique_id = i,
                t.timestamp = Date.now(),
                this.cfg.envInfo.user.user_unique_id = i,
                this.hook.emit("uuid-change"),
                this.session._resetSessionId(),
                this.hook.emit("uuid-change"),
                this.enableCustomWebid ? this.hook.emit("token-change", {
                    type: "uuid",
                    _token: t
                }) : this._getSsid(i))
            } else
                console.log("user_unique_id is useless, please check")
        }
        ,
        e.prototype._clearUuid = function(e) {
            this.enable_ttwebid || e && e.web_id && (this.cfg.envInfo.user.user_unique_id = e.web_id || void 0,
            e.user_unique_id = e.web_id || void 0,
            e.timestamp = Date.now(),
            this.storage.setItem(this.tokensKey, e))
        }
        ,
        e.prototype._getSsid = function(e) {
            e && -1 === ["0", "Null", "None", "", "undefined"].indexOf(e) && this.uuid !== e && (this.uuidQueue.push(e),
            this.uuid = e,
            -1 === this.uuidQueue.indexOf(e) && this.uuidQueue.push(e),
            this.isNoSsid || this.isGetWebId || (this.tokenReady = !1,
            this._requestSsId(e),
            this.sendQueue.push(e)),
            this.session._resetSessionId())
        }
        ,
        e.prototype._requestSsId = function(e) {
            var t = this;
            if (!this.sendQueue.length) {
                var i = "" + this.domain + SSID_URL;
                request(i, 5e3, {
                    app_key: this.config.app_key,
                    app_id: this.config.app_id,
                    web_id: this.web_id,
                    user_unique_id: e
                }, this.config.app_key, function(i) {
                    t.sendQueue = [],
                    t.uuidQueue.length && t.uuidQueue.splice(t.uuidQueue.indexOf(e), 1),
                    i && 0 === i.e ? (t.tokenReadyInit && t.hook.emit("token-change", {
                        type: "uuid",
                        info: {
                            webid: t.web_id,
                            user_unique_id: e,
                            ssid: i.ssid
                        }
                    }),
                    t._setTokenId(t.web_id, e, i.ssid, 0 === t.uuidQueue.length),
                    t.uuidQueue.length && t._requestSsId(t.uuidQueue[0])) : (t.tokenReady = !0,
                    t.hook.emit("token-ready"),
                    console.warn("[]appid: " + t.config.app_id + ", get ssid error"))
                }, function() {
                    t.tokenReady = !0,
                    t.hook.emit("token-ready")
                }, !0)
            }
        }
        ,
        e.prototype.isTokenReady = function() {
            return this.tokenReady
        }
        ,
        e
    }()
      , beforePageUnload = function(e) {
        !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? window.addEventListener("pagehide", e, !1) : window.addEventListener("beforeunload", e, !1)
    }
      , splitArrayByFilter = function(e, t, i) {
        void 0 === e && (e = []),
        void 0 === t && (t = function(e) {
            return e
        }
        ),
        void 0 === i && (i = 20);
        var n, r = [], o = 0;
        return e.forEach(function(e) {
            var s = t(e);
            void 0 === n ? n = s : (s !== n || r[o].length >= i) && (o += 1,
            n = s),
            r[o] = r[o] || [],
            r[o].push(e)
        }),
        r
    }
      , EventManager = function() {
        function e(e, t, i, n, r, o, s, a) {
            this.collect = e,
            this.cfg = i,
            this.config = t,
            this._token = n,
            this.appInfo = t.app_id || t.app_key,
            this.debugMode = !!t.log,
            this.evtDataKey = CACHEKEY(this.appInfo, !1);
            var c = t.channel_domain || decodeUrl(LOG_URL[t.channel])
              , u = t.enable_custom_webid ? NEW_REPORT_URL : REPORT_URL;
            if (this.reportUrl = t.report_url ? t.report_url : "" + c + u,
            this.storage = new Storage(!0),
            this.EventStorage = new Storage(!1),
            this.maxStorage = t.max_storage_num || -1,
            this.maxReport = t.max_report || 10,
            this.reportTime = t.reportTime || 30,
            this.timeout = t.timeout || 1e5,
            this.closeStorage = !0,
            this.plugin = r,
            this.session = o,
            this.hook = s,
            this.filter = t.filter,
            this.match = a,
            this.plugin) {
                var h = t.enable_storage
                  , d = t.disable_storage;
                (h || !1 === d) && (this.closeStorage = !1)
            }
            this.addListener()
        }
        return e.prototype.addListener = function() {
            var e = this;
            window.addEventListener("unload", function() {
                e.report(!0)
            }, !1),
            beforePageUnload(function() {
                e.report(!0)
            }),
            document.addEventListener("visibilitychange", function() {
                "hidden" === document.visibilityState && e.report(!0)
            }, !1)
        }
        ,
        e.prototype.setReady = function() {
            this.isReady = !0,
            this.closeStorage || this.checkStorageEvent(),
            this.report()
        }
        ,
        e.prototype.event = function(e) {
            var t = this;
            void 0 === e && (e = []);
            try {
                var i = __spread(e, this.storage.getItem(this.evtDataKey) || []);
                this.storage.setItem(this.evtDataKey, i),
                this.reportTimer && clearTimeout(this.reportTimer),
                i.length >= this.maxReport ? this.report(!1) : this.reportTimer = setTimeout(function() {
                    t.report(!1),
                    t.reportTimer = null
                }, this.reportTime)
            } catch (e) {}
        }
        ,
        e.prototype.beconEvent = function(e) {
            if (void 0 === e && (e = []),
            this._token.isTokenReady() && this.isReady) {
                var t = this._mergeEvents(e);
                this._dealData(t, !0)
            }
        }
        ,
        e.prototype.report = function(e) {
            if (void 0 === e && (e = !1),
            !this.collect.destroyInstance && this._token.isTokenReady() && this.isReady) {
                var t = this.storage.getItem(this.evtDataKey) || []
                  , i = this._mergeEvents(t);
                this.storage.removeItem(this.evtDataKey),
                this._dealData(i, e)
            }
        }
        ,
        e.prototype.clearEventCache = function() {
            this.report(!1)
        }
        ,
        e.prototype._mergeEvents = function(e) {
            var t = this;
            if (!e.length)
                return e;
            var i = this.cfg.get();
            i.header.custom = JSON.stringify(i.header.custom);
            return splitArrayByFilter(e, function(e) {
                return !t.closeStorage && !!e.params.__disable_storage__
            }, this.maxReport).map(function(e) {
                return __assign({
                    events: e.map(function(e) {
                        var n = __assign({}, t.cfg.get("evtParams"), e.params);
                        try {
                            if (e.event && "applog_trace" !== e.event) {
                                delete n.__disable_storage__;
                                var r = !0
                                  , o = t.EventStorage.getItem("__tea_sdk_ab_version_" + t.appInfo);
                                if (o && o.uuid && i.user.user_unique_id !== o.uuid && (r = !1),
                                r && t.plugin && t.plugin.ab && t.plugin.ab.versions && t.plugin.ab.extVersions) {
                                    var s = [];
                                    return s = t.config.enable_multilink || -1 !== window.location.href.indexOf("multilink=true") ? t.plugin.ab.mulilinkVersions.concat(t.plugin.ab.extVersions) : t.plugin.ab.versions.concat(t.plugin.ab.extVersions),
                                    __assign({}, e, {
                                        params: JSON.stringify(n),
                                        ab_sdk_version: s.join(","),
                                        session_id: t.session._getSessionId()
                                    })
                                }
                                return __assign({}, e, {
                                    params: JSON.stringify(n),
                                    session_id: t.session._getSessionId()
                                })
                            }
                            return __assign({}, e, {
                                params: JSON.stringify(e.params)
                            })
                        } catch (t) {
                            return __assign({}, e, {
                                params: JSON.stringify(e.params)
                            })
                        }
                    }),
                    user: i.user,
                    header: i.header
                }, t.closeStorage ? {} : {
                    __disable_storage__: e[0].params.__disable_storage__
                }, {
                    verbose: t.debugMode ? 1 : void 0,
                    local_time: parseInt("" + (new Date).getTime() / 1e3),
                    user_unique_type: t.config.enable_ttwebid ? t.config.user_unique_type : void 0
                })
            })
        }
        ,
        e.prototype._dealData = function(e, t) {
            var i = this;
            if (!this.config.disable_track_event) {
                if (!e.length)
                    return e;
                var n = [];
                n = splitArrayByFilter(e, function(e) {
                    return !!e.__disable_storage__
                }, this.maxReport),
                !this.closeStorage && this.plugin.maxStorage && this.plugin.maxStorage(n, this.maxStorage, this.evtDataKey, this.storage),
                n.forEach(function(e) {
                    var n = webid()
                      , r = JSON.parse(JSON.stringify(e));
                    try {
                        i.filter && (r = i.filter(r)),
                        i.collect.eventFilter && (r = i.collect.eventFilter(r))
                    } catch (e) {}
                    var o = r || e;
                    if (!i.closeStorage && !o[0].__disable_storage__) {
                        var s = JSON.parse(JSON.stringify(o));
                        s && s[0] && (s[0].header.__storage_index__ = Date.now());
                        var a = i.EventStorage.getItem(i.evtDataKey) || {};
                        a[n] = s,
                        i.EventStorage.setItem(i.evtDataKey, a)
                    }
                    i._send(n, o, t),
                    i.match && setTimeout(function() {
                        i.match.matchEvent(o)
                    }, 0)
                })
            }
        }
        ,
        e.prototype._send = function(e, t, i) {
            var n = this;
            this.isSending = !0;
            var r = function() {
                n.isSending = !1
            };
            if (!this.closeStorage)
                try {
                    t && t[0] && t[0].header.__storage_index__ && delete (t = JSON.parse(JSON.stringify(t)))[0].header.__storage_index__
                } catch (e) {}
            this.plugin && this.plugin.et_test && this.plugin.et_test.send(t),
            request(this.reportUrl, this.timeout, t, this.config.app_key, function(t, i) {
                if (r(),
                n.plugin && !n.closeStorage) {
                    var o = n.EventStorage.getItem(n.evtDataKey) || {};
                    Object.keys(o).length ? (delete o[e],
                    n.EventStorage.setItem(n.evtDataKey, o)) : n.EventStorage.removeItem(n.evtDataKey)
                }
                t && 0 !== t.e && n.collect && n.collect.tracer && 1 !== n.cfg.staging && n.collect.tracer.addErrorCount(i, "f_data", t.e, t)
            }, function(e, t) {
                r(),
                n.cfg.get("reportErrorCallback")(e, t),
                n.collect && n.collect.tracer && 1 !== n.cfg.staging && n.collect.tracer.addErrorCount(e, "f_net", t),
                n.plugin && n.plugin.monitor && n.plugin.monitor.sdkError(n.config.app_key, n.reportUrl, e, t)
            }, !1, i, this.config.enable_ttwebid, r),
            this.plugin && this.plugin.monitor && this.plugin.monitor.sdkOnload(this.config.app_key, this.reportUrl, t)
        }
        ,
        e.prototype.checkStorageEvent = function() {
            var e = this;
            try {
                var t = this.EventStorage.getItem(this.evtDataKey) || {}
                  , i = Object.keys(t);
                if (i.length > 0) {
                    setTimeout(function n() {
                        for (var r = [], o = 0; o < e.maxReport; o++)
                            i.length > 0 && r.push(i.shift());
                        r.length > 0 && r.forEach(function(i) {
                            e._send(i, t[i], !1)
                        }),
                        setTimeout(n, 5)
                    }, 5)
                }
            } catch (e) {}
        }
        ,
        e
    }()
      , undef = void 0
      , date = new Date
      , timeZoneMin = date.getTimezoneOffset()
      , timezone = parseInt("" + -timeZoneMin / 60, 10)
      , tz_offset = 60 * timeZoneMin
      , ConfigManager = function() {
        function e(e, t, i) {
            this.initConfig = t;
            var n = client(e, t.cookie_domain || "", t.cookie_expire || COOKIE_EXPIRE);
            this.configKey = CONFIGKEY("" + e),
            this.sessionStorage = new Storage(!1,"session"),
            this.localStorage = new Storage(!1,"local"),
            i && (this.storage = 1 === i ? this.sessionStorage : this.localStorage),
            this.envInfo = {
                user: {
                    user_unique_id: undef,
                    user_type: undef,
                    user_id: undef,
                    user_is_auth: undef,
                    user_is_login: undef,
                    device_id: undef,
                    web_id: undef,
                    ip_addr_id: undef,
                    ssid: undef
                },
                header: {
                    app_id: undef,
                    app_name: undef,
                    app_install_id: undef,
                    install_id: undef,
                    app_package: undef,
                    app_channel: undef,
                    app_version: undef,
                    os_name: n.os_name,
                    os_version: n.os_version,
                    device_model: n.device_model,
                    ab_client: undef,
                    ab_version: undef,
                    ab_sdk_version: undef,
                    traffic_type: undef,
                    client_ip: undef,
                    device_brand: undef,
                    os_api: undef,
                    access: undef,
                    language: n.language,
                    region: undef,
                    app_language: undef,
                    app_region: undef,
                    creative_id: n.creative_id,
                    ad_id: n.ad_id,
                    campaign_id: n.campaign_id,
                    log_type: undef,
                    rnd: undef,
                    platform: n.platform,
                    sdk_version: SDK_VERSION,
                    sdk_lib: "js",
                    province: undef,
                    city: undef,
                    timezone: timezone,
                    tz_offset: tz_offset,
                    tz_name: undef,
                    sim_region: undef,
                    carrier: undef,
                    resolution: n.screen_width + "x" + n.screen_height,
                    browser: n.browser,
                    browser_version: n.browser_version,
                    referrer: n.referrer,
                    referrer_host: n.referrer_host,
                    width: n.screen_width,
                    height: n.screen_height,
                    screen_width: n.screen_width,
                    screen_height: n.screen_height,
                    utm_term: n.utm_term,
                    utm_content: n.utm_content,
                    utm_source: n.utm_source,
                    utm_medium: n.utm_medium,
                    utm_campaign: n.utm_campaign,
                    tracer_data: JSON.stringify(n.tracer_data),
                    custom: {},
                    wechat_openid: undef,
                    wechat_unionid: undef
                }
            },
            this.isLast = !1,
            this.setCustom(n),
            this.evtParams = {},
            this.reportErrorCallback = function() {}
        }
        return e.prototype.setCustom = function(e) {
            if (e && e.latest_data && e.latest_data.isLast)
                for (var t in delete e.latest_data.isLast,
                this.isLast = !0,
                e.latest_data)
                    this.envInfo.header.custom[t] = e.latest_data[t]
        }
        ,
        e.prototype.set = function(e, t) {
            var i = this;
            if (null == t && (this.delete(e),
            t = void 0),
            "evtParams" === e || "_staging_flag" === e) {
                var n;
                n = "evtParams" === e ? t : {
                    _staging_flag: Number(t)
                };
                var r = __assign({}, n);
                Object.keys(r).forEach(function(e) {
                    i.evtParams[e] = r[e]
                })
            } else if ("reportErrorCallback" === e && "function" == typeof t)
                this.reportErrorCallback = t;
            else {
                var o = "";
                if (e.indexOf(".") > -1) {
                    var s = e.split(".");
                    o = s[0],
                    e = s[1]
                }
                if ("user_unique_id" === e) {
                    if (!t)
                        return;
                    if (-1 !== ["0", "Null", "None", "", "undefined"].indexOf(t))
                        return
                }
                if ("os_version" === e && (e = "" + t),
                "traffic_type" === e && this.isLast && (this.envInfo.header.custom.$latest_traffic_source_type = t),
                "web_id" === e) {
                    if (!t)
                        return;
                    (!this.envInfo.user.user_unique_id || this.envInfo.user.user_unique_id && this.envInfo.user.user_unique_id === this.envInfo.user.web_id) && (this.envInfo.user.user_unique_id = t)
                }
                o ? "user" === o || "header" === o ? this.envInfo[o][e] = t : this.envInfo.header.custom[e] = t : this.envInfo.user.hasOwnProperty(e) ? ["user_type", "ip_addr_id"].indexOf(e) > -1 ? this.envInfo.user[e] = t ? Number(t) : t : ["user_id", "web_id", "user_unique_id", "ssid"].indexOf(e) > -1 ? this.envInfo.user[e] = t ? String(t) : t : ["user_is_auth", "user_is_login"].indexOf(e) > -1 ? this.envInfo.user[e] = Boolean(t) : "device_id" === e && (this.envInfo.user[e] = t) : this.envInfo.header.hasOwnProperty(e) ? this.envInfo.header[e] = t : this.envInfo.header.custom[e] = t
            }
        }
        ,
        e.prototype.get = function(e) {
            try {
                return e ? "evtParams" === e ? this.evtParams : "reportErrorCallback" === e ? this[e] : JSON.parse(JSON.stringify(this.envInfo[e])) : JSON.parse(JSON.stringify(this.envInfo))
            } catch (e) {
                console.log("get config stringify error ")
            }
        }
        ,
        e.prototype.setStore = function(e) {
            try {
                var t = this.storage.getItem(this.configKey);
                if (Object.keys(e).length) {
                    var i = Object.assign(e, t);
                    this.storage.setItem(this.configKey, i)
                }
            } catch (e) {}
        }
        ,
        e.prototype.getStore = function() {
            try {
                var e = this.storage.getItem(this.configKey);
                return Object.keys(e).length ? e : null
            } catch (e) {
                return null
            }
        }
        ,
        e.prototype.delete = function(e) {
            try {
                var t = this.storage.getItem(this.configKey);
                t && t.hasOwnProperty(e) && (delete t[e],
                this.storage.setItem(this.configKey, t))
            } catch (e) {}
        }
        ,
        e
    }()
      , Logger = function() {
        function e(e, t) {
            this.isLog = t || !1,
            this.name = e || ""
        }
        var t = e.prototype;
        return t.info = function(e) {
            this.isLog && console.log("[" + this.name + "] " + e)
        }
        ,
        t.warn = function(e) {
            this.isLog && console.warn("[" + this.name + "] " + e)
        }
        ,
        t.error = function(e) {
            this.isLog && console.error("[" + this.name + "] " + e)
        }
        ,
        t.throw = function(e) {
            throw this.error(this.name),
            new Error(e)
        }
        ,
        e
    }()
      , Hook = function() {
        function e() {
            this._hooks = {}
        }
        return e.prototype.on = function(e, t) {
            e && t && "function" == typeof t && (this._hooks[e] || (this._hooks[e] = []),
            this._hooks[e].push(t))
        }
        ,
        e.prototype.once = function(e, t) {
            var i = this;
            if (e && t && "function" == typeof t) {
                this.on(e, function n(r) {
                    t(r),
                    i.off(e, n)
                })
            }
        }
        ,
        e.prototype.off = function(e, t) {
            if (e && this._hooks[e] && this._hooks[e].length)
                if (t) {
                    var i = this._hooks[e].indexOf(t);
                    -1 !== i && this._hooks[e].splice(i, 1)
                } else
                    this._hooks[e] = []
        }
        ,
        e.prototype.emit = function(e, t) {
            e && this._hooks[e] && this._hooks[e].length && __spread(this._hooks[e]).forEach(function(e) {
                try {
                    e(t)
                } catch (e) {}
            })
        }
        ,
        e
    }()
      , sessionId = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }
      , Session = function() {
        function e(e, t) {
            this.storage = new Storage(!1,"session"),
            this.sessionKey = SESSIONKEY(e),
            this.expireTime = t.expireTime || 18e5,
            this.disableSession = t.disable_session,
            this.disableSession || this._setSessionId()
        }
        return e.prototype._updateSessionId = function() {
            var e = this.storage.getItem(this.sessionKey);
            if (e && e.sessionId) {
                var t = e.timestamp;
                Date.now() - t > this.expireTime ? e = {
                    sessionId: sessionId(),
                    timestamp: Date.now()
                } : e.timestamp = Date.now(),
                this.storage.setItem(this.sessionKey, e),
                this._resetExpTime()
            }
        }
        ,
        e.prototype._setSessionId = function() {
            var e = this
              , t = this.storage.getItem(this.sessionKey);
            t && t.sessionId ? t.timestamp = Date.now() : t = {
                sessionId: sessionId(),
                timestamp: Date.now()
            },
            this.storage.setItem(this.sessionKey, t),
            this.sessionExp = setInterval(function() {
                e._checkEXp()
            }, this.expireTime)
        }
        ,
        e.prototype._getSessionId = function() {
            var e = this.storage.getItem(this.sessionKey);
            return this.disableSession ? "" : e && e.sessionId ? e.sessionId : ""
        }
        ,
        e.prototype._resetExpTime = function() {
            var e = this;
            this.sessionExp && (clearInterval(this.sessionExp),
            this.sessionExp = setInterval(function() {
                e._checkEXp()
            }, this.expireTime))
        }
        ,
        e.prototype._resetSessionId = function() {
            var e = {
                sessionId: sessionId(),
                timestamp: Date.now()
            };
            this.storage.setItem(this.sessionKey, e)
        }
        ,
        e.prototype._checkEXp = function() {
            var e = this.storage.getItem(this.sessionKey);
            e && e.sessionId && (Date.now() - e.timestamp + 30 >= this.expireTime && (e = {
                sessionId: sessionId(),
                timestamp: Date.now()
            },
            this.storage.setItem(this.sessionKey, e)))
        }
        ,
        e
    }()
      , EventList = {
        pv: ["predefine_pageview"],
        sdk: ["_be_active", "predefine_page_alive", "predefine_page_close", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append"],
        autotrack: ["bav2b_click", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "__bav_click", "__bav_page", "__bav_beat", "__bav_page_statistics"]
    }
      , Tracer = function() {
        function e(e, t, i, n) {
            this.enable_tracer = !1,
            this.count = {
                pv: 0,
                sdk: 0,
                autotrack: 0,
                log: 0
            },
            this.limit = {
                pv: 1,
                sdk: 10,
                autotrack: 10,
                log: 3
            },
            this.errorCode = {
                f_net: 0,
                f_data: 0
            },
            this.errorInfo = {
                pv: {
                    f_net: 0,
                    f_data: 0
                },
                sdk: {
                    f_net: 0,
                    f_data: 0
                },
                autotrack: {
                    f_net: 0,
                    f_data: 0
                },
                log: {
                    f_net: 0,
                    f_data: 0
                }
            },
            this.collect = e,
            this.ready = !(!t.app_id || !t.enable_tracer || t.disable_track_event),
            this.appid = t.app_id,
            this.process = i,
            this.event = n;
            var r = t.channel_domain || decodeUrl(LOG_URL[t.channel]);
            this.reportUrl = t.report_url ? t.report_url : "" + r + REPORT_URL,
            this.listener()
        }
        return e.prototype.addCount = function(e) {
            try {
                if (!this.ready)
                    return;
                if (this.count[e]++,
                this.count[e] >= this.limit[e]) {
                    var t = [];
                    for (var i in t = __spread(t, this.processTracer(this.count[e], e, "net")),
                    this.errorInfo[e])
                        this.errorInfo[i] && (t = __spread(t, this.processTracer(this.errorInfo[e][i], e, i)));
                    t.length && this.sendTracer(t, !0, e, !1)
                }
            } catch (e) {}
        }
        ,
        e.prototype.addErrorCount = function(e, t, i, n) {
            var r = this;
            try {
                if (!this.ready)
                    return;
                if (e && e.length) {
                    var o = e[0].events;
                    o && o.length && ("f_data" === t ? (n && n.hasOwnProperty("sc") ? this.errorInfo.log.f_data = o.length - n.sc : this.errorInfo.log.f_data = o.length,
                    this.errorCode.f_data = i) : o.forEach(function(e) {
                        var t = "log";
                        for (var n in EventList)
                            if (-1 !== EventList[n].indexOf(e.event)) {
                                t = n;
                                break
                            }
                        r.errorInfo[t].f_net++,
                        r.errorCode.f_net = i
                    }))
                }
            } catch (e) {}
        }
        ,
        e.prototype.clearCount = function(e) {
            try {
                e ? (this.count[e] = 0,
                this.errorInfo[e] = {
                    f_net: 0,
                    f_data: 0
                }) : (this.count = {
                    pv: 0,
                    sdk: 0,
                    autotrack: 0,
                    log: 0
                },
                this.errorInfo = {
                    pv: {
                        f_net: 0,
                        f_data: 0
                    },
                    sdk: {
                        f_net: 0,
                        f_data: 0
                    },
                    autotrack: {
                        f_net: 0,
                        f_data: 0
                    },
                    log: {
                        f_net: 0,
                        f_data: 0
                    }
                })
            } catch (e) {}
        }
        ,
        e.prototype.sendTracer = function(e, t, i, n) {
            try {
                if (!this.ready)
                    return;
                if (this.collect.staging)
                    return;
                var r = this.event._mergeEvents(e);
                n && window.navigator.sendBeacon ? window.navigator.sendBeacon(this.reportUrl, JSON.stringify(r)) : request(this.reportUrl, 3e5, r, ""),
                t ? this.clearCount(i) : this.clearCount()
            } catch (e) {}
        }
        ,
        e.prototype.processTracer = function(e, t, i) {
            try {
                var n = {
                    count: e,
                    state: i,
                    key: t,
                    params_for_special: "applog_trace",
                    aid: this.appid,
                    platform: "web",
                    _staging_flag: 1,
                    sdk_version: SDK_VERSION
                };
                "f_net" !== i && "f_data" !== i || (n.errorCode = this.errorCode[i]);
                var r = [];
                if (r.push(this.process("applog_trace", n, !0)),
                r && r.length)
                    return delete r[0].is_bav,
                    r
            } catch (e) {}
        }
        ,
        e.prototype.listener = function() {
            var e = this;
            this.ready && (document.addEventListener("visibilitychange", function() {
                e.leavePage()
            }),
            beforePageUnload(function() {
                e.leavePage()
            }))
        }
        ,
        e.prototype.leavePage = function() {
            if (this.ready)
                try {
                    var e = [];
                    for (var t in this.count)
                        if (this.count[t]) {
                            var i = this.errorInfo[t];
                            for (var n in e = __spread(e, this.processTracer(this.count[t], t, "net")),
                            i)
                                i[n] && (e = __spread(e, this.processTracer(i[n], t, n)))
                        }
                    e && e.length && this.sendTracer(e, !1, "", !0)
                } catch (e) {}
        }
        ,
        e
    }()
      , AppBridge = function() {
        function e(e) {
            this.logger = e,
            this.appId = 0
        }
        var t = e.prototype;
        return t.bridgeInject = function() {
            try {
                return AppLogBridge ? (this.logger.info("AppLogBridge is injected"),
                !0) : (this.logger.info("AppLogBridge is not inject"),
                !1)
            } catch (e) {
                return this.logger.info("AppLogBridge is not inject"),
                !1
            }
        }
        ,
        t.hasStarted = function(e) {
            var t = this;
            try {
                this.bridgeInject() ? AppLogBridge.hasStarted(function(i) {
                    t.logger.info("AppLogBridge is started? : " + i),
                    e(i)
                }) : e(0)
            } catch (t) {
                this.logger.info("AppLogBridge, error:" + JSON.stringify(t.stack)),
                e(0)
            }
        }
        ,
        t.setNativeAppId = function(e) {
            try {
                AppLogBridge.setNativeAppId(JSON.stringify(e)),
                console.log("change bridge appid, event report with appid: " + e)
            } catch (e) {
                console.error("setNativeAppId error")
            }
        }
        ,
        t.setUserUniqueId = function(e) {
            try {
                AppLogBridge.setUserUniqueId(e)
            } catch (e) {
                this.logger.error("setUserUniqueId error")
            }
        }
        ,
        t.addHeaderInfo = function(e, t) {
            try {
                AppLogBridge.addHeaderInfo(e, t)
            } catch (e) {
                this.logger.error("addHeaderInfo error")
            }
        }
        ,
        t.setHeaderInfo = function(e) {
            try {
                AppLogBridge.setHeaderInfo(JSON.stringify(e))
            } catch (e) {
                this.logger.error("setHeaderInfo error")
            }
        }
        ,
        t.removeHeaderInfo = function(e) {
            try {
                AppLogBridge.removeHeaderInfo(e)
            } catch (e) {
                this.logger.error("removeHeaderInfo error")
            }
        }
        ,
        t.onEventV3 = function(e, t) {
            try {
                AppLogBridge.onEventV3(e, t)
            } catch (e) {
                this.logger.error("onEventV3 error")
            }
        }
        ,
        t.profileSet = function(e) {
            try {
                AppLogBridge.profileSet(e)
            } catch (e) {
                this.logger.error("profileSet error")
            }
        }
        ,
        t.profileSetOnce = function(e) {
            try {
                AppLogBridge.profileSetOnce(e)
            } catch (e) {
                this.logger.error("profileSetOnce error")
            }
        }
        ,
        t.profileIncrement = function(e) {
            try {
                AppLogBridge.profileIncrement(e)
            } catch (e) {
                this.logger.error("profileIncrement error")
            }
        }
        ,
        t.profileUnset = function(e) {
            try {
                AppLogBridge.profileUnset(e)
            } catch (e) {
                this.logger.error("profileUnset error")
            }
        }
        ,
        t.profileAppend = function(e) {
            try {
                AppLogBridge.profileAppend(e)
            } catch (e) {
                this.logger.error("profileAppend error")
            }
        }
        ,
        e
    }();
    function stringify(e, t, i) {
        void 0 === t && (t = ""),
        void 0 === i && (i = {});
        var n = e;
        "/" === (n = n.split("#")[0].split("?")[0])[e.length - 1] && (n = n.substr(0, e.length - 1)),
        n = "/" === t[0] ? n.replace(/(https?:\/\/[\w-]+(\.[\w-]+){1,}(:[0-9]{1,5})?)(\/[.\w-]+)*\/?$/, "$1" + t) : n.replace(/(https?:\/\/[\w-]+(\.[\w-]+){1,}(:[0-9]{1,5})?(\/[.\w-]+)*?)(\/[.\w-]+)?\/?$/, "$1/" + t);
        var r = Object.keys(i).map(function(e) {
            return e + "=" + i[e]
        }).join("&");
        return r.length > 0 ? n + "?" + r : n
    }
    var Ruote = function() {
        function e(e) {
            this.autotrack = !1,
            this.spa = !1,
            this.cache = {},
            (e.spa || e.autotrack) && (this.config = e,
            this.autotrack = !!e.autotrack,
            this.spa = e.spa,
            this.fncArray = new Map,
            this.setLocation(),
            this.hack(),
            this.setKey(),
            this.listener())
        }
        return e.prototype.setKey = function() {
            this.storage = new Storage(!1),
            this.cache_key = "__tea_cache_refer_" + this.config.app_id,
            this.cache = {
                refer_key: location.href,
                refer_title: document.title || location.pathname,
                refer_manual_key: ""
            },
            this.config.autotrack && "object" == typeof this.config.autotrack && this.config.autotrack.page_manual_key && (this.cache.refer_manual_key = this.config.autotrack.page_manual_key),
            this.storage.setItem(this.cache_key, this.cache)
        }
        ,
        e.prototype.hack = function() {
            var e = this
              , t = window.history.pushState;
            history.pushState = function(i) {
                for (var n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                "function" == typeof history.onpushstate && history.onpushstate({
                    state: i
                });
                var o = t.call.apply(t, __spread([history, i], n))
                  , s = e.getPopStateChangeEventData();
                return e.lastLocation = stringify(location.href, n[1]),
                e.cache.refer_key = e.lastLocation,
                e.storage.setItem(e.cache_key, e.cache),
                e.sendPv(s, "pushState"),
                o
            }
            ;
            var i = history.replaceState;
            history.replaceState = function(t) {
                for (var n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                "function" == typeof history.onreplacestate && history.onreplacestate({
                    state: t
                });
                var o = i.call.apply(i, __spread([history, t], n))
                  , s = e.getPopStateChangeEventData();
                return e.lastLocation = stringify(location.href, n[1]),
                e.cache.refer_key = e.lastLocation,
                e.storage.setItem(e.cache_key, e.cache),
                e.sendPv(s),
                o
            }
        }
        ,
        e.prototype.setLocation = function() {
            "undefined" != typeof window && (this.lastLocation = window.location.href)
        }
        ,
        e.prototype.add = function(e, t) {
            this.fncArray.get(e) || this.fncArray.set(e, t)
        }
        ,
        e.prototype.init = function(e, t) {
            this.add(e, t),
            this.fncArray.get(e)(this.getPopStateChangeEventData())
        }
        ,
        e.prototype.listener = function() {
            var e = this
              , t = null;
            window.addEventListener("hashchange", function(i) {
                e.lastLocation !== window.location.href && clearTimeout(t)
            }),
            window.addEventListener("popstate", function(i) {
                e.lastLocation !== window.location.href && (t = setTimeout(function() {
                    e.lastLocation = window.location.href;
                    var t = e.getPopStateChangeEventData();
                    e.sendPv(t)
                }, 10))
            })
        }
        ,
        e.prototype.getPopStateChangeEventData = function() {
            var e = this.pageConfig();
            return e.is_back = 0,
            e
        }
        ,
        e.prototype.pageConfig = function() {
            var e = ""
              , t = this.storage.getItem(this.cache_key) || {}
              , i = !1;
            return e = document.referrer ? document.referrer : t.refer_key || "",
            i = !this.storage.getItem("__tea_cache_first_" + this.config.app_id),
            {
                is_html: 1,
                url: location.href,
                referrer: e,
                page_key: location.href,
                refer_page_key: e,
                page_title: document.title || location.pathname,
                page_manual_key: this.config.autotrack && this.config.autotrack.page_manual_key || "",
                refer_page_manual_key: t.refer_manual_key || "",
                refer_page_title: t.refer_title || "",
                page_path: location.pathname,
                page_host: location.host,
                is_first_time: "" + i
            }
        }
        ,
        e.prototype.sendPv = function(e, t) {
            this.fncArray.forEach(function(i) {
                i(e, t)
            })
        }
        ,
        e
    }()
      , hashCode = function(e) {
        for (var t = 0, i = 0, n = (e += "").length, r = 0; r < n; r++)
            ((t = 31 * t + e.charCodeAt(i++)) > 0x7fffffffffff || t < -0x800000000000) && (t &= 0xffffffffffff);
        return t < 0 && (t += 0x7ffffffffffff),
        t
    };
    function getCommonParams(e, t, i) {
        return {
            title: t || document.title || location.pathname,
            url: i || location.href,
            url_path: e || location.pathname
        }
    }
    function getCurrentTime() {
        return Date.now()
    }
    function getPageStartTime() {
        var e = getNameSpace();
        return window[e] ? window[e].l : getCurrentTime()
    }
    function isSupVisChange() {
        var e = !1;
        return ["hidden", "msHidden", "webkitHidden"].forEach(function(t) {
            void 0 !== document[t] && (e = !0)
        }),
        e
    }
    var PageAlive = function() {
        function e(e, t) {
            var i = this;
            this._sendEvent = function(e) {
                void 0 === e && (e = !1);
                var t = e ? i.options.aliveDTime : getCurrentTime() - i.sessionStartTime;
                t < 0 || getCurrentTime() - i.pageStartTime > i.options.maxDuration || (i.event("predefine_page_alive", __assign({}, getCommonParams(i.url_path, i.title, i.url), {
                    duration: t,
                    is_support_visibility_change: i.options.sup_vis_change ? 1 : 0,
                    startTime: i.sessionStartTime
                }), "sdk"),
                i.sessionStartTime = getCurrentTime())
            }
            ,
            this._setUpTimer = function() {
                return i.timerHandler && clearInterval(i.timerHandler),
                setInterval(function() {
                    getCurrentTime() - i.sessionStartTime > i.options.aliveDTime && i._sendEvent(!0)
                }, 1e3)
            }
            ,
            this._visibilitychange = function() {
                "hidden" === document.visibilityState ? i.timerHandler && (clearInterval(i.timerHandler),
                i._sendEvent()) : "visible" === document.visibilityState && (i.sessionStartTime = getCurrentTime(),
                i.timerHandler = i._setUpTimer())
            }
            ,
            this._beforeunload = function() {
                document.hidden || i._sendEvent()
            }
            ,
            this._wtest = function() {
                document.getElementById("wtest").innerHTML = "visibilitychange"
            }
            ,
            this._dtest = function() {
                document.getElementById("dtest").innerHTML = "dvisibilitychange"
            }
            ,
            this.event = e,
            this.config = t,
            this.isSupVisChange = isSupVisChange(),
            this.options = {
                maxDuration: 432e5,
                aliveDTime: 6e4,
                sup_vis_change: isSupVisChange()
            },
            this.pageStartTime = getPageStartTime(),
            this.sessionStartTime = this.pageStartTime,
            this.timerHandler = null,
            this.disableCallback = function() {}
        }
        return e.prototype.enable = function(e, t, i) {
            this.url_path = e,
            this.url = i,
            this.title = t,
            this.disableCallback = this._enablePageAlive()
        }
        ,
        e.prototype.disable = function() {
            this.disableCallback(),
            this.pageStartTime = Date.now()
        }
        ,
        e.prototype._enablePageAlive = function() {
            var e = this;
            return this.timerHandler = this._setUpTimer(),
            document.addEventListener("visibilitychange", this._visibilitychange),
            beforePageUnload(this._beforeunload),
            function() {
                e._beforeunload(),
                document.removeEventListener("visibilitychange", e._visibilitychange),
                window.removeEventListener("beforeunload", e._beforeunload),
                window.removeEventListener("pagehide", e._beforeunload)
            }
        }
        ,
        e
    }()
      , PageClose = function() {
        function e(e, t) {
            var i = this;
            this._visibilitychange = function() {
                "hidden" === document.visibilityState ? i.activeEndTime = getCurrentTime() : "visible" === document.visibilityState && (i.activeEndTime && (i.totalTime += i.activeEndTime - i.activeStartTime,
                i.activeTimes += 1),
                i.activeEndTime = void 0,
                i.activeStartTime = getCurrentTime())
            }
            ,
            this._beforeunload = function() {
                if (i.totalTime += (i.activeEndTime || getCurrentTime()) - i.activeStartTime,
                i.config.autotrack) {
                    try {
                        window.sessionStorage.setItem("_tea_cache_duration", JSON.stringify({
                            duration: i.totalTime,
                            page_title: document.title || location.pathname
                        }))
                    } catch (e) {}
                }
                i._sendEventPageClose()
            }
            ,
            this.event = e,
            this.config = t,
            this.isSupVisChange = isSupVisChange(),
            this.options = {
                sup_vis_change: this.isSupVisChange
            },
            this.maxDuration = t.maxDuration || 864e5,
            this.disableCallback = function() {}
            ,
            this.pageStartTime = getPageStartTime(),
            this._resetData()
        }
        return e.prototype.enable = function(e, t, i) {
            this.url_path = e,
            this.url = i,
            this.title = t,
            this.disableCallback = this._enablePageClose()
        }
        ,
        e.prototype.disable = function() {
            this.disableCallback()
        }
        ,
        e.prototype._resetData = function() {
            this.activeStartTime = void 0 === this.activeStartTime ? getPageStartTime() : Date.now(),
            this.activeEndTime = void 0,
            this.activeTimes = 1,
            this.totalTime = 0
        }
        ,
        e.prototype._sendEventPageClose = function() {
            var e = getCurrentTime() - this.pageStartTime;
            this.totalTime < 0 || e < 0 || this.totalTime >= this.maxDuration || (this.event("predefine_page_close", __assign({}, getCommonParams(this.url_path, this.title, this.url), {
                active_times: this.activeTimes,
                duration: this.totalTime,
                total_duration: e,
                is_support_visibility_change: this.options.sup_vis_change ? 1 : 0
            }), "sdk"),
            this.pageStartTime = Date.now(),
            this._resetData())
        }
        ,
        e.prototype._enablePageClose = function() {
            var e = this;
            return document.addEventListener("visibilitychange", this._visibilitychange),
            beforePageUnload(this._beforeunload),
            function() {
                e._beforeunload(),
                document.removeEventListener("visibilitychange", e._visibilitychange),
                window.removeEventListener("beforeunload", e._beforeunload),
                window.removeEventListener("pagehide", e._beforeunload)
            }
        }
        ,
        e
    }()
      , StayDuration = function() {
        function e(e, t) {
            this.pageAlive = new PageAlive(e,t),
            this.pageClose = new PageClose(e,t),
            this.title = document.title || location.pathname,
            this.url = location.href,
            this.url_path = location.pathname,
            this._enable(this.url_path, this.title, this.url)
        }
        return e.prototype._enable = function(e, t, i) {
            this.pageAlive.enable(e, t, i),
            this.pageClose.enable(e, t, i)
        }
        ,
        e.prototype._disable = function() {
            this.pageAlive.disable(),
            this.pageClose.disable()
        }
        ,
        e.prototype.reset = function(e, t, i) {
            this._disable(),
            this._enable(e, t, i)
        }
        ,
        e
    }();
    function selfAdjust(e, t) {
        void 0 === e && (e = function() {}
        ),
        void 0 === t && (t = 1e3);
        var i, n = Date.now() + t;
        return i = window.setTimeout(function r() {
            var o = Date.now() - n;
            e(),
            n += t,
            i = window.setTimeout(r, Math.max(0, t - o))
        }, t),
        function() {
            window.clearTimeout(i)
        }
    }
    var Session$1 = function() {
        function e(e) {
            var t = this;
            this._setInterval = function() {
                t._clearIntervalFunc = selfAdjust(function() {
                    t._isSessionhasEvent && t._endCurrentSession()
                }, t.sessionInterval)
            }
            ,
            this._clearInterval = function() {
                t._clearIntervalFunc && t._clearIntervalFunc()
            }
            ,
            this.sessionInterval = 6e4,
            this._eventSenderFunc = e,
            this._startTime = 0,
            this._lastTime = 0,
            this._setInterval()
        }
        return e.prototype._endCurrentSession = function() {
            this._eventSenderFunc("_be_active", {
                start_time: this._startTime,
                end_time: this._lastTime,
                url: window.location.href,
                referrer: window.document.referrer
            }, "sdk"),
            this._isSessionhasEvent = !1,
            this._startTime = 0
        }
        ,
        e.prototype.process = function() {
            this._isSessionhasEvent || (this._isSessionhasEvent = !0,
            this._startTime = +new Date);
            var e = this._lastTime || +new Date;
            this._lastTime = +new Date,
            this._lastTime - e > this.sessionInterval && (this._clearInterval(),
            this._endCurrentSession(),
            this._setInterval())
        }
        ,
        e
    }()
      , SDK_USE_TYPE = "npm";
    SDK_USE_TYPE = "script";
    var Monitor = function() {
        function e(e) {
            this.config = e
        }
        return e.prototype.sdkOnload = function(e, t, i) {
            if (!this.config.disable_track_event && !this.sdkReady) {
                this.sdkReady = !0;
                try {
                    if (0 === i.length)
                        return;
                    var n = i[0]
                      , r = n.header
                      , o = n.user
                      , s = r.app_id
                      , a = r.app_name
                      , c = r.sdk_version
                      , u = o.web_id
                      , h = {
                        events: [{
                            event: "onload",
                            params: JSON.stringify({
                                app_key: e,
                                app_id: s,
                                app_name: a || "",
                                sdk_version: c,
                                sdk_type: SDK_USE_TYPE,
                                sdk_config: this.config
                            }),
                            local_time_ms: Date.now()
                        }],
                        user: {
                            user_unique_id: u
                        },
                        header: {}
                    };
                    setTimeout(function() {
                        request(t, 3e4, [h], "566f58151b0ed37e")
                    }, 16)
                } catch (e) {}
            }
        }
        ,
        e.prototype.sdkError = function(e, t, i, n) {
            try {
                if (this.config.disable_track_event)
                    return;
                var r = i[0]
                  , o = r.user
                  , s = r.header
                  , a = [];
                i.forEach(function(e) {
                    e.events.forEach(function(e) {
                        a.push(e)
                    })
                });
                var c = {
                    events: a.map(function(t) {
                        return {
                            event: "on_error",
                            params: JSON.stringify({
                                error_code: n,
                                app_key: e,
                                app_id: s.app_id,
                                app_name: s.app_name || "",
                                error_event: t.event,
                                sdk_version: s.sdk_version,
                                local_time_ms: t.local_time_ms,
                                tea_event_index: Date.now(),
                                params: t.params,
                                header: JSON.stringify(s),
                                user: JSON.stringify(o)
                            }),
                            local_time_ms: Date.now()
                        }
                    }),
                    user: {
                        user_unique_id: o.user_unique_id
                    },
                    header: {}
                };
                setTimeout(function() {
                    request(t, 3e4, [c], "566f58151b0ed37e")
                }, 16)
            } catch (e) {}
        }
        ,
        e
    }()
      , getIframeUrl = function() {
        try {
            var e = JSON.parse(atob(window.name));
            return e || void 0
        } catch (e) {
            return
        }
    };
    function openOverlayer() {
        if (!document.getElementById(STYLE_ID)) {
            var e = "body { opacity: 0 !important; }"
              , t = document.head || document.getElementsByTagName("head")[0]
              , i = document.createElement("style");
            i.id = STYLE_ID,
            i.type = "text/css",
            i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)),
            t.appendChild(i)
        }
    }
    function closeOverlayer() {
        var e = document.getElementById(STYLE_ID);
        e && e.parentElement.removeChild(e)
    }
    var storage = new Storage(!1)
      , getStorageKey = function(e) {
        return STORAGE_DATA_KEY + "_" + e
    }
      , getCache = function(e) {
        var t = {
            ab_version: [],
            ab_ext_version: [],
            ab_version_multilink: [],
            data: null,
            timestamp: +new Date,
            uuid: ""
        };
        try {
            t = storage.getItem(getStorageKey(e)) || t
        } catch (e) {}
        return t
    }
      , _setCache = function(e, t) {
        try {
            var i = getCache(e);
            storage.setItem(getStorageKey(e), __assign({}, i, t))
        } catch (e) {}
    }
      , setVersionCache = function(e, t, i) {
        void 0 === i && (i = !1);
        var n = i ? {
            ab_ext_version: t,
            timestamp: Date.now()
        } : {
            ab_version: t,
            timestamp: Date.now()
        };
        _setCache(e, n)
    }
      , setMultilinkCache = function(e, t) {
        var i = {
            ab_version_multilink: t,
            timestamp: Date.now()
        };
        _setCache(e, i)
    }
      , setDataCache = function(e, t, i) {
        _setCache(e, {
            data: t,
            uuid: i
        })
    }
      , checkExpiration = function(e) {
        var t = getCache(e)
          , i = t.timestamp;
        if (Date.now() - i >= STORAGE_DATA_EXPRIRE) {
            try {
                storage.removeItem(STORAGE_DATA_KEY)
            } catch (e) {}
            return null
        }
        return t
    }
      , msgQueueMap = {}
      , allowdOrigins = []
      , addAllowdOrigin = function(e) {
        e.length && e.forEach(function(e) {
            allowdOrigins.push(e)
        })
    };
    function dispatchMsg(e, t, i, n) {
        var r = e && e.source || window.opener || window.parent
          , o = e && e.origin || n || "*"
          , s = {
            type: t,
            payload: i
        };
        r.postMessage(JSON.stringify(s), o)
    }
    function receiveMsg(e, t) {
        msgQueueMap[e] = msgQueueMap[e] || [],
        msgQueueMap[e].push(t)
    }
    function processMsg(e) {
        if (allowdOrigins.some(function(e) {
            return "*" === e
        }) || allowdOrigins.some(function(t) {
            return e.origin.indexOf(t) > -1
        })) {
            var t = e.data;
            if ("string" == typeof e.data)
                try {
                    t = JSON.parse(e.data)
                } catch (e) {
                    t = void 0
                }
            if (!t)
                return;
            var i = t.type
              , n = t.payload;
            msgQueueMap[i] && msgQueueMap[i].forEach(function(t) {
                "function" == typeof t && t(e, n)
            })
        }
    }
    function init(e, t) {
        var i = __assign({}, e);
        i.filter && delete i.filter,
        "object" == typeof i.autotrack && i.autotrack.collect_url && delete i.autotrack.collect_url,
        (window.opener || window.parent).postMessage({
            type: "tea:sdk:info",
            config: e,
            version: t
        }, "*"),
        window.addEventListener("message", processMsg, !1)
    }
    function loadScript(e, t, i) {
        var n = document.createElement("script");
        n.src = e,
        n.onerror = function() {
            i(e)
        }
        ,
        n.onload = function() {
            t()
        }
        ,
        document.getElementsByTagName("head")[0].appendChild(n)
    }
    window.TEAVisualEditor = window.TEAVisualEditor || {};
    var VISUAL_URL = ""
      , isLoaded = !1;
    function loadEditorScript(e) {
        var t = e.event
          , i = e.editorUrl;
        e.collectInstance,
        e.fromSession;
        isLoaded || (isLoaded = !0,
        loadScript(i, function() {
            dispatchMsg(t, "abEditorScriptloadSuccess")
        }, function() {
            t && dispatchMsg(t, "abEditorScriptloadError"),
            isLoaded = !1
        }))
    }
    function readyToLoadEditor(e, t, i, n) {
        addAllowdOrigin(["*"]);
        var r, o = "";
        init(n, SDK_VERSION);
        var s = "";
        try {
            var a = window.performance.getEntriesByType("resource");
            if (a && a.length && (a.forEach(function(e) {
                "script" === e.initiatorType && e.name && -1 !== e.name.indexOf("collect") && (s = e.name)
            }),
            s || document.currentScript && (s = document.currentScript.src),
            s && (r = s.split("/")) && r.length)) {
                o = "https:/";
                for (var c = 2; c < r.length && c !== r.length - 1; c++)
                    o = o + "/" + r[c];
                o += "/visual-ab-core"
            }
        } catch (e) {}
        receiveMsg("tea:openVisualABEditor", function(n) {
            var r = n.data;
            if ("string" == typeof n.data)
                try {
                    r = JSON.parse(n.data)
                } catch (e) {
                    r = void 0
                }
            if (r) {
                var s = r.lang;
                if (r.appId !== t)
                    return dispatchMsg(n, "appIdError"),
                    void console.error("abtest appid is not belong the page appid please check");
                var a = r.version;
                if (a)
                    VISUAL_URL = o ? "" + o + (a ? "." + a : ".1.0.1") + ".js?query=" + Date.now() : decodeUrl(VISUAL_URL_ASC) + "?query=" + Date.now();
                else
                    VISUAL_URL = decodeUrl(VISUAL_URL_ASC) + "?query=" + Date.now();
                window.TEAVisualEditor.lang = s,
                i && (window.TEAVisualEditor.__ab_domin = i),
                loadEditorScript({
                    event: n,
                    editorUrl: VISUAL_URL,
                    collectInstance: e
                })
            }
        })
    }
    var loadMuiltlink = function(e, t, i, n) {
        window.TEAVisualEditor.appId = t,
        receiveMsg("tea:openTesterEventInspector", function(t) {
            var i = t.data;
            if ("string" == typeof t.data)
                try {
                    i = JSON.parse(t.data)
                } catch (e) {
                    i = void 0
                }
            if (i) {
                var n = i.referrer
                  , r = i.lang
                  , o = i.appId;
                window.TEAVisualEditor.__editor_ajax_domain = n || "",
                window.TEAVisualEditor.__ab_appId = o || "",
                window.TEAVisualEditor.lang = r || "",
                loadEditorScript({
                    event: t,
                    editorUrl: decodeUrl(VISUAL_URL_INSPECTOR) + ".js?query=" + Date.now(),
                    collectInstance: e
                })
            }
        })
    }, VISUAL_RANGER_URL = decodeUrl(VISUAL_URL_RANGER) + "?query=" + Date.now(), loadVisual = function(e) {
        window.TEAVisualEditor.__ab_config = e,
        loadScript(VISUAL_RANGER_URL, function() {
            console.log("load visual render success")
        }, function() {
            console.log("load visual render fail")
        })
    }, FetchStatus, RefreshFetchStatus, CallbackType;
    !function(e) {
        e[e.No = 0] = "No",
        e[e.Ing = 1] = "Ing",
        e[e.Complete = 2] = "Complete"
    }(FetchStatus || (FetchStatus = {})),
    function(e) {
        e[e.Ing = 0] = "Ing",
        e[e.Complete = 1] = "Complete"
    }(RefreshFetchStatus || (RefreshFetchStatus = {})),
    function(e) {
        e[e.Var = 0] = "Var",
        e[e.All = 1] = "All"
    }(CallbackType || (CallbackType = {}));
    var AB = function() {
        function e(e, t, i) {
            var n = this;
            this.appId = 0,
            this.user = {},
            this.header = {},
            this.domain = "",
            this.protocal = location.protocol,
            this.fetchStatus = FetchStatus.No,
            this.refreshFetchStatus = RefreshFetchStatus.Complete,
            this.callbacks = [],
            this.data = null,
            this.versions = [],
            this.extVersions = [],
            this.mulilinkVersions = [],
            this.collector = e,
            this.initConfig = i;
            var r = this.collector._initConfig
              , o = r.app_id
              , s = r.channel
              , a = r.enable_multilink
              , c = r.multilink_timeout_ms
              , u = r.ab_channel_domain
              , h = r.channel_domain
              , d = r.enable_ab_visual
              , l = r.ab_timeout;
            if (this.appId = o,
            this.timeout = l || 3e3,
            this.domain = u || decodeUrl(DOMAINS[s || "cn"]),
            this.domain) {
                this.needOverlay = a || d || !1,
                this.enable_ab_visual = d,
                this.enable_multilink = a,
                this.closeTime = c || 500,
                this.Hook = t;
                var f = h || decodeUrl(LOG_URL[s]);
                this.reportUrl = "" + f + REPORT_URL,
                this.editCheck(),
                d && (readyToLoadEditor(e, this.appId, u || "", i),
                "visual-editor" === this.editMode) ? this.collector.destroy() : (a && loadMuiltlink(e, this.appId, u || "", i),
                this.Hook.on("uuid-change", function() {
                    n.refreshFetchStatus = RefreshFetchStatus.Ing
                }),
                this._check(),
                this.wait())
            } else
                console.warn("sorry, channel in is not support abtest yet~")
        }
        return e.prototype.editCheck = function() {
            var e = getIframeUrl();
            if (e) {
                var t = e.scenario
                  , i = e.href;
                t ? "heatmap" === t ? (console.log("heatmap mode"),
                this.editMode = "heatmap") : "visual-editor" === t && (console.log("visual mode"),
                this.editMode = "visual-editor") : !i || -1 === i.indexOf("datatester") && -1 === i.indexOf("visual-editor") || (console.log("visual mode"),
                this.editMode = "visual-editor")
            }
        }
        ,
        e.prototype.checkFromUrl = function() {
            var e = parseUrlQuery(window.location.href);
            return e && e.vid ? e.vid : ""
        }
        ,
        e.prototype.refetch = function(e) {
            this.data = {},
            this.versions = [],
            this.mulilinkVersions = [],
            this.extVersions = [];
            var t = this.collector._config.get();
            t.user.user_unique_id = e.user_unique_id || t.user.user_unique_id,
            t.user.ssid = e.ssid || t.user.ssid,
            t.user.web_id = e.web_id || t.user.web_id,
            this.init(t)
        }
        ,
        e.prototype.init = function(e, t) {
            if (!this.collector.destroyInstance)
                if (this.domain) {
                    this.config = e;
                    var i = e.user
                      , n = e.header
                      , r = __rest(n, []);
                    this.user = __assign({}, i),
                    this.header = __assign({}, n),
                    this._fetch(__assign({}, r), {
                        success: t,
                        fail: t
                    })
                } else
                    console.warn("sorry, channel in is not support abtest yet~")
        }
        ,
        e.prototype._check = function() {
            var e = this
              , t = checkExpiration(this.appId);
            if (t) {
                var i = t.ab_version
                  , n = t.data
                  , r = t.ab_ext_version
                  , o = t.ab_version_multilink
                  , s = this.checkFromUrl();
                s ? this.mulilinkVersions.push(s) : this.mulilinkVersions = o || [],
                this.extVersions = r,
                i && i.length && (this.versions = i,
                this.data = n,
                setTimeout(function() {
                    e._configVersions()
                }))
            }
        }
        ,
        e.prototype.wait = function() {
            var e = this;
            this.needOverlay && (this.isWait || (this.openOverlayer(),
            this.isWait = !0),
            setTimeout(function() {
                e.closeOverlayer()
            }, this.closeTime))
        }
        ,
        e.prototype.getAllVars = function(e) {
            if ("function" != typeof e)
                throw new Error("callback must be a function");
            var t = {
                callback: e,
                type: CallbackType.All
            };
            this.fetchStatus === FetchStatus.Complete && this.refreshFetchStatus === RefreshFetchStatus.Complete ? this._getAllVars(t) : this.callbacks.push(t)
        }
        ,
        e.prototype._getAllVars = function(e) {
            (0,
            e.callback)(this.data ? JSON.parse(JSON.stringify(this.data)) : {})
        }
        ,
        e.prototype.getVids = function() {
            try {
                var e = getCache(this.appId)
                  , t = e.ab_version
                  , i = e.ab_version_multilink
                  , n = e.ab_ext_version
                  , r = ""
                  , o = t.concat(i).concat(n);
                return o && o.length && (r = o.join(",")),
                r
            } catch (e) {
                return ""
            }
        }
        ,
        e.prototype.getAbSdkVersion = function(e) {
            e(this.getVids())
        }
        ,
        e.prototype.getVar = function(e, t, i) {
            if (!e)
                throw new Error("variable must not be empty");
            if (void 0 === t)
                throw new Error("variable no default value");
            if ("function" != typeof i)
                throw new Error("callback must be a function");
            var n = {
                name: e,
                defaultValue: t,
                callback: i,
                type: CallbackType.Var
            };
            if (this.fetchStatus === FetchStatus.Complete && this.refreshFetchStatus === RefreshFetchStatus.Complete) {
                this._getVar(n, e);
                try {
                    this.Hook.emit("onAbSdkVersionChange", this.getVids())
                } catch (e) {}
            } else
                this.callbacks.push(n)
        }
        ,
        e.prototype._getVar = function(e, t) {
            var i = e.name
              , n = e.defaultValue
              , r = e.callback
              , o = this.data;
            if (o) {
                if ("object" == typeof o[i] && void 0 !== o[i].val) {
                    var s = o[i].vid;
                    return "$ab_url" === t ? (-1 === this.mulilinkVersions.indexOf(s) && this.mulilinkVersions.push(s),
                    this._updateMultilinkVersions()) : (-1 === this.versions.indexOf(s) && this.versions.push(s),
                    this._updateVersions()),
                    this._abEvent(s, t, n),
                    void r(o[i].val)
                }
                r(n)
            } else
                r(n)
        }
        ,
        e.prototype._abEvent = function(e, t, i) {
            var n = this;
            try {
                if (this.initConfig.disable_track_event)
                    return;
                var r = this.collector._config.get()
                  , o = r.header
                  , s = r.user
                  , a = getCache(this.appId);
                if (a && a.uuid && a.uuid !== s.user_unique_id)
                    return;
                if (e) {
                    var c = {
                        event: "abtest_exposure",
                        ab_sdk_version: "" + e,
                        params: JSON.stringify({
                            app_id: this.appId,
                            ab_url: "$ab_url" === t ? i : window.location.href
                        }),
                        local_time_ms: Date.now()
                    };
                    o.ab_sdk_version = "" + e,
                    o.custom = JSON.stringify(o.custom);
                    var u = {
                        events: [c],
                        user: s,
                        header: o
                    };
                    "$ab_url" === t ? window.navigator.sendBeacon ? window.navigator.sendBeacon(this.reportUrl, JSON.stringify([u])) : request(this.reportUrl, 2e4, [u], "") : setTimeout(function() {
                        request(n.reportUrl, 2e4, [u], "")
                    }, 16)
                }
            } catch (e) {}
        }
        ,
        e.prototype.openOverlayer = function() {
            openOverlayer()
        }
        ,
        e.prototype.closeOverlayer = function() {
            closeOverlayer()
        }
        ,
        e.prototype._setAbVersion = function(e) {
            this.extVersions = [e],
            setVersionCache(this.appId, this.extVersions, !0)
        }
        ,
        e.prototype._updateVersions = function() {
            setVersionCache(this.appId, this.versions),
            this._configVersions()
        }
        ,
        e.prototype._updateMultilinkVersions = function() {
            setMultilinkCache(this.appId, this.mulilinkVersions)
        }
        ,
        e.prototype._configVersions = function() {}
        ,
        e.prototype._getABconfig = function(e, t) {
            var i = Object.keys(e);
            i && i.length && this.collector.config(e),
            this.init(this.collector._config.get(), t)
        }
        ,
        e.prototype._fetchComplete = function(e, t) {
            var i = this;
            if (e && "[object Object]" == Object.prototype.toString.call(e)) {
                setDataCache(this.appId, e, t),
                this.data = e;
                var n = [];
                Object.keys(e).forEach(function(t) {
                    var i = e[t].vid;
                    i && n.push(i)
                }),
                -1 !== window.location.href.indexOf("multilink=true") || (this.versions = this.versions.filter(function(e) {
                    return -1 !== n.indexOf(e)
                }));
                var r = e.$ab_url
                  , o = e.$ab_modification;
                if (o && o.val && this.enable_ab_visual) {
                    if (this.collector.destroyInstance)
                        return;
                    this.getVar("$ab_modification", window.location.href, function() {
                        loadVisual(o.val)
                    })
                } else if (r && this.enable_multilink) {
                    var s = r.val
                      , a = r.vid;
                    s && a && this.getVar("$ab_url", s, function(e) {
                        if (console.log(e),
                        "heatmap" !== i.editMode) {
                            var t = window.location.href;
                            -1 !== t.indexOf("multilink=true") && (t = i.filterUrl(t)),
                            s !== t ? setTimeout(function() {
                                if (!i.collector.destroyInstance) {
                                    var e = "" + s;
                                    -1 !== (e = -1 === e.indexOf("http") ? "https://" + e : e).indexOf("?") ? e += "&multilink=true" : e += "?multilink=true",
                                    parseURL(e).host !== location.host && (e = e + "&vid=" + a),
                                    window.location.href = e
                                }
                            }, 50) : i.closeOverlayer()
                        }
                    })
                } else
                    this.closeOverlayer()
            }
            this.callbacks.forEach(function(e) {
                i[e.type === CallbackType.Var ? "_getVar" : "_getAllVars"](e, "")
            }),
            this.callbacks = [],
            this._updateVersions();
            try {
                this.Hook.emit("onAbSdkVersionChange", this.getVids())
            } catch (e) {}
            this.isWait || this.closeOverlayer()
        }
        ,
        e.prototype._fetch = function(e, t) {
            var i = this
              , n = void 0 === t ? {} : t
              , r = n.success
              , o = void 0 === r ? function() {}
            : r
              , s = n.fail
              , a = void 0 === s ? function() {}
            : s;
            this.fetchStatus = FetchStatus.Ing;
            var c = "" + this.domain + API
              , u = window.location.href
              , h = !1;
            -1 !== u.indexOf("multilink=true") && (u = this.filterUrl(u),
            h = !0);
            var d = h ? this.mulilinkVersions : this.versions;
            xhr(c, {
                header: __assign({
                    aid: this.appId
                }, this.user || {}, e || {}, {
                    ab_sdk_version: d.join(","),
                    ab_url: u
                })
            }, function(e) {
                i.fetchStatus = FetchStatus.Complete,
                i.refreshFetchStatus = RefreshFetchStatus.Complete;
                var t = e.data;
                "success" === e.message ? (i._fetchComplete(t, i.user.user_unique_id),
                o(t)) : (i._fetchComplete(null, i.user.user_unique_id),
                a())
            }, function() {
                i.fetchStatus = FetchStatus.Complete,
                a(),
                i._fetchComplete(null, i.user.user_unique_id)
            }, "", this.timeout)
        }
        ,
        e.prototype.filterUrl = function(e) {
            try {
                var t = "";
                -1 !== e.indexOf("&multilink=true") ? t = "&multilink=true[\0-ÿ]*" : -1 !== e.indexOf("?multilink=true") && (t = "\\?multilink=true[\0-ÿ]*");
                var i = new RegExp(t,"g");
                e = e.replace(i, "")
            } catch (e) {}
            return e
        }
        ,
        e
    }()
      , maxStorage = function(e, t, i, n) {
        if (t) {
            var r = e.filter(function(e) {
                return !e[0].__disable_storage__
            }).length;
            if (r > 0)
                try {
                    var o = n.getItem(i);
                    if (o) {
                        var s = Object.keys(o)
                          , a = s.length + r - t;
                        if (a > 0) {
                            for (var c = s.map(function(e) {
                                var t = o[e];
                                return {
                                    id: e,
                                    index: t && t[0] ? t[0].header.__storage_index__ : +new Date
                                }
                            }).sort(function(e, t) {
                                return e.index - t.index
                            }), u = 0; u < a; u++) {
                                var h = c.shift();
                                h && h.id && o[h.id] && delete o[h.id]
                            }
                            n.setItem(i, o)
                        }
                    }
                } catch (e) {}
        }
    }
      , Et_Test = function() {
        function e(e) {
            this.config = e,
            "string" == typeof e.event_verify_url ? this.url = e.event_verify_url + "/" + ET_TEST_URL : console.log("please use correct et_test url")
        }
        return e.prototype.send = function(e) {
            this.config.disable_track_event || this.url && request(this.url, 3e4, e)
        }
        ,
        e
    }()
      , Plugin = function() {
        return function(e, t, i, n, r) {
            t && (t.enable_stay_duration && (this.stay = new StayDuration(n,t)),
            t.disable_session || (this.session = new Session$1(i)),
            t.channel_domain || t.disable_sdk_monitor || (this.monitor = new Monitor(t)),
            t.event_verify_url && (this.et_test = new Et_Test(t)),
            t.enable_ab_test && (this.ab = new AB(e,r,t)),
            t.max_storage_num && (this.maxStorage = maxStorage))
        }
    }()
      , Profile = function() {
        function e(e, t, i) {
            this.config = i,
            this.processEvent = e,
            this._event = t,
            this.cache = {},
            this.duration = 6e4,
            this.profileReady = !1,
            this.config = i,
            this.reportUrl = (i.channel_domain || decodeUrl(LOG_URL[i.channel])) + "/profile/list"
        }
        return e.prototype.start = function() {
            this.profileReady = !0
        }
        ,
        e.prototype.report = function(e, t) {
            void 0 === t && (t = {});
            try {
                if (this.config.disable_track_event)
                    return;
                var i = [];
                i.push(this.processEvent(e, t));
                var n = this._event._mergeEvents(i);
                request(this.reportUrl, 3e5, n)
            } catch (e) {}
        }
        ,
        e.prototype.setProfile = function(e) {
            var t = this._formatParams(e);
            t && Object.keys(t).length && (this._pushCache(t),
            this.report("__profile_set", __assign({}, t, {
                profile: !0
            })))
        }
        ,
        e.prototype.setOnceProfile = function(e) {
            var t = this._formatParams(e, !0);
            t && Object.keys(t).length && (this._pushCache(t),
            this.report("__profile_set_once", __assign({}, t, {
                profile: !0
            })))
        }
        ,
        e.prototype.incrementProfile = function(e) {
            e ? this.report("__profile_increment", __assign({}, e, {
                profile: !0
            })) : console.warn("please check the params, must be object!!!")
        }
        ,
        e.prototype.unsetProfile = function(e) {
            if (e) {
                var t = {};
                t[e] = "1",
                this.report("__profile_unset", __assign({}, t, {
                    profile: !0
                }))
            } else
                console.warn("please check the key, must be string!!!")
        }
        ,
        e.prototype.appendProfile = function(e) {
            if (e) {
                var t = {};
                for (var i in e)
                    "string" == typeof e[i] || "Array" === Object.prototype.toString.call(e[i]).slice(8, -1) ? t[i] = e[i] : console.warn("please check the value of param: " + i + ", must be string or array !!!");
                Object.keys(t).length && this.report("__profile_append", __assign({}, t, {
                    profile: !0
                }))
            } else
                console.warn("please check the params, must be object!!!")
        }
        ,
        e.prototype._pushCache = function(e) {
            var t = this;
            Object.keys(e).forEach(function(i) {
                t.cache[i] = {
                    val: t._clone(e[i]),
                    timestamp: Date.now()
                }
            })
        }
        ,
        e.prototype._formatParams = function(e, t) {
            var i = this;
            void 0 === t && (t = !1);
            try {
                if (!e || "[object Object]" !== Object.prototype.toString.call(e))
                    return void console.warn("please check the params type, must be object !!!");
                var n = {};
                for (var r in e)
                    "string" == typeof e[r] || "number" == typeof e[r] || "Array" === Object.prototype.toString.call(e[r]).slice(8, -1) ? n[r] = e[r] : console.warn("please check the value of params:" + r + ", must be string,number,Array !!!");
                var o = Object.keys(n);
                if (!o.length)
                    return;
                var s = Date.now();
                return o.filter(function(n) {
                    var r = i.cache[n];
                    return t ? !r : !(r && i._compare(r.val, e[n]) && s - r.timestamp < i.duration)
                }).reduce(function(e, t) {
                    return e[t] = n[t],
                    e
                }, {})
            } catch (e) {}
        }
        ,
        e.prototype._compare = function(e, t) {
            try {
                return JSON.stringify(e) === JSON.stringify(t)
            } catch (e) {
                return !1
            }
        }
        ,
        e.prototype._clone = function(e) {
            try {
                return JSON.parse(JSON.stringify(e))
            } catch (t) {
                return e
            }
        }
        ,
        e.prototype._unReady = function() {
            console.warn("sdk is not ready, please use this api after start")
        }
        ,
        e
    }()
      , dayjs_min = createCommonjsModule(function(e, t) {
        e.exports = function() {
            var e = "millisecond"
              , t = "second"
              , i = "minute"
              , n = "hour"
              , r = "day"
              , o = "week"
              , s = "month"
              , a = "quarter"
              , c = "year"
              , u = "date"
              , h = "Invalid Date"
              , d = /^(\d{4})[-\/]?(\d{1,2})?[-\/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , f = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            }
              , p = function(e, t, i) {
                var n = String(e);
                return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(i) + e
            }
              , _ = {
                s: p,
                z: function(e) {
                    var t = -e.utcOffset()
                      , i = Math.abs(t)
                      , n = Math.floor(i / 60)
                      , r = i % 60;
                    return (t <= 0 ? "+" : "-") + p(n, 2, "0") + ":" + p(r, 2, "0")
                },
                m: function e(t, i) {
                    if (t.date() < i.date())
                        return -e(i, t);
                    var n = 12 * (i.year() - t.year()) + (i.month() - t.month())
                      , r = t.clone().add(n, s)
                      , o = i - r < 0
                      , a = t.clone().add(n + (o ? -1 : 1), s);
                    return +(-(n + (i - r) / (o ? r - a : a - r)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(h) {
                    return {
                        M: s,
                        y: c,
                        w: o,
                        d: r,
                        D: u,
                        h: n,
                        m: i,
                        s: t,
                        ms: e,
                        Q: a
                    }[h] || String(h || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            }
              , g = "en"
              , m = {};
            m[g] = f;
            var v = function(e) {
                return e instanceof z
            }
              , y = function(e, t, i) {
                var n;
                if (!e)
                    return g;
                if ("string" == typeof e)
                    m[e] && (n = e),
                    t && (m[e] = t,
                    n = e);
                else {
                    var r = e.name;
                    m[r] = e,
                    n = r
                }
                return !i && n && (g = n),
                n || !i && g
            }
              , b = function(e, t) {
                if (v(e))
                    return e.clone();
                var i = "object" == typeof t ? t : {};
                return i.date = e,
                i.args = arguments,
                new z(i)
            }
              , w = _;
            w.l = y,
            w.i = v,
            w.w = function(e, t) {
                return b(e, {
                    locale: t.$L,
                    utc: t.$u,
                    x: t.$x,
                    $offset: t.$offset
                })
            }
            ;
            var z = function() {
                function f(e) {
                    this.$L = y(e.locale, null, !0),
                    this.parse(e)
                }
                var p = f.prototype;
                return p.parse = function(e) {
                    this.$d = function(e) {
                        var t = e.date
                          , i = e.utc;
                        if (null === t)
                            return new Date(NaN);
                        if (w.u(t))
                            return new Date;
                        if (t instanceof Date)
                            return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                            var n = t.match(d);
                            if (n) {
                                var r = n[2] - 1 || 0
                                  , o = (n[7] || "0").substring(0, 3);
                                return i ? new Date(Date.UTC(n[1], r, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)) : new Date(n[1],r,n[3] || 1,n[4] || 0,n[5] || 0,n[6] || 0,o)
                            }
                        }
                        return new Date(t)
                    }(e),
                    this.$x = e.x || {},
                    this.init()
                }
                ,
                p.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(),
                    this.$M = e.getMonth(),
                    this.$D = e.getDate(),
                    this.$W = e.getDay(),
                    this.$H = e.getHours(),
                    this.$m = e.getMinutes(),
                    this.$s = e.getSeconds(),
                    this.$ms = e.getMilliseconds()
                }
                ,
                p.$utils = function() {
                    return w
                }
                ,
                p.isValid = function() {
                    return !(this.$d.toString() === h)
                }
                ,
                p.isSame = function(e, t) {
                    var i = b(e);
                    return this.startOf(t) <= i && i <= this.endOf(t)
                }
                ,
                p.isAfter = function(e, t) {
                    return b(e) < this.startOf(t)
                }
                ,
                p.isBefore = function(e, t) {
                    return this.endOf(t) < b(e)
                }
                ,
                p.$g = function(e, t, i) {
                    return w.u(e) ? this[t] : this.set(i, e)
                }
                ,
                p.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                p.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                p.startOf = function(e, a) {
                    var h = this
                      , d = !!w.u(a) || a
                      , l = w.p(e)
                      , f = function(e, t) {
                        var i = w.w(h.$u ? Date.UTC(h.$y, t, e) : new Date(h.$y,t,e), h);
                        return d ? i : i.endOf(r)
                    }
                      , p = function(e, t) {
                        return w.w(h.toDate()[e].apply(h.toDate("s"), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), h)
                    }
                      , _ = this.$W
                      , g = this.$M
                      , m = this.$D
                      , v = "set" + (this.$u ? "UTC" : "");
                    switch (l) {
                    case c:
                        return d ? f(1, 0) : f(31, 11);
                    case s:
                        return d ? f(1, g) : f(0, g + 1);
                    case o:
                        var y = this.$locale().weekStart || 0
                          , b = (_ < y ? _ + 7 : _) - y;
                        return f(d ? m - b : m + (6 - b), g);
                    case r:
                    case u:
                        return p(v + "Hours", 0);
                    case n:
                        return p(v + "Minutes", 1);
                    case i:
                        return p(v + "Seconds", 2);
                    case t:
                        return p(v + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                p.endOf = function(e) {
                    return this.startOf(e, !1)
                }
                ,
                p.$set = function(o, a) {
                    var h, d = w.p(o), l = "set" + (this.$u ? "UTC" : ""), f = (h = {},
                    h[r] = l + "Date",
                    h[u] = l + "Date",
                    h[s] = l + "Month",
                    h[c] = l + "FullYear",
                    h[n] = l + "Hours",
                    h[i] = l + "Minutes",
                    h[t] = l + "Seconds",
                    h[e] = l + "Milliseconds",
                    h)[d], p = d === r ? this.$D + (a - this.$W) : a;
                    if (d === s || d === c) {
                        var _ = this.clone().set(u, 1);
                        _.$d[f](p),
                        _.init(),
                        this.$d = _.set(u, Math.min(this.$D, _.daysInMonth())).$d
                    } else
                        f && this.$d[f](p);
                    return this.init(),
                    this
                }
                ,
                p.set = function(e, t) {
                    return this.clone().$set(e, t)
                }
                ,
                p.get = function(e) {
                    return this[w.p(e)]()
                }
                ,
                p.add = function(e, a) {
                    var u, h = this;
                    e = Number(e);
                    var d = w.p(a)
                      , l = function(t) {
                        var i = b(h);
                        return w.w(i.date(i.date() + Math.round(t * e)), h)
                    };
                    if (d === s)
                        return this.set(s, this.$M + e);
                    if (d === c)
                        return this.set(c, this.$y + e);
                    if (d === r)
                        return l(1);
                    if (d === o)
                        return l(7);
                    var f = (u = {},
                    u[i] = 6e4,
                    u[n] = 36e5,
                    u[t] = 1e3,
                    u)[d] || 1
                      , p = this.$d.getTime() + e * f;
                    return w.w(p, this)
                }
                ,
                p.subtract = function(e, t) {
                    return this.add(-1 * e, t)
                }
                ,
                p.format = function(e) {
                    var t = this
                      , i = this.$locale();
                    if (!this.isValid())
                        return i.invalidDate || h;
                    var n = e || "YYYY-MM-DDTHH:mm:ssZ"
                      , r = w.z(this)
                      , o = this.$H
                      , s = this.$m
                      , a = this.$M
                      , c = i.weekdays
                      , u = i.months
                      , d = function(e, i, r, o) {
                        return e && (e[i] || e(t, n)) || r[i].substr(0, o)
                    }
                      , f = function(e) {
                        return w.s(o % 12 || 12, e, "0")
                    }
                      , p = i.meridiem || function(e, t, i) {
                        var n = e < 12 ? "AM" : "PM";
                        return i ? n.toLowerCase() : n
                    }
                      , _ = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: a + 1,
                        MM: w.s(a + 1, 2, "0"),
                        MMM: d(i.monthsShort, a, u, 3),
                        MMMM: d(u, a),
                        D: this.$D,
                        DD: w.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: d(i.weekdaysMin, this.$W, c, 2),
                        ddd: d(i.weekdaysShort, this.$W, c, 3),
                        dddd: c[this.$W],
                        H: String(o),
                        HH: w.s(o, 2, "0"),
                        h: f(1),
                        hh: f(2),
                        a: p(o, s, !0),
                        A: p(o, s, !1),
                        m: String(s),
                        mm: w.s(s, 2, "0"),
                        s: String(this.$s),
                        ss: w.s(this.$s, 2, "0"),
                        SSS: w.s(this.$ms, 3, "0"),
                        Z: r
                    };
                    return n.replace(l, function(e, t) {
                        return t || _[e] || r.replace(":", "")
                    })
                }
                ,
                p.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                p.diff = function(e, u, h) {
                    var d, l = w.p(u), f = b(e), p = 6e4 * (f.utcOffset() - this.utcOffset()), _ = this - f, g = w.m(this, f);
                    return g = (d = {},
                    d[c] = g / 12,
                    d[s] = g,
                    d[a] = g / 3,
                    d[o] = (_ - p) / 6048e5,
                    d[r] = (_ - p) / 864e5,
                    d[n] = _ / 36e5,
                    d[i] = _ / 6e4,
                    d[t] = _ / 1e3,
                    d)[l] || _,
                    h ? g : w.a(g)
                }
                ,
                p.daysInMonth = function() {
                    return this.endOf(s).$D
                }
                ,
                p.$locale = function() {
                    return m[this.$L]
                }
                ,
                p.locale = function(e, t) {
                    if (!e)
                        return this.$L;
                    var i = this.clone()
                      , n = y(e, t, !0);
                    return n && (i.$L = n),
                    i
                }
                ,
                p.clone = function() {
                    return w.w(this.$d, this)
                }
                ,
                p.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                p.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                p.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                p.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                f
            }()
              , k = z.prototype;
            return b.prototype = k,
            [["$ms", e], ["$s", t], ["$m", i], ["$H", n], ["$W", r], ["$M", s], ["$y", c], ["$D", u]].forEach(function(e) {
                k[e[1]] = function(t) {
                    return this.$g(t, e[0], e[1])
                }
            }),
            b.extend = function(e, t) {
                return e.$i || (e(t, z, b),
                e.$i = !0),
                b
            }
            ,
            b.locale = y,
            b.isDayjs = v,
            b.unix = function(e) {
                return b(1e3 * e)
            }
            ,
            b.en = m[g],
            b.Ls = m,
            b.p = {},
            b
        }()
    })
      , duration = createCommonjsModule(function(e, t) {
        var i, n, r, o, s, a, c, u, h, d, l, f, p, _, g, m, v;
        e.exports = (s = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
        h = {
            years: a = 31536e6,
            months: c = 2592e6,
            days: o = 864e5,
            hours: r = 36e5,
            minutes: 6e4,
            seconds: 1e3,
            milliseconds: 1,
            weeks: 6048e5
        },
        d = function(e) {
            return e instanceof v
        }
        ,
        l = function(e, t, i) {
            return new v(e,i,t.$l)
        }
        ,
        f = function(e) {
            return n.p(e) + "s"
        }
        ,
        p = function(e) {
            return e < 0
        }
        ,
        _ = function(e) {
            return p(e) ? Math.ceil(e) : Math.floor(e)
        }
        ,
        g = function(e) {
            return Math.abs(e)
        }
        ,
        m = function(e, t) {
            return e ? p(e) ? {
                negative: !0,
                format: "" + g(e) + t
            } : {
                negative: !1,
                format: "" + e + t
            } : {
                negative: !1,
                format: ""
            }
        }
        ,
        v = function() {
            function e(e, t, i) {
                var n = this;
                if (this.$d = {},
                this.$l = i,
                void 0 === e && (this.$ms = 0,
                this.parseFromMilliseconds()),
                t)
                    return l(e * h[f(t)], this);
                if ("number" == typeof e)
                    return this.$ms = e,
                    this.parseFromMilliseconds(),
                    this;
                if ("object" == typeof e)
                    return Object.keys(e).forEach(function(t) {
                        n.$d[f(t)] = e[t]
                    }),
                    this.calMilliseconds(),
                    this;
                if ("string" == typeof e) {
                    var r = e.match(u);
                    if (r) {
                        var o = r.slice(2).map(function(e) {
                            return Number(e)
                        });
                        return this.$d.years = o[0],
                        this.$d.months = o[1],
                        this.$d.weeks = o[2],
                        this.$d.days = o[3],
                        this.$d.hours = o[4],
                        this.$d.minutes = o[5],
                        this.$d.seconds = o[6],
                        this.calMilliseconds(),
                        this
                    }
                }
                return this
            }
            var t = e.prototype;
            return t.calMilliseconds = function() {
                var e = this;
                this.$ms = Object.keys(this.$d).reduce(function(t, i) {
                    return t + (e.$d[i] || 0) * h[i]
                }, 0)
            }
            ,
            t.parseFromMilliseconds = function() {
                var e = this.$ms;
                this.$d.years = _(e / a),
                e %= a,
                this.$d.months = _(e / c),
                e %= c,
                this.$d.days = _(e / o),
                e %= o,
                this.$d.hours = _(e / r),
                e %= r,
                this.$d.minutes = _(e / 6e4),
                e %= 6e4,
                this.$d.seconds = _(e / 1e3),
                e %= 1e3,
                this.$d.milliseconds = e
            }
            ,
            t.toISOString = function() {
                var e = m(this.$d.years, "Y")
                  , t = m(this.$d.months, "M")
                  , i = +this.$d.days || 0;
                this.$d.weeks && (i += 7 * this.$d.weeks);
                var n = m(i, "D")
                  , r = m(this.$d.hours, "H")
                  , o = m(this.$d.minutes, "M")
                  , s = this.$d.seconds || 0;
                this.$d.milliseconds && (s += this.$d.milliseconds / 1e3);
                var a = m(s, "S")
                  , c = e.negative || t.negative || n.negative || r.negative || o.negative || a.negative
                  , u = r.format || o.format || a.format ? "T" : ""
                  , h = (c ? "-" : "") + "P" + e.format + t.format + n.format + u + r.format + o.format + a.format;
                return "P" === h || "-P" === h ? "P0D" : h
            }
            ,
            t.toJSON = function() {
                return this.toISOString()
            }
            ,
            t.format = function(e) {
                var t = e || "YYYY-MM-DDTHH:mm:ss"
                  , i = {
                    Y: this.$d.years,
                    YY: n.s(this.$d.years, 2, "0"),
                    YYYY: n.s(this.$d.years, 4, "0"),
                    M: this.$d.months,
                    MM: n.s(this.$d.months, 2, "0"),
                    D: this.$d.days,
                    DD: n.s(this.$d.days, 2, "0"),
                    H: this.$d.hours,
                    HH: n.s(this.$d.hours, 2, "0"),
                    m: this.$d.minutes,
                    mm: n.s(this.$d.minutes, 2, "0"),
                    s: this.$d.seconds,
                    ss: n.s(this.$d.seconds, 2, "0"),
                    SSS: n.s(this.$d.milliseconds, 3, "0")
                };
                return t.replace(s, function(e, t) {
                    return t || String(i[e])
                })
            }
            ,
            t.as = function(e) {
                return this.$ms / h[f(e)]
            }
            ,
            t.get = function(e) {
                var t = this.$ms
                  , i = f(e);
                return "milliseconds" === i ? t %= 1e3 : t = "weeks" === i ? _(t / h[i]) : this.$d[i],
                0 === t ? 0 : t
            }
            ,
            t.add = function(e, t, i) {
                var n;
                return n = t ? e * h[f(t)] : d(e) ? e.$ms : l(e, this).$ms,
                l(this.$ms + n * (i ? -1 : 1), this)
            }
            ,
            t.subtract = function(e, t) {
                return this.add(e, t, !0)
            }
            ,
            t.locale = function(e) {
                var t = this.clone();
                return t.$l = e,
                t
            }
            ,
            t.clone = function() {
                return l(this.$ms, this)
            }
            ,
            t.humanize = function(e) {
                return i().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
            }
            ,
            t.milliseconds = function() {
                return this.get("milliseconds")
            }
            ,
            t.asMilliseconds = function() {
                return this.as("milliseconds")
            }
            ,
            t.seconds = function() {
                return this.get("seconds")
            }
            ,
            t.asSeconds = function() {
                return this.as("seconds")
            }
            ,
            t.minutes = function() {
                return this.get("minutes")
            }
            ,
            t.asMinutes = function() {
                return this.as("minutes")
            }
            ,
            t.hours = function() {
                return this.get("hours")
            }
            ,
            t.asHours = function() {
                return this.as("hours")
            }
            ,
            t.days = function() {
                return this.get("days")
            }
            ,
            t.asDays = function() {
                return this.as("days")
            }
            ,
            t.weeks = function() {
                return this.get("weeks")
            }
            ,
            t.asWeeks = function() {
                return this.as("weeks")
            }
            ,
            t.months = function() {
                return this.get("months")
            }
            ,
            t.asMonths = function() {
                return this.as("months")
            }
            ,
            t.years = function() {
                return this.get("years")
            }
            ,
            t.asYears = function() {
                return this.as("years")
            }
            ,
            e
        }(),
        function(e, t, r) {
            i = r,
            n = r().$utils(),
            r.duration = function(e, t) {
                var i = r.locale();
                return l(e, {
                    $l: i
                }, t)
            }
            ,
            r.isDuration = d;
            var o = t.prototype.add
              , s = t.prototype.subtract;
            t.prototype.add = function(e, t) {
                return d(e) && (e = e.asMilliseconds()),
                o.bind(this)(e, t)
            }
            ,
            t.prototype.subtract = function(e, t) {
                return d(e) && (e = e.asMilliseconds()),
                s.bind(this)(e, t)
            }
        }
        )
    });
    dayjs_min.extend(duration);
    var ignoreList = ["__cep_sdk_onboard", "__cep_trigger_sdk", "_be_active"]
      , moreOP = ["and", "or", "not"]
      , CEP_URL = "/service/2/cep_settings/"
      , CepRule = function() {
        function CepRule(e, t, i) {
            this.support = !0,
            this.currentPlan = 1,
            this.shouldSendEvent = !1,
            this.staing = !1,
            this.test = !1,
            this.cepReady = !1,
            this.eventCache = [],
            this.storage = new Storage(!1),
            this.config = e;
            var n = e.channel_domain || decodeUrl(LOG_URL[e.channel || "cn"]);
            this.url = e.cep_url ? "" + e.cep_url : "" + n + CEP_URL,
            this.reportUrl = "" + n + REPORT_URL,
            this.key = "__tea_cep_plan_" + this.config.app_id,
            this.quotasKey = "__tea_cep_plan_quotas_" + this.config.app_id,
            this.configManager = t,
            this.hook = i,
            this.isWait = !1,
            this.eventCache = [],
            this.test = t.staging
        }
        return CepRule.prototype.init = function() {
            var e = this
              , t = !0
              , i = 0
              , n = 0
              , r = 0
              , o = !1
              , s = this.storage.getItem(this.key) || {};
            if (s && Object.keys(s).length && (o = !0,
            i = s.last_update_time,
            r = s.fetch_interval,
            n = s.config_version || 0,
            t = Date.now() - i > 1e3 * r),
            t) {
                var a = this.configManager.get()
                  , c = a.header
                  , u = a.user;
                xhr(this.url, {
                    header: c,
                    user: u,
                    local_time: Date.now(),
                    config_version: n
                }, function(t) {
                    t && 0 === t.code ? (s.fetch_interval = t.fetch_interval,
                    s.data = t.data,
                    s.last_update_time = Date.now(),
                    s.config_version = t.config_version,
                    e.clearQuotas(),
                    e.initState(t.data),
                    e.storage.setItem(e.key, s),
                    t.data.forEach(function(t) {
                        e.event("__cep_sdk_onboard", t.plan_id)
                    })) : 304 !== t.code && 400 !== t.code || !o ? console.log("code: " + t.code + ", request error，please try leater") : (console.log("code: " + t.code + ", use old rules~"),
                    s.last_update_time = Date.now(),
                    e.storage.setItem(e.key, s),
                    e.initState(s.data))
                }, function() {
                    o ? (e.planData = s.data,
                    e.initState(s.data)) : (e.support = !1,
                    console.log("request error，please try leater"))
                })
            } else
                s.last_update_time = Date.now(),
                this.storage.setItem(this.key, s),
                console.log("rule still work, use cache"),
                this.initState(s.data)
        }
        ,
        CepRule.prototype.initState = function(e) {
            var t = this;
            e && e.length && (this.stateArray = new Map,
            this.waitArray = new Map,
            this.planData = e,
            e.forEach(function(e) {
                var i = new Map;
                if (e.pattern && e.pattern.events) {
                    var n = 1 === e.pattern.events.length;
                    e.pattern.events.forEach(function(e) {
                        i.set(e.id, {
                            id: e.id,
                            isMatch: !1,
                            event: null,
                            after: e.after || null,
                            connection: e.connection || null,
                            window: e.window || null,
                            matchTime: 0,
                            initTime: Date.now(),
                            singleRule: n
                        })
                    }),
                    t.stateArray.set(e.plan_id, {
                        patternState: i,
                        singleRule: n,
                        pattern: {
                            aid: e.aid,
                            biz_id: e.biz_id,
                            end_time: e.end_time,
                            start_time: e.start_time,
                            web_sdk_version: e.web_sdk_version,
                            stage: e.stage
                        },
                        quotas: e.quotas
                    })
                }
            }),
            this.cepReady = !0,
            this.dealCache(),
            console.log(this.stateArray))
        }
        ,
        CepRule.prototype.check = function(e) {
            var t = Date.now();
            return Date.now() > 1e3 * e.end_time ? (console.log("event rules:" + e.plan_id + " is over"),
            !1) : t < 1e3 * e.start_time || t > 1e3 * e.end_time ? (console.log("rule:" + e.plan_id + " time error"),
            !1) : (this.staing = "testing" === e.staing,
            !(SDK_VERSION < e.web_sdk_version) || (this.support = !1,
            console.log("you sdk version is old，please update to " + e.web_sdk_version + " at least"),
            !1))
        }
        ,
        CepRule.prototype.dealCache = function() {
            var e = this;
            if (this.eventCache.length) {
                var t = 1;
                this.eventCache.forEach(function(i) {
                    e.matchEvent(i),
                    t++
                }),
                t === this.eventCache.length && (this.eventCache = [])
            }
        }
        ,
        CepRule.prototype.matchEvent = function(e) {
            if (this.support && (!this.staing || this.test) && e && e.length)
                try {
                    if (!this.cepReady)
                        return void this.eventCache.push(e);
                    var t = e[0]
                      , i = t.header
                      , n = t.user
                      , r = t.events;
                    r.length && r.reverse();
                    for (var o = 0; o < r.length; o++) {
                        var s = r[o].event;
                        if (-1 !== ignoreList.indexOf(s))
                            return !1;
                        this.matchRule(i, n, r[o])
                    }
                } catch (e) {
                    return void console.log(e.message)
                }
        }
        ,
        CepRule.prototype.matchRule = function(e, t, i) {
            try {
                for (var n = 0; n < this.planData.length; n++) {
                    var r = this.planData[n]
                      , o = r.plan_id;
                    if (this.check(r) && (this.checkQuotas(o) && r.pattern && r.pattern.events))
                        for (var s = r.pattern.events, a = 0; a < s.length; a++) {
                            if (this.rule(e, t, i, s[a].condition)) {
                                var c = this.stateArray.get(o).patternState
                                  , u = c.get(s[a].id);
                                if (this.stateArray.get(o).singleRule) {
                                    this.changeStatus(o, s[a].id, i),
                                    this.publish([i], o, s[a].id);
                                    break
                                }
                                if (!u.isMatch) {
                                    u.after && c.get(u.after).isMatch ? this.changeStatus(o, s[a].id, i) : u.after || this.changeStatus(o, s[a].id, i);
                                    break
                                }
                            }
                        }
                }
                this.statusCheck()
            } catch (e) {
                return void console.log(e.message)
            }
        }
        ,
        CepRule.prototype.changeStatus = function(e, t, i) {
            var n = this.stateArray.get(e)
              , r = n.patternState.get(t);
            r.isMatch = !0,
            r.event = i,
            r.matchTime = i.local_time_ms || Date.now(),
            n.patternState.set(t, r),
            this.stateArray.set(e, n)
        }
        ,
        CepRule.prototype.statusCheck = function() {
            var e, t, i, n;
            try {
                for (var r = __values(this.stateArray), o = r.next(); !o.done; o = r.next()) {
                    var s = __read(o.value, 2)
                      , a = s[0]
                      , c = s[1]
                      , u = c.patternState;
                    if (c.isSingle)
                        break;
                    try {
                        for (var h = __values(u), d = h.next(); !d.done; d = h.next()) {
                            var l = __read(d.value, 2)
                              , f = l[0]
                              , p = l[1];
                            if (p.after && (!p.after || u.get(p.after).isMatch)) {
                                if ("NOT_FOLLOWED_BY" === p.connection) {
                                    p.isMatch ? this.reset(a, f) : Date.now() - u.get(p.after).matchTime > p.window ? this.publish([u.get(p.after).event, p.event], a, f) : this.startWait(a, f, p);
                                    break
                                }
                                p.isMatch ? p.matchTime - u.get(p.after).matchTime <= p.window ? this.publish([u.get(p.after).event, p.event], a, f) : this.reset(a, f) : Date.now() - u.get(p.after).matchTime > p.window ? this.reset(a, f) : this.startWait(a, f, p);
                                break
                            }
                        }
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            d && !d.done && (n = h.return) && n.call(h)
                        } finally {
                            if (i)
                                throw i.error
                        }
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (t = r.return) && t.call(r)
                } finally {
                    if (e)
                        throw e.error
                }
            }
        }
        ,
        CepRule.prototype.startWait = function(e, t, i) {
            var n = this;
            try {
                this.waitArray.get(e) || this.waitArray.set(e, new Map);
                var r = this.waitArray.get(e);
                if (!r.get(t)) {
                    var o = setTimeout(function() {
                        var r = n.stateArray.get(e).patternState
                          , o = r.get(t);
                        if ("NOT_FOLLOWED_BY" === o.connection)
                            !o.isMatch && r.get(o.after).isMatch || o.matchTime - r.get(o.after).matchTime > i.window ? ((s = n.waitArray.get(e).get(t)).triggerWait = !0,
                            n.waitArray.set(e, n.waitArray.get(e).set(t, s)),
                            n.publish([r.get(o.after).event], e, t)) : n.reset(e, t);
                        else if ("FOLLOWED_BY" === o.connection) {
                            var s;
                            if (o.isMatch && r.get(o.after).isMatch)
                                (s = n.waitArray.get(e).get(t)).triggerWait = !0,
                                n.waitArray.set(e, n.waitArray.get(e).set(t, s)),
                                n.publish([r.get(o.after).event], e, t);
                            else
                                n.reset(e, t)
                        }
                    }, i.window);
                    r.set(t, {
                        waitFn: o,
                        triggerWait: !1
                    }),
                    this.waitArray.set(e, r)
                }
            } catch (e) {
                console.log(e.message, e.stack)
            }
        }
        ,
        CepRule.prototype.rule = function(e, t, i, n) {
            var r = this;
            try {
                var o = i.event
                  , s = i.params;
                if (s = JSON.parse(s),
                -1 !== moreOP.indexOf(n.op)) {
                    if (n.conditions && n.conditions.length) {
                        var a = n.conditions
                          , c = 0
                          , u = new Map;
                        u.set(c, {
                            op: n.op,
                            result: void 0,
                            resultList: [],
                            resultKey: [],
                            resultLength: a.length
                        });
                        !function i(n, a) {
                            for (var h = 0; h < n.length; h++)
                                if (c++,
                                -1 !== moreOP.indexOf(n[h].op) && n[h].hasOwnProperty("conditions"))
                                    u.set(c, {
                                        op: n[h].op,
                                        result: void 0,
                                        fatherKey: a,
                                        resultList: [],
                                        resultKey: [],
                                        resultLength: n[h].conditions.length
                                    }),
                                    i(n[h].conditions, c);
                                else {
                                    var d = r.scope(n[h].key)
                                      , l = d.scope
                                      , f = d.key
                                      , p = d.key2
                                      , _ = l ? "header" === l ? p ? JSON.parse(e[p])[f] : e[f] : "user" === l ? t[f] : s[f] : o
                                      , g = r.calculate(n[h].op, _, n[h].value);
                                    u.set(c, {
                                        op: n[h].op,
                                        result: g,
                                        fatherKey: a
                                    })
                                }
                        }(a, c);
                        for (var h = u.get(0); void 0 === h.result || h.resultList.length < h.resultLength; )
                            u.forEach(function(e, t) {
                                if (void 0 !== e.result && void 0 !== e.fatherKey) {
                                    var i = u.get(e.fatherKey);
                                    i.resultList.length < i.resultLength && -1 === i.resultKey.indexOf(t) && (i.resultKey.push(t),
                                    i.resultList.push(e.result),
                                    u.set(e.fatherKey, i))
                                }
                            }),
                            u.forEach(function(e) {
                                e.resultList && e.resultList.length === e.resultLength && ("and" === e.op && (e.result = -1 === e.resultList.indexOf(!1)),
                                "or" === e.op && (e.result = -1 !== e.resultList.indexOf(!0)))
                            });
                        return u.get(0).result
                    }
                    return !1
                }
                var d = this.scope(n.key)
                  , l = d.scope
                  , f = d.key
                  , p = d.key2
                  , _ = l ? "header" === l ? p ? JSON.parse(e[p])[f] : e[f] : "user" === l ? t[f] : s[f] : o;
                return this.calculate(n.op, _, n.value)
            } catch (e) {
                return console.log(e.message),
                !1
            }
        }
        ,
        CepRule.prototype.publish = function(e, t, i) {
            try {
                var n = this.configManager.get().user
                  , r = {
                    biz_id: this.stateArray.get(t).pattern.biz_id,
                    plan_id: t,
                    uid: n.user_id || "",
                    did: n.device_id || "",
                    uuid: n.user_unique_id,
                    events: e,
                    extra: {
                        url: window.location.href
                    }
                };
                this.hook.emit("__cep_match", r),
                (window.opener || window.parent).postMessage({
                    type: "__cep_match",
                    data: r
                }, "*"),
                this.event("__cep_trigger_sdk", t),
                this.addQuotas(t),
                this.reset(t, i),
                console.log(this.stateArray)
            } catch (e) {
                return void console.log(e.message)
            }
        }
        ,
        CepRule.prototype.addQuotas = function(e) {
            var t = this.stateArray.get(e).quotas;
            if (t && t.length) {
                var i = this.storage.getItem(this.quotasKey) || {};
                i[e] || (i[e] = {
                    value: 0,
                    lastTime: Date.now()
                });
                var n = i[e].value;
                0 === n && (i[e].lastTime = Date.now()),
                i[e].value = n + 1,
                this.storage.setItem(this.quotasKey, i)
            }
        }
        ,
        CepRule.prototype.checkQuotas = function(e) {
            var t = this.stateArray.get(e).quotas
              , i = this.storage.getItem(this.quotasKey) || {};
            if (i[e] || (i[e] = {
                value: 0,
                lastTime: Date.now()
            }),
            t && t.length) {
                var n = t[0].granularity
                  , r = t[0].value;
                if ("per_keyid" !== t[0].type)
                    return !0;
                var o = this.release(n);
                return "all" === o ? !(i[e].value >= r) || (console.log("plan:" + e + " limt"),
                !1) : Date.now() - i[e].lastTime >= o ? (i[e].value = 0,
                i[e].lastTime = Date.now(),
                this.storage.setItem(this.quotasKey, i),
                !0) : !(i[e].value >= r) || (console.log("plan:" + e + " limit"),
                !1)
            }
            return !0
        }
        ,
        CepRule.prototype.clearQuotas = function() {
            this.storage.setItem(this.quotasKey, null)
        }
        ,
        CepRule.prototype.release = function(e) {
            if ("all" === e)
                return e;
            var t = dayjs_min.duration(e);
            return t ? t.asMilliseconds() : "all"
        }
        ,
        CepRule.prototype.reset = function(e, t) {
            var i = this.stateArray.get(e);
            if (i.singleRule) {
                var n = i.patternState.get(t);
                n.isMatch = !1,
                n.event = null,
                n.matchTime = 0,
                n.initTime = Date.now(),
                i.patternState.set(t, n)
            } else
                i.patternState.forEach(function(e) {
                    e.isMatch = !1,
                    e.event = null,
                    e.matchTime = 0,
                    e.initTime = Date.now()
                });
            this.stateArray.set(e, i);
            var r = this.waitArray.get(e);
            r && r.get(t) && (clearTimeout(r.get(t).waitFn),
            r.delete(t))
        }
        ,
        CepRule.prototype.event = function(e, t) {
            try {
                var i = {
                    event: e,
                    params: JSON.stringify({
                        plan_id: t || "",
                        biz_id: this.stateArray.get(t).pattern.biz_id
                    }),
                    local_time_ms: Date.now()
                }
                  , n = this.configManager.get()
                  , r = n.header
                  , o = n.user;
                r.custom = JSON.stringify(r.custom);
                var s = {
                    events: [i],
                    user: o,
                    header: r
                };
                xhr(this.reportUrl, [s])
            } catch (e) {
                return void console.log(e.message)
            }
        }
        ,
        CepRule.prototype.scope = function(e) {
            var t = ""
              , i = "";
            if (e.indexOf(".") > -1) {
                var n = e.split(".");
                t = n[0],
                e = n[1],
                "header" === t && "custom" === e && (e = n[2],
                i = n[1])
            }
            return {
                scope: t,
                key: e,
                key2: i
            }
        }
        ,
        CepRule.prototype.calculate = function(op, paramA, paramB) {
            try {
                if ("=" === op)
                    return paramA === paramB;
                if (-1 !== ["=", "<", ">", ">=", "<=", "!="].indexOf(op))
                    return eval("" + paramA + op + paramB);
                if (-1 !== ["in", "contains"].indexOf(op))
                    return -1 !== paramB.indexOf(paramA);
                if (-1 !== ["is not null", "is null"].indexOf(op))
                    return "is null" === op ? null == paramA : null != paramA;
                if (-1 !== ["startswith", "endswith"].indexOf(op)) {
                    if ("startswith" === op)
                        return 0 === paramA.indexOf(paramB);
                    var start = paramA.length - paramB.length
                      , str = paramA.substr(start, paramB.length);
                    return str === paramB
                }
            } catch (e) {
                return console.log(e.message),
                !1
            }
        }
        ,
        CepRule
    }();
    function isNeedElement(e, t) {
        if (void 0 === t && (t = "list"),
        !e)
            return !1;
        if (t && "list" === t) {
            if (["LI", "TR", "DL"].includes(e.nodeName))
                return !0;
            if (e.dataset && e.dataset.hasOwnProperty("teaIdx"))
                return !0;
            if (e.hasAttribute && e.hasAttribute("data-tea-idx"))
                return !0
        } else {
            if (["A", "BUTTON"].includes(e.nodeName))
                return !0;
            if (e.dataset && e.dataset.hasOwnProperty("teaContainer"))
                return !0;
            if (e.hasAttribute && e.hasAttribute("data-tea-container"))
                return !0
        }
        return !1
    }
    function getContainer(e) {
        for (var t = e; t && !isNeedElement(t, "container"); ) {
            if ("HTML" === t.nodeName || "BODY" === t.nodeName)
                return e;
            t = t.parentElement
        }
        return t || e
    }
    function getNodeText(e) {
        var t = "";
        return 3 === e.nodeType ? t = e.textContent.trim() : e.dataset && e.dataset.hasOwnProperty("teaTitle") ? t = e.getAttribute("data-tea-title") : e.hasAttribute("ata-tea-title") ? t = e.getAttribute("data-tea-title") : e.hasAttribute("title") ? t = e.getAttribute("title") : "INPUT" === e.nodeName && ["button", "submit"].includes(e.getAttribute("type")) ? t = e.getAttribute("value") : "IMG" === e.nodeName && e.getAttribute("alt") && (t = e.getAttribute("alt")),
        t.slice(0, 200)
    }
    function getText(e) {
        var t = getContainer(e)
          , i = [];
        return function e(t) {
            var n = getNodeText(t);
            if (n && -1 === i.indexOf(n) && i.push(n),
            t.childNodes.length > 0)
                for (var r = t.childNodes, o = 0; o < r.length; o++)
                    8 !== r[o].nodeType && e(r[o])
        }(t),
        i
    }
    function getTextSingle(e) {
        var t = getContainer(e)
          , i = "";
        return function e(t) {
            var n = getNodeText(t);
            if (n && (i += n),
            t.childNodes.length > 0)
                for (var r = t.childNodes, o = 0; o < r.length; o++)
                    3 === r[o].nodeType && e(r[o])
        }(t),
        i
    }
    function ignore(e) {
        for (var t = e; t && t.parentNode; ) {
            if (t.hasAttribute("data-tea-ignore"))
                return !0;
            if ("HTML" === t.nodeName || "body" === t.nodeName)
                return !1;
            t = t.parentNode
        }
        return !1
    }
    var hasAttribute = function(e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0
    }
      , hasAttributes = function(e, t) {
        if ("string" == typeof t)
            return hasAttribute(e, t);
        if (Array.isArray(t)) {
            for (var i = !1, n = 0; n < t.length; n++) {
                if (hasAttribute(e, t[n])) {
                    i = !0;
                    break
                }
            }
            return i
        }
    }
      , getAttributes = function(e, t) {
        var i = {};
        if ("string" == typeof t)
            hasAttribute(e, t) && (i.attrs = e.getAttribute(t));
        else if (Array.isArray(t))
            for (var n = 0; n < t.length; n++) {
                hasAttribute(e, t[n]) && (i[t[n]] = e.getAttribute(t[n]))
            }
        return i
    }
      , isAttrFilter = function(e, t) {
        return !!hasAttributes(e, t)
    }
      , elementLevel = function(e) {
        if (e.children.length) {
            var t = e.children;
            return ![].slice.call(t).some(function(e) {
                return e.children.length > 0
            })
        }
        return !0
    }
      , isSVG = function(e) {
        if ("svg" === e.tagName.toLowerCase())
            return !0;
        for (var t = e.parentElement, i = !1; t; )
            "svg" === t.tagName.toLowerCase() ? (t = null,
            i = !0) : t = t.parentElement;
        return i
    };
    function isTrack(e, t) {
        if (1 !== e.nodeType)
            return !1;
        if (!t.svg && isSVG(e))
            return !1;
        if (["HTML", "BODY"].includes(e.tagName.toUpperCase()))
            return !1;
        var i = e;
        return "none" !== i.style.display && (!!isNeedElement(i, "container") || (!(!t.track_attr || !isAttrFilter(i, t.track_attr)) || !!elementLevel(i)))
    }
    var Listener = function() {
        function e(e, t, i) {
            var n = this;
            this.clickEvent = function(e) {
                isTrack(e.target, n.options) && n.eventHandel({
                    eventType: "dom",
                    eventName: "click"
                }, e)
            }
            ,
            this.changeEvent = function(e) {
                n.eventHandel({
                    eventType: "dom",
                    eventName: "change"
                }, e)
            }
            ,
            this.submitEvent = function(e) {
                n.eventHandel({
                    eventType: "dom",
                    eventName: "submit"
                }, e)
            }
            ,
            this.getPageViewEvent = function(e, t) {
                t && "pushState" === t && n.eventHandel({
                    eventType: "dom",
                    eventName: "beat"
                }, __assign({
                    beat_type: 0
                }, e)),
                n.eventHandel({
                    eventType: "dom",
                    eventName: "page_view"
                }, e)
            }
            ,
            this.getPageLoadEvent = function(e) {
                n.eventHandel({
                    eventType: "dom",
                    eventName: "page_statistics"
                }, {
                    lcp: e
                })
            }
            ,
            this.config = t.getConfig().eventConfig,
            this.options = e,
            this.beatTime = e.beat,
            this.statistics = !1,
            this.route = i
        }
        return e.prototype.init = function(e) {
            this.eventHandel = e;
            var t = this.config.mode;
            this.addListener(t)
        }
        ,
        e.prototype.addListener = function(e) {
            var t = this;
            if ("proxy-capturing" === e && (this.config.click && window.document.addEventListener("click", this.clickEvent, !0),
            this.config.change && window.document.addEventListener("change", this.changeEvent, !0),
            this.config.submit && window.document.addEventListener("submit", this.submitEvent, !0),
            this.config.pv && this.route.init("autotrack", this.getPageViewEvent),
            this.config.beat)) {
                try {
                    "complete" === document.readyState ? this.beatEvent(this.beatTime) : window.addEventListener("load", function() {
                        t.beatEvent(t.beatTime)
                    });
                    var i = 0
                      , n = null;
                    window.addEventListener("scroll", function() {
                        clearTimeout(n),
                        n = setTimeout(r, 500),
                        i = document.documentElement.scrollTop || document.body.scrollTop
                    });
                    var r = function() {
                        (document.documentElement.scrollTop || document.body.scrollTop) == i && t.eventHandel({
                            eventType: "dom",
                            eventName: "beat"
                        }, {
                            beat_type: 1
                        })
                    }
                } catch (e) {}
                try {
                    var o = window.performance && window.performance.getEntriesByType("paint");
                    if (o && o.length)
                        new PerformanceObserver(function(e) {
                            var i = e.getEntries()
                              , n = i[i.length - 1]
                              , r = n.renderTime || n.loadTime;
                            t.statistics || (t.getPageLoadEvent(r),
                            t.statistics = !0)
                        }
                        ).observe({
                            entryTypes: ["largest-contentful-paint"]
                        }),
                        setTimeout(function() {
                            t.statistics || (t.getPageLoadEvent(o[0].startTime || 0),
                            t.statistics = !0)
                        }, 2e3);
                    else
                        this.getPageLoadEvent(0)
                } catch (e) {
                    this.getPageLoadEvent(0)
                }
            }
        }
        ,
        e.prototype.removeListener = function() {
            window.document.removeEventListener("click", this.clickEvent, !0),
            window.document.removeEventListener("change", this.changeEvent, !0),
            window.document.removeEventListener("submit", this.submitEvent, !0)
        }
        ,
        e.prototype.beatEvent = function(e) {
            var t = this;
            try {
                var i;
                this.eventHandel({
                    eventType: "dom",
                    eventName: "beat"
                }, {
                    beat_type: 3
                }),
                this.beatTime && (i = setInterval(function() {
                    t.eventHandel({
                        eventType: "dom",
                        eventName: "beat"
                    }, {
                        beat_type: 2
                    })
                }, e)),
                beforePageUnload(function() {
                    t.eventHandel({
                        eventType: "dom",
                        eventName: "beat",
                        eventSend: "becon"
                    }, {
                        beat_type: 0
                    }),
                    t.beatTime && clearInterval(i)
                })
            } catch (e) {}
        }
        ,
        e
    }()
      , defaultConfig = {
        eventConfig: {
            mode: "proxy-capturing",
            submit: !1,
            click: !0,
            change: !1,
            pv: !0,
            beat: !0,
            hashTag: !1,
            impr: !1
        },
        scoutConfig: {
            mode: "xpath"
        }
    }
      , Config = function() {
        function e(e) {
            this.config = e
        }
        return e.prototype.getConfig = function() {
            return this.config
        }
        ,
        e.prototype.setConfig = function(e) {
            return this.config = e
        }
        ,
        e
    }();
    function getPositionData(e) {
        if (e) {
            var t = e.getBoundingClientRect()
              , i = t.width
              , n = t.height;
            return {
                left: t.left,
                top: t.top,
                element_width: i,
                element_height: n
            }
        }
    }
    function getEventData(e, t) {
        void 0 === e && (e = {}),
        void 0 === t && (t = {});
        var i = e.clientX
          , n = e.clientY
          , r = t.left
          , o = t.top
          , s = i - r >= 0 ? i - r : 0
          , a = n - o >= 0 ? n - o : 0;
        return {
            touch_x: Math.floor(s),
            touch_y: Math.floor(a)
        }
    }
    function getXpath(e) {
        for (var t = []; null !== e.parentElement; )
            t.push(e),
            e = e.parentElement;
        var i = []
          , n = [];
        return t.forEach(function(e) {
            var t = getXpathIndex(e)
              , r = t.str
              , o = t.index;
            i.unshift(r),
            n.unshift(o)
        }),
        {
            element_path: "/" + i.join("/"),
            positions: n
        }
    }
    function getXpathIndex(e) {
        if (null === e)
            return {
                str: "",
                index: 0
            };
        var t = 0
          , i = e.parentElement;
        if (i)
            for (var n = i.children, r = 0; r < n.length && n[r] !== e; r++)
                n[r].nodeName === e.nodeName && t++;
        return {
            str: [e.nodeName.toLowerCase(), isNeedElement(e, "list") ? "[]" : ""].join(""),
            index: t
        }
    }
    function getElementData(e, t, i, n) {
        var r = {}
          , o = getPositionData(t)
          , s = getEventData(e, o)
          , a = o.element_width
          , c = o.element_height
          , u = s.touch_x
          , h = s.touch_y
          , d = getXpath(t)
          , l = d.element_path
          , f = d.positions
          , p = getText(t)
          , _ = window.performance.timing.navigationStart
          , g = Date.now() - _
          , m = f.map(function(e) {
            return "" + e
        })
          , v = null;
        if (window.TEAVisualEditor.getOriginXpath && (v = window.TEAVisualEditor.getOriginXpath({
            xpath: l,
            positions: m
        })),
        r.element_path = v && v.xpath || l,
        r.positions = v && v.positions || m,
        n && !n.text && (r.texts = p,
        r.element_title = getTextSingle(t)),
        r.element_id = t.getAttribute("id") || "",
        r.element_class_name = t.getAttribute("class") || "",
        r.element_type = t.nodeType,
        r.element_width = Math.floor(a),
        r.element_height = Math.floor(c),
        r.touch_x = u,
        r.touch_y = h,
        r.page_manual_key = "",
        r.elememt_manual_key = "",
        r.since_page_start_ms = g,
        r.page_start_ms = _,
        r.page_path = location.pathname,
        r.page_host = location.host,
        i.track_attr && isAttrFilter(t, i.track_attr)) {
            var y = getAttributes(t, i.track_attr);
            for (var b in y)
                r[b] = y[b]
        }
        var w = getContainer(t);
        return "A" === w.tagName && (r.href = w.getAttribute("href")),
        "IMG" === t.tagName && (r.src = t.getAttribute("src")),
        r
    }
    function getEventData$1(e, t, i, n, r) {
        return __assign({
            event: e
        }, getElementData(t, i, n, r), {
            is_html: 1,
            page_key: window.location.href,
            page_title: document.title
        })
    }
    function getExtraEventData(e, t) {
        try {
            if ("bav2b_change" === e)
                return t.hasAttribute("data-tea-track") ? {
                    value: t.value
                } : {}
        } catch (e) {
            return {}
        }
    }
    var EventHandle = function() {
        function e(e, t) {
            this.ignore = {
                text: !1
            },
            this.initConfig = e,
            this.options = t,
            this.eventName = t && "tea" === t.custom ? {
                click: "__bav_click",
                page: "__bav_page",
                beat: "__bav_beat",
                static: "__bav_page_statistics"
            } : {
                click: "bav2b_click",
                page: "bav2b_page",
                beat: "bav2b_beat",
                static: "bav2b_page_statistics"
            },
            t && !1 === t.text && (this.ignore.text = !0)
        }
        return e.prototype.handleEvent = function(e, t) {
            try {
                if (ignore(e.target))
                    return null;
                var i = "bav2b_click";
                switch (t) {
                case "click":
                    return getEventData$1(i = this.eventName.click, e, e.target, this.options, this.ignore);
                case "change":
                    return __assign({}, getEventData$1(i = "bav2b_change", e, e.target, this.options), getExtraEventData(i, e.target));
                case "submit":
                    return getEventData$1(i = "bav2b_submit", e, e.target, this.options)
                }
            } catch (e) {
                return console.error(e),
                null
            }
        }
        ,
        e.prototype.handleViewEvent = function(e) {
            e.event = this.eventName.page,
            e.page_total_width = window.innerWidth,
            e.page_total_height = window.innerHeight;
            try {
                var t = window.sessionStorage.getItem("_tea_cache_duration");
                if (t) {
                    var i = JSON.parse(t);
                    e.refer_page_duration_ms = i ? i.duration : "",
                    e.refer_page_title = i ? i.page_title : ""
                } else
                    e.refer_page_duration_ms = "",
                    e.refer_page_title = "";
                e.scroll_width = document.documentElement.scrollLeft ? document.documentElement.scrollLeft + window.innerWidth : window.innerWidth,
                e.scroll_height = document.documentElement.scrollTop ? document.documentElement.scrollTop + window.innerHeight : window.innerHeight,
                e.page_start_ms = window.performance.timing.navigationStart
            } catch (e) {
                console.log("page event error " + JSON.stringify(e))
            }
            return e
        }
        ,
        e.prototype.handleStatisticsEvent = function(e) {
            var t = {};
            t.event = this.eventName.static,
            t.is_html = 1,
            t.page_key = location.href,
            t.refer_page_key = document.referrer || "",
            t.page_title = document.title,
            t.page_manual_key = "",
            t.refer_page_manual_key = "";
            try {
                var i = e.lcp
                  , n = window.performance.timing
                  , r = n.loadEventEnd - n.navigationStart;
                t.page_init_cost_ms = parseInt(i || (r > 0 ? r : 0)),
                t.page_start_ms = n.navigationStart
            } catch (e) {
                console.log("page_statistics event error " + JSON.stringify(e))
            }
            return t
        }
        ,
        e.prototype.handleBeadtEvent = function(e) {
            e.event = this.eventName.beat,
            e.page_key = window.location.href,
            e.is_html = 1,
            e.page_title = document.title,
            e.page_manual_key = this.initConfig.autotrack.page_manual_key || "";
            try {
                e.page_viewport_width = window.innerWidth,
                e.page_viewport_height = window.innerHeight,
                e.page_viewport_position = document.documentElement.scrollTop,
                e.page_total_width = document.documentElement.scrollWidth,
                e.page_total_height = document.documentElement.scrollHeight,
                e.scroll_width = document.documentElement.scrollLeft + window.innerWidth,
                e.scroll_height = document.documentElement.scrollTop + window.innerHeight,
                e.since_page_start_ms = Date.now() - window.performance.timing.navigationStart,
                e.page_start_ms = window.performance.timing.navigationStart
            } catch (e) {
                console.log("beat event error " + JSON.stringify(e))
            }
            return e
        }
        ,
        e
    }()
      , Request = function() {
        function e(e, t) {
            this.logFunc = e,
            this.logFuncBecon = t,
            this.eventNameList = ["report_click_event", "report_change_event", "report_submit_event", "report_exposure_event", "report_page_view_event", "report_page_statistics_event", "report_beat_event"]
        }
        return e.prototype.send = function(e, t) {
            e.eventName;
            var i = e.eventSend
              , n = t.event;
            delete t.event,
            i && "becon" === i ? this.logFuncBecon(n, t, "autotrack") : this.logFunc(n, t, "autotrack")
        }
        ,
        e.prototype.get = function(e, t) {
            var i = Object.assign({
                headers: {
                    "content-type": "application/json"
                },
                method: "GET"
            }, t);
            fetch(e, i)
        }
        ,
        e.prototype.post = function(e, t) {
            var i = Object.assign({
                headers: {
                    "content-type": "application/json"
                },
                method: "POST"
            }, t);
            fetch(e, i)
        }
        ,
        e
    }()
      , COOKIE_KEY = "_TEA_VE_OPEN"
      , COOKIE_KEY_HOST = "_TEA_VE_APIHOST"
      , COOKIE_LANG = "lang"
      , COOKIE_EDIT_VERISON = "_VISUAL_EDITOR_V"
      , COOKIE_EDIT_URL = "_VISUAL_EDITOR_U";
    function checkSession() {
        return "1" === js_cookie.get(COOKIE_KEY)
    }
    function checkSessionHost() {
        var e = js_cookie.get(COOKIE_KEY_HOST);
        try {
            e = JSON.parse(e)
        } catch (e) {}
        return e
    }
    function checkEditUrl() {
        return js_cookie.get(COOKIE_EDIT_URL)
    }
    function setSession() {
        try {
            var e = window.TEAVisualEditor.lang = window.TEAVisualEditor.lang || js_cookie.get(COOKIE_LANG)
              , t = window.TEAVisualEditor.__editor_ajax_domain = window.TEAVisualEditor.__editor_ajax_domain || js_cookie.get(COOKIE_KEY_HOST)
              , i = window.TEAVisualEditor.__editor_verison = window.TEAVisualEditor.__editor_verison || js_cookie.get(COOKIE_EDIT_VERISON)
              , n = window.TEAVisualEditor.__editor_url = window.TEAVisualEditor.__editor_url || js_cookie.get(COOKIE_EDIT_URL)
              , r = +new Date
              , o = new Date(r + 18e5);
            js_cookie.set(COOKIE_KEY, "1", {
                expires: o
            }),
            js_cookie.set(COOKIE_KEY_HOST, t, {
                expires: o
            }),
            js_cookie.set(COOKIE_EDIT_URL, n, {
                expires: o
            }),
            js_cookie.set(COOKIE_LANG, e, {
                expires: o
            }),
            js_cookie.set(COOKIE_EDIT_VERISON, i || "", {
                expires: o
            })
        } catch (e) {
            console.log("set cookie err")
        }
    }
    window.TEAVisualEditor = window.TEAVisualEditor || {};
    var EDITOR_URL = ""
      , EDITOR_URL_OLD = window.TEAVisualEditor.__editor_url || decodeUrl(EDITOR_URL_OLD_ASC);
    EDITOR_URL_OLD = EDITOR_URL_OLD + "?query=" + Date.now();
    var EDITOR_URL_NEW = decodeUrl(EDITOR_URL_NEW_ASC) + "?query=" + Date.now()
      , isLoaded$1 = !1;
    function loadEditorScript$1(e) {
        var t = e.event
          , i = e.editorUrl
          , n = e.autoTrackInstance;
        e.fromSession;
        isLoaded$1 || (isLoaded$1 = !0,
        loadScript(i, function() {
            dispatchMsg(t, "editorScriptloadSuccess"),
            n.destroy()
        }, function() {
            t && dispatchMsg(t, "editorScriptloadError"),
            isLoaded$1 = !1
        }))
    }
    function readyToLoadEditor$1(e, t) {
        window.TEAVisualEditor.appId = t.app_id;
        var i = t.channel_domain
          , n = "";
        if (addAllowdOrigin(["*"]),
        i) {
            var r = void 0
              , o = "";
            try {
                var s = window.performance.getEntriesByType("resource");
                if (s && s.length && (s.forEach(function(e) {
                    "script" === e.initiatorType && e.name && -1 !== e.name.indexOf("collect") && (o = e.name)
                }),
                o || document.currentScript && (o = document.currentScript.src),
                o && (r = o.split("/")) && r.length)) {
                    n = "https:/";
                    for (var a = 2; a < r.length && a !== r.length - 1; a++)
                        n = n + "/" + r[a]
                }
            } catch (e) {}
        }
        if (init(t, SDK_VERSION),
        checkSession()) {
            var c = checkSessionHost();
            if (c)
                window.TEAVisualEditor.__editor_ajax_domain = c,
                loadEditorScript$1({
                    event: null,
                    editorUrl: checkEditUrl() || EDITOR_URL_NEW,
                    autoTrackInstance: e,
                    fromSession: !1
                });
            else
                loadEditorScript$1({
                    event: null,
                    editorUrl: EDITOR_URL_OLD,
                    autoTrackInstance: e,
                    fromSession: !1
                });
            setSession()
        } else
            try {
                receiveMsg("tea:openVisualEditor", function(t) {
                    var r = t.data;
                    if ("string" == typeof t.data)
                        try {
                            r = JSON.parse(t.data)
                        } catch (e) {
                            r = void 0
                        }
                    if (r) {
                        var o = r.referrer
                          , s = r.lang;
                        if (o ? (window.TEAVisualEditor.__editor_ajax_domain = o,
                        EDITOR_URL = EDITOR_URL_NEW) : EDITOR_URL = EDITOR_URL_OLD,
                        i) {
                            var a = r.version;
                            EDITOR_URL = n ? "" + n + (a ? "/visual-editor-rangers-v" + a : "/visual-editor-rangers-v1.0.0") + ".js" : EDITOR_URL_NEW,
                            window.TEAVisualEditor.__editor_verison = a
                        }
                        window.TEAVisualEditor.__editor_url = EDITOR_URL,
                        window.TEAVisualEditor.lang = s,
                        loadEditorScript$1({
                            event: t,
                            editorUrl: EDITOR_URL,
                            autoTrackInstance: e
                        }),
                        setSession()
                    }
                }),
                window.TEAVisualEditor.openAutotrackEditor = function() {
                    loadEditorScript$1({
                        event: null,
                        editorUrl: window.TEAVisualEditor.__editor_url,
                        autoTrackInstance: e
                    })
                }
            } catch (e) {
                console.log("receive message error")
            }
        try {
            receiveMsg("tea:openHeatMapCore", function(t) {
                loadEditorScript$1({
                    event: t,
                    editorUrl: decodeUrl(HOT_PIC_URL) + ".js?query=" + Date.now(),
                    autoTrackInstance: e
                })
            })
        } catch (e) {
            console.log("openHeatMapCore error")
        }
    }
    var defaultOpt = {
        hashTag: !1,
        impr: !1
    }, AutoTrack = function() {
        function e() {
            this.autoTrackStart = !1
        }
        return e.prototype.start = function(e, t, i, n, r) {
            i = Object.assign(defaultOpt, i),
            this.destroyed = !1,
            this.options = i,
            this.logFunc = t,
            this.logFuncBecon = n,
            this.Config = new Config(defaultConfig),
            this.Listener = new Listener(i,this.Config,r),
            this.EventHandle = new EventHandle(e,i),
            this.Request = new Request(this.logFunc,this.logFuncBecon),
            this.autoTrackStart = !0,
            this.init()
        }
        ,
        e.prototype.init = function() {
            this.Listener.init(this.handle.bind(this))
        }
        ,
        e.prototype.handle = function(e, t) {
            "dom" === e.eventType && this.handleDom(e, t)
        }
        ,
        e.prototype.handleDom = function(e, t) {
            try {
                var i = e.eventName;
                if ("click" === i || "change" === i || "submit" === i) {
                    var n = this.EventHandle.handleEvent(t, i);
                    null !== n && this.Request.send({
                        eventType: "custom",
                        eventName: "report_" + i + "_event",
                        extra: {
                            methods: "GET"
                        }
                    }, n)
                } else if ("page_view" === i || "page_statistics" === i) {
                    var r = void 0;
                    r = "page_view" === i ? this.EventHandle.handleViewEvent(t) : this.EventHandle.handleStatisticsEvent(t),
                    this.Request.send({
                        eventType: "custom",
                        eventName: "report_${eventName}_event",
                        extra: {
                            methods: "GET"
                        }
                    }, r)
                } else if ("beat" === i) {
                    var o = this.EventHandle.handleBeadtEvent(t)
                      , s = e.eventSend;
                    this.Request.send({
                        eventType: "custom",
                        eventName: "report_${eventName}_event",
                        extra: {
                            methods: "GET"
                        },
                        eventSend: s
                    }, o)
                }
            } catch (e) {
                console.log("handel dom event error " + JSON.stringify(e))
            }
        }
        ,
        e.prototype.destroy = function() {
            if (!this.autoTrackStart)
                return console.warn("engine is undefined, make sure you have called autoTrack.start()");
            this.autoTrackStart = !1,
            this.Listener.removeListener()
        }
        ,
        e
    }(), exportAutoTrack = function(e, t, i, n) {
        var r = e.autotrack;
        if (!e.autotrack || !e.autotrack.collect_url || e.autotrack.collect_url()) {
            var o = new AutoTrack;
            if (r) {
                var s = {};
                "object" == typeof r && (s = r),
                o.start(e, t, s, i, n),
                readyToLoadEditor$1(o, e)
            } else
                o.autoTrackStart && o.destroy();
            return null
        }
    }, exportMethods = ["profileSet", "profileSetOnce", "profileIncrement", "profileUnset", "profileAppend", "getVar", "getAbSdkVersion", "onAbSdkVersionChange", "offAbSdkVersionChange", "getABconfig", "openOverlayer", "closeOverlayer", "getAllVars", "setExternalAbVersion", "getToken", "destroy"], Methods = __spread(["init", "config", "send", "start", "predefinePageView", "beconEvent", "on", "clearEventCache", "setNativeAppId", "resetStayDuration", "autoInitializationRangers", "setWebIDviaUnionID", "setWebIDviaOpenID", "filterEvent"], exportMethods), getIndex = (lastEventId = +Date.now() + Number(("" + Math.random()).slice(2, 8)),
    function() {
        return lastEventId += 1
    }
    ), lastEventId, Collector = function() {
        function e(e) {
            var t = this;
            this.is_first_time = !1,
            this.Native = !1,
            this.staging = !1,
            this.sdkload = !1,
            this._getToken = !1,
            this.predefinePageView = function(e) {
                if (void 0 === e && (e = {}),
                t.sdkload) {
                    var i = {
                        title: document.title || location.pathname,
                        url: location.href,
                        url_path: location.pathname,
                        time: Date.now(),
                        referrer: window.document.referrer,
                        $is_first_time: "" + t.is_first_time
                    }
                      , n = __assign({}, i, e);
                    t.event("predefine_pageview", n, "pv")
                } else
                    t.logger.warn("sdk init error, api can not call")
            }
            ,
            this.getToken = function(e, i) {
                if (!t.sdkload)
                    return t.logger.warn("sdk init error, api can not call, getToken will return {}"),
                    void e({});
                var n = !1
                  , r = function() {
                    if (!n) {
                        n = !0;
                        var i = t._config.get().user;
                        return e(__assign({}, i))
                    }
                };
                i && setTimeout(function() {
                    r()
                }, i),
                t._token.isTokenReady() ? r() : (t.hook.on("get-token", function() {
                    r()
                }),
                t._getToken = !0)
            }
            ,
            this.name = e,
            this._isSend = !1,
            this.hook = new Hook,
            this.storage = new Storage(!1),
            this.plugin = {}
        }
        return e.prototype.autoInitializationRangers = function(e) {}
        ,
        e.prototype.init = function(e) {
            var t = this;
            if (!this._inited)
                if (this._inited = !0,
                e && "object" == typeof e) {
                    this.logger = new Logger(this.name,e.log);
                    var i = e.app_id
                      , n = e.app_key;
                    n || i ? i && "number" != typeof i ? this.logger.warn("app_id param is error, must be number, please check !!!") : n && "string" != typeof n ? this.logger.warn("app_key is empty, please check!") : (e.channel_domain || -1 !== ["cn", "sg", "va"].indexOf(e.channel) || (this.logger.warn("channel must be cn or sg or va!!!, use default channel cn"),
                    e.channel = "cn"),
                    this.Native = e.Native,
                    this._initConfig = e,
                    this.appBridge = new AppBridge(this.logger),
                    this.storage.getItem("__tea_cache_first_" + i) ? this.is_first_time = !1 : (this.is_first_time = !0,
                    this.storage.setItem("__tea_cache_first_" + i, "1")),
                    this.sdkload = !0,
                    e.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(i) {
                        i || t._init(e)
                    }) : this._init(e)) : this.logger.warn("no app_key or app_id please check !!!")
                } else
                    console.warn("init params is error,please check")
        }
        ,
        e.prototype._init = function(e) {
            var t = this;
            this.autoPV = !0,
            this.sdkload = !0,
            this._initConfig = e,
            this._config = new ConfigManager(e.app_id,e,e.configPersist || 0),
            this.configPersist = e.configPersist || 0,
            this._config.set("app_id", e.app_id),
            this.hook.on("token-ready", function() {
                t.callbackSend ? t._isSend ? t._event && t._event.report() : t.start() : t._event && t._event.report()
            }),
            this._session = new Session(e.app_key || e.app_id,e),
            this._token = new Token(e,this._config,this.hook,this._session),
            this.plugin = new Plugin(this,e,this.event.bind(this),this.beconEvent.bind(this),this.hook),
            e.cep && (this.match = new CepRule(e,this._config,this.hook)),
            this._event = new EventManager(this,e,this._config,this._token,this.plugin,this._session,this.hook,this.match),
            this.tracer = new Tracer(this,e,this._processEvent.bind(this),this._event),
            this.spaView = new Ruote(e),
            this._token._getToken();
            try {
                e.autotrack && exportAutoTrack(e, this.event.bind(this), this.beconEvent.bind(this), this.spaView)
            } catch (e) {
                console.log(e.stack)
            }
        }
        ,
        e.prototype.config = function(e) {
            var t = this;
            this.sdkload ? this.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(i) {
                if (i)
                    for (var n in e)
                        "user_unique_id" === n ? t.appBridge.setUserUniqueId(e[n]) : e[n] ? t.appBridge.addHeaderInfo(n, e[n]) : t.appBridge.removeHeaderInfo(n);
                else
                    t._setConfig(e)
            }) : this._setConfig(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype._setConfig = function(e) {
            if (this._inited)
                if (e && "object" == typeof e) {
                    e.disable_auto_pv && (this.autoPV = !1,
                    delete e.disable_auto_pv),
                    e._staging_flag && 1 === e._staging_flag && (this.staging = !0);
                    var t = __assign({}, e);
                    if (this.configPersist) {
                        var i = this._config.getStore();
                        i && (t = Object.assign(i, e)),
                        this._config.setStore(e)
                    }
                    for (var n in t)
                        "user_unique_id" !== n ? "web_id" !== n ? this._config.set(n, t[n]) : this._token._setWebid(t[n]) : this._token._setUuid(t[n])
                } else
                    this.logger.warn("config params is error, please check");
            else
                this.logger.warn("config must be use after function init")
        }
        ,
        e.prototype.on = function(e, t) {
            try {
                e && "string" == typeof e && "function" == typeof t && this.hook.on(e, t)
            } catch (e) {}
        }
        ,
        e.prototype.send = function() {
            this.start()
        }
        ,
        e.prototype.start = function() {
            var e = this;
            this.sdkload ? this.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(t) {
                t ? (e.logger.info("jsbrige open, to native"),
                e.predefinePageView()) : e._start()
            }) : this._start() : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype._start = function() {
            var e = this;
            if (this._token.isTokenReady()) {
                if (this._isSend)
                    return void this.logger.warn("method start can not be use over one time , please check !!");
                this._isSend = !0,
                this.logger.info("userInfo:" + JSON.stringify(this._config.get("user"))),
                this.logger.info("sdk is ready,version is " + SDK_VERSION + ". you can report now !!!"),
                this._event.setReady(),
                this.match && this.match.init(),
                this.autoPV && this.predefinePageView(),
                this._initConfig.spa && this.spaView.add("spa", this.predefinePageView),
                this._getToken && this.hook.emit("get-token"),
                this.hook.on("token-change", function(t) {
                    e.logger.info("token change, new userinfo:" + JSON.stringify(e._config.get("user")));
                    var i = t.type
                      , n = t.info;
                    "uuid" === i && e.plugin && e.plugin.ab && e.plugin.ab.refetch(n)
                });
                try {
                    (window.opener || window.parent).postMessage("[tea-sdk]ready", "*")
                } catch (e) {}
                this.profile = new Profile(this._processEvent.bind(this),this._event,this._initConfig),
                this.plugin && this.plugin.ab && this.plugin.ab.init(this._config.get())
            } else
                this.callbackSend = !0
        }
        ,
        e.prototype.beconEvent = function(e, t, i) {
            var n = this;
            void 0 === t && (t = {});
            var r = i || "log"
              , o = [];
            o.push([e, t]),
            o = o.map(function(e) {
                return n._processEvent(e[0], e[1])
            }),
            this._dealEvent(!0, o, r),
            this._addTracerCount(r)
        }
        ,
        e.prototype.event = function() {
            for (var e = this, t = [], i = 0; i < arguments.length; i++)
                t[i] = arguments[i];
            if (this.sdkload) {
                var n = __read(t, 1)[0]
                  , r = [];
                "Array" !== Object.prototype.toString.call(n).slice(8, -1) ? r[0] = t : r = t,
                r = r.map(function(t) {
                    return e._processEvent(t[0], t[1])
                }),
                this._dealEvent(!1, r, "log"),
                this._addTracerCount("log")
            } else
                this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype._dealEvent = function(e, t, i) {
            var n = this;
            if (this.sdkload)
                if (this.Native && this.appBridge.bridgeInject()) {
                    if ("autotrack" === i || "sdk" === i)
                        return;
                    this.appBridge.hasStarted(function(i) {
                        i ? t && t.length && t.forEach(function(e) {
                            var t = e.event
                              , i = e.params;
                            n.appBridge.onEventV3(t, JSON.stringify(i))
                        }) : n._commonEvent(e, t)
                    })
                } else
                    this._commonEvent(e, t);
            else
                this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype._commonEvent = function(e, t) {
            e ? this._event.beconEvent(t) : this._event.event(t),
            this._session._updateSessionId(),
            this.plugin && this.plugin.session && this.plugin.session.process()
        }
        ,
        e.prototype._addTracerCount = function(e) {
            this.sdkload ? this.Native || this.staging || this.tracer.addCount(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype._processEvent = function(e, t) {
            try {
                var i = e;
                /^event\./.test(e) && (i = e.slice(6));
                var n, r = t;
                return "object" != typeof r && (r = {}),
                r.profile ? delete r.profile : r.event_index = getIndex(),
                r.local_ms ? (n = r.local_ms,
                delete r.local_ms) : n = +new Date,
                {
                    event: i,
                    params: r,
                    local_time_ms: n,
                    is_bav: this._initConfig.autotrack ? 1 : 0
                }
            } catch (i) {
                return {
                    event: e,
                    params: t
                }
            }
        }
        ,
        e.prototype.filterEvent = function(e) {
            this.eventFilter = e
        }
        ,
        e.prototype.clearEventCache = function() {
            this._event.clearEventCache()
        }
        ,
        e.prototype.setWebIDviaUnionID = function(e) {
            if (e) {
                var t = hashCode(e);
                this.config({
                    web_id: "" + t,
                    wechat_unionid: e
                }),
                this.hook.emit("custom-webid")
            }
        }
        ,
        e.prototype.setWebIDviaOpenID = function(e) {
            if (e) {
                var t = hashCode(e);
                this.config({
                    web_id: "" + t,
                    wechat_openid: e
                }),
                this.hook.emit("custom-webid")
            }
        }
        ,
        e.prototype.setNativeAppId = function(e) {
            this.Native && this.appBridge.bridgeInject() && this.appBridge.setNativeAppId(e)
        }
        ,
        e.prototype.resetStayDuration = function(e, t, i) {
            this.sdkload ? this.plugin.stay ? this.plugin.stay && this.plugin.stay.reset(e, t, i) : this.logger.info("stayDuration is not init") : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.profileSet = function(e) {
            var t = this;
            this.sdkload ? this.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(i) {
                i ? t.appBridge.profileSet(JSON.stringify(e)) : t.profile && t.profile.setProfile(e)
            }) : this.profile && this.profile.setProfile(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.profileSetOnce = function(e) {
            var t = this;
            this.sdkload ? this.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(i) {
                i ? t.appBridge.profileSetOnce(JSON.stringify(e)) : t.profile && t.profile.setOnceProfile(e)
            }) : this.profile && this.profile.setOnceProfile(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.profileIncrement = function(e) {
            var t = this;
            this.sdkload ? this.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(i) {
                i ? t.appBridge.profileIncrement(JSON.stringify(e)) : t.profile && t.profile.incrementProfile(e)
            }) : this.profile && this.profile.incrementProfile(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.profileUnset = function(e) {
            var t = this;
            this.sdkload ? this.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(i) {
                i ? t.appBridge.profileUnset(e) : t.profile && t.profile.unsetProfile(e)
            }) : this.profile && this.profile.unsetProfile(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.profileAppend = function(e) {
            var t = this;
            this.sdkload ? this.Native && this.appBridge.bridgeInject() ? this.appBridge.hasStarted(function(i) {
                i ? t.appBridge.profileAppend(JSON.stringify(e)) : t.profile && t.profile.appendProfile(e)
            }) : this.profile && this.profile.appendProfile(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.setExternalAbVersion = function(e) {
            this.sdkload ? e && this.plugin.ab && this.plugin.ab._setAbVersion(e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.getVar = function(e, t, i) {
            var n = this;
            if (!this.sdkload)
                return this.logger.warn("sdk init error, api can not call, getVar return default value"),
                void i(t);
            this.hook.on("token-error", function() {
                n.logger.warn("sdk init error, getVar return default value"),
                i(t)
            }),
            this.plugin.ab && this.plugin.ab.getVar(e, t, i)
        }
        ,
        e.prototype.getABconfig = function(e, t) {
            if (!this.sdkload)
                return this.logger.warn("sdk init error, api can not call, getABconfig return null"),
                void t(null);
            this.plugin.ab && this.plugin.ab._getABconfig(e, t)
        }
        ,
        e.prototype.getAbSdkVersion = function(e) {
            if (!this.sdkload)
                return this.logger.warn("sdk init error, api can not call, getAbSdkVersion return null"),
                void e(null);
            this.plugin.ab && this.plugin.ab.getAbSdkVersion(e)
        }
        ,
        e.prototype.onAbSdkVersionChange = function(e) {
            this.sdkload ? this.hook.on("onAbSdkVersionChange", e) : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.offAbSdkVersionChange = function(e) {
            this.sdkload ? e ? this.hook.off("onAbSdkVersionChange", e) : this.hook.off("onAbSdkVersionChange") : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.openOverlayer = function() {
            this.sdkload ? this.plugin.ab && this.plugin.ab.openOverlayer() : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.closeOverlayer = function() {
            this.sdkload ? this.plugin.ab && this.plugin.ab.closeOverlayer() : this.logger.warn("sdk init error, api can not call")
        }
        ,
        e.prototype.getAllVars = function(e) {
            var t = this;
            if (!this.sdkload)
                return this.logger.warn("sdk init error, api can not call, getAllVars return null"),
                void e(null);
            this.hook.on("token-error", function() {
                t.logger.warn("sdk init error, getallVar return null"),
                e(null)
            }),
            this.plugin.ab && this.plugin.ab.getAllVars(e)
        }
        ,
        e.prototype.destroy = function() {
            this.destroyInstance || (this.destroyInstance = !0,
            this.hook.off("token-ready"))
        }
        ,
        e
    }();
    function _defineProperty(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e
    }
    var CollectAsync = function(e) {
        var t = this;
        return _defineProperty(this, "_exportCollect", function() {
            for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                i[n] = arguments[n];
            t._isProcess ? t._executeCmd.apply(t, i) : (t.cmdQueue.push(i),
            t._processCmd())
        }),
        _defineProperty(this, "_processCmd", function() {
            if (0 !== t.cmdQueue.length) {
                var e, i, n, r, o;
                i = t.cmdQueue,
                n = "init",
                r = "0",
                o = -1,
                i.forEach(function(e, t) {
                    (void 0 !== r ? e[r] : e) === n && (o = t)
                }),
                -1 !== (e = o) && (t._isProcess = !0,
                t._executeCmd.apply(t, t.cmdQueue[e]),
                t.cmdQueue.forEach(function(i, n) {
                    n !== e && t._executeCmd.apply(t, i)
                }),
                t.cmdQueue = [])
            }
        }),
        _defineProperty(this, "_executeCmd", function() {
            for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                i[n] = arguments[n];
            var r, o, s = i[0];
            Methods.indexOf(s) > -1 ? (r = t.colloctor)[s].apply(r, i.slice(1)) : (o = t.colloctor).event.apply(o, i)
        }),
        this.cmdQueue = [],
        this.name = e,
        this.colloctor = new Collector(e),
        this._isProcess = !1,
        this._alias = {},
        this._processCmd(),
        Methods.forEach(function(e) {
            t._exportCollect[e] = t._exportCollect.bind(t, e)
        }),
        this._exportCollect
    }
      , insMap = {}
      , CmdMap = {}
      , getInstance = function(e) {
        return insMap[e] || (insMap[e] = new CollectAsync(e)),
        insMap[e]
    }
      , getCmdArray = function(e) {
        return CmdMap[e] || (CmdMap[e] = []),
        CmdMap[e]
    }
      , processCmdArray = function(e) {
        try {
            var t = __read(e)
              , i = t[0]
              , n = t.slice(1);
            if (!i)
                return void console.error("the eventName is: " + i + ", error, stop report, please check");
            var r = i.split(".");
            if (1 === r.length)
                getCmdArray("default").push(__spread([i], n));
            else if (2 === r.length)
                "event" === r[0] ? getCmdArray("default").push(__spread([i], n)) : getCmdArray(r[0]).push(__spread([r[1]], n));
            else {
                var o = r[0]
                  , s = [r[1], r[2]].join(".");
                getCmdArray(o).push(__spread([s], n))
            }
        } catch (e) {
            console.log(e)
        }
    }
      , processCmd = function() {
        defaultClient.q.forEach(function(e) {
            var t = [].slice.call(e);
            "Array" === Object.prototype.toString.call(t[0]).slice(8, -1) ? t.forEach(function(e) {
                processCmdArray(e)
            }) : processCmdArray(t)
        }),
        Object.keys(CmdMap).forEach(function(e) {
            CmdMap[e].forEach(function(t) {
                getInstance(e).apply(void 0, __spread(t))
            }),
            CmdMap[e] = []
        }),
        defaultClient.q = []
    }
      , transferAsync = function(e) {
        if ("undefined" != typeof window) {
            var t = getNameSpace();
            if (t && window[t]) {
                var i = window[t];
                i.init || (e.q = i.q || [],
                e.l = i.l || Date.now(),
                window[t] = e)
            }
        }
    }
      , defaultClient = function e() {
        for (var t = [], i = 0; i < arguments.length; i++)
            t[i] = arguments[i];
        e.q.push(t),
        processCmd()
    };
    defaultClient.q = [],
    defaultClient.l = Date.now(),
    defaultClient._instanceMap = insMap,
    defaultClient._instanceCmdMap = CmdMap,
    Methods.forEach(function(e) {
        defaultClient[e] = defaultClient.bind(null, e)
    }),
    transferAsync(defaultClient),
    processCmd();
    var Collector$1 = CollectAsync;
    return exports.Collector = Collector$1,
    exports.default = defaultClient,
    exports
}({});
