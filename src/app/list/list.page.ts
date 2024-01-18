import { Component, OnInit } from '@angular/core';
import { RadioService } from '../radio.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private radio: RadioService) { }
  radios:any;

  ngOnInit() {
	  this.radios = this.radio.radios();
  }

}
