import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BurgerDetails } from 'src/app/core/models/burger/burger-details.model';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent {
  @Input() orderFrom: FormGroup;
  @Input() burger: BurgerDetails;

  get f() {
    return this.orderFrom.controls;
  }

  changeProducts(product: string) {
    let currentProducts = this.f['products'].value;
    const indexOfProduct = currentProducts.indexOf(product);

    if (indexOfProduct === -1) {
      currentProducts.push(product);
    } else {
      currentProducts.splice(indexOfProduct, 1);
    }

    this.f['products'].setValue(currentProducts);
  }
}
