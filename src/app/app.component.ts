import { Component, OnInit } from '@angular/core';
import { GetCurrencyDataService } from './services/get-currency-data.service';
import { CurrentData } from './models/currencyExchange.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data: CurrentData = new CurrentData;
  subscription: Subscription = new Subscription;
  constructor(
    private currencyService: GetCurrencyDataService,
    ) { }

  ngOnInit(): void {
    this.subscription = this.currencyService.getCurrentCurrency().subscribe(res => {this.data = res}, (error) => { console.log(error) })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
}

}
