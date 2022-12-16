export class PlayerData {
    playerPosition: string[];
    directions: string;
    constructor(playerPosition: string[], directions: string){
        this.directions=directions;
        this.playerPosition= playerPosition;
    }
    
}