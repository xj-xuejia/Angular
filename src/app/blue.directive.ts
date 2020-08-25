import { Directive, ElementRef } from '@angular/core';

@Directive({
  // 生成的指令名 会自带 App前缀 防止与系统自带的冲突
  selector: '[appBlue]',
})
export class BlueDirective {
  // 指令所在的元素, 会自动作为参数传递到构造方法中
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.color = 'blue';
    e.nativeElement.style.fontSize = '30px';
  }

  // TS语言: 具备的最重要的特性 -- 静态类型分析
  // 变量:类型名;   我们的vscode会根据用户给的类型 来给出智能的代码提示!
  show(name: string) {
    // name.pus
  }
}
