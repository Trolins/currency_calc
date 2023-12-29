import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'header-data',
  templateUrl: './header-data.component.html',
  styleUrl: './header-data.component.scss'
})
export class HeaderDataComponent {
  @Input() actualData!: any;
}
