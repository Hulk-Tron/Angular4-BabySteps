import{Component} from "@angular/core";
import {StockService} from "./stock.service"

@Component({
    selector: 'stock',
    template : `<h1>Stocks Components</h1>
    {{title}}
    <ul>
    <li *ngFor="let stock of stocks">
    {{stock}}
    </li>
    </ul>
    `
})

export class StocksComponent{
title = "List of stocks";
stocks;

constructor(StockService : StockService){
    this.stocks = StockService.getStocks();
}

}