import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

@Component({
  selector: 'app-return-items',
  templateUrl: './return-items.component.html',
  styleUrls: ['./return-items.component.scss']
})
export class ReturnItemsComponent implements OnInit {

  public value: string;
  public value1: string;
  public value2: string;
  public value3: string;
  public value4: string;
  public value5: string;

  constructor() {

  }

  ngOnInit() {
  }


}



