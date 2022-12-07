import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActuarianModel } from '../models/actuarian.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actuarianDataArray: ActuarianModel[] = [];

  constructor(public dialog: MatDialog) {

  }

  displayActuarianForm() {
    alert('Im a form');
    //Code to display form
  }

}
