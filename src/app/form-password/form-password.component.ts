import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarCamposService } from '../shared/validar-campos.service';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent {

  @Input() nome!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() tipo!: string;
  
  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
