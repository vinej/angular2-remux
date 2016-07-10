import { Component } from '@angular/core';
import { AppState } from '../../app.service';

@Component({
  selector: 'footer',
  template: `
    </div>
  `
})
export class Footer {
  store = null
  constructor(public appState: AppState) {
    this.store = appState.state
  }

  ngOnInit() {
    console.log('Hello Footer');
  }
}
