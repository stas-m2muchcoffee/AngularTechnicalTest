import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { IRequest, RequestStatus } from 'ngxs-requests-plugin';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { TaskService } from '../services/task.service';

@Injectable({
  providedIn: 'root',
})
export class GetTasksResolver implements Resolve<Observable<IRequest>> {
  constructor(private taskService: TaskService) {
  }

  resolve(): Observable<IRequest> {
    this.taskService.getTasks();
    return this.taskService.getTasksRequestState$.pipe(
      filter(({ loaded, status }) => loaded && status === RequestStatus.Success),
      take(1),
    );
  }
}
