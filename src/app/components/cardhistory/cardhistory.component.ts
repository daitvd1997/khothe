import { TokenService } from './../../services/token.service';
import { RequestModel } from './../../model/RequestModel';
import { CardhistoryService } from './../../services/cardhistory.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PageEvent, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RESPONSE_STAUS } from 'src/environments/environment';
import { AlertService } from 'ngx-alerts';
@Component({
  selector: 'app-cardhistory',
  templateUrl: './cardhistory.component.html',
  styleUrls: ['./cardhistory.component.css']
})
export class CardhistoryComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'CODE', 'SERI', 'VALUE', 'TYPE', 'TIMEBUY'];
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
  constructor(private cardhistoryService: CardhistoryService, private tokenService: TokenService, private alertService: AlertService) { }

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
   console.log(this.token+'token');
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
    this.cardhistoryService.getAll(requestModel).subscribe(response => {
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
