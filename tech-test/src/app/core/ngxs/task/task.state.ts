import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Action, State, StateContext } from '@ngxs/store';
import { createRequestAction, RequestState } from 'ngxs-requests-plugin';

import {
  GetTask, GetTaskFail,
  GetTasks,
  GetTasksFail,
  GetTasksSuccess, GetTaskSuccess, SetTask,
  SetTasks,
} from './task.actions';
import { Task } from '../../models/task.interface';
import { environment } from '../../../../environments/environment';

export interface TaskStateModel {
  entities: { [key: number]: Task };
  ids: number[];
  currentTaskId: number;
}

@Injectable()
@RequestState('getTasks')
export class GetTasksRequestState {
}

@Injectable()
@RequestState('getTask')
export class GetTaskRequestState {
}

@State<TaskStateModel>({
  name: 'task',
  defaults: {
    entities: {},
    ids: [],
    currentTaskId: null,
  },
})
@Injectable()
export class TaskState {
  constructor(
    private httpClient: HttpClient
  ) {}

  @Action(SetTasks)
  setTasks({ patchState }: StateContext<TaskStateModel>, { payload }: SetTasks) {
    const entities = payload.reduce((acc, task) => ({
      ...acc,
      [task.id]: task,
    }), {});
    const ids = payload.map((task) => task.id);

    return patchState({
      entities,
      ids,
    });
  }

  @Action(SetTask)
  setTask({ getState, patchState }: StateContext<TaskStateModel>, { payload }: SetTask) {
    const { entities, ids } = getState();

    return patchState({
      entities: {
        ...entities,
        [payload.id]: payload,
      },
      ids: [...new Set([...ids, payload.id])],
      currentTaskId: payload.id,
    });
  }

  @Action(GetTasks)
  getTasks({ dispatch }: StateContext<TaskStateModel>) {
    const request = this.httpClient.get(`${environment.apiUrl}/tasks`);

    return dispatch(
      createRequestAction({
        state: GetTasksRequestState,
        request,
        successAction: GetTasksSuccess,
        failAction: GetTasksFail,
      }),
    );
  }

  @Action(GetTasksSuccess)
  getTasksSuccess({ dispatch }: StateContext<TaskStateModel>, { payload }: GetTasksSuccess) {
    return dispatch(new SetTasks(payload));
  }

  @Action(GetTask)
  getTask({ dispatch }: StateContext<TaskStateModel>, { payload }: GetTask) {
    const request = this.httpClient.get(`${environment.apiUrl}/tasks/${payload}`);

    return dispatch(
      createRequestAction({
        state: GetTaskRequestState,
        request,
        successAction: GetTaskSuccess,
        failAction: GetTaskFail,
      }),
    );
  }

  @Action(GetTaskSuccess)
  getTaskSuccess({ dispatch }: StateContext<TaskStateModel>, { payload }: GetTaskSuccess) {
    return dispatch(new SetTask(payload));
  }
}
