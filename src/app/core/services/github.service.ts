import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly url = 'https://api.github.com/users/javieralbarracin/repos';
  private readonly urlContent = 'https://raw.githubusercontent.com/wiki/javieralbarracin';
  private readonly urlRepoProfile = 'https://api.github.com/repos/javieralbarracin/template-admin-pro';
  private readonly urlAvatar = 'https://avatars.githubusercontent.com/u/66478769?v=4';
  constructor(private httpClient: HttpClient) {
  }

  loadRepos = () => {
    return this.httpClient.get(`${this.url}?type=owner&per_page=100`)
      .pipe(
        map((item: any) => item.filter((value:any) => !value.fork)),
        //map((item: any) => item.filter(value => (value.stargazers_count > 3)))
      );
  };
  
  loadAvatar():Observable<Blob> {
    return this.httpClient.get(`${this.urlAvatar}`, {
      responseType: "blob"
    });
  }

  getImage = (text: string) => {
    try {
      return text.match(/!\[[^\]]*\]\((?<filename>.*?)(?=\"|\))(?<optionalpart>\".*\")?\)/);
    } catch (e) {
      return null;
    }
  };

  getRepo = () => {
    try {
      return this.httpClient.get(this.urlRepoProfile)
    } catch (e) {
      return e;
    }
  };

  buildHome = (repo: string) => {
    let urlContent = this.urlContent;
    // console.log(this.getImage(repo))
    return urlContent += `${repo}/Home.md`;
  };
}
