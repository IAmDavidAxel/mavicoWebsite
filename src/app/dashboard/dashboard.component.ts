import { Component, OnInit } from '@angular/core';
import {NgsScrollReveal} from "ngx-scrollreveal/services";
import {NgsRevealConfig} from "ngx-scrollreveal";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NgsRevealConfig]
})
export class DashboardComponent implements OnInit {
  lat = 12.333401;
  lng = -1.507977;

  constructor(config: NgsRevealConfig) {
    config.duration = 200;
    config.delay = 400;
    config.easing = 'cubic-bezier((0.645, 0.045, 0.355, 1)';
    config.reset = true;
    config.interval = 20;
  }

  ngOnInit(): void {

  }
}
