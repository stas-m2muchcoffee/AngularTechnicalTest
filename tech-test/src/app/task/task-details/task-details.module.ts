import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TaskDetailsRoutingModule } from './task-details-routing.module';
import { TaskDetailsComponent } from './task-details.component';


@NgModule({
  declarations: [
    TaskDetailsComponent
  ],
  imports: [
    SharedModule,
    TaskDetailsRoutingModule
  ]
})
export class TaskDetailsModule {
}
