import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LogService } from './services/log.service';
import { LogsComponent } from './logs/logs.component';
import { LogFormComponent } from './log-form/log-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
