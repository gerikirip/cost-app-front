
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostHomeComponent } from './cost-home/cost-home.component';

const routes: Routes = [
  { path: '', component: CostHomeComponent},
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostRoutingModule { }
