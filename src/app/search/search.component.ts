import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchName = new EventEmitter<string>();
  searchForm = new FormGroup({
    query: new FormControl(''),
  });

  constructor() {
   }

  ngOnInit(): void {

  }

  search(q: string) {
    // console.log(this.searchForm);
    if(this.searchForm.valid) {
      this.searchName.emit(this.searchForm.value.query);
    }
    return false;
    // this.searchForm.disable;
  }

}
