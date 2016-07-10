import { Component } from '@angular/core';
import { AppState } from '../../app.service';

@Component({
  selector: 'home',  // <home></home>
  templateUrl: './home.template.html'
})

export class Home {
  // TypeScript public modifiers
  constructor(public appState: AppState) {
    console.log(appState)
  }

  ngOnInit() {
    console.log('hello `Home` component');
  }
}
