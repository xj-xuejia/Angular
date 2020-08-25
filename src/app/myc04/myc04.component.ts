import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc04',
  templateUrl: './myc04.component.html',
  styleUrls: ['./myc04.component.css'],
})
export class Myc04Component implements OnInit {
  // 此处的属性, 相当于在 vue 的 data(){ return {}} 书写的
  // 可以直接在 html 中使用

  name = 'dongdong';
  age = 18;
  married = true; //结婚

  names = ['东东', '然然', '亮亮'];

  boss = {
    name: '文华',
    age: 33,
  };

  constructor() {}

  ngOnInit(): void {}
}
