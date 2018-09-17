import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface HistoryFeeback {
  jobname: string;
  quotename: string;
  startdate: string;
  enddate: string;
  status: string;
  rating: number;
  ratingdetails: string;
}

export interface Customer {
  rating: number;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Leo Jackson-50 Shearale Honley', 'Sophie Knight-123 Fake Street', 'Ella Jackson-DHhdhhdllskslkfdsldhfslfsdlkf'];
  customer: Customer[] = [
    {rating: 3}
  ];
  filteredOptions: Observable<string[]>;
  displayedColumns: string[] = ['jobname', 'quotename', 'startdate', 'enddate', 'status', 'rating', 'ratingdetails'];
  historyFeebacks: HistoryFeeback[] = [
    {jobname: 'New Worktop', quotename : 'Bobs Kitchen', startdate: '01/01/2018',
    enddate: '01/03/2018', status: 'Complete', rating: 5, ratingdetails: 'Great Job Lovely Work'}
  ];
  rating = 3;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
