import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http"; //обязательно добавлять в app.module.ts импорт
import {IProduct} from "./product";
import {delay, Observable, retry, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  // products: IProduct[] = []

  getAll():Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5)
    })
      // .pipe(
      // delay(2000), // ставим задержку, чтоб увидеть сообщение о загрузке данных
      // retry(2), // повторяем запрос два раза
      // tap(products => this.products = products)
      // , catchError(this.errorHandler.bind(this)) - потом доделать проверку на ошибки
    // )
  }

}

// 'https://fakestoreapi.com/products?limit=5' - без params тоже работает
// params: new HttpParams({ fromString: 'limit=5'})
// params: new HttpParams({ fromObject: { limit: 5}})
