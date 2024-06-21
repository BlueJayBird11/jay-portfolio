import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { AwardsComponent } from './awards/awards.component';
import { SkillsComponent } from './skills/skills.component';
import { LinksComponent } from './links/links.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProjectsComponent, EducationComponent, AwardsComponent, SkillsComponent, LinksComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jay-portfolio';

  findThenScroll(elS: string)
  {
    let el: HTMLElement = <HTMLElement>document.getElementById(elS);
    const offset = 80;
    const scrollPosition = el.offsetTop - offset;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }
}
