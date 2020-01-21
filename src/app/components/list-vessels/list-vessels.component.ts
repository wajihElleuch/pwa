import {Component, OnInit} from '@angular/core';
import {VesselsService} from './services/vessels.service';
import {Vessel} from '../../models/vessel.model';
import {Router} from '@angular/router';
import {VesselDetailStateService} from '../../state/vessel-detail-state.service';

@Component({
  selector: 'app-list-vessels',
  templateUrl: './list-vessels.component.html',
  styleUrls: ['./list-vessels.component.scss'],
})
export class ListVesselsComponent implements OnInit {
  vessels: Vessel[];

  constructor(private  vesselsService: VesselsService, private router: Router, private vesselDetailStateService: VesselDetailStateService) {
  }

  ngOnInit() {
    this.vesselsService.getAllVessels().subscribe((vessels: Vessel[]) => {
      this.vessels = vessels;
    });
  }

  goToDetails(vessel: Vessel) {
    this.vesselDetailStateService.addVessel(vessel);
    this.router.navigate(['/vessels/' + vessel.id]);
  }
}
