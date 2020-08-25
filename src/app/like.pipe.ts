import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'like',
})
export class LikePipe implements PipeTransform {
  // {{ "西西" | like: "东东" }}
  // {{ "西西" | like }}
  transform(value: string, name = '然然') {
    return value + '最喜欢' + name + '老师';
  }
}
