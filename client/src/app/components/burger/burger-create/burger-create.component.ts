import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { BurgerService } from 'src/app/core/services/burger.service';

@Component({
  selector: 'app-burger-create',
  templateUrl: './burger-create.component.html',
  styleUrls: ['./burger-create.component.css']
})
export class BurgerCreateComponent implements OnInit {
  @ViewChild('newProduct') newProduct: ElementRef;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private burgerService: BurgerService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['0', [Validators.required, Validators.min(0.1)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(70)]],
      weight: ['0', [Validators.required, Validators.min(0.1)]],
      calories: ['0', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, ValidateUrl]],
      products: [[]]
    });
  }

  get f() {
    return this.form.controls;
  }

  addProduct() {
    const product = this.newProduct.nativeElement.value;
    if (product === '') {
      return;
    }
    let currentProducts = this.f['products'].value;
    this.f['products'].setValue([...currentProducts, product]);
    this.newProduct.nativeElement.value = '';
  }

  createBurger() {
    const body = this.form.value;
    this.burgerService.createBurger(body).subscribe();
  }

}
