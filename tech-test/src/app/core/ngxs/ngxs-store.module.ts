import { NgModule } from '@angular/core';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsRequestsPluginModule } from 'ngxs-requests-plugin';

import { environment } from '../../../environments/environment';


@NgModule({
  imports: [
    NgxsModule.forRoot(
      [],
      {
        developmentMode: !environment.production,
      },
    ),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsRequestsPluginModule.forRoot([]),
  ],
})
export class NgxsStoreModule {}
