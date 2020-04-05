import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categoryService: CategoryService,
    private productService: ProductService) {

    this.categories$ = categoryService.getCategories();
    const id = route.snapshot.paramMap.get('id');
    if (id) {
      // productService.get(id).subscribe(p => this.product = p);
      productService.get(id).pipe(take(1)).subscribe(p => this.product = p);
    }

  }

  ngOnInit(): void {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

}
