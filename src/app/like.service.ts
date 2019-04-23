import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private likedDogs: Dog[] = [];
  private favoriteDogs:Dog[]=[];

  constructor() { }

  likedDog(dog: Dog){
    if(this.likedDogs.length === 5) {
      this.likedDogs.shift();
      this.likedDogs.push(dog);
    }
    else{
      this.likedDogs.push(dog)
    }
    window.localStorage.setItem('likedDogs', JSON.stringify(this.likedDogs));
  }

  getLikedDogs() {
    return this.likedDogs;
  }

  setLikedDogs(likedDogs: Dog[]) {
    this.likedDogs = likedDogs;
  }

  getFavorites(){
    return this.favoriteDogs;
  }

  setFavoriteDogs(favoriteDogs: Dog[]) {
    this.favoriteDogs = favoriteDogs;
  }

  favoritedDog(dog:Dog, favorite: boolean){
    if(favorite){
      this.favoriteDogs.push(dog);
    }
    else {
      this.favoriteDogs = this.favoriteDogs.filter( d => d.id !== dog.id);
    }
    window.localStorage.setItem('favoriteDogs', JSON.stringify(this.favoriteDogs));
  }
}
