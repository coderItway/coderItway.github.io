import{_ as t}from"./chunks/ArticleMetadata.839094c8.js";import{_ as c,i as r,o as l,c as i,g as d,w as A,e as y,v as C,b as p,f as D,a as F}from"./app.59cdf3da.js";const h="/vitepress-blog/assets/202208112010100.875fa5d2.png",f=JSON.parse('{"title":"执行Shell脚本，报java: command not found","description":"","frontmatter":{"title":"执行Shell脚本，报java: command not found","author":"查尔斯","date":"2022/08/11 20:19","categories":["Bug万象集"],"tags":["Linux","Shell"]},"headers":[{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]},{"level":2,"title":"解决方案1","slug":"解决方案1","link":"#解决方案1","children":[]},{"level":2,"title":"解决方案2","slug":"解决方案2","link":"#解决方案2","children":[]}],"relativePath":"categories/issues/2022/08/11/执行Shell脚本，报java command not found.md","lastUpdated":1746545041000}'),B={name:"categories/issues/2022/08/11/执行Shell脚本，报java command not found.md"},u=p("h1",{id:"执行shell脚本-报java-command-not-found",tabindex:"-1"},[D("执行Shell脚本，报java: command not found "),p("a",{class:"header-anchor",href:"#执行shell脚本-报java-command-not-found","aria-hidden":"true"},"#")],-1),v=F('<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-hidden="true">#</a></h2><p><strong>C：</strong> 今天笔者在公司的 dev 环境服务器上，将一个 Java 程序启动脚本做成了一个系统服务。本来是一件很简单的事情，但是在启动服务时，却报错了。</p><p>报的错误也是言简意赅：java: command not found。很直白的告诉了你，它找不到 java 命令。</p><p><img src="'+h+`" alt="202208112010100"></p><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-hidden="true">#</a></h2><p>既然是找不到 java 命令，首先要排查的自然是服务器里究竟有没有安装和配置好 Java 环境了，用 <code>java -version</code> 命令检测一下就可以了。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">[root@business11 ~]</span><span style="color:#7F848E;"># java -version</span></span>
<span class="line"><span style="color:#ABB2BF;">java version </span><span style="color:#98C379;">&quot;1.8.0_202&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">Java(TM) SE Runtime Environment (build 1.8.0_202-b08)</span></span>
<span class="line"><span style="color:#ABB2BF;">Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@business11 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># java -version</span></span>
<span class="line"><span style="color:#A6ACCD;">java version </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.8.0_202</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Java</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">TM</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> SE Runtime Environment </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">build 1.8.0_202-b08</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">Java HotSpot</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">TM</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 64-Bit Server VM </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">build 25.202-b08, mixed mode</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>Java 环境是配置好的，那还得是看脚本自身的问题了。其实，这个问题以前印象里也出现过，不过是很久以前初次使用 Shell 脚本的时候了，最终的问题点是因为直接写的脚本内容，没有添加 <code>#!/bin/bash</code> 声明导致的。</p><p>打开脚本内容看了看，这个声明也加着呢。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Java 启动脚本内容······</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Java 启动脚本内容······</span></span>
<span class="line"></span></code></pre></div><h2 id="解决方案1" tabindex="-1">解决方案1 <a class="header-anchor" href="#解决方案1" aria-hidden="true">#</a></h2><p>既然以往的经验不能提供帮助，那就对症下药，提示说找不到 java 命令，那说明它识别不到 Java 环境配置，帮它一把就得了呗。复制一份 Java 环境配置，放在脚本内容前，相当于每次执行这个脚本的时候，先做一次临时环境配置。</p><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>如果你要使用下方的配置，不要直接复制了事，记得将配置中的 JDK 安装路径，替换为你自己实际的 JDK 安装路径。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;">#!/bin/bash</span></span>
<span class="line"><span style="color:#ABB2BF;">JAVA_HOME=/opt/disk/java/jdk1.8.0_202 </span><span style="color:#7F848E;"># 如果你要使用，记得替换为你自己实际的 JDK 安装路径</span></span>
<span class="line"><span style="color:#ABB2BF;">CLASSPATH=.:</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#ABB2BF;">/lib.tools.jar</span></span>
<span class="line"><span style="color:#ABB2BF;">PATH=</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#ABB2BF;">/bin:</span><span style="color:#E06C75;">$PATH</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> JAVA_HOME CLASSPATH PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">Java 启动脚本内容······</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;">#!/bin/bash</span></span>
<span class="line"><span style="color:#A6ACCD;">JAVA_HOME=/opt/disk/java/jdk1.8.0_202 </span><span style="color:#676E95;"># 如果你要使用，记得替换为你自己实际的 JDK 安装路径</span></span>
<span class="line"><span style="color:#A6ACCD;">CLASSPATH=.:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME/lib.tools.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME/bin:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> JAVA_HOME CLASSPATH PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Java 启动脚本内容······</span></span>
<span class="line"></span></code></pre></div><h2 id="解决方案2" tabindex="-1">解决方案2 <a class="header-anchor" href="#解决方案2" aria-hidden="true">#</a></h2><p>这个问题的根源，其实是因为 <code>/etc/profile</code> 或者 <code>/etc/security/limit.d</code> 这些文件中配置的环境变量仅对通过 pam 登录的用户生效，systemd 系统服务是不读这些配置的，所以这就造成登录到终端时查看环境变量和手动启动应用都一切正常，但是系统服务无法正常启动应用。</p><p>所以，如果想让 systemd 系统服务使用环境变量也可以在编写的服务内指定好环境变量。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">[Unit]</span></span>
<span class="line"><span style="color:#ABB2BF;">Description=xxx</span></span>
<span class="line"><span style="color:#ABB2BF;">Wants=network-online.target</span></span>
<span class="line"><span style="color:#ABB2BF;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[Service]</span></span>
<span class="line"><span style="color:#7F848E;"># 如果你要使用，记得替换为你自己实际的 JDK 安装路径</span></span>
<span class="line"><span style="color:#ABB2BF;">Environment=</span><span style="color:#98C379;">&quot;JAVA_HOME=/opt/disk/java/jdk1.8.0_202&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">Environment=</span><span style="color:#98C379;">&quot;CLASSPATH=.:</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#98C379;">/lib.tools.jar&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">Environment=</span><span style="color:#98C379;">&quot;PATH=</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#98C379;">/bin:</span><span style="color:#E06C75;">$PATH</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">ExecStart=/bin/bash /opt/disk/xxx/start-schedule.sh</span></span>
<span class="line"><span style="color:#ABB2BF;">KillSignal=SIGTERM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[Install]</span></span>
<span class="line"><span style="color:#ABB2BF;">WantedBy=multi-user.target</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Unit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">Description=xxx</span></span>
<span class="line"><span style="color:#A6ACCD;">Wants=network-online.target</span></span>
<span class="line"><span style="color:#A6ACCD;">After=network-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Service</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># 如果你要使用，记得替换为你自己实际的 JDK 安装路径</span></span>
<span class="line"><span style="color:#A6ACCD;">Environment=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JAVA_HOME=/opt/disk/java/jdk1.8.0_202</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Environment=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CLASSPATH=.:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME</span><span style="color:#C3E88D;">/lib.tools.jar</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Environment=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME</span><span style="color:#C3E88D;">/bin:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">ExecStart=/bin/bash /opt/disk/xxx/start-schedule.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">KillSignal=SIGTERM</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Install</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">WantedBy=multi-user.target</span></span>
<span class="line"></span></code></pre></div><p>修改完系统服务，别忘了重新加载和重新启动。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#ABB2BF;">systemctl restart xxx</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart xxx</span></span>
<span class="line"></span></code></pre></div>`,20);function m(s,_,E,b,g,k){const e=t,o=r("ClientOnly");return l(),i("div",null,[u,d(o,null,{default:A(()=>{var a,n;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=s.$frontmatter)==null?void 0:n.showArticleMetadata)??!1)?(l(),y(e,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),v])}const x=c(B,[["render",m]]);export{f as __pageData,x as default};
