import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { RandomSequenceComponent } from './random-sequence/random-sequence.component';
import { HeadsOrTailsComponent } from './heads-or-tails/heads-or-tails.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomSequenceComponent,
    HeadsOrTailsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
