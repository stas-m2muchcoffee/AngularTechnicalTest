import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetTasksResolver } from '../../core/resolvers/get-tasks.resolver';
import { TaskListComponent } from './task-list.component';

const routes: Routes = [{
  path: '',
  component: TaskListComponent,
  resolve: [GetTasksResolver],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskListRoutingModule {
}
