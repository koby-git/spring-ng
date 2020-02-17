import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StackComponent } from './stack/stack.component';

import {NotFoundComponent} from "./not-found/not-found.component";
import { AddItemComponent } from './add-item/add-item.component';

import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import { DepositWithdrawalComponent } from './deposit-withdrawal/deposit-withdrawal.component';

//rout between component
const appRoutes: Routes=
  [
    {
      path:'stack',
      component:StackComponent
    },
    {
      path:'add-item',
      component:AddItemComponent
    },
    {
      path:'deposit-withdrawal',
      component:DepositWithdrawalComponent
    },
    {
      path:'',
      component:StackComponent,
      pathMatch:'full'
    },
    {
      path:'**',
      component:NotFoundComponent
    },
  ]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StackComponent,
    AddItemComponent,
    DepositWithdrawalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
