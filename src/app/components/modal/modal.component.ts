import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Vessel} from '../../models/vessel.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  details: any;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
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
    console.log(data);
    console.log(detail);
  }
}
