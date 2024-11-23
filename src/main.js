import {leafletMap} from './map.js';
import {ipGeolocation} from './ipGeoloaction.js';

let searchBtn = document.querySelector('[data-search="search"]');

ipGeolocation.init();
leafletMap.init();


searchBtn.addEventListener("click", function(e){
    e.preventDefault();
    ipGeolocation.displayIPInformation();
    setTimeout(() => {
        leafletMap.updateMarker();
      }, 500);
});

