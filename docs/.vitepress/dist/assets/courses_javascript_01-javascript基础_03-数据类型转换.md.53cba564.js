import{_ as t}from"./chunks/ArticleMetadata.839094c8.js";import{_ as c,i as r,o as l,c as y,b as p,f as F,t as i,g as A,w as B,e as D,v as C,a as d}from"./app.59cdf3da.js";const j=JSON.parse('{"title":"数据类型转换","description":"","frontmatter":{"title":"数据类型转换","author":"Itway","date":"2023/01/04 22:52","categories":["JavaScript知识集"],"tags":["JavaScript基础"]},"headers":[{"level":2,"title":"基本规则","slug":"基本规则","link":"#基本规则","children":[{"level":3,"title":"ToString","slug":"tostring","link":"#tostring","children":[]},{"level":3,"title":"ToNumber","slug":"tonumber","link":"#tonumber","children":[]},{"level":3,"title":"ToBoolean","slug":"toboolean","link":"#toboolean","children":[]},{"level":3,"title":"ToPrimitive","slug":"toprimitive","link":"#toprimitive","children":[]}]},{"level":2,"title":"显式类型转换","slug":"显式类型转换","link":"#显式类型转换","children":[]},{"level":2,"title":"隐式类型转换","slug":"隐式类型转换","link":"#隐式类型转换","children":[{"level":3,"title":"运行环境","slug":"运行环境","link":"#运行环境","children":[]},{"level":3,"title":"运算符","slug":"运算符","link":"#运算符","children":[]}]},{"level":2,"title":"JavaScript 原始类型转换表","slug":"javascript-原始类型转换表","link":"#javascript-原始类型转换表","children":[]},{"level":2,"title":"经典试题","slug":"经典试题","link":"#经典试题","children":[]}],"relativePath":"courses/javascript/01-javascript基础/03-数据类型转换.md","lastUpdated":1746545041000}'),u={name:"courses/javascript/01-javascript基础/03-数据类型转换.md"},E={id:"frontmatter-title",tabindex:"-1"},q=p("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),g=d(`<p>JavaScript 作为一种弱类型的语言，不用像 C 语言那样要定义好数据类型，因为允许变量类型的 <strong>隐式类型转换</strong> 和允许 <strong>强制类型转换</strong>。我们在定义一个变量的时候，只需一个 <code>var</code>、 <code>let</code>、 <code>const</code> 搞定，不用担心数据的类型。</p><h2 id="基本规则" tabindex="-1">基本规则 <a class="header-anchor" href="#基本规则" aria-hidden="true">#</a></h2><p>从 ECMAScript Standard 中了解 Number、String、Boolean、Array 和 Object 之间的相互转换会更加直观。</p><h3 id="tostring" tabindex="-1">ToString <a class="header-anchor" href="#tostring" aria-hidden="true">#</a></h3><blockquote><p>此处所说的 ToString 并非对象的 <code>toString()</code> 方法，而是指其他类型的值转换为字符串类型的操作。</p></blockquote><p>下面列出常见转换为 String 类型的规则：</p><ul><li><code>null</code>：转为 <code>&quot;null&quot;</code></li><li><code>undefined</code>：转为 <code>&quot;undefined&quot;</code></li><li>Boolean 类型： <ul><li><code>true</code> 转为 <code>&quot;true&quot;</code></li><li><code>false</code> 转为 <code>&quot;false&quot;</code></li></ul></li><li>Number 类型：转为数字的字符串形式 <ul><li>如 <code>10</code> 转为 <code>&quot;10&quot;</code></li><li><code>1e21</code> 转为 <code>&quot;1e+21&quot;</code></li></ul></li><li>Array 类型：转为字符串将各元素以小写逗号 <code>,</code> 连接，相当于调用数组 <code>Array.prototype.join()</code> 方法 <ul><li>空数组转为空字符串 <code>&#39;&#39;</code></li><li>数组中 <code>null</code> 和 <code>undefined</code> 会被当作 <strong>空字符串</strong> 处理</li></ul></li><li>普通对象：转为字符串相当于直接使用 <code>Object.prototype.toString()</code>，返回 <code>[object Object]</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// &quot;null&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;undefined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;true&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;10&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1e21</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;1e+21&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;1,2,3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">([]);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">([</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;1,,3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">({});</span></span>
<span class="line"><span style="color:#7F848E;">// &#39;[object Objecr]&#39;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &quot;null&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;undefined&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;true&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;10&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1e21</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;1e+21&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;1,2,3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;1,,3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// &#39;[object Objecr]&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="tonumber" tabindex="-1">ToNumber <a class="header-anchor" href="#tonumber" aria-hidden="true">#</a></h3><ul><li><code>null</code>： 转为 <code>0</code></li><li><code>undefined</code>：转为 <code>NaN</code></li><li>String 类型：如果是纯数字形式，则转为对应的数字 <ul><li>空字符转为 <code>0</code></li><li>否则一律按转换失败处理，转为 <code>NaN</code></li></ul></li><li>Boolean 类型： <ul><li><code>true</code> 将被转为 <code>1</code></li><li><code>false</code> 将被转为 <code>0</code></li></ul></li><li>Array 类型：数组首先会被转为 <strong>原始数据类型</strong>，也就是<a href="https://tsejx.github.io/javascript-guidebook/basic-concept/data-types/type-conversion/#ToPrimitive" target="_blank" rel="noreferrer">ToPrimitive</a>，然后在根据转换后的原始类型按照上面的规则处理</li><li>对象：同数组的处理</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;10a&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">([]);</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">([</span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#7F848E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">({});</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span></code></pre></div><h3 id="toboolean" tabindex="-1">ToBoolean <a class="header-anchor" href="#toboolean" aria-hidden="true">#</a></h3><p>JavaScript 中假值只有 <code>false</code>、 <code>null</code>、 <code>undefined</code>、 <code>&quot;&quot;</code>、 <code>0</code> 和 <code>NaN</code>，其他值转为 Boolean 类型都为 <code>true</code>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// flase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">NaN</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// flase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// flase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">([]);</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">({});</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">Infinity</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// flase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// flase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// flase</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">([])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h3 id="toprimitive" tabindex="-1">ToPrimitive <a class="header-anchor" href="#toprimitive" aria-hidden="true">#</a></h3><blockquote><p>ToPrimitive 方法用于将引用类型转换为原始数据类型的操作</p></blockquote><p>🔬 值为引用数据类型时，会调用 JavaScript 内置的 <code>@@ToPrimitive(hint)</code> 方法来指定其目标类型。</p><ul><li>如果传入值为 Number 类型，则调用对象的 <code>valueOf()</code> 方法，若返回值为原始数据类型，则结束 <code>@@ToPrimitive</code> 操作，如果返回的不是原始数据类型，则继续调用对象的 <code>toString()</code> 方法，若返回值为原始数据类型，则结束 <code>@@ToPrimitive</code> 操作，如果返回的还是引用数据类型，则抛出异常。</li><li>如果传入值为 String 类型，则先调用 <code>toString()</code> 方法，再调用 <code>valueOf()</code> 方法。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">==</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#98C379;">&quot;1,2&quot;</span><span style="color:#ABB2BF;">[(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)] </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#ABB2BF;">    .</span><span style="color:#61AFEF;">valueOf</span><span style="color:#ABB2BF;">() </span><span style="color:#7F848E;">// &quot;[1,2]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    [(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)].</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;">// &quot;1,2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;[object Object]&quot;</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">valueOf</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">(); </span><span style="color:#7F848E;">// &quot;[object Object]&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">==</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1,2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">[(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)] </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// &quot;[1,2]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    [(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// &quot;1,2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[object Object]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// &quot;[object Object]&quot;</span></span>
<span class="line"></span></code></pre></div><p>值得一提的是对于 <strong>数值类型</strong> 的 <code>valueOf()</code> 函数的调用结果仍为数组，因此数组类型的隐式类型转换结果是字符串。</p><p>而在 ES6 中引入 Symbol 类型之后，JavaScript 会优先调用对象的 <code>[Symbol.toPrimitive]</code> 方法来将该对象转化为原始类型，那么方法的调用顺序就变为了：</p><ul><li>当 <code>obj[Symbol.toPrimitive](preferredType)</code> 方法存在时，优先调用该方法</li><li>如果 <code>preferredType</code> 参数为 String 类型，则依次尝试 <code>obj.toString()</code> 与 <code>obj.valueOf()</code></li><li>如果 <code>preferredType</code> 参数为 Number 类型或者默认值，则依次尝试 <code>obj.valueOf()</code> 与 <code>obj.toString()</code></li></ul><h2 id="显式类型转换" tabindex="-1">显式类型转换 <a class="header-anchor" href="#显式类型转换" aria-hidden="true">#</a></h2><p>通过手动进行类型转换，JavaScript 提供了以下转型函数：</p><ul><li>转换为数值类型 <ul><li><code>Number(mix)</code></li><li><code>parseInt(string, radix)</code></li><li><code>parseFloat(string)</code></li></ul></li><li>转换为字符串类型 <ul><li><code>toString(radix)</code></li><li><code>String(mix)</code></li></ul></li><li>转换为布尔类型 <ul><li><code>Boolean(mix)</code></li></ul></li></ul><h2 id="隐式类型转换" tabindex="-1">隐式类型转换 <a class="header-anchor" href="#隐式类型转换" aria-hidden="true">#</a></h2><p>在 JavaScript 中，当运算符在运算时，如果 <strong>两边数据不统一</strong>，CPU 就无法运算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成相同的数据类型再计算。</p><p>这种无需开发者手动转换，而由 <strong>编译器自动转换</strong> 的方式就称为 <strong>隐式类型转换</strong>。</p><p>JavaScript 的数据类型隐式转换主要分为三种情况：</p><ul><li>转换为 Boolean 类型</li><li>转换为 Number 类型</li><li>转换为 String 类型</li></ul><p>值在 <strong>逻辑判断</strong> 和 <strong>逻辑运算</strong> 时会隐式转换为 Boolean 类型。</p><p>Boolean 类型转换规则表：</p><table><thead><tr><th style="text-align:center;">数据值</th><th style="text-align:center;">转换后的值</th></tr></thead><tbody><tr><td style="text-align:center;">数字 <code>0</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>NaN</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;">空字符串 <code>&quot;&quot;</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>null</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>undefined</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;">非 <code>!0</code> 数字</td><td style="text-align:center;"><code>true</code></td></tr><tr><td style="text-align:center;">非空字符串 <code>!&quot;&quot;</code></td><td style="text-align:center;"><code>true</code></td></tr><tr><td style="text-align:center;">非 <code>!null</code> 对象类型</td><td style="text-align:center;"><code>true</code></td></tr></tbody></table><p>⚠️ <strong>注意事项</strong>：使用 <code>new</code> 运算符创建的对象隐式转换为 Boolean 类型的值都是 <code>true</code>。</p><p>连续两个非操作可以将一个数强制转换为 Boolean 类型。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#98C379;">&quot;Hello&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#ABB2BF;">{};</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#ABB2BF;">[];</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!!</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {};</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#89DDFF;">!!undefined;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!!null;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!!</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!!</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!!{};</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!!</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!!</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h3 id="运行环境" tabindex="-1">运行环境 <a class="header-anchor" href="#运行环境" aria-hidden="true">#</a></h3><p>很多内置函数期望传入的参数的数据类型是固定的，如 <code>alert(value)</code>，它期望传入的 <code>value</code> 为 String 类型，但是如果我们传入的是 Number 类型或者 Object 类型等非 String 类型的数据的时候，就会发生数据类型的隐式转换。这就是环境运行环境对数据类型转换的影响。</p><p>类似的方法还有：</p><ul><li><code>alert()</code></li><li><code>parseInt()</code></li></ul><h3 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-hidden="true">#</a></h3><p><strong>加号运算符</strong></p><p>当加号运算符作为一元运算符运算值时，它会将该值转换为 Number 类型。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#98C379;">&#39; &#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&#39;0&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&#39;10&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&#39;String&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]] </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[[</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">]] </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">{} </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {};</span></span>
<span class="line"><span style="color:#7F848E;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">+</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span></span>
<span class="line"><span style="color:#7F848E;">// 0</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">String</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]] </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]] </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#676E95;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#676E95;">// 0</span></span>
<span class="line"></span></code></pre></div><p>当加号运算符作为二元运算符操作值时，它会根据两边值类型进行数据类型隐式转换。</p><p>首先，当引用对象类型的值进行二元加号运算符运算时，会涉及到转换为原始数据类型的问题。事实上，当一个对象执行例如加法操作的时候，如果它是原始类型，那么就不需要转换。否则，将遵循以下规则：</p><ul><li>调用实例的 <code>valueOf()</code> 方法，如果有返回的是基础类型，停止下面的过程；否则继续</li><li>调用实例的 <code>toString()</code> 方法，如果有返回的是基础类型，停止下面的过程；否则继续</li><li>都没返回原始类型，就会报错</li></ul><p>如果运算符两边均为原始数据类型时，则按照以下规则解释：</p><ul><li><strong>字符串连接符</strong>：如果两个操作数中只要存在一个操作数为 String 类型，那么另一个操作数会调用 <code>String()</code> 方法转成字符串然后拼接</li><li><strong>算术运算符</strong>：如果两个操作数都不是 String 类型，两个操作数会调用 <code>Number()</code> 方法隐式转换为 Number 类型（如果无法成功转换成数字，则变为 <code>NaN</code>，再往下操作），然后进行加法算术运算</li></ul><p>值转换为 Number 类型和 String 类型都会遵循一个原则：如果该值为原始数据类型，则直接转换为 String 类型或 Number 类型。如果该值为引用数据类型，那么先通过固定的方法将复杂值转换为原始数据类型，再转为 String 类型或 Number 类型。</p><p>⚠️ <strong>注意事项</strong>：当 <code>{} + 任何值</code> 时， 前一个 <code>{}</code> 都会被 JavaScript 解释成空块并忽略他。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">             </span><span style="color:#7F848E;">// &quot;11&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">           </span><span style="color:#7F848E;">// &quot;11&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;">// &quot;1true&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">NaN</span><span style="color:#ABB2BF;">           </span><span style="color:#7F848E;">// &quot;NaN&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []            </span><span style="color:#7F848E;">// &quot;1&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> {}            </span><span style="color:#7F848E;">// &quot;1[object Object]&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){}  </span><span style="color:#7F848E;">// &quot;1function(){}&quot;</span></span>
<span class="line"><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Boolean</span><span style="color:#ABB2BF;">() </span><span style="color:#7F848E;">// &quot;1false&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">NaN</span><span style="color:#ABB2BF;">             </span><span style="color:#7F848E;">// NaN</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;true&quot;</span><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;">// &quot;1true&quot;</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;">// 2</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">       </span><span style="color:#7F848E;">// NaN</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []              </span><span style="color:#7F848E;">// &quot;1&quot;</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">]          </span><span style="color:#7F848E;">// &quot;11,2&quot;</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> {}              </span><span style="color:#7F848E;">// &quot;1[object Object]&quot;</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){}    </span><span style="color:#7F848E;">// &quot;1function(){}&quot;</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Number</span><span style="color:#ABB2BF;">()        </span><span style="color:#7F848E;">// 1</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">String</span><span style="color:#ABB2BF;">()        </span><span style="color:#7F848E;">// &quot;1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []             </span><span style="color:#7F848E;">// &quot;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">{} </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> {}             </span><span style="color:#7F848E;">// &quot;[object Object][object Object]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">{} </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []             </span><span style="color:#7F848E;">// 0</span></span>
<span class="line"><span style="color:#ABB2BF;">{a: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">} </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">          </span><span style="color:#7F848E;">// 1</span></span>
<span class="line"><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> {}             </span><span style="color:#7F848E;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">{}            </span><span style="color:#7F848E;">// &quot;false&quot;</span></span>
<span class="line"><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []            </span><span style="color:#7F848E;">// &quot;false&quot;</span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> {}             </span><span style="color:#7F848E;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">{} </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">             </span><span style="color:#7F848E;">// 0</span></span>
<span class="line"><span style="color:#ABB2BF;">[][</span><span style="color:#98C379;">&quot;map&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []      </span><span style="color:#7F848E;">// &quot;function map(){ [native code] }&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">[][</span><span style="color:#98C379;">&quot;a&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []        </span><span style="color:#7F848E;">// &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">[][[]] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []         </span><span style="color:#7F848E;">// &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#56B6C2;">+!!</span><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> []          </span><span style="color:#7F848E;">// 1</span></span>
<span class="line"><span style="color:#56B6C2;">+!!</span><span style="color:#ABB2BF;">[]               </span><span style="color:#7F848E;">// 1</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">{}                </span><span style="color:#7F848E;">// NaN</span></span>
<span class="line"><span style="color:#D19A66;">1</span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;">[]                </span><span style="color:#7F848E;">// 1</span></span>
<span class="line"><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;">// 0</span></span>
<span class="line"><span style="color:#ABB2BF;">{} </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">              </span><span style="color:#7F848E;">// -1</span></span>
<span class="line"><span style="color:#ABB2BF;">[] </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> []           </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#ABB2BF;">[][</span><span style="color:#98C379;">&#39;push&#39;</span><span style="color:#ABB2BF;">](</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">)       </span><span style="color:#7F848E;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">[]</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">[])[</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">[]]       </span><span style="color:#7F848E;">// &quot;f&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">[]</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">[])[</span><span style="color:#56B6C2;">+!!</span><span style="color:#ABB2BF;">[]]     </span><span style="color:#7F848E;">// &quot;a&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// &quot;11&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;">// &quot;11&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;">// &quot;1true&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;">// &quot;NaN&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []            </span><span style="color:#676E95;">// &quot;1&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// &quot;1[object Object]&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// &quot;1function(){}&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Boolean</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">// &quot;1false&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// NaN</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;">// &quot;1true&quot;</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// 2</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;">// NaN</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []              </span><span style="color:#676E95;">// &quot;1&quot;</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]          </span><span style="color:#676E95;">// &quot;11,2&quot;</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;">// &quot;1[object Object]&quot;</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// &quot;1function(){}&quot;</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Number</span><span style="color:#A6ACCD;">()        </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">String</span><span style="color:#A6ACCD;">()        </span><span style="color:#676E95;">// &quot;1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []             </span><span style="color:#676E95;">// &quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// &quot;[object Object][object Object]&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []             </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">          </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!{}</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// &quot;false&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []            </span><span style="color:#676E95;">// &quot;false&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#A6ACCD;">[][</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">map</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []      </span><span style="color:#676E95;">// &quot;function map(){ [native code] }&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">[][</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []        </span><span style="color:#676E95;">// &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">[][[]] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []         </span><span style="color:#676E95;">// &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">+!!</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> []          </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#89DDFF;">+!!</span><span style="color:#A6ACCD;">[]               </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">-{}</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;">// NaN</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">[]                </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;">// 0</span></span>
<span class="line"><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;">// -1</span></span>
<span class="line"><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> []           </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">[][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">push</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">](</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)       </span><span style="color:#676E95;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">[])[</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">[]]       </span><span style="color:#676E95;">// &quot;f&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">[])[</span><span style="color:#89DDFF;">+!!</span><span style="color:#A6ACCD;">[]]     </span><span style="color:#676E95;">// &quot;a&quot;</span></span>
<span class="line"></span></code></pre></div><p><strong>相等运算符</strong></p><p>相等运算符 <code>==</code> 会对操作值进行隐式转换后进行比较</p><ul><li>如果其中一个操作值为布尔值，则在比较之前先将其转换为数值</li><li>如果其中一个操作值为字符串，另一个操作值为数值，则通过 <code>Number()</code> 函数将字符串转换为数值</li><li>如果其中一个操作值是对象，另一个不是，则调用对象的 <code>valueOf()</code> 方法，得到的结果按照前面的规则进行比较</li><li><code>null</code> 与 <code>undefined</code> 是相等的</li><li>如果一个操作值为 <code>NaN</code>，则返回 <code>false</code></li><li>如果两个操作值都是对象，则比较它们是不是指向同一个对象</li></ul><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#98C379;">&#39;1&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#98C379;">&#39;1&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#98C379;">&#39;1&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> {}; </span><span style="color:#7F848E;">// false</span></span>
<span class="line"><span style="color:#98C379;">&#39;1&#39;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> []; </span><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"><span style="color:#E06C75;">nul</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">null</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;">// true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// false</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">nul </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><p><strong>关系运算符</strong></p><p><a href="https://tsejx.github.io/javascript-guidebook/basic-concept/expressions/comparation-operators" target="_blank" rel="noreferrer">关系运算符</a>：会把其他数据类型转换成 Number 之后再比较关系（除了 Date 类型对象）</p><ul><li>如果两个操作值都是数值，则进行 <strong>数值</strong> 比较</li><li>如果两个操作值都是字符串，则比较字符串对应的 <strong>ASCII 字符编码值</strong><ul><li>多个字符则从左往右依次比较</li></ul></li><li>如果只有一个操作值是数值，则将另一个操作值转换为数值，进行 <strong>数值</strong> 比较</li><li>如果一个操作数是对象，则调用 <code>valueOf()</code> 方法（如果对象没有 <code>valueOf()</code> 方法则调用 <code>toString()</code> 方法），得到的结果按照前面的规则执行比较</li><li>如果一个操作值是布尔值，则将其转换为 <strong>数值</strong>，再进行比较</li></ul><p>📍 <code>NaN</code> 是非常特殊的值，它不和任何类型的值相等，包括它自己，同时它与任何类型的值比较大小时都返回 <code>false</code>。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;2&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;10&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;abc&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;b&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&quot;abc&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;aad&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aad</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="javascript-原始类型转换表" tabindex="-1">JavaScript 原始类型转换表 <a class="header-anchor" href="#javascript-原始类型转换表" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">原始值</th><th style="text-align:center;">转换为数字类型</th><th style="text-align:center;">转换为字符串类型</th><th style="text-align:center;">转换为布尔类型</th></tr></thead><tbody><tr><td style="text-align:center;">false</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;false&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">true</td><td style="text-align:center;">1</td><td style="text-align:center;">&quot;true&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;0&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">&quot;1&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;0&quot;</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;0&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;000&quot;</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;000&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;1&quot;</td><td style="text-align:center;">1</td><td style="text-align:center;">&quot;1&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">NaN</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;NaN&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">Infinity</td><td style="text-align:center;">Infinity</td><td style="text-align:center;">&quot;Infinity&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">-Infinity</td><td style="text-align:center;">-Infinity</td><td style="text-align:center;">&quot;-Inifinity&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">&quot; &quot;</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot; &quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;20&quot;</td><td style="text-align:center;">20</td><td style="text-align:center;">&quot;20&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;Hello&quot;</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;Hello&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[]</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[20]</td><td style="text-align:center;">20</td><td style="text-align:center;">&quot;20&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[10, 20]</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;10,20&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[&quot;Hello&quot;]</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;Hello&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[&quot;Hello&quot;, &quot;World&quot;]</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;Hello,World&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">function(){}</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;function(){}&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">{}</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;[object Object]&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">null</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;null&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">undefined</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;undefined&quot;</td><td style="text-align:center;">false</td></tr></tbody></table><h2 id="经典试题" tabindex="-1">经典试题 <a class="header-anchor" href="#经典试题" aria-hidden="true">#</a></h2><blockquote><p><code>(a == 1) &amp;&amp; (a == 2) &amp;&amp; (a == 3)</code> 能不能为 <code>true</code>？</p></blockquote><p>事实上是可以的，就是因为在 <code>==</code> 比较的情况下，会进行隐式类型转换。如果参数不是 Date 对象实例，就会进行类型转换，先 <code>valueOf()</code> 再 <code>toString()</code>。所以，我们只要改变原生的 <code>valueOf()</code> 或者 <code>toString()</code> 方法就可以达到效果：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">num</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">valueOf</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">num</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">eq</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">eq</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#7F848E;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// 或者改写他的 toString 方法</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">num</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">Function</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">++</span><span style="color:#E06C75;">num</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">a</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;">// 还可以改写 ES6 的 Symbol 类型的 toPrimitive 的方法</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  [</span><span style="color:#E5C07B;">Symbol</span><span style="color:#E06C75;">.toPrimitive</span><span style="color:#ABB2BF;">]: (</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">++</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">  })(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> eq </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(eq)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 或者改写他的 toString 方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 还可以改写 ES6 的 Symbol 类型的 toPrimitive 的方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">Symbol</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">toPrimitive</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>每一次进行等号的比较，就会调用一次 <code>valueOf()</code> 方法，自增 1，所以能成立。 另外，减法也是同理：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">num</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">valueOf</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">num</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>参考文章：</strong></p><ul><li><a href="https://juejin.im/post/59ad2585f265da246a20e026" target="_blank" rel="noreferrer">📝 JavaScript 运算符规则与隐式类型转换详解</a></li></ul>`,71);function f(s,b,h,N,x,v){const o=t,e=r("ClientOnly");return l(),y("div",null,[p("h1",E,[F(i(s.$frontmatter.title)+" ",1),q]),A(e,null,{default:B(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!1)?(l(),D(o,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),g])}const k=c(u,[["render",f]]);export{j as __pageData,k as default};
