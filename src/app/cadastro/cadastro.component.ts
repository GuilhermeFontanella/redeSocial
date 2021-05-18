import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidarCamposService } from '../shared/validar-campos.service';
import { Usuario, Generos } from '../models/usuario.model';
import { CadastroService } from '../services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = {
    id : 0,
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    genero: '',
    email: '',
    senha: '',
    fotoUsuario: '',
    nomeUsuario: ''
  }

  generos: Generos[] = [
    {value: 'Masculino'},
    {value: 'Feminino'},
    {value: 'Outro'},
  ];

  matDatepicker = '';

  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    public validacao: ValidarCamposService
    ) { }

  ngOnInit(): void {
 
  }

  realizarCadastro(): void {
    this.cadastroService.realizarCadastro(this.usuario).subscribe(() => {
      console.log(this.usuario)
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

