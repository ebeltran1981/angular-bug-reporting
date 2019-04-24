import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRouting } from './dropdown.routing';
import { DropdownComponent } from './dropdown.component';
import {
  MultiSelectModule,
  DropDownListModule
} from '@syncfusion/ej2-angular-dropdowns';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    DropdownRouting,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    DropDownListModule
  ]
})
export class DropdownModule {}
