import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { PlayerData } from '../models/PlayerData';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-carte-dynamique',
  templateUrl: './carte-dynamique.component.html',
  styleUrls: ['./carte-dynamique.component.css']
})
export class CarteDynamiqueComponent implements OnInit {

  directions!: string;
  playerPosition:string[] = [];
  playForm!: FormGroup;
  board$!: Observable<string[][]>;
  boardValues!: string[][];
  playerData!: PlayerData;

   
 
  constructor(private formBuilder: FormBuilder,private service: GameService ) { }

  ngOnInit(): void {
      
    this.playForm = this.formBuilder.group({
      directions: [null, Validators.required, Validators.pattern("[eons]")],
      abscisse: [null, Validators.required,Validators.pattern("^[0-9]*$]")],
      ordonnee: [null, Validators.required,Validators.pattern("^[0-9]*$]")]
    });
   
    console.log(this.board$);
    console.log("hello");
    this.playerPosition[0] =this.playForm.value.abscisse;
    this.playerPosition [1] = this.playForm.value.ordonnee;
    this.directions = this.playForm.value.directions;
  }
  changeBoard(){
    this.board$=this.service.getBoard().pipe(tap(
      response => this.boardValues = response
    ));
    console.log("the board is : ")
    console.log(this.boardValues);
    return this.boardValues;
  }
  
  searcheThePlayer(){
    
    const commandes: string = this.playForm.value.directions;
    this.playerPosition[0] =this.playForm.value.abscisse;
    this.playerPosition [1] = this.playForm.value.ordonnee;
    const playerData = new PlayerData(this.playerPosition,commandes);
    
    console.log(playerData);
    

    return this.service.jouer(playerData, this.boardValues);

    
  }

 }