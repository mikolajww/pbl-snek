import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Output() onSearch: EventEmitter<string>;
  constructor() {
    this.onSearch = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  search(query:HTMLInputElement) {
    this.onSearch.emit(query.value);
  }

}
