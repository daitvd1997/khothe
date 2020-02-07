import { Injectable } from '@angular/core';
import { BuyCardModel } from '../model/BuyCardModel';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../model/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuycardService {
  constructor(private http: HttpClient) { }
  getAll(buycardModel:BuyCardModel) {      
    return this.http.post<ApiResponse>(environment.apiUrl + '/partner/buyCard/sdffsdnjsd', buycardModel);
}
}
