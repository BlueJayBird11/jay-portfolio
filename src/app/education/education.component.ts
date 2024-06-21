import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { FullCardComponent } from '../shared/full-card/full-card.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [BannerComponent, FullCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
