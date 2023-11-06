import{_ as s,c as n,o as a,R as e}from"./chunks/framework.efe0f0ba.js";const h=JSON.parse('{"title":"文本属性","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css/text.md","filePath":"frontend/css/text.md","lastUpdated":null}'),t={name:"frontend/css/text.md"},l=e(`<h1 id="文本属性" tabindex="-1">文本属性 <a class="header-anchor" href="#文本属性" aria-label="Permalink to &quot;文本属性&quot;">​</a></h1><p>CSS Text（文本）属性可定义文本的外观，比如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等。</p><h2 id="文本颜色" tabindex="-1">文本颜色 <a class="header-anchor" href="#文本颜色" aria-label="Permalink to &quot;文本颜色&quot;">​</a></h2><p>color 属性用于定义文本的颜色。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">写法</th></tr></thead><tbody><tr><td style="text-align:center;">预定义颜色值</td><td style="text-align:center;">三基色: red green blue</td></tr><tr><td style="text-align:center;">十六进制</td><td style="text-align:center;">#FFFFFF（ 开发中最常用的是十六进制），可简写为 # FFF</td></tr><tr><td style="text-align:center;">RGB</td><td style="text-align:center;">rgb(255, 0, 0)</td></tr><tr><td style="text-align:center;">RGBA</td><td style="text-align:center;">rgba(255, 0, 0, 0.5)</td></tr></tbody></table><h2 id="对齐文本" tabindex="-1">对齐文本 <a class="header-anchor" href="#对齐文本" aria-label="Permalink to &quot;对齐文本&quot;">​</a></h2><p>text-align 属性用于设置元素内文本内容的水平对齐方式。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">left</td><td style="text-align:center;">左对齐（默认）</td></tr><tr><td style="text-align:center;">right</td><td style="text-align:center;">右对齐</td></tr><tr><td style="text-align:center;">center</td><td style="text-align:center;">居中</td></tr></tbody></table><h2 id="装饰文本" tabindex="-1">装饰文本 <a class="header-anchor" href="#装饰文本" aria-label="Permalink to &quot;装饰文本&quot;">​</a></h2><p>text-decoration 属性规定添加到文本的修饰。可以给文本添加上划线、下划线、删除线等。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#A6ACCD;">：underline； </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">none</td><td style="text-align:center;">默认没有装饰（常用）</td></tr><tr><td style="text-align:center;">overline</td><td style="text-align:center;">上划线（几乎不用）</td></tr><tr><td style="text-align:center;">underline</td><td style="text-align:center;">下划线，像超链接a自带的下划线</td></tr><tr><td style="text-align:center;">line-through</td><td style="text-align:center;">删除线（不常用）</td></tr></tbody></table><h2 id="文本缩进" tabindex="-1">文本缩进 <a class="header-anchor" href="#文本缩进" aria-label="Permalink to &quot;文本缩进&quot;">​</a></h2><p>text-indent 属性用来指定文本的第一行的缩进，通常是将段落的首行缩进，通过设置该属性，所有元素的第一行都可以缩进一个给定的长度，甚至该长度可以是负值。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-indent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  em 是一个相对单位，就是当前元素（font-size) 1 个文字的大小, 如果当前元素没有设置大小，则会按照父元</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  素的 1 个文字大小。 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> 	</span><span style="color:#B2CCD6;">text-indent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="行间距-行高" tabindex="-1">行间距（行高） <a class="header-anchor" href="#行间距-行高" aria-label="Permalink to &quot;行间距（行高）&quot;">​</a></h2><p>line-height 属性用于设置行间的距离（行高）可以控制文字行与行之间的距离。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,20),p=[l];function r(o,c,i,d,y,b){return a(),n("div",null,p)}const u=s(t,[["render",r]]);export{h as __pageData,u as default};