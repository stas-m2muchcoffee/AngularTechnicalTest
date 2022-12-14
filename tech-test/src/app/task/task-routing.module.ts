import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './task.component';

const routes: Routes = [{
  path: '',
  component: TaskComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      loadChildren: () => import('./task-list/task-list.module').then((mod) => mod.TaskListModule),
    },
    {
      path: ':id',
      loadChildren: () => import('./task-details/task-details.module').then((mod) => mod.TaskDetailsModule),
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
