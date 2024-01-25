import { Component } from '@angular/core';
import { shoes } from '../../../assets/shoes-images';
import { TrCurrencyPipe } from 'tr-currency';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { Shoe } from '../../models/shoe.Model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TrCurrencyPipe, FormsModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  shoes: Shoe[] = shoes;
  isAuthenticated: boolean = false;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private cart: ShoppingCartService
    ){
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  addShoppingChart(productId: string){
    this.http.get("")
    .subscribe({
      next: (res: any) => {
        this.cart.count ++;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

}