import {Component, OnInit} from '@angular/core';
import { gsap} from 'gsap'
import {NgsRevealConfig} from "ngx-scrollreveal";
import * as $ from 'jquery';

import {NgbCarousel, NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})

export class AppComponent implements OnInit {
  title = 'mavicoWebsite';

  constructor(config: NgbCarouselConfig) {
    config.interval =20000;
    config.wrap =true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }



  ngOnInit(): void {



  }

}

