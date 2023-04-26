import{_ as n,X as s,Y as a,Z as t}from"./framework-99b63a27.js";const p={},o=t(`<h1 id="python-custom-formatting" tabindex="-1"><a class="header-anchor" href="#python-custom-formatting" aria-hidden="true">#</a> Python Custom Formatting</h1><p>Python f-strings use a formatting mini-language, the same as the older .format() function. After the colon comes short specifications for how to format the value:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> word <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>word<span class="token punctuation">:</span><span class="token format-spec">/^20</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
<span class="token string">&#39;///////Hello////////&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> amt <span class="token operator">=</span> <span class="token number">12345678</span>
<span class="token operator">&gt;&gt;</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>amt<span class="token punctuation">:</span><span class="token format-spec">20,</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
<span class="token string">&#39;          12,345,678&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Datetimes can use strftime syntax:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>now<span class="token punctuation">:</span><span class="token format-spec">%Y-%m on day %d</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
<span class="token string">&#39;2022-04 on day 14&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The reason datetime uses different formatting specs than strings is because datetime defines its own format method. Any object can define its own formatting mini-language. F-strings and .format() will use the format method on an object, and pass it the formatting directives being used:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">Confused</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">def</span> <span class="token function">__format__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> fmt<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;What is </span><span class="token interpolation"><span class="token punctuation">{</span>fmt<span class="token punctuation">}</span></span><span class="token string">?&quot;</span></span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> c <span class="token operator">=</span> Confused<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>c<span class="token punctuation">:</span><span class="token format-spec">xyz12</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
<span class="token string">&#39;What is xyz12?&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, format can be used for more useful formatting than Confused is doing...</p><p>Geographic latitude and longitude are conventionally presented in a few different formats: degrees; or degrees and minutes; or degrees, minutes and seconds. Then the numbers can have varying number of decimal places, and sometimes the units are represented by symbols.</p><p>Here’s an implementation of those possibilities in format. The format string starts with “d”, “dm”, or “dms” to indicate the basic format. The number of decimal places can be specified with “.N”. Finally, symbols can be added, either plain or fancy, by adding a quote or minute symbol:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> dataclasses<span class="token punctuation">,</span> re

<span class="token decorator annotation punctuation">@dataclasses<span class="token punctuation">.</span>dataclass</span>
<span class="token keyword">class</span> <span class="token class-name">LatLong</span><span class="token punctuation">:</span>
    lat<span class="token punctuation">:</span> <span class="token builtin">float</span>
    <span class="token builtin">long</span><span class="token punctuation">:</span> <span class="token builtin">float</span>

    <span class="token keyword">def</span> <span class="token function">__format__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> fmt<span class="token punctuation">)</span><span class="token punctuation">:</span>
        dms<span class="token punctuation">,</span> nfmt<span class="token punctuation">,</span> opts <span class="token operator">=</span> re<span class="token punctuation">.</span>fullmatch<span class="token punctuation">(</span><span class="token string">r&quot;(dm?s?)([.\\d]*)([′&#39;]?)&quot;</span><span class="token punctuation">,</span> fmt<span class="token punctuation">)</span><span class="token punctuation">.</span>groups<span class="token punctuation">(</span><span class="token punctuation">)</span>
        formatted <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> num <span class="token keyword">in</span> <span class="token punctuation">[</span>self<span class="token punctuation">.</span>lat<span class="token punctuation">,</span> self<span class="token punctuation">.</span><span class="token builtin">long</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            parts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">for</span> ms <span class="token keyword">in</span> dms<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                parts<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                num <span class="token operator">=</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token builtin">int</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span>
            parts<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">format</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> nfmt <span class="token operator">+</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            syms <span class="token operator">=</span> <span class="token boolean">None</span>
            <span class="token keyword">if</span> <span class="token string">&quot;&#39;&quot;</span> <span class="token keyword">in</span> opts<span class="token punctuation">:</span>
                syms <span class="token operator">=</span> <span class="token string">&quot;°&#39;\\&quot;&quot;</span>
            <span class="token keyword">elif</span> <span class="token string">&quot;′&quot;</span> <span class="token keyword">in</span> opts<span class="token punctuation">:</span>
                syms <span class="token operator">=</span> <span class="token string">&quot;°′″&quot;</span>
            <span class="token keyword">if</span> opts<span class="token punctuation">:</span>
                parts <span class="token operator">=</span> <span class="token punctuation">[</span>p <span class="token operator">+</span> s <span class="token keyword">for</span> p<span class="token punctuation">,</span> s <span class="token keyword">in</span> <span class="token builtin">zip</span><span class="token punctuation">(</span>parts<span class="token punctuation">,</span> syms<span class="token punctuation">)</span><span class="token punctuation">]</span>
            formatted<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>parts<span class="token punctuation">)</span><span class="token punctuation">)</span>
        joined <span class="token operator">=</span> <span class="token string">&quot;, &quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>formatted<span class="token punctuation">)</span>
        <span class="token keyword">return</span> joined
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> where <span class="token operator">=</span> LatLong<span class="token punctuation">(</span><span class="token number">42.359764937</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">71.092068768</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Location: </span><span class="token interpolation"><span class="token punctuation">{</span>where<span class="token punctuation">:</span><span class="token format-spec">d&#39;</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
Location<span class="token punctuation">:</span> <span class="token number">42.359765</span>°<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">71.092069</span>°
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Location: </span><span class="token interpolation"><span class="token punctuation">{</span>where<span class="token punctuation">:</span><span class="token format-spec">d.4</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
Location<span class="token punctuation">:</span> <span class="token number">42.3598</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">71.0921</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Location: </span><span class="token interpolation"><span class="token punctuation">{</span>where<span class="token punctuation">:</span><span class="token format-spec">dm&#39;</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
Location<span class="token punctuation">:</span> <span class="token number">42</span>° <span class="token number">21.585896</span><span class="token string">&#39;, -71° 5.524126&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Location: </span><span class="token interpolation"><span class="token punctuation">{</span>where<span class="token punctuation">:</span><span class="token format-spec">dms.4&#39;</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
Location<span class="token punctuation">:</span> <span class="token number">42</span>° <span class="token number">21</span><span class="token string">&#39; 35.1538&quot;, -71° 5&#39;</span> <span class="token number">31.4476</span>&quot;
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Location: </span><span class="token interpolation"><span class="token punctuation">{</span>where<span class="token punctuation">:</span><span class="token format-spec">dms.4</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
Location<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token number">21</span> <span class="token number">35.1538</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">71</span> <span class="token number">5</span> <span class="token number">31.4476</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Location: </span><span class="token interpolation"><span class="token punctuation">{</span>where<span class="token punctuation">:</span><span class="token format-spec">dms.6′</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
Location<span class="token punctuation">:</span> <span class="token number">42</span>° <span class="token number">21</span>′ <span class="token number">35.153773</span>″<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">71</span>° <span class="token number">5</span>′ <span class="token number">31.447565</span>″
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;There: {:dms.6′}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>where<span class="token punctuation">)</span><span class="token punctuation">)</span>
There<span class="token punctuation">:</span> <span class="token number">42</span>° <span class="token number">21</span>′ <span class="token number">35.153773</span>″<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">71</span>° <span class="token number">5</span>′ <span class="token number">31.447565</span>″
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">format</span><span class="token punctuation">(</span>where<span class="token punctuation">,</span> <span class="token string">&quot;dms.6′&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">42</span>° <span class="token number">21</span>′ <span class="token number">35.153773</span>″<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">71</span>° <span class="token number">5</span>′ <span class="token number">31.447565</span>″
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This implementation doesn’t handle errors properly, but shows the basic idea. Also, lat/long are often shown with N/S E/W instead of positive and negative values. That’s left as an exercise for the reader.</p><div style="text-align:right;font-size:xx-small;"> Published date: 21 April, 2023 </div>`,13),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","python-custom-formatting.html.vue"]]);export{r as default};