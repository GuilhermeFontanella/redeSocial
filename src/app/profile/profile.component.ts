import { Location } from '@angular/common';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild("nome", {read: ElementRef }) nome!: ElementRef;
  @ViewChild("foto", {read: ElementRef }) foto!: ElementRef;
  @ViewChild("email") email!: ElementRef;
  @ViewChild("local") local!: ElementRef;
  @Input() disabled: boolean = true;

  nomeDoUsuario: string | null = '';
  localUsuario: string | null = 'Paris FR';
  emailUsuario: string | null = ''
  fotoUsuario: string | null = '';

  constructor(
    private service: CadastroService,
    private _location: Location,
  ) { }

  ngOnInit(): void {
    this.getUsuario()
  }

  getUsuario() {
    this.nomeDoUsuario = window.localStorage.getItem('nomeUsuario');
    this.emailUsuario = window.localStorage.getItem('email'); 
    window.localStorage.getItem('fotoPerfil');
  }

  ok(a: number, infoAtual: string | null) {
    if(infoAtual) {
      this.nomeDoUsuario = infoAtual;
      this.service.showMessage("Informações alteradas com sucesso!");
    }
      
    return this.disabled = true;
  }

  editar(a: number, id: HTMLInputElement) {
    setTimeout(() => {
      id.focus();
    }, 200);
    return this.disabled = false;
  }
}
