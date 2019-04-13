import { Component, Input } from '@angular/core';
import { BurgerInfo } from 'src/app/core/models/burger/burger-info.model';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent {
  @Input() burgers: BurgerInfo[];
  @Input() title: string;
}
