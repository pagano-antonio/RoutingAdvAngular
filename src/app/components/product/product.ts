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
//http://localhost:4200/product/101?ref=homepage

  ngOnInit(): void {
    // Parametro dinamico
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
  

    // Query param
    //Legge i query params (es. ?ref=homepage) e imposta 
    // referrer. Se ref non è presente, imposta 'direct'.
    this.route.queryParams.subscribe(q => {
      this.referrer = q['ref'] || 'direct';
    });
  }
}
