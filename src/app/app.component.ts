import { Component } from '@angular/core';
import {StocksComponent} from './stocks.components'
import {HighLightDirective} from './highlight.directive'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adds';
  today = new Date()
}
