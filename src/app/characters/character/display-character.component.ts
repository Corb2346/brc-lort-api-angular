import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.scss']
})
export class DisplayCharacterComponent implements OnInit {

  characteriD:string='';
  quotesArray: any[] = [];
  character:any[]=[];
  elementGot:any={};

  constructor(private router:Router,private getDataService:GetDataService) { }

  ngOnInit(): void {
    this.getQuotes();

  }

  returnMainMenu(){
    this.router.navigate(['mainmenu'])
  }

  getQuotes(){
    this.getDataService.getQuotes().subscribe({
      next: response => {
        this.quotesArray = response.docs
        console.log(this.quotesArray);
        let randomNumber = Math.floor(Math.random() * 1000);
        
        console.log(randomNumber);
        console.log("obtuve este numero alzara", randomNumber);
        this.elementGot = this.quotesArray.at(randomNumber)
        console.log("obtuves este elemento con array.at:",this.elementGot);
        this.characteriD = this.elementGot.character;
        console.log("este id character lo saque del array,",this.characteriD);
        this.getCharacterById(this.characteriD)
      }
    })
  }

  getCharacterById(characteriD:string){
    this.getDataService.getCharacterById(characteriD).subscribe({
      next: response => {
        this.character = response.docs;
        console.log("this.character",this.character);
      }
    })
  }

}
