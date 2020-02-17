import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../stack/model/item";
import {throwError} from "rxjs";


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  model:Item ={
    itemNo:null,
    itemName:"",
    itemAmount:1,
    itemInventoryCode:null
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addItem():void{
    let url = "http://localhost:8080/api/stack/add-item";
    this.http.post(url,this.model).subscribe(
      res=>{
        location.reload();

      },
      err=>{
        this.handleError(err)
        console.log(err)
      }
    )
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

