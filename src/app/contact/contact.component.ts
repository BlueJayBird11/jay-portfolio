import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { environment } from '../../environments/environment';
import { FullCardComponent } from '../shared/full-card/full-card.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerComponent, FullCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formUrl: string = 'https://formspree.io/f/' + import.meta.env.NG_APP_FORMSKEY;
}
