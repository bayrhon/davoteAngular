import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styles: []
})
export class ViewerprojectComponent implements OnInit {
  public project: Project;
  public projectId: number;
  public projects = environment.projects;
  public arryProjecto: any[];

  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
 }

  ngOnInit(): void {
    this.project = this.projects.find(p => p.id ==  this.projectId);
  }

}
