import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [CommonModule]
})
export class SharedModule { }
