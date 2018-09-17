import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { JobAddTaskComponent } from './job/job-add-task/job-add-task.component';

export interface QuoteItem {
  itemcode: string;
  itemname: string;
  unitcost: number;
  qty: number;
  total: number;
}


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
