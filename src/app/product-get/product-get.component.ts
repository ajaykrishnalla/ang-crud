import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.scss'],
})
export class ProductGetComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  products: Product[];
  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }

  deleteProduct(id: number): any {
    this.productService.deleteProductById(id);
    this.products = this.products.filter((product) => product.id !== id);
  }
}
