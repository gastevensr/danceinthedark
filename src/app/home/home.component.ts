import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, OnDestroy, AfterViewInit, AfterContentInit, OnChanges  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, AfterContentInit, OnChanges {

  // private twitter: any;

  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    //this.initTwitterWidget();
  }

  ngAfterViewInit() {
    //this.initTwitterWidget();
  }

  ngAfterContentInit() {
    // this.initTwitterWidget();
  }

  ngOnChanges() {
    // this.initTwitterWidget();
  }

  public executeSelectedChange = (event: any) => {
    console.log(event);
    // this.initTwitterWidget();
  }

  initTwitterWidget() {
    // this.twitter = this._router.events.subscribe(val => {
    //   if (val instanceof NavigationEnd) {
    //     (<any>window).twttr = (function (d, s, id) {
    //       let js: any, fjs = d.getElementsByTagName(s)[0],
    //           t = (<any>window).twttr || {};
    //       if (d.getElementById(id)) return t;
    //       js = d.createElement(s);
    //       js.id = id;
    //       js.src = "https://platform.twitter.com/widgets.js";
    //       fjs.parentNode?.insertBefore(js, fjs);

    //       t._e = [];
    //       t.ready = function (f: any) {
    //           t._e.push(f);
    //       };

    //       return t;
    //     } (document, "script", "twitter-wjs"));

    //     if ((<any>window).twttr.ready()) {
    //       (<any>window).twttr.widgets.load();
    //     }
    //   }
    // });
  }

  ngOnDestroy() {
    // this.twitter.unsubscribe();
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
