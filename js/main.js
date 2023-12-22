document.addEventListener("DOMContentLoaded",(function(){let e,t,n=!1;const o=n=>{if(n){const n=document.getElementById("site-name").offsetWidth,s=(o=document.getElementById("menus").children,Array.from(o).reduce(((e,t)=>e+t.offsetWidth),0));e=n+s,t=document.getElementById("nav")}var o;const s=window.innerWidth<=768||e>t.offsetWidth-120;t.classList.toggle("hide-menu",s)},s=()=>{btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),n=!0},i=()=>{const e=document.body;e.style.overflow="",e.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"Faded 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),n=!1},c=()=>{const e=GLOBAL_CONFIG.highlight;if(!e)return;const{highlightCopy:t,highlightLang:n,highlightHeightLimit:o,plugin:s}=e,i=GLOBAL_CONFIG_SITE.isHighlightShrink,c=t||n||void 0!==i,l="highlight.js"===s?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!c&&!o||!l.length)return;const a="prismjs"===s,d=!0===i?"closed":"",r=void 0!==i?'<svg class="expand" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M17.9999 22.1817L26.6566 13.4646C27.4583 12.6574 28.764 12.6574 29.5656 13.4647V13.4647C30.3594 14.264 30.3594 15.5541 29.5656 16.3535L19.4191 26.5709C18.6369 27.3586 17.3629 27.3586 16.5808 26.5709L6.43436 16.3535C5.64057 15.5541 5.64058 14.264 6.43437 13.4647V13.4647C7.23603 12.6574 8.54172 12.6574 9.34337 13.4647L17.9999 22.1817Z" fill="var(--link)"></path></svg>':"",m=t?'<div class="copy-notice"></div><svg class="copy-button" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M19.625 28.75C19.625 29.3023 19.1773 29.75 18.625 29.75H9.25C8.69772 29.75 8.25 29.3023 8.25 28.75V19.375C8.25 18.8227 8.69772 18.375 9.25 18.375H11V15.125H8.25C6.45742 15.125 5 16.5824 5 18.375V29.75C5 31.5426 6.45742 33 8.25 33H19.625C21.4176 33 22.875 31.5426 22.875 29.75V27H19.625V28.75ZM16.375 24.875H27.75C29.5426 24.875 31 23.4176 31 21.625V10.25C31 8.45742 29.5426 7 27.75 7H16.375C14.5824 7 13.125 8.45742 13.125 10.25V21.625C13.125 23.4176 14.5824 24.875 16.375 24.875Z" fill="var(--link)"></path></svg>':"",h=(e,t)=>{if(void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(t);else{const n=e.previousElementSibling;n.textContent=t,n.style.opacity=1,setTimeout((()=>{n.style.opacity=0}),800)}},g=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection(),o=document.createRange(),s=a?"pre code":"table .code pre";var i;o.selectNodeContents(t.querySelectorAll(`${s}`)[0]),n.removeAllRanges(),n.addRange(o),i=e.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),h(i,GLOBAL_CONFIG.copy.success)):h(i,GLOBAL_CONFIG.copy.noSupport),n.removeAllRanges(),t.classList.remove("copy-true")},u=function(e){const t=e.target.classList;t.contains("expand")?this.classList.toggle("closed"):t.contains("copy-button")&&g(this)},f=function(){this.classList.toggle("expand-done")},L=(e,t,n)=>{const s=document.createDocumentFragment();if(c){const t=document.createElement("div");t.className=`highlight-tools ${d}`,t.innerHTML=r+e+m,btf.addEventListenerPjax(t,"click",u),s.appendChild(t)}if(o&&t.offsetHeight>o+30){const e=document.createElement("div");e.className="code-expand-btn",e.innerHTML='<i><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M19.1766 28.5043C18.5258 29.1652 17.469 29.1652 16.8182 28.5043L8.48809 20.0437C7.8373 19.3828 7.8373 18.3093 8.48809 17.6484C9.13888 16.9874 10.1958 16.9874 10.8465 17.6484L18 24.9138L25.1535 17.6536C25.8042 16.9927 26.8611 16.9927 27.5119 17.6536C28.1627 18.3146 28.1627 19.3881 27.5119 20.049L19.1818 28.5096L19.1766 28.5043ZM27.5067 9.89112L19.1766 18.3516C18.5258 19.0126 17.469 19.0126 16.8182 18.3516L8.48809 9.89112C7.8373 9.23014 7.8373 8.15671 8.48809 7.49573C9.13888 6.83476 10.1958 6.83476 10.8465 7.49573L18 14.7612L25.1535 7.50102C25.8042 6.84004 26.8611 6.84004 27.5119 7.50102C28.1627 8.162 28.1627 9.23543 27.5119 9.89641L27.5067 9.89112Z" fill="var(--fc)"></path></svg></i>',btf.addEventListenerPjax(e,"click",f),s.appendChild(e)}"hl"===n?t.insertBefore(s,t.firstChild):t.parentNode.insertBefore(s,t)};a?l.forEach((e=>{if(n){const t=`<div class="code-lang">${e.getAttribute("data-language")||"Code"}</div>`;btf.wrap(e,"figure",{class:"highlight"}),L(t,e)}else btf.wrap(e,"figure",{class:"highlight"}),L("",e)})):l.forEach((e=>{if(n){let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code");L(`<div class="code-lang">${t}</div>`,e,"hl")}else L("",e,"hl")}))},l=function(e){const t=e=>{let t="";const n=e=>e.replace(/"/g,"&quot;");return e.forEach((e=>{const o=e.alt?`alt="${n(e.alt)}"`:"",s=e.title?`title="${n(e.title)}"`:"";t+=`<div class="fj-gallery-item"><img src="${e.url}" ${o+s}"></div>`})),t},n=(e,n,o)=>{const s=o,i=n.length;return i>s?e.insertAdjacentHTML("beforeend",t(n.splice(0,s))):(e.insertAdjacentHTML("beforeend",t(n)),e.classList.remove("lazyload")),i>s?s:i},o=(e,o)=>{if(e.classList.contains("lazyload")){const t=e.getAttribute("data-limit");n(e,o,t);const s=()=>{const i=n(e,o,t);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${i})`)),btf.loadLightbox(e.querySelectorAll("img")),i<t&&e.nextElementSibling.removeEventListener("click",s)};e.nextElementSibling.addEventListener("click",s)}else e.innerHTML=t(o);btf.initJustifiedGallery(e),btf.loadLightbox(e.querySelectorAll("img"))},s=()=>{e.forEach((e=>{e.classList.contains("url")?(async e=>{const t=await fetch(e);return await t.json()})(e.textContent).then((t=>{o(e,t)})):o(e,JSON.parse(e.textContent))}))};window.fjGallery?s():(getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`),getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(s))},a=()=>{const e=document.getElementById("rightside"),t=window.innerHeight+56;let n=0;const o=document.getElementById("page-header"),s="undefined"!=typeof chatBtn,i=GLOBAL_CONFIG.percent.rightside;if(document.body.scrollHeight<=t)return void e.classList.add("rightside-show");let c="";const l=btf.throttle((()=>{const l=window.scrollY||document.documentElement.scrollTop,a=(e=>{const t=e>n;return n=e,t})(l);l>56?(""===c&&(o.classList.add("nav-fixed"),e.classList.add("rightside-show")),a?"down"!==c&&(o.classList.remove("nav-visible"),s&&window.chatBtn.hide(),c="down"):"up"!==c&&(o.classList.add("nav-visible"),s&&window.chatBtn.show(),c="up")):(c="",0===l&&o.classList.remove("nav-fixed","nav-visible"),e.classList.remove("rightside-show")),i&&(e=>{const t=btf.getScrollPercent(e,document.body),n=document.getElementById("go-up");t<95?(n.classList.add("show-percent"),n.querySelector(".scroll-percent").textContent=t):n.classList.remove("show-percent")})(l),document.body.scrollHeight<=t&&e.classList.add("rightside-show")}),300);btf.addEventListenerPjax(window,"scroll",l,{passive:!0})},d=()=>{const e=GLOBAL_CONFIG_SITE.isToc,t=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(!n||!e&&!t)return;let o,s,i,c,l;if(e){const e=document.getElementById("card-toc");s=e.querySelector(".toc-content"),o=s.querySelectorAll(".toc-link"),c=e.querySelector(".toc-percentage"),l=s.classList.contains("is-expand");const t=t=>{const n=t.target.closest(".toc-link");n&&(t.preventDefault(),btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e.classList.remove("open"))};btf.addEventListenerPjax(s,"click",t),i=e=>{const t=e.getBoundingClientRect().top,n=s.scrollTop;t>document.documentElement.clientHeight-100&&(s.scrollTop=n+150),t<100&&(s.scrollTop=n-150)}}const a=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let d="";const r=btf.throttle((()=>{const r=window.scrollY||document.documentElement.scrollTop;e&&GLOBAL_CONFIG.percent.toc&&(c.textContent=btf.getScrollPercent(r,n)),(n=>{if(0===n)return!1;let c="",r="";if(a.forEach(((e,t)=>{if(n>btf.getEleTop(e)-80){const n=e.id;c=n?"#"+encodeURI(n):"",r=t}})),d!==r&&(t&&btf.updateAnchor(c),d=r,e)){if(s.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),""===c)return;const e=o[r];if(e.classList.add("active"),setTimeout((()=>{i(e)}),0),l)return;let t=e.parentNode;for(;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}})(r)}),100);btf.addEventListenerPjax(window,"scroll",r,{passive:!0})},r=e=>{const t=(window.globalFn||{}).themeChange||{};t&&Object.keys(t).forEach((n=>{const o=t[n];["disqus","disqusjs"].includes(n)?setTimeout((()=>o(e)),300):o(e)}))},m={readmode:()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="exit-readmode",t.innerHTML='<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 16.5H6V4.5C6 3.67158 6.67158 3 7.5 3H28.5C29.3284 3 30 3.67158 30 4.5V31.5C30 32.3285 29.3284 33 28.5 33H7.5C6.67158 33 6 32.3285 6 31.5V19.5H15V24L22.5 18L15 12V16.5Z" fill="url(#paint0_linear_434_43)"/><defs><linearGradient id="paint0_linear_434_43" x1="18" y1="3" x2="18" y2="33" gradientUnits="userSpaceOnUse"><stop stop-color="#C3D4EB"/><stop offset="0.447917" stop-color="#61A0FF"/></linearGradient></defs></svg>',e.appendChild(t);const n=()=>{e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)};t.addEventListener("click",n)},darkmode:()=>{const e="dark"===document.documentElement.getAttribute("data-theme")?"dark":"light";"light"===e?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night,!1,2e3)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day,!1,2e3)),r(e)},"rightside-config":e=>{const t=e.firstElementChild;t.classList.contains("show")&&(t.classList.add("status"),setTimeout((()=>{t.classList.remove("status")}),300)),t.classList.toggle("show")},"go-up":()=>{btf.scrollToDest(0,500)},"hide-aside-btn":()=>{const e=document.documentElement.classList,t=e.contains("hide-aside")?"show":"hide";saveToLocal.set("aside-status",t,2),e.toggle("hide-aside")},"mobile-toc-button":e=>{const t=document.getElementById("card-toc");t.style.transition="transform 0.3s ease-in-out",t.classList.toggle("open"),t.addEventListener("transitionend",(()=>{t.style.transition=""}),{once:!0})},"chat-btn":()=>{window.chatBtnFn()}};document.getElementById("rightside").addEventListener("click",(function(e){const t=e.target.closest("[id]");t&&m[t.id]&&m[t.id](this)}));const h=()=>{const e=document.querySelectorAll("#article-container .hide-button");if(!e.length)return;const t=function(e){this.classList.add("open");const t=this.nextElementSibling.querySelectorAll(".gallery-container");t.length&&addJustifiedGallery(t)};e.forEach((e=>{e.addEventListener("click",t,{once:!0})}))},g=()=>{const e=document.querySelectorAll("#article-container .tabs");if(!e.length)return;const t=(e,t)=>{Array.from(e).forEach((e=>{e.classList.remove("active"),e!==t&&e.id!==t||e.classList.add("active")}))},n=(e,n)=>{btf.addEventListenerPjax(e.firstElementChild,"click",(function(e){const o=e.target.closest("button");if(o.classList.contains("active"))return;t(this.children,o),this.classList.remove("no-default");const s=o.getAttribute("data-href"),i=this.nextElementSibling;if(t(i.children,s),n){btf.removeGlobalFnEvent("igOfTabs",this);const e=i.querySelectorAll(`:scope > #${s} .gallery-container`);e.length&&addJustifiedGallery(e,this)}}))};e.forEach((e=>{const t=!!e.querySelectorAll(".gallery-container");n(e,t),(e=>{btf.addEventListenerPjax(e.lastElementChild,"click",(t=>{t.target.closest("button")&&btf.scrollToDest(btf.getEleTop(e),300)}))})(e)}))},u=function(e){e.forEach((e=>{const t=e.getAttribute("datetime");e.textContent=btf.diffDate(t,!0),e.style.display="inline"}))};window.refreshFn=function(){o(!0),t.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(()=>{const{limitDay:e,messagePrev:t,messageNext:n,position:o}=GLOBAL_CONFIG.noticeOutdate,s=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(s>=e){const e=document.createElement("div");e.className="post-outdate-notice",e.textContent=`${t} ${s} ${n}`;const i=document.getElementById("article-container");"top"===o?i.insertBefore(e,i.firstChild):i.appendChild(e)}})(),GLOBAL_CONFIG.relativeDate.post&&u(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&u(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.textContent=`${btf.diffDate(t)} ${GLOBAL_CONFIG.runtime}`}})(),(()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.textContent=btf.diffDate(t,!0)}})(),(()=>{const e=document.querySelector("#aside-cat-list.expandBtn");if(!e)return;btf.addEventListenerPjax(e,"click",(e=>{const t=e.target;"I"===t.nodeName&&(e.preventDefault(),t.parentNode.classList.toggle("expand"))}),!0)})()),d(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const e=document.getElementById("scroll-down");e&&btf.addEventListenerPjax(e,"click",(()=>{btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),c(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((e=>{const t=e.title||e.alt;if(!t)return;const n=document.createElement("div");n.className="img-alt is-center",n.textContent=t,e.insertAdjacentElement("afterend",n)})),a();const e=document.querySelectorAll("#article-container .fj-gallery");e.length&&l(e),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(()=>{const e=document.querySelectorAll("#article-container table");e.length&&e.forEach((e=>{e.closest(".highlight")||btf.wrap(e,"div",{class:"table-wrap"})}))})(),h(),g(),(()=>{const e=document.getElementById("switch-btn");if(!e)return;let t=!1;const n=document.getElementById("post-comment");btf.addEventListenerPjax(e,"click",(()=>{n.classList.toggle("move"),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())}))})(),btf.addEventListenerPjax(document.getElementById("toggle-menu"),"click",(()=>{s()}))},refreshFn(),window.addEventListener("resize",(()=>{o(!1),n&&btf.isHidden(document.getElementById("toggle-menu"))&&i()})),document.getElementById("menu-mask").addEventListener("click",(e=>{i()})),document.querySelector("#sidebar-menus .menus_items").addEventListener("click",(e=>{const t=e.target.closest(".site-page.group");t&&t.classList.toggle("hide")})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&addCopyright(),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{void 0===saveToLocal.get("theme")&&(e.matches?r("dark"):r("light"))}))}));