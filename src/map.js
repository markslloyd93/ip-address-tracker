export let leafletMap = {
    marker: "",
    lat: sessionStorage.getItem("lat"),
    lng: sessionStorage.getItem("lng"),
    mapTest: "",

    init: function(){
        leafletMap.setMap();
    },

    setMap: function(){
        leafletMap.mapTest = L.map('map').setView([leafletMap.lat, leafletMap.lng], 13);
        leafletMap.marker = L.marker([leafletMap.lat, leafletMap.lng]).addTo(leafletMap.mapTest);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 14,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(leafletMap.mapTest);
    },

    updateMarker: function(){
        leafletMap.mapTest.remove();
        leafletMap.lat = sessionStorage.getItem("lat");
        leafletMap.lng = sessionStorage.getItem("lng");
        
        leafletMap.setMap();
    }
}