---
title: JQuery使用总结
author: Itway
date: 2022/12/28 14:49
categories:
 - JavaScript知识集
tags:
 - JavaScript工具库
---

# JQuery使用总结

## JQ 方法

### jq 操作表单

```javascript
// 获取表单值
let value = $("#recordFrom").serializeArray();
$.each(value, function (index, item) {
  data[item.name] = item.value;
});

// 获取复选框的值
let isRead = $('input[name="read"]:checked').val();

$('input[name="read"]').prop("checked", true); //设置复选框的值
```

### jq-ajax

1. ajax 请求终止：

```javascript
uploadAjax && uploadAjax.abort(); // 如果有上传请求，则挂起
```

2. ajax 请求带上凭据（token）,设置 withCredentials:true：

```javascript
$.ajax({
  xhrFields: {
    withCredentials: true,
  },
});
```

## 用法总结

```javascript
1.通过方法返回 Jquery 对象实例

用 var someDiv = $(‘#someDiv").hide(); 代替 var someDiv = $(‘#someDiv"); someDiv.hide();

2.使用 find 来查找

用 $(‘#someDiv").find(‘p.someClass").hide(); 代替 $(‘#someDiv p.someClass").hide();因为可以不必触发 Jquery 的 Sizzle 引擎，同时在写选择符的时候尽量让您的选择符简单同时优化最右边的选择符

3.不要滥用$(this)

用 $(‘#someAnchor").click(function() {  alert( this.id );  }); 代替 $(‘#someAnchor").click(function() {alert($(this).attr(‘id"));});

4.ready 的简写形式

用 $(function() { }); 代替 $(document).ready(function() {});

5.让你的代码安全

方法 1（使用 noConflict）

代码如下:

var j = jQuery.noConflict();

j(‘#someDiv").hide();

// The line below will reference some other library"s $ function.

$(‘someDiv").style.display = ‘none";

方法 2（传入参数 Jquery）

代码如下:

(function($) {

// Within this function, $ will always refer to jQuery

})(jQuery);

方法 3（通过 ready 方法）

代码如下:

jQuery(document).ready(function($) {

// $ refers to jQuery

});

6.简化代码

用 each 代替 for，使用数组保存临时变量，使用 document fragment，这其实和写原生的 Javascript 需要注意的一样。

7.使用 Ajax 的方法

Jquery 提供了 get getJSON post ajax 这些有用的 ajax 方法

8.访问原生的属性和方法

比如获取元素 id 的方法有

代码如下:

// OPTION 1 – Use jQuery

var id = $(‘#someAnchor").attr(‘id");

// OPTION 2 – Access the DOM element

var id = $(‘#someAnchor")[0].id;

// OPTION 3 – Use jQuery"s get method

var id = $(‘#someAnchor").get(0).id;

// OPTION 3b – Don"t pass an index to get

anchorsArray = $(‘.someAnchors").get();

var thirdId = anchorsArray[2].id;

9.使用 PHP 来检查 Ajax 请求

通过使用 xhr.setRequestHeader(“X-Requested-With”, “XMLHttpRequest”); 服务器端如 PHP 就可以通过

代码如下:

function isXhr() {

return $\_SERVER["HTTP_X_REQUESTED_WITH"] === ‘XMLHttpRequest";

}

来检查是不是 Ajax 请求，在一些禁用 Javascript 的情况下可能会用到

10.Jquery 和$的关系

在 Jquery 代码的最下面，可以看到下面的代码

window.jQuery = window.$ = jQuery; $其实就是 Jquery 的一个 shortcut

11.条件加载 Jquery

代码如下:

<!– Grab Google CDN jQuery. fall back to local if necessary –>

<script src=”http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js”></script>

<script>!window.jQuery && document.write(‘<script src=”js/jquery-1.4.2.min.js”><\/script>")</script>

如果 CDN 没有下载到 Jquery，则从本地读取

12.Jquery Filters

代码如下:

<script>

$(‘p:first").data(‘info", ‘value"); // populates $"s data object to have something to work with

$.extend(

jQuery.expr[":"], {

block: function(elem) {

return $(elem).css(“display”) === “block”;

},

hasData : function(elem) {

return !$.isEmptyObject( $(elem).data() );

}

}

);

$(“p:hasData”).text(“has data”); // grabs paras that have data attached

$(“p:block”).text(“are block level”); // grabs only paragraphs that have a display of “block”

</script>

注：$.expr[":"]等价于$.expr.filters

13.hover 方法

代码如下:

$(‘#someElement").hover(function() {

//在这里可以使用 toggle 方法来实现滑过和滑出的效果

});

14.传入属性对象

当创建一个元素的时候，Jquery1.4 可以传入一个属性对象

代码如下:

$(‘</a>", {

id : ‘someId",

className : ‘someClass",

href : ‘somePath.html"

});

甚至是 Jquery 指定的属性或事件如 text, click
```

## jQ 实现选择框

```html
<div id="choice_role" class="select-box">
  <div class="selectInput">
    <div class="choice_value" data-value="">请选择</div>
    <span class="triangle-open"></span>
  </div>
  <ul id="roleList">
    <li value="choiceRole1">这是角色名1</li>
    <li value="choiceRole2">这是角色名2</li>
    <li value="choiceRole3">这是角色名3</li>
  </ul>
</div>
```

