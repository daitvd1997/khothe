import { BuycardService } from './../../services/buycard.service';
import { AlertService } from 'ngx-alerts';
import { TokenService } from './../../services/token.service';
import { BuyCardModel } from './../../model/BuyCardModel';
import { CardModel } from './../../model/CardModel';
import { Component, OnInit } from '@angular/core';
import { RESPONSE_STAUS } from 'src/environments/environment';

@Component({
  selector: 'app-buycard',
  templateUrl: './buycard.component.html',
  styleUrls: ['./buycard.component.css']
})
export class BuycardComponent implements OnInit {
  type:number;
  value:number;
  count= 0;
  list: CardModel[];
  token: string;
  message: string;
  constructor(private tokenService : TokenService, private alertService: AlertService, private buycardService : BuycardService) { }

  ngOnInit(): void {
  }

  buycard() {
    this.token = this.tokenService.getToken();
   console.log(this.token+'token');
   this.token = this.tokenService.getToken();
    if(!this.token) {
      this.alertService.danger("Hãy điền lại token của bạn");
      return;
    }
    this.list = [];
    let buycardModel : BuyCardModel = {
      apiToken : this.token,
      value: this.value,
      count: this.count,
      type: this.type,
    }
    this.buycardService.getAll(buycardModel).subscribe(response => {
      if (response.message === RESPONSE_STAUS.SUCCESS) {
        this.list = response.body;
        console.log(this.list);
        if(!this.list) {
          this.alertService.danger('Hết thẻ');
        }
      }else {
        this.alertService.danger(response.body);
      }
    });
  }
}
