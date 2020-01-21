import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-delet-confirmation',
  templateUrl: './delet-confirmation.component.html',
  styleUrls: ['./delet-confirmation.component.scss']
})
export class DeletConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public message: string) {
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
