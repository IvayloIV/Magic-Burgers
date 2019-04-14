import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/app/core/validations/validateUrl';
import { ToppingService } from 'src/app/core/services/topping.service';

@Component({
  selector: 'app-topping-create',
  templateUrl: './topping-create.component.html',
  styleUrls: ['./topping-create.component.css']
})
export class ToppingCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toppingService: ToppingService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      origin: ['', Validators.required],
      price: ['0', [Validators.required, Validators.min(0.1)]],
      weight: ['0', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, ValidateUrl]]
    });
  }

  get f() {
    return this.form.controls;
  }

  createTopping() {
    const payload = this.form.value;
    this.toppingService.createTopping(payload).subscribe();
  }
}
