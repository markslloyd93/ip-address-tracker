export let ipGeolocation = {
    details: [],
    ipAd: "",
    api_key: "at_VvONbTCCNI8JbLBUSNYhWZbl4nHy2",
    ipAddressElement: document.querySelector('[data-tracker="ip"]'),
    locationElement: document.querySelector('[data-tracker="location"]'),
    timezoneElement: document.querySelector('[data-tracker="timezone"]'),
    ispElement: document.querySelector('[data-tracker="isp"]'),

    init: function(){   
        $.ajax({
            url: "https://geo.ipify.org/api/v2/country,city",
            data: {apiKey: ipGeolocation.api_key},
            success: function(data) {
                console.log(data);
                ipGeolocation.details.push(data);
                ipGeolocation.ipAddressElement.innerText = ipGeolocation.details[0].ip;
                ipGeolocation.locationElement.innerText = `${ipGeolocation.details[0].location.region}, ${ipGeolocation.details[0].location.country}, ${ipGeolocation.details[0].location.postalCode}`;
                ipGeolocation.timezoneElement.innerText = ipGeolocation.details[0].location.timezone;
                ipGeolocation.ispElement.innerText = ipGeolocation.details[0].isp;

                ipGeolocation.storeLocationInSession("lat", ipGeolocation.details[0].location.lat);
                ipGeolocation.storeLocationInSession("lng", ipGeolocation.details[0].location.lng);
            }
        });     
    },

    displayIPInformation: function(){
        //check if details length
        //if length > 0 empty details array
        if(ipGeolocation.details.length > 0){
            ipGeolocation.details = [];
        }
        let searchedIP = document.querySelector("#ipAddress").value;
        ipGeolocation.ipAd = searchedIP;
        $.ajax({
            url: "https://geo.ipify.org/api/v2/country,city",
            data: {apiKey: ipGeolocation.api_key, ipAddress: ipGeolocation.ipAd},
            success: function(data) {
                ipGeolocation.details.push(data);
                ipGeolocation.ipAddressElement.innerText = ipGeolocation.details[0].ip;
                ipGeolocation.locationElement.innerText = `${ipGeolocation.details[0].location.region}, ${ipGeolocation.details[0].location.country}, ${ipGeolocation.details[0].location.postalCode}`;
                ipGeolocation.timezoneElement.innerText = ipGeolocation.details[0].location.timezone;
                ipGeolocation.ispElement.innerText = ipGeolocation.details[0].isp;

                ipGeolocation.storeLocationInSession("lat", ipGeolocation.details[0].location.lat);
                ipGeolocation.storeLocationInSession("lng", ipGeolocation.details[0].location.lng);
            }
        });
    },

    storeLocationInSession: function(key, value){
        // Save data to sessionStorage
        sessionStorage.setItem(key, value);
    }
}