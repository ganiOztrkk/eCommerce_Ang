import { Component } from '@angular/core';
import { Shoe, shoes } from '../../../assets/shoes-images';
import { TrCurrencyPipe } from 'tr-currency';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TrCurrencyPipe, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  shoes: Shoe[] = shoes;
}