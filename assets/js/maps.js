function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 52.6647, 
            lng: -8.62306
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.669863886926265, lng: -8.625120408211234 }, // King John's Castle
        { lat: 52.668434715046445, lng: -8.623118222489378 }, //Saint Mary's Cathedral
        { lat: 52.6697717608359, lng: -8.627680296689704 }, // Treaty Stone
        { lat: 52.66546437993901, lng: -8.626859872110707 }, // Riverside Walk
        { lat: 52.67363069366351, lng: -8.57273651495968 }, // UL Campus
        { lat: 52.66278226364466, lng: -8.539517495214959 }, // Castletroy Neightbourhood Park 
        { lat: 52.65829229686129, lng: -8.627773099688705 }, // People's Park
        { lat: 52.66546710457959, lng: -8.630398583046363 }, // Sarsfield Bridge

        { lat: 52.69972418946017, lng: -8.81145052112184 }, // Bunratty Castle & Folk Park
        { lat: 52.66632309901861, lng: -8.623624203355625 }, // The Hunt Museum
        { lat: 52.659067333536164, lng: -8.62790903420211 }, // Limerick City Gallery of Art
        { lat: 52.669014473880644, lng: -8.61397906489442 }, // Aura Leisure Grove Island
        { lat: 52.68335928210222, lng: -8.738064475750312 }, // Cratloe Woods
        { lat: 52.666432513426216, lng: -8.625121561336258 }, // Nevsail Watersports
        { lat: 52.663665310677956, lng: -8.621588330297785 }, // Milk Market
        { lat: 52.64048373515425, lng: -8.64533731710641 }, // Crescent Shopping Centre

        { lat: 52.66429243846216, lng: -8.627616913163683 }, // Hook & Ladder Sarsfield Street
        { lat: 52.66422500885638, lng: -8.625883466888341 }, // Costa Coffee
        { lat: 52.663228599747896, lng: -8.626785479665418 }, // Gloria Jean's Coffees 
        { lat: 52.66408942507034, lng: -8.624508272279474 }, // Story Cafe
        { lat: 52.66124970285747, lng: -8.620798944456936 }, // Insomnia Coffee Company
        { lat: 52.662684750044086, lng: -8.625432086400656 }, // Starbucks
        { lat: 52.66299045867191, lng: -8.62877491915442 }, // Arabica Coffee Co.
        { lat: 52.661750250196334, lng: -8.626151801661749 } // Café Rosé

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}