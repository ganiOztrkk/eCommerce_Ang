import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAuthenticated: boolean = false;

  constructor(
    private auth: AuthService,
    public cart: ShoppingCartService
    ){
    this.isAuthenticated = this.auth.isAuthenticated();
  }



}