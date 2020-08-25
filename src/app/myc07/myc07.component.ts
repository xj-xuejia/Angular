import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc07',
  templateUrl: './myc07.component.html',
  styleUrls: ['./myc07.component.css'],
})
export class Myc07Component implements OnInit {
  html = '<h1>ng g c 组件名</h1>';

  enable = true;

  // 双向数据绑定
  word = '默认值';

  constructor() {}

  ngOnInit(): void {}
}
