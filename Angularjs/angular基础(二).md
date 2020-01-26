## angular基础(二)



### 自定义指令

>  语法：
>
>  var app = angular.module('myApp', []);
>
>  app.directive(name, fnuction(){ return {} });	//function返回一个对象，该对象定义该指令的实现细节



```javascript
angular.modules("myApp", [])
    .directive("myDirective", function () {
        return {
            restrict : "",  // String
            priority : 5,   // Number
            terminal : false,   // Boolean
            template : "",      // String or 模板函数:function(tElement,tAttrs){}
            templateUrl : "",   // 字符串
            replace : "",       // Boolean or String
            scope : {},         // Boolean or Object
            transclude : false, // Boolean
            controller : function (scope,element,attrs,transclude,otherInjectables) {

            },   // 函数或字符串
            controllerAs: "",       // String
            require : "",       // String
            link : function (scope, iElement, iAttrs) {
                
            },
            compile : function (tElement, tAttrs, transclude) {
                return {
                    pre : function (scope, iElement, iAttrs, controller) {
                        
                    },
                    post : function (scope, iElement, iAttrs, controller) {
                        
                    }
                }
                /*
                或者返回如下
                return function postLink(...) { ... }
                */
            }
        }
    });


// 指令返回的对象中属性的说明：
/*
1.restrict："EACM"，	// 自定义指令的约束，即指令可以通过什么样的模式在dom中使用它
		    			"EACM"代表分别代表：标签/属性/类/注释

2.replace : false,	//是否替换指令标签，默认false，true为替换

3.template ： "<h3> 要插入的模板 </h3>"，

4.templateUrl : "tpl.html"	//引用外面模板

5.transclude : true,		//是否保留指令标签的内容，默认为false

6.
*/
```