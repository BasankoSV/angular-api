import { Component } from '@angular/core';
import {ProductsService} from "./services/products.service";
import {IProduct} from "./services/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private productsService: ProductsService
  ) { }

  products: IProduct[] =[]

}
