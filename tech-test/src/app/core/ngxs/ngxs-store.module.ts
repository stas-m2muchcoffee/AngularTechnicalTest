import { NgModule } from '@angular/core';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsRequestsPluginModule } from 'ngxs-requests-plugin';

import { environment } from '../../../environments/environment';
import { GetTasksRequestState, TaskState } from './task/task.state';


@NgModule({
  imports: [
    NgxsModule.forRoot(
      [
        TaskState,
      ],
      {
        developmentMode: !environment.production,
      },
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsRequestsPluginModule.forRoot([
      GetTasksRequestState,
    ]),
  ],
})
export class NgxsStoreModule {}
