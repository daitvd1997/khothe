import { MoneyhistoryService } from './../../services/moneyhistory.service';
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { RequestModel } from 'src/app/model/RequestModel';
import { RESPONSE_STAUS } from 'src/environments/environment';
import { TokenService } from 'src/app/services/token.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-moneyhistory',
  templateUrl: './moneyhistory.component.html',
  styleUrls: ['./moneyhistory.component.css']
})
export class MoneyhistoryComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'TYPE', 'MONEY', 'MESSAGE','LASTMONEY' ,'TIMEBUY'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  chogach = 0;
  selectedValue:-1;
  pageOption = [5, 10, 25, 100];
  page = 0;
  pageSize = 100;
  length = 0;
  pageEvent: PageEvent;
  currentUser :any;
  timeReload = 30;
  play = true;
  token:string;
  constructor(private moneyhistoryService: MoneyhistoryService, private tokenService: TokenService, private alertService : AlertService) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
   if(!this.token) {
     this.loadTable();
   }
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  loadTable() {
    this.token = this.tokenService.getToken();
    if(!this.token) {
      this.alertService.danger("Hãy điền lại token của bạn");
      return;
    }
    let requestModel :RequestModel = {
      apiToken : this.token,
      page: this.page,
      size: this.pageSize,
    };
    this.listData = null;
    this.moneyhistoryService.getAll(requestModel).subscribe(response => {
      if (response.message === RESPONSE_STAUS.SUCCESS) {
        this.listData = new MatTableDataSource(response.body.content);
        this.listData.sort = this.sort;
        this.length = response.body.totalElements;
      }else {
        this.alertService.danger(response.body);
      }
    });
  } 

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  getServerData(event?: PageEvent) {
    this.pageSize = event.pageSize;
    console.log(this.pageSize);    
    this.page = event.pageIndex;
    console.log(this.page);
    this.loadTable();
  }
  loading() {
    console.log(this.token);
    this.loadTable();
  }
}
