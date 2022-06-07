import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewCategory } from '../../view-model/new-category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Output() onAddCategory: EventEmitter<NewCategory> = new EventEmitter();

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let newCategory: NewCategory = {
      name: this.categoryForm.get('name')?.value
    };

    if(this.categoryForm.valid){
      this.onAddCategory.emit(newCategory);
    }
  }
}
