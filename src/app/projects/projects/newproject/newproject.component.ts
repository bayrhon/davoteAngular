import { Component, OnInit } from '@angular/core';
import { ProjectsserviceService } from 'src/app/core/projectsservice.service';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {

  //Propiedades
  public newMaxid = (environment.projects.length);
  public project: Project;

  //Constructor
  constructor(private ProjectsserviceService:ProjectsserviceService) { }
  //Inicializador
  ngOnInit(): void {
    //Proyecto
    this.project = {
      id: this.newMaxid,
      name: '',
    };
  }

  //Metodos
  public save(project: any) {
    this.ProjectsserviceService.saveProject(project);
    this.newMaxid = (environment.projects.length);
    this.project = {
      id: this.newMaxid,
      name: '',
    };
  }

}
