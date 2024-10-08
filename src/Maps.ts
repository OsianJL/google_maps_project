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
        const infoWindow = new google.maps.InfoWindow({
            content: "Hello world"
        })
        const marker = new google.maps.marker.AdvancedMarkerElement({
            map:this.googleMap,
            position: {
                lat: mappable.getLocation.lat,
                lng: mappable.getLocation.lng
            }
        })

        marker.addListener('click', ()=>{
            infoWindow.open(this.googleMap, marker)
        })
    }


}