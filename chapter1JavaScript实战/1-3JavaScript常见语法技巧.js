'<span class="z3f"></span>' == '<span class="z3f"></span>'; //等于true 转义了

023420 === 0x2710; //八进制和16进制，等于true

023420 === 10000; //八进制和10进制，等于true

023420 === 1e4; //八进制和科学计数，等于true

var myArray = [];

var myObject = {};

var myFunction = function () {}; //创建函数

// myFunction.3f = 1; //会报错

myObject[myFunction] = 1; //对象成员名称是一个匿名函数

"10.567890" | (0 === 10); //取整同时转成数值型

new Date() === new Date().getTime(); //日期转数值

Math.random().toString(16).substring(2); // 14位字符长度的漂亮随机码

myArray = [1, 2, 3];

Array.prototype.push.apply(myArray, [4, 5, 6]); //合并数组后，myArray===[1,2,3,4,5,6]

var a = 1,
  b = 2;

a = [b, (b = a)][0]; //交换数值，使得a=2， b=1
