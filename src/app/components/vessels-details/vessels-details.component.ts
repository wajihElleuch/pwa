import {Component, OnDestroy, OnInit} from '@angular/core';
import {VesselDetailStateService} from '../../state/vessel-detail-state.service';
import {Subscription} from 'rxjs';
import {Vessel} from '../../models/vessel.model';
import {MatDialog} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';
import {VesselsService} from '../list-vessels/services/vessels.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vessels-details',
  templateUrl: './vessels-details.component.html',
  styleUrls: ['./vessels-details.component.scss'],
})
export class VesselsDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  vessel: Vessel;

  constructor(private activatedRoute: ActivatedRoute, private vesselDetailStateService: VesselDetailStateService, public dialog: MatDialog, private vesselsService: VesselsService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(x => {
      this.vesselsService.getVesselById(x.get('id')).subscribe((value: Vessel) => {
        this.vessel = value;
        console.log(value);
      });
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: this.vessel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      //this.animal = result;
    });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
