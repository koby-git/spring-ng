import { Component, OnInit } from '@angular/core';
import {Item} from "../stack/model/item";
import {HttpClient} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'app-deposit-withdrawl',
  templateUrl: './deposit-withdrawal.component.html',
  styleUrls: ['./deposit-withdrawal.component.scss']
})
export class DepositWithdrawalComponent implements OnInit {

  model:Item ={
    itemNo:null,
    itemName:"",
    itemAmount:0,
    itemInventoryCode:0
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public deposit(id,amount){
    let url = "http://localhost:8080/api/stack/deposit/"+id+"/"+amount;
    this.http.put(url,this.model).subscribe(
      res=>{
        location.reload();
      },
      err=>{
        this.handleError(err)
        console.log('error!', err)
      }
    );
  }

  public withdrawal(id,amount){
    let url = "http://localhost:8080/api/stack/withdrawal/"+id+"/"+amount;
    this.http.put(url,this.model).subscribe(
      res=>{
        location.reload();
      },
      err=>{
        this.handleError(err)
        console.log('error!', err)
      }
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
