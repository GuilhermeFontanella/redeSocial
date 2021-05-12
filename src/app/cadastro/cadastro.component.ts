import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidarCamposService } from '../shared/validar-campos.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro!: FormGroup;

  matDatepicker = '';

  constructor(
    private validacao: ValidarCamposService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {

    this.cadastro = this.formBuilder.group({
        nome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(256)],
        sobrenome: ['', Validators.required, Validators.minLength(3), Validators.maxLength(256)],
        dataNascimento: ['', Validators.required],
        genero: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        senha: ['', Validators.required, Validators.minLength(6), Validators.maxLength(15)]          
    })    
  }

  onSubmit() {
    console.log(this.cadastro.value);
  }

}


