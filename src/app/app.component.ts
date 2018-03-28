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
    new Keg('brussel sprout stout', 'Blade Boys Brewers', 5, 5),
    new Keg('Sour Ron', 'Ron\'s Brew', 5, 5),
    new Keg('Fidget Cider', 'On Fleek', 5, 5),
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }
}
