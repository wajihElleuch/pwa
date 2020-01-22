import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import {FormatWidth, getLocaleDateTimeFormat} from '@angular/common';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  dateControl: FormControl = new FormControl('');
  updatedDate: any;

  constructor(public dialogRef: MatDialogRef<EditModalComponent>,
              @Inject(MAT_DIALOG_DATA) public message: any) {
  }

  ngOnInit() {
    this.dateControl.patchValue(new Date(this.message.date));
    this.dateControl.valueChanges.subscribe(value => {
      this.updatedDate = value;
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
