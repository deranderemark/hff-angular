import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
menuOpened: boolean = false;
menuOpener(type: number) {
  if(type==0){
    this.menuOpened = !this.menuOpened;
  }else{
    this.menuOpened = false;
  }
}
}
