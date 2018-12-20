import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jest-app';

  constructor() {
  }

  public sum(a: number, b: number): number | null {
    return a && b ? a + b : null;
  }
}
