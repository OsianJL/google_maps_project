import { Driver } from "./Driver";
import { Passenger } from "./Passenger";
import { Maps } from "./Maps";
import { MyHome } from "./MyHome";

let map: any;
let driverMarker: any;
let passengerMarker: any;
let myHomeMarker: any;

document.addEventListener("DOMContentLoaded", () => {
  (window as any).initMap = function () {
    // Verificar si el mapa ya está inicializado
    if (!map) {
      map = new Maps("map");
    }

    // Limpiar marcadores anteriores si existen
    if (driverMarker) {
      map.RemoveMarker(driverMarker);
    }
    if (passengerMarker) {
      map.RemoveMarker(passengerMarker);
    }
    if (myHomeMarker) {
      map.RemoveMarker(myHomeMarker);
    }

    // Crear nuevas instancias
    const driver = new Driver();
    const passenger = new Passenger();
    const myHome = new MyHome(passenger);

    // Añadir los marcadores al mapa
    driverMarker = map.AddMarker(driver);
    passengerMarker = map.AddMarker(passenger);
    myHomeMarker = map.AddMarker(myHome);
  };

  if (typeof google !== "undefined" && google.maps) {
    (window as any).initMap();
  } else {
    console.error("Google Maps no está disponible.");
  }
});