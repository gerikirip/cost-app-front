import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'cost',
    loadChildren: () =>
      import('./cost/cost.module').then(m => m.CostModule)
  },
  { path: 'category',
    loadChildren: () =>
      import('./category/category.module').then(m => m.CategoryModule)
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
