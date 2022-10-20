import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetDataService } from '../../services/get-data.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',

  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dataRecived:any;
  getchaptersBooks: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private GetDataService:GetDataService) {

    console.log("data en dialog:", data);
    this.verifyIdBook(data);

   }

  ngOnInit(): void {
  }
verifyIdBook(data:number){

  if(data === 0) {
    let bookOne= '5cf5805fb53e011a64671582'
    this.getChapter(bookOne);
  } else if(data === 1){
    let bookTwo = '5cf58077b53e011a64671583'
    this.getChapter(bookTwo)
  }else if(data === 2){
    let bookThree = '5cf58080b53e011a64671584'
    this.getChapter(bookThree)
  }

}
  getChapter(bookId:string){
    this.GetDataService.getChaptersBooks(bookId).subscribe({
      next : response => {
        this.getchaptersBooks = response.docs;
        console.log(this.getchaptersBooks);
        
      }
    })
  }

  

}
