import { Component, Input, Type } from '@angular/core';
import { AbstractControl, FormGroup, NgModel } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent {

  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() tipo!: string;
  @Input() ngModel!: string;
  
  // constructor(public validacao: ValidarCamposService) { }

  // get formControl(): AbstractControl {
  //   return this.formGroup.controls[this.controlName];
  // }

}
