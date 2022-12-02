import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
})
export class LinksComponent {
  links = [
    {
      url: 'https://discord.gg',
      text: 'Contact Us',
    },
  ];
}
