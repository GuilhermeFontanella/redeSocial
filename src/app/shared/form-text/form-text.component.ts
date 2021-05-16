import { Component, Input, Type } from '@angular/core';
import { AbstractControl, FormGroup, NgModel } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent {

  @Input() nome!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() tipo!: string;
  
  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
