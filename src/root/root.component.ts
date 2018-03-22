import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <header-nav></header-nav>
    <h1>hello world!</h1>
    <button mat-raised-button color="primary" rel="hi-button">Hi</button>
    <tile></tile>
  `,
    styles: [`
      * {
        font-family: AmericanSansLight, Arial, serif;
      }
      head, body, .app-content {
        height: 100vh;
        width: 100vw;
      }
    `]

})

export class RootComponent {
}
