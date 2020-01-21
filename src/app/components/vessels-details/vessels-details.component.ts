import {Component, OnDestroy, OnInit} from '@angular/core';
import {VesselDetailStateService} from '../../state/vessel-detail-state.service';
import {Subscription} from 'rxjs';
import {Vessel} from '../../models/vessel.model';
import {MatDialog} from '@angular/material';
import {ModalComponent} from '../modal/modal.component';
import {VesselsService} from '../list-vessels/services/vessels.service';
import {ActivatedRoute} from '@angular/router';
import {DeletConfirmationComponent} from '../modal/confirmation/delet-confirmation/delet-confirmation.component';

@Component({
  selector: 'app-vessels-details',
  templateUrl: './vessels-details.component.html',
  styleUrls: ['./vessels-details.component.scss'],
})
export class VesselsDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  vessel: Vessel;
  details: any;
  sorted: any[];

  constructor(private activatedRoute: ActivatedRoute, private vesselDetailStateService: VesselDetailStateService, public dialog: MatDialog, private vesselsService: VesselsService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(x => {
      this.vesselsService.getVesselById(x.get('id')).subscribe((value: Vessel) => {
        this.vessel = value;
        this.details = Object.keys(this.vessel.details);
        const obj = Object.entries(this.vessel.details);
        this.sorted = obj.sort((a, b) => {
          console.log(a[1].date);
          return a[1].date - b[1].date;
        });
        console.log(this.sorted);
        console.log(obj);

        // console.log(value);
      });
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      panelClass: 'my-dialog',
      width: '80vw',
      height: '60vh',
      data: this.vessel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.sorted = Object.entries(this.vessel.details).sort((a, b) => {
        // console.log(a[1].date);
        return a[1].date - b[1].date;
      });
      //this.animal = result;
    });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  delete() {
    confirm('are you sure');
  }

  openDeleteDialog(detail) {
    const dialogRef = this.dialog.open(DeletConfirmationComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(this.vessel.details[detail[0]]);
        this.vessel.details[detail[0]].checked = false;
        console.log(this.vessel.details[detail[0]].checked);
        this.vesselsService.updateVessel(this.vessel).subscribe(value => console.log(value));
        console.log('Yes clicked');
        // DO SOMETHING
      }
    });

  }
}
