import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, catchError, throwError } from 'rxjs';
import { Category } from '../model/category';
import { CategorySelectView } from '../view-model/category-select-view';
import { NewCategory } from '../view-model/new-category';
import { CategoryChartView } from '../view-model/category-chart-view';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiServerUrl = "http://localhost:8080"
  private categoryurl = '/category';

  constructor(private http: HttpClient) { }

  public getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiServerUrl}${this.categoryurl}/all`);
  }

  public getAllCategoryWithoutId(): Observable<CategoryChartView[]> {
    return this.http.get<Category[]>(`${this.apiServerUrl}${this.categoryurl}/all`).pipe(
      map((caategories: Category[]) => {
        return caategories.map(category => ({
          name: category.name,
          value: category.countCost
        }))
      })
    )
  }

  public addCategory(category: NewCategory): Observable<NewCategory> {
    return this.http.post<NewCategory>(`${this.apiServerUrl}${this.categoryurl}/add`, category)
  }

  public deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.apiServerUrl}${this.categoryurl}/delete/${id}`)
  }

  public getAllCategoryToSelect(): Observable<CategorySelectView[]> {
    return this.http.get<Category[]>(`${this.apiServerUrl}${this.categoryurl}/all`).pipe(
      map((categories: Category[]) => {
        return categories.map(category =>({
           id: category.id,
           name: category.name
          })
        )
      })
    );
  }
}
