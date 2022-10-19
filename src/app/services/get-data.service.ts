import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

 

  constructor(private http: HttpClient) { }

  getMovies(){
    let auth_token = "uW8XWCGiTSANZ6TXFYeZ";
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
      });
      
      const requestOptions = { headers: headers };

    return this.http.get('https://the-one-api.dev/v2/movie',requestOptions).pipe(
      map( (resp:any) => {
        console.log(resp);
        return resp;
      })
    )
  }

  getQuotes(){
    let auth_token = "uW8XWCGiTSANZ6TXFYeZ";
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
      });
      
      const requestOptions = { headers: headers };
      return this.http.get('https://the-one-api.dev/v2/quote',requestOptions).pipe(
      map( (resp:any) => {
        console.log(resp);
        return resp;
      })
    )
  }

  getCharacterById(idCharacter:string){
    let auth_token = "uW8XWCGiTSANZ6TXFYeZ";
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
      });
      
      const requestOptions = { headers: headers };
      return this.http.get(`https://the-one-api.dev/v2/character/${idCharacter}`,requestOptions).pipe(
      map( (resp:any) => {
        console.log(resp);
        return resp;
      })
    )
    
    
  }
  

  getbooks(){
    return this.http.get('https://the-one-api.dev/v2/book').pipe(
      map( (resp:any) => {
        console.log(resp);
          return resp
      }) 
    )
  }

  getChaptersBooks(bookId:string){
    return this.http.get(`https://the-one-api.dev/v2/book/${bookId}/chapter`).pipe(
      map( ( response:any) => {
        console.log(response);
          return response
      })
    )
  }


}
  





 



