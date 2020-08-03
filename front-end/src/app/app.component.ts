import { Component } from '@angular/core';
import { ProjectService } from './shared/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAuth: boolean = false;
  public canLoad: boolean = false;
  constructor(public projectService: ProjectService) {
    this.projectService.getProject().subscribe(() => this.canLoad = true);
  }
}
