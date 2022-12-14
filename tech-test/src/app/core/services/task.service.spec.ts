import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import {
  editTaskData,
  expectedStateAfterGetList,
  expectedStateAfterUpdate,
  testTasksData
} from '../../test-data/test-tasks-data';
import { GetTasksRequestState, TaskState } from '../ngxs/task/task.state';
import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { TaskService } from './task.service';
import { HttpClient } from '@angular/common/http';
import { NgxsRequestsPluginModule } from 'ngxs-requests-plugin';

@Injectable()
class FakeApiService {
  get(apiEndPoint) {
    return of(testTasksData);
  }

  patch(apiEndPoint, body) {
    return of(editTaskData);
  }
}

describe('TaskService', () => {
  let taskService: TaskService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([TaskState]),
        NgxsRequestsPluginModule.forRoot([GetTasksRequestState])
      ],
      providers: [
        TaskService,
        { provide: HttpClient, useClass: FakeApiService },
      ],
    });

    store = TestBed.inject(Store);
    taskService = TestBed.inject(TaskService);
  });

  it('should get the tasks and set them to the state', done => {
    taskService.getTasks();

    store.subscribe(states => {
      expect(states.task).toEqual(expectedStateAfterGetList);
      done();
    });
  });

  it('should edit the task and set it to the state', done => {
    store.reset({ task: expectedStateAfterGetList });
    const { id, ...editedData } = editTaskData;

    taskService.editTask(String(id), editedData);

    store.subscribe(states => {
      expect(states.task).toEqual(expectedStateAfterUpdate);
      done();
    });
  });
});
