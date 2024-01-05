import { Component, Input } from '@angular/core';
import { CurrentData } from '../models/currencyExchange.model';

@Component({
  selector: 'header-data',
  templateUrl: './header-data.component.html',
  styleUrl: './header-data.component.scss'
})
export class HeaderDataComponent {
  @Input() actualData: CurrentData = new CurrentData;
}
