import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '../interfaces/carousel-interface-item';
import { CAROUSEL_DATA_ITEMS } from '../utils/carousel.const';

@Component({
  selector: 'app-protected-app-container',
  templateUrl: './protected-app-container.component.html',
  styleUrls: ['./protected-app-container.component.css']
})
export class ProtectedAppContainerComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
