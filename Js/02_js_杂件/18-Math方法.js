/*Math方法汇总
======================================================*/
var step = -5;
Math.abs(step);	    //求绝对值  结果：5



step = step > 0 ? Math.ceil(step) : Math.floor(step);
Math.ceil(1.04);       //向上取整   2
Math.floor(1.04);       //向下取整  1

Math.ceil(-13.5);       //向上取整   -13        -14  -13.5  -13   -12
Math.floor(-13.5);       //向下取整  -14


Math.round(3.5);       //四舍五入   4
Math.round(3.4);       //四舍五入   3

