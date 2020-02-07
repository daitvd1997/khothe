import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestModel } from '../model/RequestModel';
import { ApiResponse } from '../model/ApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoneyhistoryService {

  constructor(private http: HttpClient) { }

  getAll(requestModel:RequestModel) {      
      return this.http.post<ApiResponse>(environment.apiUrl + '/partner/money', requestModel);
  }
}
