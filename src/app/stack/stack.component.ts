import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "./model/item";

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  items: Item[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.reloadStack()
  }

  public reloadStack(){
    let url = "http://localhost:8080/api/stack/";
    this.http.get<Item[]>(url).subscribe(
      res=>{
        this.items = res
      },
      err=>{
        console.log('error!', err)
      }
    );
  }

  public deleteRow(id){
    let url = "http://localhost:8080/api/stack/delete/" + id;
    this.http.delete(url).subscribe(
      res=>{
        location.reload();
      },
      err=>{
        console.log('error!', err)
      }
    );
  }
}
