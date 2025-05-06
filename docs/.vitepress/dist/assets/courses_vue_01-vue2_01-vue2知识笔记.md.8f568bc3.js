import{_ as c}from"./chunks/ArticleMetadata.f06b230e.js";import{_ as i,i as r,o as t,c as d,g as u,w as h,e as g,j as v,b as s,f as a,t as y,a as A}from"./app.f6f466d0.js";const E=JSON.parse('{"title":"Vue2知识笔记","description":"","frontmatter":{"title":"Vue2知识笔记","author":"Itway","date":"2022/12/28 15:00","categories":["Vue知识集"],"tags":["Vue"]},"headers":[{"level":2,"title":"模板语法","slug":"模板语法","link":"#模板语法","children":[]},{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[{"level":3,"title":"内置指令","slug":"内置指令","link":"#内置指令","children":[]},{"level":3,"title":"自定义指令","slug":"自定义指令","link":"#自定义指令","children":[]}]},{"level":2,"title":"类与样式的绑定","slug":"类与样式的绑定","link":"#类与样式的绑定","children":[{"level":3,"title":"在元素上使用","slug":"在元素上使用","link":"#在元素上使用","children":[]},{"level":3,"title":"在组件上使用","slug":"在组件上使用","link":"#在组件上使用","children":[]}]},{"level":2,"title":"计算属性","slug":"计算属性","link":"#计算属性","children":[{"level":3,"title":"应用场景：","slug":"应用场景","link":"#应用场景","children":[]},{"level":3,"title":"计算属性和函数方法","slug":"计算属性和函数方法","link":"#计算属性和函数方法","children":[]}]},{"level":2,"title":"侦听器","slug":"侦听器","link":"#侦听器","children":[{"level":3,"title":"应用场景：","slug":"应用场景-1","link":"#应用场景-1","children":[]},{"level":3,"title":"Options API 实现 Watch","slug":"options-api-实现-watch","link":"#options-api-实现-watch","children":[]}]},{"level":2,"title":"生命周期钩子","slug":"生命周期钩子","link":"#生命周期钩子","children":[]},{"level":2,"title":"自定义组件","slug":"自定义组件","link":"#自定义组件","children":[]},{"level":2,"title":"内置组件","slug":"内置组件","link":"#内置组件","children":[{"level":3,"title":"<Transition>","slug":"transition","link":"#transition","children":[]},{"level":3,"title":"<TransitionGroup>","slug":"transitiongroup","link":"#transitiongroup","children":[]},{"level":3,"title":"<KeepAlive>","slug":"keepalive","link":"#keepalive","children":[]},{"level":3,"title":"<Teleport>","slug":"teleport","link":"#teleport","children":[]}]}],"relativePath":"courses/vue/01-vue2/01-vue2知识笔记.md","lastUpdated":1675696928000}'),B={name:"courses/vue/01-vue2/01-vue2知识笔记.md"},C=s("h1",{id:"vue2-知识笔记",tabindex:"-1"},[a("Vue2 知识笔记 "),s("a",{class:"header-anchor",href:"#vue2-知识笔记","aria-hidden":"true"},"#")],-1),b=s("h2",{id:"模板语法",tabindex:"-1"},[a("模板语法 "),s("a",{class:"header-anchor",href:"#模板语法","aria-hidden":"true"},"#")],-1),q=s("blockquote",null,[s("p",null,[a("官网："),s("a",{href:"https://cn.vuejs.org/guide/essentials/template-syntax.html",target:"_blank",rel:"noreferrer"},"https://cn.vuejs.org/guide/essentials/template-syntax.html")])],-1),f=A(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;span&gt;Message: {{ msg }}&lt;/span&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">{{ number + 1 }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">{{ ok ? &quot;YES&quot; : &quot;NO&quot; }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">{{ message.split(&quot;&quot;).reverse().join(&quot;&quot;) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;div :id=&quot;\`list-\${id}\`&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 这是一个语句，而非表达式 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">{{ var a = 1 }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 条件控制也不支持，请使用三元表达式 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">{{ if (ok) { return message } }}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">&lt;span&gt;Message: {{ msg }}&lt;/span&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">{{ number + 1 }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">{{ ok ? &quot;YES&quot; : &quot;NO&quot; }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">{{ message.split(&quot;&quot;).reverse().join(&quot;&quot;) }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div :id=&quot;\`list-\${id}\`&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 这是一个语句，而非表达式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{{ var a = 1 }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 条件控制也不支持，请使用三元表达式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">{{ if (ok) { return message } }}</span></span>
<span class="line"></span></code></pre></div><h2 id="指令" tabindex="-1">指令 <a class="header-anchor" href="#指令" aria-hidden="true">#</a></h2><blockquote><p>官网：<a href="https://cn.vuejs.org/api/built-in-directives.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/built-in-directives.html</a></p></blockquote><h3 id="内置指令" tabindex="-1">内置指令 <a class="header-anchor" href="#内置指令" aria-hidden="true">#</a></h3><ul><li>v-text：更新元素的 <code>textContent</code>；</li><li>v-html：更新元素的 <code>innerHTML</code>；</li><li><strong>v-show</strong>：根据表达式的真假值，切换元素样式的 <code>display</code> 的属性，<strong>适合频繁切换的元素</strong>；</li><li><strong>v-if</strong>：根据表达式的真假值，来有条件地渲染元素，<strong>会删除 dom 上的元素，不适合频繁切换</strong>；</li><li>v-else：为 <code>v-if</code> 或者 <code>v-else-if</code> 添加 <code>else</code> 块；</li><li>v-else-if：表示 <code>v-if</code> 的 <code>else-if</code> 块；</li><li><strong>v-for</strong>：基于源数据多次渲染元素或模板，语法：<code>v-for=&quot;(item,index) in data&quot;</code>；</li><li><strong>v-on</strong>：绑定事件监听器，可以简写为 <code>@</code>，语法：<code>@click=&quot;method&quot;，@mouseEnter=&quot;method&quot;</code>；</li><li><strong>v-bind</strong>：动态地绑定一个或多个 <code>attribute</code>，或一个组件的 <code>prop</code> 到表达式，可以简写为 <code>:</code>，语法：<code>&lt;a :id=&quot;id&quot; :href=&quot;url&quot;&gt;&lt;/a&gt;，&lt;app :title=&quot;title&quot;&gt;&lt;/app&gt;</code>；</li><li><strong>v-model</strong>：在表单控件或者组件上创建双向绑定；</li><li>v-solt：提供具名插槽或需要接收 <code>prop</code> 的插槽；</li><li>v-pre：跳过这个元素和它的子元素的编译过程；</li><li>v-cloak：用于隐藏尚未完成编译的 <code>DOM</code> 模板；</li><li>v-once：仅渲染元素和组件一次，并跳过之后的更新；</li><li>v-is：HTML 标签映射，将普通 html 标签渲染为组件时，需要使用 v-is 指令;</li></ul><h4 id="v-modal-详解" tabindex="-1">v-modal 详解 <a class="header-anchor" href="#v-modal-详解" aria-hidden="true">#</a></h4><ol><li>表单元素使用 <code>v-model</code></li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;input v-model=&quot;value&quot; /&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 等同于 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;input v-bind:value=&quot;value&quot; v-on:input=&quot;value = $event.target.value&quot; /&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 或 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;input :value=&quot;value&quot; @input=&quot;value = $event.target.value&quot; /&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">&lt;input v-model=&quot;value&quot; /&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 等同于 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input v-bind:value=&quot;value&quot; v-on:input=&quot;value = $event.target.value&quot; /&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 或 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input :value=&quot;value&quot; @input=&quot;value = $event.target.value&quot; /&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>自定义组件使用 <code>v-model</code> 在自定义组件中，<code>v-model</code> 默认利用名为 <code>value</code> 的 <code>props</code> 和名为 <code>input</code> 的事件。 本质是一个父子组件通信的语法糖，通过 <code>props</code> 和 <code>$.emit</code> 实现。因此父组件 <code>v-model</code> 语法糖本质上可以修改为：</li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">&lt;child</span></span>
<span class="line"><span style="color:#ABB2BF;">  :value=&quot;value&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  @input=&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    function (e) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      value = e;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  &quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">&gt;&lt;/child&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">&lt;child</span></span>
<span class="line"><span style="color:#A6ACCD;">  :value=&quot;value&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  @input=&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    function (e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value = e;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;&lt;/child&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="自定义指令" tabindex="-1">自定义指令 <a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a></h3><blockquote><p>官网：<a href="https://cn.vuejs.org/guide/reusability/custom-directives.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/reusability/custom-directives.html</a></p></blockquote><h2 id="类与样式的绑定" tabindex="-1">类与样式的绑定 <a class="header-anchor" href="#类与样式的绑定" aria-hidden="true">#</a></h2><p>使用 <code>v-bind</code> 指令动态给元素添加 class 类或者样式；</p><h3 id="在元素上使用" tabindex="-1">在元素上使用 <a class="header-anchor" href="#在元素上使用" aria-hidden="true">#</a></h3><p>示例：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;">&lt;!-- 1.传递一个对象来动态切换 class，isActive为布尔值 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;div :class=&quot;{ active: isActive }&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 2.除了写成内联字面量的形式，也可以直接绑定一个对象 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">data() { return { classObject: { active: true, &#39;text-danger&#39;: false } } }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;div :class=&quot;classObject&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 3.也可以绑定一个返回对象的计算属性 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">data() { return { isActive: true, error: null } }, computed: { classObject() {</span></span>
<span class="line"><span style="color:#ABB2BF;">return { active: this.isActive &amp;&amp; !this.error, &#39;text-danger&#39;: this.error &amp;&amp;</span></span>
<span class="line"><span style="color:#ABB2BF;">this.error.type === &#39;fatal&#39; } } }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 4.使用数组绑定 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">data() { return { activeClass: &#39;active&#39;, errorClass: &#39;text-danger&#39; } }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;div :class=&quot;[activeClass, errorClass]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 在数组中有条件地渲染某个 class，可以使用三元表达式 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;div :class=&quot;[isActive ? activeClass : &#39;&#39;, errorClass]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 也可以在数组中嵌套对象 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;div :class=&quot;[{ active: isActive }, errorClass]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;">&lt;!-- 1.传递一个对象来动态切换 class，isActive为布尔值 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div :class=&quot;{ active: isActive }&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 2.除了写成内联字面量的形式，也可以直接绑定一个对象 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">data() { return { classObject: { active: true, &#39;text-danger&#39;: false } } }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div :class=&quot;classObject&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 3.也可以绑定一个返回对象的计算属性 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">data() { return { isActive: true, error: null } }, computed: { classObject() {</span></span>
<span class="line"><span style="color:#A6ACCD;">return { active: this.isActive &amp;&amp; !this.error, &#39;text-danger&#39;: this.error &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">this.error.type === &#39;fatal&#39; } } }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 4.使用数组绑定 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">data() { return { activeClass: &#39;active&#39;, errorClass: &#39;text-danger&#39; } }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div :class=&quot;[activeClass, errorClass]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 在数组中有条件地渲染某个 class，可以使用三元表达式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div :class=&quot;[isActive ? activeClass : &#39;&#39;, errorClass]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 也可以在数组中嵌套对象 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div :class=&quot;[{ active: isActive }, errorClass]&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="在组件上使用" tabindex="-1">在组件上使用 <a class="header-anchor" href="#在组件上使用" aria-hidden="true">#</a></h3><p>示例：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;">&lt;!-- 1.只有一个根元素的组件 --&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 子组件模板 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;p class=&quot;foo bar&quot;&gt;Hi!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 在使用组件时，也可使用v-bind绑定 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;MyComponent class=&quot;baz boo&quot; :class=&quot;{ active: isActive }&quot; /&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 渲染为 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;p class=&quot;foo bar baz boo active&quot;&gt;Hi&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 2.组件有多个根元素 --&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- MyComponent 模板使用 $attrs 属性来实现指定 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;p :class=&quot;$attrs.class&quot;&gt;Hi!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;span&gt;This is a child component&lt;/span&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 使用组件 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;MyComponent class=&quot;baz&quot; /&gt;</span></span>
<span class="line"><span style="color:#7F848E;">&lt;!-- 渲染为 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;p class=&quot;baz&quot;&gt;Hi!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;span&gt;This is a child component&lt;/span&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;">&lt;!-- 1.只有一个根元素的组件 --&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 子组件模板 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p class=&quot;foo bar&quot;&gt;Hi!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 在使用组件时，也可使用v-bind绑定 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;MyComponent class=&quot;baz boo&quot; :class=&quot;{ active: isActive }&quot; /&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 渲染为 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p class=&quot;foo bar baz boo active&quot;&gt;Hi&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 2.组件有多个根元素 --&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- MyComponent 模板使用 $attrs 属性来实现指定 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p :class=&quot;$attrs.class&quot;&gt;Hi!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span&gt;This is a child component&lt;/span&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 使用组件 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;MyComponent class=&quot;baz&quot; /&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- 渲染为 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p class=&quot;baz&quot;&gt;Hi!&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span&gt;This is a child component&lt;/span&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="计算属性" tabindex="-1">计算属性 <a class="header-anchor" href="#计算属性" aria-hidden="true">#</a></h2><blockquote><p>官网：<a href="https://cn.vuejs.org/guide/essentials/computed.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/essentials/computed.html</a></p></blockquote><h3 id="应用场景" tabindex="-1">应用场景： <a class="header-anchor" href="#应用场景" aria-hidden="true">#</a></h3><ol><li>模版中，较长的表达式会让模版变得复杂和难以维护，为了解决这个问题 computed 孕育而生；</li><li>具有缓存效果，提示了性能，当依赖数据未发生变化，调用的是缓存的数据；</li></ol><p>对于任何包含响应式数据的 <code>复杂逻辑</code>，都应该使用 <code>计算属性</code></p><h3 id="计算属性和函数方法" tabindex="-1">计算属性和函数方法 <a class="header-anchor" href="#计算属性和函数方法" aria-hidden="true">#</a></h3><p>计算属性是基于它们的反应依赖滚系缓存的。计算属性只在相关响应式依赖发生改变时它们才会重新求值。</p><p>相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。</p><blockquote><p>我们为什么需要缓存？</p></blockquote><p>假设我们有一个性能开销比较大的计算属性 list，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 list。如果没有缓存，我们将不可避免的多次执行 list 的 getter！如果你不希望有缓存，请用 method 来替代。 示例代码：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">export default { data() { return { author: { name: &#39;John Doe&#39;, books: [ &#39;Vue 2 -</span></span>
<span class="line"><span style="color:#ABB2BF;">Advanced Guide&#39;, &#39;Vue 3 - Basic Guide&#39;, &#39;Vue 4 - The Mystery&#39; ] } } }, computed:</span></span>
<span class="line"><span style="color:#ABB2BF;">{ // 一个计算属性的 getter publishedBooksMessage() { // \`this\` 指向当前组件实例</span></span>
<span class="line"><span style="color:#ABB2BF;">return this.author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39; } } }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;p&gt;Has published books:&lt;/p&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;span&gt;{{ publishedBooksMessage }}&lt;/span&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">export default { data() { return { author: { name: &#39;John Doe&#39;, books: [ &#39;Vue 2 -</span></span>
<span class="line"><span style="color:#A6ACCD;">Advanced Guide&#39;, &#39;Vue 3 - Basic Guide&#39;, &#39;Vue 4 - The Mystery&#39; ] } } }, computed:</span></span>
<span class="line"><span style="color:#A6ACCD;">{ // 一个计算属性的 getter publishedBooksMessage() { // \`this\` 指向当前组件实例</span></span>
<span class="line"><span style="color:#A6ACCD;">return this.author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39; } } }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;p&gt;Has published books:&lt;/p&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;span&gt;{{ publishedBooksMessage }}&lt;/span&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="侦听器" tabindex="-1">侦听器 <a class="header-anchor" href="#侦听器" aria-hidden="true">#</a></h2><blockquote><p>官网:<a href="https://cn.vuejs.org/guide/essentials/watchers.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/essentials/watchers.html</a></p></blockquote><h3 id="应用场景-1" tabindex="-1">应用场景： <a class="header-anchor" href="#应用场景-1" aria-hidden="true">#</a></h3><ol><li>自定义的监听器，用于更方便地监听想监听的响应式数据</li><li>当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的</li></ol><h3 id="options-api-实现-watch" tabindex="-1">Options API 实现 Watch <a class="header-anchor" href="#options-api-实现-watch" aria-hidden="true">#</a></h3><p>Options API 中的 <code>watch</code> 监听的数据必须是 <code>data</code> 中声明的或者父组件传递过来的 <code>props</code> 中的数据，当发生变化时，会触发其他操作。</p><p><strong>普通的 watch</strong></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">export default { data() { return { sourceData: [], total: 0, }; }, props:</span></span>
<span class="line"><span style="color:#ABB2BF;">[&#39;dataList&#39;], watch: { dataList: function (newVal, oldVal) { this.total =</span></span>
<span class="line"><span style="color:#ABB2BF;">newVal.length; this.sourceData = newVal; }, }, };</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">export default { data() { return { sourceData: [], total: 0, }; }, props:</span></span>
<span class="line"><span style="color:#A6ACCD;">[&#39;dataList&#39;], watch: { dataList: function (newVal, oldVal) { this.total =</span></span>
<span class="line"><span style="color:#A6ACCD;">newVal.length; this.sourceData = newVal; }, }, };</span></span>
<span class="line"></span></code></pre></div><p>在 <code>list</code> 传值成功的前提下，有时候会出现直接在 <code>watch</code> 里面通过 <code>this.list</code> 是无法拿到的，总是显示 <code>undefined</code>。然后需要通过 <code>newVal</code> 和 <code>oldVal</code> 这么处理，才能拿到 <code>list</code> 的值。</p><p><strong>对象的 watch</strong></p><ol><li>对象和数组都是引用类型，引用类型变量存的是地址，地址没有变，所以不会触发 <code>watch</code>。这时我们需要进行深度监听，啾需要加上属性 <code>deep: true</code></li><li><code>watch</code> 有一个特点，当值第一次绑定的时候，不会执行监听函数，只有值发生变化时才会执行，如果想要最初绑定值的时候也执行函数，需要加 <code>immediate</code> 属性</li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">export default { data() { return { info: { foo: 52, bar: &#39;1&#39;, }, }; }, watch: {</span></span>
<span class="line"><span style="color:#ABB2BF;">info: { handler(newValue, oldValue) { console.log(newValue); }, deep: true, },</span></span>
<span class="line"><span style="color:#ABB2BF;">}, };</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">export default { data() { return { info: { foo: 52, bar: &#39;1&#39;, }, }; }, watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">info: { handler(newValue, oldValue) { console.log(newValue); }, deep: true, },</span></span>
<span class="line"><span style="color:#A6ACCD;">}, };</span></span>
<span class="line"></span></code></pre></div><blockquote><p>⚠️ 注意：上述侦听器会层层往下遍历，给对象的所有属性都加上这个监听器，但是这样<code>性能开销就非常大</code>，修改对象中的任意一个属性都会触发侦听器中的 <code>handler</code>。如果只需要对对象的某个属性发生变化进行侦听，则可以通过计算属性 <code>computed</code> 作为中间层进行侦听，或使用<code>字符串</code>的形式定义侦听器侦听的属性。</p></blockquote><p><strong>对象属性的 watch</strong> 使用计算属性 <code>computed</code> 作为中间层进行侦听。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">export default { data() { return { info: { foo: 52, bar: &#39;1&#39;, }, }; }, computed:</span></span>
<span class="line"><span style="color:#ABB2BF;">{ infoBar() { return this.info.bar; }, }, watch: { infoBar(newValue, oldValue) {</span></span>
<span class="line"><span style="color:#ABB2BF;">console.log(newValue); }, }, };</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">export default { data() { return { info: { foo: 52, bar: &#39;1&#39;, }, }; }, computed:</span></span>
<span class="line"><span style="color:#A6ACCD;">{ infoBar() { return this.info.bar; }, }, watch: { infoBar(newValue, oldValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(newValue); }, }, };</span></span>
<span class="line"></span></code></pre></div><p>或者使用字符串形式进行监听。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">export default { data() { return { info: { foo: 52, bar: &#39;1&#39;, }, }; }, watch: {</span></span>
<span class="line"><span style="color:#ABB2BF;">&#39;info.bar&#39;: { handler: (newValue, oldValue) { console.log(newValue); },</span></span>
<span class="line"><span style="color:#ABB2BF;">immediate: true } }, };</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">export default { data() { return { info: { foo: 52, bar: &#39;1&#39;, }, }; }, watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;info.bar&#39;: { handler: (newValue, oldValue) { console.log(newValue); },</span></span>
<span class="line"><span style="color:#A6ACCD;">immediate: true } }, };</span></span>
<span class="line"></span></code></pre></div><p><strong>注销 watch</strong></p><p>使用后要注销 <code>watch</code>，因为组件经常要被销毁，比如我们跳一个路由，从一个页面跳到另一个页面，那么原来页面的 <code>watch</code> 其实就没用了，这时候我们应该注销原来页面的 <code>watch</code>，不然的话可能会导致内存移除。好在我们平时 <code>watch</code> 都是写在组件的选项中，他会<strong>随着组件的销毁而销毁</strong>。</p><h2 id="生命周期钩子" tabindex="-1">生命周期钩子 <a class="header-anchor" href="#生命周期钩子" aria-hidden="true">#</a></h2><blockquote><p>官网：<a href="https://cn.vuejs.org/api/options-lifecycle.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/api/options-lifecycle.html</a></p></blockquote><p><img src="https://cn.vuejs.org/assets/lifecycle.16e4c08e.png" alt="生命周期"></p><h2 id="自定义组件" tabindex="-1">自定义组件 <a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a></h2><blockquote><p>官网：<a href="https://cn.vuejs.org/guide/essentials/component-basics.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/guide/essentials/component-basics.html</a></p></blockquote><h2 id="内置组件" tabindex="-1">内置组件 <a class="header-anchor" href="#内置组件" aria-hidden="true">#</a></h2><h3 id="transition" tabindex="-1"><code>&lt;Transition&gt;</code> <a class="header-anchor" href="#transition" aria-hidden="true">#</a></h3><h3 id="transitiongroup" tabindex="-1"><code>&lt;TransitionGroup&gt;</code> <a class="header-anchor" href="#transitiongroup" aria-hidden="true">#</a></h3><h3 id="keepalive" tabindex="-1"><code>&lt;KeepAlive&gt;</code> <a class="header-anchor" href="#keepalive" aria-hidden="true">#</a></h3><h3 id="teleport" tabindex="-1"><code>&lt;Teleport&gt;</code> <a class="header-anchor" href="#teleport" aria-hidden="true">#</a></h3>`,60);function m(n,k,F,D,w,_){const o=c,p=r("ClientOnly");return t(),d("div",null,[C,u(p,null,{default:h(()=>{var e,l;return[(((e=n.$frontmatter)==null?void 0:e.aside)??!0)&&(((l=n.$frontmatter)==null?void 0:l.showArticleMetadata)??!1)?(t(),g(o,{key:0,article:n.$frontmatter},null,8,["article"])):v("",!0)]}),_:1}),b,q,s("ol",null,[s("li",null,[a("使用"),s("code",null,y(),1),a("可以在 html 中绑定响应式数据，还可以进行表达式计算(仅支持单一表达式)；")])]),f])}const j=i(B,[["render",m]]);export{E as __pageData,j as default};
