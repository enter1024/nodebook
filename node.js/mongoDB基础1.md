#### 什么是MongoDB

> MongoDB 是由C++语言开发的非关系型分布式文档数据库。为WEB应用提供可扩展的高性能数据存储解决方案。
>
> 官网：https://www.mongodb.com/
>
> 中文社区：http://www.mongoing.com/
>
> mongod : 开机，每次打开电脑后都要开机才可以使用
>
> mongo : 使用数据库
>
> mongoimport : 导入数据



#### 安装启动连接

- 在windows系统中安装MongoDB

  ​


- 需要配置环境变量：在windows系统变量 `Path`中将 `MongoDB` 安装路径下的bin目录配置到系统变量中(例如将F:\MongoDB\Server\3.0.6\bin;复制到Path中)。配置好全局环境变量后在任意盘符下都可以使用mongoDB的命令

  ​


- 测试是否安装成功，在命令行中输入命令`mongod --dbpath C:\data\db` 时(C:\data\db为数据存放的路径)，如果出现`waiting for connections on port 27017` 代表安装成功了(27017是mongoDB默认的端口)

  `mongod --dbpath F:\MongoDB\data\db` 该命令的意思是启动mongDB，并将数据存放在F:\MongoDB\data\db路径下

  ​

- 链接数据库可以使用`mongo` 命令

  ​

  ​


#### shell命令

```javascript
// 开机并指定数据存放的路径
> mongod --dbpath C:\data\db

// 连接数据库
> mongo

// 在shell中，显示所有数据库
> show dbs

// 查看当前数据库
> db

// 创建和使用数据库。(当数据库不存在时自动创建person数据库)
> use person

// 查看当前数据库中有多少集合
> show collections

// 在student集合中插入一条数据
db.student.insert({"name":"lihuayan","age":28,"address":"广东省"}); 

// 查看student 集合中有多少条数据 
db.collection("student").find().count();

// 查看student 集合中的对象
db.collection("student").find();

//删除单前所在的数据库
db.dropDataBase();

// 删除集合 
db.collection.drop();
```



#### 链接MongoDB

> 使用该`MongoClient.connect(url, callback)`方法连接到正在运行的MongoDB部署
>
> 网站：`http://mongodb.github.io/node-mongodb-native/3.0/tutorials/connect/`

```javascript
/**
 * 案例实现目的：
 * 使用Node.js链接到MongoDB数据库
 * 请求一次localhost:3000就往数据库中添加一条数据
 */
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// 链接MongoDB数据库需要数据库的url及name
var databaseUrl = "mongodb://localhost:27017";
var databaseName = "person";	//数据库不存在时就自动创建

// 请求一次localhost:3000就往数据库中添加一条数据
app.get("/",function (req, res) {
    // 根据提供的databaseUrl链接数据库，链接成功后执行回到方法
    MongoClient.connect(databaseUrl,function (err, client) {
        assert.equal(null, err);    // 如果err不为null就出现错误
        var db = client.db(databaseName);
        // 每次插入一条
        db.collection("student").insertOne({"name": "李菲菲","age": 9},function (err, result) {
            if (err){
                res.send("插入数据失败");
            }
            res.send("插入数据成功");
            // console.log(result);
            client.close();
        });
    });
});

app.listen(3000);
```



#### 增加文档

> 添加一条：insertOne(doc, options, callback)
>
> 添加多条：insertMany(docs, options, callback)
>
> 从json导入数据：在shell中可以使用命令`mongoimports --db test --cllection restaurants --drop --file primer-dataset.json` 导入json文件中的数据到数据库。-db test  想往哪个数据库里面导入，--collection restaurants  想往哪个集合中导入，--drop 把集合清空，--file primer-dataset.json  哪个文件
>
> 案例：`mongoimports --db person --cllection student --drop --file e:\data.json`

```javascript
// 添加一条
db.collection(doc).insertOne(json, function (err, result) {
	// do something
  	var insertedCount = result.insertedCount;	// 插入的数量
  	// 在插入数据到数据库时发现，相同的对象(内存地址一样)不能插入数据库第二次，相同的内容只能存在一份
});

// 添加多条
db.collection(doc).insertMany([{a:1}, {a:2}, {a:2}], function(err, result) {
  	
});
```



#### 删除文档

> 删除所有文档：`db.collection.deleteMany({});`
>
> 删除多条指定条件的文档：`db.collection.deleteMany({"name" : "coco"});`
>
> 删除一条文档：`db.collection.deleteOne({"name" : "coco"});`

```javascript
// 删除一条数据
// MongoDB为自己封装的db.js文件
// 当访问/deleteone时会删除名字为萨瓦迪卡，年龄为0岁的对象
app.get("/deleteOne", function (req, res) {
    MongoDB.deleteOne("student",{"name":"萨瓦迪卡","age":0},function (err, result) {
        if (err) {
            res.send(err);
            return;
        }
        let count = result.deletedCount;
        res.send("已删除"+count+"条数据");
    });
});

// 删除多条数据

```



#### 更新文档

> 



#### 查询文档

> 查询全部：`db.collection.find()`
>
> 条件查询： `db.collection.find(queryFilter, options)`



#### 条件And 与 or

> and指的是逗号隔开的多条件。如：`db.collection.find({key1:value1, key2:value2})`
>
> or指的是使用$or匹配多个对象。如：db.collection.find({$or : [{a:2},{a:3}]}
>
> 等于：`{<key>:<value>}`
>
> 小于：`{<key>:{$lt:<value>}}`
>
> 小于或等于：`{<key>:{$lte:<value>}}`
>
> 大于：`{<key>:{$gt:<value>}}`
>
> 大于或等于：`{<key>:{$gte:<value>}}`
>
> 不等于：`{<key>:{$ne:<value>}}`



#### 方法汇总

```javascript
// equal()
const assert = require('assert');
assert.equal(null,err);		// 如两个值相等(err==null)，则通过

// sort({key: 1});   // key是任意字符串
db.collection(doc).find().sort({key:1}); // 升序，从0开始查
db.collection(doc).find().sort({key:-1}); // 降序，从array.length-1开始查
```




#### 注意事项：

> mongoDB的学习版本有很多个，应用在不同的语言或系统中有相关的文档说明，例如mongoDB shell 是指在控制台中使用的命令，即命令行中使用的。
>
> shell



#### MongoVUE

> MongoDB 3.0以上创建数据库使用的是wiredTiger引擎
>
> MongoDB 3.0以下创建数据库使用的是mmapv1引擎

如果出现collections无法显示数据，需要做如下操作：

- 1 要删除数据库，即是使用`mongod --dbpath C:\data\db` 创建的数据库必需删除
- 2设置创建数据库使用的引擎为mmapv1，如第3步
- 3设置引擎并创建数据库`mongod -storageEngine mmapv1 -dbpath C:\data\db`