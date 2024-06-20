import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { Project } from './project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input({required: true}) project!: Project;
  @Output() select = new EventEmitter<string>();

  firstImage(pathName: string)
  {
    return 'assets/projects/' + pathName + '/0.png';
  }

  selectProject() {
    console.log("HERE: " + this.project);
    this.select.emit(this.project.id);
  }
}
