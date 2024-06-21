import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formUrl: string = 'https://formspree.io/f/' + environment.contactKey;
}
