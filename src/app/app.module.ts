import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-alerts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardhistoryComponent } from './components/cardhistory/cardhistory.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { SettingComponent } from './components/setting/setting.component';
import { MoneyhistoryComponent } from './components/moneyhistory/moneyhistory.component';
import { BuycardComponent } from './components/buycard/buycard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardhistoryComponent,
    MainComponent,
    SettingComponent,
    MoneyhistoryComponent,
    BuycardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
