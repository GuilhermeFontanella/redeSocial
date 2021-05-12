import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  selectedItem!: string;

  generos: any[] = [
    'Masculino',
    'Feminino',
    'Mariquinha',
    'Bixinha',
    'Baitola',
    'Viado'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
