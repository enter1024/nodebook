### for of

```javascript
// 函数sum在被调用时不知会传递多少个参数，可以使用...的ES6语法
function sum (...d) {
    let total = 0;
    // 遍历变量d
    for(var i of d){  // for of是ES6语法
        total += i;
    }
    return total;
}

sum();
```

