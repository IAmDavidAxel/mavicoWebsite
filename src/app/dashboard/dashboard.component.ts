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

    const scrollElements = document.querySelectorAll(".js-scroll");

    const elementInView = (el: Element, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el: Element) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element: Element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el)
        }
      })
    }

    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  }

}
