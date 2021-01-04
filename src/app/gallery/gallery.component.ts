import { Component, OnInit } from '@angular/core';
import { Gallery, Picture } from './gallery-picture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  citiData = new Gallery();
  lvData = new Gallery();
  apolloData = new Gallery();
  data: Gallery[] = [];

  constructor() { }

  ngOnInit(): void {
    const altCiti = 'Joane World Tour - NYC - 2017';
    const citiPics: Picture[] = [];
    citiPics.push({src: 'assets/citi-01.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-02.jpg', alt: altCiti });
    // citiPics.push({src: 'assets/citi-03.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-04.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-05.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-06.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-07.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-08.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-09.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-10.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-11.jpg', alt: altCiti });
    citiPics.push({src: 'assets/citi-12.jpg', alt: altCiti });
    this.citiData.pictures = citiPics;
    this.citiData.title = altCiti;
    this.citiData.venue = 'Citi Field';
    this.citiData.date = 'Mon August 28, 2017';
    this.data.push(this.citiData);

    const altLV = 'Jazz & Piano - Las Vegas - 2019';
    const lvPics: Picture[] = [];
    lvPics.push({src: 'assets/lv-01.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-02.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-03.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-04.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-05.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-06.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-07.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-08.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-09.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-10.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-11.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-12.jpg', alt: altLV });
    lvPics.push({src: 'assets/lv-13.jpg', alt: altLV });
    this.lvData.pictures = lvPics;
    this.lvData.title = altLV;
    this.lvData.venue = 'Park Theater - MGM Resorts';
    this.lvData.date = 'Sat June 15, 2019';
    this.data.push(this.lvData);

    const altApolo = 'Enigma - NYC - 2019';
    const apolloPics: Picture[] = [];
    // apolloPics.push({src: 'assets/apollo-01.jpg', alt: altApolo });
    apolloPics.push({src: 'assets/apollo-03.jpg', alt: altApolo });
    apolloPics.push({src: 'assets/apollo-02.jpg', alt: altApolo });
    apolloPics.push({src: 'assets/apollo-04.jpg', alt: altApolo });
    apolloPics.push({src: 'assets/apollo-05.jpg', alt: altApolo });
    this.apolloData.pictures = apolloPics;
    this.apolloData.title = altApolo;
    this.apolloData.venue = 'Apollo Theater';
    this.apolloData.date = 'Mon June 24, 2019';
    this.data.push(this.apolloData);
  }

  public executeSelectedChange = (event: any) => {
    console.log('event: ' + event);
  }

}
