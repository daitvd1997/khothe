import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  token:string;
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }
  setToken() {
    console.log('aaa'+ this.token);
    this.tokenService.setToken(this.token);
  }
}
