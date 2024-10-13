import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true,
})
export class TruncateNamePipe implements PipeTransform {
  transform(
    value: string,
    maxLength: number = 17,
    ellipsis: string = '...'
  ): unknown {
    if (value.length > maxLength) return value.slice(0, maxLength) + ellipsis;
    return value;
  }
}
