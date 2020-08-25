import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow',
})
export class PowPipe implements PipeTransform {
  // <p>{{ 9 | pow }}</p>
  // 管道的写法: {{value | 管道名}}
  // value就会作为参数1 传递到下方的方法中!
  transform(value: number) {
    // 返回值就是 管道处理的结果
    return Math.pow(value, 2);
  }
}
// 新的管道:  要重启服务器才能生效!
