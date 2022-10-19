import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-display-character',
  templateUrl: './display-character.component.html',
  styleUrls: ['./display-character.component.scss']
})
export class DisplayCharacterComponent implements OnInit {

  characteriD:string='5cd99d4bde30eff6ebccfbe6';
  quotesArray: any[] = [];
  character:any [] =[];

  constructor(private router:Router,private getDataService:GetDataService) { }

  ngOnInit(): void {
    //this.getQuotes();
    //this.getCharacterById(this.characteriD);
    this.getrandomQuote();
  }

  returnMainMenu(){
    this.router.navigate(['mainmenu'])
  }

  getQuotes(){
    this.getDataService.getQuotes().subscribe({
      next: response => {
        this.quotesArray = response.docs
        console.log(this.quotesArray);
      }
    })
  }

  getCharacterById(characteriD:string){
    this.getDataService.getCharacterById(characteriD).subscribe({
      next: response => {
        this.character = response;
        console.log("this.character",this.character);
        
      }
    })
  }

  getrandomQuote(){
    let randomNumber = Math.floor(Math.random() * 1000);
    console.log(randomNumber);
    console.log("element in array with this index:",randomNumber,this.quotesArray.at(randomNumber));
    
  }
}
