import {Component, OnInit} from '@angular/core';
import { LinkContactModel } from '@core/models/link-contact.model';
import { ThemeService } from '@core/services/theme.service';
import { linksContact } from '../../core/models/links-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: LinkContactModel[] = linksContact
  isDarkMode: boolean=false;
  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
  }
  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }
}
