import { Component, Input, OnInit } from '@angular/core';
import { CategoryChartView } from '../../view-model/category-chart-view';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() categoriesWithoutId: CategoryChartView[] = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.categoriesWithoutId)
  }

}
