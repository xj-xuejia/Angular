import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  // {{0|gender}}
  transform(value: number) {
    // if (value == 0) return '女';
    // if (value == 1) return '男';

    // arr[index]:  利用下标来取巧
    return ['女', '男'][value];
  }
}
