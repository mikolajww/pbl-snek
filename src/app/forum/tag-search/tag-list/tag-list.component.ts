import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../model/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() tags:Tag[];
  constructor() { }

  ngOnInit() {
    console.log("tags" , this.tags)
  }

}
