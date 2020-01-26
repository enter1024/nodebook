## git入门

git是分布式[版本控制](http://lib.csdn.net/base/28)系统

![git提交](.\images\git提交.png)

* 1.首选在计算机本地中安装git软件[下载](https://git-for-windows.github.io/)
* 2.打开Git Bash
* 3.首先在本地配置自己的身份，这样在提交代码的时候就能知道是谁提交的
  * git config --global user.name "名字"  （自己使用enter1024）
  * git config --global user.email "邮箱地址"  （自己使用的946726585@qq.com）
  * 要检查已有的配置信息，可以使用 `git config --list` 命令
  * 设置git配置  如：`git config --global http.sslVerify "false" `
  * 删除git配置  如：`git config --global --unset http.sslVerify` 
  * 

* 4.在命令行中切换到项目根目录下，输入git init就可以创建一个本地仓库了，即会在根目录中生成一个.git文件夹
* 5.仓库建立完成之后就可以提交本地代码了，这里只需要用到两个命令，add添加和commit提交
  * `add . ` 是添加所有
  * `add +文件名` 是添加单个文件，如 `git add index.html` 或添加文件夹 `git add lib/` 
  * `git commit -m "First commit"` 是提交到本地，这里要在-m参数后面加上提交参数，这很重要，不然会被认为不合法不能提交.
* 6.使用`git remote add origin [仓库地址]` 设置push的地址
* 7.`git push -u origin master` 第一次push到主分支上时需要加-u参数




## 文件修改后的第二次及以后的提交

- 添加被修改的文件`git add 文件名`
- 提交说明`git commit -m '第几次提交'`
- 提交到远程`git push -u origin master`
- 切换到分支`git checkout gh-pages `
- 提交到分支`git push -u origin gh-pages`





## 查看命令

`git log` : 该命令的作用是查看每次commit时产生的版本号，通过`git log` 可以跳转到以前的版本上，但不能再跳转到更新的版本上(如：6跳到9)，如果需要跳到更新的版本上可以使用`git reflog`

`git reset --hard [commit版本号]` : 该命令的作用是条转到指定的commit版本。如`git reset --hard  c1009e95e8fb5e64d25dfd0398d4dd9ac782c8e8`

`git reflog` : 该命令的作用是查看从创建项目开始到最新的一次提交时的所有版本号

`git reset --hard HEAD` : 该命令的作用是回到当前版本的最初状态。即当你跳跃到某一版本时，对该版本做了修改，但你后面不想要这些修改了，想回到该版本的最初状态，这是就可以使用`git reset --hard HEAD` 回到该版本的最初状态 



#### 监听

- 监听所有文件可以通过 `git add --all`  或 `git add .` 命令来实现
- 监听一个文件可以通过 `git add <fileName>` 命令来实现



#### 撤销修改命令

在工作区撤销 ： `git checkout -- [filename]` filename是文件名

在暂存区撤销 ： `git reset HEAD [file name]` file name 是文件名

本地master分支上的撤销 ： `git reset --hard 版本号`



- 如果不小心使用了 `git add --all`  命令对所有的文件进行监听，现在想撤销的话，可以使用
  `git reset HEAD .` 命令撤销监听







## 创建分支

创建分支 ： `git branch [branch name]`  branch name是分支的名字

切换到对应的分支上 ： `git checkout [branch name]`  branch name是分支的名字

创建并切换到分支上 ： `git checkout -b [branch name]`

查看当前所有的分支可以使用命令 `git branch` , 在所有的分支中，如果前面带有*号，即目前就处于该分支上(即带有星号的就是当前的分支)

查看分支 ： `git branch -a` 可以查看本地和远程的分支



## push内容到远程

push内容到主分支：`git push origin master` : 该命令只可以push到主分支

push内容到其他分支：`git push origin [branch name]`  branch name 是分支名



## 修改远程仓库地址的方法

方法有三种：

1.修改命令

git remote origin set-url [url]

2.先删后加

git remote rm origin
git remote add origin [url]

3.直接修改config文件



## 删除远程仓库的文件或文件夹

* 删除文件：`git rm index` ，执行该命令后会删除index文件
* 删除文件夹：` git rm -r [文件夹名]`  如： `git rm -r mobile`。 执行该命令后mobile文件夹和子文件都会被删除

步骤：首选本地必须要有和远程仓库保持一致的内容，如果本地没有，就使用git clone 命令克隆项目到本地，再初始化生成.git，添加文件监听，提交到本地master,再提交到远程master



## git help

```javascript
These are common Git commands used in various situations:	//这些是在各种情况下使用的通用Git命令:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory	// 克隆一个项目到本地
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.


// 未知什么原因出现如下警告
warning: LF will be replaced by CRLF in mobile/lib/jquery-1.11.1.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in mobile/lib/jquery.mobile-1.4.5.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in mobile/lib/jquery.mobile-1.4.5.js.
The file will have its original line endings in your working directory.
```




## 英语

```javascript
// Changes to be committed: 已暂存

// (use "git reset HEAD <file>..." to unstage) ：Git告诉我们，用命令git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区：


// On branch gh-pages : 在gh-pages分支上
// Your branch is up-to-date with 'origin/gh-pages'.   ：你的分支是最新的


$ git checkout master
error: Your local changes to the following files would be overwritten by checkout:
        .idea/workspace.xml
Please, commit your changes or stash them before you can switch branches.
Aborting

```

