import { Component, OnInit, Input } from '@angular/core';
import { Generos } from '../../models/usuario.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  
  generos: Generos[] = [
    {value: 'Masculino'},
    {value: 'Feminino'},
    {value: 'Outro'},
  ];
  
  cadastro = new FormControl('', Validators.required); 

  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


}
