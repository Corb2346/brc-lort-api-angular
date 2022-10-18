import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public auth : boolean = false;

  setSession(){
    localStorage.setItem('username', 'brayan2346');
    localStorage.setItem('password', 'brayan123');
    console.log("datos almacenados");
  }

  setUserData(userName:string,auth:boolean){
    localStorage.setItem('usernameProvided', userName);
    this.auth = auth;
    localStorage.setItem('auth', this.auth.toString());

  }

 setPasswordData(passWord:string){
  localStorage.setItem('passwordProvided', passWord);
 }

  getUserData(){
     return localStorage.getItem('username').toLocaleLowerCase();
  }

  getPasswordData(){
    return localStorage.getItem('password').toLocaleLowerCase();
  }

  getauth(){
    return localStorage.getItem('auth').toLocaleLowerCase();   
  }
}
