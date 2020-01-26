
将一个做好的网站提交到GitHub上托管
=======================================
前提条件:电脑必须安装git客户端

案例：将文件夹名为jd的项目提交到github上

1.打开jd文件夹，按住shift键，单击鼠标右键，点击“在此处打开命令窗口”进入cmd，也可以找到git的
	安装目录直接运行git-bash.exe文件
​	

2.使用git init 命令初始化git	(会在jd文件夹下生成一个.git的文件夹)

3.使用git status 命令查看git对jd文件夹下的文件的监控状态

4.使用git add --all 监控jd里面所有的文件夹

5.git status

6.git commit -m '这里可以标注提交时的说明，写说明内容都可以'

7.没有这一步，被移到下面了

8.git remote add origin 将在github上创建的仓库地址粘贴到后面

9.git push -u origin master 提交jd文件夹里面的内容到github仓库中
	7.如果这里出现提示：你想要做些什么？可以根据提示输入
	946726585@qq.com

10.git branch gh-pages  创建一个分支

11.git checkout gh-pages 切换到分支上(默认是在主分支上的)

12.git push -u origin gh-pages  同步到分支上(基于主分支创建出来的)
	7.如果这里出现提示：你想要做些什么？可以根据提示输入


//访问项目
	用户名.github.io/仓库名
	如：enter1024.github.io/wjs

//域名绑定www.dnspod.cn
	域名解析
	域名解析需要创建一个文件，这个文件没有扩展名，大写的CNAME


	注意：项目被修改后需要重新提交到git上


