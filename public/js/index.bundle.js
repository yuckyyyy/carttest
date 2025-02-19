/*! For license information please see index.bundle.js.LICENSE.txt */
!function () {
    "use strict";
    var e = {
        709: function (e, t, r) {
            var i = r(81), n = r.n(i), s = r(645), a = r.n(s), o = r(667), l = r.n(o), d = new URL(r(954), r.b),
                u = a()(n()), c = l()(d);
            u.push([e.id, "/**\n * Swiper 11.1.4\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2024 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: May 30, 2024\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(" + c + ");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n", ""]), t.Z = u
        }, 645: function (e) {
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var r = "", i = void 0 !== t[5];
                        return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), i && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), i && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r
                    })).join("")
                }, t.i = function (e, r, i, n, s) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (i) for (var o = 0; o < this.length; o++) {
                        var l = this[o][0];
                        null != l && (a[l] = !0)
                    }
                    for (var d = 0; d < e.length; d++) {
                        var u = [].concat(e[d]);
                        i && a[u[0]] || (void 0 !== s && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = s), r && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = r) : u[2] = r), n && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = n) : u[4] = "".concat(n)), t.push(u))
                    }
                }, t
            }
        }, 667: function (e) {
            e.exports = function (e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        }, 81: function (e) {
            e.exports = function (e) {
                return e[1]
            }
        }, 379: function (e) {
            var t = [];

            function r(e) {
                for (var r = -1, i = 0; i < t.length; i++) if (t[i].identifier === e) {
                    r = i;
                    break
                }
                return r
            }

            function i(e, i) {
                for (var s = {}, a = [], o = 0; o < e.length; o++) {
                    var l = e[o], d = i.base ? l[0] + i.base : l[0], u = s[d] || 0, c = "".concat(d, " ").concat(u);
                    s[d] = u + 1;
                    var p = r(c), h = {css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5]};
                    if (-1 !== p) t[p].references++, t[p].updater(h); else {
                        var f = n(h, i);
                        i.byIndex = o, t.splice(o, 0, {identifier: c, updater: f, references: 1})
                    }
                    a.push(c)
                }
                return a
            }

            function n(e, t) {
                var r = t.domAPI(t);
                return r.update(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                        r.update(e = t)
                    } else r.remove()
                }
            }

            e.exports = function (e, n) {
                var s = i(e = e || [], n = n || {});
                return function (e) {
                    e = e || [];
                    for (var a = 0; a < s.length; a++) {
                        var o = r(s[a]);
                        t[o].references--
                    }
                    for (var l = i(e, n), d = 0; d < s.length; d++) {
                        var u = r(s[d]);
                        0 === t[u].references && (t[u].updater(), t.splice(u, 1))
                    }
                    s = l
                }
            }
        }, 569: function (e) {
            var t = {};
            e.exports = function (e, r) {
                var i = function (e) {
                    if (void 0 === t[e]) {
                        var r = document.querySelector(e);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                            r = r.contentDocument.head
                        } catch (e) {
                            r = null
                        }
                        t[e] = r
                    }
                    return t[e]
                }(e);
                if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                i.appendChild(r)
            }
        }, 216: function (e) {
            e.exports = function (e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        }, 565: function (e, t, r) {
            e.exports = function (e) {
                var t = r.nc;
                t && e.setAttribute("nonce", t)
            }
        }, 795: function (e) {
            e.exports = function (e) {
                if ("undefined" == typeof document) return {
                    update: function () {
                    }, remove: function () {
                    }
                };
                var t = e.insertStyleElement(e);
                return {
                    update: function (r) {
                        !function (e, t, r) {
                            var i = "";
                            r.supports && (i += "@supports (".concat(r.supports, ") {")), r.media && (i += "@media ".concat(r.media, " {"));
                            var n = void 0 !== r.layer;
                            n && (i += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), i += r.css, n && (i += "}"), r.media && (i += "}"), r.supports && (i += "}");
                            var s = r.sourceMap;
                            s && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleTagTransform(i, e, t.options)
                        }(t, e, r)
                    }, remove: function () {
                        !function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }, 589: function (e) {
            e.exports = function (e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }, 954: function (e) {
            e.exports = "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA"
        }
    }, t = {};

    function r(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var s = t[i] = {id: i, exports: {}};
        return e[i](s, s.exports, r), s.exports
    }

    r.m = e, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, {a: t}), t
    }, r.d = function (e, t) {
        for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {enumerable: !0, get: t[i]})
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.b = document.baseURI || self.location.href, r.nc = void 0, function () {
        function e(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function t(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }

        var i, n, s, a, o, l, d, u, c, p, h, f, m, g, v,
            _ = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
            w = {duration: .5, overwrite: !1, delay: 0}, y = 1e8, b = 1e-8, T = 2 * Math.PI, A = T / 4, x = 0,
            S = Math.sqrt, E = Math.cos, M = Math.sin, C = function (e) {
                return "string" == typeof e
            }, P = function (e) {
                return "function" == typeof e
            }, k = function (e) {
                return "number" == typeof e
            }, O = function (e) {
                return void 0 === e
            }, z = function (e) {
                return "object" == typeof e
            }, I = function (e) {
                return !1 !== e
            }, L = function () {
                return "undefined" != typeof window
            }, D = function (e) {
                return P(e) || C(e)
            }, B = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {
            }, G = Array.isArray, F = /(?:-?\.?\d|\.)+/gi, R = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            N = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, V = /[+-]=-?[.\d]+/,
            j = /[^,'"\[\]\s]+/gi, q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, H = {}, W = {}, X = function (e) {
                return (W = Te(e, H)) && Tr
            }, U = function (e, t) {
                return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
            }, $ = function (e, t) {
                return !t && console.warn(e)
            }, Q = function (e, t) {
                return e && (H[e] = t) && W && (W[e] = t) || H
            }, Z = function () {
                return 0
            }, K = {suppressEvents: !0, isStart: !0, kill: !1}, J = {suppressEvents: !0, kill: !1},
            ee = {suppressEvents: !0}, te = {}, re = [], ie = {}, ne = {}, se = {}, ae = 30, oe = [], le = "",
            de = function (e) {
                var t, r, i = e[0];
                if (z(i) || P(i) || (e = [e]), !(t = (i._gsap || {}).harness)) {
                    for (r = oe.length; r-- && !oe[r].targetTest(i);) ;
                    t = oe[r]
                }
                for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Bt(e[r], t))) || e.splice(r, 1);
                return e
            }, ue = function (e) {
                return e._gsap || de(Je(e))[0]._gsap
            }, ce = function (e, t, r) {
                return (r = e[t]) && P(r) ? e[t]() : O(r) && e.getAttribute && e.getAttribute(t) || r
            }, pe = function (e, t) {
                return (e = e.split(",")).forEach(t) || e
            }, he = function (e) {
                return Math.round(1e5 * e) / 1e5 || 0
            }, fe = function (e) {
                return Math.round(1e7 * e) / 1e7 || 0
            }, me = function (e, t) {
                var r = t.charAt(0), i = parseFloat(t.substr(2));
                return e = parseFloat(e), "+" === r ? e + i : "-" === r ? e - i : "*" === r ? e * i : e / i
            }, ge = function (e, t) {
                for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r;) ;
                return i < r
            }, ve = function () {
                var e, t, r = re.length, i = re.slice(0);
                for (ie = {}, re.length = 0, e = 0; e < r; e++) (t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
            }, _e = function (e, t, r, i) {
                re.length && !n && ve(), e.render(t, r, i || n && t < 0 && (e._initted || e._startAt)), re.length && !n && ve()
            }, we = function (e) {
                var t = parseFloat(e);
                return (t || 0 === t) && (e + "").match(j).length < 2 ? t : C(e) ? e.trim() : e
            }, ye = function (e) {
                return e
            }, be = function (e, t) {
                for (var r in t) r in e || (e[r] = t[r]);
                return e
            }, Te = function (e, t) {
                for (var r in t) e[r] = t[r];
                return e
            }, Ae = function e(t, r) {
                for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = z(r[i]) ? e(t[i] || (t[i] = {}), r[i]) : r[i]);
                return t
            }, xe = function (e, t) {
                var r, i = {};
                for (r in e) r in t || (i[r] = e[r]);
                return i
            }, Se = function (e) {
                var t, r = e.parent || a, i = e.keyframes ? (t = G(e.keyframes), function (e, r) {
                    for (var i in r) i in e || "duration" === i && t || "ease" === i || (e[i] = r[i])
                }) : be;
                if (I(e.inherit)) for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
                return e
            }, Ee = function (e, t, r, i, n) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var s, a = e[i];
                if (n) for (s = t[n]; a && a[n] > s;) a = a._prev;
                return a ? (t._next = a._next, a._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = a, t.parent = t._dp = e, t
            }, Me = function (e, t, r, i) {
                void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                var n = t._prev, s = t._next;
                n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null
            }, Ce = function (e, t) {
                e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
            }, Pe = function (e, t) {
                if (e && (!t || t._end > e._dur || t._start < 0)) for (var r = e; r;) r._dirty = 1, r = r.parent;
                return e
            }, ke = function (e, t, r, i) {
                return e._startAt && (n ? e._startAt.revert(J) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
            }, Oe = function e(t) {
                return !t || t._ts && e(t.parent)
            }, ze = function (e) {
                return e._repeat ? Ie(e._tTime, e = e.duration() + e._rDelay) * e : 0
            }, Ie = function (e, t) {
                var r = Math.floor(e /= t);
                return e && r === e ? r - 1 : r
            }, Le = function (e, t) {
                return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
            }, De = function (e) {
                return e._end = fe(e._start + (e._tDur / Math.abs(e._ts || e._rts || b) || 0))
            }, Be = function (e, t) {
                var r = e._dp;
                return r && r.smoothChildTiming && e._ts && (e._start = fe(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), De(e), r._dirty || Pe(r, e)), e
            }, Ge = function (e, t) {
                var r;
                if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Le(e.rawTime(), t), (!t._dur || $e(0, t.totalDuration(), r) - t._tTime > b) && t.render(r, !0)), Pe(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                    if (e._dur < e.duration()) for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                    e._zTime = -1e-8
                }
            }, Fe = function (e, t, r, i) {
                return t.parent && Ce(t), t._start = fe((k(r) ? r : r || e !== a ? We(e, r, t) : e._time) + t._delay), t._end = fe(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ee(e, t, "_first", "_last", e._sort ? "_start" : 0), Ve(t) || (e._recent = t), i || Ge(e, t), e._ts < 0 && Be(e, e._tTime), e
            }, Re = function (e, t) {
                return (H.ScrollTrigger || U("scrollTrigger", t)) && H.ScrollTrigger.create(t, e)
            }, Ne = function (e, t, r, i, s) {
                return qt(e, t, s), e._initted ? !r && e._pt && !n && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && c !== At.frame ? (re.push(e), e._lazy = [s, i], 1) : void 0 : 1
            }, Ye = function e(t) {
                var r = t.parent;
                return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || e(r))
            }, Ve = function (e) {
                var t = e.data;
                return "isFromStart" === t || "isStart" === t
            }, je = function (e, t, r, i) {
                var n = e._repeat, s = fe(t) || 0, a = e._tTime / e._tDur;
                return a && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : fe(s * (n + 1) + e._rDelay * n) : s, a > 0 && !i && Be(e, e._tTime = e._tDur * a), e.parent && De(e), r || Pe(e.parent, e), e
            }, qe = function (e) {
                return e instanceof Ft ? Pe(e) : je(e, e._dur)
            }, He = {_start: 0, endTime: Z, totalDuration: Z}, We = function e(t, r, i) {
                var n, s, a, o = t.labels, l = t._recent || He, d = t.duration() >= y ? l.endTime(!1) : t._dur;
                return C(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? l : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = d), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (G(i) ? i[0] : i).totalDuration()), n > 1 ? e(t, r.substr(0, n - 1), i) + s : d + s)) : null == r ? d : +r
            }, Xe = function (e, t, r) {
                var i, n, s = k(t[1]), a = (s ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
                if (s && (o.duration = t[1]), o.parent = r, e) {
                    for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = I(n.vars.inherit) && n.parent;
                    o.immediateRender = I(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
                }
                return new $t(t[0], o, t[a + 1])
            }, Ue = function (e, t) {
                return e || 0 === e ? t(e) : t
            }, $e = function (e, t, r) {
                return r < e ? e : r > t ? t : r
            }, Qe = function (e, t) {
                return C(e) && (t = q.exec(e)) ? t[1] : ""
            }, Ze = [].slice, Ke = function (e, t) {
                return e && z(e) && "length" in e && (!t && !e.length || e.length - 1 in e && z(e[0])) && !e.nodeType && e !== o
            }, Je = function (e, t, r) {
                return s && !t && s.selector ? s.selector(e) : !C(e) || r || !l && xt() ? G(e) ? function (e, t, r) {
                    return void 0 === r && (r = []), e.forEach((function (e) {
                        var i;
                        return C(e) && !t || Ke(e, 1) ? (i = r).push.apply(i, Je(e)) : r.push(e)
                    })) || r
                }(e, r) : Ke(e) ? Ze.call(e, 0) : e ? [e] : [] : Ze.call((t || d).querySelectorAll(e), 0)
            }, et = function (e) {
                return e = Je(e)[0] || $("Invalid scope") || {}, function (t) {
                    var r = e.current || e.nativeElement || e;
                    return Je(t, r.querySelectorAll ? r : r === e ? $("Invalid scope") || d.createElement("div") : e)
                }
            }, tt = function (e) {
                return e.sort((function () {
                    return .5 - Math.random()
                }))
            }, rt = function (e) {
                if (P(e)) return e;
                var t = z(e) ? e : {each: e}, r = Ot(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, s = {},
                    a = i > 0 && i < 1, o = isNaN(i) || a, l = t.axis, d = i, u = i;
                return C(i) ? d = u = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[i] || 0 : !a && o && (d = i[0], u = i[1]), function (e, a, c) {
                    var p, h, f, m, g, v, _, w, b, T = (c || t).length, A = s[T];
                    if (!A) {
                        if (!(b = "auto" === t.grid ? 0 : (t.grid || [1, y])[1])) {
                            for (_ = -y; _ < (_ = c[b++].getBoundingClientRect().left) && b < T;) ;
                            b < T && b--
                        }
                        for (A = s[T] = [], p = o ? Math.min(b, T) * d - .5 : i % b, h = b === y ? 0 : o ? T * u / b - .5 : i / b | 0, _ = 0, w = y, v = 0; v < T; v++) f = v % b - p, m = h - (v / b | 0), A[v] = g = l ? Math.abs("y" === l ? m : f) : S(f * f + m * m), g > _ && (_ = g), g < w && (w = g);
                        "random" === i && tt(A), A.max = _ - w, A.min = w, A.v = T = (parseFloat(t.amount) || parseFloat(t.each) * (b > T ? T - 1 : l ? "y" === l ? T / b : b : Math.max(b, T / b)) || 0) * ("edges" === i ? -1 : 1), A.b = T < 0 ? n - T : n, A.u = Qe(t.amount || t.each) || 0, r = r && T < 0 ? Pt(r) : r
                    }
                    return T = (A[e] - A.min) / A.max || 0, fe(A.b + (r ? r(T) : T) * A.v) + A.u
                }
            }, it = function (e) {
                var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
                return function (r) {
                    var i = fe(Math.round(parseFloat(r) / e) * e * t);
                    return (i - i % 1) / t + (k(r) ? 0 : Qe(r))
                }
            }, nt = function (e, t) {
                var r, i, n = G(e);
                return !n && z(e) && (r = n = e.radius || y, e.values ? (e = Je(e.values), (i = !k(e[0])) && (r *= r)) : e = it(e.increment)), Ue(t, n ? P(e) ? function (t) {
                    return i = e(t), Math.abs(i - t) <= r ? i : t
                } : function (t) {
                    for (var n, s, a = parseFloat(i ? t.x : t), o = parseFloat(i ? t.y : 0), l = y, d = 0, u = e.length; u--;) (n = i ? (n = e[u].x - a) * n + (s = e[u].y - o) * s : Math.abs(e[u] - a)) < l && (l = n, d = u);
                    return d = !r || l <= r ? e[d] : t, i || d === t || k(t) ? d : d + Qe(t)
                } : it(e))
            }, st = function (e, t, r, i) {
                return Ue(G(e) ? !t : !0 === r ? !!(r = 0) : !i, (function () {
                    return G(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + .99 * r)) / r) * r * i) / i
                }))
            }, at = function (e, t, r) {
                return Ue(r, (function (r) {
                    return e[~~t(r)]
                }))
            }, ot = function (e) {
                for (var t, r, i, n, s = 0, a = ""; ~(t = e.indexOf("random(", s));) i = e.indexOf(")", t), n = "[" === e.charAt(t + 7), r = e.substr(t + 7, i - t - 7).match(n ? j : F), a += e.substr(s, t - s) + st(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
                return a + e.substr(s, e.length - s)
            }, lt = function (e, t, r, i, n) {
                var s = t - e, a = i - r;
                return Ue(n, (function (t) {
                    return r + ((t - e) / s * a || 0)
                }))
            }, dt = function (e, t, r) {
                var i, n, s, a = e.labels, o = y;
                for (i in a) (n = a[i] - t) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
                return s
            }, ut = function (e, t, r) {
                var i, n, a, o = e.vars, l = o[t], d = s, u = e._ctx;
                if (l) return i = o[t + "Params"], n = o.callbackScope || e, r && re.length && ve(), u && (s = u), a = i ? l.apply(n, i) : l.call(n), s = d, a
            }, ct = function (e) {
                return Ce(e), e.scrollTrigger && e.scrollTrigger.kill(!!n), e.progress() < 1 && ut(e, "onInterrupt"), e
            }, pt = [], ht = function (e) {
                if (e) if (e = !e.name && e.default || e, L() || e.headless) {
                    var t = e.name, r = P(e), i = t && !r && e.init ? function () {
                            this._props = []
                        } : e, n = {init: Z, render: nr, add: Vt, kill: ar, modifier: sr, rawVars: 0},
                        s = {targetTest: 0, get: 0, getSetter: er, aliases: {}, register: 0};
                    if (xt(), e !== i) {
                        if (ne[t]) return;
                        be(i, be(xe(e, n), s)), Te(i.prototype, Te(n, xe(e, s))), ne[i.prop = t] = i, e.targetTest && (oe.push(i), te[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                    }
                    Q(t, i), e.register && e.register(Tr, i, dr)
                } else pt.push(e)
            }, ft = 255, mt = {
                aqua: [0, ft, ft],
                lime: [0, ft, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, ft],
                navy: [0, 0, 128],
                white: [ft, ft, ft],
                olive: [128, 128, 0],
                yellow: [ft, ft, 0],
                orange: [ft, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [ft, 0, 0],
                pink: [ft, 192, 203],
                cyan: [0, ft, ft],
                transparent: [ft, ft, ft, 0]
            }, gt = function (e, t, r) {
                return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (r - t) * e * 6 : e < .5 ? r : 3 * e < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * ft + .5 | 0
            }, vt = function (e, t, r) {
                var i, n, s, a, o, l, d, u, c, p, h = e ? k(e) ? [e >> 16, e >> 8 & ft, e & ft] : 0 : mt.black;
                if (!h) {
                    if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), mt[e]) h = mt[e]; else if ("#" === e.charAt(0)) {
                        if (e.length < 6 && (i = e.charAt(1), n = e.charAt(2), s = e.charAt(3), e = "#" + i + i + n + n + s + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(h = parseInt(e.substr(1, 6), 16)) >> 16, h >> 8 & ft, h & ft, parseInt(e.substr(7), 16) / 255];
                        h = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ft, e & ft]
                    } else if ("hsl" === e.substr(0, 3)) if (h = p = e.match(F), t) {
                        if (~e.indexOf("=")) return h = e.match(R), r && h.length < 4 && (h[3] = 1), h
                    } else a = +h[0] % 360 / 360, o = +h[1] / 100, i = 2 * (l = +h[2] / 100) - (n = l <= .5 ? l * (o + 1) : l + o - l * o), h.length > 3 && (h[3] *= 1), h[0] = gt(a + 1 / 3, i, n), h[1] = gt(a, i, n), h[2] = gt(a - 1 / 3, i, n); else h = e.match(F) || mt.transparent;
                    h = h.map(Number)
                }
                return t && !p && (i = h[0] / ft, n = h[1] / ft, s = h[2] / ft, l = ((d = Math.max(i, n, s)) + (u = Math.min(i, n, s))) / 2, d === u ? a = o = 0 : (c = d - u, o = l > .5 ? c / (2 - d - u) : c / (d + u), a = d === i ? (n - s) / c + (n < s ? 6 : 0) : d === n ? (s - i) / c + 2 : (i - n) / c + 4, a *= 60), h[0] = ~~(a + .5), h[1] = ~~(100 * o + .5), h[2] = ~~(100 * l + .5)), r && h.length < 4 && (h[3] = 1), h
            }, _t = function (e) {
                var t = [], r = [], i = -1;
                return e.split(yt).forEach((function (e) {
                    var n = e.match(N) || [];
                    t.push.apply(t, n), r.push(i += n.length + 1)
                })), t.c = r, t
            }, wt = function (e, t, r) {
                var i, n, s, a, o = "", l = (e + o).match(yt), d = t ? "hsla(" : "rgba(", u = 0;
                if (!l) return e;
                if (l = l.map((function (e) {
                    return (e = vt(e, t, 1)) && d + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
                })), r && (s = _t(e), (i = r.c).join(o) !== s.c.join(o))) for (a = (n = e.replace(yt, "1").split(N)).length - 1; u < a; u++) o += n[u] + (~i.indexOf(u) ? l.shift() || d + "0,0,0,0)" : (s.length ? s : l.length ? l : r).shift());
                if (!n) for (a = (n = e.split(yt)).length - 1; u < a; u++) o += n[u] + l[u];
                return o + n[a]
            }, yt = function () {
                var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (e in mt) t += "|" + e + "\\b";
                return new RegExp(t + ")", "gi")
            }(), bt = /hsl[a]?\(/, Tt = function (e) {
                var t, r = e.join(" ");
                if (yt.lastIndex = 0, yt.test(r)) return t = bt.test(r), e[1] = wt(e[1], t), e[0] = wt(e[0], t, _t(e[1])), !0
            }, At = function () {
                var e, t, r, i, n, s, a = Date.now, c = 500, p = 33, f = a(), m = f, g = 1e3 / 240, v = g, _ = [],
                    w = function r(o) {
                        var l, d, u, h, w = a() - m, y = !0 === o;
                        if ((w > c || w < 0) && (f += w - p), ((l = (u = (m += w) - f) - v) > 0 || y) && (h = ++i.frame, n = u - 1e3 * i.time, i.time = u /= 1e3, v += l + (l >= g ? 4 : g - l), d = 1), y || (e = t(r)), d) for (s = 0; s < _.length; s++) _[s](u, n, h, o)
                    };
                return i = {
                    time: 0, frame: 0, tick: function () {
                        w(!0)
                    }, deltaRatio: function (e) {
                        return n / (1e3 / (e || 60))
                    }, wake: function () {
                        u && (!l && L() && (o = l = window, d = o.document || {}, H.gsap = Tr, (o.gsapVersions || (o.gsapVersions = [])).push(Tr.version), X(W || o.GreenSockGlobals || !o.gsap && o || {}), pt.forEach(ht)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && i.sleep(), t = r || function (e) {
                            return setTimeout(e, v - 1e3 * i.time + 1 | 0)
                        }, h = 1, w(2))
                    }, sleep: function () {
                        (r ? cancelAnimationFrame : clearTimeout)(e), h = 0, t = Z
                    }, lagSmoothing: function (e, t) {
                        c = e || 1 / 0, p = Math.min(t || 33, c)
                    }, fps: function (e) {
                        g = 1e3 / (e || 240), v = 1e3 * i.time + g
                    }, add: function (e, t, r) {
                        var n = t ? function (t, r, s, a) {
                            e(t, r, s, a), i.remove(n)
                        } : e;
                        return i.remove(e), _[r ? "unshift" : "push"](n), xt(), n
                    }, remove: function (e, t) {
                        ~(t = _.indexOf(e)) && _.splice(t, 1) && s >= t && s--
                    }, _listeners: _
                }
            }(), xt = function () {
                return !h && At.wake()
            }, St = {}, Et = /^[\d.\-M][\d.\-,\s]/, Mt = /["']/g, Ct = function (e) {
                for (var t, r, i, n = {}, s = e.substr(1, e.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++) r = s[o], t = o !== l - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, t), n[a] = isNaN(i) ? i.replace(Mt, "").trim() : +i, a = r.substr(t + 1).trim();
                return n
            }, Pt = function (e) {
                return function (t) {
                    return 1 - e(1 - t)
                }
            }, kt = function e(t, r) {
                for (var i, n = t._first; n;) n instanceof Ft ? e(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? e(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
            }, Ot = function (e, t) {
                return e && (P(e) ? e : St[e] || function (e) {
                    var t, r, i, n, s = (e + "").split("("), a = St[s[0]];
                    return a && s.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Ct(s[1])] : (t = e, r = t.indexOf("(") + 1, i = t.indexOf(")"), n = t.indexOf("(", r), t.substring(r, ~n && n < i ? t.indexOf(")", i + 1) : i)).split(",").map(we)) : St._CE && Et.test(e) ? St._CE("", e) : a
                }(e)) || t
            }, zt = function (e, t, r, i) {
                void 0 === r && (r = function (e) {
                    return 1 - t(1 - e)
                }), void 0 === i && (i = function (e) {
                    return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
                });
                var n, s = {easeIn: t, easeOut: r, easeInOut: i};
                return pe(e, (function (e) {
                    for (var t in St[e] = H[e] = s, St[n = e.toLowerCase()] = r, s) St[n + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = St[e + "." + t] = s[t]
                })), s
            }, It = function (e) {
                return function (t) {
                    return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
                }
            }, Lt = function e(t, r, i) {
                var n = r >= 1 ? r : 1, s = (i || (t ? .3 : .45)) / (r < 1 ? r : 1), a = s / T * (Math.asin(1 / n) || 0),
                    o = function (e) {
                        return 1 === e ? 1 : n * Math.pow(2, -10 * e) * M((e - a) * s) + 1
                    }, l = "out" === t ? o : "in" === t ? function (e) {
                        return 1 - o(1 - e)
                    } : It(o);
                return s = T / s, l.config = function (r, i) {
                    return e(t, r, i)
                }, l
            }, Dt = function e(t, r) {
                void 0 === r && (r = 1.70158);
                var i = function (e) {
                    return e ? --e * e * ((r + 1) * e + r) + 1 : 0
                }, n = "out" === t ? i : "in" === t ? function (e) {
                    return 1 - i(1 - e)
                } : It(i);
                return n.config = function (r) {
                    return e(t, r)
                }, n
            };
        pe("Linear,Quad,Cubic,Quart,Quint,Strong", (function (e, t) {
            var r = t < 5 ? t + 1 : t;
            zt(e + ",Power" + (r - 1), t ? function (e) {
                return Math.pow(e, r)
            } : function (e) {
                return e
            }, (function (e) {
                return 1 - Math.pow(1 - e, r)
            }), (function (e) {
                return e < .5 ? Math.pow(2 * e, r) / 2 : 1 - Math.pow(2 * (1 - e), r) / 2
            }))
        })), St.Linear.easeNone = St.none = St.Linear.easeIn, zt("Elastic", Lt("in"), Lt("out"), Lt()), f = 7.5625, g = 1 / (m = 2.75), zt("Bounce", (function (e) {
            return 1 - v(1 - e)
        }), v = function (e) {
            return e < g ? f * e * e : e < .7272727272727273 ? f * Math.pow(e - 1.5 / m, 2) + .75 : e < .9090909090909092 ? f * (e -= 2.25 / m) * e + .9375 : f * Math.pow(e - 2.625 / m, 2) + .984375
        }), zt("Expo", (function (e) {
            return e ? Math.pow(2, 10 * (e - 1)) : 0
        })), zt("Circ", (function (e) {
            return -(S(1 - e * e) - 1)
        })), zt("Sine", (function (e) {
            return 1 === e ? 1 : 1 - E(e * A)
        })), zt("Back", Dt("in"), Dt("out"), Dt()), St.SteppedEase = St.steps = H.SteppedEase = {
            config: function (e, t) {
                void 0 === e && (e = 1);
                var r = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0;
                return function (e) {
                    return ((i * $e(0, .99999999, e) | 0) + n) * r
                }
            }
        }, w.ease = St["quad.out"], pe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (e) {
            return le += e + "," + e + "Params,"
        }));
        var Bt = function (e, t) {
            this.id = x++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ce, this.set = t ? t.getSetter : er
        }, Gt = function () {
            function e(e) {
                this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, je(this, +e.duration, 1, 1), this.data = e.data, s && (this._ctx = s, s.data.push(this)), h || At.wake()
            }

            var t = e.prototype;
            return t.delay = function (e) {
                return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
            }, t.duration = function (e) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
            }, t.totalDuration = function (e) {
                return arguments.length ? (this._dirty = 0, je(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, t.totalTime = function (e, t) {
                if (xt(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (Be(this, e), !r._dp || r.parent || Ge(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Fe(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === b || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), _e(this, e, t)), this
            }, t.time = function (e, t) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + ze(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
            }, t.totalProgress = function (e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
            }, t.progress = function (e, t) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + ze(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, t.iteration = function (e, t) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (e - 1) * r, t) : this._repeat ? Ie(this._tTime, r) + 1 : 1
            }, t.timeScale = function (e, t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === e) return this;
                var r = this.parent && this._ts ? Le(this.parent._time, this) : this._tTime;
                return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime($e(-Math.abs(this._delay), this._tDur, r), !1 !== t), De(this), function (e) {
                    for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                    return e
                }(this)
            }, t.paused = function (e) {
                return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (xt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== b && (this._tTime -= b)))), this) : this._ps
            }, t.startTime = function (e) {
                if (arguments.length) {
                    this._start = e;
                    var t = this.parent || this._dp;
                    return t && (t._sort || !this.parent) && Fe(t, this, e - this._delay), this
                }
                return this._start
            }, t.endTime = function (e) {
                return this._start + (I(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, t.rawTime = function (e) {
                var t = this.parent || this._dp;
                return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Le(t.rawTime(e), this) : this._tTime : this._tTime
            }, t.revert = function (e) {
                void 0 === e && (e = ee);
                var t = n;
                return n = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), n = t, this
            }, t.globalTime = function (e) {
                for (var t = this, r = arguments.length ? e : t.rawTime(); t;) r = t._start + r / (Math.abs(t._ts) || 1), t = t._dp;
                return !this.parent && this._sat ? this._sat.globalTime(e) : r
            }, t.repeat = function (e) {
                return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, qe(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, t.repeatDelay = function (e) {
                if (arguments.length) {
                    var t = this._time;
                    return this._rDelay = e, qe(this), t ? this.time(t) : this
                }
                return this._rDelay
            }, t.yoyo = function (e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, t.seek = function (e, t) {
                return this.totalTime(We(this, e), I(t))
            }, t.restart = function (e, t) {
                return this.play().totalTime(e ? -this._delay : 0, I(t))
            }, t.play = function (e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, t.reverse = function (e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, t.pause = function (e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, t.resume = function () {
                return this.paused(!1)
            }, t.reversed = function (e) {
                return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
            }, t.invalidate = function () {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, t.isActive = function () {
                var e, t = this.parent || this._dp, r = this._start;
                return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= r && e < this.endTime(!0) - b))
            }, t.eventCallback = function (e, t, r) {
                var i = this.vars;
                return arguments.length > 1 ? (t ? (i[e] = t, r && (i[e + "Params"] = r), "onUpdate" === e && (this._onUpdate = t)) : delete i[e], this) : i[e]
            }, t.then = function (e) {
                var t = this;
                return new Promise((function (r) {
                    var i = P(e) ? e : ye, n = function () {
                        var e = t.then;
                        t.then = null, P(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), r(i), t.then = e
                    };
                    t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? n() : t._prom = n
                }))
            }, t.kill = function () {
                ct(this)
            }, e
        }();
        be(Gt.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Ft = function (r) {
            function i(t, i) {
                var n;
                return void 0 === t && (t = {}), (n = r.call(this, t) || this).labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = I(t.sortChildren), a && Fe(t.parent || a, e(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && Re(e(n), t.scrollTrigger), n
            }

            t(i, r);
            var s = i.prototype;
            return s.to = function (e, t, r) {
                return Xe(0, arguments, this), this
            }, s.from = function (e, t, r) {
                return Xe(1, arguments, this), this
            }, s.fromTo = function (e, t, r, i) {
                return Xe(2, arguments, this), this
            }, s.set = function (e, t, r) {
                return t.duration = 0, t.parent = this, Se(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new $t(e, t, We(this, r), 1), this
            }, s.call = function (e, t, r) {
                return Fe(this, $t.delayedCall(0, e, t), r)
            }, s.staggerTo = function (e, t, r, i, n, s, a) {
                return r.duration = t, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new $t(e, r, We(this, n)), this
            }, s.staggerFrom = function (e, t, r, i, n, s, a) {
                return r.runBackwards = 1, Se(r).immediateRender = I(r.immediateRender), this.staggerTo(e, t, r, i, n, s, a)
            }, s.staggerFromTo = function (e, t, r, i, n, s, a, o) {
                return i.startAt = r, Se(i).immediateRender = I(i.immediateRender), this.staggerTo(e, t, i, n, s, a, o)
            }, s.render = function (e, t, r) {
                var i, s, o, l, d, u, c, p, h, f, m, g, v = this._time,
                    _ = this._dirty ? this.totalDuration() : this._tDur, w = this._dur, y = e <= 0 ? 0 : fe(e),
                    T = this._zTime < 0 != e < 0 && (this._initted || !w);
                if (this !== a && y > _ && e >= 0 && (y = _), y !== this._tTime || r || T) {
                    if (v !== this._time && w && (y += this._time - v, e += this._time - v), i = y, h = this._start, u = !(p = this._ts), T && (w || (v = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
                        if (m = this._yoyo, d = w + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * d + e, t, r);
                        if (i = fe(y % d), y === _ ? (l = this._repeat, i = w) : ((l = ~~(y / d)) && l === y / d && (i = w, l--), i > w && (i = w)), f = Ie(this._tTime, d), !v && this._tTime && f !== l && this._tTime - f * d - this._dur <= 0 && (f = l), m && 1 & l && (i = w - i, g = 1), l !== f && !this._lock) {
                            var A = m && 1 & f, x = A === (m && 1 & l);
                            if (l < f && (A = !A), v = A ? 0 : y % w ? w : y, this._lock = 1, this.render(v || (g ? 0 : fe(l * d)), t, !w)._lock = 0, this._tTime = y, !t && this.parent && ut(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), v && v !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            if (w = this._dur, _ = this._tDur, x && (this._lock = 2, v = A ? w : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                            kt(this, g)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (e, t, r) {
                        var i;
                        if (r > t) for (i = e._first; i && i._start <= r;) {
                            if ("isPause" === i.data && i._start > t) return i;
                            i = i._next
                        } else for (i = e._last; i && i._start >= r;) {
                            if ("isPause" === i.data && i._start < t) return i;
                            i = i._prev
                        }
                    }(this, fe(v), fe(i)), c && (y -= i - (i = c._start))), this._tTime = y, this._time = i, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, v = 0), !v && i && !t && !l && (ut(this, "onStart"), this._tTime !== y)) return this;
                    if (i >= v && e >= 0) for (s = this._first; s;) {
                        if (o = s._next, (s._act || i >= s._start) && s._ts && c !== s) {
                            if (s.parent !== this) return this.render(e, t, r);
                            if (s.render(s._ts > 0 ? (i - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (i - s._start) * s._ts, t, r), i !== this._time || !this._ts && !u) {
                                c = 0, o && (y += this._zTime = -1e-8);
                                break
                            }
                        }
                        s = o
                    } else {
                        s = this._last;
                        for (var S = e < 0 ? e : i; s;) {
                            if (o = s._prev, (s._act || S <= s._end) && s._ts && c !== s) {
                                if (s.parent !== this) return this.render(e, t, r);
                                if (s.render(s._ts > 0 ? (S - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (S - s._start) * s._ts, t, r || n && (s._initted || s._startAt)), i !== this._time || !this._ts && !u) {
                                    c = 0, o && (y += this._zTime = S ? -1e-8 : b);
                                    break
                                }
                            }
                            s = o
                        }
                    }
                    if (c && !t && (this.pause(), c.render(i >= v ? 0 : -1e-8)._zTime = i >= v ? 1 : -1, this._ts)) return this._start = h, De(this), this.render(e, t, r);
                    this._onUpdate && !t && ut(this, "onUpdate", !0), (y === _ && this._tTime >= this.totalDuration() || !y && v) && (h !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((e || !w) && (y === _ && this._ts > 0 || !y && this._ts < 0) && Ce(this, 1), t || e < 0 && !v || !y && !v && _ || (ut(this, y === _ && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < _ && this.timeScale() > 0) && this._prom())))
                }
                return this
            }, s.add = function (e, t) {
                var r = this;
                if (k(t) || (t = We(this, t, e)), !(e instanceof Gt)) {
                    if (G(e)) return e.forEach((function (e) {
                        return r.add(e, t)
                    })), this;
                    if (C(e)) return this.addLabel(e, t);
                    if (!P(e)) return this;
                    e = $t.delayedCall(0, e)
                }
                return this !== e ? Fe(this, e, t) : this
            }, s.getChildren = function (e, t, r, i) {
                void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === i && (i = -y);
                for (var n = [], s = this._first; s;) s._start >= i && (s instanceof $t ? t && n.push(s) : (r && n.push(s), e && n.push.apply(n, s.getChildren(!0, t, r)))), s = s._next;
                return n
            }, s.getById = function (e) {
                for (var t = this.getChildren(1, 1, 1), r = t.length; r--;) if (t[r].vars.id === e) return t[r]
            }, s.remove = function (e) {
                return C(e) ? this.removeLabel(e) : P(e) ? this.killTweensOf(e) : (Me(this, e), e === this._recent && (this._recent = this._last), Pe(this))
            }, s.totalTime = function (e, t) {
                return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = fe(At.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), r.prototype.totalTime.call(this, e, t), this._forcing = 0, this) : this._tTime
            }, s.addLabel = function (e, t) {
                return this.labels[e] = We(this, t), this
            }, s.removeLabel = function (e) {
                return delete this.labels[e], this
            }, s.addPause = function (e, t, r) {
                var i = $t.delayedCall(0, t || Z, r);
                return i.data = "isPause", this._hasPause = 1, Fe(this, i, We(this, e))
            }, s.removePause = function (e) {
                var t = this._first;
                for (e = We(this, e); t;) t._start === e && "isPause" === t.data && Ce(t), t = t._next
            }, s.killTweensOf = function (e, t, r) {
                for (var i = this.getTweensOf(e, r), n = i.length; n--;) Rt !== i[n] && i[n].kill(e, t);
                return this
            }, s.getTweensOf = function (e, t) {
                for (var r, i = [], n = Je(e), s = this._first, a = k(t); s;) s instanceof $t ? ge(s._targets, n) && (a ? (!Rt || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, t)).length && i.push.apply(i, r), s = s._next;
                return i
            }, s.tweenTo = function (e, t) {
                t = t || {};
                var r, i = this, n = We(i, e), s = t, a = s.startAt, o = s.onStart, l = s.onStartParams,
                    d = s.immediateRender, u = $t.to(i, be({
                        ease: t.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: n,
                        overwrite: "auto",
                        duration: t.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || b,
                        onStart: function () {
                            if (i.pause(), !r) {
                                var e = t.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                                u._dur !== e && je(u, e, 0, 1).render(u._time, !0, !0), r = 1
                            }
                            o && o.apply(u, l || [])
                        }
                    }, t));
                return d ? u.render(0) : u
            }, s.tweenFromTo = function (e, t, r) {
                return this.tweenTo(t, be({startAt: {time: We(this, e)}}, r))
            }, s.recent = function () {
                return this._recent
            }, s.nextLabel = function (e) {
                return void 0 === e && (e = this._time), dt(this, We(this, e))
            }, s.previousLabel = function (e) {
                return void 0 === e && (e = this._time), dt(this, We(this, e), 1)
            }, s.currentLabel = function (e) {
                return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + b)
            }, s.shiftChildren = function (e, t, r) {
                void 0 === r && (r = 0);
                for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += e, n._end += e), n = n._next;
                if (t) for (i in s) s[i] >= r && (s[i] += e);
                return Pe(this)
            }, s.invalidate = function (e) {
                var t = this._first;
                for (this._lock = 0; t;) t.invalidate(e), t = t._next;
                return r.prototype.invalidate.call(this, e)
            }, s.clear = function (e) {
                void 0 === e && (e = !0);
                for (var t, r = this._first; r;) t = r._next, this.remove(r), r = t;
                return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), Pe(this)
            }, s.totalDuration = function (e) {
                var t, r, i, n = 0, s = this, o = s._last, l = y;
                if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -e : e));
                if (s._dirty) {
                    for (i = s.parent; o;) t = o._prev, o._dirty && o.totalDuration(), (r = o._start) > l && s._sort && o._ts && !s._lock ? (s._lock = 1, Fe(s, o, r - o._delay, 1)._lock = 0) : l = r, r < 0 && o._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), l = 0), o._end > n && o._ts && (n = o._end), o = t;
                    je(s, s === a && s._time > n ? s._time : n, 1, 1), s._dirty = 0
                }
                return s._tDur
            }, i.updateRoot = function (e) {
                if (a._ts && (_e(a, Le(e, a)), c = At.frame), At.frame >= ae) {
                    ae += _.autoSleep || 120;
                    var t = a._first;
                    if ((!t || !t._ts) && _.autoSleep && At._listeners.length < 2) {
                        for (; t && !t._ts;) t = t._next;
                        t || At.sleep()
                    }
                }
            }, i
        }(Gt);
        be(Ft.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
        var Rt, Nt, Yt = function (e, t, r, i, n, s, a) {
            var o, l, d, u, c, p, h, f, m = new dr(this._pt, e, t, 0, 1, ir, null, n), g = 0, v = 0;
            for (m.b = r, m.e = i, r += "", (h = ~(i += "").indexOf("random(")) && (i = ot(i)), s && (s(f = [r, i], e, t), r = f[0], i = f[1]), l = r.match(Y) || []; o = Y.exec(i);) u = o[0], c = i.substring(g, o.index), d ? d = (d + 1) % 5 : "rgba(" === c.substr(-5) && (d = 1), u !== l[v++] && (p = parseFloat(l[v - 1]) || 0, m._pt = {
                _next: m._pt,
                p: c || 1 === v ? c : ",",
                s: p,
                c: "=" === u.charAt(1) ? me(p, u) - p : parseFloat(u) - p,
                m: d && d < 4 ? Math.round : 0
            }, g = Y.lastIndex);
            return m.c = g < i.length ? i.substring(g, i.length) : "", m.fp = a, (V.test(i) || h) && (m.e = 0), this._pt = m, m
        }, Vt = function (e, t, r, i, n, s, a, o, l, d) {
            P(i) && (i = i(n || 0, e, s));
            var u, c = e[t],
                p = "get" !== r ? r : P(c) ? l ? e[t.indexOf("set") || !P(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : c,
                h = P(c) ? l ? Kt : Zt : Qt;
            if (C(i) && (~i.indexOf("random(") && (i = ot(i)), "=" === i.charAt(1) && ((u = me(p, i) + (Qe(p) || 0)) || 0 === u) && (i = u)), !d || p !== i || Nt) return isNaN(p * i) || "" === i ? (!c && !(t in e) && U(t, i), Yt.call(this, e, t, p, i, h, o || _.stringFilter, l)) : (u = new dr(this._pt, e, t, +p || 0, i - (p || 0), "boolean" == typeof c ? rr : tr, 0, h), l && (u.fp = l), a && u.modifier(a, this, e), this._pt = u)
        }, jt = function (e, t, r, i, n, s) {
            var a, o, l, d;
            if (ne[e] && !1 !== (a = new ne[e]).init(n, a.rawVars ? t[e] : function (e, t, r, i, n) {
                if (P(e) && (e = Wt(e, n, t, r, i)), !z(e) || e.style && e.nodeType || G(e) || B(e)) return C(e) ? Wt(e, n, t, r, i) : e;
                var s, a = {};
                for (s in e) a[s] = Wt(e[s], n, t, r, i);
                return a
            }(t[e], i, n, s, r), r, i, s) && (r._pt = o = new dr(r._pt, n, e, 0, 1, a.render, a, 0, a.priority), r !== p)) for (l = r._ptLookup[r._targets.indexOf(n)], d = a._props.length; d--;) l[a._props[d]] = o;
            return a
        }, qt = function e(t, r, s) {
            var o, l, d, u, c, p, h, f, m, g, v, _, T, A = t.vars, x = A.ease, S = A.startAt, E = A.immediateRender,
                M = A.lazy, C = A.onUpdate, P = A.runBackwards, k = A.yoyoEase, O = A.keyframes, z = A.autoRevert,
                L = t._dur, D = t._startAt, B = t._targets, G = t.parent,
                F = G && "nested" === G.data ? G.vars.targets : B, R = "auto" === t._overwrite && !i, N = t.timeline;
            if (N && (!O || !x) && (x = "none"), t._ease = Ot(x, w.ease), t._yEase = k ? Pt(Ot(!0 === k ? x : k, w.ease)) : 0, k && t._yoyo && !t._repeat && (k = t._yEase, t._yEase = t._ease, t._ease = k), t._from = !N && !!A.runBackwards, !N || O && !A.stagger) {
                if (_ = (f = B[0] ? ue(B[0]).harness : 0) && A[f.prop], o = xe(A, te), D && (D._zTime < 0 && D.progress(1), r < 0 && P && E && !z ? D.render(-1, !0) : D.revert(P && L ? J : K), D._lazy = 0), S) {
                    if (Ce(t._startAt = $t.set(B, be({
                        data: "isStart",
                        overwrite: !1,
                        parent: G,
                        immediateRender: !0,
                        lazy: !D && I(M),
                        startAt: null,
                        delay: 0,
                        onUpdate: C && function () {
                            return ut(t, "onUpdate")
                        },
                        stagger: 0
                    }, S))), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (n || !E && !z) && t._startAt.revert(J), E && L && r <= 0 && s <= 0) return void (r && (t._zTime = r))
                } else if (P && L && !D) if (r && (E = !1), d = be({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: E && !D && I(M),
                    immediateRender: E,
                    stagger: 0,
                    parent: G
                }, o), _ && (d[f.prop] = _), Ce(t._startAt = $t.set(B, d)), t._startAt._dp = 0, t._startAt._sat = t, r < 0 && (n ? t._startAt.revert(J) : t._startAt.render(-1, !0)), t._zTime = r, E) {
                    if (!r) return
                } else e(t._startAt, b, b);
                for (t._pt = t._ptCache = 0, M = L && I(M) || M && !L, l = 0; l < B.length; l++) {
                    if (h = (c = B[l])._gsap || de(B)[l]._gsap, t._ptLookup[l] = g = {}, ie[h.id] && re.length && ve(), v = F === B ? l : F.indexOf(c), f && !1 !== (m = new f).init(c, _ || o, t, v, F) && (t._pt = u = new dr(t._pt, c, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach((function (e) {
                        g[e] = u
                    })), m.priority && (p = 1)), !f || _) for (d in o) ne[d] && (m = jt(d, o, t, v, c, F)) ? m.priority && (p = 1) : g[d] = u = Vt.call(t, c, d, "get", o[d], v, F, 0, A.stringFilter);
                    t._op && t._op[l] && t.kill(c, t._op[l]), R && t._pt && (Rt = t, a.killTweensOf(c, g, t.globalTime(r)), T = !t.parent, Rt = 0), t._pt && M && (ie[h.id] = 1)
                }
                p && lr(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = C, t._initted = (!t._op || t._pt) && !T, O && r <= 0 && N.render(y, !0, !0)
        }, Ht = function (e, t, r, i) {
            var n, s, a = t.ease || i || "power1.inOut";
            if (G(t)) s = r[e] || (r[e] = []), t.forEach((function (e, r) {
                return s.push({t: r / (t.length - 1) * 100, v: e, e: a})
            })); else for (n in t) s = r[n] || (r[n] = []), "ease" === n || s.push({t: parseFloat(e), v: t[n], e: a})
        }, Wt = function (e, t, r, i, n) {
            return P(e) ? e.call(t, r, i, n) : C(e) && ~e.indexOf("random(") ? ot(e) : e
        }, Xt = le + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ut = {};
        pe(Xt + ",id,stagger,delay,duration,paused,scrollTrigger", (function (e) {
            return Ut[e] = 1
        }));
        var $t = function (r) {
            function s(t, n, s, o) {
                var l;
                "number" == typeof n && (s.duration = n, n = s, s = null);
                var d, u, c, p, h, f, m, g, v = (l = r.call(this, o ? n : Se(n)) || this).vars, w = v.duration,
                    y = v.delay, b = v.immediateRender, T = v.stagger, A = v.overwrite, x = v.keyframes, S = v.defaults,
                    E = v.scrollTrigger, M = v.yoyoEase, C = n.parent || a,
                    P = (G(t) || B(t) ? k(t[0]) : "length" in n) ? [t] : Je(t);
                if (l._targets = P.length ? de(P) : $("GSAP target " + t + " not found. https://gsap.com", !_.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = A, x || T || D(w) || D(y)) {
                    if (n = l.vars, (d = l.timeline = new Ft({
                        data: "nested",
                        defaults: S || {},
                        targets: C && "nested" === C.data ? C.vars.targets : P
                    })).kill(), d.parent = d._dp = e(l), d._start = 0, T || D(w) || D(y)) {
                        if (p = P.length, m = T && rt(T), z(T)) for (h in T) ~Xt.indexOf(h) && (g || (g = {}), g[h] = T[h]);
                        for (u = 0; u < p; u++) (c = xe(n, Ut)).stagger = 0, M && (c.yoyoEase = M), g && Te(c, g), f = P[u], c.duration = +Wt(w, e(l), u, f, P), c.delay = (+Wt(y, e(l), u, f, P) || 0) - l._delay, !T && 1 === p && c.delay && (l._delay = y = c.delay, l._start += y, c.delay = 0), d.to(f, c, m ? m(u, f, P) : 0), d._ease = St.none;
                        d.duration() ? w = y = 0 : l.timeline = 0
                    } else if (x) {
                        Se(be(d.vars.defaults, {ease: "none"})), d._ease = Ot(x.ease || n.ease || "none");
                        var O, L, F, R = 0;
                        if (G(x)) x.forEach((function (e) {
                            return d.to(P, e, ">")
                        })), d.duration(); else {
                            for (h in c = {}, x) "ease" === h || "easeEach" === h || Ht(h, x[h], c, x.easeEach);
                            for (h in c) for (O = c[h].sort((function (e, t) {
                                return e.t - t.t
                            })), R = 0, u = 0; u < O.length; u++) (F = {
                                ease: (L = O[u]).e,
                                duration: (L.t - (u ? O[u - 1].t : 0)) / 100 * w
                            })[h] = L.v, d.to(P, F, R), R += F.duration;
                            d.duration() < w && d.to({}, {duration: w - d.duration()})
                        }
                    }
                    w || l.duration(w = d.duration())
                } else l.timeline = 0;
                return !0 !== A || i || (Rt = e(l), a.killTweensOf(P), Rt = 0), Fe(C, e(l), s), n.reversed && l.reverse(), n.paused && l.paused(!0), (b || !w && !x && l._start === fe(C._time) && I(b) && Oe(e(l)) && "nested" !== C.data) && (l._tTime = -1e-8, l.render(Math.max(0, -y) || 0)), E && Re(e(l), E), l
            }

            t(s, r);
            var o = s.prototype;
            return o.render = function (e, t, r) {
                var i, s, a, o, l, d, u, c, p, h = this._time, f = this._tDur, m = this._dur, g = e < 0,
                    v = e > f - b && !g ? f : e < b ? 0 : e;
                if (m) {
                    if (v !== this._tTime || !e || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
                        if (i = v, c = this.timeline, this._repeat) {
                            if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + e, t, r);
                            if (i = fe(v % o), v === f ? (a = this._repeat, i = m) : ((a = ~~(v / o)) && a === fe(v / o) && (i = m, a--), i > m && (i = m)), (d = this._yoyo && 1 & a) && (p = this._yEase, i = m - i), l = Ie(this._tTime, o), i === h && !r && this._initted && a === l) return this._tTime = v, this;
                            a !== l && (c && this._yEase && kt(c, d), this.vars.repeatRefresh && !d && !this._lock && this._time !== o && this._initted && (this._lock = r = 1, this.render(fe(o * a), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Ne(this, g ? e : i, r, t, v)) return this._tTime = 0, this;
                            if (!(h === this._time || r && this.vars.repeatRefresh && a !== l)) return this;
                            if (m !== this._dur) return this.render(e, t, r)
                        }
                        if (this._tTime = v, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (p || this._ease)(i / m), this._from && (this.ratio = u = 1 - u), i && !h && !t && !a && (ut(this, "onStart"), this._tTime !== v)) return this;
                        for (s = this._pt; s;) s.r(u, s.d), s = s._next;
                        c && c.render(e < 0 ? e : c._dur * c._ease(i / this._dur), t, r) || this._startAt && (this._zTime = e), this._onUpdate && !t && (g && ke(this, e, 0, r), ut(this, "onUpdate")), this._repeat && a !== l && this.vars.onRepeat && !t && this.parent && ut(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (g && !this._onUpdate && ke(this, e, 0, !0), (e || !m) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Ce(this, 1), t || g && !h || !(v || h || d) || (ut(this, v === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < f && this.timeScale() > 0) && this._prom()))
                    }
                } else !function (e, t, r, i) {
                    var s, a, o, l = e.ratio,
                        d = t < 0 || !t && (!e._start && Ye(e) && (e._initted || !Ve(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ve(e)) ? 0 : 1,
                        u = e._rDelay, c = 0;
                    if (u && e._repeat && (c = $e(0, e._tDur, t), a = Ie(c, u), e._yoyo && 1 & a && (d = 1 - d), a !== Ie(e._tTime, u) && (l = 1 - d, e.vars.repeatRefresh && e._initted && e.invalidate())), d !== l || n || i || e._zTime === b || !t && e._zTime) {
                        if (!e._initted && Ne(e, t, i, r, c)) return;
                        for (o = e._zTime, e._zTime = t || (r ? b : 0), r || (r = t && !o), e.ratio = d, e._from && (d = 1 - d), e._time = 0, e._tTime = c, s = e._pt; s;) s.r(d, s.d), s = s._next;
                        t < 0 && ke(e, t, 0, !0), e._onUpdate && !r && ut(e, "onUpdate"), c && e._repeat && !r && e.parent && ut(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === d && (d && Ce(e, 1), r || n || (ut(e, d ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                    } else e._zTime || (e._zTime = t)
                }(this, e, t, r);
                return this
            }, o.targets = function () {
                return this._targets
            }, o.invalidate = function (e) {
                return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), r.prototype.invalidate.call(this, e)
            }, o.resetTo = function (e, t, r, i, n) {
                h || At.wake(), this._ts || this.play();
                var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || qt(this, s), function (e, t, r, i, n, s, a, o) {
                    var l, d, u, c, p = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                    if (!p) for (p = e._ptCache[t] = [], u = e._ptLookup, c = e._targets.length; c--;) {
                        if ((l = u[c][t]) && l.d && l.d._pt) for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                        if (!l) return Nt = 1, e.vars[t] = "+=0", qt(e, a), Nt = 0, o ? $(t + " not eligible for reset") : 1;
                        p.push(l)
                    }
                    for (c = p.length; c--;) (l = (d = p[c])._pt || d).s = !i && 0 !== i || n ? l.s + (i || 0) + s * l.c : i, l.c = r - l.s, d.e && (d.e = he(r) + Qe(d.e)), d.b && (d.b = l.s + Qe(d.b))
                }(this, e, t, r, i, this._ease(s / this._dur), s, n) ? this.resetTo(e, t, r, i, 1) : (Be(this, 0), this.parent || Ee(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
            }, o.kill = function (e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? ct(this) : this;
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, Rt && !0 !== Rt.vars.overwrite)._first || ct(this), this.parent && r !== this.timeline.totalDuration() && je(this, this._dur * this.timeline._tDur / r, 0, 1), this
                }
                var i, n, s, a, o, l, d, u = this._targets, c = e ? Je(e) : u, p = this._ptLookup, h = this._pt;
                if ((!t || "all" === t) && function (e, t) {
                    for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r];) ;
                    return r < 0
                }(u, c)) return "all" === t && (this._pt = 0), ct(this);
                for (i = this._op = this._op || [], "all" !== t && (C(t) && (o = {}, pe(t, (function (e) {
                    return o[e] = 1
                })), t = o), t = function (e, t) {
                    var r, i, n, s, a = e[0] ? ue(e[0]).harness : 0, o = a && a.aliases;
                    if (!o) return t;
                    for (i in r = Te({}, t), o) if (i in r) for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
                    return r
                }(u, t)), d = u.length; d--;) if (~c.indexOf(u[d])) for (o in n = p[d], "all" === t ? (i[d] = t, a = n, s = {}) : (s = i[d] = i[d] || {}, a = t), a) (l = n && n[o]) && ("kill" in l.d && !0 !== l.d.kill(o) || Me(this, l, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
                return this._initted && !this._pt && h && ct(this), this
            }, s.to = function (e, t) {
                return new s(e, t, arguments[2])
            }, s.from = function (e, t) {
                return Xe(1, arguments)
            }, s.delayedCall = function (e, t, r, i) {
                return new s(t, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: e,
                    onComplete: t,
                    onReverseComplete: t,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, s.fromTo = function (e, t, r) {
                return Xe(2, arguments)
            }, s.set = function (e, t) {
                return t.duration = 0, t.repeatDelay || (t.repeat = 0), new s(e, t)
            }, s.killTweensOf = function (e, t, r) {
                return a.killTweensOf(e, t, r)
            }, s
        }(Gt);
        be($t.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }), pe("staggerTo,staggerFrom,staggerFromTo", (function (e) {
            $t[e] = function () {
                var t = new Ft, r = Ze.call(arguments, 0);
                return r.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, r)
            }
        }));
        var Qt = function (e, t, r) {
            return e[t] = r
        }, Zt = function (e, t, r) {
            return e[t](r)
        }, Kt = function (e, t, r, i) {
            return e[t](i.fp, r)
        }, Jt = function (e, t, r) {
            return e.setAttribute(t, r)
        }, er = function (e, t) {
            return P(e[t]) ? Zt : O(e[t]) && e.setAttribute ? Jt : Qt
        }, tr = function (e, t) {
            return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        }, rr = function (e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        }, ir = function (e, t) {
            var r = t._pt, i = "";
            if (!e && t.b) i = t.b; else if (1 === e && t.e) i = t.e; else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round(1e4 * (r.s + r.c * e)) / 1e4) + i, r = r._next;
                i += t.c
            }
            t.set(t.t, t.p, i, t)
        }, nr = function (e, t) {
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next
        }, sr = function (e, t, r, i) {
            for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(e, t, r), s = n
        }, ar = function (e) {
            for (var t, r, i = this._pt; i;) r = i._next, i.p === e && !i.op || i.op === e ? Me(this, i, "_pt") : i.dep || (t = 1), i = r;
            return !t
        }, or = function (e, t, r, i) {
            i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
        }, lr = function (e) {
            for (var t, r, i, n, s = e._pt; s;) {
                for (t = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : n) ? s._prev._next = s : i = s, (s._next = r) ? r._prev = s : n = s, s = t
            }
            e._pt = i
        }, dr = function () {
            function e(e, t, r, i, n, s, a, o, l) {
                this.t = t, this.s = i, this.c = n, this.p = r, this.r = s || tr, this.d = a || this, this.set = o || Qt, this.pr = l || 0, this._next = e, e && (e._prev = this)
            }

            return e.prototype.modifier = function (e, t, r) {
                this.mSet = this.mSet || this.set, this.set = or, this.m = e, this.mt = r, this.tween = t
            }, e
        }();
        pe(le + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (e) {
            return te[e] = 1
        })), H.TweenMax = H.TweenLite = $t, H.TimelineLite = H.TimelineMax = Ft, a = new Ft({
            sortChildren: !1,
            defaults: w,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }), _.stringFilter = Tt;
        var ur = [], cr = {}, pr = [], hr = 0, fr = 0, mr = function (e) {
            return (cr[e] || pr).map((function (e) {
                return e()
            }))
        }, gr = function () {
            var e = Date.now(), t = [];
            e - hr > 2 && (mr("matchMediaInit"), ur.forEach((function (e) {
                var r, i, n, s, a = e.queries, l = e.conditions;
                for (i in a) (r = o.matchMedia(a[i]).matches) && (n = 1), r !== l[i] && (l[i] = r, s = 1);
                s && (e.revert(), n && t.push(e))
            })), mr("matchMediaRevert"), t.forEach((function (e) {
                return e.onMatch(e, (function (t) {
                    return e.add(null, t)
                }))
            })), hr = e, mr("matchMedia"))
        }, vr = function () {
            function e(e, t) {
                this.selector = t && et(t), this.data = [], this._r = [], this.isReverted = !1, this.id = fr++, e && this.add(e)
            }

            var t = e.prototype;
            return t.add = function (e, t, r) {
                P(e) && (r = t, t = e, e = P);
                var i = this, n = function () {
                    var e, n = s, a = i.selector;
                    return n && n !== i && n.data.push(i), r && (i.selector = et(r)), s = i, e = t.apply(i, arguments), P(e) && i._r.push(e), s = n, i.selector = a, i.isReverted = !1, e
                };
                return i.last = n, e === P ? n(i, (function (e) {
                    return i.add(null, e)
                })) : e ? i[e] = n : n
            }, t.ignore = function (e) {
                var t = s;
                s = null, e(this), s = t
            }, t.getTweens = function () {
                var t = [];
                return this.data.forEach((function (r) {
                    return r instanceof e ? t.push.apply(t, r.getTweens()) : r instanceof $t && !(r.parent && "nested" === r.parent.data) && t.push(r)
                })), t
            }, t.clear = function () {
                this._r.length = this.data.length = 0
            }, t.kill = function (e, t) {
                var r = this;
                if (e ? function () {
                    for (var t, i = r.getTweens(), n = r.data.length; n--;) "isFlip" === (t = r.data[n]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function (e) {
                        return i.splice(i.indexOf(e), 1)
                    })));
                    for (i.map((function (e) {
                        return {
                            g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                            t: e
                        }
                    })).sort((function (e, t) {
                        return t.g - e.g || -1 / 0
                    })).forEach((function (t) {
                        return t.t.revert(e)
                    })), n = r.data.length; n--;) (t = r.data[n]) instanceof Ft ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof $t) && t.revert && t.revert(e);
                    r._r.forEach((function (t) {
                        return t(e, r)
                    })), r.isReverted = !0
                }() : this.data.forEach((function (e) {
                    return e.kill && e.kill()
                })), this.clear(), t) for (var i = ur.length; i--;) ur[i].id === this.id && ur.splice(i, 1)
            }, t.revert = function (e) {
                this.kill(e || {})
            }, e
        }(), _r = function () {
            function e(e) {
                this.contexts = [], this.scope = e, s && s.data.push(this)
            }

            var t = e.prototype;
            return t.add = function (e, t, r) {
                z(e) || (e = {matches: e});
                var i, n, a, l = new vr(0, r || this.scope), d = l.conditions = {};
                for (n in s && !l.selector && (l.selector = s.selector), this.contexts.push(l), t = l.add("onMatch", t), l.queries = e, e) "all" === n ? a = 1 : (i = o.matchMedia(e[n])) && (ur.indexOf(l) < 0 && ur.push(l), (d[n] = i.matches) && (a = 1), i.addListener ? i.addListener(gr) : i.addEventListener("change", gr));
                return a && t(l, (function (e) {
                    return l.add(null, e)
                })), this
            }, t.revert = function (e) {
                this.kill(e || {})
            }, t.kill = function (e) {
                this.contexts.forEach((function (t) {
                    return t.kill(e, !0)
                }))
            }, e
        }(), wr = {
            registerPlugin: function () {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                t.forEach((function (e) {
                    return ht(e)
                }))
            },
            timeline: function (e) {
                return new Ft(e)
            },
            getTweensOf: function (e, t) {
                return a.getTweensOf(e, t)
            },
            getProperty: function (e, t, r, i) {
                C(e) && (e = Je(e)[0]);
                var n = ue(e || {}).get, s = r ? ye : we;
                return "native" === r && (r = ""), e ? t ? s((ne[t] && ne[t].get || n)(e, t, r, i)) : function (t, r, i) {
                    return s((ne[t] && ne[t].get || n)(e, t, r, i))
                } : e
            },
            quickSetter: function (e, t, r) {
                if ((e = Je(e)).length > 1) {
                    var i = e.map((function (e) {
                        return Tr.quickSetter(e, t, r)
                    })), n = i.length;
                    return function (e) {
                        for (var t = n; t--;) i[t](e)
                    }
                }
                e = e[0] || {};
                var s = ne[t], a = ue(e), o = a.harness && (a.harness.aliases || {})[t] || t, l = s ? function (t) {
                    var i = new s;
                    p._pt = 0, i.init(e, r ? t + r : t, p, 0, [e]), i.render(1, i), p._pt && nr(1, p)
                } : a.set(e, o);
                return s ? l : function (t) {
                    return l(e, o, r ? t + r : t, a, 1)
                }
            },
            quickTo: function (e, t, r) {
                var i, n = Tr.to(e, Te(((i = {})[t] = "+=0.1", i.paused = !0, i), r || {})), s = function (e, r, i) {
                    return n.resetTo(t, e, r, i)
                };
                return s.tween = n, s
            },
            isTweening: function (e) {
                return a.getTweensOf(e, !0).length > 0
            },
            defaults: function (e) {
                return e && e.ease && (e.ease = Ot(e.ease, w.ease)), Ae(w, e || {})
            },
            config: function (e) {
                return Ae(_, e || {})
            },
            registerEffect: function (e) {
                var t = e.name, r = e.effect, i = e.plugins, n = e.defaults, s = e.extendTimeline;
                (i || "").split(",").forEach((function (e) {
                    return e && !ne[e] && !H[e] && $(t + " effect requires " + e + " plugin.")
                })), se[t] = function (e, t, i) {
                    return r(Je(e), be(t || {}, n), i)
                }, s && (Ft.prototype[t] = function (e, r, i) {
                    return this.add(se[t](e, z(r) ? r : (i = r) && {}, this), i)
                })
            },
            registerEase: function (e, t) {
                St[e] = Ot(t)
            },
            parseEase: function (e, t) {
                return arguments.length ? Ot(e, t) : St
            },
            getById: function (e) {
                return a.getById(e)
            },
            exportRoot: function (e, t) {
                void 0 === e && (e = {});
                var r, i, n = new Ft(e);
                for (n.smoothChildTiming = I(e.smoothChildTiming), a.remove(n), n._dp = 0, n._time = n._tTime = a._time, r = a._first; r;) i = r._next, !t && !r._dur && r instanceof $t && r.vars.onComplete === r._targets[0] || Fe(n, r, r._start - r._delay), r = i;
                return Fe(a, n, 0), n
            },
            context: function (e, t) {
                return e ? new vr(e, t) : s
            },
            matchMedia: function (e) {
                return new _r(e)
            },
            matchMediaRefresh: function () {
                return ur.forEach((function (e) {
                    var t, r, i = e.conditions;
                    for (r in i) i[r] && (i[r] = !1, t = 1);
                    t && e.revert()
                })) || gr()
            },
            addEventListener: function (e, t) {
                var r = cr[e] || (cr[e] = []);
                ~r.indexOf(t) || r.push(t)
            },
            removeEventListener: function (e, t) {
                var r = cr[e], i = r && r.indexOf(t);
                i >= 0 && r.splice(i, 1)
            },
            utils: {
                wrap: function e(t, r, i) {
                    var n = r - t;
                    return G(t) ? at(t, e(0, t.length), r) : Ue(i, (function (e) {
                        return (n + (e - t) % n) % n + t
                    }))
                }, wrapYoyo: function e(t, r, i) {
                    var n = r - t, s = 2 * n;
                    return G(t) ? at(t, e(0, t.length - 1), r) : Ue(i, (function (e) {
                        return t + ((e = (s + (e - t) % s) % s || 0) > n ? s - e : e)
                    }))
                }, distribute: rt, random: st, snap: nt, normalize: function (e, t, r) {
                    return lt(e, t, 0, 1, r)
                }, getUnit: Qe, clamp: function (e, t, r) {
                    return Ue(r, (function (r) {
                        return $e(e, t, r)
                    }))
                }, splitColor: vt, toArray: Je, selector: et, mapRange: lt, pipe: function () {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return function (e) {
                        return t.reduce((function (e, t) {
                            return t(e)
                        }), e)
                    }
                }, unitize: function (e, t) {
                    return function (r) {
                        return e(parseFloat(r)) + (t || Qe(r))
                    }
                }, interpolate: function e(t, r, i, n) {
                    var s = isNaN(t + r) ? 0 : function (e) {
                        return (1 - e) * t + e * r
                    };
                    if (!s) {
                        var a, o, l, d, u, c = C(t), p = {};
                        if (!0 === i && (n = 1) && (i = null), c) t = {p: t}, r = {p: r}; else if (G(t) && !G(r)) {
                            for (l = [], d = t.length, u = d - 2, o = 1; o < d; o++) l.push(e(t[o - 1], t[o]));
                            d--, s = function (e) {
                                e *= d;
                                var t = Math.min(u, ~~e);
                                return l[t](e - t)
                            }, i = r
                        } else n || (t = Te(G(t) ? [] : {}, t));
                        if (!l) {
                            for (a in r) Vt.call(p, t, a, "get", r[a]);
                            s = function (e) {
                                return nr(e, p) || (c ? t.p : t)
                            }
                        }
                    }
                    return Ue(i, s)
                }, shuffle: tt
            },
            install: X,
            effects: se,
            ticker: At,
            updateRoot: Ft.updateRoot,
            plugins: ne,
            globalTimeline: a,
            core: {
                PropTween: dr,
                globals: Q,
                Tween: $t,
                Timeline: Ft,
                Animation: Gt,
                getCache: ue,
                _removeLinkedListItem: Me,
                reverting: function () {
                    return n
                },
                context: function (e) {
                    return e && s && (s.data.push(e), e._ctx = s), s
                },
                suppressOverwrites: function (e) {
                    return i = e
                }
            }
        };
        pe("to,from,fromTo,delayedCall,set,killTweensOf", (function (e) {
            return wr[e] = $t[e]
        })), At.add(Ft.updateRoot), p = wr.to({}, {duration: 0});
        var yr = function (e, t) {
            for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
            return r
        }, br = function (e, t) {
            return {
                name: e, rawVars: 1, init: function (e, r, i) {
                    i._onInit = function (e) {
                        var i, n;
                        if (C(r) && (i = {}, pe(r, (function (e) {
                            return i[e] = 1
                        })), r = i), t) {
                            for (n in i = {}, r) i[n] = t(r[n]);
                            r = i
                        }
                        !function (e, t) {
                            var r, i, n, s = e._targets;
                            for (r in t) for (i = s.length; i--;) (n = e._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = yr(n, r)), n && n.modifier && n.modifier(t[r], e, s[i], r))
                        }(e, r)
                    }
                }
            }
        }, Tr = wr.registerPlugin({
            name: "attr", init: function (e, t, r, i, n) {
                var s, a, o;
                for (s in this.tween = r, t) o = e.getAttribute(s) || "", (a = this.add(e, "setAttribute", (o || 0) + "", t[s], i, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
            }, render: function (e, t) {
                for (var r = t._pt; r;) n ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
            }
        }, {
            name: "endArray", init: function (e, t) {
                for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
            }
        }, br("roundProps", it), br("modifiers"), br("snap", nt)) || wr;
        $t.version = Ft.version = Tr.version = "3.12.5", u = 1, L() && xt(), St.Power0, St.Power1, St.Power2, St.Power3, St.Power4, St.Linear, St.Quad, St.Cubic, St.Quart, St.Quint, St.Strong, St.Elastic, St.Back, St.SteppedEase, St.Bounce, St.Sine, St.Expo, St.Circ;
        var Ar, xr, Sr, Er, Mr, Cr, Pr, kr, Or = {}, zr = 180 / Math.PI, Ir = Math.PI / 180, Lr = Math.atan2,
            Dr = /([A-Z])/g, Br = /(left|right|width|margin|padding|x)/i, Gr = /[\s,\(]\S/,
            Fr = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, Rr = function (e, t) {
                return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            }, Nr = function (e, t) {
                return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
            }, Yr = function (e, t) {
                return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
            }, Vr = function (e, t) {
                var r = t.s + t.c * e;
                t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
            }, jr = function (e, t) {
                return t.set(t.t, t.p, e ? t.e : t.b, t)
            }, qr = function (e, t) {
                return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
            }, Hr = function (e, t, r) {
                return e.style[t] = r
            }, Wr = function (e, t, r) {
                return e.style.setProperty(t, r)
            }, Xr = function (e, t, r) {
                return e._gsap[t] = r
            }, Ur = function (e, t, r) {
                return e._gsap.scaleX = e._gsap.scaleY = r
            }, $r = function (e, t, r, i, n) {
                var s = e._gsap;
                s.scaleX = s.scaleY = r, s.renderTransform(n, s)
            }, Qr = function (e, t, r, i, n) {
                var s = e._gsap;
                s[t] = r, s.renderTransform(n, s)
            }, Zr = "transform", Kr = Zr + "Origin", Jr = function e(t, r) {
                var i = this, n = this.target, s = n.style, a = n._gsap;
                if (t in Or && s) {
                    if (this.tfm = this.tfm || {}, "transform" === t) return Fr.transform.split(",").forEach((function (t) {
                        return e.call(i, t, r)
                    }));
                    if (~(t = Fr[t] || t).indexOf(",") ? t.split(",").forEach((function (e) {
                        return i.tfm[e] = vi(n, e)
                    })) : this.tfm[t] = a.x ? a[t] : vi(n, t), t === Kr && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(Zr) >= 0) return;
                    a.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Kr, r, "")), t = Zr
                }
                (s || r) && this.props.push(t, r, s[t])
            }, ei = function (e) {
                e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
            }, ti = function () {
                var e, t, r = this.props, i = this.target, n = i.style, s = i._gsap;
                for (e = 0; e < r.length; e += 3) r[e + 1] ? i[r[e]] = r[e + 2] : r[e + 2] ? n[r[e]] = r[e + 2] : n.removeProperty("--" === r[e].substr(0, 2) ? r[e] : r[e].replace(Dr, "-$1").toLowerCase());
                if (this.tfm) {
                    for (t in this.tfm) s[t] = this.tfm[t];
                    s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (e = Pr()) && e.isStart || n[Zr] || (ei(n), s.zOrigin && n[Kr] && (n[Kr] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
                }
            }, ri = function (e, t) {
                var r = {target: e, props: [], revert: ti, save: Jr};
                return e._gsap || Tr.core.getCache(e), t && t.split(",").forEach((function (e) {
                    return r.save(e)
                })), r
            }, ii = function (e, t) {
                var r = xr.createElementNS ? xr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : xr.createElement(e);
                return r && r.style ? r : xr.createElement(e)
            }, ni = function e(t, r, i) {
                var n = getComputedStyle(t);
                return n[r] || n.getPropertyValue(r.replace(Dr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && e(t, ai(r) || r, 1) || ""
            }, si = "O,Moz,ms,Ms,Webkit".split(","), ai = function (e, t, r) {
                var i = (t || Mr).style, n = 5;
                if (e in i && !r) return e;
                for (e = e.charAt(0).toUpperCase() + e.substr(1); n-- && !(si[n] + e in i);) ;
                return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? si[n] : "") + e
            }, oi = function () {
                "undefined" != typeof window && window.document && (Ar = window, xr = Ar.document, Sr = xr.documentElement, Mr = ii("div") || {style: {}}, ii("div"), Zr = ai(Zr), Kr = Zr + "Origin", Mr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kr = !!ai("perspective"), Pr = Tr.core.reverting, Er = 1)
            }, li = function e(t) {
                var r,
                    i = ii("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode, s = this.nextSibling, a = this.style.cssText;
                if (Sr.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                    r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = e
                } catch (e) {
                } else this._gsapBBox && (r = this._gsapBBox());
                return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), Sr.removeChild(i), this.style.cssText = a, r
            }, di = function (e, t) {
                for (var r = t.length; r--;) if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
            }, ui = function (e) {
                var t;
                try {
                    t = e.getBBox()
                } catch (r) {
                    t = li.call(e, !0)
                }
                return t && (t.width || t.height) || e.getBBox === li || (t = li.call(e, !0)), !t || t.width || t.x || t.y ? t : {
                    x: +di(e, ["x", "cx", "x1"]) || 0,
                    y: +di(e, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0
                }
            }, ci = function (e) {
                return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !ui(e))
            }, pi = function (e, t) {
                if (t) {
                    var r, i = e.style;
                    t in Or && t !== Kr && (t = Zr), i.removeProperty ? ("ms" !== (r = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), i.removeProperty("--" === r ? t : t.replace(Dr, "-$1").toLowerCase())) : i.removeAttribute(t)
                }
            }, hi = function (e, t, r, i, n, s) {
                var a = new dr(e._pt, t, r, 0, 1, s ? qr : jr);
                return e._pt = a, a.b = i, a.e = n, e._props.push(r), a
            }, fi = {deg: 1, rad: 1, turn: 1}, mi = {grid: 1, flex: 1}, gi = function e(t, r, i, n) {
                var s, a, o, l, d = parseFloat(i) || 0, u = (i + "").trim().substr((d + "").length) || "px", c = Mr.style,
                    p = Br.test(r), h = "svg" === t.tagName.toLowerCase(),
                    f = (h ? "client" : "offset") + (p ? "Width" : "Height"), m = 100, g = "px" === n, v = "%" === n;
                if (n === u || !d || fi[n] || fi[u]) return d;
                if ("px" !== u && !g && (d = e(t, r, i, "px")), l = t.getCTM && ci(t), (v || "%" === u) && (Or[r] || ~r.indexOf("adius"))) return s = l ? t.getBBox()[p ? "width" : "height"] : t[f], he(v ? d / s * m : d / 100 * s);
                if (c[p ? "width" : "height"] = m + (g ? u : n), a = ~r.indexOf("adius") || "em" === n && t.appendChild && !h ? t : t.parentNode, l && (a = (t.ownerSVGElement || {}).parentNode), a && a !== xr && a.appendChild || (a = xr.body), (o = a._gsap) && v && o.width && p && o.time === At.time && !o.uncache) return he(d / o.width * m);
                if (!v || "height" !== r && "width" !== r) (v || "%" === u) && !mi[ni(a, "display")] && (c.position = ni(t, "position")), a === t && (c.position = "static"), a.appendChild(Mr), s = Mr[f], a.removeChild(Mr), c.position = "absolute"; else {
                    var _ = t.style[r];
                    t.style[r] = m + n, s = t[f], _ ? t.style[r] = _ : pi(t, r)
                }
                return p && v && ((o = ue(a)).time = At.time, o.width = a[f]), he(g ? s * d / m : s && d ? m / s * d : 0)
            }, vi = function (e, t, r, i) {
                var n;
                return Er || oi(), t in Fr && "transform" !== t && ~(t = Fr[t]).indexOf(",") && (t = t.split(",")[0]), Or[t] && "transform" !== t ? (n = Ci(e, i), n = "transformOrigin" !== t ? n[t] : n.svg ? n.origin : Pi(ni(e, Kr)) + " " + n.zOrigin + "px") : (!(n = e.style[t]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = bi[t] && bi[t](e, t, r) || ni(e, t) || ce(e, t) || ("opacity" === t ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? gi(e, t, n, r) + r : n
            }, _i = function (e, t, r, i) {
                if (!r || "none" === r) {
                    var n = ai(t, e, 1), s = n && ni(e, n, 1);
                    s && s !== r ? (t = n, r = s) : "borderColor" === t && (r = ni(e, "borderTopColor"))
                }
                var a, o, l, d, u, c, p, h, f, m, g, v = new dr(this._pt, e.style, t, 0, 1, ir), w = 0, y = 0;
                if (v.b = r, v.e = i, r += "", "auto" == (i += "") && (c = e.style[t], e.style[t] = i, i = ni(e, t) || i, c ? e.style[t] = c : pi(e, t)), Tt(a = [r, i]), i = a[1], l = (r = a[0]).match(N) || [], (i.match(N) || []).length) {
                    for (; o = N.exec(i);) p = o[0], f = i.substring(w, o.index), u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1), p !== (c = l[y++] || "") && (d = parseFloat(c) || 0, g = c.substr((d + "").length), "=" === p.charAt(1) && (p = me(d, p) + g), h = parseFloat(p), m = p.substr((h + "").length), w = N.lastIndex - m.length, m || (m = m || _.units[t] || g, w === i.length && (i += m, v.e += m)), g !== m && (d = gi(e, t, c, m) || 0), v._pt = {
                        _next: v._pt,
                        p: f || 1 === y ? f : ",",
                        s: d,
                        c: h - d,
                        m: u && u < 4 || "zIndex" === t ? Math.round : 0
                    });
                    v.c = w < i.length ? i.substring(w, i.length) : ""
                } else v.r = "display" === t && "none" === i ? qr : jr;
                return V.test(i) && (v.e = 0), this._pt = v, v
            }, wi = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, yi = function (e, t) {
                if (t.tween && t.tween._time === t.tween._dur) {
                    var r, i, n, s = t.t, a = s.style, o = t.u, l = s._gsap;
                    if ("all" === o || !0 === o) a.cssText = "", i = 1; else for (n = (o = o.split(",")).length; --n > -1;) r = o[n], Or[r] && (i = 1, r = "transformOrigin" === r ? Kr : Zr), pi(s, r);
                    i && (pi(s, Zr), l && (l.svg && s.removeAttribute("transform"), Ci(s, 1), l.uncache = 1, ei(a)))
                }
            }, bi = {
                clearProps: function (e, t, r, i, n) {
                    if ("isFromStart" !== n.data) {
                        var s = e._pt = new dr(e._pt, t, r, 0, 0, yi);
                        return s.u = i, s.pr = -10, s.tween = n, e._props.push(r), 1
                    }
                }
            }, Ti = [1, 0, 0, 1, 0, 0], Ai = {}, xi = function (e) {
                return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
            }, Si = function (e) {
                var t = ni(e, Zr);
                return xi(t) ? Ti : t.substr(7).match(R).map(he)
            }, Ei = function (e, t) {
                var r, i, n, s, a = e._gsap || ue(e), o = e.style, l = Si(e);
                return a.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(n = e.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ti : l : (l !== Ti || e.offsetParent || e === Sr || a.svg || (n = o.display, o.display = "block", (r = e.parentNode) && e.offsetParent || (s = 1, i = e.nextElementSibling, Sr.appendChild(e)), l = Si(e), n ? o.display = n : pi(e, "display"), s && (i ? r.insertBefore(e, i) : r ? r.appendChild(e) : Sr.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
            }, Mi = function (e, t, r, i, n, s) {
                var a, o, l, d = e._gsap, u = n || Ei(e, !0), c = d.xOrigin || 0, p = d.yOrigin || 0, h = d.xOffset || 0,
                    f = d.yOffset || 0, m = u[0], g = u[1], v = u[2], _ = u[3], w = u[4], y = u[5], b = t.split(" "),
                    T = parseFloat(b[0]) || 0, A = parseFloat(b[1]) || 0;
                r ? u !== Ti && (o = m * _ - g * v) && (l = T * (-g / o) + A * (m / o) - (m * y - g * w) / o, T = T * (_ / o) + A * (-v / o) + (v * y - _ * w) / o, A = l) : (T = (a = ui(e)).x + (~b[0].indexOf("%") ? T / 100 * a.width : T), A = a.y + (~(b[1] || b[0]).indexOf("%") ? A / 100 * a.height : A)), i || !1 !== i && d.smooth ? (w = T - c, y = A - p, d.xOffset = h + (w * m + y * v) - w, d.yOffset = f + (w * g + y * _) - y) : d.xOffset = d.yOffset = 0, d.xOrigin = T, d.yOrigin = A, d.smooth = !!i, d.origin = t, d.originIsAbsolute = !!r, e.style[Kr] = "0px 0px", s && (hi(s, d, "xOrigin", c, T), hi(s, d, "yOrigin", p, A), hi(s, d, "xOffset", h, d.xOffset), hi(s, d, "yOffset", f, d.yOffset)), e.setAttribute("data-svg-origin", T + " " + A)
            }, Ci = function (e, t) {
                var r = e._gsap || new Bt(e);
                if ("x" in r && !t && !r.uncache) return r;
                var i, n, s, a, o, l, d, u, c, p, h, f, m, g, v, w, y, b, T, A, x, S, E, M, C, P, k, O, z, I, L, D,
                    B = e.style, G = r.scaleX < 0, F = "px", R = "deg", N = getComputedStyle(e), Y = ni(e, Kr) || "0";
                return i = n = s = l = d = u = c = p = h = 0, a = o = 1, r.svg = !(!e.getCTM || !ci(e)), N.translate && ("none" === N.translate && "none" === N.scale && "none" === N.rotate || (B[Zr] = ("none" !== N.translate ? "translate3d(" + (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") + ("none" !== N.scale ? "scale(" + N.scale.split(" ").join(",") + ") " : "") + ("none" !== N[Zr] ? N[Zr] : "")), B.scale = B.rotate = B.translate = "none"), g = Ei(e, r.svg), r.svg && (r.uncache ? (C = e.getBBox(), Y = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px", M = "") : M = !t && e.getAttribute("data-svg-origin"), Mi(e, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, g)), f = r.xOrigin || 0, m = r.yOrigin || 0, g !== Ti && (b = g[0], T = g[1], A = g[2], x = g[3], i = S = g[4], n = E = g[5], 6 === g.length ? (a = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + A * A), l = b || T ? Lr(T, b) * zr : 0, (c = A || x ? Lr(A, x) * zr + l : 0) && (o *= Math.abs(Math.cos(c * Ir))), r.svg && (i -= f - (f * b + m * A), n -= m - (f * T + m * x))) : (D = g[6], I = g[7], k = g[8], O = g[9], z = g[10], L = g[11], i = g[12], n = g[13], s = g[14], d = (v = Lr(D, z)) * zr, v && (M = S * (w = Math.cos(-v)) + k * (y = Math.sin(-v)), C = E * w + O * y, P = D * w + z * y, k = S * -y + k * w, O = E * -y + O * w, z = D * -y + z * w, L = I * -y + L * w, S = M, E = C, D = P), u = (v = Lr(-A, z)) * zr, v && (w = Math.cos(-v), L = x * (y = Math.sin(-v)) + L * w, b = M = b * w - k * y, T = C = T * w - O * y, A = P = A * w - z * y), l = (v = Lr(T, b)) * zr, v && (M = b * (w = Math.cos(v)) + T * (y = Math.sin(v)), C = S * w + E * y, T = T * w - b * y, E = E * w - S * y, b = M, S = C), d && Math.abs(d) + Math.abs(l) > 359.9 && (d = l = 0, u = 180 - u), a = he(Math.sqrt(b * b + T * T + A * A)), o = he(Math.sqrt(E * E + D * D)), v = Lr(S, E), c = Math.abs(v) > 2e-4 ? v * zr : 0, h = L ? 1 / (L < 0 ? -L : L) : 0), r.svg && (M = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !xi(ni(e, Zr)), M && e.setAttribute("transform", M))), Math.abs(c) > 90 && Math.abs(c) < 270 && (G ? (a *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, c += c <= 0 ? 180 : -180)), t = t || r.uncache, r.x = i - ((r.xPercent = i && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + F, r.y = n - ((r.yPercent = n && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + F, r.z = s + F, r.scaleX = he(a), r.scaleY = he(o), r.rotation = he(l) + R, r.rotationX = he(d) + R, r.rotationY = he(u) + R, r.skewX = c + R, r.skewY = p + R, r.transformPerspective = h + F, (r.zOrigin = parseFloat(Y.split(" ")[2]) || !t && r.zOrigin || 0) && (B[Kr] = Pi(Y)), r.xOffset = r.yOffset = 0, r.force3D = _.force3D, r.renderTransform = r.svg ? Bi : kr ? Di : Oi, r.uncache = 0, r
            }, Pi = function (e) {
                return (e = e.split(" "))[0] + " " + e[1]
            }, ki = function (e, t, r) {
                var i = Qe(t);
                return he(parseFloat(t) + parseFloat(gi(e, "x", r + "px", i))) + i
            }, Oi = function (e, t) {
                t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Di(e, t)
            }, zi = "0deg", Ii = "0px", Li = ") ", Di = function (e, t) {
                var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, o = r.z, l = r.rotation,
                    d = r.rotationY, u = r.rotationX, c = r.skewX, p = r.skewY, h = r.scaleX, f = r.scaleY,
                    m = r.transformPerspective, g = r.force3D, v = r.target, _ = r.zOrigin, w = "",
                    y = "auto" === g && e && 1 !== e || !0 === g;
                if (_ && (u !== zi || d !== zi)) {
                    var b, T = parseFloat(d) * Ir, A = Math.sin(T), x = Math.cos(T);
                    T = parseFloat(u) * Ir, b = Math.cos(T), s = ki(v, s, A * b * -_), a = ki(v, a, -Math.sin(T) * -_), o = ki(v, o, x * b * -_ + _)
                }
                m !== Ii && (w += "perspective(" + m + Li), (i || n) && (w += "translate(" + i + "%, " + n + "%) "), (y || s !== Ii || a !== Ii || o !== Ii) && (w += o !== Ii || y ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Li), l !== zi && (w += "rotate(" + l + Li), d !== zi && (w += "rotateY(" + d + Li), u !== zi && (w += "rotateX(" + u + Li), c === zi && p === zi || (w += "skew(" + c + ", " + p + Li), 1 === h && 1 === f || (w += "scale(" + h + ", " + f + Li), v.style[Zr] = w || "translate(0, 0)"
            }, Bi = function (e, t) {
                var r, i, n, s, a, o = t || this, l = o.xPercent, d = o.yPercent, u = o.x, c = o.y, p = o.rotation,
                    h = o.skewX, f = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, _ = o.xOrigin, w = o.yOrigin,
                    y = o.xOffset, b = o.yOffset, T = o.forceCSS, A = parseFloat(u), x = parseFloat(c);
                p = parseFloat(p), h = parseFloat(h), (f = parseFloat(f)) && (h += f = parseFloat(f), p += f), p || h ? (p *= Ir, h *= Ir, r = Math.cos(p) * m, i = Math.sin(p) * m, n = Math.sin(p - h) * -g, s = Math.cos(p - h) * g, h && (f *= Ir, a = Math.tan(h - f), n *= a = Math.sqrt(1 + a * a), s *= a, f && (a = Math.tan(f), r *= a = Math.sqrt(1 + a * a), i *= a)), r = he(r), i = he(i), n = he(n), s = he(s)) : (r = m, s = g, i = n = 0), (A && !~(u + "").indexOf("px") || x && !~(c + "").indexOf("px")) && (A = gi(v, "x", u, "px"), x = gi(v, "y", c, "px")), (_ || w || y || b) && (A = he(A + _ - (_ * r + w * n) + y), x = he(x + w - (_ * i + w * s) + b)), (l || d) && (a = v.getBBox(), A = he(A + l / 100 * a.width), x = he(x + d / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + A + "," + x + ")", v.setAttribute("transform", a), T && (v.style[Zr] = a)
            }, Gi = function (e, t, r, i, n) {
                var s, a, o = 360, l = C(n), d = parseFloat(n) * (l && ~n.indexOf("rad") ? zr : 1) - i, u = i + d + "deg";
                return l && ("short" === (s = n.split("_")[1]) && (d %= o) != d % 180 && (d += d < 0 ? o : -360), "cw" === s && d < 0 ? d = (d + 36e9) % o - ~~(d / o) * o : "ccw" === s && d > 0 && (d = (d - 36e9) % o - ~~(d / o) * o)), e._pt = a = new dr(e._pt, t, r, i, d, Nr), a.e = u, a.u = "deg", e._props.push(r), a
            }, Fi = function (e, t) {
                for (var r in t) e[r] = t[r];
                return e
            }, Ri = function (e, t, r) {
                var i, n, s, a, o, l, d, u = Fi({}, r._gsap), c = r.style;
                for (n in u.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), c[Zr] = t, i = Ci(r, 1), pi(r, Zr), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[Zr], c[Zr] = t, i = Ci(r, 1), c[Zr] = s), Or) (s = u[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Qe(s) !== (d = Qe(a)) ? gi(r, n, s, d) : parseFloat(s), l = parseFloat(a), e._pt = new dr(e._pt, i, n, o, l - o, Rr), e._pt.u = d || 0, e._props.push(n));
                Fi(i, u)
            };
        pe("padding,margin,Width,Radius", (function (e, t) {
            var r = "Top", i = "Right", n = "Bottom", s = "Left",
                a = (t < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map((function (r) {
                    return t < 2 ? e + r : "border" + r + e
                }));
            bi[t > 1 ? "border" + e : e] = function (e, t, r, i, n) {
                var s, o;
                if (arguments.length < 4) return s = a.map((function (t) {
                    return vi(e, t, r)
                })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
                s = (i + "").split(" "), o = {}, a.forEach((function (e, t) {
                    return o[e] = s[t] = s[t] || s[(t - 1) / 2 | 0]
                })), e.init(t, o, n)
            }
        }));
        var Ni, Yi, Vi = {
            name: "css", register: oi, targetTest: function (e) {
                return e.style && e.nodeType
            }, init: function (e, t, r, i, n) {
                var s, a, o, l, d, u, c, p, h, f, m, g, v, w, y, b, T, A, x, S, E = this._props, M = e.style,
                    P = r.vars.startAt;
                for (c in Er || oi(), this.styles = this.styles || ri(e), b = this.styles.props, this.tween = r, t) if ("autoRound" !== c && (a = t[c], !ne[c] || !jt(c, t, r, i, e, n))) if (d = typeof a, u = bi[c], "function" === d && (d = typeof (a = a.call(r, i, e, n))), "string" === d && ~a.indexOf("random(") && (a = ot(a)), u) u(this, e, c, a, r) && (y = 1); else if ("--" === c.substr(0, 2)) s = (getComputedStyle(e).getPropertyValue(c) + "").trim(), a += "", yt.lastIndex = 0, yt.test(s) || (p = Qe(s), h = Qe(a)), h ? p !== h && (s = gi(e, c, s, h) + h) : p && (a += p), this.add(M, "setProperty", s, a, i, n, 0, 0, c), E.push(c), b.push(c, 0, M[c]); else if ("undefined" !== d) {
                    if (P && c in P ? (s = "function" == typeof P[c] ? P[c].call(r, i, e, n) : P[c], C(s) && ~s.indexOf("random(") && (s = ot(s)), Qe(s + "") || "auto" === s || (s += _.units[c] || Qe(vi(e, c)) || ""), "=" === (s + "").charAt(1) && (s = vi(e, c))) : s = vi(e, c), l = parseFloat(s), (f = "string" === d && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), c in Fr && ("autoAlpha" === c && (1 === l && "hidden" === vi(e, "visibility") && o && (l = 0), b.push("visibility", 0, M.visibility), hi(this, M, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== c && "transform" !== c && ~(c = Fr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in Or) if (this.styles.save(c), g || ((v = e._gsap).renderTransform && !t.parseTransform || Ci(e, t.parseTransform), w = !1 !== t.smoothOrigin && v.smooth, (g = this._pt = new dr(this._pt, M, Zr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new dr(this._pt, v, "scaleY", v.scaleY, (f ? me(v.scaleY, f + o) : o) - v.scaleY || 0, Rr), this._pt.u = 0, E.push("scaleY", c), c += "X"; else {
                        if ("transformOrigin" === c) {
                            b.push(Kr, 0, M[Kr]), A = void 0, x = void 0, S = void 0, x = (A = (T = a).split(" "))[0], S = A[1] || "50%", "top" !== x && "bottom" !== x && "left" !== S && "right" !== S || (T = x, x = S, S = T), A[0] = wi[x] || x, A[1] = wi[S] || S, a = A.join(" "), v.svg ? Mi(e, a, 0, w, 0, this) : ((h = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && hi(this, v, "zOrigin", v.zOrigin, h), hi(this, M, c, Pi(s), Pi(a)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            Mi(e, a, 1, w, 0, this);
                            continue
                        }
                        if (c in Ai) {
                            Gi(this, v, c, l, f ? me(l, f + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            hi(this, v, "smooth", v.smooth, a);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = a;
                            continue
                        }
                        if ("transform" === c) {
                            Ri(this, a, e);
                            continue
                        }
                    } else c in M || (c = ai(c) || c);
                    if (m || (o || 0 === o) && (l || 0 === l) && !Gr.test(a) && c in M) o || (o = 0), (p = (s + "").substr((l + "").length)) !== (h = Qe(a) || (c in _.units ? _.units[c] : p)) && (l = gi(e, c, s, h)), this._pt = new dr(this._pt, m ? v : M, c, l, (f ? me(l, f + o) : o) - l, m || "px" !== h && "zIndex" !== c || !1 === t.autoRound ? Rr : Vr), this._pt.u = h || 0, p !== h && "%" !== h && (this._pt.b = s, this._pt.r = Yr); else if (c in M) _i.call(this, e, c, s, f ? f + a : a); else if (c in e) this.add(e, c, s || e[c], f ? f + a : a, i, n); else if ("parseTransform" !== c) {
                        U(c, a);
                        continue
                    }
                    m || (c in M ? b.push(c, 0, M[c]) : b.push(c, 1, s || e[c])), E.push(c)
                }
                y && lr(this)
            }, render: function (e, t) {
                if (t.tween._time || !Pr()) for (var r = t._pt; r;) r.r(e, r.d), r = r._next; else t.styles.revert()
            }, get: vi, aliases: Fr, getSetter: function (e, t, r) {
                var i = Fr[t];
                return i && i.indexOf(",") < 0 && (t = i), t in Or && t !== Kr && (e._gsap.x || vi(e, "x")) ? r && Cr === r ? "scale" === t ? Ur : Xr : (Cr = r || {}) && ("scale" === t ? $r : Qr) : e.style && !O(e.style[t]) ? Hr : ~t.indexOf("-") ? Wr : er(e, t)
            }, core: {_removeProperty: pi, _getMatrix: Ei}
        };
        Tr.utils.checkPrefix = ai, Tr.core.getStyleSaver = ri, Yi = pe("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ni = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (e) {
            Or[e] = 1
        })), pe(Ni, (function (e) {
            _.units[e] = "deg", Ai[e] = 1
        })), Fr[Yi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ni, pe("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (e) {
            var t = e.split(":");
            Fr[t[1]] = Yi[t[0]]
        })), pe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (e) {
            _.units[e] = "px"
        })), Tr.registerPlugin(Vi);
        var ji = Tr.registerPlugin(Vi) || Tr;

        function qi(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function Hi(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((r => {
                void 0 === e[r] ? e[r] = t[r] : qi(t[r]) && qi(e[r]) && Object.keys(t[r]).length > 0 && Hi(e[r], t[r])
            }))
        }

        ji.core.Tween;
        const Wi = {
            body: {},
            addEventListener() {
            },
            removeEventListener() {
            },
            activeElement: {
                blur() {
                }, nodeName: ""
            },
            querySelector() {
                return null
            },
            querySelectorAll() {
                return []
            },
            getElementById() {
                return null
            },
            createEvent() {
                return {
                    initEvent() {
                    }
                }
            },
            createElement() {
                return {
                    children: [], childNodes: [], style: {}, setAttribute() {
                    }, getElementsByTagName() {
                        return []
                    }
                }
            },
            createElementNS() {
                return {}
            },
            importNode() {
                return null
            },
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
        };

        function Xi() {
            const e = "undefined" != typeof document ? document : {};
            return Hi(e, Wi), e
        }

        const Ui = {
            document: Wi,
            navigator: {userAgent: ""},
            location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
            history: {
                replaceState() {
                }, pushState() {
                }, go() {
                }, back() {
                }
            },
            CustomEvent: function () {
                return this
            },
            addEventListener() {
            },
            removeEventListener() {
            },
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return ""
                    }
                }
            },
            Image() {
            },
            Date() {
            },
            screen: {},
            setTimeout() {
            },
            clearTimeout() {
            },
            matchMedia() {
                return {}
            },
            requestAnimationFrame(e) {
                return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
            },
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function $i() {
            const e = "undefined" != typeof window ? window : {};
            return Hi(e, Ui), e
        }

        function Qi(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function Zi() {
            return Date.now()
        }

        function Ki(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function Ji() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != n && (r = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
                    const r = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, i = r.length; t < i; t += 1) {
                        const i = r[t], s = Object.getOwnPropertyDescriptor(n, i);
                        void 0 !== s && s.enumerable && (Ki(e[i]) && Ki(n[i]) ? n[i].__swiper__ ? e[i] = n[i] : Ji(e[i], n[i]) : !Ki(e[i]) && Ki(n[i]) ? (e[i] = {}, n[i].__swiper__ ? e[i] = n[i] : Ji(e[i], n[i])) : e[i] = n[i])
                    }
                }
            }
            var r;
            return e
        }

        function en(e, t, r) {
            e.style.setProperty(t, r)
        }

        function tn(e) {
            let {swiper: t, targetPosition: r, side: i} = e;
            const n = $i(), s = -t.translate;
            let a, o = null;
            const l = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
            const d = r > s ? "next" : "prev", u = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                c = () => {
                    a = (new Date).getTime(), null === o && (o = a);
                    const e = Math.max(Math.min((a - o) / l, 1), 0), d = .5 - Math.cos(e * Math.PI) / 2;
                    let p = s + d * (r - s);
                    if (u(p, r) && (p = r), t.wrapperEl.scrollTo({[i]: p}), u(p, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[i]: p})
                    })), void n.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = n.requestAnimationFrame(c)
                };
            c()
        }

        function rn(e, t) {
            return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
        }

        function nn(e) {
            try {
                return void console.warn(e)
            } catch (e) {
            }
        }

        function sn(e, t) {
            void 0 === t && (t = []);
            const r = document.createElement(e);
            return r.classList.add(...Array.isArray(t) ? t : function (e) {
                return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
            }(t)), r
        }

        function an(e, t) {
            return $i().getComputedStyle(e, null).getPropertyValue(t)
        }

        function on(e) {
            let t, r = e;
            if (r) {
                for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
                return t
            }
        }

        function ln(e, t, r) {
            const i = $i();
            return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }

        let dn, un, cn;

        function pn() {
            return dn || (dn = function () {
                const e = $i(), t = Xi();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()), dn
        }

        function hn(e) {
            return void 0 === e && (e = {}), un || (un = function (e) {
                let {userAgent: t} = void 0 === e ? {} : e;
                const r = pn(), i = $i(), n = i.navigator.platform, s = t || i.navigator.userAgent,
                    a = {ios: !1, android: !1}, o = i.screen.width, l = i.screen.height,
                    d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
                let u = s.match(/(iPad).*OS\s([\d_]+)/);
                const c = s.match(/(iPod)(.*OS\s([\d_]+))?/), p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    h = "Win32" === n;
                let f = "MacIntel" === n;
                return !u && f && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), f = !1), d && !h && (a.os = "android", a.android = !0), (u || p || c) && (a.os = "ios", a.ios = !0), a
            }(e)), un
        }

        var fn = {
            on(e, t, r) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;
                const n = r ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
                })), i
            }, once(e, t, r) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof t) return i;

                function n() {
                    i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                    for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                    t.apply(i, s)
                }

                return n.__emitterProxy = t, i.on(e, n, r)
            }, onAny(e, t) {
                const r = this;
                if (!r.eventsListeners || r.destroyed) return r;
                if ("function" != typeof e) return r;
                const i = t ? "unshift" : "push";
                return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
            }, offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed) return t;
                if (!t.eventsAnyListeners) return t;
                const r = t.eventsAnyListeners.indexOf(e);
                return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
            }, off(e, t) {
                const r = this;
                return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((i, n) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[e].splice(n, 1)
                    }))
                })), r) : r
            }, emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let t, r, i;
                for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], r = s.slice(1, s.length), i = e) : (t = s[0].events, r = s[0].data, i = s[0].context || e), r.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(i, [t, ...r])
                    })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(i, r)
                    }))
                })), e
            }
        };
        const mn = (e, t, r) => {
            t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        }, gn = (e, t, r) => {
            t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        }, vn = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (r) {
                let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                }))), t && t.remove()
            }
        }, _n = (e, t) => {
            if (!e.slides[t]) return;
            const r = e.slides[t].querySelector('[loading="lazy"]');
            r && r.removeAttribute("loading")
        }, wn = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const r = e.slides.length;
            if (!r || !t || t < 0) return;
            t = Math.min(t, r);
            const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                n = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const r = n, s = [r - t];
                return s.push(...Array.from({length: t}).map(((e, t) => r + i + t))), void e.slides.forEach(((t, r) => {
                    s.includes(t.column) && _n(e, r)
                }))
            }
            const s = n + i - 1;
            if (e.params.rewind || e.params.loop) for (let i = n - t; i <= s + t; i += 1) {
                const t = (i % r + r) % r;
                (t < n || t > s) && _n(e, t)
            } else for (let i = Math.max(n - t, 0); i <= Math.min(s + t, r - 1); i += 1) i !== n && (i > s || i < n) && _n(e, i)
        };
        var yn = {
            updateSize: function () {
                const e = this;
                let t, r;
                const i = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(an(i, "padding-left") || 0, 10) - parseInt(an(i, "padding-right") || 0, 10), r = r - parseInt(an(i, "padding-top") || 0, 10) - parseInt(an(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
                    width: t,
                    height: r,
                    size: e.isHorizontal() ? t : r
                }))
            }, updateSlides: function () {
                const e = this;

                function t(t, r) {
                    return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
                }

                const r = e.params, {wrapperEl: i, slidesEl: n, size: s, rtlTranslate: a, wrongRTL: o} = e,
                    l = e.virtual && r.virtual.enabled, d = l ? e.virtual.slides.length : e.slides.length,
                    u = rn(n, `.${e.params.slideClass}, swiper-slide`), c = l ? e.virtual.slides.length : u.length;
                let p = [];
                const h = [], f = [];
                let m = r.slidesOffsetBefore;
                "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
                let g = r.slidesOffsetAfter;
                "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
                const v = e.snapGrid.length, _ = e.slidesGrid.length;
                let w = r.spaceBetween, y = -m, b = 0, T = 0;
                if (void 0 === s) return;
                "string" == typeof w && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * s : "string" == typeof w && (w = parseFloat(w)), e.virtualSize = -w, u.forEach((e => {
                    a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                })), r.centeredSlides && r.cssMode && (en(i, "--swiper-centered-offset-before", ""), en(i, "--swiper-centered-offset-after", ""));
                const A = r.grid && r.grid.rows > 1 && e.grid;
                let x;
                A ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
                const S = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
                for (let i = 0; i < c; i += 1) {
                    let n;
                    if (x = 0, u[i] && (n = u[i]), A && e.grid.updateSlide(i, n, u), !u[i] || "none" !== an(n, "display")) {
                        if ("auto" === r.slidesPerView) {
                            S && (u[i].style[e.getDirectionLabel("width")] = "");
                            const s = getComputedStyle(n), a = n.style.transform, o = n.style.webkitTransform;
                            if (a && (n.style.transform = "none"), o && (n.style.webkitTransform = "none"), r.roundLengths) x = e.isHorizontal() ? ln(n, "width", !0) : ln(n, "height", !0); else {
                                const e = t(s, "width"), r = t(s, "padding-left"), i = t(s, "padding-right"),
                                    a = t(s, "margin-left"), o = t(s, "margin-right"),
                                    l = s.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) x = e + a + o; else {
                                    const {clientWidth: t, offsetWidth: s} = n;
                                    x = e + r + i + a + o + (s - t)
                                }
                            }
                            a && (n.style.transform = a), o && (n.style.webkitTransform = o), r.roundLengths && (x = Math.floor(x))
                        } else x = (s - (r.slidesPerView - 1) * w) / r.slidesPerView, r.roundLengths && (x = Math.floor(x)), u[i] && (u[i].style[e.getDirectionLabel("width")] = `${x}px`);
                        u[i] && (u[i].swiperSlideSize = x), f.push(x), r.centeredSlides ? (y = y + x / 2 + b / 2 + w, 0 === b && 0 !== i && (y = y - s / 2 - w), 0 === i && (y = y - s / 2 - w), Math.abs(y) < .001 && (y = 0), r.roundLengths && (y = Math.floor(y)), T % r.slidesPerGroup == 0 && p.push(y), h.push(y)) : (r.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && p.push(y), h.push(y), y = y + x + w), e.virtualSize += x + w, b = x, T += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, s) + g, a && o && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${e.virtualSize + w}px`), r.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`), A && e.grid.updateWrapperSize(x, p), !r.centeredSlides) {
                    const t = [];
                    for (let i = 0; i < p.length; i += 1) {
                        let n = p[i];
                        r.roundLengths && (n = Math.floor(n)), p[i] <= e.virtualSize - s && t.push(n)
                    }
                    p = t, Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - s)
                }
                if (l && r.loop) {
                    const t = f[0] + w;
                    if (r.slidesPerGroup > 1) {
                        const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                            n = t * r.slidesPerGroup;
                        for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + n)
                    }
                    for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && p.push(p[p.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
                }
                if (0 === p.length && (p = [0]), 0 !== w) {
                    const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
                    u.filter(((e, t) => !(r.cssMode && !r.loop) || t !== u.length - 1)).forEach((e => {
                        e.style[t] = `${w}px`
                    }))
                }
                if (r.centeredSlides && r.centeredSlidesBounds) {
                    let e = 0;
                    f.forEach((t => {
                        e += t + (w || 0)
                    })), e -= w;
                    const t = e - s;
                    p = p.map((e => e <= 0 ? -m : e > t ? t + g : e))
                }
                if (r.centerInsufficientSlides) {
                    let e = 0;
                    f.forEach((t => {
                        e += t + (w || 0)
                    })), e -= w;
                    const t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                    if (e + t < s) {
                        const r = (s - e - t) / 2;
                        p.forEach(((e, t) => {
                            p[t] = e - r
                        })), h.forEach(((e, t) => {
                            h[t] = e + r
                        }))
                    }
                }
                if (Object.assign(e, {
                    slides: u,
                    snapGrid: p,
                    slidesGrid: h,
                    slidesSizesGrid: f
                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                    en(i, "--swiper-centered-offset-before", -p[0] + "px"), en(i, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0], r = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
                }
                if (c !== d && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== _ && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
                    const t = `${r.containerModifierClass}backface-hidden`, i = e.el.classList.contains(t);
                    c <= r.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
                }
            }, updateAutoHeight: function (e) {
                const t = this, r = [], i = t.virtual && t.params.virtual.enabled;
                let n, s = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const a = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                    r.push(e)
                })); else for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                    const e = t.activeIndex + n;
                    if (e > t.slides.length && !i) break;
                    r.push(a(e))
                } else r.push(a(t.activeIndex));
                for (n = 0; n < r.length; n += 1) if (void 0 !== r[n]) {
                    const e = r[n].offsetHeight;
                    s = e > s ? e : s
                }
                (s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
            }, updateSlidesOffset: function () {
                const e = this, t = e.slides,
                    r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - r - e.cssOverflowAdjustment()
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this, r = t.params, {slides: i, rtlTranslate: n, snapGrid: s} = t;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let a = -e;
                n && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                let o = r.spaceBetween;
                "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                for (let e = 0; e < i.length; e += 1) {
                    const l = i[e];
                    let d = l.swiperSlideOffset;
                    r.cssMode && r.centeredSlides && (d -= i[0].swiperSlideOffset);
                    const u = (a + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                        c = (a - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                        p = -(a - d), h = p + t.slidesSizesGrid[e], f = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
                        m = p >= 0 && p < t.size - 1 || h > 1 && h <= t.size || p <= 0 && h >= t.size;
                    m && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), mn(l, m, r.slideVisibleClass), mn(l, f, r.slideFullyVisibleClass), l.progress = n ? -u : u, l.originalProgress = n ? -c : c
                }
            }, updateProgress: function (e) {
                const t = this;
                if (void 0 === e) {
                    const r = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * r || 0
                }
                const r = t.params, i = t.maxTranslate() - t.minTranslate();
                let {progress: n, isBeginning: s, isEnd: a, progressLoop: o} = t;
                const l = s, d = a;
                if (0 === i) n = 0, s = !0, a = !0; else {
                    n = (e - t.minTranslate()) / i;
                    const r = Math.abs(e - t.minTranslate()) < 1, o = Math.abs(e - t.maxTranslate()) < 1;
                    s = r || n <= 0, a = o || n >= 1, r && (n = 0), o && (n = 1)
                }
                if (r.loop) {
                    const r = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1),
                        n = t.slidesGrid[r], s = t.slidesGrid[i], a = t.slidesGrid[t.slidesGrid.length - 1],
                        l = Math.abs(e);
                    o = l >= n ? (l - n) / a : (l + a - s) / a, o > 1 && (o -= 1)
                }
                Object.assign(t, {
                    progress: n,
                    progressLoop: o,
                    isBeginning: s,
                    isEnd: a
                }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", n)
            }, updateSlidesClasses: function () {
                const e = this, {slides: t, params: r, slidesEl: i, activeIndex: n} = e,
                    s = e.virtual && r.virtual.enabled, a = e.grid && r.grid && r.grid.rows > 1,
                    o = e => rn(i, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                let l, d, u;
                if (s) if (r.loop) {
                    let t = n - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
                } else l = o(`[data-swiper-slide-index="${n}"]`); else a ? (l = t.filter((e => e.column === n))[0], u = t.filter((e => e.column === n + 1))[0], d = t.filter((e => e.column === n - 1))[0]) : l = t[n];
                l && (a || (u = function (e, t) {
                    const r = [];
                    for (; e.nextElementSibling;) {
                        const i = e.nextElementSibling;
                        t ? i.matches(t) && r.push(i) : r.push(i), e = i
                    }
                    return r
                }(l, `.${r.slideClass}, swiper-slide`)[0], r.loop && !u && (u = t[0]), d = function (e, t) {
                    const r = [];
                    for (; e.previousElementSibling;) {
                        const i = e.previousElementSibling;
                        t ? i.matches(t) && r.push(i) : r.push(i), e = i
                    }
                    return r
                }(l, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
                    gn(e, e === l, r.slideActiveClass), gn(e, e === u, r.slideNextClass), gn(e, e === d, r.slidePrevClass)
                })), e.emitSlidesClasses()
            }, updateActiveIndex: function (e) {
                const t = this, r = t.rtlTranslate ? t.translate : -t.translate, {
                    snapGrid: i,
                    params: n,
                    activeIndex: s,
                    realIndex: a,
                    snapIndex: o
                } = t;
                let l, d = e;
                const u = e => {
                    let r = e - t.virtual.slidesBefore;
                    return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
                };
                if (void 0 === d && (d = function (e) {
                    const {slidesGrid: t, params: r} = e, i = e.rtlTranslate ? e.translate : -e.translate;
                    let n;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? n = e : i >= t[e] && i < t[e + 1] && (n = e + 1) : i >= t[e] && (n = e);
                    return r.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
                }(t)), i.indexOf(r) >= 0) l = i.indexOf(r); else {
                    const e = Math.min(n.slidesPerGroupSkip, d);
                    l = e + Math.floor((d - e) / n.slidesPerGroup)
                }
                if (l >= i.length && (l = i.length - 1), d === s && !t.params.loop) return void (l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
                if (d === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = u(d));
                const c = t.grid && n.grid && n.grid.rows > 1;
                let p;
                if (t.virtual && n.virtual.enabled && n.loop) p = u(d); else if (c) {
                    const e = t.slides.filter((e => e.column === d))[0];
                    let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(r / n.grid.rows)
                } else if (t.slides[d]) {
                    const e = t.slides[d].getAttribute("data-swiper-slide-index");
                    p = e ? parseInt(e, 10) : d
                } else p = d;
                Object.assign(t, {
                    previousSnapIndex: o,
                    snapIndex: l,
                    previousRealIndex: a,
                    realIndex: p,
                    previousIndex: s,
                    activeIndex: d
                }), t.initialized && wn(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== p && t.emit("realIndexChange"), t.emit("slideChange"))
            }, updateClickedSlide: function (e, t) {
                const r = this, i = r.params;
                let n = e.closest(`.${i.slideClass}, swiper-slide`);
                !n && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                    !n && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (n = e)
                }));
                let s, a = !1;
                if (n) for (let e = 0; e < r.slides.length; e += 1) if (r.slides[e] === n) {
                    a = !0, s = e;
                    break
                }
                if (!n || !a) return r.clickedSlide = void 0, void (r.clickedIndex = void 0);
                r.clickedSlide = n, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s, i.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
            }
        }, bn = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                const {params: t, rtlTranslate: r, translate: i, wrapperEl: n} = this;
                if (t.virtualTranslate) return r ? -i : i;
                if (t.cssMode) return i;
                let s = function (e, t) {
                    void 0 === t && (t = "x");
                    const r = $i();
                    let i, n, s;
                    const a = function (e) {
                        const t = $i();
                        let r;
                        return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
                    }(e);
                    return r.WebKitCSSMatrix ? (n = a.transform || a.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === n ? "" : n)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), "x" === t && (n = r.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = r.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
                }(n, e);
                return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
            }, setTranslate: function (e, t) {
                const r = this, {rtlTranslate: i, params: n, wrapperEl: s, progress: a} = r;
                let o, l = 0, d = 0;
                r.isHorizontal() ? l = i ? -e : e : d = e, n.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, n.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : n.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), s.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
                const u = r.maxTranslate() - r.minTranslate();
                o = 0 === u ? 0 : (e - r.minTranslate()) / u, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (e, t, r, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === i && (i = !0);
                const s = this, {params: a, wrapperEl: o} = s;
                if (s.animating && a.preventInteractionOnTransition) return !1;
                const l = s.minTranslate(), d = s.maxTranslate();
                let u;
                if (u = i && e > l ? l : i && e < d ? d : e, s.updateProgress(u), a.cssMode) {
                    const e = s.isHorizontal();
                    if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -u; else {
                        if (!s.support.smoothScroll) return tn({
                            swiper: s,
                            targetPosition: -u,
                            side: e ? "left" : "top"
                        }), !0;
                        o.scrollTo({[e ? "left" : "top"]: -u, behavior: "smooth"})
                    }
                    return !0
                }
                return 0 === t ? (s.setTransition(0), s.setTranslate(u), r && (s.emit("beforeTransitionStart", t, n), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(u), r && (s.emit("beforeTransitionStart", t, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, r && s.emit("transitionEnd"))
                }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
            }
        };

        function Tn(e) {
            let {swiper: t, runCallbacks: r, direction: i, step: n} = e;
            const {activeIndex: s, previousIndex: a} = t;
            let o = i;
            if (o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${n}`), r && s !== a) {
                if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
                t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
            }
        }

        var An = {
            setTransition: function (e, t) {
                const r = this;
                r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const r = this, {params: i} = r;
                i.cssMode || (i.autoHeight && r.updateAutoHeight(), Tn({
                    swiper: r,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const r = this, {params: i} = r;
                r.animating = !1, i.cssMode || (r.setTransition(0), Tn({
                    swiper: r,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, xn = {
            slideTo: function (e, t, r, i, n) {
                void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
                const s = this;
                let a = e;
                a < 0 && (a = 0);
                const {
                    params: o,
                    snapGrid: l,
                    slidesGrid: d,
                    previousIndex: u,
                    activeIndex: c,
                    rtlTranslate: p,
                    wrapperEl: h,
                    enabled: f
                } = s;
                if (!f && !i && !n || s.destroyed || s.animating && o.preventInteractionOnTransition) return !1;
                void 0 === t && (t = s.params.speed);
                const m = Math.min(s.params.slidesPerGroupSkip, a);
                let g = m + Math.floor((a - m) / s.params.slidesPerGroup);
                g >= l.length && (g = l.length - 1);
                const v = -l[g];
                if (o.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * v), r = Math.floor(100 * d[e]), i = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= r && t < i - (i - r) / 2 ? a = e : t >= r && t < i && (a = e + 1) : t >= r && (a = e)
                }
                if (s.initialized && a !== c) {
                    if (!s.allowSlideNext && (p ? v > s.translate && v > s.minTranslate() : v < s.translate && v < s.minTranslate())) return !1;
                    if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (c || 0) !== a) return !1
                }
                let _;
                if (a !== (u || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(v), _ = a > c ? "next" : a < c ? "prev" : "reset", p && -v === s.translate || !p && v === s.translate) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(v), "reset" !== _ && (s.transitionStart(r, _), s.transitionEnd(r, _)), !1;
                if (o.cssMode) {
                    const e = s.isHorizontal(), r = p ? v : -v;
                    if (0 === t) {
                        const t = s.virtual && s.params.virtual.enabled;
                        t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            h[e ? "scrollLeft" : "scrollTop"] = r
                        }))) : h[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                            s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                        }))
                    } else {
                        if (!s.support.smoothScroll) return tn({
                            swiper: s,
                            targetPosition: r,
                            side: e ? "left" : "top"
                        }), !0;
                        h.scrollTo({[e ? "left" : "top"]: r, behavior: "smooth"})
                    }
                    return !0
                }
                return s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(r, _), 0 === t ? s.transitionEnd(r, _) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                    s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, _))
                }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (e, t, r, i) {
                void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
                const n = this;
                if (n.destroyed) return;
                void 0 === t && (t = n.params.speed);
                const s = n.grid && n.params.grid && n.params.grid.rows > 1;
                let a = e;
                if (n.params.loop) if (n.virtual && n.params.virtual.enabled) a += n.virtual.slidesBefore; else {
                    let e;
                    if (s) {
                        const t = a * n.params.grid.rows;
                        e = n.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                    } else e = n.getSlideIndexByData(a);
                    const t = s ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {centeredSlides: r} = n.params;
                    let o = n.params.slidesPerView;
                    "auto" === o ? o = n.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(n.params.slidesPerView, 10)), r && o % 2 == 0 && (o += 1));
                    let l = t - e < o;
                    if (r && (l = l || e < Math.ceil(o / 2)), i && r && "auto" !== n.params.slidesPerView && !s && (l = !1), l) {
                        const i = r ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                        n.loopFix({
                            direction: i,
                            slideTo: !0,
                            activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === i ? n.realIndex : void 0
                        })
                    }
                    if (s) {
                        const e = a * n.params.grid.rows;
                        a = n.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                    } else a = n.getSlideIndexByData(a)
                }
                return requestAnimationFrame((() => {
                    n.slideTo(a, t, r, i)
                })), n
            }, slideNext: function (e, t, r) {
                void 0 === t && (t = !0);
                const i = this, {enabled: n, params: s, animating: a} = i;
                if (!n || i.destroyed) return i;
                void 0 === e && (e = i.params.speed);
                let o = s.slidesPerGroup;
                "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : o, d = i.virtual && s.virtual.enabled;
                if (s.loop) {
                    if (a && !d && s.loopPreventsSliding) return !1;
                    if (i.loopFix({direction: "next"}), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && s.cssMode) return requestAnimationFrame((() => {
                        i.slideTo(i.activeIndex + l, e, t, r)
                    })), !0
                }
                return s.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + l, e, t, r)
            }, slidePrev: function (e, t, r) {
                void 0 === t && (t = !0);
                const i = this, {params: n, snapGrid: s, slidesGrid: a, rtlTranslate: o, enabled: l, animating: d} = i;
                if (!l || i.destroyed) return i;
                void 0 === e && (e = i.params.speed);
                const u = i.virtual && n.virtual.enabled;
                if (n.loop) {
                    if (d && !u && n.loopPreventsSliding) return !1;
                    i.loopFix({direction: "prev"}), i._clientLeft = i.wrapperEl.clientLeft
                }

                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }

                const p = c(o ? i.translate : -i.translate), h = s.map((e => c(e)));
                let f = s[h.indexOf(p) - 1];
                if (void 0 === f && n.cssMode) {
                    let e;
                    s.forEach(((t, r) => {
                        p >= t && (e = r)
                    })), void 0 !== e && (f = s[e > 0 ? e - 1 : e])
                }
                let m = 0;
                if (void 0 !== f && (m = a.indexOf(f), m < 0 && (m = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), n.rewind && i.isBeginning) {
                    const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(n, e, t, r)
                }
                return n.loop && 0 === i.activeIndex && n.cssMode ? (requestAnimationFrame((() => {
                    i.slideTo(m, e, t, r)
                })), !0) : i.slideTo(m, e, t, r)
            }, slideReset: function (e, t, r) {
                void 0 === t && (t = !0);
                const i = this;
                if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, r)
            }, slideToClosest: function (e, t, r, i) {
                void 0 === t && (t = !0), void 0 === i && (i = .5);
                const n = this;
                if (n.destroyed) return;
                void 0 === e && (e = n.params.speed);
                let s = n.activeIndex;
                const a = Math.min(n.params.slidesPerGroupSkip, s),
                    o = a + Math.floor((s - a) / n.params.slidesPerGroup),
                    l = n.rtlTranslate ? n.translate : -n.translate;
                if (l >= n.snapGrid[o]) {
                    const e = n.snapGrid[o];
                    l - e > (n.snapGrid[o + 1] - e) * i && (s += n.params.slidesPerGroup)
                } else {
                    const e = n.snapGrid[o - 1];
                    l - e <= (n.snapGrid[o] - e) * i && (s -= n.params.slidesPerGroup)
                }
                return s = Math.max(s, 0), s = Math.min(s, n.slidesGrid.length - 1), n.slideTo(s, e, t, r)
            }, slideToClickedSlide: function () {
                const e = this;
                if (e.destroyed) return;
                const {params: t, slidesEl: r} = e,
                    i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let n, s = e.clickedIndex;
                const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating) return;
                    n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = e.getSlideIndex(rn(r, `${a}[data-swiper-slide-index="${n}"]`)[0]), Qi((() => {
                        e.slideTo(s)
                    }))) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = e.getSlideIndex(rn(r, `${a}[data-swiper-slide-index="${n}"]`)[0]), Qi((() => {
                        e.slideTo(s)
                    }))) : e.slideTo(s)
                } else e.slideTo(s)
            }
        }, Sn = {
            loopCreate: function (e) {
                const t = this, {params: r, slidesEl: i} = t;
                if (!r.loop || t.virtual && t.params.virtual.enabled) return;
                const n = () => {
                        rn(i, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                            e.setAttribute("data-swiper-slide-index", t)
                        }))
                    }, s = t.grid && r.grid && r.grid.rows > 1, a = r.slidesPerGroup * (s ? r.grid.rows : 1),
                    o = t.slides.length % a != 0, l = s && t.slides.length % r.grid.rows != 0, d = e => {
                        for (let i = 0; i < e; i += 1) {
                            const e = t.isElement ? sn("swiper-slide", [r.slideBlankClass]) : sn("div", [r.slideClass, r.slideBlankClass]);
                            t.slidesEl.append(e)
                        }
                    };
                o ? (r.loopAddBlankSlides ? (d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides()) : nn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : l ? (r.loopAddBlankSlides ? (d(r.grid.rows - t.slides.length % r.grid.rows), t.recalcSlides(), t.updateSlides()) : nn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : n(), t.loopFix({
                    slideRealIndex: e,
                    direction: r.centeredSlides ? void 0 : "next"
                })
            }, loopFix: function (e) {
                let {
                    slideRealIndex: t,
                    slideTo: r = !0,
                    direction: i,
                    setTranslate: n,
                    activeSlideIndex: s,
                    byController: a,
                    byMousewheel: o
                } = void 0 === e ? {} : e;
                const l = this;
                if (!l.params.loop) return;
                l.emit("beforeLoopFix");
                const {
                    slides: d,
                    allowSlidePrev: u,
                    allowSlideNext: c,
                    slidesEl: p,
                    params: h
                } = l, {centeredSlides: f} = h;
                if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && h.virtual.enabled) return r && (h.centeredSlides || 0 !== l.snapIndex ? h.centeredSlides && l.snapIndex < h.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), l.allowSlidePrev = u, l.allowSlideNext = c, void l.emit("loopFix");
                let m = h.slidesPerView;
                "auto" === m ? m = l.slidesPerViewDynamic() : (m = Math.ceil(parseFloat(h.slidesPerView, 10)), f && m % 2 == 0 && (m += 1));
                const g = h.slidesPerGroupAuto ? m : h.slidesPerGroup;
                let v = g;
                v % g != 0 && (v += g - v % g), v += h.loopAdditionalSlides, l.loopedSlides = v;
                const _ = l.grid && h.grid && h.grid.rows > 1;
                d.length < m + v ? nn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : _ && "row" === h.grid.fill && nn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const w = [], y = [];
                let b = l.activeIndex;
                void 0 === s ? s = l.getSlideIndex(d.filter((e => e.classList.contains(h.slideActiveClass)))[0]) : b = s;
                const T = "next" === i || !i, A = "prev" === i || !i;
                let x = 0, S = 0;
                const E = _ ? Math.ceil(d.length / h.grid.rows) : d.length,
                    M = (_ ? d[s].column : s) + (f && void 0 === n ? -m / 2 + .5 : 0);
                if (M < v) {
                    x = Math.max(v - M, g);
                    for (let e = 0; e < v - M; e += 1) {
                        const t = e - Math.floor(e / E) * E;
                        if (_) {
                            const e = E - t - 1;
                            for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && w.push(t)
                        } else w.push(E - t - 1)
                    }
                } else if (M + m > E - v) {
                    S = Math.max(M - (E - 2 * v), g);
                    for (let e = 0; e < S; e += 1) {
                        const t = e - Math.floor(e / E) * E;
                        _ ? d.forEach(((e, r) => {
                            e.column === t && y.push(r)
                        })) : y.push(t)
                    }
                }
                if (l.__preventObserver__ = !0, requestAnimationFrame((() => {
                    l.__preventObserver__ = !1
                })), A && w.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0, p.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
                })), T && y.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0, p.append(d[e]), d[e].swiperLoopMoveDOM = !1
                })), l.recalcSlides(), "auto" === h.slidesPerView ? l.updateSlides() : _ && (w.length > 0 && A || y.length > 0 && T) && l.slides.forEach(((e, t) => {
                    l.grid.updateSlide(t, e, l.slides)
                })), h.watchSlidesProgress && l.updateSlidesOffset(), r) if (w.length > 0 && A) {
                    if (void 0 === t) {
                        const e = l.slidesGrid[b], t = l.slidesGrid[b + x] - e;
                        o ? l.setTranslate(l.translate - t) : (l.slideTo(b + Math.ceil(x), 0, !1, !0), n && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                    } else if (n) {
                        const e = _ ? w.length / h.grid.rows : w.length;
                        l.slideTo(l.activeIndex + e, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate
                    }
                } else if (y.length > 0 && T) if (void 0 === t) {
                    const e = l.slidesGrid[b], t = l.slidesGrid[b - S] - e;
                    o ? l.setTranslate(l.translate - t) : (l.slideTo(b - S, 0, !1, !0), n && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t))
                } else {
                    const e = _ ? y.length / h.grid.rows : y.length;
                    l.slideTo(l.activeIndex - e, 0, !1, !0)
                }
                if (l.allowSlidePrev = u, l.allowSlideNext = c, l.controller && l.controller.control && !a) {
                    const e = {slideRealIndex: t, direction: i, setTranslate: n, activeSlideIndex: s, byController: !0};
                    Array.isArray(l.controller.control) ? l.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === h.slidesPerView && r
                        })
                    })) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
                        ...e,
                        slideTo: l.controller.control.params.slidesPerView === h.slidesPerView && r
                    })
                }
                l.emit("loopFix")
            }, loopDestroy: function () {
                const e = this, {params: t, slidesEl: r} = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                e.recalcSlides();
                const i = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    i[t] = e
                })), e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                })), i.forEach((e => {
                    r.append(e)
                })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
            }
        }, En = {
            setGrabCursor: function (e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                    t.__preventObserver__ = !1
                }))
            }, unsetGrabCursor: function () {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                    e.__preventObserver__ = !1
                })))
            }
        };

        function Mn(e, t, r) {
            const i = $i(), {params: n} = e, s = n.edgeSwipeDetection, a = n.edgeSwipeThreshold;
            return !s || !(r <= a || r >= i.innerWidth - a) || "prevent" === s && (t.preventDefault(), !0)
        }

        function Cn(e) {
            const t = this, r = Xi();
            let i = e;
            i.originalEvent && (i = i.originalEvent);
            const n = t.touchEventsData;
            if ("pointerdown" === i.type) {
                if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
                n.pointerId = i.pointerId
            } else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
            if ("touchstart" === i.type) return void Mn(t, i, i.targetTouches[0].pageX);
            const {params: s, touches: a, enabled: o} = t;
            if (!o) return;
            if (!s.simulateTouch && "mouse" === i.pointerType) return;
            if (t.animating && s.preventInteractionOnTransition) return;
            !t.animating && s.cssMode && s.loop && t.loopFix();
            let l = i.target;
            if ("wrapper" === s.touchEventsTarget && !t.wrapperEl.contains(l)) return;
            if ("which" in i && 3 === i.which) return;
            if ("button" in i && i.button > 0) return;
            if (n.isTouched && n.isMoved) return;
            const d = !!s.noSwipingClass && "" !== s.noSwipingClass, u = i.composedPath ? i.composedPath() : i.path;
            d && i.target && i.target.shadowRoot && u && (l = u[0]);
            const c = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
                p = !(!i.target || !i.target.shadowRoot);
            if (s.noSwiping && (p ? function (e, t) {
                return void 0 === t && (t = this), function t(r) {
                    if (!r || r === Xi() || r === $i()) return null;
                    r.assignedSlot && (r = r.assignedSlot);
                    const i = r.closest(e);
                    return i || r.getRootNode ? i || t(r.getRootNode().host) : null
                }(t)
            }(c, l) : l.closest(c))) return void (t.allowClick = !0);
            if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
            a.currentX = i.pageX, a.currentY = i.pageY;
            const h = a.currentX, f = a.currentY;
            if (!Mn(t, i, h)) return;
            Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), a.startX = h, a.startY = f, n.touchStartTime = Zi(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (n.allowThresholdMove = !1);
            let m = !0;
            l.matches(n.focusableElements) && (m = !1, "SELECT" === l.nodeName && (n.isTouched = !1)), r.activeElement && r.activeElement.matches(n.focusableElements) && r.activeElement !== l && r.activeElement.blur();
            const g = m && t.allowTouchMove && s.touchStartPreventDefault;
            !s.touchStartForcePreventDefault && !g || l.isContentEditable || i.preventDefault(), s.freeMode && s.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
        }

        function Pn(e) {
            const t = Xi(), r = this, i = r.touchEventsData, {params: n, touches: s, rtlTranslate: a, enabled: o} = r;
            if (!o) return;
            if (!n.simulateTouch && "mouse" === e.pointerType) return;
            let l, d = e;
            if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
                if (null !== i.touchId) return;
                if (d.pointerId !== i.pointerId) return
            }
            if ("touchmove" === d.type) {
                if (l = [...d.changedTouches].filter((e => e.identifier === i.touchId))[0], !l || l.identifier !== i.touchId) return
            } else l = d;
            if (!i.isTouched) return void (i.startMoving && i.isScrolling && r.emit("touchMoveOpposite", d));
            const u = l.pageX, c = l.pageY;
            if (d.preventedByNestedSwiper) return s.startX = u, void (s.startY = c);
            if (!r.allowTouchMove) return d.target.matches(i.focusableElements) || (r.allowClick = !1), void (i.isTouched && (Object.assign(s, {
                startX: u,
                startY: c,
                currentX: u,
                currentY: c
            }), i.touchStartTime = Zi()));
            if (n.touchReleaseOnEdges && !n.loop) if (r.isVertical()) {
                if (c < s.startY && r.translate <= r.maxTranslate() || c > s.startY && r.translate >= r.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
            } else if (u < s.startX && r.translate <= r.maxTranslate() || u > s.startX && r.translate >= r.minTranslate()) return;
            if (t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements)) return i.isMoved = !0, void (r.allowClick = !1);
            i.allowTouchCallbacks && r.emit("touchMove", d), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = u, s.currentY = c;
            const p = s.currentX - s.startX, h = s.currentY - s.startY;
            if (r.params.threshold && Math.sqrt(p ** 2 + h ** 2) < r.params.threshold) return;
            if (void 0 === i.isScrolling) {
                let e;
                r.isHorizontal() && s.currentY === s.startY || r.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : p * p + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(p)) / Math.PI, i.isScrolling = r.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
            }
            if (i.isScrolling && r.emit("touchMoveOpposite", d), void 0 === i.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
            if (!i.startMoving) return;
            r.allowClick = !1, !n.cssMode && d.cancelable && d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
            let f = r.isHorizontal() ? p : h,
                m = r.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
            n.oneWayMovement && (f = Math.abs(f) * (a ? 1 : -1), m = Math.abs(m) * (a ? 1 : -1)), s.diff = f, f *= n.touchRatio, a && (f = -f, m = -m);
            const g = r.touchesDirection;
            r.swipeDirection = f > 0 ? "prev" : "next", r.touchesDirection = m > 0 ? "prev" : "next";
            const v = r.params.loop && !n.cssMode,
                _ = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
            if (!i.isMoved) {
                if (v && _ && r.loopFix({direction: r.swipeDirection}), i.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {bySwiperTouchMove: !0}
                    });
                    r.wrapperEl.dispatchEvent(e)
                }
                i.allowMomentumBounce = !1, !n.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", d)
            }
            if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && g !== r.touchesDirection && v && _ && Math.abs(f) >= 1) return Object.assign(s, {
                startX: u,
                startY: c,
                currentX: u,
                currentY: c,
                startTranslate: i.currentTranslate
            }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
            r.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = f + i.startTranslate;
            let w = !0, y = n.resistanceRatio;
            if (n.touchReleaseOnEdges && (y = 0), f > 0 ? (v && _ && i.allowThresholdMove && i.currentTranslate > (n.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), i.currentTranslate > r.minTranslate() && (w = !1, n.resistance && (i.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + i.startTranslate + f) ** y))) : f < 0 && (v && _ && i.allowThresholdMove && i.currentTranslate < (n.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: r.slides.length - ("auto" === n.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
            }), i.currentTranslate < r.maxTranslate() && (w = !1, n.resistance && (i.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - i.startTranslate - f) ** y))), w && (d.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.allowSlidePrev || r.allowSlideNext || (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void (s.diff = r.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
            }
            n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && r.freeMode || n.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(i.currentTranslate), r.setTranslate(i.currentTranslate))
        }

        function kn(e) {
            const t = this, r = t.touchEventsData;
            let i, n = e;
            if (n.originalEvent && (n = n.originalEvent), "touchend" === n.type || "touchcancel" === n.type) {
                if (i = [...n.changedTouches].filter((e => e.identifier === r.touchId))[0], !i || i.identifier !== r.touchId) return
            } else {
                if (null !== r.touchId) return;
                if (n.pointerId !== r.pointerId) return;
                i = n
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && (!["pointercancel", "contextmenu"].includes(n.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
            r.pointerId = null, r.touchId = null;
            const {params: s, touches: a, rtlTranslate: o, slidesGrid: l, enabled: d} = t;
            if (!d) return;
            if (!s.simulateTouch && "mouse" === n.pointerType) return;
            if (r.allowTouchCallbacks && t.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void (r.startMoving = !1);
            s.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = Zi(), c = u - r.touchStartTime;
            if (t.allowClick) {
                const e = n.path || n.composedPath && n.composedPath();
                t.updateClickedSlide(e && e[0] || n.target, e), t.emit("tap click", n), c < 300 && u - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
            }
            if (r.lastClickTime = Zi(), Qi((() => {
                t.destroyed || (t.allowClick = !0)
            })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === a.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void (r.startMoving = !1);
            let p;
            if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, p = s.followFinger ? o ? t.translate : -t.translate : -r.currentTranslate, s.cssMode) return;
            if (s.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: p});
            const h = p >= -t.maxTranslate() && !t.params.loop;
            let f = 0, m = t.slidesSizesGrid[0];
            for (let e = 0; e < l.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== l[e + t] ? (h || p >= l[e] && p < l[e + t]) && (f = e, m = l[e + t] - l[e]) : (h || p >= l[e]) && (f = e, m = l[l.length - 1] - l[l.length - 2])
            }
            let g = null, v = null;
            s.rewind && (t.isBeginning ? v = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
            const _ = (p - l[f]) / m, w = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (c > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (_ >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? g : f + w) : t.slideTo(f)), "prev" === t.swipeDirection && (_ > 1 - s.longSwipesRatio ? t.slideTo(f + w) : null !== v && _ < 0 && Math.abs(_) > s.longSwipesRatio ? t.slideTo(v) : t.slideTo(f))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || n.target !== t.navigation.nextEl && n.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : f + w), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : f)) : n.target === t.navigation.nextEl ? t.slideTo(f + w) : t.slideTo(f)
            }
        }

        function On() {
            const e = this, {params: t, el: r} = e;
            if (r && 0 === r.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: i, allowSlidePrev: n, snapGrid: s} = e, a = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
            const o = a && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }), 500)), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
        }

        function zn(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function In() {
            const e = this, {wrapperEl: t, rtlTranslate: r, enabled: i} = e;
            if (!i) return;
            let n;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const s = e.maxTranslate() - e.minTranslate();
            n = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, n !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }

        function Ln(e) {
            const t = this;
            vn(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }

        function Dn() {
            const e = this;
            e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
        }

        const Bn = (e, t) => {
            const r = Xi(), {params: i, el: n, wrapperEl: s, device: a} = e, o = !!i.nested,
                l = "on" === t ? "addEventListener" : "removeEventListener", d = t;
            n && "string" != typeof n && (r[l]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: o
            }), n[l]("touchstart", e.onTouchStart, {passive: !1}), n[l]("pointerdown", e.onTouchStart, {passive: !1}), r[l]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: o
            }), r[l]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }), r[l]("touchend", e.onTouchEnd, {passive: !0}), r[l]("pointerup", e.onTouchEnd, {passive: !0}), r[l]("pointercancel", e.onTouchEnd, {passive: !0}), r[l]("touchcancel", e.onTouchEnd, {passive: !0}), r[l]("pointerout", e.onTouchEnd, {passive: !0}), r[l]("pointerleave", e.onTouchEnd, {passive: !0}), r[l]("contextmenu", e.onTouchEnd, {passive: !0}), (i.preventClicks || i.preventClicksPropagation) && n[l]("click", e.onClick, !0), i.cssMode && s[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", On, !0) : e[d]("observerUpdate", On, !0), n[l]("load", e.onLoad, {capture: !0}))
        };
        var Gn = {
            attachEvents: function () {
                const e = this, {params: t} = e;
                e.onTouchStart = Cn.bind(e), e.onTouchMove = Pn.bind(e), e.onTouchEnd = kn.bind(e), e.onDocumentTouchStart = Dn.bind(e), t.cssMode && (e.onScroll = In.bind(e)), e.onClick = zn.bind(e), e.onLoad = Ln.bind(e), Bn(e, "on")
            }, detachEvents: function () {
                Bn(this, "off")
            }
        };
        const Fn = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var Rn = {
            setBreakpoint: function () {
                const e = this, {realIndex: t, initialized: r, params: i, el: n} = e, s = i.breakpoints;
                if (!s || s && 0 === Object.keys(s).length) return;
                const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
                if (!a || e.currentBreakpoint === a) return;
                const o = (a in s ? s[a] : void 0) || e.originalParams, l = Fn(e, i), d = Fn(e, o),
                    u = e.params.grabCursor, c = o.grabCursor, p = i.enabled;
                l && !d ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && d && (n.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && n.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), u && !c ? e.unsetGrabCursor() : !u && c && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    if (void 0 === o[t]) return;
                    const r = i[t] && i[t].enabled, n = o[t] && o[t].enabled;
                    r && !n && e[t].disable(), !r && n && e[t].enable()
                }));
                const h = o.direction && o.direction !== i.direction,
                    f = i.loop && (o.slidesPerView !== i.slidesPerView || h), m = i.loop;
                h && r && e.changeDirection(), Ji(e.params, o);
                const g = e.params.enabled, v = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), p && !g ? e.disable() : !p && g && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), r && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && v ? (e.loopCreate(t), e.updateSlides()) : m && !v && e.loopDestroy()), e.emit("breakpoint", o)
            }, getBreakpoint: function (e, t, r) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
                let i = !1;
                const n = $i(), s = "window" === t ? n.innerHeight : r.clientHeight, a = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: s * t, point: e}
                    }
                    return {value: e, point: e}
                }));
                a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < a.length; e += 1) {
                    const {point: s, value: o} = a[e];
                    "window" === t ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = s) : o <= r.clientWidth && (i = s)
                }
                return i || "max"
            }
        }, Nn = {
            addClasses: function () {
                const e = this, {classNames: t, params: r, rtl: i, el: n, device: s} = e, a = function (e, t) {
                    const r = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((i => {
                            e[i] && r.push(t + i)
                        })) : "string" == typeof e && r.push(t + e)
                    })), r
                }(["initialized", r.direction, {"free-mode": e.params.freeMode && r.freeMode.enabled}, {autoheight: r.autoHeight}, {rtl: i}, {grid: r.grid && r.grid.rows > 1}, {"grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": r.cssMode}, {centered: r.cssMode && r.centeredSlides}, {"watch-progress": r.watchSlidesProgress}], r.containerModifierClass);
                t.push(...a), n.classList.add(...t), e.emitContainerClasses()
            }, removeClasses: function () {
                const {el: e, classNames: t} = this;
                e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
            }
        }, Yn = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };

        function Vn(e, t) {
            return function (r) {
                void 0 === r && (r = {});
                const i = Object.keys(r)[0], n = r[i];
                "object" == typeof n && null !== n ? (!0 === e[i] && (e[i] = {enabled: !0}), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in n ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {enabled: !1}), Ji(t, r)) : Ji(t, r)) : Ji(t, r)
            }
        }

        const jn = {
            eventsEmitter: fn,
            update: yn,
            translate: bn,
            transition: An,
            slide: xn,
            loop: Sn,
            grabCursor: En,
            events: Gn,
            breakpoints: Rn,
            checkOverflow: {
                checkOverflow: function () {
                    const e = this, {isLocked: t, params: r} = e, {slidesOffsetBefore: i} = r;
                    if (i) {
                        const t = e.slides.length - 1, r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > r
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: Nn
        }, qn = {};

        class Hn {
            constructor() {
                let e, t;
                for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
                1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = Ji({}, t), e && !t.el && (t.el = e);
                const s = Xi();
                if (t.el && "string" == typeof t.el && s.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return s.querySelectorAll(t.el).forEach((r => {
                        const i = Ji({}, t, {el: r});
                        e.push(new Hn(i))
                    })), e
                }
                const a = this;
                a.__swiper__ = !0, a.support = pn(), a.device = hn({userAgent: t.userAgent}), a.browser = (cn || (cn = function () {
                    const e = $i(), t = hn();
                    let r = !1;

                    function i() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }

                    if (i()) {
                        const t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            r = e < 16 || 16 === e && i < 2
                        }
                    }
                    const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), s = i();
                    return {isSafari: r || s, needPerspectiveFix: r, need3dFix: s || n && t.ios, isWebView: n}
                }()), cn), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                const o = {};
                a.modules.forEach((e => {
                    e({
                        params: t,
                        swiper: a,
                        extendParams: Vn(t, o),
                        on: a.on.bind(a),
                        once: a.once.bind(a),
                        off: a.off.bind(a),
                        emit: a.emit.bind(a)
                    })
                }));
                const l = Ji({}, Yn, o);
                return a.params = Ji({}, l, qn, t), a.originalParams = Ji({}, a.params), a.passedParams = Ji({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                    a.on(e, a.params.on[e])
                })), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
                    enabled: a.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === a.params.direction
                    },
                    isVertical() {
                        return "vertical" === a.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: a.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), a.emit("_swiper"), a.params.init && a.init(), a
            }

            getDirectionLabel(e) {
                return this.isHorizontal() ? e : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[e]
            }

            getSlideIndex(e) {
                const {slidesEl: t, params: r} = this, i = on(rn(t, `.${r.slideClass}, swiper-slide`)[0]);
                return on(e) - i
            }

            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }

            recalcSlides() {
                const {slidesEl: e, params: t} = this;
                this.slides = rn(e, `.${t.slideClass}, swiper-slide`)
            }

            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }

            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }

            setProgress(e, t) {
                const r = this;
                e = Math.min(Math.max(e, 0), 1);
                const i = r.minTranslate(), n = (r.maxTranslate() - i) * e + i;
                r.translateTo(n, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
            }

            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }

            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }

            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.forEach((r => {
                    const i = e.getSlideClasses(r);
                    t.push({slideEl: r, classNames: i}), e.emit("_slideClass", r, i)
                })), e.emit("_slideClasses", t)
            }

            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {params: r, slides: i, slidesGrid: n, slidesSizesGrid: s, size: a, activeIndex: o} = this;
                let l = 1;
                if ("number" == typeof r.slidesPerView) return r.slidesPerView;
                if (r.centeredSlides) {
                    let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
                    for (let r = o + 1; r < i.length; r += 1) i[r] && !e && (t += Math.ceil(i[r].swiperSlideSize), l += 1, t > a && (e = !0));
                    for (let r = o - 1; r >= 0; r -= 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > a && (e = !0))
                } else if ("current" === e) for (let e = o + 1; e < i.length; e += 1) (t ? n[e] + s[e] - n[o] < a : n[e] - n[o] < a) && (l += 1); else for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < a && (l += 1);
                return l
            }

            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {snapGrid: t, params: r} = e;

                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                let n;
                if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && vn(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && e.updateAutoHeight(); else {
                    if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
                        const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
                        n = e.slideTo(t.length - 1, 0, !1, !0)
                    } else n = e.slideTo(e.activeIndex, 0, !1, !0);
                    n || i()
                }
                r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }

            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const r = this, i = r.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), r.emit("changeDirection"), t && r.update()), r
            }

            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }

            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                let r = e || t.params.el;
                if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
                r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let n = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : rn(r, i())[0];
                return !n && t.params.createElements && (n = sn("div", t.params.wrapperClass), r.append(n), rn(r, `.${t.params.slideClass}`).forEach((e => {
                    n.append(e)
                }))), Object.assign(t, {
                    el: r,
                    wrapperEl: n,
                    slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : n,
                    hostEl: t.isElement ? r.parentNode.host : r,
                    mounted: !0,
                    rtl: "rtl" === r.dir.toLowerCase() || "rtl" === an(r, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === an(r, "direction")),
                    wrongRTL: "-webkit-box" === an(n, "display")
                }), !0
            }

            init(e) {
                const t = this;
                if (t.initialized) return t;
                if (!1 === t.mount(e)) return t;
                t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                const r = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
                    e.complete ? vn(t, e) : e.addEventListener("load", (e => {
                        vn(t, e.target)
                    }))
                })), wn(t), t.initialized = !0, wn(t), t.emit("init"), t.emit("afterInit"), t
            }

            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const r = this, {params: i, el: n, wrapperEl: s, slides: a} = r;
                return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), t && (r.removeClasses(), n && "string" != typeof n && n.removeAttribute("style"), s && s.removeAttribute("style"), a && a.length && a.forEach((e => {
                    e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
                    r.off(e)
                })), !1 !== e && (r.el && "string" != typeof r.el && (r.el.swiper = null), function (e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {
                        }
                        try {
                            delete t[e]
                        } catch (e) {
                        }
                    }))
                }(r)), r.destroyed = !0), null
            }

            static extendDefaults(e) {
                Ji(qn, e)
            }

            static get extendedDefaults() {
                return qn
            }

            static get defaults() {
                return Yn
            }

            static installModule(e) {
                Hn.prototype.__modules__ || (Hn.prototype.__modules__ = []);
                const t = Hn.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }

            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => Hn.installModule(e))), Hn) : (Hn.installModule(e), Hn)
            }
        }

        Object.keys(jn).forEach((e => {
            Object.keys(jn[e]).forEach((t => {
                Hn.prototype[t] = jn[e][t]
            }))
        })), Hn.use([function (e) {
            let {swiper: t, on: r, emit: i} = e;
            const n = $i();
            let s = null, a = null;
            const o = () => {
                t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
            }, l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange")
            };
            r("init", (() => {
                t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver((e => {
                    a = n.requestAnimationFrame((() => {
                        const {width: r, height: i} = t;
                        let n = r, s = i;
                        e.forEach((e => {
                            let {contentBoxSize: r, contentRect: i, target: a} = e;
                            a && a !== t.el || (n = i ? i.width : (r[0] || r).inlineSize, s = i ? i.height : (r[0] || r).blockSize)
                        })), n === r && s === i || o()
                    }))
                })), s.observe(t.el)) : (n.addEventListener("resize", o), n.addEventListener("orientationchange", l))
            })), r("destroy", (() => {
                a && n.cancelAnimationFrame(a), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), n.removeEventListener("resize", o), n.removeEventListener("orientationchange", l)
            }))
        }, function (e) {
            let {swiper: t, extendParams: r, on: i, emit: n} = e;
            const s = [], a = $i(), o = function (e, r) {
                void 0 === r && (r = {});
                const i = new (a.MutationObserver || a.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void n("observerUpdate", e[0]);
                    const r = function () {
                        n("observerUpdate", e[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(r) : a.setTimeout(r, 0)
                }));
                i.observe(e, {
                    attributes: void 0 === r.attributes || r.attributes,
                    childList: void 0 === r.childList || r.childList,
                    characterData: void 0 === r.characterData || r.characterData
                }), s.push(i)
            };
            r({observer: !1, observeParents: !1, observeSlideChildren: !1}), i("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = function (e, t) {
                            const r = [];
                            let i = e.parentElement;
                            for (; i;) r.push(i), i = i.parentElement;
                            return r
                        }(t.hostEl);
                        for (let t = 0; t < e.length; t += 1) o(e[t])
                    }
                    o(t.hostEl, {childList: t.params.observeSlideChildren}), o(t.wrapperEl, {attributes: !1})
                }
            })), i("destroy", (() => {
                s.forEach((e => {
                    e.disconnect()
                })), s.splice(0, s.length)
            }))
        }]);
        var Wn = r(379), Xn = r.n(Wn), Un = r(795), $n = r.n(Un), Qn = r(569), Zn = r.n(Qn), Kn = r(565), Jn = r.n(Kn),
            es = r(216), ts = r.n(es), rs = r(589), is = r.n(rs), ns = r(709), ss = {};
        ss.styleTagTransform = is(), ss.setAttributes = Jn(), ss.insert = Zn().bind(null, "head"), ss.domAPI = $n(), ss.insertStyleElement = ts(), Xn()(ns.Z, ss), ns.Z && ns.Z.locals && ns.Z.locals;
        const as = document.querySelector(".cart"), os = document.querySelector(".cart__title"),
            ls = ji.timeline({paused: !0, defaults: {duration: .92, ease: "expo.inOut"}}),
            ds = [{maxWidth: 576, xValue: "-70%", xValueSet: "-90%"}, {
                maxWidth: 1024,
                xValue: "-40%",
                xValueSet: "-50%"
            }, {maxWidth: 1 / 0, xValue: "-30%", xValueSet: "-50%"}], us = () => {
                const {xValue: e, xValueSet: t} = (() => {
                    const e = window.innerWidth;
                    for (const t of ds) if (e <= t.maxWidth) return t;
                    return ds[ds.length - 1]
                })();
                ji.set(as, {pointerEvents: "none", visibility: "hidden", opacity: 0}), ji.set(os, {
                    autoAlpha: 0,
                    x: t
                }), ls.to(".header, main, .footer", {
                    x: e,
                    pointerEvents: "none"
                }, 0).to("body", {overflow: "hidden"}, 0).to(as, {
                    opacity: 1,
                    visibility: "visible",
                    stagger: .02,
                    pointerEvents: "auto"
                }, .2).to(os, {autoAlpha: 1, x: 0}, .28)
            }, cs = () => {
                console.log("Opening cart"), ls.play()
            };
        window.addEventListener("resize", us);
        (function () {
            const e = document.querySelector(".mobile-nav-btn"), t = document.querySelector(".mobile-nav__close"),
                r = document.querySelector(".mobile-nav");
            document.querySelector(".nav-icon"), e.addEventListener("click", (function () {
                r.classList.add("mobile-nav--open"), document.body.classList.add("no-scroll")
            })), t.addEventListener("click", (function () {
                r.classList.remove("mobile-nav--open"), document.body.classList.remove("no-scroll")
            }))
        })(), us(), document.querySelectorAll(".cart__add").forEach((e => {
            const t = e.querySelector(".minus-btn"), r = e.querySelector(".plus-btn"), i = e.querySelector(".count");
            let n = 0;
            i && (n = parseInt(i.textContent)), t.addEventListener("click", (() => {
                n > 0 && (n--, i && (i.textContent = n))
            })), r.addEventListener("click", (() => {
                n++, i && (i.textContent = n)
            }))
        }));
        const ps = document.querySelector(".header__cart"), hs = document.querySelector(".header__cart-btn");
        document.querySelector(".cart__close").addEventListener("click", (() => {
            console.log("Closing cart"), ls.reverse()
        })), ps.addEventListener("click", cs), hs.addEventListener("click", cs);
        const fs = new Hn(".swiper", {
            slidesPerView: 1,
            navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
            breakpoints: {576: {slidesPerView: 1}, 700: {slidesPerView: 2}}
        });
        document.querySelector(".swiper").addEventListener("wheel", (function (e) {
            e.deltaY > 0 ? fs.slideNext() : fs.slidePrev(), e.preventDefault()
        })), function () {
            let e = document.querySelector(".preloader__count"), t = 0;
            !function r() {
                if (t < 100) {
                    let i = Math.floor(10 * Math.random()) + 1;
                    t = Math.min(t + i, 100), e.textContent = t;
                    let n = Math.floor(200 * Math.random()) + 25;
                    setTimeout(r, n)
                }
            }()
        }(), ji.timeline().to(".preloader__count", {
            opacity: 0,
            delay: 3,
            duration: .5
        }).to(".preloader__name", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            opacity: 0,
            ease: "power4.inOut"
        }).fromTo(".preloader", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, {
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            ease: "power4.inOut",
            duration: 1.5,
            onComplete() {
                ji.set("body", {overflow: "auto"})
            }
        })
    }()
}();
