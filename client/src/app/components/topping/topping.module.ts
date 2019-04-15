import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToppingRoutingModule } from './topping-routing.module';
import { HighlightDirective } from '../shared/directives/highlight.directive';

import { ToppingInfoComponent } from './topping-info/topping-info.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { ToppingCreateComponent } from './topping-create/topping-create.component';
import { ToppingInfoResolver } from 'src/app/core/resolvers/topping/topping-info.resolver';

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
