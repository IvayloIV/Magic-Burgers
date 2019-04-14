import { Component, Input } from '@angular/core';
import { BurgerInfo } from 'src/app/core/models/burger/burger-info.model';

@Component({
  selector: 'app-burger-info',
  templateUrl: './burger-info.component.html',
  styleUrls: ['./burger-info.component.css']
})
export class BurgerInfoComponent {
  @Input() burger: BurgerInfo;
  isAuth: boolean;

  constructor() {
    this.isAuth = localStorage.getItem('authToken') !== null;
  }
}
