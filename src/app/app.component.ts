import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Brussel Sprout Stout', 'Blade Boys Brewers', 1, 5),
    new Keg('Sour Ron', 'Ron\'s Brew', 5, 5),
    new Keg('Fidget Cider', 'On Fleek', 4, 5),
    new Keg('Angul-ale JS', 'Dead Dweebus', 3, 5),
    new Keg('Uncle Nico\'s Rage Elixir', 'Dauntworks', 9, 13),
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  sellPint(clickedKeg) {
    if (clickedKeg.pints > 0){
      clickedKeg.pints -= 1;
    } else {
      clickedKeg.pints = 0;
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

}
