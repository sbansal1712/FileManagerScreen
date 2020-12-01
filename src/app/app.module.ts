import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OWL_DATE_TIME_FORMATS
} from "ng-pick-datetime";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";



import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppMaterialModule } from './material-module';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material/daterangepicker.module';





import {FileManagerModule} from 'ng6-file-man';

export const MY_NATIVE_FORMATS = {
  fullPickerInput: {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  },
  datePickerInput: { year: "numeric", month: "short", day: "numeric" },
  timePickerInput: { hour: "numeric", minute: "numeric" },
  monthYearLabel: { year: "numeric", month: "short" },
  dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
  monthYearA11yLabel: { year: "numeric", month: "long" }
};


@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FileManagerModule
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
   
  ],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
