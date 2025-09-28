import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product implements OnInit {
  productId!: string;
  referrer!: string;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    console.log("dentro ngOnInit");

    // Parametro dinamico
    //http://localhost:4200/product/101

    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });

    console.log(this.productId);


    /*
 const id = this.route.snapshot.params['id'];
this.productId = id;
console.log(this.productId)
  */

    // Query param
    /*
        this.route.queryParams.subscribe(q => {
          this.referrer = q['ref'] || 'direct';
        });
        console.log(this.referrer);
    */
    //per prendere entrambi 
    /*
       combineLatest([
         this.route.params,
         this.route.queryParams
       ]).subscribe(([p, q]) => {
         const id = p['id'];               // parametro di rotta
         const ref = q['ref'] || 'direct'; // parametro query
         console.log('id:', id, 'ref:', ref);
       });
   */


  }

}
