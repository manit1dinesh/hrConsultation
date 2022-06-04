import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../carousel.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel;
  userName;
  constructor(private carouselService: CarouselService, private auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.carousel = this.carouselService.carousel;
    this.auth.currentUser.then(v=>{
      console.log(v?.email);
    })
​
  }

}
