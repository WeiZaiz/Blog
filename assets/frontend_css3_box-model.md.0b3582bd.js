import{_ as s,c as n,o as a,R as e}from"./chunks/framework.efe0f0ba.js";const l="/Blog/assets/standard.555409d2.png",p="/Blog/assets/strange.def6e977.png",o="/Blog/assets/case.229c70c8.png";const u=JSON.parse('{"title":"盒子模型","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css3/box-model.md","filePath":"frontend/css3/box-model.md","lastUpdated":null}'),t={name:"frontend/css3/box-model.md"},r=e('<h1 id="盒子模型" tabindex="-1">盒子模型 <a class="header-anchor" href="#盒子模型" aria-label="Permalink to &quot;盒子模型&quot;">​</a></h1><p>旧版的 IE 浏览器与其它浏览器解析盒子模型会出现差异，例如 IE 会把 border 边框 和 padding 内边距计算在盒子的 width / height 宽度里面，而其它浏览器则是相反，不包含 border 边框和 padding 内边距的。但是在实际开发中，前者是相对更加灵活的，但是 W3C 规范中规定了它们不能被包含在其中，为了解决这个问题，在新的 css3 标准中新增了 box-sizing 属性，用于切换两种盒子模型。</p><p>可以把所有 HTML 标签都理解成一个盒子，例如 div 标签。</p><p>盒子模型主要由 4 个部分组成：content padding border margin</p><h2 id="标准盒模型-w3c-盒模型-content-box" tabindex="-1">标准盒模型（W3C 盒模型） content-box <a class="header-anchor" href="#标准盒模型-w3c-盒模型-content-box" aria-label="Permalink to &quot;标准盒模型（W3C 盒模型） content-box&quot;">​</a></h2><p>当设置 box-sizing: content-box; 时，浏览器会按照 W3C 标准进行解析，将 border 和 padding 不计算在 width 或 height 其中。所以标准盒模型，会撑大容器。</p><p><img src="'+l+'" alt="standard"></p><p><code>width = content</code></p><p><code>height = content</code></p><h2 id="怪异盒模型-ie-盒模型-border-box" tabindex="-1">怪异盒模型（IE 盒模型） border-box <a class="header-anchor" href="#怪异盒模型-ie-盒模型-border-box" aria-label="Permalink to &quot;怪异盒模型（IE 盒模型） border-box&quot;">​</a></h2><p>当我们设置 box-sizing: content-box; 时，浏览器会按照旧版的 IE 标准进行解析，将 border 和 padding 计算在 width 或 height 其中。所以IE 盒模型 | 怪异盒模型，不会撑大容器。</p><p><img src="'+p+`" alt="strange"></p><p><code>width = content + padding + border</code></p><p><code>height = content + padding + border</code></p><h2 id="案例" tabindex="-1">案例 <a class="header-anchor" href="#案例" aria-label="Permalink to &quot;案例&quot;">​</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content-box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border-box</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">border</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    .content-box {</span></span>
<span class="line"><span style="color:#A6ACCD;">        padding: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        background-color: #5cd8a2;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-sizing: content-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    .border-box {</span></span>
<span class="line"><span style="color:#A6ACCD;">        padding: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        width: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        height: 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">        background-color: #ff8077;</span></span>
<span class="line"><span style="color:#A6ACCD;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><img src="`+o+'" alt="case"></p>',17),c=[r];function i(d,b,D,y,h,m){return a(),n("div",null,c)}const g=s(t,[["render",i]]);export{u as __pageData,g as default};