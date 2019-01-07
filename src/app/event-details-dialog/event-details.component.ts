import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-meeting-dialog',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsDialogComponent {

  constructor(public dialogRef: MatDialogRef<EventDetailsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
