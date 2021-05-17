import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LinkSocialMediaModel } from '@core/models/link-social-media.model';
import { GithubService } from '@core/services/github.service';
import Typewriter from 't-writer.js';
import { linksSocialMedia } from '../../core/models/links-data';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle!: ElementRef;
  links: Array<LinkSocialMediaModel> = linksSocialMedia
  dataProfile: any;

  constructor(private gitHubService: GithubService) {
  }

  ngOnInit(): void {
    this.gitHubService.getRepo()
      .subscribe( ( res:any ) => this.dataProfile = res);
  }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white'
    });

    writer
      .changeCursorColor('white')
      .type('Javier Albarracin')
      .rest(30000)
      .clear()
      .type('Proximamente subiré videos')
      .rest(2000)
      .start();

  };


}


