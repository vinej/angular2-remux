import { Component } from '@angular/core';
import { AppState } from '../../app.service';

@Component({
  selector: 'footer',
  template: `
    <div class="pure-g footer">
      <div class="pure-u-1-2"><div>Version 0.1.0</div></div>
      <div class="pure-u-1-2"><div>JYV</div></div>
    </div>
  `
})
export class Footer {
  constructor(public appState: AppState) {
    //this.store = appState.state
  }

  ngOnInit() {
    console.log('Hello Footer');
  }
}