import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { GetDataService } from '../../services/get-data.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  logout: boolean = false;
  userName:string;
  getMovies:any [] =[];
  getBooks: any [] = [];
  
  constructor(private GetDataService:GetDataService,public dialgog:MatDialog,public loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserData();
    console.log(this.userName);
    
    //this.getmoviesLotr();
     //this.getbooks();
  }

  getbooks(){
    this.GetDataService.getbooks().subscribe({
      next: resp => {
        this.getBooks = resp.docs;
        console.log(this.getBooks);
      }
    })
  }

  getmoviesLotr(){
    this.GetDataService.getMovies().subscribe({
      next: resp => {
        this.getMovies = resp.docs;
        console.log(this.getMovies); 
      }
    })
  }

  openDialog(indexBook:number,){
    console.log("clic en titulos",indexBook);
    console.log(typeof(indexBook));
    this.dialgog.open(DialogComponent,{
      data : indexBook,
      height: '700px',
      width: '600px',
    })
    }

    logOut(){
      this.loginService.setUserData('',this.logout);
      this.loginService.setPasswordData('');
      console.log(this.loginService.setUserData('',this.logout));
      this.router.navigate(['login'])
      
      
    }
    
}
