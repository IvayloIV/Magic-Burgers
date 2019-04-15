import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberRound' })
export class NumberRoundPipe implements PipeTransform {
  transform(value: number, count: number): string {
      return value.toFixed(count);
  }
}
