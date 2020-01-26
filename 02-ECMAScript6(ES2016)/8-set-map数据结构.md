## set集合

> set的特性
>
> 1. value的唯一性，可以应用在值的去重上(去重)
> 2. 值区分数据类型

```javascript
{
    // 可以将一个包含重复元素值的数组去重
    let arr = [1,2,3,2,1];
    let list = new Set(arr);
    console.log("去重：",list);
}


{
    // set集合中的一些方法
  	// 
    let arr = ["add", "delete", "size", "has", "clean"];
    let list = new Set(arr);
    console.log("list",list);
}


{
    // 遍历集合
    let arr = ["add", "delete", "size", "has", "clean"];
    let list = new Set(arr);
    // key
    for (let key of list.keys()) {
        console.log("key",key);
    }
    // value
    for (let value of list.values()) {
        console.log("value",value);
    }
    // key and value
    for (let [key, value] of list.entries()){
        console.log(key,value);
    }

    //  也可以使用forEach遍历每个值
    list.forEach(function (item) {
        console.log("item",item);
    })
}

```





## map集合

- 增

  ```javascript

  ```

  ​

- 删

  ```javascript

  ```

  ​

- 改

  ```javascript

  ```

  ​

- 查

  ```javascript

  ```

  ​





## set/map/object数据结构对比





## 数据结构的使用

> 选择最优的数据结构存储数据
>
> 1. 优先使用map数据结构
> 2. 当数据中需要保证唯一性时使用set
> 3. 最后使用object