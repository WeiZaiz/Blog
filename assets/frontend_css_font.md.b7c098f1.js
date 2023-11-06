import{_ as s,c as a,o as n,R as l}from"./chunks/framework.efe0f0ba.js";const C=JSON.parse('{"title":"字体属性","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css/font.md","filePath":"frontend/css/font.md","lastUpdated":null}'),e={name:"frontend/css/font.md"},t=l(`<h1 id="字体属性" tabindex="-1">字体属性 <a class="header-anchor" href="#字体属性" aria-label="Permalink to &quot;字体属性&quot;">​</a></h1><p>fonts(字体)属性用于定义字体系列、大小、粗细、和文字样式（如斜体）。</p><h2 id="字体系列" tabindex="-1">字体系列 <a class="header-anchor" href="#字体系列" aria-label="Permalink to &quot;字体系列&quot;">​</a></h2><p>font-family 属性定义文本的字体系列。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">微软雅黑</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Arial</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Microsoft Yahei</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">微软雅黑</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="字体大小" tabindex="-1">字体大小 <a class="header-anchor" href="#字体大小" aria-label="Permalink to &quot;字体大小&quot;">​</a></h2><p>CSS 使用 font-size 属性定义字体大小。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>px（像素）大小是网页的最常用的单位</li><li>谷歌浏览器默认的文字大小为16px</li><li>不同浏览器可能默认显示的字号大小不一致，尽量给一个明确值大小，不要默认大小</li><li>可以给 body 指定整个页面文字的大小</li></ul><h2 id="字体粗细" tabindex="-1">字体粗细 <a class="header-anchor" href="#字体粗细" aria-label="Permalink to &quot;字体粗细&quot;">​</a></h2><p>CSS 使用 font-weight 属性设置文本字体的粗细。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">normal</td><td style="text-align:center;">默认值（不加粗）</td></tr><tr><td style="text-align:center;">bold</td><td style="text-align:center;">定义粗体</td></tr><tr><td style="text-align:center;">100-900</td><td style="text-align:center;">400等同于 normal，700等同于 bold，注意这个数字后面不跟单位，实际开发中更多用数字表示粗体</td></tr></tbody></table><h2 id="文字样式" tabindex="-1">文字样式 <a class="header-anchor" href="#文字样式" aria-label="Permalink to &quot;文字样式&quot;">​</a></h2><p>CSS 使用 font-style 属性设置文本的风格。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">normal</td><td style="text-align:center;">默认值，浏览器显示标准的字体样式 font-style: normal;</td></tr><tr><td style="text-align:center;">italic</td><td style="text-align:center;">斜体字体样式，平时很少给文字加斜体，反而要给斜体标签改为不倾斜字体</td></tr></tbody></table><h2 id="字体复合属性" tabindex="-1">字体复合属性 <a class="header-anchor" href="#字体复合属性" aria-label="Permalink to &quot;字体复合属性&quot;">​</a></h2><p>字体属性可以把以上文字样式综合来写, 这样可以更节约代码。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> font-style font-weight font-size/line-height font-family</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>使用font 属性时，必须按上面语法格式中的顺序书写，不能更换顺序，并且各个属性间以空格隔开</li><li>不需要设置的属性可以省略（取默认值），但必须保留 font-size 和 font-family 属性，否则font 属性将不起作用</li></ul>`,21),p=[t];function o(r,c,i,d,y,D){return n(),a("div",null,p)}const F=s(e,[["render",o]]);export{C as __pageData,F as default};