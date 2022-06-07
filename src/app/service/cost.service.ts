import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { Cost } from '../model/cost';
import { ViewCost } from '../view-model/view-cost';
import { NewCost } from '../view-model/new-cost';

@Injectable({
  providedIn: 'root'
})
export class CostService {
  private apiServerUrl = "http://localhost:8080"
  private costUrl = '/cost';

  constructor(private http: HttpClient) { }

  public getAllCost(): Observable<ViewCost[]> {
    return this.http.get<Cost[]>(`${this.apiServerUrl}${this.costUrl}/all`).pipe(
      map((costs: Cost[]) => {
        return costs.map(cost =>({
           id: cost.id,
           name: cost.name,
           category: cost.category.name,
           amount: cost.amount,
           quantity: cost.quantity,
           totalAmount: cost.totalAmount,
           date: cost.date,
           mode: cost.mode.name
          })
        )
      })
    );
  }

  public addCost(cost: NewCost): Observable<Cost> {
    return this.http.post<Cost>(`${this.apiServerUrl}${this.costUrl}/add`, cost)
  }

  public deleteCost(id: number):Observable<Cost> {
    return this.http.delete<Cost>(`${this.apiServerUrl}${this.costUrl}/delete/${id}`)
  }
}
