import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

export class CartComponent implements OnInit {
  @Input() count = 0;
  
  constructor() { }

  ngOnInit() { }

}

