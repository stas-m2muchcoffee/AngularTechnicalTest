import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsStoreModule } from './ngxs/ngxs-store.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxsStoreModule,
  ],
})
export class CoreModule {
}
