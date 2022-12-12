import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html' /* html */,
  styleUrls: ['./links.component.css'] /* css */,
})
export class LinksComponent {
  links = [
    {
      url: 'https://docs.google.com/document/d/1NRg1HMFs3BZG3JhIvHbElHPe2eXuVhQ7k9SKTEOebxE/edit#' /*Google Docs Url */,
      text: 'Tryk her:)' /*Click here to get to the google docs site */,
    },
  ];
}
