import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../services/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  @Input() products: IProduct

  ngOnInit(): void {
  }

}
