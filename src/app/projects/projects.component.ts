import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectsService } from './projects.service';
import { ProjectFullComponent } from './project-full/project-full.component';
import { Project } from './project/project.model';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, ProjectFullComponent, BannerComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private projectService: ProjectsService) {}
  selectedProjectId: string = '';

  get projects() {
    return this.projectService.getProjects();
  }

  setSelectedProjectId(id: string)
  {
    console.log(id);
    this.selectedProjectId = id;
  }

  onClose()
  {
    this.selectedProjectId = '';
  }

  getProjectById (id: string): Project
  {
    const emptyProject: Project = {
      id: 'N/A',
      name: 'N/A',
      type: 'N/A',
      photosPath: '',
      summary: '',
      skills: '',
      fullSummary: [],
      links: [],
      startDate: '',
      endDate: ''
    }
    console.log(id);
    const foundProject = this.projects.find((project) => project.id === id);

    if (foundProject)
    {
      return foundProject;
    }
    else
    {
      return emptyProject;
    }
  }
}
