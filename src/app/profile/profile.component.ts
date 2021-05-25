import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private service: CadastroService,
  ) { }

  ngOnInit(): void {
  }

  getUsuario(idUsuario: number) {
    
  }

}
