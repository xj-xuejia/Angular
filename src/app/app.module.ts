import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
// 引入
import { FormsModule } from '@angular/forms';
import { Myc01Component } from './myc01/myc01.component';
import { Myc02Component } from './myc02/myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { BlueDirective } from './blue.directive';
import { HideDirective } from './hide.directive';
import { FocusDirective } from './focus.directive';
import { Myc05Component } from './myc05/myc05.component';
import { Myc06Component } from './myc06/myc06.component';
import { PowPipe } from './pow.pipe';
import { GenderPipe } from './gender.pipe';
import { LovePipe } from './love.pipe';
import { FearPipe } from './fear.pipe';
import { LikePipe } from './like.pipe';

@NgModule({
  declarations: [AppComponent, WorkComponent, Myc01Component, Myc02Component, Myc03Component, Myc04Component, BlueDirective, HideDirective, FocusDirective, Myc05Component, Myc06Component, PowPipe, GenderPipe, LovePipe, FearPipe, LikePipe],
  // 注入 必须在 imports 中写
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
