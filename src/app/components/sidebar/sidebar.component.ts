import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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

  avatarGit: any='assets/avatars/user.jpg';
  //image:any
  imageError:any='assets/avatars/user.jpg'
  public image?:Blob;
  public imageUrl?:SafeUrl;
  errorLoadPhoto:boolean=true

  constructor(private gitHubService: GithubService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.gitHubService.getRepo()
      .subscribe( ( res:any ) => this.dataProfile = res);
    this.loadAvatar();
  }

  loadAvatar(){
    this.gitHubService.loadAvatar().subscribe(avatar =>{
      this.image = avatar
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image))
      //console.log('avatar-->',avatar)
      this.errorLoadPhoto=false
    },catchError=>{
      this.errorLoadPhoto=true
      console.log(catchError)
    })   
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


