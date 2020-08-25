import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fear',
})
export class FearPipe implements PipeTransform {
  // {{ "然然" | fear: "宝宝":"绿色" }}
  transform(value: string, name1: string, name2: string) {
    return value + '害怕' + name1 + '和' + name2;
  }
}
