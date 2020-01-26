### nvm安装教程

1. 下载nvm包，通过`github.com`下载名称为[nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) 的安装包。

2. 安装路径不能有中文或空格，如果有空格会报错，无法找到路径。

3. 安装时第一步会指定nvm的安装路径，第二步指定nodejs的存放路径。

4. 使用nvm install  命令安装需要使用的node版本。如：`nvm install v6.10.0`

5. 使用nvm list  查看当前有哪些node版本在本地，版本前面的星号(*)代表正在使用的版本

   ![use version](.\images\use version.PNG)

   ​

6. 使用nvm use xxxxxx切换到要使用的版本，如：nvm use 6.10.2

7. 使用cls清理命令行窗口 : 当命令行窗口显示的内容过多时可以通过该命令清屏

