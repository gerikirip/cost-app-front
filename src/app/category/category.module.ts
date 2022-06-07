import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    CategoryHomeComponent,
    CategoryFormComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoryRoutingModule,
    NgxChartsModule
  ],
  exports: [
    CategoryHomeComponent
  ]
})
export class CategoryModule { }
