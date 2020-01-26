# 创建个人博客总结



## 前提准备

- 安装node
- 安装git
- 安装hexo `npm install hexo-cli -g`



## 步骤

- 进入E盘

  > cd e:

- 创建Blog文件夹

  > mkdir Blog

- 进入Blog文件夹

  > cd Blog

- 初始化hexo 

  > hexo init

- 生成静态页面

  > hexo generate	(hexo g  也可以)

- 启动本地服务，进行文章预览调试等

  > hexo server		(hexo s  也可以)

- 在浏览器中打开localhost:4000即可以预览

- 使用git将Blog的内容提交到github上

  > hexo d

- 如果是修改了Blog里面的内容后在提交，就使用如下命令

  > hexo clean
  >
  > hexo g -d

  ​



## 创建新的文章

- 在git中使用hexo new "filename"

  > hexo new "js property"	// 在`Blog\source\_post`中打开js-property.md编辑内容



> 写完文章后，你可以使用
>
> 1.`hexo g`生成静态文件。
>
> 2.`hexo s`在本地预览效果。
>
> 3.`hexo d`同步到github
>
> 4.然后使用enter1024.github.io进行访问





## 出现错误

bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': No error
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/docs/troubleshooting.html
Error: bash: /dev/tty: No such device or address
error: failed to execute prompt script (exit code 1)
fatal: could not read Username for 'https://github.com': No error

    at ChildProcess.<anonymous> (E:\Blog\node_modules\hexo-util\lib\spawn.js:37:17)
    at emitTwo (events.js:106:13)
    at ChildProcess.emit (events.js:191:7)
    at ChildProcess.cp.emit (E:\Blog\node_modules\cross-spawn\lib\enoent.js:40:29)
    at maybeClose (internal/child_process.js:886:16)
    at Socket.<anonymous> (internal/child_process.js:342:11)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at Pipe._handle.close [as _onclose] (net.js:501:12)





$ git push -u origin master
Username for 'https://github.com': 946726585@qq.com
To https://github.com/enter1024/enter1024.github.io.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/enter1024/enter1024.github.io.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.



> 解决错误的问题：查看node的版本和git的版本是否一致，如果git是最新版，node也需要是最新版
>
> hexo-cli版本： **1.0.3**
>
> node版本： **8.2.1**
>
> git版本： **2.13.0**

![hexo](images\hexo.png)

![git](E:\li_note\web-note\09-个人总结\nvm-npm-git\images\git.png)