/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Header } from './header'
import { Footer } from './footer'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives:[ Header, Footer],
  styleUrls: ['./app.style.css'],
  templateUrl: './app.component.html'
})
export class App {

  constructor(public appState: AppState) {
    //console.log(appState.state)
  }

  ngOnInit() {
    console.log('Hello App');
  }

}
