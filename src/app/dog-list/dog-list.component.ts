import { Component, OnInit, Input } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import { Observable } from 'rxjs';
import { LikeService } from '../like.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  title: string = 'Dog List';
  dogs: Dog[];

  showingFavorites: boolean = false;
  constructor(private dogService: DogService, private likeService: LikeService) { 

  }

  showFavorites() {
    if(this.showingFavorites){
      this.showingFavorites = false;
      this.getUpdates();
    }else{
      this.showingFavorites = true;
      this.dogs = this.likeService.getFavorites();
    }
    console.log(this.dogs);
  }

  getUpdates(){
    return this.dogService.all().subscribe(data=> this.dogs = data);
  }

  ngOnInit() {
    this.getUpdates();    
    if(window.localStorage.getItem('likedDogs') !== null && window.localStorage.getItem('likedDogs') !== 'undefined'){
      this.likeService.setLikedDogs(JSON.parse(window.localStorage.getItem('likedDogs')));
    }else {
      console.log('This is undefined');
    }
    //this.likeService.likedDogs = JSON.parse(window.localStorage.getItem('likedDogs'));
    if(window.localStorage.getItem('favoriteDogs') !== null && window.localStorage.getItem('favoriteDogs') !== 'undefined'){
      this.likeService.setFavoriteDogs(JSON.parse(window.localStorage.getItem('favoriteDogs')));
      //set the favorite dogs!
      console.log(this.likeService.getFavorites());
    }else {
      console.log('This is undefined');
    }
  }

}
