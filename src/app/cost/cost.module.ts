import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CostRoutingModule } from './cost-routing.module';
import { CostHomeComponent } from './cost-home/cost-home.component';
import { CostFormComponent } from './cost-form/cost-form.component';


@NgModule({
  declarations: [
    CostHomeComponent,
    CostFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CostRoutingModule
  ],
  exports: [
    CostHomeComponent
  ]
})
export class CostModule { }
