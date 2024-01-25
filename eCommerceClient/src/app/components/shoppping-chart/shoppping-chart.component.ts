import { Component } from '@angular/core';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-shoppping-chart',
  standalone: true,
  imports: [TrCurrencyPipe],
  templateUrl: './shoppping-chart.component.html',
  styleUrl: './shoppping-chart.component.css'
})
export class ShopppingChartComponent {

}
