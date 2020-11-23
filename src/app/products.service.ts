import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  addProduct(productDetails): void {
    this.http
      .post(this.url, productDetails)
      .subscribe((res) => console.log(res));
  }

  getAllProducts(): any {
    return this.http.get(this.url);
  }

  getProductById(id: number): any {
    return this.http.get(`${this.url}/${id}`);
  }

  updateProductById(productDetails: Product, id: number): any {
    return this.http
      .put(`${this.url}/${id}`, productDetails)
      .subscribe((res) => console.log(res));
  }

  deleteProductById(id: number): any {
    return this.http.delete(`${this.url}/${id}`).subscribe((res) => res);
  }
}
