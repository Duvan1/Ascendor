import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(!value) return '';
    else if(value < 0.4) return 'Bajo';
    else if(value >= 0.4 && value < 0.7) return 'Medio';
    else if(value >= 0.7) return 'Alto';

    return ''
  }

}
