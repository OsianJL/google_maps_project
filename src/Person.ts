export abstract class Person implements Mappable {
    protected name:string; 
    protected location:{
        lat:number;
        lng:number; 
    } 

    get getLocation(){
        return this.location;
    }

    constructor(name:string, location: {lat:number, lng:number}){
        this.name = name; 
        this.location = {
            lat: location.lat,
            lng: location.lng
        }
    }
    

}