import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidarCamposService } from '../shared/validar-campos.service';
import { Usuario } from '../models/usuario.model';
import { CadastroService } from '../services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    genero: '',
    email: '',
    senha: ''
  }

  cadastro!: FormGroup;

  matDatepicker = '';

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private router: Router,
    public validacao: ValidarCamposService
    ) { }

  ngOnInit(): void {

    this.cadastro = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(256)]],
      dataNascimento: [''],
      genero: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]          
    })  
  }

  onSubmit() {
    console.log(this.cadastro.value);
    this.realizarCadastro();
  }

  realizarCadastro(): void {
    this.cadastroService.realizarCadastro(this.usuario).subscribe(() => {
      this.cadastroService.showMessage("Usuário cadastrado com sucesso!")
      this.router.navigate(['/login'])
      }, erro => {
        if(erro.status == 400 || erro.status == 500) {
          console.log(erro);
        }
      }
    );
  }
}

