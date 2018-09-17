import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface QuoteItem {
  itemcode: string;
  itemname: string;
  unitcost: number;
  qty: number;
  total: number;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Leo Jackson-50 Shearale Honley', 'Sophie Knight-123 Fake Street', 'Ella Jackson-DHhdhhdllskslkfdsldhfslfsdlkf'];
  filteredOptions: Observable<string[]>;
  displayedColumns: string[] = ['select', 'itemcode', 'itemname', 'unitcost', 'qty', 'total'];
  quoteitems: QuoteItem[] = [
    {itemcode: '12345', itemname : 'Beach ball', unitcost: 4, qty: 3, total: 12}
  ];
  dataSource = new MatTableDataSource<QuoteItem>(this.quoteitems);

  selection = new SelectionModel<QuoteItem>(true, []);
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PrintDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.quoteitems.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}

@Component({
  selector: 'app-print',
  templateUrl: 'print.component.html',
})
export class PrintDialogComponent {}
