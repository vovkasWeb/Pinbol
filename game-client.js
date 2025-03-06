var On = Object.defineProperty;
var Pn = (W, B, b) => B in W ? On(W, B, {enumerable: !0, configurable: !0, writable: !0, value: b}) : W[B] = b;
var m = (W, B, b) => (Pn(W, typeof B != "symbol" ? B + "" : B, b), b);
(function () {
    "use strict";
    var W = document.createElement("style");
    W.textContent = `@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap";#brush-app{position:fixed;font-family:IBM Plex Sans;font-size:13px;font-weight:400;line-height:15px;letter-spacing:0em;text-align:center;color:#fff;z-index:2;width:100%}#brush-app.disabled-interaction{pointer-events:none}#brush-app img{-webkit-user-select:none;user-select:none;touch-action:manipulation;-webkit-user-drag:none}#brush-app .toast{position:absolute;top:100vh;left:50%;width:max-content;max-width:calc(100vw - 32px);padding:20px 50px 20px 20px;background:radial-gradient(354.9% 166.29% at -21.73% -4.12%,#535f76 0%,#343748 100%);box-shadow:0 1px #ffffff40 inset,0 0 15px #000000e6;border-radius:16px;text-align:left;z-index:2;animation:fade-in .15s ease-out forwards;box-sizing:border-box}#brush-app .toast .message{margin:0;color:#ffcc29;font-size:16px;line-height:normal}@keyframes fade-in{0%{opacity:0;transform:translate(-50%,150%)}to{opacity:1;transform:translate(-50%,calc(-100% - 16px))}}#brush-app .challenge-popup-title{font-size:20px;font-weight:700;line-height:24px;letter-spacing:0em;text-align:center;padding:.5em}#brush-app .modal .challenge-popup{padding:28px}#brush-app .challenge-popup-message{padding:.5em}#brush-app .brush-button{display:flex;align-items:center;width:120px;height:64px;border-radius:50%;position:fixed;right:-26px;top:80vh;cursor:pointer;z-index:1}#brush-app .brush-button:hover{right:-16px;transition:right .3s}#brush-app .brush-button.inactive{pointer-events:none;filter:brightness(.5)}#brush-app .brush-button-content{height:50%;object-fit:contain;padding:10px}#brush-app .modal{display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5);justify-content:center;align-items:center;z-index:1}#brush-app .modal-opened{display:flex;justify-content:center;align-items:center;position:fixed;z-index:1;top:10vh;width:calc(100vw - 16px);max-width:280px}#brush-app .modal-opened.right{right:0}#brush-app .modal-opened.left{left:0}#brush-app .modal-closed{display:flex;justify-content:center;align-items:center;position:fixed;top:80vh;z-index:1;color:#fff;cursor:pointer;min-width:180px}#brush-app .modal-closed.inactive{pointer-events:none;filter:brightness(.5)}#brush-app .modal-closed.right{right:0}#brush-app .modal-closed.left{left:0}#brush-app .modal-closed-title{width:inherit;height:18px;display:flex;justify-content:space-around;align-items:center;color:#ffcc29;font-weight:600}#brush-app .modal-content{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:column;min-height:25px;max-height:70vh;overflow:hidden auto;-ms-overflow-style:none;scrollbar-width:thin;scrollbar-color:#ffffff1a transparent;background:#fff;padding:16px 8px 8px;border-radius:16px;position:relative;width:100%;background:radial-gradient(333.64% 121% at -21.73% -4.12%,#536976ee 0%,#181a23ee 100%);box-shadow:0 1px #ffffff40 inset;pointer-events:all}#brush-app .modal-content.right{border-radius:16px 0 0 16px}#brush-app .modal-content.left{border-radius:0 16px 16px 0}#brush-app .modal-closed .modal-content.right{padding:15px;border-radius:8px 0 0 8px}#brush-app .modal-closed .modal-content.left{border-radius:0 8px 8px 0}#brush-app .modal-highlight{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;pointer-events:none}#brush-app .modal-highlight:before{content:"";position:absolute;width:200px;height:200vh;top:-50%;left:-75%;background:linear-gradient(to right,#53697600,#8499a61a,#53697600);transform:skew(-45deg);pointer-events:none;animation:shine 7s infinite;animation-timing-function:cubic-bezier(0,.4,.45,.99)}@keyframes shine{0%{transform:scale(10,20) skew(-45deg) translate(-200%)}50%{transform:scale(10,20) skew(-45deg) translate(200%)}to{transform:scale(10,20) skew(-45deg) translate(200%)}}#brush-app .modal-content::-webkit-scrollbar{display:none}#brush-app .view-rules-header{color:#fffa;margin:10px;text-decoration:underline;cursor:pointer}#brush-app .close{position:absolute;top:10px;right:10px;cursor:pointer;font-size:30px;transition:transform .2s;z-index:1}#brush-app .close:hover{transform:scale(1.3)}#brush-app .brush-logo{width:100%;position:absolute;left:0;top:-8px;z-index:1}#brush-app .brush-logo>img{width:50%}#brush-app .modal-closed .brush-logo>img{width:70%}#brush-app .modal>.join-popup{max-width:370px}#brush-app .challenge-title{font-size:20px;font-weight:700;line-height:24px;letter-spacing:0em;text-align:center;margin-top:12px}#brush-app .challenge-descriptioncaption{font-size:16px;font-weight:700;line-height:19px;letter-spacing:0em;text-align:center}#brush-app .challenge-description{color:#fff;text-align:left;margin:12px 0;padding:0 8px 0 24px}#brush-app .copy-player-code{display:flex;align-items:center;justify-content:center;height:19px;color:#ffcc29;font-size:17px;line-height:19px;cursor:pointer}#brush-app .copy-player-code img{height:19px;width:auto;object-fit:contain;margin-left:8px}#brush-app .input-group{display:flex;gap:10px;justify-content:center;margin-top:10px}#brush-app .input-group input{width:56px;height:67px;margin:15px 0;padding:0;text-align:center;border-radius:12px;background:#0000001a;box-shadow:0 2px 4px 4px #0000001a inset,0 1px #ffffff40;border:2px solid #0000001a;color:#fff;font-size:50px;line-height:50px}#brush-app .panels-in-row{display:flex}#brush-app .panels-in-row .panel{padding-top:8px}#brush-app .h-separator{display:flex;padding:5px}#brush-app .panel{display:flex;flex-direction:column;width:100%;background:#0000001a;border:2px solid #0000001a;box-shadow:0 2px 4px 4px #0000001a inset,0 1px #ffffff40;border-radius:10px;padding-top:12px;padding-bottom:8px;margin-top:10px;box-sizing:border-box}#brush-app .panel.leaderboard{overflow:hidden auto;-ms-overflow-style:none;scrollbar-width:thin;scrollbar-color:#ffffff1a transparent;min-height:124px;padding-top:8px}#brush-app .panel.leaderboard::-webkit-scrollbar{display:none}#brush-app .panel .leaderboard-loading-container{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;margin-bottom:10px}#brush-app .panel .leaderboard-loading-message{margin:0;color:#fff6;font-size:10px;font-weight:700;line-height:17px}#brush-app .current-player-code{display:flex;align-items:center;padding:0;cursor:pointer}#brush-app .current-player-code img{height:14px;width:auto;object-fit:contain;margin-left:12px}#brush-app .panel.calculating{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding-bottom:12px;color:#fff6;font-size:10px;font-weight:700}#brush-app .panel.spins-limit-reached{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#ff814b;font-size:10px;font-weight:700}#brush-app .challenge-timer-text{display:inline-block;color:#fff6;font-size:10px;font-weight:700}#brush-app .digits-container{display:flex;justify-content:center;align-items:center;height:100%;margin-top:10px;margin-bottom:10px}#brush-app .challenge-timer-header{color:#fff6;font-size:10px;font-weight:700;line-height:120%}#brush-app .modal-closed .challenge-timer-header{font-size:13px}#brush-app .challenge-timer-digit{color:#000;font-size:18px;padding:0 2px;margin:0 1px;line-height:110%;border-radius:2px;font-weight:500;background:linear-gradient(0deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),linear-gradient(180deg,#ffffff 0%,#e0e0e0 49.6%,#727272 50.52%,#ffffff 51.27%,#dddddd 100%);border:1px solid #0000001a}#brush-app .challenge-timer-separator{color:#fff;font-size:14px}#brush-app table{width:100%;border-collapse:collapse}#brush-app tr{border-bottom:1px solid #0000001a}#brush-app tr.sticky-active-table-row{display:table-row;position:sticky;top:initial;bottom:initial;z-index:1;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:none}#brush-app tr.sticky-active-table-row.top{top:-8px;border-radius:10px 10px 0 0}#brush-app tr.sticky-active-table-row.bottom{bottom:-8px;border-radius:0 0 10px 10px}#brush-app tr.sticky-active-table-row.middle{display:none}#brush-app tr.sticky-active-table-row:after{content:"";position:absolute;left:0;width:100%;height:1px;background-color:#0000001a}#brush-app tr.sticky-active-table-row.top:after{bottom:0}#brush-app tr.sticky-active-table-row.bottom:after{top:0}#brush-app th{font-size:10px;font-weight:700;line-height:15px;letter-spacing:0em;text-align:left;color:#fff6}#brush-app th.my-results-header{height:20px;text-align:center;padding:0;position:relative}#brush-app th.my-results-header:before{content:". . .";position:absolute;top:0}#brush-app th,#brush-app td{padding:10px 8px;text-align:right}#brush-app caption{font-size:16px;font-weight:700;line-height:19px;letter-spacing:0em;text-align:center;margin:2px 0 10px}#brush-app .challenge-table-rank{font-weight:700;text-align:center;width:24px}#brush-app .challenge-table-token{text-align:left}#brush-app .challenge-table-multi{font-weight:700;text-align:right}#brush-app .challenge-table-rank.active,#brush-app .challenge-table-token.active,#brush-app .challenge-table-multi.active{color:#ffcc29}#brush-app .challenge-code-input{text-transform:uppercase}#brush-app .input-group input.hasError{border:1px solid #eb5671}#brush-app .modal-content .error-message{color:#eb5671}#brush-app .modal-content .join-validation{margin:5px 0 10px}#brush-app .modal-content .finish-validation{margin-top:10px}#brush-app .yellow-panel{border:0;border-radius:12px;outline:0;background:linear-gradient(0deg,#ffe142 0%,#ffcd00 57.29%,#ffc700 100%);box-shadow:0 1px 1px #fff inset,0 -4px #d07e04 inset;font-size:14px;font-weight:700;line-height:17px;letter-spacing:0em;text-align:center;color:#000;cursor:pointer;transition:background .3s,box-shadow .3s}#brush-app .yellow-panel.left{border-radius:0 12px 12px 0;left:-10px;padding-left:12px}#brush-app .yellow-panel.right{border-radius:12px 0 0 12px;right:-10px}#brush-app .yellow-panel:hover{background:linear-gradient(0deg,#ffd42a 0%,#ffc200 57.29%,#ffb700 100%);box-shadow:0 2px 2px #fff inset,0 -6px #bf6c03 inset}#brush-app .yellow-panel.right:hover{right:0}#brush-app .yellow-panel.left:hover{left:0}#brush-app .close-btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:48px;border:0;border-radius:12px;outline:0;background:linear-gradient(0deg,#ffe142 0%,#ffcd00 57.29%,#ffc700 100%);box-shadow:0 1px 1px #fff inset,0 -4px #d07e04 inset;font-size:14px;font-weight:700;line-height:17px;letter-spacing:0em;text-align:center;color:#000;cursor:pointer;transition:background .3s,box-shadow .3s;margin-top:10px}#brush-app .close-btn:hover{background:linear-gradient(0deg,#ffd42a 0%,#ffc200 57.29%,#ffb700 100%);box-shadow:0 2px 2px #fff inset,0 -6px #bf6c03 inset}#brush-app .close-btn.disabled{background:linear-gradient(0deg,#e0e0e0 0%,#c0c0c0 57.29%,#a0a0a0 100%);box-shadow:none;cursor:not-allowed;pointer-events:none}#brush-app .close-btn.loading{opacity:.6;cursor:not-allowed;pointer-events:none}#brush-app .pagination{display:flex;align-items:center;justify-content:center}#brush-app .pagination .pagination-item{display:flex;align-items:center;justify-content:center;height:36px;width:36px;background-color:transparent;color:#fff;cursor:default}#brush-app .pagination .pagination-item.active{color:#ffcc29;font-weight:700}#brush-app .pagination .pagination-button{width:100%;height:100%;border:none;background-color:inherit;color:inherit;font-weight:inherit;cursor:pointer}@media screen and (max-width: 430px){#brush-app .modal-opened{max-width:336px}#brush-app .modal-opened,#brush-app .modal-opened.right,#brush-app .modal-opened.left{left:50%;transform:translate(-50%)}#brush-app .modal-opened>.modal-content,#brush-app .modal-opened>.modal-content.right,#brush-app .modal-opened>.modal-content.left{border-radius:16px}}@media screen and (max-height: 430px){#brush-app .modal-opened,#brush-app .modal-opened.right,#brush-app .modal-opened.left{left:50%;transform:translate(-50%);top:auto;bottom:0}#brush-app .modal-content,#brush-app .modal-content.right,#brush-app .modal-content.left{max-height:85vh;margin-bottom:10px}#brush-app .modal-opened>.modal-content,#brush-app .modal-opened>.modal-content.right,#brush-app .modal-opened>.modal-content.left{border-radius:16px 16px 0 0}#brush-app .modal>.join-popup>.modal-content{border-radius:16px}}#brush-app>.modal>.modal-opened{top:unset}.dot-flashing{position:relative;width:6px;height:6px;border-radius:5px;background-color:#fff;color:#fff;animation:dot-flashing 1s infinite linear alternate;animation-delay:.25s}.dot-flashing:before,.dot-flashing:after{content:"";display:inline-block;position:absolute;top:0}.dot-flashing:before{left:-10px;width:6px;height:6px;border-radius:5px;background-color:#fff;color:#fff;animation:dot-flashing 1s infinite alternate;animation-delay:0s}.dot-flashing:after{left:10px;width:6px;height:6px;border-radius:5px;background-color:#fff;color:#fff;animation:dot-flashing 1s infinite alternate;animation-delay:.5s}@keyframes dot-flashing{0%,to{background-color:#fff}25%,75%{background-color:#ffffff80}50%{background-color:#ffffff60}}#brush-app .logo-dot{display:flex;justify-content:start;height:5px;width:auto;margin-top:2%}#brush-app .logo-mobile{display:flex;justify-content:space-between;align-items:center;height:10px;width:auto}#brush-app .logo-dot img{max-width:5px;max-height:5px}#brush-app .logo-mobile img{max-width:10px;max-height:10px;margin-bottom:2px}#brush-app .flex-between{display:flex;width:100%;align-items:center;justify-content:space-between}@media screen and (max-width: 770px) and (orientation: portrait){#brush-app .modal-closed{top:auto;font-size:10px;min-width:67px;scale:var(--viewport-scale-x);bottom:var(--mobile-bottom)}#brush-app .modal-closed .modal-content{padding-top:4px;padding-bottom:4px}#brush-app .brush-button{top:auto;scale:calc(var(--viewport-scale-x) * .6);bottom:var(--mobile-bottom)}#brush-app .brush-button.right,#brush-app .modal-closed.right{transform-origin:bottom right}#brush-app .brush-button.left,#brush-app .modal-closed.left{transform-origin:bottom left}#brush-app .modal-closed-title{font-size:10px}#brush-app .modal>.join-popup{top:30px;bottom:auto}}@media screen and (max-width: 980px) and (orientation: landscape){#brush-app .modal-closed{top:auto;min-width:67px;font-size:10px;scale:1.1;bottom:42px}#brush-app .brush-button{top:auto;bottom:42px;scale:.8}#brush-app .brush-button.right,#brush-app .modal-closed.right{transform-origin:bottom right}#brush-app .brush-button.left,#brush-app .modal-closed.left{transform-origin:bottom left}#brush-app .modal-closed-title{font-size:10px}#brush-app .modal>.join-popup{top:30px;bottom:auto}}#brush-app *::-webkit-scrollbar{width:6px}#brush-app *::-webkit-scrollbar-thumb{background-color:#ffffff1a;border-radius:3px}#brush-app *::-webkit-scrollbar-track{background-color:transparent;border-radius:5px}#brush-app>.modal-closed.right>.modal-content.right,#brush-app>.modal-closed.left>.modal-content.left,#brush-app>.modal-closed>.modal-content{justify-content:center}
`, document.head.appendChild(W);
    var B, b, ut, ht, Z, ct, dt, Ke, ce = {}, pt = [],
        hi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Je = Array.isArray;

    function Y(n, e) {
        for (var t in e) n[t] = e[t];
        return n
    }

    function ft(n) {
        var e = n.parentNode;
        e && e.removeChild(n)
    }

    function ci(n, e, t) {
        var i, s, a, r = {};
        for (a in e) a == "key" ? i = e[a] : a == "ref" ? s = e[a] : r[a] = e[a];
        if (arguments.length > 2 && (r.children = arguments.length > 3 ? B.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) r[a] === void 0 && (r[a] = n.defaultProps[a]);
        return Ee(n, r, i, s, null)
    }

    function Ee(n, e, t, i, s) {
        var a = {
            type: n,
            props: e,
            key: t,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: s ?? ++ut,
            __i: -1,
            __u: 0
        };
        return s == null && b.vnode != null && b.vnode(a), a
    }

    function ee() {
        return {current: null}
    }

    function N(n) {
        return n.children
    }

    function k(n, e) {
        this.props = n, this.context = e
    }

    function ne(n, e) {
        if (e == null) return n.__ ? ne(n.__, n.__i + 1) : null;
        for (var t; e < n.__k.length; e++) if ((t = n.__k[e]) != null && t.__e != null) return t.__e;
        return typeof n.type == "function" ? ne(n) : null
    }

    function gt(n) {
        var e, t;
        if ((n = n.__) != null && n.__c != null) {
            for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++) if ((t = n.__k[e]) != null && t.__e != null) {
                n.__e = n.__c.base = t.__e;
                break
            }
            return gt(n)
        }
    }

    function mt(n) {
        (!n.__d && (n.__d = !0) && Z.push(n) && !Oe.__r++ || ct !== b.debounceRendering) && ((ct = b.debounceRendering) || dt)(Oe)
    }

    function Oe() {
        var n, e, t, i, s, a, r, o, l;
        for (Z.sort(Ke); n = Z.shift();) n.__d && (e = Z.length, i = void 0, a = (s = (t = n).__v).__e, o = [], l = [], (r = t.__P) && ((i = Y({}, s)).__v = s.__v + 1, b.vnode && b.vnode(i), We(r, i, s, t.__n, r.ownerSVGElement !== void 0, 32 & s.__u ? [a] : null, o, a ?? ne(s), !!(32 & s.__u), l), i.__.__k[i.__i] = i, St(o, i, l), i.__e != a && gt(i)), Z.length > e && Z.sort(Ke));
        Oe.__r = 0
    }

    function _t(n, e, t, i, s, a, r, o, l, h, d) {
        var c, p, g, _, y, v = i && i.__k || pt, x = e.length;
        for (t.__d = l, di(t, e, v), l = t.__d, c = 0; c < x; c++) (g = t.__k[c]) != null && typeof g != "boolean" && typeof g != "function" && (p = g.__i === -1 ? ce : v[g.__i] || ce, g.__i = c, We(n, g, p, s, a, r, o, l, h, d), _ = g.__e, g.ref && p.ref != g.ref && (p.ref && Ye(p.ref, null, g), d.push(g.ref, g.__c || _, g)), y == null && _ != null && (y = _), 65536 & g.__u || p.__k === g.__k ? l = bt(g, l, n) : typeof g.type == "function" && g.__d !== void 0 ? l = g.__d : _ && (l = _.nextSibling), g.__d = void 0, g.__u &= -196609);
        t.__d = l, t.__e = y
    }

    function di(n, e, t) {
        var i, s, a, r, o, l = e.length, h = t.length, d = h, c = 0;
        for (n.__k = [], i = 0; i < l; i++) (s = n.__k[i] = (s = e[i]) == null || typeof s == "boolean" || typeof s == "function" ? null : typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? Ee(null, s, null, null, s) : Je(s) ? Ee(N, {children: s}, null, null, null) : s.constructor === void 0 && s.__b > 0 ? Ee(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s) != null ? (s.__ = n, s.__b = n.__b + 1, o = pi(s, t, r = i + c, d), s.__i = o, a = null, o !== -1 && (d--, (a = t[o]) && (a.__u |= 131072)), a == null || a.__v === null ? (o == -1 && c--, typeof s.type != "function" && (s.__u |= 65536)) : o !== r && (o === r + 1 ? c++ : o > r ? d > l - r ? c += o - r : c-- : c = o < r && o == r - 1 ? o - r : 0, o !== i + c && (s.__u |= 65536))) : (a = t[i]) && a.key == null && a.__e && (a.__e == n.__d && (n.__d = ne(a)), qe(a, a, !1), t[i] = null, d--);
        if (d) for (i = 0; i < h; i++) (a = t[i]) != null && !(131072 & a.__u) && (a.__e == n.__d && (n.__d = ne(a)), qe(a, a))
    }

    function bt(n, e, t) {
        var i, s;
        if (typeof n.type == "function") {
            for (i = n.__k, s = 0; i && s < i.length; s++) i[s] && (i[s].__ = n, e = bt(i[s], e, t));
            return e
        }
        return n.__e != e && (t.insertBefore(n.__e, e || null), e = n.__e), e && e.nextSibling
    }

    function pi(n, e, t, i) {
        var s = n.key, a = n.type, r = t - 1, o = t + 1, l = e[t];
        if (l === null || l && s == l.key && a === l.type) return t;
        if (i > (l != null && !(131072 & l.__u) ? 1 : 0)) for (; r >= 0 || o < e.length;) {
            if (r >= 0) {
                if ((l = e[r]) && !(131072 & l.__u) && s == l.key && a === l.type) return r;
                r--
            }
            if (o < e.length) {
                if ((l = e[o]) && !(131072 & l.__u) && s == l.key && a === l.type) return o;
                o++
            }
        }
        return -1
    }

    function vt(n, e, t) {
        e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || hi.test(e) ? t : t + "px"
    }

    function Pe(n, e, t, i, s) {
        var a;
        e:if (e === "style") if (typeof t == "string") n.style.cssText = t; else {
            if (typeof i == "string" && (n.style.cssText = i = ""), i) for (e in i) t && e in t || vt(n.style, e, "");
            if (t) for (e in t) i && t[e] === i[e] || vt(n.style, e, t[e])
        } else if (e[0] === "o" && e[1] === "n") a = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + a] = t, t ? i ? t.u = i.u : (t.u = Date.now(), n.addEventListener(e, a ? xt : yt, a)) : n.removeEventListener(e, a ? xt : yt, a); else {
            if (s) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in n) try {
                n[e] = t ?? "";
                break e
            } catch {
            }
            typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? n.removeAttribute(e) : n.setAttribute(e, t))
        }
    }

    function yt(n) {
        var e = this.l[n.type + !1];
        if (n.t) {
            if (n.t <= e.u) return
        } else n.t = Date.now();
        return e(b.event ? b.event(n) : n)
    }

    function xt(n) {
        return this.l[n.type + !0](b.event ? b.event(n) : n)
    }

    function We(n, e, t, i, s, a, r, o, l, h) {
        var d, c, p, g, _, y, v, x, C, A, O, R, $, I, z, U = e.type;
        if (e.constructor !== void 0) return null;
        128 & t.__u && (l = !!(32 & t.__u), a = [o = e.__e = t.__e]), (d = b.__b) && d(e);
        e:if (typeof U == "function") try {
            if (x = e.props, C = (d = U.contextType) && i[d.__c], A = d ? C ? C.props.value : d.__ : i, t.__c ? v = (c = e.__c = t.__c).__ = c.__E : ("prototype" in U && U.prototype.render ? e.__c = c = new U(x, A) : (e.__c = c = new k(x, A), c.constructor = U, c.render = gi), C && C.sub(c), c.props = x, c.state || (c.state = {}), c.context = A, c.__n = i, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), U.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Y({}, c.__s)), Y(c.__s, U.getDerivedStateFromProps(x, c.__s))), g = c.props, _ = c.state, c.__v = e, p) U.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount); else {
                if (U.getDerivedStateFromProps == null && x !== g && c.componentWillReceiveProps != null && c.componentWillReceiveProps(x, A), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(x, c.__s, A) === !1 || e.__v === t.__v)) {
                    for (e.__v !== t.__v && (c.props = x, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function (K) {
                        K && (K.__ = e)
                    }), O = 0; O < c._sb.length; O++) c.__h.push(c._sb[O]);
                    c._sb = [], c.__h.length && r.push(c);
                    break e
                }
                c.componentWillUpdate != null && c.componentWillUpdate(x, c.__s, A), c.componentDidUpdate != null && c.__h.push(function () {
                    c.componentDidUpdate(g, _, y)
                })
            }
            if (c.context = A, c.props = x, c.__P = n, c.__e = !1, R = b.__r, $ = 0, "prototype" in U && U.prototype.render) {
                for (c.state = c.__s, c.__d = !1, R && R(e), d = c.render(c.props, c.state, c.context), I = 0; I < c._sb.length; I++) c.__h.push(c._sb[I]);
                c._sb = []
            } else do c.__d = !1, R && R(e), d = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.__d && ++$ < 25);
            c.state = c.__s, c.getChildContext != null && (i = Y(Y({}, i), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(g, _)), _t(n, Je(z = d != null && d.type === N && d.key == null ? d.props.children : d) ? z : [z], e, t, i, s, a, r, o, l, h), c.base = e.__e, e.__u &= -161, c.__h.length && r.push(c), v && (c.__E = c.__ = null)
        } catch (K) {
            e.__v = null, l || a != null ? (e.__e = o, e.__u |= l ? 160 : 32, a[a.indexOf(o)] = null) : (e.__e = t.__e, e.__k = t.__k), b.__e(K, e, t)
        } else a == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = fi(t.__e, e, t, i, s, a, r, l, h);
        (d = b.diffed) && d(e)
    }

    function St(n, e, t) {
        e.__d = void 0;
        for (var i = 0; i < t.length; i++) Ye(t[i], t[++i], t[++i]);
        b.__c && b.__c(e, n), n.some(function (s) {
            try {
                n = s.__h, s.__h = [], n.some(function (a) {
                    a.call(s)
                })
            } catch (a) {
                b.__e(a, s.__v)
            }
        })
    }

    function fi(n, e, t, i, s, a, r, o, l) {
        var h, d, c, p, g, _, y, v = t.props, x = e.props, C = e.type;
        if (C === "svg" && (s = !0), a != null) {
            for (h = 0; h < a.length; h++) if ((g = a[h]) && "setAttribute" in g == !!C && (C ? g.localName === C : g.nodeType === 3)) {
                n = g, a[h] = null;
                break
            }
        }
        if (n == null) {
            if (C === null) return document.createTextNode(x);
            n = s ? document.createElementNS("http://www.w3.org/2000/svg", C) : document.createElement(C, x.is && x), a = null, o = !1
        }
        if (C === null) v === x || o && n.data === x || (n.data = x); else {
            if (a = a && B.call(n.childNodes), v = t.props || ce, !o && a != null) for (v = {}, h = 0; h < n.attributes.length; h++) v[(g = n.attributes[h]).name] = g.value;
            for (h in v) g = v[h], h == "children" || (h == "dangerouslySetInnerHTML" ? c = g : h === "key" || h in x || Pe(n, h, null, g, s));
            for (h in x) g = x[h], h == "children" ? p = g : h == "dangerouslySetInnerHTML" ? d = g : h == "value" ? _ = g : h == "checked" ? y = g : h === "key" || o && typeof g != "function" || v[h] === g || Pe(n, h, g, v[h], s);
            if (d) o || c && (d.__html === c.__html || d.__html === n.innerHTML) || (n.innerHTML = d.__html), e.__k = []; else if (c && (n.innerHTML = ""), _t(n, Je(p) ? p : [p], e, t, i, s && C !== "foreignObject", a, r, a ? a[0] : t.__k && ne(t, 0), o, l), a != null) for (h = a.length; h--;) a[h] != null && ft(a[h]);
            o || (h = "value", _ !== void 0 && (_ !== n[h] || C === "progress" && !_ || C === "option" && _ !== v[h]) && Pe(n, h, _, v[h], !1), h = "checked", y !== void 0 && y !== n[h] && Pe(n, h, y, v[h], !1))
        }
        return n
    }

    function Ye(n, e, t) {
        try {
            typeof n == "function" ? n(e) : n.current = e
        } catch (i) {
            b.__e(i, t)
        }
    }

    function qe(n, e, t) {
        var i, s;
        if (b.unmount && b.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || Ye(i, null, e)), (i = n.__c) != null) {
            if (i.componentWillUnmount) try {
                i.componentWillUnmount()
            } catch (a) {
                b.__e(a, e)
            }
            i.base = i.__P = null, n.__c = void 0
        }
        if (i = n.__k) for (s = 0; s < i.length; s++) i[s] && qe(i[s], e, t || typeof n.type != "function");
        t || n.__e == null || ft(n.__e), n.__ = n.__e = n.__d = void 0
    }

    function gi(n, e, t) {
        return this.constructor(n, t)
    }

    function mi(n, e, t) {
        var i, s, a, r;
        b.__ && b.__(n, e), s = (i = typeof t == "function") ? null : t && t.__k || e.__k, a = [], r = [], We(e, n = (!i && t || e).__k = ci(N, null, [n]), s || ce, ce, e.ownerSVGElement !== void 0, !i && t ? [t] : s ? null : e.firstChild ? B.call(e.childNodes) : null, a, !i && t ? t : s ? s.__e : e.firstChild, i, r), St(a, n, r)
    }

    B = pt.slice, b = {
        __e: function (n, e, t, i) {
            for (var s, a, r; e = e.__;) if ((s = e.__c) && !s.__) try {
                if ((a = s.constructor) && a.getDerivedStateFromError != null && (s.setState(a.getDerivedStateFromError(n)), r = s.__d), s.componentDidCatch != null && (s.componentDidCatch(n, i || {}), r = s.__d), r) return s.__E = s
            } catch (o) {
                n = o
            }
            throw n
        }
    }, ut = 0, ht = function (n) {
        return n != null && n.constructor == null
    }, k.prototype.setState = function (n, e) {
        var t;
        t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Y({}, this.state), typeof n == "function" && (n = n(Y({}, t), this.props)), n && Y(t, n), n != null && this.__v && (e && this._sb.push(e), mt(this))
    }, k.prototype.forceUpdate = function (n) {
        this.__v && (this.__e = !0, n && this.__h.push(n), mt(this))
    }, k.prototype.render = N, Z = [], dt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ke = function (n, e) {
        return n.__v.__b - e.__v.__b
    }, Oe.__r = 0;
    const _i = {
        type: "logger", log(n) {
            this.output("log", n)
        }, warn(n) {
            this.output("warn", n)
        }, error(n) {
            this.output("error", n)
        }, output(n, e) {
            console && console[n] && console[n].apply(console, e)
        }
    };

    class Ne {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.init(e, t)
        }

        init(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.prefix = t.prefix || "i18next:", this.logger = e || _i, this.options = t, this.debug = t.debug
        }

        log() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return this.forward(t, "log", "", !0)
        }

        warn() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return this.forward(t, "warn", "", !0)
        }

        error() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return this.forward(t, "error", "")
        }

        deprecate() {
            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
            return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
        }

        forward(e, t, i, s) {
            return s && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${i}${this.prefix} ${e[0]}`), this.logger[t](e))
        }

        create(e) {
            return new Ne(this.logger, {prefix: `${this.prefix}:${e}:`, ...this.options})
        }

        clone(e) {
            return e = e || this.options, e.prefix = e.prefix || this.prefix, new Ne(this.logger, e)
        }
    }

    var V = new Ne;

    class ke {
        constructor() {
            this.observers = {}
        }

        on(e, t) {
            return e.split(" ").forEach(i => {
                this.observers[i] || (this.observers[i] = new Map);
                const s = this.observers[i].get(t) || 0;
                this.observers[i].set(t, s + 1)
            }), this
        }

        off(e, t) {
            if (this.observers[e]) {
                if (!t) {
                    delete this.observers[e];
                    return
                }
                this.observers[e].delete(t)
            }
        }

        emit(e) {
            for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) i[s - 1] = arguments[s];
            this.observers[e] && Array.from(this.observers[e].entries()).forEach(r => {
                let [o, l] = r;
                for (let h = 0; h < l; h++) o(...i)
            }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(r => {
                let [o, l] = r;
                for (let h = 0; h < l; h++) o.apply(o, [e, ...i])
            })
        }
    }

    function de() {
        let n, e;
        const t = new Promise((i, s) => {
            n = i, e = s
        });
        return t.resolve = n, t.reject = e, t
    }

    function Ct(n) {
        return n == null ? "" : "" + n
    }

    function bi(n, e, t) {
        n.forEach(i => {
            e[i] && (t[i] = e[i])
        })
    }

    const vi = /###/g;

    function pe(n, e, t) {
        function i(o) {
            return o && o.indexOf("###") > -1 ? o.replace(vi, ".") : o
        }

        function s() {
            return !n || typeof n == "string"
        }

        const a = typeof e != "string" ? e : e.split(".");
        let r = 0;
        for (; r < a.length - 1;) {
            if (s()) return {};
            const o = i(a[r]);
            !n[o] && t && (n[o] = new t), Object.prototype.hasOwnProperty.call(n, o) ? n = n[o] : n = {}, ++r
        }
        return s() ? {} : {obj: n, k: i(a[r])}
    }

    function Lt(n, e, t) {
        const {obj: i, k: s} = pe(n, e, Object);
        if (i !== void 0 || e.length === 1) {
            i[s] = t;
            return
        }
        let a = e[e.length - 1], r = e.slice(0, e.length - 1), o = pe(n, r, Object);
        for (; o.obj === void 0 && r.length;) a = `${r[r.length - 1]}.${a}`, r = r.slice(0, r.length - 1), o = pe(n, r, Object), o && o.obj && typeof o.obj[`${o.k}.${a}`] < "u" && (o.obj = void 0);
        o.obj[`${o.k}.${a}`] = t
    }

    function yi(n, e, t, i) {
        const {obj: s, k: a} = pe(n, e, Object);
        s[a] = s[a] || [], i && (s[a] = s[a].concat(t)), i || s[a].push(t)
    }

    function Ie(n, e) {
        const {obj: t, k: i} = pe(n, e);
        if (t) return t[i]
    }

    function xi(n, e, t) {
        const i = Ie(n, t);
        return i !== void 0 ? i : Ie(e, t)
    }

    function wt(n, e, t) {
        for (const i in e) i !== "__proto__" && i !== "constructor" && (i in n ? typeof n[i] == "string" || n[i] instanceof String || typeof e[i] == "string" || e[i] instanceof String ? t && (n[i] = e[i]) : wt(n[i], e[i], t) : n[i] = e[i]);
        return n
    }

    function se(n) {
        return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }

    var Si = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;"};

    function Ci(n) {
        return typeof n == "string" ? n.replace(/[&<>"'\/]/g, e => Si[e]) : n
    }

    class Li {
        constructor(e) {
            this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
        }

        getRegExp(e) {
            const t = this.regExpMap.get(e);
            if (t !== void 0) return t;
            const i = new RegExp(e);
            return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, i), this.regExpQueue.push(e), i
        }
    }

    const wi = [" ", ",", "?", "!", ";"], Ei = new Li(20);

    function Oi(n, e, t) {
        e = e || "", t = t || "";
        const i = wi.filter(r => e.indexOf(r) < 0 && t.indexOf(r) < 0);
        if (i.length === 0) return !0;
        const s = Ei.getRegExp(`(${i.map(r => r === "?" ? "\\?" : r).join("|")})`);
        let a = !s.test(n);
        if (!a) {
            const r = n.indexOf(t);
            r > 0 && !s.test(n.substring(0, r)) && (a = !0)
        }
        return a
    }

    function Xe(n, e) {
        let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
        if (!n) return;
        if (n[e]) return n[e];
        const i = e.split(t);
        let s = n;
        for (let a = 0; a < i.length;) {
            if (!s || typeof s != "object") return;
            let r, o = "";
            for (let l = a; l < i.length; ++l) if (l !== a && (o += t), o += i[l], r = s[o], r !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof r) > -1 && l < i.length - 1) continue;
                a += l - a + 1;
                break
            }
            s = r
        }
        return s
    }

    function Te(n) {
        return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n
    }

    class Et extends ke {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                ns: ["translation"],
                defaultNS: "translation"
            };
            super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
        }

        addNamespaces(e) {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
        }

        removeNamespaces(e) {
            const t = this.options.ns.indexOf(e);
            t > -1 && this.options.ns.splice(t, 1)
        }

        getResource(e, t, i) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            const a = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
                r = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
            let o;
            e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], i && (Array.isArray(i) ? o.push(...i) : typeof i == "string" && a ? o.push(...i.split(a)) : o.push(i)));
            const l = Ie(this.data, o);
            return !l && !t && !i && e.indexOf(".") > -1 && (e = o[0], t = o[1], i = o.slice(2).join(".")), l || !r || typeof i != "string" ? l : Xe(this.data && this.data[e] && this.data[e][t], i, a)
        }

        addResource(e, t, i, s) {
            let a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {silent: !1};
            const r = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
            let o = [e, t];
            i && (o = o.concat(r ? i.split(r) : i)), e.indexOf(".") > -1 && (o = e.split("."), s = t, t = o[1]), this.addNamespaces(t), Lt(this.data, o, s), a.silent || this.emit("added", e, t, i, s)
        }

        addResources(e, t, i) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {silent: !1};
            for (const a in i) (typeof i[a] == "string" || Object.prototype.toString.apply(i[a]) === "[object Array]") && this.addResource(e, t, a, i[a], {silent: !0});
            s.silent || this.emit("added", e, t, i)
        }

        addResourceBundle(e, t, i, s, a) {
            let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {silent: !1}, o = [e, t];
            e.indexOf(".") > -1 && (o = e.split("."), s = i, i = t, t = o[1]), this.addNamespaces(t);
            let l = Ie(this.data, o) || {};
            s ? wt(l, i, a) : l = {...l, ...i}, Lt(this.data, o, l), r.silent || this.emit("added", e, t, i)
        }

        removeResourceBundle(e, t) {
            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
        }

        hasResourceBundle(e, t) {
            return this.getResource(e, t) !== void 0
        }

        getResourceBundle(e, t) {
            return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {...this.getResource(e, t)} : this.getResource(e, t)
        }

        getDataByLanguage(e) {
            return this.data[e]
        }

        hasLanguageSomeTranslations(e) {
            const t = this.getDataByLanguage(e);
            return !!(t && Object.keys(t) || []).find(s => t[s] && Object.keys(t[s]).length > 0)
        }

        toJSON() {
            return this.data
        }
    }

    var Ot = {
        processors: {}, addPostProcessor(n) {
            this.processors[n.name] = n
        }, handle(n, e, t, i, s) {
            return n.forEach(a => {
                this.processors[a] && (e = this.processors[a].process(e, t, i, s))
            }), e
        }
    };
    const Pt = {};

    class Re extends ke {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            super(), bi(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = V.create("translator")
        }

        changeLanguage(e) {
            e && (this.language = e)
        }

        exists(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {interpolation: {}};
            if (e == null) return !1;
            const i = this.resolve(e, t);
            return i && i.res !== void 0
        }

        extractFromKey(e, t) {
            let i = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
            i === void 0 && (i = ":");
            const s = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
            let a = t.ns || this.options.defaultNS || [];
            const r = i && e.indexOf(i) > -1,
                o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Oi(e, i, s);
            if (r && !o) {
                const l = e.match(this.interpolator.nestingRegexp);
                if (l && l.length > 0) return {key: e, namespaces: a};
                const h = e.split(i);
                (i !== s || i === s && this.options.ns.indexOf(h[0]) > -1) && (a = h.shift()), e = h.join(s)
            }
            return typeof a == "string" && (a = [a]), {key: e, namespaces: a}
        }

        translate(e, t, i) {
            if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {...t}), t || (t = {}), e == null) return "";
            Array.isArray(e) || (e = [String(e)]);
            const s = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails,
                a = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
                    key: r,
                    namespaces: o
                } = this.extractFromKey(e[e.length - 1], t), l = o[o.length - 1], h = t.lng || this.language,
                d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (h && h.toLowerCase() === "cimode") {
                if (d) {
                    const O = t.nsSeparator || this.options.nsSeparator;
                    return s ? {
                        res: `${l}${O}${r}`,
                        usedKey: r,
                        exactUsedKey: r,
                        usedLng: h,
                        usedNS: l,
                        usedParams: this.getUsedParamsDetails(t)
                    } : `${l}${O}${r}`
                }
                return s ? {
                    res: r,
                    usedKey: r,
                    exactUsedKey: r,
                    usedLng: h,
                    usedNS: l,
                    usedParams: this.getUsedParamsDetails(t)
                } : r
            }
            const c = this.resolve(e, t);
            let p = c && c.res;
            const g = c && c.usedKey || r, _ = c && c.exactUsedKey || r, y = Object.prototype.toString.apply(p),
                v = ["[object Number]", "[object Function]", "[object RegExp]"],
                x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
                C = !this.i18nFormat || this.i18nFormat.handleAsObject;
            if (C && p && (typeof p != "string" && typeof p != "boolean" && typeof p != "number") && v.indexOf(y) < 0 && !(typeof x == "string" && y === "[object Array]")) {
                if (!t.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    const O = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, p, {
                        ...t,
                        ns: o
                    }) : `key '${r} (${this.language})' returned an object instead of string.`;
                    return s ? (c.res = O, c.usedParams = this.getUsedParamsDetails(t), c) : O
                }
                if (a) {
                    const O = y === "[object Array]", R = O ? [] : {}, $ = O ? _ : g;
                    for (const I in p) if (Object.prototype.hasOwnProperty.call(p, I)) {
                        const z = `${$}${a}${I}`;
                        R[I] = this.translate(z, {...t, joinArrays: !1, ns: o}), R[I] === z && (R[I] = p[I])
                    }
                    p = R
                }
            } else if (C && typeof x == "string" && y === "[object Array]") p = p.join(x), p && (p = this.extendTranslation(p, e, t, i)); else {
                let O = !1, R = !1;
                const $ = t.count !== void 0 && typeof t.count != "string", I = Re.hasDefaultValue(t),
                    z = $ ? this.pluralResolver.getSuffix(h, t.count, t) : "",
                    U = t.ordinal && $ ? this.pluralResolver.getSuffix(h, t.count, {ordinal: !1}) : "",
                    K = $ && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                    F = K && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${z}`] || t[`defaultValue${U}`] || t.defaultValue;
                !this.isValidLookup(p) && I && (O = !0, p = F), this.isValidLookup(p) || (R = !0, p = r);
                const lt = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : p,
                    Ce = I && F !== p && this.options.updateMissing;
                if (R || O || Ce) {
                    if (this.logger.log(Ce ? "updateKey" : "missingKey", h, l, r, Ce ? F : p), a) {
                        const G = this.resolve(r, {...t, keySeparator: !1});
                        G && G.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                    }
                    let Le = [];
                    const Ve = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                    if (this.options.saveMissingTo === "fallback" && Ve && Ve[0]) for (let G = 0; G < Ve.length; G++) Le.push(Ve[G]); else this.options.saveMissingTo === "all" ? Le = this.languageUtils.toResolveHierarchy(t.lng || this.language) : Le.push(t.lng || this.language);
                    const li = (G, ie, we) => {
                        const ui = I && we !== p ? we : lt;
                        this.options.missingKeyHandler ? this.options.missingKeyHandler(G, l, ie, ui, Ce, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(G, l, ie, ui, Ce, t), this.emit("missingKey", G, l, ie, p)
                    };
                    this.options.saveMissing && (this.options.saveMissingPlurals && $ ? Le.forEach(G => {
                        const ie = this.pluralResolver.getSuffixes(G, t);
                        K && t[`defaultValue${this.options.pluralSeparator}zero`] && ie.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ie.push(`${this.options.pluralSeparator}zero`), ie.forEach(we => {
                            li([G], r + we, t[`defaultValue${we}`] || F)
                        })
                    }) : li(Le, r, F))
                }
                p = this.extendTranslation(p, e, t, c, i), R && p === r && this.options.appendNamespaceToMissingKey && (p = `${l}:${r}`), (R || O) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${r}` : r, O ? p : void 0) : p = this.options.parseMissingKeyHandler(p))
            }
            return s ? (c.res = p, c.usedParams = this.getUsedParamsDetails(t), c) : p
        }

        extendTranslation(e, t, i, s, a) {
            var r = this;
            if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, {...this.options.interpolation.defaultVariables, ...i}, i.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {resolved: s}); else if (!i.skipInterpolation) {
                i.interpolation && this.interpolator.init({
                    ...i,
                    interpolation: {...this.options.interpolation, ...i.interpolation}
                });
                const h = typeof e == "string" && (i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                let d;
                if (h) {
                    const p = e.match(this.interpolator.nestingRegexp);
                    d = p && p.length
                }
                let c = i.replace && typeof i.replace != "string" ? i.replace : i;
                if (this.options.interpolation.defaultVariables && (c = {...this.options.interpolation.defaultVariables, ...c}), e = this.interpolator.interpolate(e, c, i.lng || this.language, i), h) {
                    const p = e.match(this.interpolator.nestingRegexp), g = p && p.length;
                    d < g && (i.nest = !1)
                }
                !i.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (i.lng = s.usedLng), i.nest !== !1 && (e = this.interpolator.nest(e, function () {
                    for (var p = arguments.length, g = new Array(p), _ = 0; _ < p; _++) g[_] = arguments[_];
                    return a && a[0] === g[0] && !i.context ? (r.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : r.translate(...g, t)
                }, i)), i.interpolation && this.interpolator.reset()
            }
            const o = i.postProcess || this.options.postProcess, l = typeof o == "string" ? [o] : o;
            return e != null && l && l.length && i.applyPostProcessor !== !1 && (e = Ot.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
                i18nResolved: {
                    ...s,
                    usedParams: this.getUsedParamsDetails(i)
                }, ...i
            } : i, this)), e
        }

        resolve(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i, s, a, r, o;
            return typeof e == "string" && (e = [e]), e.forEach(l => {
                if (this.isValidLookup(i)) return;
                const h = this.extractFromKey(l, t), d = h.key;
                s = d;
                let c = h.namespaces;
                this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
                const p = t.count !== void 0 && typeof t.count != "string",
                    g = p && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                    _ = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "",
                    y = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
                c.forEach(v => {
                    this.isValidLookup(i) || (o = v, !Pt[`${y[0]}-${v}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (Pt[`${y[0]}-${v}`] = !0, this.logger.warn(`key "${s}" for languages "${y.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach(x => {
                        if (this.isValidLookup(i)) return;
                        r = x;
                        const C = [d];
                        if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(C, d, x, v, t); else {
                            let O;
                            p && (O = this.pluralResolver.getSuffix(x, t.count, t));
                            const R = `${this.options.pluralSeparator}zero`,
                                $ = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                            if (p && (C.push(d + O), t.ordinal && O.indexOf($) === 0 && C.push(d + O.replace($, this.options.pluralSeparator)), g && C.push(d + R)), _) {
                                const I = `${d}${this.options.contextSeparator}${t.context}`;
                                C.push(I), p && (C.push(I + O), t.ordinal && O.indexOf($) === 0 && C.push(I + O.replace($, this.options.pluralSeparator)), g && C.push(I + R))
                            }
                        }
                        let A;
                        for (; A = C.pop();) this.isValidLookup(i) || (a = A, i = this.getResource(x, v, A, t))
                    }))
                })
            }), {res: i, usedKey: s, exactUsedKey: a, usedLng: r, usedNS: o}
        }

        isValidLookup(e) {
            return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "")
        }

        getResource(e, t, i) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, i, s) : this.resourceStore.getResource(e, t, i, s)
        }

        getUsedParamsDetails() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
                i = e.replace && typeof e.replace != "string";
            let s = i ? e.replace : e;
            if (i && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {...this.options.interpolation.defaultVariables, ...s}), !i) {
                s = {...s};
                for (const a of t) delete s[a]
            }
            return s
        }

        static hasDefaultValue(e) {
            const t = "defaultValue";
            for (const i in e) if (Object.prototype.hasOwnProperty.call(e, i) && t === i.substring(0, t.length) && e[i] !== void 0) return !0;
            return !1
        }
    }

    function Qe(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }

    class Nt {
        constructor(e) {
            this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = V.create("languageUtils")
        }

        getScriptPartFromCode(e) {
            if (e = Te(e), !e || e.indexOf("-") < 0) return null;
            const t = e.split("-");
            return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"))
        }

        getLanguagePartFromCode(e) {
            if (e = Te(e), !e || e.indexOf("-") < 0) return e;
            const t = e.split("-");
            return this.formatLanguageCode(t[0])
        }

        formatLanguageCode(e) {
            if (typeof e == "string" && e.indexOf("-") > -1) {
                const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
                let i = e.split("-");
                return this.options.lowerCaseLng ? i = i.map(s => s.toLowerCase()) : i.length === 2 ? (i[0] = i[0].toLowerCase(), i[1] = i[1].toUpperCase(), t.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Qe(i[1].toLowerCase()))) : i.length === 3 && (i[0] = i[0].toLowerCase(), i[1].length === 2 && (i[1] = i[1].toUpperCase()), i[0] !== "sgn" && i[2].length === 2 && (i[2] = i[2].toUpperCase()), t.indexOf(i[1].toLowerCase()) > -1 && (i[1] = Qe(i[1].toLowerCase())), t.indexOf(i[2].toLowerCase()) > -1 && (i[2] = Qe(i[2].toLowerCase()))), i.join("-")
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
        }

        isSupportedCode(e) {
            return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
        }

        getBestMatchFromCodes(e) {
            if (!e) return null;
            let t;
            return e.forEach(i => {
                if (t) return;
                const s = this.formatLanguageCode(i);
                (!this.options.supportedLngs || this.isSupportedCode(s)) && (t = s)
            }), !t && this.options.supportedLngs && e.forEach(i => {
                if (t) return;
                const s = this.getLanguagePartFromCode(i);
                if (this.isSupportedCode(s)) return t = s;
                t = this.options.supportedLngs.find(a => {
                    if (a === s) return a;
                    if (!(a.indexOf("-") < 0 && s.indexOf("-") < 0) && a.indexOf(s) === 0) return a
                })
            }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
        }

        getFallbackCodes(e, t) {
            if (!e) return [];
            if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Object.prototype.toString.apply(e) === "[object Array]") return e;
            if (!t) return e.default || [];
            let i = e[t];
            return i || (i = e[this.getScriptPartFromCode(t)]), i || (i = e[this.formatLanguageCode(t)]), i || (i = e[this.getLanguagePartFromCode(t)]), i || (i = e.default), i || []
        }

        toResolveHierarchy(e, t) {
            const i = this.getFallbackCodes(t || this.options.fallbackLng || [], e), s = [], a = r => {
                r && (this.isSupportedCode(r) ? s.push(r) : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`))
            };
            return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && a(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && a(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && a(this.getLanguagePartFromCode(e))) : typeof e == "string" && a(this.formatLanguageCode(e)), i.forEach(r => {
                s.indexOf(r) < 0 && a(this.formatLanguageCode(r))
            }), s
        }
    }

    let Pi = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4}, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6}, {lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7}, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {lngs: ["fr"], nr: [1, 2], fc: 9}, {lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10}, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {lngs: ["is"], nr: [1, 2], fc: 12}, {lngs: ["jv"], nr: [0, 1], fc: 13}, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {lngs: ["lt"], nr: [1, 2, 10], fc: 15}, {lngs: ["lv"], nr: [1, 2, 0], fc: 16}, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {lngs: ["mnk"], nr: [0, 1, 2], fc: 18}, {lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19}, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {lngs: ["ro"], nr: [1, 2, 20], fc: 20}, {lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21}, {
        lngs: ["he", "iw"],
        nr: [1, 2, 20, 21],
        fc: 22
    }], Ni = {
        1: function (n) {
            return +(n > 1)
        }, 2: function (n) {
            return +(n != 1)
        }, 3: function (n) {
            return 0
        }, 4: function (n) {
            return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
        }, 5: function (n) {
            return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5
        }, 6: function (n) {
            return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2
        }, 7: function (n) {
            return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
        }, 8: function (n) {
            return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3
        }, 9: function (n) {
            return +(n >= 2)
        }, 10: function (n) {
            return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4
        }, 11: function (n) {
            return n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3
        }, 12: function (n) {
            return +(n % 10 != 1 || n % 100 == 11)
        }, 13: function (n) {
            return +(n !== 0)
        }, 14: function (n) {
            return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3
        }, 15: function (n) {
            return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
        }, 16: function (n) {
            return n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2
        }, 17: function (n) {
            return n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1
        }, 18: function (n) {
            return n == 0 ? 0 : n == 1 ? 1 : 2
        }, 19: function (n) {
            return n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3
        }, 20: function (n) {
            return n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2
        }, 21: function (n) {
            return n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0
        }, 22: function (n) {
            return n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3
        }
    };
    const ki = ["v1", "v2", "v3"], Ii = ["v4"], kt = {zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5};

    function Ti() {
        const n = {};
        return Pi.forEach(e => {
            e.lngs.forEach(t => {
                n[t] = {numbers: e.nr, plurals: Ni[e.fc]}
            })
        }), n
    }

    class Ri {
        constructor(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.languageUtils = e, this.options = t, this.logger = V.create("pluralResolver"), (!this.options.compatibilityJSON || Ii.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Ti()
        }

        addRule(e, t) {
            this.rules[e] = t
        }

        getRule(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (this.shouldUseIntlApi()) try {
                return new Intl.PluralRules(Te(e === "dev" ? "en" : e), {type: t.ordinal ? "ordinal" : "cardinal"})
            } catch {
                return
            }
            return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
        }

        needsPlural(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const i = this.getRule(e, t);
            return this.shouldUseIntlApi() ? i && i.resolvedOptions().pluralCategories.length > 1 : i && i.numbers.length > 1
        }

        getPluralFormsOfKey(e, t) {
            let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return this.getSuffixes(e, i).map(s => `${t}${s}`)
        }

        getSuffixes(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const i = this.getRule(e, t);
            return i ? this.shouldUseIntlApi() ? i.resolvedOptions().pluralCategories.sort((s, a) => kt[s] - kt[a]).map(s => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : i.numbers.map(s => this.getSuffix(e, s, t)) : []
        }

        getSuffix(e, t) {
            let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            const s = this.getRule(e, i);
            return s ? this.shouldUseIntlApi() ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(t)}` : this.getSuffixRetroCompatible(s, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
        }

        getSuffixRetroCompatible(e, t) {
            const i = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
            let s = e.numbers[i];
            this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (s === 2 ? s = "plural" : s === 1 && (s = ""));
            const a = () => this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
            return this.options.compatibilityJSON === "v1" ? s === 1 ? "" : typeof s == "number" ? `_plural_${s.toString()}` : a() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? a() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
        }

        shouldUseIntlApi() {
            return !ki.includes(this.options.compatibilityJSON)
        }
    }

    function It(n, e, t) {
        let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
            s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, a = xi(n, e, t);
        return !a && s && typeof t == "string" && (a = Xe(n, t, i), a === void 0 && (a = Xe(e, t, i))), a
    }

    class Ai {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.logger = V.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (t => t), this.init(e)
        }

        init() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            e.interpolation || (e.interpolation = {escapeValue: !0});
            const t = e.interpolation;
            this.escape = t.escape !== void 0 ? t.escape : Ci, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? se(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? se(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? se(t.nestingPrefix) : t.nestingPrefixEscaped || se("$t("), this.nestingSuffix = t.nestingSuffix ? se(t.nestingSuffix) : t.nestingSuffixEscaped || se(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp()
        }

        reset() {
            this.options && this.init(this.options)
        }

        resetRegExp() {
            const e = (t, i) => t && t.source === i ? (t.lastIndex = 0, t) : new RegExp(i, "g");
            this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
        }

        interpolate(e, t, i, s) {
            let a, r, o;
            const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

            function h(_) {
                return _.replace(/\$/g, "$$$$")
            }

            const d = _ => {
                if (_.indexOf(this.formatSeparator) < 0) {
                    const C = It(t, l, _, this.options.keySeparator, this.options.ignoreJSONStructure);
                    return this.alwaysFormat ? this.format(C, void 0, i, {...s, ...t, interpolationkey: _}) : C
                }
                const y = _.split(this.formatSeparator), v = y.shift().trim(), x = y.join(this.formatSeparator).trim();
                return this.format(It(t, l, v, this.options.keySeparator, this.options.ignoreJSONStructure), x, i, {
                    ...s, ...t,
                    interpolationkey: v
                })
            };
            this.resetRegExp();
            const c = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler,
                p = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
            return [{regex: this.regexpUnescape, safeValue: _ => h(_)}, {
                regex: this.regexp,
                safeValue: _ => this.escapeValue ? h(this.escape(_)) : h(_)
            }].forEach(_ => {
                for (o = 0; a = _.regex.exec(e);) {
                    const y = a[1].trim();
                    if (r = d(y), r === void 0) if (typeof c == "function") {
                        const x = c(e, a, s);
                        r = typeof x == "string" ? x : ""
                    } else if (s && Object.prototype.hasOwnProperty.call(s, y)) r = ""; else if (p) {
                        r = a[0];
                        continue
                    } else this.logger.warn(`missed to pass in variable ${y} for interpolating ${e}`), r = ""; else typeof r != "string" && !this.useRawValueToEscape && (r = Ct(r));
                    const v = _.safeValue(r);
                    if (e = e.replace(a[0], v), p ? (_.regex.lastIndex += r.length, _.regex.lastIndex -= a[0].length) : _.regex.lastIndex = 0, o++, o >= this.maxReplaces) break
                }
            }), e
        }

        nest(e, t) {
            let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, a, r;

            function o(l, h) {
                const d = this.nestingOptionsSeparator;
                if (l.indexOf(d) < 0) return l;
                const c = l.split(new RegExp(`${d}[ ]*{`));
                let p = `{${c[1]}`;
                l = c[0], p = this.interpolate(p, r);
                const g = p.match(/'/g), _ = p.match(/"/g);
                (g && g.length % 2 === 0 && !_ || _.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
                try {
                    r = JSON.parse(p), h && (r = {...h, ...r})
                } catch (y) {
                    return this.logger.warn(`failed parsing options string in nesting for key ${l}`, y), `${l}${d}${p}`
                }
                return delete r.defaultValue, l
            }

            for (; s = this.nestingRegexp.exec(e);) {
                let l = [];
                r = {...i}, r = r.replace && typeof r.replace != "string" ? r.replace : r, r.applyPostProcessor = !1, delete r.defaultValue;
                let h = !1;
                if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
                    const d = s[1].split(this.formatSeparator).map(c => c.trim());
                    s[1] = d.shift(), l = d, h = !0
                }
                if (a = t(o.call(this, s[1].trim(), r), r), a && s[0] === e && typeof a != "string") return a;
                typeof a != "string" && (a = Ct(a)), a || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), a = ""), h && (a = l.reduce((d, c) => this.format(d, c, i.lng, {
                    ...i,
                    interpolationkey: s[1].trim()
                }), a.trim())), e = e.replace(s[0], a), this.regexp.lastIndex = 0
            }
            return e
        }
    }

    function Di(n) {
        let e = n.toLowerCase().trim();
        const t = {};
        if (n.indexOf("(") > -1) {
            const i = n.split("(");
            e = i[0].toLowerCase().trim();
            const s = i[1].substring(0, i[1].length - 1);
            e === "currency" && s.indexOf(":") < 0 ? t.currency || (t.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? t.range || (t.range = s.trim()) : s.split(";").forEach(r => {
                if (!r) return;
                const [o, ...l] = r.split(":"), h = l.join(":").trim().replace(/^'+|'+$/g, "");
                t[o.trim()] || (t[o.trim()] = h), h === "false" && (t[o.trim()] = !1), h === "true" && (t[o.trim()] = !0), isNaN(h) || (t[o.trim()] = parseInt(h, 10))
            })
        }
        return {formatName: e, formatOptions: t}
    }

    function ae(n) {
        const e = {};
        return function (i, s, a) {
            const r = s + JSON.stringify(a);
            let o = e[r];
            return o || (o = n(Te(s), a), e[r] = o), o(i)
        }
    }

    class $i {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.logger = V.create("formatter"), this.options = e, this.formats = {
                number: ae((t, i) => {
                    const s = new Intl.NumberFormat(t, {...i});
                    return a => s.format(a)
                }), currency: ae((t, i) => {
                    const s = new Intl.NumberFormat(t, {...i, style: "currency"});
                    return a => s.format(a)
                }), datetime: ae((t, i) => {
                    const s = new Intl.DateTimeFormat(t, {...i});
                    return a => s.format(a)
                }), relativetime: ae((t, i) => {
                    const s = new Intl.RelativeTimeFormat(t, {...i});
                    return a => s.format(a, i.range || "day")
                }), list: ae((t, i) => {
                    const s = new Intl.ListFormat(t, {...i});
                    return a => s.format(a)
                })
            }, this.init(e)
        }

        init(e) {
            const i = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {interpolation: {}}).interpolation;
            this.formatSeparator = i.formatSeparator ? i.formatSeparator : i.formatSeparator || ","
        }

        add(e, t) {
            this.formats[e.toLowerCase().trim()] = t
        }

        addCached(e, t) {
            this.formats[e.toLowerCase().trim()] = ae(t)
        }

        format(e, t, i) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return t.split(this.formatSeparator).reduce((o, l) => {
                const {formatName: h, formatOptions: d} = Di(l);
                if (this.formats[h]) {
                    let c = o;
                    try {
                        const p = s && s.formatParams && s.formatParams[s.interpolationkey] || {},
                            g = p.locale || p.lng || s.locale || s.lng || i;
                        c = this.formats[h](o, g, {...d, ...s, ...p})
                    } catch (p) {
                        this.logger.warn(p)
                    }
                    return c
                } else this.logger.warn(`there was no format function for ${h}`);
                return o
            }, e)
        }
    }

    function Ui(n, e) {
        n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--)
    }

    class Fi extends ke {
        constructor(e, t, i) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            super(), this.backend = e, this.store = t, this.services = i, this.languageUtils = i.languageUtils, this.options = s, this.logger = V.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(i, s.backend, s)
        }

        queueLoad(e, t, i, s) {
            const a = {}, r = {}, o = {}, l = {};
            return e.forEach(h => {
                let d = !0;
                t.forEach(c => {
                    const p = `${h}|${c}`;
                    !i.reload && this.store.hasResourceBundle(h, c) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? r[p] === void 0 && (r[p] = !0) : (this.state[p] = 1, d = !1, r[p] === void 0 && (r[p] = !0), a[p] === void 0 && (a[p] = !0), l[c] === void 0 && (l[c] = !0)))
                }), d || (o[h] = !0)
            }), (Object.keys(a).length || Object.keys(r).length) && this.queue.push({
                pending: r,
                pendingCount: Object.keys(r).length,
                loaded: {},
                errors: [],
                callback: s
            }), {
                toLoad: Object.keys(a),
                pending: Object.keys(r),
                toLoadLanguages: Object.keys(o),
                toLoadNamespaces: Object.keys(l)
            }
        }

        loaded(e, t, i) {
            const s = e.split("|"), a = s[0], r = s[1];
            t && this.emit("failedLoading", a, r, t), i && this.store.addResourceBundle(a, r, i), this.state[e] = t ? -1 : 2;
            const o = {};
            this.queue.forEach(l => {
                yi(l.loaded, [a], r), Ui(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(h => {
                    o[h] || (o[h] = {});
                    const d = l.loaded[h];
                    d.length && d.forEach(c => {
                        o[h][c] === void 0 && (o[h][c] = !0)
                    })
                }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback())
            }), this.emit("loaded", o), this.queue = this.queue.filter(l => !l.done)
        }

        read(e, t, i) {
            let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
                r = arguments.length > 5 ? arguments[5] : void 0;
            if (!e.length) return r(null, {});
            if (this.readingCalls >= this.maxParallelReads) {
                this.waitingReads.push({lng: e, ns: t, fcName: i, tried: s, wait: a, callback: r});
                return
            }
            this.readingCalls++;
            const o = (h, d) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const c = this.waitingReads.shift();
                    this.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback)
                }
                if (h && d && s < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, e, t, i, s + 1, a * 2, r)
                    }, a);
                    return
                }
                r(h, d)
            }, l = this.backend[i].bind(this.backend);
            if (l.length === 2) {
                try {
                    const h = l(e, t);
                    h && typeof h.then == "function" ? h.then(d => o(null, d)).catch(o) : o(null, h)
                } catch (h) {
                    o(h)
                }
                return
            }
            return l(e, t, o)
        }

        prepareLoading(e, t) {
            let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                s = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
            typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
            const a = this.queueLoad(e, t, i, s);
            if (!a.toLoad.length) return a.pending.length || s(), null;
            a.toLoad.forEach(r => {
                this.loadOne(r)
            })
        }

        load(e, t, i) {
            this.prepareLoading(e, t, {}, i)
        }

        reload(e, t, i) {
            this.prepareLoading(e, t, {reload: !0}, i)
        }

        loadOne(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            const i = e.split("|"), s = i[0], a = i[1];
            this.read(s, a, "read", void 0, void 0, (r, o) => {
                r && this.logger.warn(`${t}loading namespace ${a} for language ${s} failed`, r), !r && o && this.logger.log(`${t}loaded namespace ${a} for language ${s}`, o), this.loaded(e, r, o)
            })
        }

        saveMissing(e, t, i, s, a) {
            let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
                o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
                };
            if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
                this.logger.warn(`did not save key "${i}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                return
            }
            if (!(i == null || i === "")) {
                if (this.backend && this.backend.create) {
                    const l = {...r, isUpdate: a}, h = this.backend.create.bind(this.backend);
                    if (h.length < 6) try {
                        let d;
                        h.length === 5 ? d = h(e, t, i, s, l) : d = h(e, t, i, s), d && typeof d.then == "function" ? d.then(c => o(null, c)).catch(o) : o(null, d)
                    } catch (d) {
                        o(d)
                    } else h(e, t, i, s, o, l)
                }
                !e || !e[0] || this.store.addResource(e[0], t, i, s)
            }
        }
    }

    function Tt() {
        return {
            debug: !1,
            initImmediate: !0,
            ns: ["translation"],
            defaultNS: ["translation"],
            fallbackLng: ["dev"],
            fallbackNS: !1,
            supportedLngs: !1,
            nonExplicitSupportedLngs: !1,
            load: "all",
            preload: !1,
            simplifyPluralSuffix: !0,
            keySeparator: ".",
            nsSeparator: ":",
            pluralSeparator: "_",
            contextSeparator: "_",
            partialBundledLanguages: !1,
            saveMissing: !1,
            updateMissing: !1,
            saveMissingTo: "fallback",
            saveMissingPlurals: !0,
            missingKeyHandler: !1,
            missingInterpolationHandler: !1,
            postProcess: !1,
            postProcessPassResolved: !1,
            returnNull: !1,
            returnEmptyString: !0,
            returnObjects: !1,
            joinArrays: !1,
            returnedObjectHandler: !1,
            parseMissingKeyHandler: !1,
            appendNamespaceToMissingKey: !1,
            appendNamespaceToCIMode: !1,
            overloadTranslationOptionHandler: function (e) {
                let t = {};
                if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
                    const i = e[3] || e[2];
                    Object.keys(i).forEach(s => {
                        t[s] = i[s]
                    })
                }
                return t
            },
            interpolation: {
                escapeValue: !0,
                format: n => n,
                prefix: "{{",
                suffix: "}}",
                formatSeparator: ",",
                unescapePrefix: "-",
                nestingPrefix: "$t(",
                nestingSuffix: ")",
                nestingOptionsSeparator: ",",
                maxReplaces: 1e3,
                skipOnVariables: !0
            }
        }
    }

    function Rt(n) {
        return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n
    }

    function Ae() {
    }

    function Mi(n) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(t => {
            typeof n[t] == "function" && (n[t] = n[t].bind(n))
        })
    }

    class fe extends ke {
        constructor() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            if (super(), this.options = Rt(e), this.services = {}, this.logger = V, this.modules = {external: []}, Mi(this), t && !this.isInitialized && !e.isClone) {
                if (!this.options.initImmediate) return this.init(e, t), this;
                setTimeout(() => {
                    this.init(e, t)
                }, 0)
            }
        }

        init() {
            var e = this;
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0;
            typeof t == "function" && (i = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
            const s = Tt();
            this.options = {...s, ...this.options, ...Rt(t)}, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {...s.interpolation, ...this.options.interpolation}), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);

            function a(d) {
                return d ? typeof d == "function" ? new d : d : null
            }

            if (!this.options.isClone) {
                this.modules.logger ? V.init(a(this.modules.logger), this.options) : V.init(null, this.options);
                let d;
                this.modules.formatter ? d = this.modules.formatter : typeof Intl < "u" && (d = $i);
                const c = new Nt(this.options);
                this.store = new Et(this.options.resources, this.options);
                const p = this.services;
                p.logger = V, p.resourceStore = this.store, p.languageUtils = c, p.pluralResolver = new Ri(c, {
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }), d && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (p.formatter = a(d), p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new Ai(this.options), p.utils = {hasLoadedNamespace: this.hasLoadedNamespace.bind(this)}, p.backendConnector = new Fi(a(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", function (g) {
                    for (var _ = arguments.length, y = new Array(_ > 1 ? _ - 1 : 0), v = 1; v < _; v++) y[v - 1] = arguments[v];
                    e.emit(g, ...y)
                }), this.modules.languageDetector && (p.languageDetector = a(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = a(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Re(this.services, this.options), this.translator.on("*", function (g) {
                    for (var _ = arguments.length, y = new Array(_ > 1 ? _ - 1 : 0), v = 1; v < _; v++) y[v - 1] = arguments[v];
                    e.emit(g, ...y)
                }), this.modules.external.forEach(g => {
                    g.init && g.init(this)
                })
            }
            if (this.format = this.options.interpolation.format, i || (i = Ae), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0])
            }
            !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(d => {
                this[d] = function () {
                    return e.store[d](...arguments)
                }
            }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(d => {
                this[d] = function () {
                    return e.store[d](...arguments), e
                }
            });
            const l = de(), h = () => {
                const d = (c, p) => {
                    this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(p), i(c, p)
                };
                if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return d(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, d)
            };
            return this.options.resources || !this.options.initImmediate ? h() : setTimeout(h, 0), l
        }

        loadResources(e) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ae;
            const s = typeof e == "string" ? e : this.language;
            if (typeof e == "function" && (i = e), !this.options.resources || this.options.partialBundledLanguages) {
                if (s && s.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
                const a = [], r = o => {
                    if (!o || o === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(o).forEach(h => {
                        h !== "cimode" && a.indexOf(h) < 0 && a.push(h)
                    })
                };
                s ? r(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => r(l)), this.options.preload && this.options.preload.forEach(o => r(o)), this.services.backendConnector.load(a, this.options.ns, o => {
                    !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(o)
                })
            } else i(null)
        }

        reloadResources(e, t, i) {
            const s = de();
            return e || (e = this.languages), t || (t = this.options.ns), i || (i = Ae), this.services.backendConnector.reload(e, t, a => {
                s.resolve(), i(a)
            }), s
        }

        use(e) {
            if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
            if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Ot.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this
        }

        setResolvedLanguage(e) {
            if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) for (let t = 0; t < this.languages.length; t++) {
                const i = this.languages[t];
                if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
                    this.resolvedLanguage = i;
                    break
                }
            }
        }

        changeLanguage(e, t) {
            var i = this;
            this.isLanguageChangingTo = e;
            const s = de();
            this.emit("languageChanging", e);
            const a = l => {
                this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l)
            }, r = (l, h) => {
                h ? (a(h), this.translator.changeLanguage(h), this.isLanguageChangingTo = void 0, this.emit("languageChanged", h), this.logger.log("languageChanged", h)) : this.isLanguageChangingTo = void 0, s.resolve(function () {
                    return i.t(...arguments)
                }), t && t(l, function () {
                    return i.t(...arguments)
                })
            }, o = l => {
                !e && !l && this.services.languageDetector && (l = []);
                const h = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
                h && (this.language || a(h), this.translator.language || this.translator.changeLanguage(h), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(h)), this.loadResources(h, d => {
                    r(d, h)
                })
            };
            return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), s
        }

        getFixedT(e, t, i) {
            var s = this;
            const a = function (r, o) {
                let l;
                if (typeof o != "object") {
                    for (var h = arguments.length, d = new Array(h > 2 ? h - 2 : 0), c = 2; c < h; c++) d[c - 2] = arguments[c];
                    l = s.options.overloadTranslationOptionHandler([r, o].concat(d))
                } else l = {...o};
                l.lng = l.lng || a.lng, l.lngs = l.lngs || a.lngs, l.ns = l.ns || a.ns, l.keyPrefix = l.keyPrefix || i || a.keyPrefix;
                const p = s.options.keySeparator || ".";
                let g;
                return l.keyPrefix && Array.isArray(r) ? g = r.map(_ => `${l.keyPrefix}${p}${_}`) : g = l.keyPrefix ? `${l.keyPrefix}${p}${r}` : r, s.t(g, l)
            };
            return typeof e == "string" ? a.lng = e : a.lngs = e, a.ns = t, a.keyPrefix = i, a
        }

        t() {
            return this.translator && this.translator.translate(...arguments)
        }

        exists() {
            return this.translator && this.translator.exists(...arguments)
        }

        setDefaultNamespace(e) {
            this.options.defaultNS = e
        }

        hasLoadedNamespace(e) {
            let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
            const i = t.lng || this.resolvedLanguage || this.languages[0],
                s = this.options ? this.options.fallbackLng : !1, a = this.languages[this.languages.length - 1];
            if (i.toLowerCase() === "cimode") return !0;
            const r = (o, l) => {
                const h = this.services.backendConnector.state[`${o}|${l}`];
                return h === -1 || h === 2
            };
            if (t.precheck) {
                const o = t.precheck(this, r);
                if (o !== void 0) return o
            }
            return !!(this.hasResourceBundle(i, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || r(i, e) && (!s || r(a, e)))
        }

        loadNamespaces(e, t) {
            const i = de();
            return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach(s => {
                this.options.ns.indexOf(s) < 0 && this.options.ns.push(s)
            }), this.loadResources(s => {
                i.resolve(), t && t(s)
            }), i) : (t && t(), Promise.resolve())
        }

        loadLanguages(e, t) {
            const i = de();
            typeof e == "string" && (e = [e]);
            const s = this.options.preload || [], a = e.filter(r => s.indexOf(r) < 0);
            return a.length ? (this.options.preload = s.concat(a), this.loadResources(r => {
                i.resolve(), t && t(r)
            }), i) : (t && t(), Promise.resolve())
        }

        dir(e) {
            if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
            const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
                i = this.services && this.services.languageUtils || new Nt(Tt());
            return t.indexOf(i.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
        }

        static createInstance() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            return new fe(e, t)
        }

        cloneInstance() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ae;
            const i = e.forkResourceStore;
            i && delete e.forkResourceStore;
            const s = {...this.options, ...e, isClone: !0}, a = new fe(s);
            return (e.debug !== void 0 || e.prefix !== void 0) && (a.logger = a.logger.clone(e)), ["store", "services", "language"].forEach(o => {
                a[o] = this[o]
            }), a.services = {...this.services}, a.services.utils = {hasLoadedNamespace: a.hasLoadedNamespace.bind(a)}, i && (a.store = new Et(this.store.data, s), a.services.resourceStore = a.store), a.translator = new Re(a.services, s), a.translator.on("*", function (o) {
                for (var l = arguments.length, h = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++) h[d - 1] = arguments[d];
                a.emit(o, ...h)
            }), a.init(s, t), a.translator.options = s, a.translator.backendConnector.services.utils = {hasLoadedNamespace: a.hasLoadedNamespace.bind(a)}, a
        }

        toJSON() {
            return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage
            }
        }
    }

    const E = fe.createInstance();
    E.createInstance = fe.createInstance, E.createInstance, E.dir, E.init, E.loadResources, E.reloadResources, E.use, E.changeLanguage, E.getFixedT;
    const L = E.t;
    E.exists, E.setDefaultNamespace, E.hasLoadedNamespace, E.loadNamespaces, E.loadLanguages;
    const Nn = "";
    var Ze, j, et, At, Dt = 0, $t = [], De = [], Ut = b.__b, Ft = b.__r, Mt = b.diffed, jt = b.__c, Ht = b.unmount;

    function ji(n, e) {
        b.__h && b.__h(j, n, Dt || e), Dt = 0;
        var t = j.__H || (j.__H = {__: [], __h: []});
        return n >= t.__.length && t.__.push({__V: De}), t.__[n]
    }

    function Gt(n, e) {
        var t = ji(Ze++, 7);
        return Bi(t.__H, e) ? (t.__V = n(), t.i = e, t.__h = n, t.__V) : t.__
    }

    function Hi() {
        for (var n; n = $t.shift();) if (n.__P && n.__H) try {
            n.__H.__h.forEach($e), n.__H.__h.forEach(tt), n.__H.__h = []
        } catch (e) {
            n.__H.__h = [], b.__e(e, n.__v)
        }
    }

    b.__b = function (n) {
        j = null, Ut && Ut(n)
    }, b.__r = function (n) {
        Ft && Ft(n), Ze = 0;
        var e = (j = n.__c).__H;
        e && (et === j ? (e.__h = [], j.__h = [], e.__.forEach(function (t) {
            t.__N && (t.__ = t.__N), t.__V = De, t.__N = t.i = void 0
        })) : (e.__h.forEach($e), e.__h.forEach(tt), e.__h = [], Ze = 0)), et = j
    }, b.diffed = function (n) {
        Mt && Mt(n);
        var e = n.__c;
        e && e.__H && (e.__H.__h.length && ($t.push(e) !== 1 && At === b.requestAnimationFrame || ((At = b.requestAnimationFrame) || Gi)(Hi)), e.__H.__.forEach(function (t) {
            t.i && (t.__H = t.i), t.__V !== De && (t.__ = t.__V), t.i = void 0, t.__V = De
        })), et = j = null
    }, b.__c = function (n, e) {
        e.some(function (t) {
            try {
                t.__h.forEach($e), t.__h = t.__h.filter(function (i) {
                    return !i.__ || tt(i)
                })
            } catch (i) {
                e.some(function (s) {
                    s.__h && (s.__h = [])
                }), e = [], b.__e(i, t.__v)
            }
        }), jt && jt(n, e)
    }, b.unmount = function (n) {
        Ht && Ht(n);
        var e, t = n.__c;
        t && t.__H && (t.__H.__.forEach(function (i) {
            try {
                $e(i)
            } catch (s) {
                e = s
            }
        }), t.__H = void 0, e && b.__e(e, t.__v))
    };
    var Bt = typeof requestAnimationFrame == "function";

    function Gi(n) {
        var e, t = function () {
            clearTimeout(i), Bt && cancelAnimationFrame(e), setTimeout(n)
        }, i = setTimeout(t, 100);
        Bt && (e = requestAnimationFrame(t))
    }

    function $e(n) {
        var e = j, t = n.__c;
        typeof t == "function" && (n.__c = void 0, t()), j = e
    }

    function tt(n) {
        var e = j;
        n.__c = n.__(), j = e
    }

    function Bi(n, e) {
        return !n || n.length !== e.length || e.some(function (t, i) {
            return t !== n[i]
        })
    }

    function Ue() {
        throw new Error("Cycle detected")
    }

    var zi = Symbol.for("preact-signals");

    function Fe() {
        if (q > 1) q--; else {
            for (var n, e = !1; me !== void 0;) {
                var t = me;
                for (me = void 0, it++; t !== void 0;) {
                    var i = t.o;
                    if (t.o = void 0, t.f &= -3, !(8 & t.f) && Vt(t)) try {
                        t.c()
                    } catch (s) {
                        e || (n = s, e = !0)
                    }
                    t = i
                }
            }
            if (it = 0, q--, e) throw n
        }
    }

    function ge(n) {
        if (q > 0) return n();
        q++;
        try {
            return n()
        } finally {
            Fe()
        }
    }

    var T = void 0, me = void 0, q = 0, it = 0, Me = 0;

    function zt(n) {
        if (T !== void 0) {
            var e = n.n;
            if (e === void 0 || e.t !== T) return e = {
                i: 0,
                S: n,
                p: T.s,
                n: void 0,
                t: T,
                e: void 0,
                x: void 0,
                r: e
            }, T.s !== void 0 && (T.s.n = e), T.s = e, n.n = e, 32 & T.f && n.S(e), e;
            if (e.i === -1) return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = T.s, e.n = void 0, T.s.n = e, T.s = e), e
        }
    }

    function D(n) {
        this.v = n, this.i = 0, this.n = void 0, this.t = void 0
    }

    D.prototype.brand = zi, D.prototype.h = function () {
        return !0
    }, D.prototype.S = function (n) {
        this.t !== n && n.e === void 0 && (n.x = this.t, this.t !== void 0 && (this.t.e = n), this.t = n)
    }, D.prototype.U = function (n) {
        if (this.t !== void 0) {
            var e = n.e, t = n.x;
            e !== void 0 && (e.x = t, n.e = void 0), t !== void 0 && (t.e = e, n.x = void 0), n === this.t && (this.t = t)
        }
    }, D.prototype.subscribe = function (n) {
        var e = this;
        return re(function () {
            var t = e.value, i = 32 & this.f;
            this.f &= -33;
            try {
                n(t)
            } finally {
                this.f |= i
            }
        })
    }, D.prototype.valueOf = function () {
        return this.value
    }, D.prototype.toString = function () {
        return this.value + ""
    }, D.prototype.toJSON = function () {
        return this.value
    }, D.prototype.peek = function () {
        return this.v
    }, Object.defineProperty(D.prototype, "value", {
        get: function () {
            var n = zt(this);
            return n !== void 0 && (n.i = this.i), this.v
        }, set: function (n) {
            if (T instanceof X && function () {
                throw new Error("Computed cannot have side-effects")
            }(), n !== this.v) {
                it > 100 && Ue(), this.v = n, this.i++, Me++, q++;
                try {
                    for (var e = this.t; e !== void 0; e = e.x) e.t.N()
                } finally {
                    Fe()
                }
            }
        }
    });

    function w(n) {
        return new D(n)
    }

    function Vt(n) {
        for (var e = n.s; e !== void 0; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
        return !1
    }

    function Kt(n) {
        for (var e = n.s; e !== void 0; e = e.n) {
            var t = e.S.n;
            if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
                n.s = e;
                break
            }
        }
    }

    function Jt(n) {
        for (var e = n.s, t = void 0; e !== void 0;) {
            var i = e.p;
            e.i === -1 ? (e.S.U(e), i !== void 0 && (i.n = e.n), e.n !== void 0 && (e.n.p = i)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = i
        }
        n.s = t
    }

    function X(n) {
        D.call(this, void 0), this.x = n, this.s = void 0, this.g = Me - 1, this.f = 4
    }

    (X.prototype = new D).h = function () {
        if (this.f &= -3, 1 & this.f) return !1;
        if ((36 & this.f) == 32 || (this.f &= -5, this.g === Me)) return !0;
        if (this.g = Me, this.f |= 1, this.i > 0 && !Vt(this)) return this.f &= -2, !0;
        var n = T;
        try {
            Kt(this), T = this;
            var e = this.x();
            (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++)
        } catch (t) {
            this.v = t, this.f |= 16, this.i++
        }
        return T = n, Jt(this), this.f &= -2, !0
    }, X.prototype.S = function (n) {
        if (this.t === void 0) {
            this.f |= 36;
            for (var e = this.s; e !== void 0; e = e.n) e.S.S(e)
        }
        D.prototype.S.call(this, n)
    }, X.prototype.U = function (n) {
        if (this.t !== void 0 && (D.prototype.U.call(this, n), this.t === void 0)) {
            this.f &= -33;
            for (var e = this.s; e !== void 0; e = e.n) e.S.U(e)
        }
    }, X.prototype.N = function () {
        if (!(2 & this.f)) {
            this.f |= 6;
            for (var n = this.t; n !== void 0; n = n.x) n.t.N()
        }
    }, X.prototype.peek = function () {
        if (this.h() || Ue(), 16 & this.f) throw this.v;
        return this.v
    }, Object.defineProperty(X.prototype, "value", {
        get: function () {
            1 & this.f && Ue();
            var n = zt(this);
            if (this.h(), n !== void 0 && (n.i = this.i), 16 & this.f) throw this.v;
            return this.v
        }
    });

    function Wt(n) {
        return new X(n)
    }

    function Yt(n) {
        var e = n.u;
        if (n.u = void 0, typeof e == "function") {
            q++;
            var t = T;
            T = void 0;
            try {
                e()
            } catch (i) {
                throw n.f &= -2, n.f |= 8, nt(n), i
            } finally {
                T = t, Fe()
            }
        }
    }

    function nt(n) {
        for (var e = n.s; e !== void 0; e = e.n) e.S.U(e);
        n.x = void 0, n.s = void 0, Yt(n)
    }

    function Vi(n) {
        if (T !== this) throw new Error("Out-of-order effect");
        Jt(this), T = n, this.f &= -2, 8 & this.f && nt(this), Fe()
    }

    function _e(n) {
        this.x = n, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
    }

    _e.prototype.c = function () {
        var n = this.S();
        try {
            if (8 & this.f || this.x === void 0) return;
            var e = this.x();
            typeof e == "function" && (this.u = e)
        } finally {
            n()
        }
    }, _e.prototype.S = function () {
        1 & this.f && Ue(), this.f |= 1, this.f &= -9, Yt(this), Kt(this), q++;
        var n = T;
        return T = this, Vi.bind(this, n)
    }, _e.prototype.N = function () {
        2 & this.f || (this.f |= 2, this.o = me, me = this)
    }, _e.prototype.d = function () {
        this.f |= 8, 1 & this.f || nt(this)
    };

    function re(n) {
        var e = new _e(n);
        try {
            e.c()
        } catch (t) {
            throw e.d(), t
        }
        return e.d.bind(e)
    }

    var st;

    function oe(n, e) {
        b[n] = e.bind(null, b[n] || function () {
        })
    }

    function je(n) {
        st && st(), st = n && n.S()
    }

    function qt(n) {
        var e = this, t = n.data, i = Ji(t);
        i.value = t;
        var s = Gt(function () {
            for (var a = e.__v; a = a.__;) if (a.__c) {
                a.__c.__$f |= 4;
                break
            }
            return e.__$u.c = function () {
                var r;
                !ht(s.peek()) && ((r = e.base) == null ? void 0 : r.nodeType) === 3 ? e.base.data = s.peek() : (e.__$f |= 1, e.setState({}))
            }, Wt(function () {
                var r = i.value.value;
                return r === 0 ? 0 : r === !0 ? "" : r || ""
            })
        }, []);
        return s.value
    }

    qt.displayName = "_st", Object.defineProperties(D.prototype, {
        constructor: {configurable: !0, value: void 0},
        type: {configurable: !0, value: qt},
        props: {
            configurable: !0, get: function () {
                return {data: this}
            }
        },
        __b: {configurable: !0, value: 1}
    }), oe("__b", function (n, e) {
        if (typeof e.type == "string") {
            var t, i = e.props;
            for (var s in i) if (s !== "children") {
                var a = i[s];
                a instanceof D && (t || (e.__np = t = {}), t[s] = a, i[s] = a.peek())
            }
        }
        n(e)
    }), oe("__r", function (n, e) {
        je();
        var t, i = e.__c;
        i && (i.__$f &= -2, (t = i.__$u) === void 0 && (i.__$u = t = function (s) {
            var a;
            return re(function () {
                a = this
            }), a.c = function () {
                i.__$f |= 1, i.setState({})
            }, a
        }())), je(t), n(e)
    }), oe("__e", function (n, e, t, i) {
        je(), n(e, t, i)
    }), oe("diffed", function (n, e) {
        je();
        var t;
        if (typeof e.type == "string" && (t = e.__e)) {
            var i = e.__np, s = e.props;
            if (i) {
                var a = t.U;
                if (a) for (var r in a) {
                    var o = a[r];
                    o !== void 0 && !(r in i) && (o.d(), a[r] = void 0)
                } else t.U = a = {};
                for (var l in i) {
                    var h = a[l], d = i[l];
                    h === void 0 ? (h = Ki(t, l, d, s), a[l] = h) : h.o(d, s)
                }
            }
        }
        n(e)
    });

    function Ki(n, e, t, i) {
        var s = e in n && n.ownerSVGElement === void 0, a = w(t);
        return {
            o: function (r, o) {
                a.value = r, i = o
            }, d: re(function () {
                var r = a.value.value;
                i[e] !== r && (i[e] = r, s ? n[e] = r : r ? n.setAttribute(e, r) : n.removeAttribute(e))
            })
        }
    }

    oe("unmount", function (n, e) {
        if (typeof e.type == "string") {
            var t = e.__e;
            if (t) {
                var i = t.U;
                if (i) {
                    t.U = void 0;
                    for (var s in i) {
                        var a = i[s];
                        a && a.d()
                    }
                }
            }
        } else {
            var r = e.__c;
            if (r) {
                var o = r.__$u;
                o && (r.__$u = void 0, o.d())
            }
        }
        n(e)
    }), oe("__h", function (n, e, t, i) {
        (i < 3 || i === 9) && (e.__$f |= 2), n(e, t, i)
    }), k.prototype.shouldComponentUpdate = function (n, e) {
        var t = this.__$u;
        if (!(t && t.s !== void 0 || 4 & this.__$f) || 3 & this.__$f) return !0;
        for (var i in e) return !0;
        for (var s in n) if (s !== "__source" && n[s] !== this.props[s]) return !0;
        for (var a in this.props) if (!(a in n)) return !0;
        return !1
    };

    function Ji(n) {
        return Gt(function () {
            return w(n)
        }, [])
    }

    // const Wi = "https://brush.bgaming-network.com/assets/b-rush-challenge.png", Yi = !0, at = 60 * 1e3, Xt = 10 * 1e3,
    const Wi = "assets/b-rush-challenge.png", Yi = !0, at = 60 * 1e3, Xt = 10 * 1e3,
        be = 2 * 1e3, Qt = 100, Zt = "*****", S = {
            JOIN_CHALLENGE: "joinChallenge",
            FINISH_CHALLENGE: "finishChallenge",
            GET_LEADERBOARD: "getLeaderboard",
            GET_CHALLENGES: "getChallenges",
            GET_PLAYER_CODE: "getPlayerCode"
        }, ve = {
            BASE: "api/challenges",
            LIST: "api/challenges",
            JOIN: "api/challenges/join",
            LEADERBOARD: "api/challenges/{%ROOM_ID%}/leaderboard",
            FINISH: "api/challenges/{%ROOM_ID%}/complete",
            CODE: "api/challenges/player_code"
        }, ei = ["100", "101"];

    class qi {
        constructor() {
            m(this, "baseUrl", "");
            m(this, "gameID", "");
            m(this, "isLeaderboardEmpty", !0);
            m(this, "abortController", null);
            m(this, "onChallengesListUpdated", w(null));
            m(this, "onLastFinishedChallengeUpdated", w(null));
            m(this, "onChallengeJoined", w(null));
            m(this, "onChallengeLeaderboardUpdated", w(null));
            m(this, "onChallengeFinished", w(null));
            m(this, "onPlayersCodeUpdated", w(null));
            m(this, "errorState", w({}));
            m(this, "loadingState", w({}))
        }

        init() {
            var e, t, i, s, a, r, o, l, h, d;
            this.baseUrl = ((t = (e = window.__OPTIONS__) == null ? void 0 : e.challenge_options) == null ? void 0 : t.data_hub_url) || ((i = window.__OPTIONS__) == null ? void 0 : i.games_page_url), (s = this.baseUrl) != null && s.endsWith("/") && (this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1)), this.gameID = (a = window.__OPTIONS__) == null ? void 0 : a.identifier, this.dataParam = (o = (r = window.__OPTIONS__) == null ? void 0 : r.challenge_options) == null ? void 0 : o.data, this.saltParam = (h = (l = window.__OPTIONS__) == null ? void 0 : l.challenge_options) == null ? void 0 : h.salt, this.locale = (d = window.__OPTIONS__) == null ? void 0 : d.locale
        }

        async getChallenges(e, t = 3) {
            const i = `${this.baseUrl}/${ve.LIST}/${e || this.gameID}/available?data=${this.dataParam}&salt=${this.saltParam}&locale=${this.locale}`;
            this.abortController = new AbortController;
            const s = this.abortController.signal;
            try {
                this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_CHALLENGES]: !0
                }, this.errorState.value = {...this.errorState.value, [S.GET_CHALLENGES]: ""};
                const {data: a, last_finished_challenge: r} = await this._makeRequest({url: i, signal: s});
                return this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_CHALLENGES]: !1
                }, this.onLastFinishedChallengeUpdated.value = r, this.onChallengesListUpdated.value = a, a
            } catch {
                return s.aborted ? (this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_CHALLENGES]: !1
                }, null) : t > 0 ? (await new Promise(r => setTimeout(r, be)), this.getChallenges(e, t - 1)) : (this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_CHALLENGES]: !1
                }, this.errorState.value = {
                    ...this.errorState.value,
                    [S.GET_CHALLENGES]: L("errorMessages.loading")
                }, await new Promise(r => setTimeout(r, at)), this.getChallenges(e, 0))
            }
        }

        async joinToChallenge(e, t, i = 3) {
            const s = `${this.baseUrl}/${ve.JOIN}/${t || this.gameID}/${e}?data=${this.dataParam}&salt=${this.saltParam}`;
            try {
                this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.JOIN_CHALLENGE]: !0
                }, this.errorState.value = {...this.errorState.value, [S.JOIN_CHALLENGE]: ""};
                const {data: a} = await this._makeRequest({url: s, method: "POST"});
                return this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.JOIN_CHALLENGE]: !1
                }, this.onChallengeJoined.value = a, a
            } catch (a) {
                return !ei.includes(a.message) && i > 0 ? (await new Promise(r => setTimeout(r, be)), this.joinToChallenge(e, t, i - 1)) : (this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.JOIN_CHALLENGE]: !1
                }, this.errorState.value = {
                    ...this.errorState.value,
                    [S.JOIN_CHALLENGE]: ei.includes(a.message) ? L(`errorMessages.${a.message}`) : L("errorMessages.default")
                }, null)
            }
        }

        async getLeaderboard(e, t, i = 3) {
            const s = `${this.baseUrl}/${ve.BASE}/${e}/leaderboard?data=${this.dataParam}&salt=${this.saltParam}&page=${t}&per_page=${Qt}`;
            try {
                this.isLeaderboardEmpty && (this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_LEADERBOARD]: !0
                }, await new Promise(r => setTimeout(r, 1e3))), this.errorState.value = {
                    ...this.errorState.value,
                    [S.GET_LEADERBOARD]: ""
                };
                const {data: a} = await this._makeRequest({url: s});
                return this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_LEADERBOARD]: !1
                }, this.isLeaderboardEmpty = !1, this.onChallengeLeaderboardUpdated.value = a, a
            } catch {
                return i > 0 ? (await new Promise(r => setTimeout(r, be)), this.getLeaderboard(e, t, i - 1)) : (this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_LEADERBOARD]: !1
                }, this.errorState.value = {
                    ...this.errorState.value,
                    [S.GET_LEADERBOARD]: L("errorMessages.loading")
                }, await new Promise(r => setTimeout(r, Xt)), this.getLeaderboard(e, t, 0))
            }
        }

        async finishChallenge(e, t = 3) {
            const i = `${this.baseUrl}/${ve.BASE}/${e}/complete?data=${this.dataParam}&salt=${this.saltParam}`;
            this.onChallengeFinished.value = !1;
            try {
                this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.FINISH_CHALLENGE]: !0
                }, this.errorState.value = {...this.errorState.value, [S.FINISH_CHALLENGE]: ""};
                const {data: s} = await this._makeRequest({url: i, method: "POST"});
                return this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.FINISH_CHALLENGE]: !1
                }, this.onChallengeFinished.value = s === "Challenge completed!", s
            } catch {
                return t > 0 ? (await new Promise(a => setTimeout(a, be)), this.finishChallenge(e, t - 1)) : (this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.FINISH_CHALLENGE]: !1
                }, this.errorState.value = {
                    ...this.errorState.value,
                    [S.FINISH_CHALLENGE]: L("errorMessages.default")
                }, null)
            }
        }

        async getPlayerCode(e = 3) {
            const t = `${this.baseUrl}/${ve.CODE}?data=${this.dataParam}&salt=${this.saltParam}`;
            try {
                this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_PLAYER_CODE]: !0
                }, this.errorState.value = {...this.errorState.value, [S.GET_PLAYER_CODE]: ""};
                const {data: i} = await this._makeRequest({url: t});
                return this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_PLAYER_CODE]: !1
                }, this.onPlayersCodeUpdated.value = i, i
            } catch {
                return e > 0 ? (await new Promise(s => setTimeout(s, be)), this.getPlayerCode(e - 1)) : (this.loadingState.value = {
                    ...this.loadingState.value,
                    [S.GET_PLAYER_CODE]: !1
                }, this.errorState.value = {
                    ...this.errorState.value,
                    [S.GET_PLAYER_CODE]: L("errorMessages.loading")
                }, await new Promise(s => setTimeout(s, at)), this.getPlayerCode(0))
            }
        }

        async _makeRequest({url: e, method: t = "GET", body: i = null, signal: s = null}) {
            const a = await fetch(e, {method: t, body: i, signal: s}), r = await a.json();
            if (a.status !== 200 || r.status && r.status !== "ok") throw new Error(r.code || r.error || "Something went wrong");
            return r
        }
    }

    const rt = "challenges", Xi = "spinsRemainig", ye = "rulesShown";

    class Qi {
        constructor() {
            m(this, "currentChallenge", null)
        }

        init(e) {
            this.currentChallenge = e
        }

        getData() {
            return JSON.parse(window.localStorage.getItem(rt))
        }

        getCurrentChallenge() {
            return this.getData() ? this.getData()[this.currentChallenge.challengeData.value.id] : {}
        }

        setData(e, t) {
            const i = this.getData(), s = i ? i[this.currentChallenge.challengeData.value.id] : {};
            window.localStorage.setItem(rt, JSON.stringify({
                ...i,
                [this.currentChallenge.challengeData.value.id]: {...s, [e]: t}
            }))
        }

        clearCurrentChallenge() {
            const e = this.getData();
            delete e[this.currentChallenge.challengeData.value.id], window.localStorage.setItem(rt, JSON.stringify(e))
        }
    }

    class Zi {
        sendDataToAmplitude(e, t) {
            var i;
            (i = window.amplitude) == null || i.sendAction(e, t)
        }

        updateUserProperty(e, t, i = !1, s = !0) {
            var a;
            (a = window.amplitude) == null || a.updateUserProperty(e, t, s), i && this.overrideUserProperties()
        }

        overrideUserProperties() {
            var e;
            (e = window.amplitude) == null || e.overrideUserProperties()
        }
    }

    const J = {
        JOIN_POPUP_OPENED: "Challenge Join Screen Opened",
        JOIN_POPUP_CLOSED: "Challenge Join Screen Closed",
        CHALLENGE_JOINED: "Challenge Joined",
        CHALLENGE_INFO_OPENED: "Challenge Info Opened",
        CHALLENGE_INFO_CLOSED: "Challenge Info Collapsed",
        CHALLENGE_FINISH_CLICKED: "Challenge Finish Button Clicked",
        CHALLENGE_FINISHED: "Challenge Finished"
    }, H = new Zi, en = 360, tn = 205;

    function ti() {
        const e = window.innerWidth / en, t = e * tn + "px";
        document.documentElement.style.setProperty("--viewport-scale-x", `${e}`), document.documentElement.style.setProperty("--mobile-bottom", `${t}`)
    }

    const P = {PLANNED: "Planned", ONGOING: "Ongoing", SYNC: "Result_calculating", FINISHED: "Finished"},
        le = {MAX_MULTIPLIER: "max_multiplier", BETS_SUM: "bets_sum", TOP_MULTIPLIER_SUM: "top_multiplier_sum"},
        ot = {ALLOWED: "allowed", DENIED: "denied_buy", ONLY_FEATURE: "only_feature"}, M = {
            START_LOADING: "start_loading",
            GAME_LOADED: "game_loaded",
            BUTTON_CLICK: "button-click",
            PRE_PLAY: "pre_play",
            PLAY: "play",
            FINISH_ROUND_ANIMATIONS: "finish_round_animations",
            SETTINGS_CHANGE: "settings-change",
            CUSTOM_EVENT: "custom_event",
            GAME_UI_SETTINGS_OPENED: "game_ui_settings_opened",
            GAME_UI_RULES_OPENED: "game_ui_rules_opened",
            GAME_UI_PAYTABLE_OPENED: "game_ui_paytable_opened",
            GAME_UI_BET_PANEL_OPENED: "game_ui_bet_panel_opened",
            GAME_UI_AUTOSPINS_PANEL_OPENED: "game_ui_autospins_panel_opened",
            GAME_UI_OVERLAP: "game_ui_overlap"
        }, xe = {
            OPEN_LOBBY: "open_lobby",
            JOIN_CHALLENGE: "join_challenge",
            INIT_EXT_WIDGETS: "init_ext_widgets",
            DISABLE_EXT_WIDGETS: "disable_ext_widgets",
            ENABLE_EXT_WIDGETS: "enable_ext_widgets"
        };

    class nn {
        constructor(e, t) {
            m(this, "errorState", w({}));
            m(this, "loadingState", w({}));
            m(this, "showBuyBonusToast", w(!1));
            m(this, "showCopyPlayerCodeToast", w(!1));
            m(this, "currentChallenge", new sn);
            m(this, "playerCode", w(null));
            m(this, "initialized", w(!1));
            m(this, "isLeftHandedUI", w(!1));
            m(this, "isMobile", w(!1));
            m(this, "isPortrait", w(!1));
            m(this, "globalMinimizePopups", w(!1));
            m(this, "isWidgetEnabled", w(!0));
            m(this, "_challengesListTimeoutID");
            m(this, "_challengeLeaderboardTimeoutID");
            m(this, "_challengeSwitchStateTimeoutID");
            m(this, "_gameController");
            m(this, "_lastRoundId", 0);
            m(this, "_autospinsOpenCount", 0);
            m(this, "_autospinsOpenTimer", null);
            m(this, "_hasLastFinishedChallenge", !1);
            m(this, "_isOverlapped", !1);
            m(this, "isLobbyEnabled", !1);
            m(this, "applicationRoot");
            m(this, "_challengesList", []);
            this.service = e, this.localStorage = t, this._gameEventsProcessor = this._gameEventsProcessor.bind(this), this._onMessage = this._onMessage.bind(this), this._onResize = this._onResize.bind(this), window.trackGameEventListeners || (window.trackGameEventListeners = []), window.trackGameEventListeners.push(this._gameEventsProcessor), window.addEventListener("message", this._onMessage)
        }

        isChallengesEnabled() {
            var e, t, i, s, a, r, o, l, h, d, c;
            return ((t = (e = window.__OPTIONS__) == null ? void 0 : e.challenge_options) == null ? void 0 : t.data) && ((s = (i = window.__OPTIONS__) == null ? void 0 : i.challenge_options) == null ? void 0 : s.salt) && ((r = (a = window.__OPTIONS__) == null ? void 0 : a.challenge_options) == null ? void 0 : r.data_hub_url) && ((o = window.__OPTIONS__) == null ? void 0 : o.currency) && ((l = window.__OPTIONS__) == null ? void 0 : l.currency) !== "FUN" && !((h = window.__REPLAYS__) != null && h.isReplayMode()) && !((c = (d = window.__OPTIONS__) == null ? void 0 : d.replay) != null && c.length)
        }

        init() {
            !this.initialized.value && this.isChallengesEnabled() && (this.service.init(), this.service.errorState.subscribe(this._processErrorState.bind(this)), this.service.loadingState.subscribe(this._processLoadingState.bind(this)), this.service.onChallengesListUpdated.subscribe(this._processChallengesListData.bind(this)), this.service.onLastFinishedChallengeUpdated.subscribe(this._processLastFinishedChallengeData.bind(this)), this.service.onChallengeLeaderboardUpdated.subscribe(this._processChallengeLeaderboardData.bind(this)), this.service.onChallengeJoined.subscribe(this._processChallengeJoinData.bind(this)), this.service.onChallengeFinished.subscribe(this._processChallengeCompleteData.bind(this)), this.service.onPlayersCodeUpdated.subscribe(this._processPlayerCodeData.bind(this)), window.addEventListener("resize", this._onResize), this.updateChallengesListData(), this.service.getPlayerCode(), this.initialized.value = !0, this._checkLeftHandMode(), ti(), this.localStorage.init(this.currentChallenge))
        }

        lockInteraction() {
            var e, t;
            (t = (e = this.applicationRoot) == null ? void 0 : e.classList) == null || t.add("disabled-interaction")
        }

        unlockInteraction() {
            var e, t;
            (t = (e = this.applicationRoot) == null ? void 0 : e.classList) == null || t.remove("disabled-interaction")
        }

        _gameEventsProcessor(e, t, i) {
            var s, a, r, o, l, h;
            switch (e) {
                case M.START_LOADING:
                    this._gameController = i, this.isMobile.value = (r = (a = (s = this._gameController) == null ? void 0 : s.game) == null ? void 0 : a.isMobile) == null ? void 0 : r.any;
                    break;
                case M.GAME_LOADED:
                    this.isLobbyEnabled = !!((l = (o = window.__OPTIONS__) == null ? void 0 : o.lobby_options) != null && l.show_lobby), this.isLobbyEnabled || this.init();
                    break;
                case M.SETTINGS_CHANGE:
                    this._checkLeftHandMode();
                    break;
                case M.PRE_PLAY:
                    this._unscheduleChallengeLeaderboardUpdate(), this.isMobile.peek() && (this.globalMinimizePopups.value = !0);
                    break;
                case M.PLAY:
                    this._lastRoundId = ((h = i == null ? void 0 : i.gameFlow) == null ? void 0 : h.round_id) || 0;
                    break;
                case M.FINISH_ROUND_ANIMATIONS:
                    this.updateChallengeLeaderboardData();
                    break;
                case M.GAME_UI_AUTOSPINS_PANEL_OPENED:
                    this.isMobile.peek() && (this.globalMinimizePopups.value = !0), this.handleCopyChallengeData();
                    break;
                case M.GAME_UI_SETTINGS_OPENED:
                case M.GAME_UI_BET_PANEL_OPENED:
                    this.isMobile.peek() && (this.globalMinimizePopups.value = !0);
                    break;
                case M.GAME_UI_PAYTABLE_OPENED:
                case M.GAME_UI_RULES_OPENED:
                    this.globalMinimizePopups.value = !0;
                    break;
                case M.BUTTON_CLICK:
                    t === "bonus-btn" || t === "buy-bonus-button" || t === "bonus_buy" || t === "bonus" || t === "buy-bonus-btn" || t === "west-bonus-btn" || t === "west-bonus-btn-portrait" ? this.onBuyBonusPopupShown() : this.showBuyBonusToast.value === !0 && this.onBuyBonusPopupClosed();
                    break;
                case M.GAME_UI_OVERLAP:
                    this._handleOverlapEvent(i);
                    break;
                case M.CUSTOM_EVENT:
                    (i == null ? void 0 : i.action) === "Buy bonus popup closed" && this.onBuyBonusPopupClosed();
                    break
            }
        }

        _onMessage(e) {
            const t = e.data;
            switch (t.name) {
                case xe.JOIN_CHALLENGE:
                    this.updateChallengesListData();
                    break;
                case M.GAME_UI_OVERLAP:
                    this._handleOverlapEvent(t == null ? void 0 : t.isOverlapped);
                    break;
                case xe.INIT_EXT_WIDGETS:
                    this.init();
                    break;
                case xe.DISABLE_EXT_WIDGETS:
                    this.isWidgetEnabled.value = !1;
                    break;
                case xe.ENABLE_EXT_WIDGETS:
                    this.isWidgetEnabled.value = !0;
                    break
            }
        }

        _updateSpinsLimits(e) {
            var s, a, r, o, l, h;
            if (!((s = this.currentChallenge) != null && s.isChallengeActive()) || !((r = (a = this.currentChallenge) == null ? void 0 : a.isLimitsActive) != null && r.peek()) || ((o = e == null ? void 0 : e.gameFlow) == null ? void 0 : o.round_id) === this._lastRoundId || this.currentChallenge.spinsRemainig.value === 0) return;
            const t = (h = (l = this.currentChallenge) == null ? void 0 : l.challengeData) == null ? void 0 : h.value,
                i = !!(e != null && e.purchasedFeature) || (e == null ? void 0 : e.isFreeRound) || (e == null ? void 0 : e.isFreeSpin) || (e == null ? void 0 : e.isRespin);
            (t == null ? void 0 : t.feature_condition) === ot.ONLY_FEATURE && !i || (t == null ? void 0 : t.feature_condition) === ot.DENIED && i || t != null && t.min_bet_cents_in_player_currency && (e == null ? void 0 : e.bet) < (t == null ? void 0 : t.min_bet_cents_in_player_currency) || (this.currentChallenge.spinsRemainig.value -= 1)
        }

        _checkLeftHandMode() {
            var e, t, i, s, a, r;
            this.isMobile.value = (i = (t = (e = this._gameController) == null ? void 0 : e.game) == null ? void 0 : t.isMobile) == null ? void 0 : i.any, this.isPortrait.value = window.innerHeight > window.innerWidth, this.isLeftHandedUI.value = (r = (a = (s = this._gameController) == null ? void 0 : s.game) == null ? void 0 : a.settings) == null ? void 0 : r.getItem("isLeftHandedUI")
        }

        destroy() {
            this._clearErrors(), window.removeEventListener("resize", this._onResize), window.removeEventListener("message", this._onMessage), this._challengesListTimeoutID !== void 0 && clearTimeout(this._challengesListTimeoutID), this._challengeLeaderboardTimeoutID !== void 0 && clearTimeout(this._challengeLeaderboardTimeoutID), this._challengeSwitchStateTimeoutID !== void 0 && clearTimeout(this._challengeSwitchStateTimeoutID)
        }

        updateChallengesListData() {
            var t, i;
            this.unlockInteraction();
            const e = (i = (t = this.currentChallenge) == null ? void 0 : t.challengeData) == null ? void 0 : i.value;
            e != null && e.player_active || (this._clearErrors(), this.service.getChallenges())
        }

        updateChallengeLeaderboardData() {
            var r, o, l, h;
            this.unlockInteraction();
            const e = (o = (r = this.currentChallenge) == null ? void 0 : r.challengeData) == null ? void 0 : o.value,
                t = e == null ? void 0 : e.id,
                i = (e == null ? void 0 : e.status) === P.FINISHED || (e == null ? void 0 : e.player_active),
                s = (e == null ? void 0 : e.status) === P.PLANNED,
                a = (h = (l = this.currentChallenge) == null ? void 0 : l.leaderboardPage) == null ? void 0 : h.value;
            t && (s || i && (this._hasLastFinishedChallenge || (this._clearErrors(), this.service.getLeaderboard(t, a))))
        }

        _startAutospinsOpenTimer() {
            this._autospinsOpenTimer = setTimeout(() => {
                this._autospinsOpenCount = 0, this._autospinsOpenTimer = null
            }, 5e3)
        }

        async handleCopyChallengeData() {
            var e, t;
            if (this._autospinsOpenCount++, this._autospinsOpenTimer || this._startAutospinsOpenTimer(), this._autospinsOpenCount >= 3) {
                this.playerCode.value || await this.service.getPlayerCode();
                const i = this.playerCode.value, s = (e = window.__OPTIONS__) == null ? void 0 : e.play_token,
                    a = (t = window.__OPTIONS__) == null ? void 0 : t.currency, r = `pid_${s}_pcode_${i}_cur_${a}`;
                navigator.clipboard.writeText(r), this._autospinsOpenCount = 0, clearTimeout(this._autospinsOpenTimer), this._autospinsOpenTimer = null
            }
        }

        joinToChallenge(e) {
            this._clearErrors(), e && (this.lockInteraction(), this.currentChallenge.challengeCode = e, this.service.joinToChallenge(e))
        }

        finishChallenge(e = null) {
            this._clearErrors();
            const t = e || this.currentChallenge.challengeData.value.id;
            t && (this.lockInteraction(), this.service.finishChallenge(t))
        }

        openLobby(e, t = null) {
            window.postMessage({name: xe.OPEN_LOBBY, eventType: e, id: t}, "*")
        }

        closeRulesPopup() {
            this.currentChallenge.isRulesPopupShown.value = !0, this.localStorage.setData(ye, !0)
        }

        onBuyBonusPopupShown() {
            var s, a;
            const e = (a = (s = this.currentChallenge) == null ? void 0 : s.challengeData) == null ? void 0 : a.value,
                t = this.currentChallenge.isLimitsActive.value, i = this.currentChallenge.spinsRemainig.value;
            !this._showBuyBonusToast && (e == null ? void 0 : e.status) === P.ONGOING && (e != null && e.player_active) && (!t || i > 0) && (e == null ? void 0 : e.feature_condition) === ot.DENIED && (this.showBuyBonusToast.value = !0, this._showBuyBonusToast = !0)
        }

        onBuyBonusPopupClosed() {
            this.closeToastTimeoutID === void 0 && (this.closeToastTimeoutID = setTimeout(() => {
                this.showBuyBonusToast.value = !1
            }, 5e3))
        }

        _handleOverlapEvent(e) {
            this._isOverlapped !== e && (this._isOverlapped = e, this.applicationRoot && (this.applicationRoot.style.zIndex = e ? "-1" : "2"))
        }

        _scheduleChallengesListUpdate(e) {
            this._unscheduleChallengesListUpdate(), this._challengesListTimeoutID = setTimeout(() => this.updateChallengesListData(), e || at)
        }

        _unscheduleChallengesListUpdate() {
            this.loadingState.value[S.GET_CHALLENGES] && this.service.abortController && this.service.abortController.abort(), this._challengesListTimeoutID !== void 0 && clearTimeout(this._challengesListTimeoutID)
        }

        _scheduleChallengeLeaderboardUpdate(e) {
            this._unscheduleChallengeLeaderboardUpdate(), this._challengeLeaderboardTimeoutID = setTimeout(() => this.updateChallengeLeaderboardData(), e || Xt)
        }

        _unscheduleChallengeLeaderboardUpdate() {
            this._challengeLeaderboardTimeoutID !== void 0 && clearTimeout(this._challengeLeaderboardTimeoutID)
        }

        _processErrorState(e) {
            this.unlockInteraction(), this.errorState.value = e
        }

        _processLoadingState(e) {
            this.loadingState.value = e
        }

        _clearErrors() {
            this.errorState.value = {}
        }

        _processChallengesListData(e) {
            var r, o;
            if (this._unscheduleChallengesListUpdate(), !e) return;
            if (this._hasLastFinishedChallenge) {
                this._scheduleChallengesListUpdate();
                return
            }
            if (e = this._filterChallengeAvailabilityByBrand(e || []), e.length === 0) {
                this.currentChallenge.challengeData.value = null, this.currentChallenge.playerData.value = null, this.currentChallenge.leaderboard.value = [], this.currentChallenge.challengeCode = null, this.currentChallenge.isLimitsActive.value = !1, this.currentChallenge.spinsRemainig.value = 0, this._scheduleChallengesListUpdate();
                return
            }
            const t = (o = (r = this.currentChallenge) == null ? void 0 : r.challengeData) == null ? void 0 : o.value;
            if (t != null && t.player_active) return;
            let i, s, a;
            for (const l of e) switch (l.finish_at = new Date(l.finish_at).getTime(), l.start_at = new Date(l.start_at).getTime(), l.player_active && (l.finish_at < Date.now() ? l.status = P.FINISHED : l.start_at < Date.now() && (l.status = P.ONGOING)), l.status) {
                case P.FINISHED:
                    i = l;
                    break;
                case P.ONGOING:
                    s = l;
                    break;
                case P.PLANNED:
                    a = l;
                    break
            }
            this._challengesList = JSON.parse(JSON.stringify(e)), ge(() => {
                if (i) this.currentChallenge.challengeData.value = i, this.service.getPlayerCode(), this.updateChallengeLeaderboardData(); else if (s) if (this.currentChallenge.challengeData.value = s, s.player_active) {
                    const l = this.localStorage.getCurrentChallenge(), h = (l == null ? void 0 : l[Xi]) || 0,
                        d = (l == null ? void 0 : l[ye]) || !1;
                    h && h < s.spin_limit ? (this.currentChallenge.isLimitsActive.value = h > 0, this.currentChallenge.spinsRemainig.value = h || 0) : (this.currentChallenge.isLimitsActive.value = s.spin_limit > 0, this.currentChallenge.spinsRemainig.value = s.spin_limit || 0), this.currentChallenge.isRulesPopupShown.value = d, this.isLobbyEnabled && (this.currentChallenge.isRulesPopupShown.value = !0), this.localStorage.setData(ye, d), this.updateChallengeLeaderboardData(), this._scheduleChallengeStateSwitch()
                } else this.isLobbyEnabled || s != null && s.auto_join && (s != null && s.join_code) && this.joinToChallenge(s.join_code), this._scheduleChallengesListUpdate(); else if (a) if (this.currentChallenge.challengeData.value = a, a.player_active) {
                    const l = this.localStorage.getCurrentChallenge(), h = (l == null ? void 0 : l[ye]) || !1;
                    this.currentChallenge.isLimitsActive.value = a.spin_limit > 0, this.currentChallenge.spinsRemainig.value = a.spin_limit || 0, this.currentChallenge.isRulesPopupShown.value = h, this.isLobbyEnabled && (this.currentChallenge.isRulesPopupShown.value = !0), this.localStorage.setData(ye, h), this._scheduleChallengeStateSwitch()
                } else this.isLobbyEnabled || a != null && a.auto_join && (a != null && a.join_code) && this.joinToChallenge(a.join_code), this._scheduleChallengesListUpdate()
            })
        }

        _processLastFinishedChallengeData(e) {
            if (!e) {
                this._hasLastFinishedChallenge = !1;
                return
            }
            if (this.isLobbyEnabled) {
                this._hasLastFinishedChallenge = !1;
                return
            }
            ge(() => {
                this._hasLastFinishedChallenge = !0, this.currentChallenge.challengeData.value = {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    organizer: "",
                    start_at: 0,
                    finish_at: 0,
                    prize_places_count: 0,
                    challenge_type: e.challenge_type,
                    status: P.FINISHED,
                    player_active: !1,
                    spin_limit: 0,
                    feature_condition: "",
                    rules: e.rules,
                    auto_join: !1,
                    join_code: "",
                    brands: [],
                    min_bet_cents_in_player_currency: 0
                }, this.currentChallenge.playerData.value = {
                    rank: e.rank,
                    code: e.code,
                    max_multiplier: e.max_multiplier || 0,
                    bets_sum: e.bets_sum || 0,
                    top_multiplier_sum: e.top_multiplier_sum || 0,
                    spin_count: e.spin_count
                }, this.currentChallenge.isSynchronized.value = !0
            })
        }

        _processChallengeJoinData(e) {
            if (e) {
                H.updateUserProperty("Challenge Code", this.currentChallenge.challengeCode, !0), H.sendDataToAmplitude(J.CHALLENGE_JOINED);
                const t = this._challengesList.find(i => i.id === e.room_id);
                t && ge(() => {
                    t.player_active = !0, this.loadingState.value = {
                        ...this.loadingState.value,
                        [S.GET_LEADERBOARD]: t.status !== P.PLANNED
                    }, this.currentChallenge.isLimitsActive.value = t.spin_limit > 0, this.currentChallenge.spinsRemainig.value = t.spin_limit || 0, this.currentChallenge.challengeData.value = {...t}, this.currentChallenge.playerData.value = {
                        rank: null,
                        code: e.code,
                        max_multiplier: 0,
                        bets_sum: 0,
                        top_multiplier_sum: 0
                    }, this.currentChallenge.leaderboard.value = [], this.service.getPlayerCode(), this._scheduleChallengeLeaderboardUpdate(3e3), this._scheduleChallengeStateSwitch()
                })
            }
        }

        _processChallengeLeaderboardData(e) {
            e !== null && ge(() => {
                var i, s;
                const t = (i = e.challenge_code) == null ? void 0 : i.toUpperCase();
                if (t && ((s = this.currentChallenge) == null ? void 0 : s.challengeCode) !== t && (H.updateUserProperty("Challenge Code", t, !0), this.currentChallenge.challengeCode = t), this.currentChallenge.leaderboard.value = e.top, this.currentChallenge.totalLeaderboardPages.value = Math.ceil(e.total_participants_count / Qt), this.currentChallenge.playerData.value = e.current_player, this.currentChallenge.isSynchronized.value = !!e.challenge_synchronized, this.currentChallenge.isLimitsActive.peek()) {
                    const a = this.currentChallenge.challengeData.peek().spin_limit - e.current_player.spin_count;
                    a < this.currentChallenge.spinsRemainig.peek() && (this.currentChallenge.spinsRemainig.value = Math.max(a, 0))
                }
                if (this.currentChallenge.isChallengeFinished()) {
                    const a = {...this.currentChallenge.challengeData.value};
                    a.status = P.FINISHED, this.currentChallenge.challengeData.value = a, this.isLobbyEnabled && this.finishChallenge()
                } else this._scheduleChallengeStateSwitch(), this._scheduleChallengeLeaderboardUpdate()
            })
        }

        _processChallengeCompleteData(e) {
            e && (H.sendDataToAmplitude(J.CHALLENGE_FINISHED), H.updateUserProperty("Challenge Code", "None", !0), ge(() => {
                this.localStorage.clearCurrentChallenge(), this.currentChallenge.challengeData.value = null, this.currentChallenge.playerData.value = null, this.currentChallenge.leaderboard.value = [], this.currentChallenge.challengeCode = null, this.currentChallenge.isLimitsActive.value = !1, this.currentChallenge.spinsRemainig.value = 0, this._scheduleChallengesListUpdate(3e3)
            }))
        }

        _processPlayerCodeData(e) {
            e && (this.playerCode.value = e)
        }

        _scheduleChallengeStateSwitch() {
            var t, i;
            const e = (i = (t = this.currentChallenge) == null ? void 0 : t.challengeData) == null ? void 0 : i.value;
            if (e && e.status !== P.FINISHED) {
                let s, a;
                e.status === P.PLANNED ? (s = e.start_at - Date.now(), a = P.ONGOING) : (s = e.finish_at - Date.now(), a = P.FINISHED), this._challengeSwitchStateTimeoutID !== void 0 && clearTimeout(this._challengeSwitchStateTimeoutID), s && a && (this._challengeSwitchStateTimeoutID = setTimeout(() => {
                    this._changeChallengeStatus(a)
                }, s > 2147483647 ? 2147483647 : s))
            }
        }

        _changeChallengeStatus(e) {
            var i, s;
            const t = (s = (i = this.currentChallenge) == null ? void 0 : i.challengeData) == null ? void 0 : s.value;
            t && t.status !== e && (t.status = e, this.currentChallenge.challengeData.value = {...t}, e === P.ONGOING && this.updateChallengeLeaderboardData()), Promise.resolve(() => this._scheduleChallengeStateSwitch())
        }

        _onResize() {
            this.isPortrait.value = window.innerHeight > window.innerWidth, this._checkLeftHandMode(), ti()
        }

        _filterChallengeAvailabilityByBrand(e) {
            return e = e.filter(t => {
                var i, s, a, r;
                return !(t != null && t.brands) || (t == null ? void 0 : t.brands.length) === 0 || ((r = t == null ? void 0 : t.brands) == null ? void 0 : r.includes((a = (s = (i = window.__OPTIONS__) == null ? void 0 : i.ui) == null ? void 0 : s.brand) == null ? void 0 : a.name))
            }), e
        }
    }

    class sn {
        constructor() {
            m(this, "challengeData", w(null));
            m(this, "leaderboard", w([]));
            m(this, "totalLeaderboardPages", w(0));
            m(this, "leaderboardPage", w(1));
            m(this, "playerData", w(null));
            m(this, "challengeCode", null);
            m(this, "isSynchronized", w(!1));
            m(this, "isLimitsActive", w(!1));
            m(this, "spinsRemainig", w(0));
            m(this, "isRulesPopupShown", w(!1))
        }

        isChallengeFinished() {
            var e, t;
            return ((t = (e = this.challengeData) == null ? void 0 : e.peek()) == null ? void 0 : t.status) !== P.FINISHED ? !1 : this.isSynchronized.peek()
        }

        isChallengeActive() {
            var e, t, i, s;
            return !(((t = (e = this.challengeData) == null ? void 0 : e.peek()) == null ? void 0 : t.status) !== P.ONGOING || !((s = (i = this.challengeData) == null ? void 0 : i.peek()) != null && s.player_active))
        }
    }

    const f = new nn(new qi, new Qi);
    var an = 0;

    function u(n, e, t, i, s, a) {
        var r, o, l = {};
        for (o in e) o == "ref" ? r = e[o] : l[o] = e[o];
        var h = {
            type: n,
            props: l,
            key: t,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: --an,
            __i: -1,
            __u: 0,
            __source: s,
            __self: a
        };
        if (typeof n == "function" && (r = n.defaultProps)) for (o in r) l[o] === void 0 && (l[o] = r[o]);
        return b.vnode && b.vnode(h), h
    }

    class rn extends k {
        render(e, t, i) {
            const s = f.isLeftHandedUI.value;
            let a = "right", r = "active";
            return f.isMobile.value && (f.isPortrait.value || !s) && (a = "left"), f.isLobbyEnabled && !f.isWidgetEnabled.value && (r = "inactive"), u("div", {
                className: `brush-button yellow-panel ${a} ${r}`,
                onClick: e.onClick,
                children: u("img", {src: Wi, class: "brush-button-content"})
            })
        }
    }

    function ue(n) {
        return {isLoading: !!f.loadingState.value[n], error: f.errorState.value[n] || ""}
    }

    class on extends k {
        constructor() {
            super();
            m(this, "USER_TOKEN_SYMBOLS_COUNT", 5);
            m(this, "state", {isOpened: !1});
            m(this, "input1", ee());
            m(this, "input2", ee());
            m(this, "input3", ee());
            m(this, "input4", ee());
            m(this, "input5", ee());
            m(this, "joinButton", ee());
            m(this, "modalBody", ee());
            m(this, "token1", w(""));
            m(this, "token2", w(""));
            m(this, "token3", w(""));
            m(this, "token4", w(""));
            m(this, "token5", w(""));
            m(this, "fullToken", Wt(() => this.token1.value.trim() + this.token2.value.trim() + this.token3.value.trim() + this.token4.value.trim() + this.token5.value.trim()));
            this.handleKeyPress = this.handleKeyPress.bind(this), this.handleClick = this.handleClick.bind(this), this.handlePaste = this.handlePaste.bind(this), this.renderInputGroup = this.renderInputGroup.bind(this)
        }

        componentDidMount() {
            this.effectToken = re(() => {
                var t, i, s;
                if (this.fullToken.value.length < this.USER_TOKEN_SYMBOLS_COUNT) for (let a = 0; a < this.USER_TOKEN_SYMBOLS_COUNT; a++) {
                    const r = this[`token${a + 1}`].value, o = (t = this[`input${a + 1}`]) == null ? void 0 : t.current;
                    if ((r == null ? void 0 : r.length) === 0) {
                        o == null || o.focus();
                        break
                    }
                } else (s = (i = this.joinButton) == null ? void 0 : i.current) == null || s.focus()
            })
        }

        componentWillUnmount() {
            this.effectToken()
        }

        joinChallenge() {
            const t = this.fullToken.peek();
            t.length === this.USER_TOKEN_SYMBOLS_COUNT && f.joinToChallenge(t.toLocaleUpperCase())
        }

        openPopup() {
            var t;
            if (f.isLobbyEnabled) f.openLobby("challenge"); else {
                document.addEventListener("keydown", this.handleKeyPress), document.addEventListener("pointerdown", this.handleClick), f._unscheduleChallengesListUpdate(), this.setState({isOpened: !0});
                const i = f.currentChallenge.challengeData.value,
                    s = !!(i != null && i.auto_join) && !!(i != null && i.join_code),
                    a = (i == null ? void 0 : i.status) === P.FINISHED;
                s && !a && ((t = i == null ? void 0 : i.join_code) == null || t.split("").forEach((r, o) => this[`token${o + 1}`].value = r))
            }
            H.sendDataToAmplitude(J.JOIN_POPUP_OPENED)
        }

        closePopup() {
            document.removeEventListener("keydown", this.handleKeyPress), document.removeEventListener("pointerdown", this.handleClick);
            const {isLoading: t} = ue(S.JOIN_CHALLENGE);
            t || f.updateChallengesListData(), this.setState({isOpened: !1}), H.sendDataToAmplitude(J.JOIN_POPUP_CLOSED)
        }

        handleKeyPress(t, i) {
            const {key: s, target: a} = t;
            switch (s) {
                case"Escape":
                case" ":
                    this.closePopup();
                    break;
                case"Delete":
                    a.value && this.clearInputAndToken(i);
                    break;
                case"Backspace":
                    t.preventDefault(), a.value ? this.clearInputAndToken(i) : i > 1 && this.focusPreviousInput(i);
                    break
            }
        }

        handleClick(t) {
            t.composedPath().includes(this.modalBody.current) || this.closePopup()
        }

        handlePaste(t) {
            t.preventDefault(), f.errorState.value[S.JOIN_CHALLENGE] && (f.errorState.value = {
                ...f.errorState.value,
                [S.JOIN_CHALLENGE]: ""
            });
            const i = t.clipboardData.getData("text").replaceAll(" ", "");
            for (let s = 0; s < this.USER_TOKEN_SYMBOLS_COUNT; s++) {
                const a = i[s];
                if (!a) break;
                const r = s + 1;
                this.setValueInputAndToken(r, a)
            }
        }

        clearInputAndToken(t) {
            this[`token${t}`].value = "", f.errorState.value[S.JOIN_CHALLENGE] && (f.errorState.value = {
                ...f.errorState.value,
                [S.JOIN_CHALLENGE]: ""
            })
        }

        setValueInputAndToken(t, i) {
            this[`token${t}`].value = i
        }

        focusPreviousInput(t) {
            t > 1 && this[`input${t - 1}`].current.focus()
        }

        renderInputGroup(t) {
            const i = [];
            for (let s = 0; s < this.USER_TOKEN_SYMBOLS_COUNT; s++) {
                const a = s + 1;
                i.push(u("input", {
                    class: `challenge-code-input ${t ? "hasError" : ""}`,
                    ref: this[`input${a}`],
                    value: this[`token${a}`].value,
                    onInput: r => {
                        this[`token${a}`].value = r.currentTarget.value, f.errorState.value[S.JOIN_CHALLENGE] && (f.errorState.value = {
                            ...f.errorState.value,
                            [S.JOIN_CHALLENGE]: ""
                        })
                    },
                    type: "text",
                    autocomplete: "off",
                    maxlength: 1,
                    onKeyDown: r => this.handleKeyPress(r, a),
                    onPaste: this.handlePaste
                }))
            }
            return u("div", {class: "input-group", children: i})
        }

        render(t, i, s) {
            const {isLoading: a, error: r} = ue(S.JOIN_CHALLENGE);
            return u(N, {
                children: this.state.isOpened ? u("div", {
                    class: "modal",
                    children: u("div", {
                        class: "modal-opened join-popup",
                        ref: this.modalBody,
                        children: u("div", {
                            class: "modal-content",
                            children: [u("div", {class: "modal-highlight"}), u("div", {
                                class: "close",
                                onClick: () => this.closePopup(),
                                children: "×"
                            }), u("p", {
                                class: "challenge-title",
                                children: L("joinPopup.title")
                            }), this.renderInputGroup(r), r && u("span", {
                                class: "error-message join-validation",
                                children: r
                            }), u("button", {
                                ref: this.joinButton,
                                onClick: () => this.joinChallenge(),
                                class: `close-btn ${this.fullToken.value.length === 5 ? "" : "disabled"} ${a ? "loading" : ""}`,
                                children: a ? u("div", {class: "dot-flashing"}) : L("joinPopup.button")
                            })]
                        })
                    })
                }) : u(rn, {onClick: () => this.openPopup()})
            })
        }
    }

    // const ii = "https://brush.bgaming-network.com/assets/logo-mobile.png";
    const ii = "assets/logo-mobile.png";

    class He extends k {
        constructor() {
            super();
            m(this, "state", {isFinished: !1, full: "00:00:00", hours: "00", minutes: "00", seconds: "00"});
            m(this, "_timerInterval")
        }

        componentDidMount() {
            this.props.finished ? this.setState({isFinished: !0}) : (this._timerInterval = setInterval(() => this.updateTimer(), 1e3), this.updateTimer())
        }

        componentWillUnmount() {
            this._timerInterval !== void 0 && clearInterval(this._timerInterval)
        }

        componentDidUpdate() {
        }

        updateTimer() {
            const t = f.currentChallenge.challengeData.value, i = t.status === P.ONGOING ? t.finish_at : t.start_at,
                s = this.getTimeRemaining(i);
            t.status === P.FINISHED && s.total < 1e3 && this._timerInterval !== void 0 && clearInterval(this._timerInterval);
            const a = {
                hours: s.hours.toString().padStart(2, "0"),
                minutes: s.minutes.toString().padStart(2, "0"),
                seconds: s.seconds.toString().padStart(2, "0")
            };
            this.setState({...a, full: a.hours + ":" + a.minutes + ":" + a.seconds})
        }

        getTimeRemaining(t) {
            const i = t ? t - Date.now() : 0;
            if (i < 1e3) return {total: 0, hours: 0, minutes: 0, seconds: 0};
            const s = Math.floor(i / 1e3 % 60), a = Math.floor(i / 1e3 / 60 % 60), r = Math.floor(i / (1e3 * 60 * 60));
            return {total: i, hours: r, minutes: a, seconds: s}
        }

        renderOpened(t, i) {
            return u("div", {
                class: "panel",
                id: "challenge-timer",
                children: this.state.isFinished ? u("span", {
                    class: "challenge-timer-text",
                    children: E.format(L("timer.finish", {context: "open"}), "uppercase")
                }) : u(N, {
                    children: [u("div", {
                        class: "challenge-timer-header",
                        children: t.isOpened ? i == null ? void 0 : i.toUpperCase() : i
                    }), u("div", {
                        class: "digits-container",
                        children: [u("span", {
                            class: "challenge-timer-digit",
                            children: this.state.hours[0]
                        }), u("span", {
                            class: "challenge-timer-digit",
                            children: this.state.hours[1]
                        }), this.state.hours.length === 3 && u("span", {
                            class: "challenge-timer-digit",
                            children: this.state.hours[2]
                        }), u("span", {
                            class: "challenge-timer-separator",
                            children: ":"
                        }), u("span", {
                            class: "challenge-timer-digit",
                            children: this.state.minutes[0]
                        }), u("span", {
                            class: "challenge-timer-digit",
                            children: this.state.minutes[1]
                        }), u("span", {
                            class: "challenge-timer-separator",
                            children: ":"
                        }), u("span", {
                            class: "challenge-timer-digit",
                            children: this.state.seconds[0]
                        }), u("span", {class: "challenge-timer-digit", children: this.state.seconds[1]})]
                    })]
                })
            })
        }

        renderClosed(t, i) {
            return f.isMobile.value ? i ? u("div", {children: this.state.full}) : this.state.isFinished ? u("div", {children: L("timer.finish", {context: "close"})}) : u(N, {
                children: [u("div", {
                    class: "flex-between",
                    children: [u("div", {
                        class: "logo-mobile",
                        children: u("img", {src: ii})
                    }), u("div", {children: L("timer.start")})]
                }), u("div", {children: this.state.full})]
            }) : u("div", {children: this.state.isFinished ? L("timer.finish", {context: "close"}) : `${t} ${this.state.full}`})
        }

        render(t, i, s) {
            const r = f.currentChallenge.challengeData.value.status === P.ONGOING,
                o = L(r ? "timer.end" : "timer.start");
            return u(N, {children: t.isOpened ? this.renderOpened(t, o) : this.renderClosed(o, r)})
        }
    }

    // const ln = "https://brush.bgaming-network.com/assets/logo-dot.png",
    //     un = "https://brush.bgaming-network.com/assets/eye.png",
    //     hn = "https://brush.bgaming-network.com/assets/eye-slash.png";
    const ln = "assets/logo-dot.png",
        un = "assets/eye.png",
        hn = "assets/eye-slash.png";
    const te = class te extends k {
            constructor() {
                super(), this.toggleCode = this.toggleCode.bind(this)
            }

            toggleCode() {
                te.isHidden.value = !te.isHidden.peek()
            }

            render(e, t, i) {
                var r, o;
                const s = (o = (r = f == null ? void 0 : f.currentChallenge) == null ? void 0 : r.playerData) == null ? void 0 : o.value,
                    a = te.isHidden.value ? (s == null ? void 0 : s.code.slice(0, -5)) + Zt : s == null ? void 0 : s.code;
                return u("div", {
                    class: "current-player-code",
                    onClick: this.toggleCode,
                    children: [a, u("img", {src: te.isHidden.value ? un : hn})]
                })
            }
        };
    m(te, "isHidden", w(!0));
    let Se = te;
    const Ge = (n, e) => n === le.MAX_MULTIPLIER ? "×" + parseFloat((e == null ? void 0 : e.max_multiplier) || 0).toLocaleString(void 0, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1
    }) : n === le.BETS_SUM ? parseFloat((e == null ? void 0 : e.bets_sum) || 0).toLocaleString(void 0, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    }) : n === le.TOP_MULTIPLIER_SUM ? "×" + parseFloat((e == null ? void 0 : e.top_multiplier_sum) || 0).toLocaleString(void 0, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    }) : "";

    class Be extends k {
        constructor() {
            super(), this.renderOpened = this.renderOpened.bind(this), this.renderClosed = this.renderClosed.bind(this)
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        renderOpened(e, t, i = "bottom", s = null) {
            return u(N, {
                children: [i === "bottom" ? u("tr", {
                    children: u("th", {
                        colspan: 3,
                        class: "my-results-header"
                    })
                }) : null, u("tr", {
                    ref: s,
                    children: [u("td", {
                        class: "challenge-table-rank active",
                        children: e || "..."
                    }), u("td", {
                        class: "challenge-table-token active",
                        children: u(Se, {})
                    }), u("td", {class: "challenge-table-multi active", children: t || ""})]
                }), i === "top" ? u("tr", {children: u("th", {colspan: 3, class: "my-results-header"})}) : null]
            })
        }

        renderClosed(e, t) {
            return f.isMobile.value ? u("div", {
                class: "modal-closed-title",
                children: [u("img", {class: "logo-mobile", src: ii}), " ", u("img", {
                    class: "logo-dot",
                    src: ln
                }), u("p", {children: ["#", e || "..."]})]
            }) : u("div", {
                class: "modal-closed-title",
                children: [u("p", {children: ["#", e || "..."]}), u("p", {children: t || ""})]
            })
        }

        render(e, t, i) {
            var o, l;
            const s = f.currentChallenge, a = (o = s.challengeData) == null ? void 0 : o.value,
                r = (l = s.playerData) == null ? void 0 : l.value;
            return a.status === P.PLANNED || !r ? null : u(N, {children: e.isOpened ? this.renderOpened(r.rank, Ge(a.challenge_type, r), e.position, e.refEl) : this.renderClosed(r.rank, Ge(a.challenge_type, r))})
        }
    }

    const ze = (n, e) => Array.from({length: e - n + 1}, (t, i) => n + i), cn = (n, e, t) => {
        let i = [];
        return n < e * 2 + 6 ? i = ze(1, n) : t < e * 2 + 3 ? (i = ze(1, e * 2 + 3), i.push(0), i.push(n)) : t > n - e * 2 - 2 ? (i.push(1), i.push(0), i = i.concat(ze(n - e * 2 - 2, n))) : (i.push(1), i.push(0), i = i.concat(ze(t - e, t + e)), i.push(0), i.push(n)), i
    };

    class dn extends k {
        render(e, t, i) {
            const s = e.totalPages, a = e.currentPage, r = e.onPageChange;
            return s && s > 1 ? u("div", {
                class: "pagination",
                children: cn(s, 1, a).map(o => u("div", {
                    class: `pagination-item ${o === a ? "active" : ""}`,
                    children: o === 0 ? u("p", {children: "..."}) : u("button", {
                        class: "pagination-button",
                        onClick: () => r(o),
                        children: o
                    })
                }))
            }) : null
        }
    }

    const pn = n => n === le.MAX_MULTIPLIER ? "result" : n === le.BETS_SUM ? "result_bets" : n === le.TOP_MULTIPLIER_SUM ? "result_mult" : "";

    class ni extends k {
        constructor() {
            super();
            m(this, "state", {currentPosition: null});
            this.handleScroll = this.handleScroll.bind(this), this.handleLeaderboardPageChange = this.handleLeaderboardPageChange.bind(this)
        }

        componentDidMount() {
            this.tableRef && this.tableRef.addEventListener("scroll", this.handleScroll), this.handleScroll()
        }

        componentWillUnmount() {
            this.tableRef && this.tableRef.removeEventListener("scroll", this.handleScroll)
        }

        componentDidUpdate(t) {
            JSON.stringify(t.leaderboard) !== JSON.stringify(this.props.leaderboard) && this.handleScroll()
        }

        handleScroll() {
            if (this.tableRef && this.itemRef) {
                const t = this.tableRef.getBoundingClientRect(), i = this.itemRef.getBoundingClientRect();
                i.bottom >= t.bottom && this.state.currentPosition !== "bottom" ? this.setState({currentPosition: "bottom"}) : i.top <= t.top && this.state.currentPosition !== "top" ? this.setState({currentPosition: "top"}) : i.top > t.top && i.bottom < t.bottom && this.state.currentPosition !== "middle" && this.setState({currentPosition: "middle"})
            } else this.state.currentPosition && this.setState({currentPosition: null})
        }

        handleLeaderboardPageChange(t) {
            const i = f.currentChallenge;
            i.leaderboardPage.value !== t && (i.leaderboardPage.value = t, f.updateChallengeLeaderboardData())
        }

        render(t, i, s) {
            var y, v, x, C, A, O, R, $, I, z, U, K;
            const a = f.currentChallenge, r = (y = a == null ? void 0 : a.challengeData) == null ? void 0 : y.value,
                o = (v = a == null ? void 0 : a.playerData) == null ? void 0 : v.value,
                l = a == null ? void 0 : a.totalLeaderboardPages.value,
                h = (x = a == null ? void 0 : a.leaderboardPage) == null ? void 0 : x.value;
            if (!r || (r == null ? void 0 : r.status) === P.PLANNED) return null;
            const d = ((C = t.leaderboard) == null ? void 0 : C.length) > 0 && (o == null ? void 0 : o.rank) && (o == null ? void 0 : o.rank) < ((O = (A = t.leaderboard) == null ? void 0 : A.at(0)) == null ? void 0 : O.rank),
                c = !(o != null && o.rank) || !((R = t.leaderboard) != null && R.length) || (o == null ? void 0 : o.rank) > ((I = ($ = t.leaderboard) == null ? void 0 : $.at(-1)) == null ? void 0 : I.rank), {
                    isLoading: p,
                    error: g
                } = ue(S.GET_LEADERBOARD), _ = u("tr", {
                    className: `sticky-active-table-row ${this.state.currentPosition}`,
                    children: [u("td", {
                        className: "challenge-table-rank active",
                        children: (o == null ? void 0 : o.rank) || "..."
                    }), u("td", {
                        className: "challenge-table-token active",
                        children: u(Se, {})
                    }), u("td", {className: "challenge-table-multi active", children: Ge(r.challenge_type, o)})]
                });
            return u("div", {
                ref: F => this.tableRef = F,
                class: `panel ${!p && !g ? "leaderboard" : ""}`,
                children: [p && u("div", {
                    class: "leaderboard-loading-container",
                    children: [u("p", {
                        class: "leaderboard-loading-message",
                        children: E.format(L("popupTable.loadingText"), "uppercase")
                    }), u("div", {class: "dot-flashing"})]
                }), g && u("span", {class: "error-message", children: g}), !p && !g && u(N, {
                    children: [u("table", {
                        class: "leaderboard",
                        children: [u("caption", {children: E.format(L("popupTable.title", {context: "leaderboard"}), "uppercase")}), u("thead", {
                            children: u("tr", {
                                children: [u("th", {
                                    style: "text-align: center",
                                    children: E.format(L("popupTable.column", {context: "rank"}), "uppercase")
                                }), u("th", {
                                    style: "text-align: left",
                                    children: E.format(L("popupTable.column", {context: "id"}), "uppercase")
                                }), u("th", {
                                    style: "text-align: right",
                                    children: E.format(L("popupTable.column", {context: pn(r.challenge_type)}), "uppercase")
                                })]
                            })
                        }), u("tbody", {
                            id: "challenge-leaderboard",
                            children: [!p && !g && d ? u(N, {
                                children: [_, u(Be, {
                                    refEl: F => this.itemRef = F,
                                    isOpened: !0,
                                    position: "top"
                                })]
                            }) : null, t.leaderboard.map(F => {
                                const Q = F.rank === (o == null ? void 0 : o.rank);
                                return u(N, {
                                    children: [Q && this.state.currentPosition === "top" ? _ : null, u("tr", {
                                        ref: lt => Q ? this.itemRef = lt : null,
                                        children: [u("td", {
                                            className: "challenge-table-rank" + (Q ? " active" : ""),
                                            children: F.rank
                                        }), u("td", {
                                            className: "challenge-table-token" + (Q ? " active" : ""),
                                            children: Q ? u(Se, {}) : F.code
                                        }), u("td", {
                                            className: "challenge-table-multi" + (Q ? " active" : ""),
                                            children: Ge(r.challenge_type, F)
                                        })]
                                    }), Q && this.state.currentPosition === "bottom" ? _ : null]
                                })
                            }), !p && !g && c ? u(N, {
                                children: [u(Be, {
                                    refEl: F => this.itemRef = F,
                                    isOpened: !0,
                                    position: (z = t.leaderboard) != null && z.length ? "bottom" : "hidden"
                                }), (U = t.leaderboard) != null && U.length ? _ : null]
                            }) : null]
                        })]
                    }), ((K = t.leaderboard) == null ? void 0 : K.length) > 0 ? u(dn, {
                        totalPages: l,
                        currentPage: h,
                        onPageChange: this.handleLeaderboardPageChange
                    }) : null]
                })]
            })
        }
    }

    class si extends k {
        constructor() {
            super();
            m(this, "state", {isOpened: !1})
        }

        componentDidMount() {
            this.props.isOpened !== void 0 && this.setState({isOpened: this.props.isOpened})
        }

        componentWillUnmount() {
        }

        toggleRules() {
            this.setState({isOpened: !this.state.isOpened})
        }

        render(t, i, s) {
            var r, o, l;
            const a = (o = (r = f == null ? void 0 : f.currentChallenge) == null ? void 0 : r.challengeData) == null ? void 0 : o.value;
            return u(N, {
                children: [u("div", {
                    class: "view-rules-header",
                    onClick: () => this.toggleRules(),
                    children: L("rules.button", {context: this.state.isOpened ? "hide" : "view"})
                }), this.state.isOpened && u("div", {
                    class: "panel",
                    children: [u("div", {
                        class: "challenge-descriptioncaption",
                        children: E.format(L("rules.title"), "uppercase")
                    }), u("ul", {
                        class: "challenge-description",
                        children: (l = a == null ? void 0 : a.rules) == null ? void 0 : l.map(h => u("li", {children: h}, h))
                    })]
                })]
            })
        }
    }

    // const fn = "https://brush.bgaming-network.com/assets/logo.png";
    const fn = "assets/logo.png";

    class he extends k {
        render(e, t, i) {
            return u("div", {class: "brush-logo", children: u("img", {src: fn})})
        }
    }

    class ai extends k {
        constructor() {
            super();
            m(this, "state", {isReached: !1, remaining: "0000"})
        }

        componentDidMount() {
            this.props.isReached && this.setState({isReached: !0})
        }

        componentWillUnmount() {
        }

        componentDidUpdate() {
        }

        renderOpened(t) {
            const s = f.currentChallenge.spinsRemainig.value.toString().padStart(4, "0"), {
                isLoading: a,
                error: r
            } = ue(S.GET_LEADERBOARD);
            return u(N, {
                children: [u("div", {
                    class: "panel",
                    children: [u("div", {
                        class: "challenge-timer-header",
                        children: E.format(L("limits.spinsLeft"), "uppercase")
                    }), u("div", {
                        class: "digits-container",
                        children: a || r ? u("div", {class: "dot-flashing"}) : u(N, {
                            children: [u("span", {
                                class: "challenge-timer-digit",
                                children: s[0]
                            }), u("span", {
                                class: "challenge-timer-digit",
                                children: s[1]
                            }), u("span", {
                                class: "challenge-timer-digit",
                                children: s[2]
                            }), u("span", {class: "challenge-timer-digit", children: s[3]})]
                        })
                    })]
                }), u("div", {class: "h-separator"})]
            })
        }

        renderClosed(t) {
            const i = f.currentChallenge;
            let s = i.spinsRemainig.value.toString();
            const {isLoading: a, error: r} = ue(S.GET_LEADERBOARD);
            return (a || r) && (s = "..."), f.isMobile.value ? s += " " + L("limits.spins", {count: i.spinsRemainig.value}) : s = E.format(L("limits.spinsLeft"), "uppercase") + ": " + s, u("div", {
                class: "challenge-timer-header",
                children: s
            })
        }

        render(t, i, s) {
            var r;
            const a = f.currentChallenge;
            return (r = a == null ? void 0 : a.isLimitsActive) != null && r.value ? u(N, {children: t.isOpened ? this.renderOpened(t) : this.renderClosed(t)}) : null
        }
    }

    class gn extends k {
        constructor() {
            super()
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        render(e, t, i) {
            var a, r;
            const s = f.currentChallenge;
            return !(s != null && s.isChallengeActive()) || !((a = s == null ? void 0 : s.isLimitsActive) != null && a.value) || ((r = s == null ? void 0 : s.spinsRemainig) == null ? void 0 : r.value) > 0 ? null : u("div", {
                class: "panel spins-limit-reached",
                children: u("span", {children: E.format(L("limits.spinsLimitReachedMessage", {context: "open"}), "uppercase")})
            })
        }
    }

    class mn extends k {
        constructor() {
            super();
            m(this, "state", {isOpened: !0, isTimerVisible: !0});
            m(this, "switchIntervalID")
        }

        componentDidMount() {
            var i;
            (i = f.currentChallenge) != null && i.challengeCode && H.updateUserProperty("Challenge Code", f.currentChallenge.challengeCode, !0), this.props.isOpened !== void 0 && this.setState({isOpened: this.props.isOpened}), this.onGlobalMinimize = re(() => {
                f.globalMinimizePopups.value && this.state.isOpened && this.setState({isOpened: !1})
            }), f.isLobbyEnabled && this.setState({isOpened: !1});
            const t = f.currentChallenge.challengeData.value;
            f.currentChallenge.isLimitsActive.value && t.status === P.ONGOING && (this.switchIntervalID = setInterval(() => {
                this.setState({isTimerVisible: !this.state.isTimerVisible})
            }, 5e3))
        }

        componentWillUnmount() {
            this.onGlobalMinimize(), this.switchIntervalID !== void 0 && clearInterval(this.switchIntervalID)
        }

        openPopup() {
            var t;
            if (f.isLobbyEnabled) {
                const i = f.currentChallenge;
                f.openLobby("challenge", (t = i.challengeData) == null ? void 0 : t.value.id)
            } else this.setState({isOpened: !0}), f.globalMinimizePopups.value = !1;
            H.sendDataToAmplitude(J.CHALLENGE_INFO_OPENED)
        }

        closePopup() {
            this.setState({isOpened: !1}), H.sendDataToAmplitude(J.CHALLENGE_INFO_CLOSED)
        }

        render(t, i, s) {
            var _, y, v;
            const a = f.isLeftHandedUI.value, r = f.currentChallenge,
                o = (y = (_ = r.challengeData) == null ? void 0 : _.value) == null ? void 0 : y.name,
                l = (v = r.leaderboard) == null ? void 0 : v.value;
            let h = "right", d = "right", c = "active";
            f.isMobile.value && (f.isPortrait.value || !a) && (d = "left"), f.isLobbyEnabled && !f.isWidgetEnabled.value && (c = "inactive");
            const p = `modal-closed ${d} ${c}`, g = `modal-content ${d}`;
            return u(N, {
                children: this.state.isOpened ? u("div", {
                    className: `modal-opened ${h}`,
                    children: [u(he, {}), u("div", {
                        class: "close",
                        onClick: () => this.closePopup(),
                        children: "×"
                    }), u("div", {
                        className: `modal-content ${h}`,
                        children: [u("div", {class: "modal-highlight"}), u("p", {
                            class: "challenge-title",
                            children: o
                        }), u(si, {}), u("div", {
                            class: "panels-in-row",
                            children: [u(ai, {isOpened: this.state.isOpened}), u(He, {isOpened: this.state.isOpened})]
                        }), u(gn, {}), u(ni, {leaderboard: l})]
                    })]
                }) : u("div", {
                    className: p,
                    children: [f.isMobile.value ? null : u(he, {}), u("div", {
                        className: g,
                        onClick: () => this.openPopup(),
                        children: [u("div", {class: "modal-highlight"}), u(Be, {isOpened: this.state.isOpened}), this.state.isTimerVisible ? u(He, {isOpened: this.state.isOpened}) : u(ai, {isOpened: !1})]
                    })]
                })
            })
        }
    }

    class _n extends k {
        constructor() {
            super()
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        render(e, t, i) {
            return u("div", {
                class: "panel calculating",
                children: [u("span", {children: E.format(L("finishPopup.calculatingResult", {context: "open"}), "uppercase")}), u("div", {class: "dot-flashing"})]
            })
        }
    }

    // const bn = "https://brush.bgaming-network.com/assets/copy.png";
    const bn = "assets/copy.png";

    class ri extends k {
        render(e, t, i) {
            const s = f.playerCode.value, a = () => {
                const r = document.createElement("textarea");
                r.value = s, document.body.appendChild(r), r.select();
                try {
                    document.execCommand("copy"), f.showCopyPlayerCodeToast.value = !0, this.closeToastTimeoutID || (this.closeToastTimeoutID = setTimeout(() => {
                        f.showCopyPlayerCodeToast.value = !1, this.closeToastTimeoutID = null
                    }, 5e3))
                } catch (o) {
                    console.warn("error copy code: ", o)
                } finally {
                    document.body.removeChild(r), r.remove()
                }
            };
            return u("div", {
                class: "panel",
                children: [u("div", {
                    class: "challenge-descriptioncaption",
                    children: E.format(L("playerCode.title"), "uppercase")
                }), u("div", {
                    class: "challenge-description",
                    children: L("playerCode.message")
                }), s ? u("div", {
                    class: "copy-player-code",
                    onClick: () => a(),
                    children: [u("span", {children: s.slice(0, -5) + Zt}), u("img", {src: bn})]
                }) : u("div", {class: "copy-player-code", children: u("div", {class: "dot-flashing"})})]
            })
        }
    }

    class vn extends k {
        constructor() {
            super();
            m(this, "state", {isOpened: !0})
        }

        componentDidMount() {
            this.props.isOpened !== void 0 && this.setState({isOpened: this.props.isOpened}), f.isLobbyEnabled && this.setState({isOpened: !1}), this.onGlobalMinimize = re(() => {
                f.globalMinimizePopups.value && this.state.isOpened && this.setState({isOpened: !1})
            })
        }

        componentWillUnmount() {
            this.onGlobalMinimize()
        }

        finishChallenge() {
            H.sendDataToAmplitude(J.CHALLENGE_FINISH_CLICKED), f.finishChallenge()
        }

        openPopup() {
            var t;
            if (f.isLobbyEnabled) {
                const i = f.currentChallenge;
                f.openLobby("challenge", (t = i.challengeData) == null ? void 0 : t.value.id)
            } else this.setState({isOpened: !0}), f.globalMinimizePopups.value = !1;
            H.sendDataToAmplitude(J.CHALLENGE_INFO_OPENED)
        }

        closePopup() {
            this.setState({isOpened: !1}), H.sendDataToAmplitude(J.CHALLENGE_INFO_CLOSED)
        }

        render(t, i, s) {
            var C, A, O;
            const a = f.isLeftHandedUI.value, r = f.currentChallenge,
                o = (C = r.challengeData) == null ? void 0 : C.value,
                l = (A = r.isSynchronized) == null ? void 0 : A.value,
                h = (O = r.leaderboard) == null ? void 0 : O.value, d = f._hasLastFinishedChallenge;
            let c = "right", p = "right", g = "active";
            f.isMobile.value && (f.isPortrait.value || !a) && (p = "left"), f.isLobbyEnabled && !f.isWidgetEnabled.value && (g = "inactive");
            const _ = `modal-closed ${p} ${g}`, y = `modal-content ${p}`, {
                isLoading: v,
                error: x
            } = ue(S.FINISH_CHALLENGE);
            return u(N, {
                children: this.state.isOpened ? u("div", {
                    className: `modal-opened ${c}`,
                    children: [u(he, {}), u("div", {
                        class: "close",
                        onClick: () => this.closePopup(),
                        children: "×"
                    }), u("div", {
                        className: `modal-content ${c}`,
                        children: [u("div", {class: "modal-highlight"}), u("p", {
                            class: "challenge-title",
                            children: o == null ? void 0 : o.name
                        }), u(si, {isOpened: !1}), l ? u(He, {
                            finished: !0,
                            isOpened: this.state.isOpened
                        }) : u(_n, {}), u(ni, {leaderboard: h}), u(ri, {}), l && !d ? u("button", {
                            onClick: () => this.finishChallenge(),
                            class: `close-btn ${v ? "loading" : ""}`,
                            children: v ? u("div", {class: "dot-flashing"}) : L("finishPopup.button")
                        }) : null, x && u("span", {class: "error-message finish-validation", children: x})]
                    })]
                }) : u("div", {
                    className: _,
                    children: [u(he, {}), u("div", {
                        className: y,
                        onClick: () => this.openPopup(),
                        children: [u("div", {class: "modal-highlight"}), u(Be, {isOpened: this.state.isOpened}), l ? u(He, {
                            finished: !0,
                            isOpened: this.state.isOpened
                        }) : u("div", {children: L("finishPopup.calculatingResult", {context: "close"})})]
                    })]
                })
            })
        }
    }

    class yn extends k {
        constructor() {
            super();
            m(this, "state", {isShowed: !1})
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        closePopup() {
            this.setState({isShowed: !0})
        }

        render(t, i, s) {
            var o, l, h, d;
            return !((l = (o = f.currentChallenge) == null ? void 0 : o.isLimitsActive) == null ? void 0 : l.value) || ((d = (h = f.currentChallenge) == null ? void 0 : h.spinsRemainig) == null ? void 0 : d.value) > 0 || this.state.isShowed ? null : u(N, {
                children: u("div", {
                    class: "modal",
                    children: u("div", {
                        class: "modal-opened",
                        children: [u(he, {}), u("div", {
                            class: "modal-content challenge-popup",
                            children: [u("div", {class: "modal-highlight"}), u("div", {
                                class: "challenge-popup-title",
                                children: L("limitPopup.title")
                            }), u("div", {
                                class: "challenge-popup-message",
                                children: L("limitPopup.message")
                            }), u("button", {
                                onClick: () => this.closePopup(),
                                class: "close-btn",
                                children: E.format(L("limitPopup.button"), "uppercase")
                            })]
                        })]
                    })
                })
            })
        }
    }

    class oi extends k {
        constructor() {
            super();
            m(this, "state", {isOpened: !0})
        }

        componentDidMount() {
            this.props.isOpened !== void 0 && this.setState({isOpened: this.props.isOpened})
        }

        componentWillUnmount() {
        }

        closePopup() {
            this.setState({isOpened: !1})
        }

        render(t, i, s) {
            return u(N, {
                children: this.state.isOpened ? u("div", {
                    class: "toast",
                    children: [u("div", {
                        class: "close",
                        onClick: () => this.closePopup(),
                        children: "×"
                    }), u("p", {class: "message", children: t.message})]
                }) : null
            })
        }
    }

    class xn extends k {
        constructor() {
            super();
            m(this, "state", {isOpened: !0})
        }

        componentDidMount() {
            f.isLobbyEnabled && (this.setState({isOpened: !1}), f.closeRulesPopup())
        }

        componentWillUnmount() {
        }

        closePopup() {
            this.setState({isOpened: !1}), f.closeRulesPopup()
        }

        render(t, i, s) {
            var o, l, h;
            const a = (l = (o = f == null ? void 0 : f.currentChallenge) == null ? void 0 : o.challengeData) == null ? void 0 : l.value,
                r = "right";
            return u(N, {
                children: this.state.isOpened ? u("div", {
                    className: "modal-opened " + r,
                    children: [u(he, {}), u("div", {
                        className: "modal-content " + r,
                        children: [u("div", {class: "modal-highlight"}), u("p", {
                            class: "challenge-title",
                            children: a == null ? void 0 : a.name
                        }), u("div", {
                            class: "panel",
                            children: [u("div", {
                                class: "challenge-descriptioncaption",
                                children: E.format(L("rules.title"), "uppercase")
                            }), u("ul", {
                                class: "challenge-description",
                                children: (h = a == null ? void 0 : a.rules) == null ? void 0 : h.map(d => u("li", {children: d}, d))
                            })]
                        }), u(ri, {}), u("button", {
                            onClick: () => this.closePopup(),
                            class: "close-btn",
                            children: E.format(L("limitPopup.button"), "uppercase")
                        })]
                    })]
                }) : null
            })
        }
    }

    class Sn extends k {
        constructor() {
            super()
        }

        componentWillUnmount() {
            f == null || f.destroy()
        }

        componentDidCatch(e, t) {
            console.log(e, t)
        }

        render(e, t, i) {
            var o, l, h, d, c, p;
            let s = null;
            const a = (l = (o = f == null ? void 0 : f.currentChallenge) == null ? void 0 : o.challengeData) == null ? void 0 : l.value,
                r = (d = (h = f == null ? void 0 : f.currentChallenge) == null ? void 0 : h.isRulesPopupShown) == null ? void 0 : d.value;
            return a && (a.status === P.FINISHED ? s = u(vn, {}) : a.player_active ? r ? s = u(mn, {}) : s = u(xn, {}) : s = u(on, {})), u(N, {children: [s, ((c = f == null ? void 0 : f.showBuyBonusToast) == null ? void 0 : c.value) && u(oi, {message: L("toast.buyBonus")}), ((p = f == null ? void 0 : f.showCopyPlayerCodeToast) == null ? void 0 : p.value) && u(oi, {message: L("toast.copyPlayerCode")}), u(yn, {})]})
        }
    }

    const Cn = {
        errorMessages: {
            100: "You are taking part in another challenge",
            101: "Paste a valid code",
            loading: "Failed loading data",
            default: "Something went wrong. Please try again later"
        },
        limitPopup: {
            title: "Spins limit reached",
            message: "Further spins won't count in the challenge",
            button: "Got it"
        },
        joinPopup: {title: "Got an invite code? Enter it here to join the challenge!", button: "Join Challenge"},
        finishPopup: {
            button: "Finish Challenge",
            calculatingResult_open: "Calculating the challenge's result",
            calculatingResult_close: "Calculating result"
        },
        rules: {title: "Challenge rules", button_view: "View rules", button_hide: "Hide rules"},
        popupTable: {
            title_leaderboard: "Leaderboard",
            title_player: "My result",
            column_rank: "#",
            column_id: "Player id",
            column_result: "Multiplier",
            column_result_bets: "Bets sum",
            column_result_mult: "Multiplier sum",
            loadingText: "Loading data",
            button: "View full leaderboard"
        },
        timer: {finish_open: "The challenge finished", finish_close: "Finished", start: "Starts in", end: "Ends in"},
        toast: {
            buyBonus: "The features you have purchased will not be accounted for in the challenge results",
            copyPlayerCode: "Code is copied"
        },
        limits: {
            spins_one: "spin",
            spins_other: "spins",
            spinsLeft: "Spins left",
            spinsLimitReachedMessage: "Limit reached: further spins won't count"
        },
        playerCode: {
            title: "Important!",
            message: "Each participant is assigned a unique player ID. Please keep your player ID safe and present it to the organizer to verify your identity and participation in the challenge. Without this code, you will not be able to claim your prize if you win!"
        }
    };

    async function Ln(n) {
        var e;
        try {
            const t = (e = window.__OPTIONS__) != null && e.isLocalBuild ? "" : Yi ? "https://brush.bgaming-network.com" : "https://brush-staging.bgaming-network.com";
            return await (await fetch(`${t}/l10n/${n}/common.json`)).json()
        } catch {
            return Cn
        }
    }

    async function wn() {
        var t;
        const n = (t = window.__OPTIONS__) == null ? void 0 : t.locale, e = await Ln(n);
        await E.init({
            lng: n,
            fallbackLng: "en",
            debug: !1,
            resources: {[n]: {translation: e}}
        }), E.services.formatter.add("uppercase", i => i.toUpperCase())
    }

    function En() {
        if (f.initialized.value) {
            let n = document.querySelector("#brush-app");
            n || (n = document.createElement("div"), n.id = "brush-app", document.body.appendChild(n)), f.applicationRoot = n, wn().then(() => mi(u(Sn, {}), document.getElementById("brush-app")))
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        var n;
        f.initialized.subscribe(En), f.isChallengesEnabled() && ((n = window.__OPTIONS__) != null && n.isLocalBuild) && f._gameEventsProcessor("game_loaded")
    })
})();
