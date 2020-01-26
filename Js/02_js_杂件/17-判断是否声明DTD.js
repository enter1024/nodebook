/*判断是否声明DTD
======================================================*/
document.compatMode === "BackCompat"	//未声明
document.compatMode === "CSS1Compat"	//已经声明

//IE678默认	识别CSS1Compat ，无论有没有dtd	注意大小写
