import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('./task/task.module').then((mod) => mod.TaskModule),
  },
  {
    path: '**',
    redirectTo: '/tasks',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
