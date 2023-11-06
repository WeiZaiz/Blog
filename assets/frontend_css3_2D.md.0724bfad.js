import{_ as a,c as s,o as e,R as n}from"./chunks/framework.efe0f0ba.js";const l="/Blog/assets/2d-coord.231211b7.png";const _=JSON.parse('{"title":"2D 转换","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css3/2D.md","filePath":"frontend/css3/2D.md","lastUpdated":null}'),t={name:"frontend/css3/2D.md"},r=n('<h1 id="_2d-转换" tabindex="-1">2D 转换 <a class="header-anchor" href="#_2d-转换" aria-label="Permalink to &quot;2D 转换&quot;">​</a></h1><h2 id="概括" tabindex="-1">概括 <a class="header-anchor" href="#概括" aria-label="Permalink to &quot;概括&quot;">​</a></h2><p>转换（transform）是 CSS3 中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果。</p><p>2D 转换主要用到以下三个属性：</p><ul><li>移动：translate</li><li>旋转：rotate</li><li>缩放：scale</li></ul><h2 id="二维坐标系" tabindex="-1">二维坐标系 <a class="header-anchor" href="#二维坐标系" aria-label="Permalink to &quot;二维坐标系&quot;">​</a></h2><p>2D 转换是改变标签在二维平面上的位置和形状的一种技术。</p><p><img src="'+l+`" alt="2d-coord"></p><h2 id="移动-translate" tabindex="-1">移动 translate <a class="header-anchor" href="#移动-translate" aria-label="Permalink to &quot;移动 translate&quot;">​</a></h2><p>移动可以改变元素在页面中的位置，类似定位。</p><p><strong>语法：</strong></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transform: translate(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y);</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translateX(n);</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translateY(n);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>注意：</strong></p><ul><li>定义 2D 转换中的移动，沿着 X 和 Y 轴移动元素</li><li>translate 最大的优点：不会影响到其他元素的位置</li><li>translate 设置百分比单位是相对于自身元素的 translate: (50%,50%);</li><li>translate 对行内标签没有效果</li></ul><h2 id="旋转-rotate" tabindex="-1">旋转 rotate <a class="header-anchor" href="#旋转-rotate" aria-label="Permalink to &quot;旋转 rotate&quot;">​</a></h2><p>旋转指的是让元素在2维平面内顺时针旋转或者逆时针旋转。</p><p><strong>语法：</strong></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transform: translate(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y);</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translateX(n);</span></span>
<span class="line"><span style="color:#A6ACCD;">transform: translateY(n);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>注意：</strong></p><ul><li>rotate 里面跟度数，单位是 deg 比如 rotate(45deg)</li><li>角度为正时，顺时针，负时，为逆时针</li><li>默认旋转的中心点是元素的中心点</li></ul><h2 id="缩放-scale" tabindex="-1">缩放 scale <a class="header-anchor" href="#缩放-scale" aria-label="Permalink to &quot;缩放 scale&quot;">​</a></h2><p>放大和缩小，只要给元素添加上了这个属性就能控制它放大还是缩小。</p><p><strong>语法：</strong></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transform: scale(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>注意：</strong></p><ul><li>transform: scale(1,1); 宽和高都放大一倍，相对于没有放大</li><li>transform: scale(2,2); 宽和高都放大了2倍</li><li>transform: scale(2); 只写一个参数，第二个参数则和第一个参数一样，相当于 scale(2,2)</li><li>transform: scale(0.5,0.5); 缩小 0.5 倍</li><li>sacle 缩放最大的优势：可以设置转换中心点缩放，默认以中心点缩放的，而且不影响其他盒子</li></ul><h2 id="综合写法" tabindex="-1">综合写法 <a class="header-anchor" href="#综合写法" aria-label="Permalink to &quot;综合写法&quot;">​</a></h2><p>同时有位移和其他属性的时候，记得要将位移放到最前，其顺序会影转换的效果，先旋转会改变坐标轴方向。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">transform: translate() rotate() scale();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>注意：</strong></p><ul><li>x，y 默认转换的中心点是元素的中心点</li><li>还可以给 x，y 设置 像素 或者 方位名词 （top bottom left right center）</li></ul>`,31),o=[r];function i(p,c,d,u,m,h){return e(),s("div",null,o)}const g=a(t,[["render",i]]);export{_ as __pageData,g as default};
