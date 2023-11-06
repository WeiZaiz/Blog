import{_ as s,c as t,o as a,R as n}from"./chunks/framework.efe0f0ba.js";const u=JSON.parse('{"title":"HTML5 标签","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/html5/tag.md","filePath":"frontend/html5/tag.md","lastUpdated":null}'),l={name:"frontend/html5/tag.md"},e=n(`<h1 id="html5-标签" tabindex="-1">HTML5 标签 <a class="header-anchor" href="#html5-标签" aria-label="Permalink to &quot;HTML5 标签&quot;">​</a></h1><h2 id="html5-新增的语义化标签" tabindex="-1">HTML5 新增的语义化标签 <a class="header-anchor" href="#html5-新增的语义化标签" aria-label="Permalink to &quot;HTML5 新增的语义化标签&quot;">​</a></h2><p>前布局基本用 div 来做。div 对于搜索引擎来说是没有语义的。表达的意思不强烈，无论是 pc 端还是 H5 端都可以使用 HTML5，不过移动端更方便使用。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">主体</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">头部</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">导航</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">article</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">定义文件某个区域</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">aside</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">侧边栏</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">aside</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">底部</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="html5-新增的多媒体标签" tabindex="-1">HTML5 新增的多媒体标签 <a class="header-anchor" href="#html5-新增的多媒体标签" aria-label="Permalink to &quot;HTML5 新增的多媒体标签&quot;">​</a></h2><p><strong>新增的多媒体标签主要包含两个 audio video</strong></p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">音频</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">视频</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="audio-常见属性" tabindex="-1">audio 常见属性 <a class="header-anchor" href="#audio-常见属性" aria-label="Permalink to &quot;audio 常见属性&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">autoplay</td><td style="text-align:center;">autoplay</td><td style="text-align:center;">音频就绪自动播放（谷歌浏览器需要添加 autoplay 来解决自动播放问题）</td></tr><tr><td style="text-align:center;">controls</td><td style="text-align:center;">controls</td><td style="text-align:center;">向用户显示播放控件</td></tr><tr><td style="text-align:center;">loop</td><td style="text-align:center;">loop</td><td style="text-align:center;">播放结束是否要继续播放音频，循环播放</td></tr><tr><td style="text-align:center;">src</td><td style="text-align:center;">url</td><td style="text-align:center;">音频地址</td></tr></tbody></table><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://noxussj.top/huxiyouhai.mp3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">controls</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">audio</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="video-常见属性" tabindex="-1">video 常见属性 <a class="header-anchor" href="#video-常见属性" aria-label="Permalink to &quot;video 常见属性&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">autoplay</td><td style="text-align:center;">autoplay</td><td style="text-align:center;">音频就绪自动播放（谷歌浏览器需要添加 autoplay 来解决自动播放问题）</td></tr><tr><td style="text-align:center;">controls</td><td style="text-align:center;">controls</td><td style="text-align:center;">向用户显示播放控件</td></tr><tr><td style="text-align:center;">loop</td><td style="text-align:center;">loop</td><td style="text-align:center;">播放结束是否要继续播放音频，循环播放</td></tr><tr><td style="text-align:center;">src</td><td style="text-align:center;">url</td><td style="text-align:center;">音频地址</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">像素</td><td style="text-align:center;">设置播放宽度</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">像素</td><td style="text-align:center;">设置播放高度</td></tr><tr><td style="text-align:center;">preload</td><td style="text-align:center;">auto(预先加载视频) none(不应加载视频)</td><td style="text-align:center;">规定是否预加载视频（如果有了autoplay，就忽略该属性）</td></tr><tr><td style="text-align:center;">poster</td><td style="text-align:center;">Imgurl</td><td style="text-align:center;">加载等待的画面图片</td></tr><tr><td style="text-align:center;">muted</td><td style="text-align:center;">muted</td><td style="text-align:center;">静音播放</td></tr></tbody></table><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://noxussj.top/oceans.mp4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">controls</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">video</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="html5-新增的input-类型" tabindex="-1">HTML5 新增的input 类型 <a class="header-anchor" href="#html5-新增的input-类型" aria-label="Permalink to &quot;HTML5 新增的input 类型&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">type=&quot;email&quot;</td><td style="text-align:center;">输入必须是 Email 类型</td></tr><tr><td style="text-align:center;">type=&quot;url&quot;</td><td style="text-align:center;">输入必须是 URL 类型</td></tr><tr><td style="text-align:center;">type=&quot;date&quot;</td><td style="text-align:center;">输入必须是日期类型</td></tr><tr><td style="text-align:center;">type=&quot;number&quot;</td><td style="text-align:center;">输入必须是数字类型</td></tr><tr><td style="text-align:center;">type=&quot;tel&quot;</td><td style="text-align:center;">手机号类型</td></tr><tr><td style="text-align:center;">type=&quot;time&quot;</td><td style="text-align:center;">输入必须是时间类型</td></tr><tr><td style="text-align:center;">type=&quot;month&quot;</td><td style="text-align:center;">输入必须是为月份类型</td></tr><tr><td style="text-align:center;">type=&quot;week&quot;</td><td style="text-align:center;">输入必须是为周类型</td></tr><tr><td style="text-align:center;">type=&quot;search&quot;</td><td style="text-align:center;">搜索框类型</td></tr><tr><td style="text-align:center;">type=&quot;color&quot;</td><td style="text-align:center;">生成一个颜色选择列表</td></tr></tbody></table><h2 id="html5-新增的表单属性" tabindex="-1">HTML5 新增的表单属性 <a class="header-anchor" href="#html5-新增的表单属性" aria-label="Permalink to &quot;HTML5 新增的表单属性&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">属性值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">required</td><td style="text-align:center;">required</td><td style="text-align:center;">表单拥有该属性，表示其内容不能为空，不填项</td></tr><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;">输入框提示文本</td><td style="text-align:center;">表单的提示信息，存在默认值将不显示</td></tr><tr><td style="text-align:center;">autofocus</td><td style="text-align:center;">autofocus</td><td style="text-align:center;">自动聚焦属性，页面加载完成自动聚焦到指定表单</td></tr><tr><td style="text-align:center;">autocomplete</td><td style="text-align:center;">输入必须是数字类型</td><td style="text-align:center;">当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项，默认已经打开，如 autocomplete=&quot;on&quot;, 关闭 autocomplete=&quot;off&quot; 需要放在表单内，同时加上 name 属性，同时成功提交</td></tr><tr><td style="text-align:center;">multiple</td><td style="text-align:center;">multiple</td><td style="text-align:center;">可以多选文件提交</td></tr><tr><td style="text-align:center;"><strong>可以通过以下设置方式修改 placeholder 里面的字体颜色</strong></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">placeholder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	 </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="canvas-绘图" tabindex="-1">canvas 绘图 <a class="header-anchor" href="#canvas-绘图" aria-label="Permalink to &quot;canvas 绘图&quot;">​</a></h2><p>在 HTML5 中提供了 canvas API ，允许在 canvas 画布上绘制图形，ie6、7、8 不兼容。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">myCanvas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">canvas</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> canvas </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myCanvas</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> context </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> canvas</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getContext</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">moveTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 绘制第一个点，坐标是 x, y（0, 0）</span></span>
<span class="line"><span style="color:#A6ACCD;">  context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lineTo</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 绘制第二个点，然后连线，坐标是（300, 300）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 线条宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">  context</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">strokeStyle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#058</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 线条颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">  context</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stroke</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 开始绘制</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="svg-path-矢量图形" tabindex="-1">svg path 矢量图形 <a class="header-anchor" href="#svg-path-矢量图形" aria-label="Permalink to &quot;svg path 矢量图形&quot;">​</a></h2><p>说明：默认自带了 width、height 样式，一般需要结合 path 使用，主要用于展示矢量图形</p><p>类型：内联元素 inline，占用位置根据矢量图形宽度决定</p><p>属性：</p><ul><li>svg 的 viewBox：viewBox=&quot;左上角的横坐标，左上角的纵坐标，截取的视区的宽度，截取的视区的高度&quot;</li><li>d：矢量图形路</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 1024 1024</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">path</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">d</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">M768 768a32 32 0 0 1 0 64H256a32 32 0 0 1 0-64h512zM512 192a32 32 0 0 1 32 32v345.504l128.64-128.608a32 32 0 0 1 42.496-2.496l2.784 2.496a32 32 0 0 1 2.496 42.464l-2.496 2.784-181.024 181.024a32 32 0 0 1-42.464 2.496l-2.784-2.496-181.024-181.024a32 32 0 0 1 42.464-47.744l2.784 2.496L480 565.024V224a32 32 0 0 1 32-32z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;&lt;/</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,27),o=[e];function p(r,c,y,i,d,D){return a(),t("div",null,o)}const g=s(l,[["render",p]]);export{u as __pageData,g as default};
