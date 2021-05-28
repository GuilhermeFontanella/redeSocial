import { Location } from '@angular/common';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("nome") nome!: ElementRef;
  @ViewChild("email") email!: ElementRef;
  @ViewChild("local") local!: ElementRef;
  @Input() disabled: boolean = true;

  nomeDoUsuario: string = 'fulano_de_tal';
  localUsuario: string = 'Paris FR';
  emailUsuario: string = 'usuario@email.com'

  constructor(
    private service: CadastroService,
    private _location: Location,
  ) { }

  ngOnInit(): void {
  }

  getUsuario(idUsuario: number) {
    
  }

  editar(a: number) {
    this.disabled = false;
    if(a == 1) {
      console.log("clicou em " + a)
      setTimeout(() => {
      this.nome.nativeElement.focus();
    }, 100);
    }
    if (a == 2) {
      console.log("clicou em " + a)
      setTimeout(() => {
        this.email.nativeElement.focus();
      }, 100);
    }
    if (a == 3) {
      console.log("clicou em " + a)
      setTimeout(() => {
        this.local.nativeElement.focus();
      }, 100);
    }    
  }

  ok() {
    console.log("editou o nome");
    this.disabled = true;
    alert("Alteração feita com sucesso!")
  }
  voltar() {
    this._location.back();
  }

}
