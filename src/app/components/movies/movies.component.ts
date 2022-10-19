import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  getMovies:any [] =[];

  constructor(private router:Router,private GetDataService:GetDataService ) {}

  ngOnInit(): void {
    //this.getmoviesLotr();
  }

  getmoviesLotr(){
    this.GetDataService.getMovies().subscribe({
      next: resp => {
        this.getMovies = resp.docs;
        console.log(this.getMovies); 
      }
    })
  }

  returnMainMenu(){
    this.router.navigate(['mainmenu'])
  }
  
}
