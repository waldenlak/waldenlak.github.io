//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
//var backimg =[
    //"url(https://cdn.jsdelivr.net/gh/waldenlak/Art/imgs/b0.jpg)",
    //"url(https://cdn.jsdelivr.net/gh/waldenlak/Art/imgs/o1.jpg)",
    //"url(https://cdn.jsdelivr.net/gh/waldenlak/Art/imgs/o4.jpg)"
  //];
  //获取背景图片总数，生成随机数
  //var bgindex =Math.ceil(Math.random() * (backimg.length-1));
  //重设背景图片
  //document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
const $header = document.getElementById("page-header")
if ($header.classList.contains("full_page")) {
  var bannerimg =[
    "url(https://cdn.jsdelivr.net/gh/waldenlak/Art/imgs/banner1.jpg)",
    "url(https://cdn.jsdelivr.net/gh/waldenlak/Art/imgs/banner2.jpg)",
    "url(https://cdn.jsdelivr.net/gh/waldenlak/Art/imgs/banner3.jpg)",
    "url(https://cdn.jsdelivr.net/gh/waldenlak/Art/imgs/banner4.jpg)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];}