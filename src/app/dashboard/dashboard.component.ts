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
  constructor(config: NgsRevealConfig) {
    config.duration = 2000;
    config.easing = 'cubic-bezier((0.645, 0.045, 0.355, 1)';
    config.reset = true;
  }


  ngOnInit(): void {

    var sections = document.querySelectorAll('section');
    var container = document.querySelector('.scroll_container');

    // @ts-ignore
    container.addEventListener('scroll',function () {
      sections.forEach((e,i) => {
        var top = (e.getBoundingClientRect().top);
        if (top == 0){
          e.classList.add('is-inview')
        }else {
          e.classList.remove('is-inview')
        }
      });
    })
  }
}
