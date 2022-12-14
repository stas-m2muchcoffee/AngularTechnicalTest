import { Injectable } from '@angular/core';

import { Select, Store } from '@ngxs/store';
import { IRequest } from 'ngxs-requests-plugin';
import { Observable } from 'rxjs';

import { TaskGetterState } from '../ngxs/task/task-getter.state';
import { GetTasksRequestState } from '../ngxs/task/task.state';
import { GetTasks } from '../ngxs/task/task.actions';
import { Task } from '../models/task.interface';


@Injectable({
  providedIn: 'root',
})
export class TaskService {

  @Select(TaskGetterState.getTasks)
  tasks$: Observable<Task[]>;

  @Select(GetTasksRequestState)
  getTasksRequestState$: Observable<IRequest>;

  constructor(private store: Store) {}

  getTasks() {
    this.store.dispatch(new GetTasks());
  }
}
