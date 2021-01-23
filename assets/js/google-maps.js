function initMap() {
    // Map default display
    var options = {
        zoom: 15,
        center: {
            lat: 52.6647,
            lng: -8.62306
        }
    }

    // Homepage map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Click listener
    google.maps.event.addListener(map, 'click', function(event) {
        // Adding markers
        addMarker({
            coords: event.latLng
        });
    });

    // Array of markers
    var markers = [{
            coords: {
                lat: 52.669863886926265,
                lng: -8.625120408211234
            },
            content: "<h4>King John's Castle:</h4> <p>Restored medieval fortress with a visitor centre, period costumes and interactive exhibits.</p>",
        },
        {
            coords: {
                lat: 52.668434715046445,
                lng: -8.623118222489378
            },
            content: "<h4>Saint Mary's Cathedral:</h4>" + "<p>Iconic 12th-century cathedral with large stained-glass windows & a small burial ground.</p>" + "<p>Accessibility: Wheelchair-accessible car park & entrance</p>",
        },
        {
            coords: {
                lat: 52.6697717608359,
                lng: -8.627680296689704
            },
            content: "<h4>Treaty Stone:</h4>" + "<p>Monument with a stone said to be used in the signing of the 1691 Treaty of Limerick.</p>" + "<p>Accessibility: Wheelchair-accessible entrance.</p>" + "<p>Amenities: Good for kids</p>",
        },
        {
            coords: {
                lat: 52.66546437993901,
                lng: -8.626859872110707
            },
            content: "Riverside Walk",
        },
        {
            coords: {
                lat: 52.67363069366351,
                lng: -8.57273651495968
            },
            content: "UL Campus",
        },
        {
            coords: {
                lat: 52.66278226364466,
                lng: -8.539517495214959
            },
            content: "Castletroy Neighbourhood Park",
        },
        {
            coords: {
                lat: 52.65829229686129,
                lng: -8.627773099688705
            },
            content: "People's Park",
        },
        {
            coords: {
                lat: 52.66546710457959,
                lng: -8.630398583046363
            },
            content: "Sarsfield Bridge",
        },
        {
            coords: {
                lat: 52.69972418946017,
                lng: -8.81145052112184
            },
            content: "Bunratty Castle & Folk Park",
        },
        {
            coords: {
                lat: 52.66632309901861,
                lng: -8.623624203355625
            },
            content: "The Hunt Museum",
        },
        {
            coords: {
                lat: 52.659067333536164,
                lng: -8.62790903420211
            },
            content: "Limerick City Gallery of Art",
        },
        {
            coords: {
                lat: 52.669014473880644,
                lng: -8.61397906489442
            },
            content: "Aura Leisure Centre",
        },
        {
            coords: {
                lat: 52.68335928210222,
                lng: -8.738064475750312
            },
            content: "Cratloe Woods",
        },
        {
            coords: {
                lat: 52.666432513426216,
                lng: -8.625121561336258
            },
            content: "Nevsail Watersports",
        },
        {
            coords: {
                lat: 52.663665310677956,
                lng: -8.621588330297785
            },
            content: "Milk Market",
        },
        {
            coords: {
                lat: 52.64048373515425,
                lng: -8.64533731710641
            },
            content: "Crescent Shopping Centre",
        },
        {
            coords: {
                lat: 52.66429243846216,
                lng: -8.627616913163683
            },
            content: "Hook & Ladder",
        },
        {
            coords: {
                lat: 52.66422500885638,
                lng: -8.625883466888341
            },
            content: "Costa Coffee",
        },
        {
            coords: {
                lat: 52.663228599747896,
                lng: -8.626785479665418
            },
            content: "Gloria Jean's Coffees",
        },
        {
            coords: {
                lat: 52.66408942507034,
                lng: -8.624508272279474
            },
            content: "Story Cafe",
        },
        {
            coords: {
                lat: 52.66124970285747,
                lng: -8.620798944456936
            },
            content: "Insomnia Coffee Company",
        },
        {
            coords: {
                lat: 52.662684750044086,
                lng: -8.625432086400656
            },
            content: "Starbucks",
        },
        {
            coords: {
                lat: 52.66299045867191,
                lng: -8.62877491915442
            },
            content: "Arabica Coffee Co.",
        },
        {
            coords: {
                lat: 52.661750250196334,
                lng: -8.626151801661749
            },
            content: "Café Rosé",
        },
    ];

    // Looping through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Adding Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        // Checking for content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}