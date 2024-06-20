import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../project/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-full',
  standalone: true,
  imports: [],
  templateUrl: './project-full.component.html',
  styleUrl: './project-full.component.css'
})
export class ProjectFullComponent {
  @Input({required: true}) project!: Project;
  @Output() close = new EventEmitter<void>();
  // project: Project = this.projectService.getProjectById(this.projectId);

  onClose() {
    this.close.emit();
  }
}
