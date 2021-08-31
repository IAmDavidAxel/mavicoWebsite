import {Component, OnInit} from '@angular/core';
import { gsap} from 'gsap'
import {NgsRevealConfig} from "ngx-scrollreveal";
import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'mavicoWebsite';

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

