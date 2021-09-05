import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-owl-carousel';
  customOptions: OwlOptions = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
    lazyLoad: true,
    loop: true,
    dots: false,
    autoplay: true,
    nav: true,
    autoplayHoverPause: true,
    navSpeed: 700,
    // navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right></i>"']
  };
  isDragging = false;
}
