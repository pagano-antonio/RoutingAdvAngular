import { Component } from '@angular/core';

@Component({
  selector: 'app-products-component',
  imports: [],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Pasta' },
    { id: 3, name: 'Pane' }
  ];
}
