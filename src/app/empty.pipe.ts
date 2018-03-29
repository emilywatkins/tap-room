import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var output: Keg[] = [];
    for (var i=0; i<input.length; i++) {
      if (input[i].pints > 0) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
