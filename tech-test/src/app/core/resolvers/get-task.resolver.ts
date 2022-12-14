import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { IRequest, RequestStatus } from 'ngxs-requests-plugin';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { TaskService } from '../services/task.service';

@Injectable({
  providedIn: 'root',
})
export class GetTaskResolver implements Resolve<Observable<IRequest>> {
  constructor(private taskService: TaskService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IRequest> {
    const taskId = route.parent.params.id;

    this.taskService.getTask(taskId);
    return this.taskService.getTaskRequestState$.pipe(
      filter(({ loaded, status }) => loaded && status === RequestStatus.Success),
      take(1),
    );
  }
}
