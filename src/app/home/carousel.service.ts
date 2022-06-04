import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  carousel = [
    {
      image: '../../assets/img1.jpg',
      discripttion: '',
      longdDiscription: ''
    },
    {
      image: '../../assets/img2.jpg',
      discripttion: '',
      longdDiscription: ''
    },
    {
      image: '../../assets/img10.jpg',
      discripttion: '',
      longdDiscription: ''
    },
    {
      image: '../../assets/img11.jpg',
      discripttion: '',
      longdDiscription: ''
    },
    {
      image: '../../assets/img3.jpg',
      discripttion: '',
      longdDiscription: ''
    },
    {
      image: '../../assets/img9.jpg',
      discripttion: '',
      longdDiscription: ''
    },
    {
      image: '../../assets/img4.jpg',
      discripttion: '',
      longdDiscription: ''
    },
  ]
  constructor() { }
}
