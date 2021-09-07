import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval =2000;
    config.wrap =true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() { }





}
