import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      //this.loadIGFeed();
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
  }

  loadIGFeed() {
    const headers: HttpHeaders = new HttpHeaders({'Accept': 'text/html'});
      const url: string = 'https://www.instagram.com/ladygaga/';
      this.http
           .get(url ,{ headers: headers, responseType: 'text' })
           .toPromise()
           .then(resp => {
              let jsonStr = ';'
              var lines: string[] = resp.split('\n');
              const TARGET = '<script type="text/javascript">window._sharedData = ';
              for (let i = 0; i < lines.length; i++) {
                if (lines[i].startsWith(TARGET)) {
                  jsonStr = lines[i];
                  break;
                }
              }
              jsonStr = jsonStr.substr(TARGET.length);
              jsonStr = jsonStr.replace(';</script>', '');
              console.log(jsonStr);
              const json = JSON.parse(jsonStr);
              console.log(json.entry_data);
            })
           .catch(error=>console.log('bad: ' + error))
  }

}
