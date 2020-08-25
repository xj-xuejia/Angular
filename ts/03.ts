// 自定义数据类型

// 例如: 对象类型, 其中有name age sex 3个属性

// 新的关键词: interface 接口, 此处用于定义对象类型
// interface 和 function  class 都是关键词
interface User {
  name: string;
  age: number;
  sex: number;
}

// 变量 xixi 是 User 类型
let xixi: User = {
  name: "西西",
  age: 18,
  sex: 0,
};

// 男朋友类型: 类型名 BoyFriend
// 必备属性: house money car

// 类型声明
interface BoyFriend {
  house: string;
  money: number;
  car: string;
}

// 对象类型 Object
let san: BoyFriend = {
  house: "上海明珠塔前200平",
  money: 98888,
  car: "...",
};
