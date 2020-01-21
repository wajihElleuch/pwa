import {AfterViewInit, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Vessel} from '../../models/vessel.model';
import {VesselsService} from '../list-vessels/services/vessels.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, AfterViewInit {
  details: any;

  constructor(private vesselsService: VesselsService, public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Vessel) {
  }

  ngOnInit() {
    // .filter(value => value[0] !== 'id')
    this.details = Object.keys(this.data.details);
    console.log(this.details);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    console.table(Object.keys(this.data.details));
  }

  updateData(data: Vessel, detail: any) {
    // let datePipe = new DatePipe();
    // datePipe.transform(Date.now(),"dd-MM-yyyy")
    if (data.details[detail].checked) {
      data.details[detail].checked = false;
      data.details[detail].date = Date.now();
    } else {
      data.details[detail].checked = true;
      data.details[detail].date = Date.now();
    }

    console.log(data.details[detail].checked);
    console.log();
    console.log(data);
    console.log(detail);
    this.vesselsService.updateVessel(data).subscribe(value => console.log(value));
  }
}
