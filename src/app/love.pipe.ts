import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'love',
})
export class LovePipe implements PipeTransform {
  // {{ "然然" | love: "小乔" }}
  // {{ 值 | 管道名: 参数2: 参数3: 参数4...}}
  transform(value: string, lover: string) {
    return value + '喜欢' + lover;
  }
}
