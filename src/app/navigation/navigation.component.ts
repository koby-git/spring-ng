import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//nav component - navigate between pages
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
}
