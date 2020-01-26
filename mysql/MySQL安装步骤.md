#### MySQL安装

1. 首先下载mysql安装文件，我这里的版本是8.0.18（下载地址：https://dev.mysql.com/downloads/mysql/）

2. 解压文件并存放在D盘作为安装盘，你也可以放在其他的盘（D:\Installed\mysql\mysql-8.0.18-winx64）

3. 解压后的目录并没有的my.ini文件，需在安装根目录下创建一个文件为my.ini (注意后缀名)，内容如下：

   ```mysql
   [mysqld]
   # 设置3306端口
   port=3306
   # 设置mysql的安装目录
   basedir=D:\Installed\mysql\mysql-8.0.18-winx64
   # 设置mysql数据库的数据的存放目录
   datadir=D:\Installed\mysql\mysql-8.0.18-winx64\Data
   # 允许最大连接数
   max_connections=200
   # 允许连接失败的次数。
   max_connect_errors=10
   # 服务端使用的字符集默认为utf8mb4
   character-set-server=utf8mb4
   # 创建新表时将使用的默认存储引擎
   default-storage-engine=INNODB
   # 默认使用“mysql_native_password”插件认证
   #mysql_native_password
   default_authentication_plugin=mysql_native_password
   [mysql]
   # 设置mysql客户端默认字符集
   default-character-set=utf8mb4
   [client]
   # 设置mysql客户端连接服务端时默认使用的端口
   port=3306
   default-character-set=utf8mb4
   ```

4. 版本8.0.18千万不要在根目录下添加Data文件夹，这个文件夹需自动生成（存放数据库数据的）

5. 初始化mysql

    5.1-以管理员身份运行cmd.exe![cmd](img\cmd.png)

   ​

   5.2-切换到安装目录下的bin目录，使用命令 `mysqld --initialize --console` 初始化mysql

   ![cmd](img\init.png)

   ​

6. 使用命令 `mysqld --install [服务名]`  安装mysql, 服务名可以省略不写, 不写时默认服务名为 `mysql`  ，我这里将服务名改为blog 

   ![cmd](img\mysql-blog-11.png)

   ​

7. 如果服务blog已经存在，可以使用命令`sc delete blog` 命令来删除服务

8. 使用命令 `net start blog` 启动MySQL的服务, blog为服务名（可自定义服务名）

   ![cmd](img\mysql-blog-22.png)

   ​

9. 下图为初始化mysql时的初始化密码，必须要记住，如果想修改密码可以使用可视化软件或使用命令修改

   ![cmd](img\mysql-password.png)

   ​

10. 如下是所有命令的执行过程，供参考

![cmd](img\mysql-blog-33.png)

   ​

#### 遇到的问题：通过nodejs查询数据库时出现了如下错误

> 解决办法
>
> 1.使用命令  `mysql -u root -p`  登录数据库
>
> 2.使用命令 `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的root账号密码';`  修改本地权限

![cmd](img\使用nodejs连接数据库出错.png)

