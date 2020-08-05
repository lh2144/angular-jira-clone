import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from './shared/component/sharedcomponent.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectSettingComponent } from './project-setting/project-setting.component';
import { BoardComponent } from './board/board.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BoardFilterComponent } from './board/board-filter/board-filter.component';
import { ProjectService } from './shared/service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ErrorpageComponent,
    ProjectSettingComponent,
    BoardComponent,
    BoardListComponent,
    BoardFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedComponentModule,
    NgbModule,
    NoopAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: ProjectService) => () => service.getProject().toPromise(),
      deps: [ProjectService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
