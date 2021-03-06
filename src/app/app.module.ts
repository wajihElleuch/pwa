import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {ListVesselsComponent} from './components/list-vessels/list-vessels.component';
import {VesselsDetailsComponent} from './components/vessels-details/vessels-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressBarModule,
  MatRippleModule, MatToolbarModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {ModalComponent} from './components/modal/modal.component';
import {FlexModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DeletConfirmationComponent} from './components/modal/confirmation/delet-confirmation/delet-confirmation.component';
import {EditModalComponent} from './components/modal/confirmation/edit-modal/edit-modal.component';
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule} from 'ngx-mat-datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    ListVesselsComponent,
    VesselsDetailsComponent,
    ModalComponent,
    DeletConfirmationComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    FlexModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSnackBarModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, DeletConfirmationComponent, EditModalComponent]
})
export class AppModule {
}
