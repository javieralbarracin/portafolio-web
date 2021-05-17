import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '@core/services/youtube.service';
import { GithubService } from '@core/services/github.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  repos: any;
  youtube: any;
  config: any;

  constructor(private gitHubService: GithubService, private youtubeService: YoutubeService) {
    
  }

  ngOnInit(): void {
    this.loadRepos();
    //this.loadYt();
  }

  loadRepos = () => {
    this.gitHubService.loadRepos().subscribe(res => {
      this.repos = res;
      //console.log(res)
    });
  };
  loadMyInfo(){
    
  }
  loadYt = () => {
    this.youtubeService.loadCourses().subscribe(res => {
      //console.log(res);
      this.youtube = res;
    });
  };

}
