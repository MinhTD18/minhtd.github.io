---
title: Moving A Git Branch To A New Base
author: MinhTD
description: This blog shows how to move a Git branch to a new base using the git rebase command. The post explains how to use the git rebase --onto command to specify the base branch to move the work to and the point at which to snip the branch. The tutorial provides an example, showing how to move a branch named my-work from its original base branch old-home to a new base branch new-home. It also includes an alias command to make the process easier to remember and execute.
published_date: 21 April, 2023 
---

# Moving A Git Branch To A New Base
 
Suppose you have some work on a git branch that you started from one branch, and you want to move that work to be based on a different branch, as if you had started from there originally. The git rebase command gives you the tools to do it, but it’s complicated, and I can never remember the details, so I finally figured it out and made an alias to do it.

In this post I’ll use an example where I’m working on branch “my-work”, which I started from “old-home” and I want to move it to “new-home”. My initial state looks like this:

```bash
% git log --oneline --decorate --graph --all
* a8ab80e (HEAD -> my-work) my work edit 2
* 5f66562 my work edit 1
| * 9682932 (old-home) old-home edit 3
|/
* 98d09e4 old-home edit 2
* a6fa334 old-home edit 1
| * e409e95 (new-home) new-home edit 2
| * 7d3ca09 new-home edit 1
|/
* 1b008d5 (main) main edit 2
* e9152aa main edit 1
```

The git tool to perform a move like this is “git rebase --onto”. The general form of the command needs three pieces of information, but the third is the branch to move, which defaults to the current branch, so we can just omit that. The other two items are: where you want to snip the current branch from, and where you want to graft it onto. The command looks like this:

```bash
git rebase --onto=<graft-onto> <snip-from> [<branch-to-move>]
```

In our example, we want to snip the branch from the point where it started on old-home. The “git merge-base” command can tell us the commit where two branches diverge, so it’s perfect for this:

```bash
% git merge-base old-home @
98d09e4b4d3ca45e3e03cf27386f7dd01f0662a8
```

Putting this together in one command looks like this:

```bash
% git rebase --onto new-home $(git merge-base old-home @)
Successfully rebased and updated refs/heads/my-work.
```

The result is just what we wanted:

```bash
% git log --oneline --decorate --graph --all
* df22106 (HEAD -> my-work) my work edit 2
* 9ac8707 my work edit 1
* e409e95 (new-home) new-home edit 2
* 7d3ca09 new-home edit 1
| * 9682932 (old-home) old-home edit 3
| * 98d09e4 old-home edit 2
| * a6fa334 old-home edit 1
|/
* 1b008d5 (main) main edit 2
* e9152aa main edit 1
```

But that command is complicated to type, so I made an alias in my .gitconfig:

```bash
[alias]
movebranch = "!f() { \
    : git checkout \
    git rebase --onto $2 $(git merge-base $1 @) \
}; f"
```

Now our branch move command would look like this:

```bash
% git movebranch old-home new-home
Successfully rebased and updated refs/heads/my-work.
```

And the result is the same:

```bash
% git log --oneline --decorate --graph --all
* df22106 (HEAD -> my-work) my work edit 2
* 9ac8707 my work edit 1
* e409e95 (new-home) new-home edit 2
* 7d3ca09 new-home edit 1
| * 9682932 (old-home) old-home edit 3
| * 98d09e4 old-home edit 2
| * a6fa334 old-home edit 1
|/
* 1b008d5 (main) main edit 2
* e9152aa main edit 1
```


<div style="text-align: right; font-size: xx-small;"> Published date: 21 April, 2023 </div>