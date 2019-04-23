import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';
import { LikeService } from '../like.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  @Input()
  dog: Dog;

  @Input()
  likeService: LikeService

  likes:number = 0;
  favorite: boolean = false; 

  constructor() { }

  ngOnInit() {
    this.favorite = this.likeService.getFavorites().reduce( (acc, dog) => (dog.id === this.dog.id)||acc, false);
    if(window.localStorage.getItem(this.dog.id)===null){
      this.likes = 0;
    }else {
      this.likes = parseInt(window.localStorage.getItem(this.dog.id));
    }
  }

  liked() {
    this.likes += 1;
    this.likeService.likedDog(this.dog);
    window.localStorage.setItem(this.dog.id, this.likes.toString());
  }

  favorited(){
    this.favorite = !this.favorite;
    this.likeService.favoritedDog(this.dog, this.favorite);
  }
}