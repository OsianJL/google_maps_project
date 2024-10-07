export abstract class Person {
    protected name:string; 
    protected location:{
        lat:number;
        lng:number; 
    } 

    constructor(name:string, location: {lat:number, lng:number}){
        this.name = name; 
        this.location = {
            lat: location.lat,
            lng: location.lng
        }
    }
    

}