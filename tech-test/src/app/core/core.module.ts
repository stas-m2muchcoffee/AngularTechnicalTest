import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsStoreModule } from './ngxs/ngxs-store.module';
import { TaskService } from './services/task.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxsStoreModule,
  ],
  providers: [
    TaskService,
  ]
})
export class CoreModule {
}
