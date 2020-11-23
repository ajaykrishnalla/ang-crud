import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  product = {} as Product;
  angForm: FormGroup;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService
        .getProductById(params.id)
        .subscribe((res: Product) => {
          this.product = res;
        });
    });
  }

  updateProduct(
    productName: string,
    productDescription: string,
    productPrice: number
  ): void {
    const productDetails = {
      productName,
      productDescription,
      productPrice,
    };
    this.productService.updateProductById(productDetails, this.product.id);
    this.router.navigate(['products']);
  }
}