```javascript
// 选择框组件
$(".select-box").on("click", ".choice_value", function () {
  $(this).parents(".select-box").find("ul").toggleClass("show");
  $(".triangle-open").toggleClass("close");
});
$(".select-box ul").on("click", "li", function () {
  let $this = $(this);
  let $div = $this.parents(".select-box").find(".choice_value");
  let selectValue = $this.attr("value");
  $div.text($this.text());
  $div.data("value", selectValue);
  $this.addClass("select").siblings().removeClass("select");
  setTimeout(function () {
    $this.parents(".select-box").find("ul").removeClass("show");
    $(".triangle-open").removeClass("close");
  }, 100);
});
```

```less
// 选择框样式
.select-box {
  width: 3.86rem;
  margin: 0 auto 0;

  .selectInput {
    position: relative;
    .wh(3.86rem, 0.44rem);
    margin: 0 auto 0;

    .choice_value {
      display: block;
      .wh(3.86rem, 0.44rem);
      border: 1px solid @border-color;
      color: @text-color;
      margin: 0.8rem auto 0;
      text-align: center;
      font-size: 0.22rem;
      line-height: 0.44rem;
      position: relative;
    }

    .triangle-open {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      width: 0.4rem;
      height: 0.2rem;
      overflow: hidden;
      pointer-events: none;

      &.close {
        top: 0.1rem;

        &::before {
          transform-origin: right bottom;
          transform: rotate(315deg);
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: @border-color;
        transform-origin: right top;
        transform: rotate(45deg);
      }
    }
  }

  ul {
    display: none;
    width: 3.86rem;
    max-height: 2.5rem;
    border: 1px solid @border-color;
    color: @text-color;
    text-align: center;
    font-size: 0.22rem;
    line-height: 0.44rem;
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;

    &.show {
      display: block;
    }

    li {
      background: #fff;
      text-align: center;
      height: 0.44rem;

      &.select {
        background: @border-color;
      }
    }
  }
}
```

## JQ 导航栏实现

```html
<!--主体-->
<div class="main">
  <!--顶部导航-->
  <div class="top-bar">
    <div id="NIE-topBar"></div>
  </div>

  <div class="wrap">
    <ul class="nav-box">
      <li class="nav-item1">导航一</li>
      <li class="nav-item2">导航二</li>
      <li class="nav-item3">导航三</li>
      <li class="nav-item4">导航四</li>
      <li class="nav-item5">导航五</li>
      <li class="nav-item6">导航六</li>
    </ul>

    <div class="kv">kv</div>
    <!-- <div class="part-box"> -->
    <div class="part part1">模块1</div>
    <div class="part part2">模块2</div>
    <div class="part part3">模块3</div>
    <div class="part part4">模块4</div>
    <div class="part part5">模块5</div>
    <div class="part part6">模块6</div>
  </div>
  <!-- </div> -->
</div>
```

```javascript
/**
 * @func
 * @desc 导航栏事件
 * @param {Object} param 对象参数
 * @param {string} param.topClass 显示/隐藏导航栏的css类名
 * @param {string} param.showClass 自定义显示/隐藏的css类名
 * @param {string} param.navClass 导航栏盒子css类名
 * @param {string} param.partClass 主体模块css类名
 * @param {Array} param.part 对应模块顺序类名
 * @example
 * {
        topClass: "part1",
        showClass: "show",
        navClass: "nav-box",
        partClass: "part",
        part : ["part1","part2","part3","part4","part5","part6"]
    }
 */
function navEvent(param) {
  // 添加节流阀 互斥锁
  let flag = true;

  let toggleNav;

  if (param.topClass) {
    // 如果到了主体，侧边的导航栏就显示出来
    let tops = $(`.${param.topClass}`).offset().top;

    // 页面滚动事件
    // 如果用直接用页面滚动事件的话会出问题，因为如果当刷新页面的时候侧边按又会消失，因为只有当页面滚动的时候才会显示
    // 所以最好的方式是封装成一个函数
    toggleNav = function () {
      if ($(document).scrollTop() >= tops) {
        // 显示侧边栏
        $(`.${param.navClass}`).fadeIn();
      } else {
        // 隐藏侧边栏
        $(`.${param.navClass}`).fadeOut();
      }
    };

    toggleNav();
  }
  function showNav() {
    $(`.${param.partClass}`).each(function (index, ele) {
      if ($(document).scrollTop() >= $(ele).offset().top) {
        $(`.${param.navClass} li`)
          .eq(index)
          .addClass(param.showClass)
          .siblings()
          .removeClass(param.showClass);
      }
    });
  }
  $(window).scroll(function () {
    console.log(flag);
    toggleNav && toggleNav();
    // 页面滚动到某个区域，左侧侧边栏li相应添加和删除show类名
    // 加个节流阀
    if (flag) {
      showNav();
    }
  });
  // 刷新页面侧边栏添加show类名
  showNav();
  // 点击侧边栏的li滚动到相应的内容区域
  $(`.${param.navClass} li`).click(function () {
    // 点击之后就关掉节流阀
    flag = false;
    var topp = $(`.${param.part[$(this).index()]}`).offset().top;
    // 点击滚动完之后就开启节流阀
    $("body,html")
      .stop()
      .animate(
        {
          scrollTop: topp,
        },
        function () {
          flag = true;
        }
      );

    // 点击侧边栏进行干掉其他人留下我自己
    $(this).addClass(param.showClass).siblings().removeClass(param.showClass);
  });
}
```
