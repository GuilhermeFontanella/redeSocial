import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})
export class SpeakComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irParaProfile() {
    this.router.navigate(['/profile']);
  }

}
