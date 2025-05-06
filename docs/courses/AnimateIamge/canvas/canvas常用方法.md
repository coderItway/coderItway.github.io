---
title: canvas常用方法
author: Itway
date: 2022/12/28 22:00
categories:
  - 动画图像知识集
tags:
  - canvas
---

# canvas 常用方法

## 生成图片

### 原生实现，操作比较麻烦
```javascript
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
### html2canvas实现，根据dom节点直接生成
-html2canvas生成图片
    - 问题： canvas生成图片，图片会模糊。
    - 解决方案：为复用页面元素不改变html标签，选择把rem单位换成px，并放到一个不可见父盒子（1X1）中，然后生成图片；
    - 伪代码：
```html
<div style="width: 1px;height: 1px;overflow: hidden;opacity: 0.1">
    <div class="canvas_bg" id="canvas">
        <div class="inside_box">
            
        </div>
    </div>
</div>
```
```javascript
html2canvas(
    node, {
    useCORS: true,
    allowTaint: true,//允许跨域图片
    backgroundColor: null,
}
).then(canvas => {
    if (canvas) {
        let url = canvas.toDataURL('image/jpeg');
        let img = new Image();
        img.onload = function () {
            $('#imgId').attr({ src: url })
            $(".popup_page5").removeClass("show");
        }
        img.src = url;
    }
})
```
```css
.canvas_bg {
    height: 1624px;
    width: 750px;
    position: relative;

    .inside_box {
        width: 750px;
        height: 1100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
```
## 绘制视频

```html
<div>
  <canvas id="canvas"></canvas>
  <video
    src="https://nie.v.netease.com/nie/2022/1212/3ff0b7fffcb05b7f1f49423613377125.mp4"
    id="video"
    preload="auto"
    playsinline="true"
    x-webkit-airplay="true"
    webkit-playsinline="true"
    x5-video-player-type="h5"
    x-video-orientation="h5"
    x5-video-player-fullscreen="true"
    muted="false"
  ></video>
  <button id="button">播放</button>
</div>

<script>
  var video = document.getElementById("video");
  var canvas = document.getElementById("canvas");
  var button = document.getElementById("button");
  var i;
  button.addEventListener("click", function () {
    video.play();
  });
  context = canvas.getContext("2d");

  video.addEventListener(
    "play",
    function (v) {
      i = window.setInterval(function () {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }, 20);
    },
    false
  );

  video.addEventListener(
    "pause",
    function () {
      window.clearInterval(i);
    },
    false
  );

  video.addEventListener(
    "ended",
    function () {
      clearInterval(i);
    },
    false
  );
</script>
```
