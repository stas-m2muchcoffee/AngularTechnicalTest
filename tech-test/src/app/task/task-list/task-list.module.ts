import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    SharedModule,
    TaskListRoutingModule
  ]
})
export class TaskListModule {
}
