import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActuarianModel, ExecutionType } from '../../models/actuarian.model';

@Component({
    templateUrl: './actuarian-dialog.component.html'
}) export class ActuarianDialogComponent implements OnInit {

  actuarianForm!: FormGroup;
  actuarianResult!: ActuarianModel;
  executionTypes = Object.values(ExecutionType);

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ActuarianDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  ngOnInit(): void {
    this.actuarianForm = this.fb.group({
      'mainLimit': new FormControl('', [Validators.required, Validators.min(0)]),
      'mainRetention': new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      'executionType': new FormControl(ExecutionType.Simple, [Validators.required])
    });
  }

  saveActuarian() {

    if(this.actuarianForm.valid) {
      this.actuarianResult = new ActuarianModel(this.actuarianForm.controls['mainLimit'].value, this.actuarianForm.controls['mainRetention'].value,this.actuarianForm.controls['executionType'].value );
      this.dialogRef.close(this.actuarianResult);
    } else {
      alert(`Form is not valid. (How did you got here?)`);
    }

  }

  cancelActuarian() {
    this.dialogRef.close(null);
  }
}
