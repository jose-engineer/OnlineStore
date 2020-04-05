import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<any> {
    // return this.db.list('/products').valueChanges();
    return this.db.list('/products').snapshotChanges();
  }

  get(productId) {
    // return this.db.object('/products/' + productId).snapshotChanges();
    return this.db.object('/products/' + productId).valueChanges();
  }

}
