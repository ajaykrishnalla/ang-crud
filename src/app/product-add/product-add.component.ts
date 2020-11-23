import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required],
    });
  }

  addProduct(productName, productDescription, productPrice): void {
    this.productService.addProduct({
      productName,
      productDescription,
      productPrice,
    });
    this.router.navigate(['products']);
  }

  ngOnInit(): void {}
}
