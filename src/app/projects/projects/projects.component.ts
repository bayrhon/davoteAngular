import { Component, OnInit } from '@angular/core';
import { ProjectsserviceService } from 'src/app/core/projectsservice.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {
  //Propiedades
  public projects: any[];
  public project: Project;

  //Constructor
  constructor(private ProjectsserviceService:ProjectsserviceService) { }

  //Inicializador
  ngOnInit(): void {
      this.projects = this.ProjectsserviceService.projects;
  }

  public onFilter(id: number) {
    this.projects = this.ProjectsserviceService.filtrarProjects(id);
  }

  public onDeleteFilter(deleteFilter: number) {
    if(deleteFilter === 1) {
      this.projects = this.ProjectsserviceService.deleteFilters();
    }
  }
}
