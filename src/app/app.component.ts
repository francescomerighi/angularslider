import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  count: number = 0;
  interval: number = 2000;
  timer;
  mode: string = 'Auto';
  immagini: string[] = ['https://www.optoma.it/images/ProductApplicationFeatures/4kuhd/banner.jpg','https://www.macitynet.it/wp-content/uploads/2017/11/4K-HDR-2.jpg','https://www.sony.it/image/f6ed466855bcaeda7241430905d89848?fmt=png-alpha&wid=1440','https://store-images.s-microsoft.com/image/apps.5365.14016278201210595.97c150fd-2913-4d0c-9f3c-be3340de1164.bd4bd0bb-605a-491e-a6ed-6f24f7c4ef07?mode=scale&q=90&h=720&w=1280&background=%230078D7','https://648968.smushcdn.com/953788/wp-content/uploads/immagini-4k.jpg?lossy=1&strip=1&webp=1','https://www.sony.it/image/bc6d25fa6371c2899ce704a2bed7614c?fmt=png-alpha&wid=720'];

  slideshowavanti(){
    this.count = this.count + 1;
    if (this.count > 5) {
      this.count = 0;
    }
  }

  slideshowindietro(){
    this.count = this.count - 1;
    if (this.count < 0) {
      this.count = 5;
    }
  }

  autoStopClick() {
    if (this.mode == 'Auto') {
      this.mode = 'Stop';
      this.timer = setInterval(() => {this.slideshowavanti();}, this.interval);
    }
    else {
      this.mode = 'Auto';
      clearInterval(this.timer);
    }
  }

}
