import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../model/category';
import { CategoryService } from '../../service/category.service';
import { NewCategory } from '../../view-model/new-category';
import { CategoryChartView } from '../../view-model/category-chart-view';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit, OnDestroy {
  categoryHeader = [
    { key: 'name', label: 'Név' },
    { key: 'countCost', label: 'Mennyiség' },
  ]
  categoryHeaderKey = [ 'name', 'countCost', 'delete' ]
  categories$: Observable<Category[]> = new Observable;
  categoriesWithoutId$: Observable<CategoryChartView[]> = new Observable;
  title = 'Kategóriák';
  subs: Subscription[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
    this.getCategoryWithoutId();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getCategory() {
    this.categories$ = this.categoryService.getAllCategory();
  }

  getCategoryWithoutId() {
    this.categoriesWithoutId$ = this.categoryService.getAllCategoryWithoutId();
  }

  addCategory(newCategory: NewCategory){
    const addCategorySub = this.categoryService.addCategory(newCategory).subscribe({
      next: () => {
        this.getCategory();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
    this.subs.push(addCategorySub);
  }

  deleteCategory(id: number) {
    const deleteCategorySub = this.categoryService.deleteCategory(id).subscribe({
      next: () => {
        this.getCategory();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
    this.subs.push(deleteCategorySub);
  }
}
