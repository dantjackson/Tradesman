import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule} from '@angular/material';

import { NavexampleComponent } from './navexample/navexample.component';
import { LayoutModule } from '@angular/cdk/layout';

import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { PlanComponent } from './plan/plan.component';
import { ConfigComponent } from './config/config.component';
import { PerformComponent } from './perform/perform.component';
import { QuoteComponent, PrintDialogComponent } from './quote/quote.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { JobComponent } from './job/job.component';
import { JobAddTaskComponent } from './job/job-add-task/job-add-task.component';
import { JobAddPartComponent } from './job/job-add-part/job-add-part.component';
import { JobAddOrderComponent } from './job/job-add-order/job-add-order.component';

const appRoutes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'job', component: JobComponent },
  { path: 'account', component: AccountComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'perform', component: PerformComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavexampleComponent,
    CustomerComponent,
    AccountComponent,
    PlanComponent,
    ConfigComponent,
    PerformComponent,
    QuoteComponent,
    PrintDialogComponent,
    InvoiceComponent,
    JobComponent,
    JobAddTaskComponent,
    JobAddPartComponent,
    JobAddOrderComponent
  ],
  entryComponents: [PrintDialogComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}

