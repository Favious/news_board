import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Pin } from 'src/app/models/pin.model';

@Component({
  selector: 'app-pin-view',
  templateUrl: './pin-view.component.html',
  styleUrls: ['./pin-view.component.scss']
})

export class PinViewComponent {

  constructor(
    public dialogRef: MatDialogRef<PinViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pin) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  creationDate(): string {
    const days = ['Hoy', 'Ayer', 'Anteayer'];
    const creationDate = new Date(this.data.createdAt);
    const today = new Date();
    const daysPast = Math.floor((today.getTime() - creationDate.getTime()) / (1000 * 60 * 60 * 24));
    return daysPast > 2 ? `${daysPast} dias atras` :  days[daysPast];
  }
  showContactInfo(): boolean {
    return this.data.contactInfo.email || this.data.contactInfo.whatsapp ||this.data.contactInfo.telephoneNumber
      || this.data.contactInfo.direction;
  }
}
