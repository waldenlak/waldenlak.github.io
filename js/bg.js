function waterfall(e){function t(e,t){var n=window.getComputedStyle(t);return parseFloat(n["margin"+e])||0}function n(e){return e+"px"}function o(e){return parseFloat(e.style.left)}function a(e){return e.clientWidth}function r(e){return function(e){return parseFloat(e.style.top)}(e)+function(e){return e.clientHeight}(e)+t("Bottom",e)}function i(e){return o(e)+a(e)+t("Right",e)}function l(e){e=e.sort((function(e,t){return r(e)===r(t)?o(t)-o(e):r(t)-r(e)}))}function c(t){a(e)!=v&&(t.target.removeEventListener(t.type,arguments.callee),waterfall(e))}"string"==typeof e&&(e=document.querySelector(e));var s=[].map.call(e.children,(function(e){return e.style.position="absolute",e}));e.style.position="relative";var d=[];s.length&&(s[0].style.top="0px",s[0].style.left=n(t("Left",s[0])),d.push(s[0]));for(var u=1;u<s.length;u++){var m=s[u-1],f=s[u];if(!(i(m)+a(f)<=a(e)))break;f.style.top=m.style.top,f.style.left=n(i(m)+t("Left",f)),d.push(f)}for(;u<s.length;u++){l(d);f=s[u];var p=d.pop();f.style.top=n(r(p)+t("Top",f)),f.style.left=n(o(p)),d.push(f)}l(d);var h=d[0];e.style.height=n(r(h)+t("Bottom",h));var v=a(e);window.addEventListener?window.addEventListener("resize",c):document.body.onresize=c}var percentFlag=!1;function MarkScroll(){const e=(document.documentElement.scrollTop||window.pageYOffset)%document.documentElement.clientHeight;e<=99||(e=99),!percentFlag&&e+100>=document.documentElement.clientHeight&&document.querySelector("#waterfall")?(console.info(e,document.documentElement.clientHeight),setTimeout((()=>{waterfall("#waterfall")}),500)):setTimeout((()=>{document.querySelector("#waterfall")&&waterfall("#waterfall")}),500);const t=window.scrollY+document.documentElement.clientHeight;let n=document.getElementById("post-comment")||document.getElementById("footer");(n.offsetTop+n.offsetHeight/2<t||90<e)&&(percentFlag=!0)}function replaceAll(e,t,n){return e.split(t).join(n)}var fgh={reflashMarkWaterFall:function(){document.querySelector("#waterfall")&&setTimeout((function(){waterfall("#waterfall"),document.getElementById("waterfall").classList.add("show")}),1500)},commentText:function(e){("undefined"==e||"null"==e)&&(e="🧐");var t=document.getElementsByClassName("wl-editor")[0],n=document.createEvent("HTMLEvents");if(t){n.initEvent("input",!0,!0);var o=replaceAll(e,"\n","\n> ");t.value="> "+o+"\n\n",t.dispatchEvent(n);var a=document.querySelector("#post-comment").offsetTop;window.scrollTo(0,a-80),t.focus(),t.setSelectionRange(-1,-1),document.getElementById("comment-tips")&&document.getElementById("comment-tips").classList.add("show")}},is_Post:function(){return window.location.href.indexOf("/po/")>=0},atRe:function(){let e=document.body;e.classList.add("read-mode");let t=document.createElement("button");t.type="button",t.className="exit-readmode",t.innerHTML='<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 16.5H6V4.5C6 3.67158 6.67158 3 7.5 3H28.5C29.3284 3 30 3.67158 30 4.5V31.5C30 32.3285 29.3284 33 28.5 33H7.5C6.67158 33 6 32.3285 6 31.5V19.5H15V24L22.5 18L15 12V16.5Z" fill="url(#paint0_linear_434_43)"/><defs><linearGradient id="paint0_linear_434_43" x1="18" y1="3" x2="18" y2="33" gradientUnits="userSpaceOnUse"><stop stop-color="#C3D4EB"/><stop offset="0.447917" stop-color="#61A0FF"/></linearGradient></defs></svg>',e.appendChild(t);let n=()=>{e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)};t.addEventListener("click",n)},atDa:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",1),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",1),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((function(){return window.disqusReset()}),200)},atLt:function(){let e=document.body;e.classList.add("listmode");let t=document.querySelector("#listmode.iic"),n=document.querySelector("#exit-listmode.iic");t.classList.add("active"),n.classList.remove("active");let o=()=>{e.classList.remove("listmode"),n.removeEventListener("click",o),t.classList.remove("active"),n.classList.add("active")};n.addEventListener("click",o)}};function addNavClickEvent(){$("#darkmode").on("click",fgh.atDa),$("#readmode").on("click",fgh.atRe),$("#listmode").on("click",fgh.atLt)}function waitForLunarJs(){"undefined"!=typeof Lunar&&"function"==typeof Lunar.fromYmd?processYears():setTimeout(waitForLunarJs,100)}function processYears(){$(".article-sort-item.year").each((function(){var e=$(this).text(),t=Lunar.fromYmd(parseInt(e),7,15),n=t.getYearInGanZhiExact(),o=t.getYearShengXiaoExact();$(this).text(e+" "+n+"·"+o)}))}fgh.reflashMarkWaterFall(),window.addEventListener("resize",(function(){document.querySelector("#waterfall")&&fgh.reflashMarkWaterFall()})),$(document).ready((function(){waitForLunarJs()})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("#article-container img").forEach((function(e){var t=e.getAttribute("alt");if(t){var n=document.createElement("div");n.classList.add("img-alt"),n.textContent=t,e.parentNode.insertBefore(n,e.nextSibling)}}))}));