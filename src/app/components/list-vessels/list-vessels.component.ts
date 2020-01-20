import {Component, OnInit} from '@angular/core';
import {VesselsService} from './services/vessels.service';

@Component({
  selector: 'app-list-vessels',
  templateUrl: './list-vessels.component.html',
  styleUrls: ['./list-vessels.component.scss'],
})
export class ListVesselsComponent implements OnInit {
  vessels: any[];
  constructor(private  vesselsService: VesselsService) {
  }

  ngOnInit() {
    this.vesselsService.getAllVessels().subscribe((vessels: any[]) => {
      this.vessels = vessels;
    });
  }

}
