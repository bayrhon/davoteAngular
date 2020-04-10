import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styles: []
})
export class ViewerprojectComponent implements OnInit {
  public projectId = '';
  constructor(activateRoute: ActivatedRoute) {
    this.projectId = activateRoute.snapshot.params['id'];
 }

  ngOnInit(): void {
  }

}
