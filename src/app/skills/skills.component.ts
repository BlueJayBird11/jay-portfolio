import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { FullCardComponent } from '../shared/full-card/full-card.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [BannerComponent, FullCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  programmingLanguages: string[] = ['Python', 'C', 'C#', 'C++', 'Java', 'TypeScript', 'JavaScript', 'Standard ML', 'Bash', 'Prolog', 'MATLAB', 'Assembly'];
  otherSkills: string[] = ['React', 'Angular', 'Express.js', 'PostgreSQL', 'MySQL', 'Linux', 'GitHub', 'git', 'Agile', 'Scrum', 'Raspberry Pi',
    'Data Mining/Analysis', 'Google Cloud Services', 'Unity', 'Reverse Engineering', 'Networking', 'Eve-ng', 'Arduino'];
}
