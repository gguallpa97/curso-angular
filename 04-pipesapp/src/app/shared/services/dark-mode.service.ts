import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  dark = false;
  constructor() { }

  changeMode(){
    this.dark = !this.dark;
  }
}
