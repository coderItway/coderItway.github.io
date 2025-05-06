---
title: swiper.js使用总结
author: Itway
date: 2022/12/28 14:49
categories:
 - JavaScript知识集
tags:
 - JavaScript工具库
---

# swiper.js使用总结

## 通用

**swiper图片轮播匀速：**
```css
.swiper-wrapper {
    -webkit-transition-timing-function: linear;
    /*之前是ease-out*/
    -moz-transition-timing-function: linear;
    -ms-transition-timing-function: linear;
    -o-transition-timing-function: linear;
    transition-timing-function: linear;
}
```

## PC

## H5

**横竖屏切换注意swiper尺寸的变化，重新初始化swiper：**
```javascript
$(window).resize(function () {
    setTimeout(function () { //要在尺寸变化后初始化；
        textSwiper2.onResize();
        textSwiper3.onResize();
    }, 500);
});
```

**文本swiper切换到最后一个或者第一个再滑动屏幕时，切换页面swiper：**
```javascript
// 第一种方法：swiper原生实现
new Swiper(".text-container3", {
    direction: 'vertical',
    onTouchStart: function (swiper, event) {
        var touch = event.touches[0];
        startY = touch.pageY;
    },
    onTouchMove: function (swiper, event) {
        var touch = event.touches[0];
        endY = touch.pageY - startY;
    },
    onTouchEnd: function (swiper) {
        if (Math.abs(endY) > 20 && endY < 0 && swiper.isEnd) {
            swiper2in_zz.slideTo(1, 500);
        }
        if (Math.abs(endY) > 20 && endY > 0 && swiper.isBeginning) {
            swiper2in_zz.slideTo(0, 500);
        }
    },
})

// 第二种方法：hanmmer.js
const hammerTest = new Hammer(document.getElementById('hammerTest'));
hammerTest.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

var swiper1 = new Swiper('.page-swiper', {
    direction: 'vertical',
});
    
var swiper2 = new Swiper('.box-swiper', {
  direction: 'vertical',
  onSlideChangeEnd: function (swiper) {
    if (swiper.activeIndex == 1) {
      swiper2.lockSwipeToNext();
      hammerTest.on('swipeup', function (e) {
        swiper1.slideTo(2, 1000, false);
      });
    } else {
      swiper2.unlockSwipeToNext();
      hammerTest.off('swipeup', function (e) {
        console.log('off');
      });
    }
  },
});
```