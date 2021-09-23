import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  setSearchTerm : EventEmitter<string> = new EventEmitter();

  @Output()
  Rested : EventEmitter<void>=new EventEmitter();


  searchTerm : string;

  constructor() {
    this.searchTerm = "";
  }

  ngOnInit(){
  }

  search() {
    this.setSearchTerm.next(this.searchTerm);
  }

  reset(){
    this.searchTerm = '';
    this.Rested.next();
  }


}
