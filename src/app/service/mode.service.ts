import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Mode } from '../model/mode';
import { ModeSelectView } from '../view-model/mode-select-view';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private apiServerUrl = "http://localhost:8080"
  private costUrl = '/mode';

  constructor(private http: HttpClient) { }

  public getAllCategoryToSelect(): Observable<ModeSelectView[]> {
    return this.http.get<Mode[]>(`${this.apiServerUrl}${this.costUrl}/all`).pipe(
      map((modes: Mode[]) => {
        return modes.map(mode =>({
           id: mode.id,
           name: mode.name
          })
        )
      })
    );
  }
}
