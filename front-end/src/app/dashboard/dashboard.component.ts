import { Component, OnInit } from '@angular/core';
import { ProjectService, User, Issue, IssuePriority } from 'app/shared/service';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public pipeChar: ChartType = ChartType.PieChart;
  public barChar: ChartType = ChartType.BarChart;
  public pipeData: any;
  public barData: any;
  public charColumP: string[] = ['Assignee', 'ticket'];
  public charColumB: string[] = ['Prioity', 'number'];
  public chartTitleP: string = 'current assgined ticket';
  public chartTitleB: string = 'tottal tickets';
  public user: User[];
  public issue: Issue[];
  public myOption: any;

  constructor(public projectService: ProjectService) { }

  public ngOnInit(): void {
    this.user = this.projectService.users;
    this.issue = this.projectService.issues;

    this.pipeData = new Array(this.user.length).fill(0).map(() => new Array());
    this.barData = new Array(3).fill(0).map(() => new Array());
    this.createPipeData();
    this.createBarData();
    console.log(this.barData);
    console.log(this.pipeData);
    this.myOption = {
      width: 500,
      height: 300
    };
  }

  public createPipeData(): void {
    this.user.forEach((val, index) => {
      let count = 0;
      for (let i = 0; i < this.issue.length; i++) {
        if (this.issue[i].userIds.includes(val.id)) {
          count++;
        }
      }
      this.pipeData[index].push(val.name, count);
    });
  }

  public createBarData(): void {
    const highCount = this.issue.filter(val => val.priority === IssuePriority.HIGH).length;
    const mediumCount = this.issue.filter(val => val.priority === IssuePriority.MEDIUM).length;
    const lowCount = this.issue.filter(val => val.priority === IssuePriority.LOW).length;
    this.barData[0].push('High', highCount);
    this.barData[1].push('medium', mediumCount);
    this.barData[2].push('low', lowCount);
  }

}
