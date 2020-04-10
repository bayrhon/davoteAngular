import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {

  public newMaxid = (environment.projects.length) + 1

  public project: Project;
  public projects = environment.projects;
  public numprojects = 0;
  constructor() { }

  ngOnInit(): void {

    //Proyecto
    this.project = {
      id: this.newMaxid,
      name: 'David',
    };
  }

  public saveProject() {
    this.projects.push({ ...this.project });
    this.numprojects = this.projects.length;
  }

  public deleteProject(project: Project) {
    this.projects = this.projects.filter(p => p.id !== project.id);
    this.numprojects = this.projects.length;
  }
}
