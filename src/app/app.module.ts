import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmptyPipe } from './empty.pipe';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list/keg-list.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { SellPintComponent } from './sell-pint/sell-pint.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    EditKegComponent,
    SellPintComponent,
    EmptyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
