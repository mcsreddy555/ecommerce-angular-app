import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  carouselOptions = 
    {
      items: 1, 
      dots: true, 
      navigation: false, 
      loop:true,
      margin:10,
      autoplay:true,
      animateOut: 'fadeOut',
      autoHeight: true,
      autoHeightClass: 'owl-height',
      
  }
  
 
  images = [
    
    {
      text: "Festive Deer",
      image: "assets/ecommerce-banner1.png"
    },
    {
      text: "Festive Deer",
      image: "assets/ecommerce-banner2.png"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
