import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

}
