/**
 *
 * Created by Manuel Alejandro Acevedo Martin
 * 5541316510
 * alexo2k@gmail.com
 *
 *
 *  WTW Frontend EXAM
 */

import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActuarianModel, ActuarianResult } from '../models/actuarian.model';
import { ActuarianDialogComponent } from './dialogs/actuarian-dialog.component';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actuarianDataArray: ActuarianModel[] = [];
  actuarianResultArray: ActuarianResult[] = [];
  actualDataSource = new MatTableDataSource(this.actuarianDataArray);
  resultDataSource = new MatTableDataSource(this.actuarianResultArray);
  displayedColumns: string[] = ['mainLimit','mainRetention','execution'];
  resultColumns: string[] = ['referenceDate','benchmark1','benchmark2'];

  constructor(public dialog: MatDialog) {

  }

  displayActuarianForm() {

    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let actuarianDialog = this.dialog.open(ActuarianDialogComponent, dialogConfig);

    actuarianDialog.afterClosed().subscribe((result: ActuarianModel) => {
      if(result != null) {
        this.actuarianDataArray.push(result);
        this.actualDataSource = new MatTableDataSource(this.actuarianDataArray);
      }
    });

  }
  calculateActuarian() {

    if(this.actuarianDataArray == null || this.actuarianDataArray.length == 0) {
      alert('No data');
    } else {
      this.actuarianResultArray = [];
      this.actuarianDataArray.forEach(actElement => {
        let auxReferenceDate = new Date();
        let auxBenchmark = actElement.mainRetention;
        let auxBenchmark2 = actElement.mainLimit * (actElement.mainRetention / 100);
        this.actuarianResultArray.push(new ActuarianResult(auxReferenceDate, auxBenchmark, auxBenchmark2));
      });

      setTimeout(() => {
        this.resultDataSource = new MatTableDataSource(this.actuarianResultArray);
      }, 3000);
    }
  }


}
