import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppingInfoComponent } from './topping-info/topping-info.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { ToppingRoutingModule } from './topping-router.module';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';

@NgModule({
  declarations: [
    ToppingInfoComponent,
    HighlightDirective,
    ToppingListComponent
  ],
  imports: [
    CommonModule,
    ToppingRoutingModule,
  ],
  providers:[
    ToppingInfoResolver
  ],
  exports: [
    ToppingInfoComponent,
    HighlightDirective
  ]
})
export class ToppingModule { }
