import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskDetailsComponent } from './task-details.component';
import { GetTaskResolver } from '../../core/resolvers/get-task.resolver';

const routes: Routes = [{
  path: '',
  component: TaskDetailsComponent,
  resolve: [GetTaskResolver],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskDetailsRoutingModule {
}
