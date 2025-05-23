import{_ as c}from"./chunks/ArticleMetadata.f06b230e.js";import{_ as t,i as r,o as l,c as i,g as y,w as A,e as d,j as D,b as p,f as C,a as B}from"./app.f6f466d0.js";const F="/vitepress-blog/assets/202210262026166.bf550ff7.png",_="/vitepress-blog/assets/202210262026266.299da677.png",u="/vitepress-blog/assets/202210262026566.0b098c6c.png",O=JSON.parse('{"title":"Docker 安装 OpenLDAP 详细步骤","description":"","frontmatter":{"title":"Docker 安装 OpenLDAP 详细步骤","author":"查尔斯","date":"2022/10/26 20:28","categories":["杂碎逆袭史"],"tags":["LDAP","Docker","容器"],"showComment":false},"headers":[{"level":2,"title":"拉取镜像","slug":"拉取镜像","link":"#拉取镜像","children":[]},{"level":2,"title":"运行容器","slug":"运行容器","link":"#运行容器","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"Docker Compose脚本","slug":"docker-compose脚本","link":"#docker-compose脚本","children":[]}],"relativePath":"categories/fragments/2022/10/26/Docker安装OpenLDAP.md","lastUpdated":1672153722000}'),m={name:"categories/fragments/2022/10/26/Docker安装OpenLDAP.md"},k=p("h1",{id:"docker-安装-openldap-详细步骤",tabindex:"-1"},[C("Docker 安装 OpenLDAP 详细步骤 "),p("a",{class:"header-anchor",href:"#docker-安装-openldap-详细步骤","aria-hidden":"true"},"#")],-1),v=B(`<div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>笔者下面的步骤及配置是基于指定版本的实践，大多数程序大多数情况下在相差不大的版本时可以直接参考。（当然了，即使是非 Docker 方式安装程序也是一样道理）</p></div><h2 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>拉取镜像时需要明确镜像版本（Tag）。</p></div><p>不指定版本（Tag）就拉取镜像，那拉取下来的镜像版本（Tag）默认是 <code>latest</code>（最新的）。<code>latest</code> 会跟随 Docker Registry 中的记录变化，现在拉取下来的 <code>latest</code> 是 x1 版本，但隔了一段时间后你在其他机器上再拉取 <code>latest</code> 可能就是 x2 版本了。</p><p>变化的版本，不利于生产环境部署的稳定。无论是后续在其他环境部署还是扩容集群等场景均要求根据架构要求指定好版本。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">docker pull osixia/openldap:1.5.0</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">docker pull osixia/openldap:1.5.0</span></span>
<span class="line"></span></code></pre></div><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p><strong>下方的配置，切记要根据个人实际情况来修改。</strong></p></div><ul><li>容器的名称</li><li>镜像名称:版本</li><li>是否设置自启动？</li><li>是否端口映射？</li><li>环境变量配置</li><li>映射的话映射到宿主机哪个端口？</li><li>是否挂载卷？</li><li>挂载的话要挂载宿主机哪个目录？</li><li>......</li><li>等自定义配置</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># LDAP_ORGANISATION 组织名称，默认为 Example Inc</span></span>
<span class="line"><span style="color:#7F848E;"># LDAP_DOMAIN 域，默认为 example.org</span></span>
<span class="line"><span style="color:#7F848E;"># LDAP_ADMIN_PASSWORD 管理员密码，默认为 admin</span></span>
<span class="line"><span style="color:#7F848E;"># LDAP_TLS_VERIFY_CLIENT TLS验证客户端</span></span>
<span class="line"><span style="color:#7F848E;">#   demand：默认。检查客户端证书，没有证书或证书错误都将立即终止连接</span></span>
<span class="line"><span style="color:#7F848E;">#   try：检查客户端证书，没有证书（允许连接），证书错误（终止连接）</span></span>
<span class="line"><span style="color:#7F848E;">#   allow：检查客户端证书，没有证书或证书错误，都允许连接</span></span>
<span class="line"><span style="color:#7F848E;">#   never：不验证客户端证书</span></span>
<span class="line"><span style="color:#ABB2BF;">docker run -d \\</span></span>
<span class="line"><span style="color:#ABB2BF;">--name openldap osixia/openldap:1.5.0 \\</span></span>
<span class="line"><span style="color:#ABB2BF;">--restart=always \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_ORGANISATION=</span><span style="color:#98C379;">&quot;baidu&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_DOMAIN=</span><span style="color:#98C379;">&quot;baidu.com&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_ADMIN_PASSWORD=</span><span style="color:#98C379;">&quot;123456&quot;</span><span style="color:#ABB2BF;"> \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-e LDAP_TLS_VERIFY_CLIENT=try \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-p 389:389 -p 636:636 \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v /opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d \\</span></span>
<span class="line"><span style="color:#ABB2BF;">-v /opt/disk/docker/volumes/openldap/data:/var/lib/ldap \\</span></span>
<span class="line"><span style="color:#7F848E;"># 使用该参数，容器内的 root 用户才拥有真正的 root 权限</span></span>
<span class="line"><span style="color:#ABB2BF;">--privileged=true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;"># LDAP_ORGANISATION 组织名称，默认为 Example Inc</span></span>
<span class="line"><span style="color:#676E95;"># LDAP_DOMAIN 域，默认为 example.org</span></span>
<span class="line"><span style="color:#676E95;"># LDAP_ADMIN_PASSWORD 管理员密码，默认为 admin</span></span>
<span class="line"><span style="color:#676E95;"># LDAP_TLS_VERIFY_CLIENT TLS验证客户端</span></span>
<span class="line"><span style="color:#676E95;">#   demand：默认。检查客户端证书，没有证书或证书错误都将立即终止连接</span></span>
<span class="line"><span style="color:#676E95;">#   try：检查客户端证书，没有证书（允许连接），证书错误（终止连接）</span></span>
<span class="line"><span style="color:#676E95;">#   allow：检查客户端证书，没有证书或证书错误，都允许连接</span></span>
<span class="line"><span style="color:#676E95;">#   never：不验证客户端证书</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name openldap osixia/openldap:1.5.0 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart=always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_ORGANISATION=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baidu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_DOMAIN=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">baidu.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_ADMIN_PASSWORD=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e LDAP_TLS_VERIFY_CLIENT=try \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 389:389 -p 636:636 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /opt/disk/docker/volumes/openldap/data:/var/lib/ldap \\</span></span>
<span class="line"><span style="color:#676E95;"># 使用该参数，容器内的 root 用户才拥有真正的 root 权限</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true</span></span>
<span class="line"></span></code></pre></div><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-hidden="true">#</a></h2><p>服务器开放好相应端口或设置好安全组规则后，我们使用 Apache Directory Studio 来验证一下。</p><p><img src="`+F+'" alt="202210262026166"></p><p><img src="'+_+'" alt="202210262026266"></p><p><img src="'+u+`" alt="202210262026566"></p><h2 id="docker-compose脚本" tabindex="-1">Docker Compose脚本 <a class="header-anchor" href="#docker-compose脚本" aria-hidden="true">#</a></h2><p>如果你是用的 docker-compose 来安装，下方附上相应 docker-compose.yml 脚本内容。</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="color:#E06C75;">services</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">openldap</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">container_name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">openldap</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">image</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">osixia/openldap:1.5.0</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">restart</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">always</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">environment</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_ORGANISATION</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">baidu</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_DOMAIN</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">baidu.com</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_ADMIN_PASSWORD</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">123456</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">LDAP_TLS_VERIFY_CLIENT</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">try</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">ports</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">389:389</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">636:636</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">volumes</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d</span></span>
<span class="line"><span style="color:#ABB2BF;">      - </span><span style="color:#98C379;">/opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">privileged</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">openldap</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openldap</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">osixia/openldap:1.5.0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_ORGANISATION</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">baidu</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_DOMAIN</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">baidu.com</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_ADMIN_PASSWORD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">LDAP_TLS_VERIFY_CLIENT</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">try</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">389:389</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">636:636</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">privileged</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"></span></code></pre></div><p>编写好 docker-compose.yml 脚本后，在脚本同级目录执行下方命令即可。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">docker-compose up -d</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"></span></code></pre></div>`,20);function E(s,h,g,L,I,P){const o=c,e=r("ClientOnly");return l(),i("div",null,[k,y(e,null,{default:A(()=>{var a,n;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=s.$frontmatter)==null?void 0:n.showArticleMetadata)??!1)?(l(),d(o,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),v])}const S=t(m,[["render",E]]);export{O as __pageData,S as default};
