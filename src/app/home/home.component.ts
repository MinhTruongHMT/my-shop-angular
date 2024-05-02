import { Component } from '@angular/core';
import { ProductsComponent } from '../components/products/products.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {
    const user = localStorage.getItem('userLogin');
    !user ? router.navigateByUrl('login') : null;
  }
}
