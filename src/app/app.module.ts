import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import {StocksComponent} from './stocks.components';
import { ChangeColorDirective } from './change-color.directive';
import {HighLightDirective} from './highlight.directive';
import {StockService} from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    StocksComponent,
    ChangeColorDirective,
    HighLightDirective,
    DateFormatterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
