import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  // 昨天说过的插件 prettier 配合保存时自动格式化
  // 按 ctrl+s保存时, 就会自动补全分号
  num = 1;

  hobby = '';
  like = '';

  saveLike() {
    this.like = this.hobby;
    this.hobby = '';
  }

  doMinuse() {
    if (this.num == 1) {
      alert('数量不能少于1');
      // return 可以终止代码执行
      return;
    }

    this.num = this.num - 1;
  }

  // 作业3:
  price = 7999;
  count = 1;

  // 作业4:
  images = [
    'https://tse3-mm.cn.bing.net/th/id/OIP.jwyAo-TrKtQj6K2AVVzxiAHaEK?pid=Api&rs=1',
    'http://5b0988e595225.cdn.sohucs.com/images/20190126/e5ae4556b52042d3aa6355ef7d0efbdd.jpeg',
    'https://tse3-mm.cn.bing.net/th/id/OIP.jyqDbZiaJiVNCONjcbxhXgHaEK?pid=Api&rs=1',
    'https://tse3-mm.cn.bing.net/th/id/OIP.MASmSGUEiRwOc86zsRb1OwHaEK?pid=Api&rs=1',
  ];

  // current page : 当前页  缩写 curp
  curp = 1; //记录当前页, 从1开始

  constructor() {}

  ngOnInit(): void {}
}

/**
 * 观察下方代码格式, 说出max的类型
 *
 * 1. max  全小写 变量
 * 2. Max  大驼峰 类名
 * 3. MAX  全大写 常量
 * 4. max() 小写带()  函数
 * 5. this.max()  带this开头, 带():  成员方法 类中的
 * 6. this.max   带this 不带();  成员属性, 类中的
 * 7. new Max()  带new 大驼峰   类
 * 8. 'max'      带引号 字符串
 *
 */
