/* tslint:disable*/
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {LogService} from './services/log.service';
import {LogsComponent} from './logs/logs.component';
import {LogFormComponent} from './log-form/log-form.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        AppComponent,
        LogsComponent,
        LogFormComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [LogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
