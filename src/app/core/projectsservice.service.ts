import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../projects/projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsserviceService {
  //Propiedades
  public project: Project;
  public projects = environment.projects;
  public numprojects = 0;

  //Contructor
  constructor() { }

  //Metodos de proyectos
  public saveProject(project: any) {
    this.projects.push({ ...project });
    this.numprojects = this.getNumberOfProjects();
  }

  public filtrarProjects (id: number){
    return this.projects.filter(p => p.id == id);
  }

  public deleteFilters(){
    return this.projects;
  }

  public getNumberOfProjects(){
      return this.projects.length;
  }
}
