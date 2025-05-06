---
title: JS常用方法
author: Itway
date: 2022/12/28 15:00
categories:
 - JavaScript知识集
tags:
 - JavaScript方法总结
---


# JS常用方法

> 项目积累的方法，方便后续使用，防止重复造轮子

## 常用工具函数

```javascript
// 1.防抖函数
function debounce(fn, delay, isInit = false) {
  let timer = null;
  //用户是否首次输入
  let initInt = true;
  return function (...args) {
    // 如果用户传入了true并且是首次输入
    if (isInit && initInt) {
      // 如果是首次输入，则立即执行
      fn.apply(this, args);
      // 将立即执行变量置为false，以便进入到防抖的代码中
      initInt = false;
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
        // 将立即执行变量为true，以便下次进入到立即执行的代码里
        initInt = true;
      }, delay);
    }
  };
}
// 2.随机获取范围内数字
function random(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}
```

## 常用方法

### 页面缩放

```javascript
function resize() {
  var width = document.documentElement.clientWidth;
  var scale = width / 1920;

  if (window.innerWidth > 1440 && window.innerWidth <= 1920) {
    $(`.pop-egg`).css({
      transform: `scale(${scale})`,
    });
  } else if (window.innerWidth <= 1440) {
    var scale1 = 1440 / 1920;
    $(`.pop-egg`).css({
      transform: `scale(${scale1})`,
    });
  }
}
$(window).resize(function () {
  resize();
});
resize();
```

### url 方法

1. url 参数获取

```javascript
function _params(param) {
	var pStr = window.location.hash.toString() || window.location.search.toString(),
		r = new RegExp("[\?&]*" + param + "=([^&]+)"),
		m = pStr.match(r);
	if (m) return m[1].replace('"', '');
	else return '';
},
```

2. 添加 url 参数不刷新页面

```javascript
function changeURLArg(url, arg, arg_val) {
  var pattern = arg + "=([^&]*)";
  var replaceText = arg + "=" + arg_val;
  if (url.match(pattern)) {
    var tmp = "/(" + arg + "=)([^&]*)/gi";
    tmp = url.replace(eval(tmp), replaceText);
    return tmp;
  } else {
    if (url.match("[?]")) {
      return url + "&" + replaceText;
    } else {
      return url + "?" + replaceText;
    }
  }
}
var urlSearch = location.href;
var unformatStr = changeURLArg(urlSearch, "openPop", "true");
if (!!(window.history && history.pushState)) {
  history.replaceState(null, "", unformatStr); // 修改url不刷新
}
```

## 移动端方法

```javascript
// 1.触摸代替默认滚动（解决页面默认滚动会推出页面）
document.querySelectorAll(".scroll").forEach((item) => {
  var startX = 0; //获取手指初始坐标
  var startY = 0; //获取手指初始坐标

  item.addEventListener("touchstart", function (e) {
    //得到手指初始坐标
    startX = e.targetTouches[0].pageX;
    startY = e.targetTouches[0].pageY;
  });
  item.addEventListener("touchmove", function (e) {
    //计算手指移动的距离   手指移动之后的坐标-手指初始坐标
    var moveX = e.targetTouches[0].pageX - startX;
    var moveY = e.targetTouches[0].pageY - startY;

    var $win = $(window);
    if ($win[0].orientation == 90 || $win[0].orientation == -90) {
      //横屏
      $(item).scrollTop($(item).scrollTop() - moveY / 5);
    } else {
      //竖屏
      $(item).scrollTop($(item).scrollTop() + moveX / 5);
    }

    e.preventDefault(); //阻止屏幕滚动的默认行为
  });
});

// 2.生成分享图
let canvas_1 = $(".mycanvas")[0];

canvas_1.width = 707;
canvas_1.height = 1290;
let scene = canvas_1.getContext("2d");
let bg = new Image();
bg.setAttribute("crossOrigin", "Anonymous");
bg.onload = function () {
  scene.drawImage(bg, 0, 0);
  scene.fillStyle = "#ffffff";
  scene.font = "30px Microsoft YaHei";
  let name = userInfo.nickname || "xxx";
  scene.fillText(name, 67, 175);
  scene.font = "32px Microsoft YaHei";
  let text = "香所指引的心境是：";
  scene.fillText(text, 67, 217);
  let qc = new Image();
  if ($(".qrcode_box img").attr("src")) {
    qc.src = $(".qrcode_box img").attr("src");
  } else {
    qc.src = $(".qrcode_box canvas")[0].toDataURL("image/jpeg");
  }
  qc.setAttribute("crossOrigin", "Anonymous");

  qc.onload = function () {
    scene.drawImage(qc, 528, 1022, 106, 106);
    $(".share_img").attr("src", canvas_1.toDataURL("image/jpeg"));
    setTimeout(function (param) {
      hidePop();
    }, 800);
  };
};
bg.src = arr[number].share_img;
```
