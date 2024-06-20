import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
    selector: 'app-links',
    standalone: true,
    templateUrl: './links.component.html',
    styleUrl: './links.component.css',
    imports: [BannerComponent]
})
export class LinksComponent {

}
