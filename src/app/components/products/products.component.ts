import {Component} from '@angular/core';
import {IProduct} from "../../services/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: IProduct[]
  loading = false

  constructor(public productsService: ProductsService) { }


  getData() {
    this.loading = true
    this.productsService.getAll()
      .subscribe(products => {
        this.products = products
        this.loading = false
      })
  }

}
