export class User{
    constructor(UserId: number, Name: string, Color: string){
        this.UserId = UserId;
        this.Name = Name;
        this.Color = Color;
        this.Rooms = ['1','2'];
    }
    UserId : number;
    Name : string;
    Color : string;
    Rooms : string[];

}
