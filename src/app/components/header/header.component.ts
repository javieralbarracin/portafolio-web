import {Component, OnInit} from '@angular/core';
import { LinkContactModel } from '@core/models/link-contact.model';
import { linksContact } from '../../core/models/links-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: LinkContactModel[] = linksContact
  constructor() {
  }

  ngOnInit(): void {
  }

}
