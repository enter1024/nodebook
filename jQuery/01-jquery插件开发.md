### 开发jQuery插件的方式

> 可以通过两种方式开发`jquery`插件
>
> 1. 类级别方式：即给`jquery`命名空间下添加新的全局函数，也称为静态方法。
> 2. 对象级别方式：即挂载在`jquery`原型下的方法，这样通过选择器选择出来的`jquery`对象实例也共享该方法，也称为动态方法。

```javascript
// 1.类级别 
// 例如：$.Ajax() / $.extend()
// jQuery.extend([deep], target, object1, [objectN])
jQuery.pluginname = function() {
    // do something
}

// 2.对象级别 jQuery.extend([deep], target, object1, [objectN])
// 例如：addClass() / attr()等方法，需要实例对象调用
// jQuery.fn.extend(object)
$.fn.pluginname = function() {
    // do something
  	// 这里的$.fn === $.prototype
}
```



### 自调用匿名函数

通过创建一个自调用匿名函数，创建一个特殊的函数作用域，在该作用域中定义的函数，变量等不会和现有存在的同名函数或变量相冲突。

```javascript
(function ($){ //这个东西叫做IIFE(自调用函数表达式)
	$.fn.extend({ // 给jquery原型对象扩展方法
		pluginName: function(options){ //插件名字
			// 遍历匹配元素的集合
			return this.each(function(){
				// 在这里写相应的业务
			});
		}
	});
})(jQuery);
```



### 插件案例

```javascript
(function ($){ //这个东西叫做IIFE(自调用函数表达式)
	
	var Plugin = function(){
		
	}
	
	Plugin.prototype = {
		getVersion: function(){
			return "version 0.1";
		}
	}
	
	// 给jquery原型对象扩展方法，通过 $('select').pluginname() 调用
	$.fn.extend({
		//插件名字
		pluginname: function(options){
			var args = [].slice.call(arguments, 1);
          
            // 遍历匹配元素的集合
			return this.each(function(){
				// 单例模式
				var ui = $._data(this, pluginname);
				if(!ui) {
					// 深拷贝
					var opts = $.extend(true, {}, $.fn.pluginname.defaults, typeof options === "object" : options : {});
					ui = new Plugin(opts, this);
					$._data(this, pluginname, ui);
				}
				
				if(typeof options === "string" && typeof ui[options] == "function") {
					ui[options].apply(ui, args); // 执行插件的方法
				}
			});
		}
	});
	
	// 默认配置对象，保证用户在没有传参时情况下也能正常使用插件
	$.fn.pluginname.defaults = {
		
	}
})(jQuery);
```

