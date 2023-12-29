import { Component, SimpleChanges } from '@angular/core';
import { GetCurrencyDataService } from './services/get-currency-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data: any;
  constructor(
    private currencyService: GetCurrencyDataService,
    ) { }

  ngOnInit(changes: SimpleChanges): void {
    this.getCurrency();
  }

  getCurrency() {
    this.currencyService.GetCurrentCurrency().subscribe(
      res => {
        this.data = res;
      },
      error => {
      }
    )
  }

}
