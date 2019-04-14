import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppingInfoComponent } from './topping-info/topping-info.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { ToppingRoutingModule } from './topping-routing.module';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';
import { ToppingCreateComponent } from './topping-create/topping-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToppingInfoComponent,
    HighlightDirective,
    ToppingListComponent,
    ToppingCreateComponent
  ],
  imports: [
    CommonModule,
    ToppingRoutingModule,
    ReactiveFormsModule
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
