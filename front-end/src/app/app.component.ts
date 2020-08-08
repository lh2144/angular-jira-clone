import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuth: boolean = false;
  public canLoad: boolean;
  constructor(public projectService: ProjectService, public router: Router) {
    // this.projectService.getProject().subscribe(() => this.canLoad = true);
    this.router.events.subscribe((event) => {
      if (event.hasOwnProperty('url')) {
        const url = event['url'];
        // this.isAuth = true;
        if (url === '/login') {
          this.isAuth = false;
          return;
        }
        if (url === '/') {
          this.isAuth = false;
          return;
        }
        this.isAuth = true;
      }
    });
  }

  public ngOnInit(): void {
    this.canLoad = this.projectService.canLoad;
  }
}
