import { Component, getModuleFactory, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { GetDataService } from '../../services/get-data.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss'],
  
})
export class MainmenuComponent implements OnInit {

  logout: boolean = false;
  userName:string;

  getBooks: any [] = [];
  
  constructor(private GetDataService:GetDataService,public dialgog:MatDialog,public loginService:LoginService,private router:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.loginService.getUserData();
    console.log(this.userName);

   /* this.activateRoute.data.subscribe(({books}) => {
      this.getBooks = books.docs;
      console.log("en resolve",this.getBooks);
    }

    )*/
    this.getbooks();
  }

  getbooks(){
    this.GetDataService.getbooks().subscribe({
      next: resp => {
        this.getBooks = resp.docs;
        console.log(this.getBooks);
      }
    })
  }

  openDialog(indexBook:number,){
    console.log("clic en titulos",indexBook);
    console.log(typeof(indexBook));
    this.dialgog.open(DialogComponent,{
      data : indexBook,
      height: '680px',
      width: '580px',
      
    })
    }

    logOut(){
      this.loginService.setUserData('',this.logout);
      this.loginService.setPasswordData('');
      console.log(this.loginService.setUserData('',this.logout));
      this.router.navigate(['login'])
      
      
    }
    
}
