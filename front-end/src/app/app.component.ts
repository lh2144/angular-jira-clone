import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuth: boolean = false;
  public canLoad: boolean;
  constructor(public projectService: ProjectService) {
    // this.projectService.getProject().subscribe(() => this.canLoad = true);
    console.log(this.projectService.porject);
  }

  public ngOnInit(): void {
    this.canLoad = this.projectService.canLoad;
  }
}
