import { Component, OnInit } from '@angular/core';
import { ProjectsserviceService } from 'src/app/core/projectsservice.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {

  //Propiedades
  public project: Project;

  //Constructor
  constructor(private ProjectsserviceService:ProjectsserviceService) { }

  //Inicializador
  ngOnInit(): void {
    //Proyecto
    this.project = {
      id: 0,
      name: '',
    };
  }

  //Metodos
  public save(project: any) {
    this.ProjectsserviceService.saveProject(project);
    this.project = {
      id: 0,
      name: '',
    };
  }

}
