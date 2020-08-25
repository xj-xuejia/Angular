import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 默认的引入: app.component.ts  即根组件
import { AppComponent } from './app.component';
// 引入myc01
// {}中的名字 就是在 myc01.ts 中自定义的 class 名
import { Myc01 } from './myc01/myc01';

import { Myc02 } from './myc02/myc02';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { Myc07Component } from './myc07/myc07.component';

// 引入Form模块
import { FormsModule } from '@angular/forms';

@NgModule({
  // 注册为全局组件
  declarations: [
    AppComponent,
    Myc01,
    Myc02,
    Myc03Component,
    Myc04Component,
    Myc05Component,
    Myc06Component,
    Myc07Component,
  ],
  // 引入模块的属性 : imports
  // 引入模块之后, 必须重启服务器才可以!!
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
