import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pin } from '../../models/pin.model';
import { PinService } from '../../services/pin/pin.service';
import { PinFormComponent } from '../pin-form/pin-form.component';
import { PinViewComponent } from '../pin-view/pin-view.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  pins: Array<Pin>;
  constructor(public pinService: PinService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pinService.getPins().subscribe(response => {
      this.pins = response;
    }, error => {
      console.log(error);
    });
  }

  addPin(): void {
    const dialogRef = this.dialog.open(PinFormComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  pinStillAvailable(pin: Pin): boolean {
    const creationDate = new Date(pin.createdAt);
    const today = new Date();
    return (pin.duration - Math.round((today.getTime() - creationDate.getTime()) / (1000 * 60 * 60 * 24))) > 0;
  }

  onDragEnded(event: CdkDragEnd): void {
    const currentPosition = event.source.getFreeDragPosition();
    const pin: Pin = event.source.data;
    pin.position = currentPosition;
    this.pinService.updatePin(pin._id, pin).subscribe();
  }

  openDialog(pin: Pin): void {
    const dialogRef = this.dialog.open(PinViewComponent, {
      height: '550px',
      width: '500px',
      data: pin,
      panelClass: 'dialog-view'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  creationDate(pin: Pin): string {
    const days = ['Hoy', 'Ayer', 'Anteayer'];
    const creationDate = new Date(pin.createdAt);
    const today = new Date();
    const daysPast = Math.floor((today.getTime() - creationDate.getTime()) / (1000 * 60 * 60 * 24));
    return daysPast > 2 ? `${daysPast} dias atras` :  days[daysPast];
  }
}
