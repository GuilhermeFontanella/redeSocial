import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker-form',
  templateUrl: './date-picker-form.component.html',
  styleUrls: ['./date-picker-form.component.css']
})
export class DatePickerFormComponent implements OnInit {

  dataNascimento = new FormControl('', Validators.required); 

  constructor() { }

  ngOnInit(): void {
  }

}
