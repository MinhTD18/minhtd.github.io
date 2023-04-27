<template><div><h1 id="moving-a-git-branch-to-a-new-base" tabindex="-1"><a class="header-anchor" href="#moving-a-git-branch-to-a-new-base" aria-hidden="true">#</a> Moving A Git Branch To A New Base</h1>
<p>Suppose you have some work on a git branch that you started from one branch, and you want to move that work to be based on a different branch, as if you had started from there originally. The git rebase command gives you the tools to do it, but it’s complicated, and I can never remember the details, so I finally figured it out and made an alias to do it.</p>
<p>In this post I’ll use an example where I’m working on branch “my-work”, which I started from “old-home” and I want to move it to “new-home”. My initial state looks like this:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>% <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>
* a8ab80e <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> my-work<span class="token punctuation">)</span> my work edit <span class="token number">2</span>
* 5f66562 my work edit <span class="token number">1</span>
<span class="token operator">|</span> * <span class="token number">9682932</span> <span class="token punctuation">(</span>old-home<span class="token punctuation">)</span> old-home edit <span class="token number">3</span>
<span class="token operator">|</span>/
* 98d09e4 old-home edit <span class="token number">2</span>
* a6fa334 old-home edit <span class="token number">1</span>
<span class="token operator">|</span> * e409e95 <span class="token punctuation">(</span>new-home<span class="token punctuation">)</span> new-home edit <span class="token number">2</span>
<span class="token operator">|</span> * 7d3ca09 new-home edit <span class="token number">1</span>
<span class="token operator">|</span>/
* 1b008d5 <span class="token punctuation">(</span>main<span class="token punctuation">)</span> main edit <span class="token number">2</span>
* e9152aa main edit <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The git tool to perform a move like this is “git rebase --onto”. The general form of the command needs three pieces of information, but the third is the branch to move, which defaults to the current branch, so we can just omit that. The other two items are: where you want to snip the current branch from, and where you want to graft it onto. The command looks like this:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">--onto</span><span class="token operator">=</span><span class="token operator">&lt;</span>graft-onto<span class="token operator">></span> <span class="token operator">&lt;</span>snip-from<span class="token operator">></span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>branch-to-move<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In our example, we want to snip the branch from the point where it started on old-home. The “git merge-base” command can tell us the commit where two branches diverge, so it’s perfect for this:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>% <span class="token function">git</span> merge-base old-home @
98d09e4b4d3ca45e3e03cf27386f7dd01f0662a8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Putting this together in one command looks like this:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>% <span class="token function">git</span> rebase <span class="token parameter variable">--onto</span> new-home <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> merge-base old-home @<span class="token variable">)</span></span>
Successfully rebased and updated refs/heads/my-work.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is just what we wanted:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>% <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>
* df22106 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> my-work<span class="token punctuation">)</span> my work edit <span class="token number">2</span>
* 9ac8707 my work edit <span class="token number">1</span>
* e409e95 <span class="token punctuation">(</span>new-home<span class="token punctuation">)</span> new-home edit <span class="token number">2</span>
* 7d3ca09 new-home edit <span class="token number">1</span>
<span class="token operator">|</span> * <span class="token number">9682932</span> <span class="token punctuation">(</span>old-home<span class="token punctuation">)</span> old-home edit <span class="token number">3</span>
<span class="token operator">|</span> * 98d09e4 old-home edit <span class="token number">2</span>
<span class="token operator">|</span> * a6fa334 old-home edit <span class="token number">1</span>
<span class="token operator">|</span>/
* 1b008d5 <span class="token punctuation">(</span>main<span class="token punctuation">)</span> main edit <span class="token number">2</span>
* e9152aa main edit <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But that command is complicated to type, so I made an alias in my .gitconfig:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>alias<span class="token punctuation">]</span>
movebranch <span class="token operator">=</span> <span class="token string">"!f() { \
    : git checkout \
    git rebase --onto <span class="token variable">$2</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> merge-base $1 @<span class="token variable">)</span></span> \
}; f"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now our branch move command would look like this:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>% <span class="token function">git</span> movebranch old-home new-home
Successfully rebased and updated refs/heads/my-work.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>And the result is the same:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>% <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>
* df22106 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> my-work<span class="token punctuation">)</span> my work edit <span class="token number">2</span>
* 9ac8707 my work edit <span class="token number">1</span>
* e409e95 <span class="token punctuation">(</span>new-home<span class="token punctuation">)</span> new-home edit <span class="token number">2</span>
* 7d3ca09 new-home edit <span class="token number">1</span>
<span class="token operator">|</span> * <span class="token number">9682932</span> <span class="token punctuation">(</span>old-home<span class="token punctuation">)</span> old-home edit <span class="token number">3</span>
<span class="token operator">|</span> * 98d09e4 old-home edit <span class="token number">2</span>
<span class="token operator">|</span> * a6fa334 old-home edit <span class="token number">1</span>
<span class="token operator">|</span>/
* 1b008d5 <span class="token punctuation">(</span>main<span class="token punctuation">)</span> main edit <span class="token number">2</span>
* e9152aa main edit <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


