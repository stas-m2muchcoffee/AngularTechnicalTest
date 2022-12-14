import { HttpErrorResponse } from '@angular/common/http';
import { Task } from '../../models/task.interface';

const ActionTypes = {
  SET_TASKS: '[Task] Set Tasks',
  SET_TASK: '[Task] Set Task',

  GET_TASKS: '[Task] Get Tasks',
  GET_TASKS_SUCCESS: '[Task] Get Tasks Success',
  GET_TASKS_FAIL: '[Task] Get Tasks Fail',

  GET_TASK: '[Task] Get Task',
  GET_TASK_SUCCESS: '[Task] Get Task Success',
  GET_TASK_FAIL: '[Task] Get Task Fail',

  EDIT_TASK: '[Task] Edit Task',
  EDIT_TASK_SUCCESS: '[Task] Edit Task Success',
  EDIT_TASK_FAIL: '[Task] Edit Task Fail',
};

export class SetTasks {
  static type = ActionTypes.SET_TASKS;

  constructor(public payload: Task[]) {
  }
}

export class SetTask {
  static type = ActionTypes.SET_TASK;

  constructor(public payload: Task) {
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

export class GetTask {
  static type = ActionTypes.GET_TASK;

  constructor(public payload: string) {
  }
}

export class GetTaskSuccess {
  static type = ActionTypes.GET_TASK_SUCCESS;

  constructor(public payload: Task) {
  }
}

export class GetTaskFail {
  static type = ActionTypes.GET_TASK_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class EditTask {
  static type = ActionTypes.GET_TASK;

  constructor(public payload: {
    id: string,
    task: Task,
  }) {
  }
}

export class EditTaskSuccess {
  static type = ActionTypes.GET_TASK_SUCCESS;

  constructor(public payload: Task) {
  }
}

export class EditTaskFail {
  static type = ActionTypes.GET_TASK_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}
