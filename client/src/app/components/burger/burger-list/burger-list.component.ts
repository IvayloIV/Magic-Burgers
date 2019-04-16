import { Component, Input } from '@angular/core';
import { BurgerInfo } from 'src/app/core/models/burger/burger-info.model';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.scss']
})
export class BurgerListComponent {
  @Input() burgers: BurgerInfo[];
  @Input() name: string;
}
