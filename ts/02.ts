// 可以设置的类型

class Emp {
  // 变量:类型 = 值
  name: string = "东东";

  // 数字类型: 整数 浮点
  age: number;

  // 布尔类型
  married: boolean;

  // 任意类型
  abc: any;

  // 多种类型: |代表或
  xyz: number | string;

  // 数组: 下方两种写法是等价的: 代表是 数组类型, 其中的值都是字符串
  names: Array<string>;
  words: string[];

  show() {
    // this.name.
    // this.age.
    // this.married = 1;
    this.abc = 12;
    this.abc = true;

    this.xyz = 12;
    this.xyz = "123";

    this.names = ["mike", "lucy", true, 123];
    this.words = ["mike", "lucy", true, 123];
  }
}
