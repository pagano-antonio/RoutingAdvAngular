import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product  implements OnInit {
  productId!: string;
  referrer!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Parametro dinamico
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });

    // Query param
    this.route.queryParams.subscribe(q => {
      this.referrer = q['ref'] || 'direct';
    });
  }
}
