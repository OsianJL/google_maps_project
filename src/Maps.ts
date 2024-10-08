import { Person } from "./Person";


export class Maps {
    private googleMap: google.maps.Map
    constructor(divID: string){
        this.googleMap = new google.maps.Map(document.getElementById(divID)!,
{
    zoom: 1, 
    center: {
        lat:0, 
        lng:0
    },
    mapId: "DEMO_MAP_ID"

}); 
    }
   
    AddMarker(mappable: Mappable){
        new google.maps.marker.AdvancedMarkerElement({
            map:this.googleMap,
            position: {
                lat: mappable.getLocation.lat,
                lng: mappable.getLocation.lng
            }
        })

        
    }


}