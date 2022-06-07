import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() columnKeys: any[] = [];
  @Input() rows: any[] = [];
  @Output() onDelete: EventEmitter<any> = new EventEmitter();


  dataSource = new MatTableDataSource<any>(this.rows);

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.rows);
  }

  delete(id: number) {
    this.onDelete.emit(id);
  }
}
