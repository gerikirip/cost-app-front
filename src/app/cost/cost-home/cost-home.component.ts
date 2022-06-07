import { Component, OnDestroy, OnInit } from '@angular/core';
import { CostService } from 'src/app/service/cost.service';
import { ViewCost } from '../../view-model/view-cost';
import { Observable, Subscription } from 'rxjs';
import { CategorySelectView } from 'src/app/view-model/category-select-view';
import { CategoryService } from '../../service/category.service';
import { ModeService } from '../../service/mode.service';
import { ModeSelectView } from 'src/app/view-model/mode-select-view';
import { NewCost } from '../../view-model/new-cost';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-cost-home',
  templateUrl: './cost-home.component.html',
  styleUrls: ['./cost-home.component.css']
})
export class CostHomeComponent implements OnInit, OnDestroy {
  costHeader = [
    { key: 'name', label: 'Név' },
    { key: 'category', label: 'Kategória' },
    { key: 'amount', label: 'Összeg(HUF)' },
    { key: 'quantity', label: 'Mennyiség(Db)' },
    { key: 'totalAmount', label: 'Összérték(HUF)' },
    { key: 'date', label : 'Dátum' },
    { key: 'mode', label : 'Fizetés módja' }
  ]
  costHeaderKey = [ 'name', 'category', 'amount', 'quantity', 'totalAmount', 'date', 'mode', 'delete' ]
  costs$: Observable<ViewCost[]> = new Observable;
  categoriesSelect$: Observable<CategorySelectView[]> = new Observable;
  modesSelect$: Observable<ModeSelectView[]> = new Observable;
  title = 'Költségek';
  subs: Subscription[] = []
  showSpinner = true;

  constructor(private costService: CostService,
              private categoryService: CategoryService,
              private modeService: ModeService) { }

  ngOnInit(): void {
    this.getCosts();
    this.getCategoryToSelect();
    this.getModeToSelect();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getCosts() {
    this.costs$ = this.costService.getAllCost();
  }

  getCategoryToSelect() {
    this.categoriesSelect$ = this.categoryService.getAllCategoryToSelect();
  }

  getModeToSelect() {
    this.modesSelect$ = this.modeService.getAllCategoryToSelect();
  }

  addCost(newCost: NewCost) {
    const addCostSub = this.costService.addCost(newCost).subscribe({
      next: () => {
        this.getCosts();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
    this.subs.push(addCostSub);
  }

  deleteCost(id: number): void{
    const deleteCostSub = this.costService.deleteCost(id).subscribe({
      next: () => {
        this.getCosts();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
    this.subs.push(deleteCostSub);
  }
}
