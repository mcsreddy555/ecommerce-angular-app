import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  products=[
    {
      id: 1,
      text: "Everfresh Flowers",
      image: ["https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682"]
    },
    {
      id: 2,
      text: "Festive Deer",
      image: ["https://sc02.alicdn.com/kf/HTB1DRCma0fvK1RjSszhq6AcGFXaZ.jpg"]
    },
    {
      id: 3,
      text: "Morning Greens",
      image: ["https://images-na.ssl-images-amazon.com/images/I/61tBQKJJKaL._SL1500_.jpg"]
    },
    {
      id: 4,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },
    {
      id: 5,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 6,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },
    {
      id: 7,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 8,
      text: "Morning Greens",
      image: ["http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"]
    },
    {
      id: 9,
      text: "Everfresh Flowers",
      image: ["http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8109.png"]
    },
    {
      id: 10,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 11,
      text: "Morning Greens",
      image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
    },
    {
      id: 12,
      text: "Everfresh Flowers",
      image: ["https://images-na.ssl-images-amazon.com/images/I/61tBQKJJKaL._SL1500_.jpg"]
    },
    {
      id: 13,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 14,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },

  ];


  simillarProducts = [
    {
      id: 1,
      text: "Everfresh Flowers",
      image: ["https://ledscreensandlights.com/wp-content/uploads/2018/08/9.gif"]
    },
    {
      id: 2,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 3,
      text: "Morning Greens",
      image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
    },
    {
      id: 4,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },
  ];

  getAllProducts():any{
    return this.products;
  }
  
}
