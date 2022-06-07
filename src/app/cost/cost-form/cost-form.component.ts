import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewCost } from 'src/app/view-model/new-cost';

@Component({
  selector: 'app-cost-form',
  templateUrl: './cost-form.component.html',
  styleUrls: ['./cost-form.component.css']
})
export class CostFormComponent implements OnInit {
  @Input() categories: any[] = [];
  @Input() modes: any[] = [];
  @Output() onAddCost: EventEmitter<NewCost> = new EventEmitter();

  costForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    amount: new FormControl('1', [Validators.required, Validators.pattern(/^([1-9]\d*)?$/)]),
    quantity: new FormControl('1', [Validators.required, Validators.pattern(/^([1-9]\d*)?$/)]),
    date: new FormControl(new Date(), [Validators.required]),
    category: new FormControl('', [Validators.required]),
    mode: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {}

  onSubmit(){
    let newCost: NewCost = {
      name: this.costForm.get('name')?.value,
      amount: Number(this.costForm.get('amount')?.value),
      quantity: Number(this.costForm.get('quantity')?.value),
      date: new Date(this.costForm.get('date')?.value),
      categoryId: Number(this.costForm.get('category')?.value),
      modeId: Number(this.costForm.get('mode')?.value)
    };

    if(this.costForm.valid){
      this.onAddCost.emit(newCost);
    }
  }
}
