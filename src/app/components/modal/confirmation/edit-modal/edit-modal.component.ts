import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditModalComponent>,
              @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
