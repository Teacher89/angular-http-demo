import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Random API Usage Examples</h1>
    <hr>
    <app-random-sequence></app-random-sequence>
    <hr>
    <app-heads-or-tails></app-heads-or-tails>
    <hr>
  `,
})
export class AppComponent {
  title = 'app';
}
