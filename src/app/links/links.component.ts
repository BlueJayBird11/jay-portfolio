import { Component } from '@angular/core';
import { BannerComponent } from '../shared/banner/banner.component';
import { FullCardComponent } from '../shared/full-card/full-card.component';

@Component({
    selector: 'app-links',
    standalone: true,
    templateUrl: './links.component.html',
    styleUrl: './links.component.css',
    imports: [BannerComponent, FullCardComponent]
})
export class LinksComponent {

}
