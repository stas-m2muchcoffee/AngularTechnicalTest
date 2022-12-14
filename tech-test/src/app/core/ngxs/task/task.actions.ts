import { HttpErrorResponse } from '@angular/common/http';
import { Task } from '../../models/task.interface';

const ActionTypes = {
  SET_TASKS: '[Task] Set Tasks',

  GET_TASKS: '[Task] Get Tasks',
  GET_TASKS_SUCCESS: '[Task] Get Tasks Success',
  GET_TASKS_FAIL: '[Task] Get Tasks Fail',
};

export class SetTasks {
  static type = ActionTypes.SET_TASKS;

  constructor(public payload: Task[]) {
  }
}

export class GetTasks {
  static type = ActionTypes.GET_TASKS;
}

export class GetTasksSuccess {
  static type = ActionTypes.GET_TASKS_SUCCESS;

  constructor(public payload: Task[]) {
  }
}

export class GetTasksFail {
  static type = ActionTypes.GET_TASKS_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}
