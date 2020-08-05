import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService, Project } from 'app/shared/service';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent implements OnInit {

  public settingForm: FormGroup;
  public categories: string[] = ['Business', 'Marketing', 'software'];
  public currentProject: Project;
  constructor(public projectService: ProjectService, public fb: FormBuilder) { }

  public ngOnInit(): void {
    this.settingForm = this.fb.group({
      name: [null, Validators.required],
      url: [null, Validators.required],
      category: [null, Validators.required],
      descp: [null, Validators.required]
    });

    this.currentProject = this.projectService.porject;
    this.settingForm.setValue({
      name: this.currentProject.name,
      url: this.currentProject.url,
      category: this.currentProject.category,
      descp: this.currentProject.description
    });
  }
  get f(): any {
    return this.settingForm.value;
  }

  public onSave(): void {
    const payload = {};
    payload['name'] = this.f.name;
    payload['url'] = this.f.url;
    payload['category'] = this.f.category;
    payload['descp'] = this.f.descp;
  }

}
