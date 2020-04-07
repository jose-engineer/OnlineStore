import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  // products$: Observable<any>;
  // products: {title: string}[];
  products: any[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    // this.products$ = productService.getAll();
    this.subscription = productService.getAll().subscribe(p => this.filteredProducts = this.products = p);
  }

  filter(query: string) {
    console.log(this.products);
    this.filteredProducts = query ?
    this.products.filter(p => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
    this.products;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }



}
