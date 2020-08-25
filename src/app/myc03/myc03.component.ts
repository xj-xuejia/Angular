import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc03',
  templateUrl: './myc03.component.html',
  styleUrls: ['./myc03.component.css'],
})
export class Myc03Component implements OnInit {
  names = ['东东', '亮亮', '然然', '西西', '楠楠', '贝贝'];

  emps = [
    { name: '东东', age: 18, phone: '18844559988', sex: 1 },
    { name: '然然', age: 19, phone: '18889559988', sex: 1 },
    { name: '西西', age: 20, phone: '18899559988', sex: 0 },
    { name: '贝贝', age: 21, phone: '18800559988', sex: 1 },
    { name: '楠楠', age: 22, phone: '18822559988', sex: 0 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
