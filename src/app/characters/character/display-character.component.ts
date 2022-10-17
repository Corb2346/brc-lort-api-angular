import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.scss']
})
export class DisplayCharacterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  returnMainMenu(){
    this.router.navigate(['mainmenu'])
  }

}
