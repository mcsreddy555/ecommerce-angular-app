import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ProductService } from '../services/products/product.service';
import { MatTreeNestedDataSource, MatNestedTreeNode } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
  products = [];


  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
                this.dataSource.data = TREE_DATA;
                this.products = this.productService.getAllProducts();

               }
               hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Mens',
    children: [
      {name: 'Shirt'},
      {name: 'Shoes'},
      {name: 'Jeans'},
    ]
  }, {
    name: 'Womens',
    children: [
      {name: 'Shirt'},
      {name: 'Shoes'},
      {name: 'Jeans'},
    ]
  },{
    name: 'Child',
    children: [
      {name: 'Shirt'},
      {name: 'Shoes'},
      {name: 'Jeans'},
    ]
  },
];
