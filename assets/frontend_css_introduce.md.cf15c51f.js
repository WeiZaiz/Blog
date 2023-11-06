import{_ as s,c as n,o as a,R as l}from"./chunks/framework.efe0f0ba.js";const d=JSON.parse('{"title":"CSS 介绍","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css/introduce.md","filePath":"frontend/css/introduce.md","lastUpdated":null}'),p={name:"frontend/css/introduce.md"},e=l(`<h1 id="css-介绍" tabindex="-1">CSS 介绍 <a class="header-anchor" href="#css-介绍" aria-label="Permalink to &quot;CSS 介绍&quot;">​</a></h1><h2 id="什么是-css" tabindex="-1">什么是 CSS ？ <a class="header-anchor" href="#什么是-css" aria-label="Permalink to &quot;什么是 CSS ？&quot;">​</a></h2><p>CSS 指层叠样式表 (Cascading Style Sheets)，理解为 CSS 样式就可以了。CSS 样式有什么作用呢？比如在页面中添加了一个 div ，想给这个 div 设置宽度、高度、背景色、阴影、内容字体样式等等，就是通过 CSS 样式来实现。也就是丰富 HTML 标签的样式。 现实生活举例，body 里面的所有标签就像是不同的一个人，每个人的特征都不同。style 里面定义的每一个样式，就代表买了一件衣服。这个衣服可以给任何一个人穿，也就是可以给任何一个标签使用。这个标签穿了衣服就会变得更好看。一个人可以穿多件衣服，也可以多个人穿同一件衣服。</p><h2 id="css-结构" tabindex="-1">CSS 结构 <a class="header-anchor" href="#css-结构" aria-label="Permalink to &quot;CSS 结构&quot;">​</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是网站标题</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">my-content</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my-content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">我是一个人，我穿了一件蓝色衣服</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="css-语法规范" tabindex="-1">CSS 语法规范 <a class="header-anchor" href="#css-语法规范" aria-label="Permalink to &quot;CSS 语法规范&quot;">​</a></h2><p>语法规则：选择器 + 类名 + 样式体</p><p>例如：.my-content {}</p><p>解析：. 代表类选择器、 my-content 代表类名、{} 样式写在里面</p>`,9),o=[e];function t(c,r,D,F,i,y){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{d as __pageData,b as default};
