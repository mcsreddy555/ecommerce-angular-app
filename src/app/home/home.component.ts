import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselOptions = 
  {
    items: 1, 
    dots: false, 
    navigation: false, 
    loop:true,
    margin:10,
    autoplay:true,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoHeightClass: 'owl-height',
    
  }
  images = [];

  

  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
                this.images=this.productService.getAllProducts()
               }

  ngOnInit() {
    

    console.log(this.images)
  }

  productHome(){

  }
  


}
