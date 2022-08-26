var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '♥记得回来呐~~' + OriginTitile;
        clearTimeout(titleTime);
    }
    else {
        document.title = '✪ ▽ ✪ 被你发现啦！';
        //2s re
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
//导航条
function catBarActive() {
    var t = window.location.pathname;
    if ("/" == (t = decodeURIComponent(t)))
        document.querySelector("#catbar") && document.getElementById("首页").classList.add("select");
    else {
        if (/\/categories\/.*?\//.test(t)) {
            var e = t.split("/")[2];
            document.querySelector("#catbar") && document.getElementById(e).classList.add("select")
        }
    }
}
function tagBarActive() {
    var t = window.location.pathname;
    if ("/" == (t = decodeURIComponent(t)))
        document.querySelector("#tagbar") && document.getElementById("首页").classList.add("select");
    else {
        if (/\/tags\/.*?\//.test(t)) {
            var e = t.split("/")[2];
            document.querySelector("#tagbar") && document.getElementById(e).classList.add("select")
        }
    }
}
function BarScroll() {
    if (document.getElementById("bar-item")) {
        let t = document.getElementById("bar-item");
        t.addEventListener("mousewheel", (function(e) {
            let o = -e.wheelDelta / 2;
            t.scrollLeft += o,
            e.preventDefault()
        }
        ), !1)
    }
}
//滚动条自隐
var t1 = 0;
var t2 = 0;
var timer = null; // 定时器
document.styleSheets[0].insertRule('*::-webkit-scrollbar-thumb {display:none;}', 0);
document.onscroll = function() {
    clearTimeout(timer);
    timer = setTimeout(isScrollEnd, 1000);
    t1 = document.documentElement.scrollTop || document.body.scrollTop;
    document.styleSheets[0].insertRule('*::-webkit-scrollbar-thumb {display:block;}', 0);
}
function isScrollEnd() {
    t2 = document.documentElement.scrollTop || document.body.scrollTop;
    if(t2 == t1){
      document.styleSheets[0].insertRule('*::-webkit-scrollbar-thumb {display:none;}', 0);
    }
}
catBarActive()
tagBarActive()
BarScroll()