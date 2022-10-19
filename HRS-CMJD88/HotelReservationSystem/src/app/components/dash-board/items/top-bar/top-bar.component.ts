// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
// @ts-ignore

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations:[
    trigger('rightSlider',[
      transition("void => *",[
        style({transform:'translateX(100%)'}),
        animate('0.3s')
      ]),
      transition('* => void', [
        animate('0.6s', style({transform:'translateX(100%)'}))
      ])
    ])
  ]
})
export class TopBarComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void{
  }

  sliderState!: false;

  toggleSlider(){
    // @ts-ignore
    this.sliderState=!this.sliderState;

  }
}
