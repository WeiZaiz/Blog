import{_ as s,c as n,o as a,R as t}from"./chunks/framework.efe0f0ba.js";const F=JSON.parse('{"title":"过渡","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css3/transition.md","filePath":"frontend/css3/transition.md","lastUpdated":null}'),e={name:"frontend/css3/transition.md"},l=t(`<h1 id="过渡" tabindex="-1">过渡 <a class="header-anchor" href="#过渡" aria-label="Permalink to &quot;过渡&quot;">​</a></h1><p>过渡（transition）是 CSS3 中具有颠覆性的特征之一，可以在不使用 Flash 动画或JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。 过渡动画： 是从一个状态渐渐的过渡到另外一个状态，经常和 :hover 一起 搭配使用。</p><h2 id="transition-属性" tabindex="-1">transition 属性 <a class="header-anchor" href="#transition-属性" aria-label="Permalink to &quot;transition 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">transition-property</td><td style="text-align:center;">设置过渡效果的 CSS 属性的名称</td></tr><tr><td style="text-align:center;">transition-duration</td><td style="text-align:center;">完成过渡效果需要多少秒或毫秒</td></tr><tr><td style="text-align:center;">transition-timing-function</td><td style="text-align:center;">速度效果的速度曲线</td></tr><tr><td style="text-align:center;">transition-delay</td><td style="text-align:center;">过渡效果何时开始</td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">transition-property</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">none</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">all|property;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">none</td><td style="text-align:center;">没有属性会获得过渡效果</td></tr><tr><td style="text-align:center;">all</td><td style="text-align:center;">所有属性都将获得过渡效果</td></tr><tr><td style="text-align:center;">property</td><td style="text-align:center;">定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔</td></tr><tr><td style="text-align:center;">transition-delay</td><td style="text-align:center;">过渡效果何时开始</td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">transition-duration</span><span style="color:#A6ACCD;">: time;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">time</td><td style="text-align:center;">规定完成过渡效果需要花费的时间（以秒或毫秒计）。默认值是 0，意味着不会有效果</td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">transition-timing-function</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">linear</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">ease|</span><span style="color:#FFCB6B;">ease-in</span><span style="color:#A6ACCD;">|</span><span style="color:#FFCB6B;">ease-out</span><span style="color:#A6ACCD;">|</span><span style="color:#FFCB6B;">ease-in-out</span><span style="color:#A6ACCD;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">linear</td><td style="text-align:center;">匀速</td></tr><tr><td style="text-align:center;">ease</td><td style="text-align:center;">低速开始，然后加快，在结束变慢</td></tr><tr><td style="text-align:center;">ease-in</td><td style="text-align:center;">低速开始</td></tr><tr><td style="text-align:center;">ease-out</td><td style="text-align:center;">低速结束</td></tr><tr><td style="text-align:center;">ease-in-out</td><td style="text-align:center;">以低速开始和结束</td></tr><tr><td style="text-align:center;">steps()</td><td style="text-align:center;">指定了时间函数中的间隔数量（步长）</td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">transition-duration</span><span style="color:#A6ACCD;">: time;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:center;">值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">time</td><td style="text-align:center;">规定在过渡效果开始之前需要等待的时间，以秒或毫秒计，延迟</td></tr></tbody></table><h2 id="transition-简写" tabindex="-1">transition 简写 <a class="header-anchor" href="#transition-简写" aria-label="Permalink to &quot;transition 简写&quot;">​</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transition: 要过渡的属性 花费时间 运动曲线 何时开始;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>示例一</strong></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">                                              </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> width </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> transform </span><span style="color:#F78C6C;">2s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>示例二</strong></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 如果宽度和高度都需要过渡，则用 all */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> all </span><span style="color:#F78C6C;">.2s</span><span style="color:#A6ACCD;"> linear </span><span style="color:#F78C6C;">.3s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 鼠标经过盒子，宽度变600*/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,18),p=[l];function r(o,c,i,d,y,C){return a(),n("div",null,p)}const b=s(e,[["render",r]]);export{F as __pageData,b as default};
