import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent {
  links = [
    {
      url: 'https://docs.google.com/document/d/1NRg1HMFs3BZG3JhIvHbElHPe2eXuVhQ7k9SKTEOebxE/edit#',
      text: 'Tryk her:)',
    },
  ];
}
