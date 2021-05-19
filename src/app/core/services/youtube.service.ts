import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private readonly url = 'https://youtube.googleapis.com/youtube/v3/playlists?key=yourKey';

  constructor(private httpModule: HttpClient) {
  }

  loadCourses = () => {
    const query = [
      this.url,
      `&part=id%2Csnippet&channelId=UCTdv3TpS8paTW5bi2smpcWA`,
      `&maxResults=10`
    ].join('');
    return this.httpModule.get(query)
      .pipe(
        map((item: any) => item.items.reverse()),
        map((item: any) => item.filter( ( value:any ) => value.snippet.title.includes('curso'))),
      );
  };
}
