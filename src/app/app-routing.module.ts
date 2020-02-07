import { BuycardComponent } from './components/buycard/buycard.component';
import { MoneyhistoryComponent } from './components/moneyhistory/moneyhistory.component';
import { SettingComponent } from './components/setting/setting.component';
import { CardhistoryComponent } from './components/cardhistory/cardhistory.component';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "dashboard",
    component : MainComponent,
    children : [
      {path : "cardhistory", component: CardhistoryComponent},
      {path : "setting", component: SettingComponent},
      {path : "money", component: MoneyhistoryComponent},
      {path : "buycard", component: BuycardComponent}
    ]
  },

  { path: "", redirectTo: "dashboard" , pathMatch: "full"},
  { path: "cardhistory", redirectTo : "dashboard/cardhistory",pathMatch: "full" },
  { path: "setting", redirectTo : "dashboard/setting" ,pathMatch: "full"},
  { path: "money", redirectTo : "dashboard/money" ,pathMatch: "full"},
  {path: "buycard", redirectTo : "dashboard/buycard" ,pathMatch: "full"},
  { path: "**", redirectTo: "dashboard" , pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
