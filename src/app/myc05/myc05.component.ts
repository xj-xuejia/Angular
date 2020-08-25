import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css'],
})
export class Myc05Component implements OnInit {
  title = '斗罗大陆';

  img =
    'https://tse2-mm.cn.bing.net/th/id/OIP.k_j23KT_a1tpBE9KWQlnagHaLH?pid=Api&rs=1';

  // 函数写在类中: 称为 方法
  show() {
    alert('事件触发');
  }

  constructor() {}

  ngOnInit(): void {}
}
