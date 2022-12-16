import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs'
import { PlayerData } from '../models/PlayerData';

const url = "http://localhost:8080/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  
  constructor(private http: HttpClient) { }

  getBoard(): Observable <string[][]> {
    console.log("the board has been changed")
    return this.http.get<string[][]>('http://localhost:8080/board').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  
  jouer(playerData: PlayerData, board: string[][]){
   
    alert("l'aventurier est en train de déplacer")
    alert(board);
    alert(playerData.directions+playerData.playerPosition)
    this.http.post<string>('http://localhost:8080/getPosition',{playerData, board}, httpOptions).subscribe(data => alert(data));
    console.log("request sent"+playerData);
    return 'done';
  
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

}
