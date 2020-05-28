import {NgModule} from '@angular/core';
import {NbAccordionModule, NbAlertModule, NbCardModule, NbListModule, NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    NbCardModule,
    NbAccordionModule,
    NbListModule,
    NbAlertModule,
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
  ],
})
export class PagesModule {
}
