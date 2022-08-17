import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {IProduct} from "./services/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public productsService: ProductsService) { }

  products: IProduct[]

  getData() {
    this.productsService.getAll()
      .subscribe(products => this.products = products)
  }
}
