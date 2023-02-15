import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PinService } from 'src/app/services/pin/pin.service';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss']
})
export class PinFormComponent implements OnInit {
  pinForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<PinFormComponent>, public formBuilder: FormBuilder,
              public pinService: PinService) {
    this.pinForm = this.formBuilder.group({
      content: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(400)
      ])),
      contactInfo: this.formBuilder.group({
        telephoneNumber: new FormControl(''),
        whatsapp: new FormControl(''),
        email: new FormControl('', Validators.email),
        direction: new FormControl('')
      }),
      duration: new FormControl(31, Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(31)
      ]))
    });
  }

  ngOnInit(): void {
  }

  submitPin(): void {
    this.pinService.sendPin(this.pinForm.value).subscribe(response => {
      this.dialogRef.close();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  disableSubmit(): boolean {
    return !this.pinForm.valid;
  }
}
