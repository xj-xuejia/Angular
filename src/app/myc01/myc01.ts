// 区别于 原生html开发:
// 原生的HTML: 运行的是html文件, 然后通过 link 来引入css,  通过script 引入js

// angular:
// 与原生相同点--分成三个文件;
// 不同点: 主文件为 .ts 文件;  运行.ts文件, 此文件中加载了 html 和 css

// 组件生成完毕之后, 必须注册为全局组件 才能全局使用!!
// 全局配置文件: src/app/app.module.ts

// 快捷代码块: ng-component
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 代表当前组件使用时的名字, 为了防止与系统标签重名, 习惯上添加 app- 前缀;  使用时  <app-myc01></app-myc01>
  selector: 'app-myc01',
  // 运行的是 ts 文件,  ts中引入 html 和 css
  templateUrl: './myc01.html',
  // css文件可以有多个, 所以是数组类型
  styleUrls: ['./myc01.css'],
})
// 面向对象的 类
// Myc01 如果有爆红, 不影响使用,  但是可以在设置中搜索 experimentalDecorators;  勾选即可
export class Myc01 implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
