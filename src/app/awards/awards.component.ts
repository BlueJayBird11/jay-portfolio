import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { FullCardComponent } from '../shared/full-card/full-card.component';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [BannerComponent, FullCardComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {

}
