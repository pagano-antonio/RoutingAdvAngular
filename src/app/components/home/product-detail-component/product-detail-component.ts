import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-component',
  imports: [],
  templateUrl: './product-detail-component.html',
  styleUrl: './product-detail-component.scss'
})
export class ProductDetailComponent {
  id = inject(ActivatedRoute).snapshot.paramMap.get('id');
}
