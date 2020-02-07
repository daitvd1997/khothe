import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  token:string;
  constructor() { }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token');
  }
  submit() {
    // localStorage.setItem('token', this.token);
    // localStorage.setItem('date', new Date().getTime+'');
    // console.log(environment.apiToken + 'sss');
  }
}
