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
            content: "<h4>Saint Mary's Cathedral:</h4>" + "<p>Iconic 12th-century cathedral with large stained-glass windows & a small burial ground.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible car park & entrance</p>",
        },
        {
            coords: {
                lat: 52.6697717608359,
                lng: -8.627680296689704
            },
            content: "<h4>Treaty Stone:</h4>" + "<p>Monument with a stone said to be used in the signing of the 1691 Treaty of Limerick.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
        {
            coords: {
                lat: 52.66546437993901,
                lng: -8.626859872110707
            },
            content: "<h4>Riverside Walk:</h4>" + "<p>A walking route along the River Shannon through the heart of Limerick City.</p>",
        },
        {
            coords: {
                lat: 52.67363069366351,
                lng: -8.57273651495968
            },
            content: "<h4>UL Campus:</h4>" + "<p>Magnificent university campus with walking & biking trails and the beautiful river Shannon flowing majestically through it all.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible car park & entrance.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
        {
            coords: {
                lat: 52.66278226364466,
                lng: -8.539517495214959
            },
            content: "<h4>Castletroy Neighbourhood Park:</h4>" + "<p>An outdoor public park. It features an array of natural habitats, including a 4,300 sq. metre lake, wetlands, wildflower grass areas and woodlands.</p>",
        },
        {
            coords: {
                lat: 52.65829229686129,
                lng: -8.627773099688705
            },
            content: "<h4>People's Park:</h4>" + "<p>Public park including a refurbished drinking fountain, the Limerick City Gallery of Art, children's playground, a band stand and two park shelters.</p>",
        },
        {
            coords: {
                lat: 52.66546710457959,
                lng: -8.630398583046363
            },
            content: "<h4>Sarsfield Bridge:</h4>" + "<p>A limestone road bridge built over the River Shannon between 1824-35 connecting Sarsfield Street and Ennis Road.</p>",
        },
        {
            coords: {
                lat: 52.69972418946017,
                lng: -8.81145052112184
            },
            content: "<h4>Bunratty Castle & Folk Park:</h4>" + "<p>A 15th-century castle and living 19th-century village bring the periods alive at this family museum.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible car park & entrance.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
        {
            coords: {
                lat: 52.66632309901861,
                lng: -8.623624203355625
            },
            content: "<h4>The Hunt Museum:</h4>" + "<p>Former custom house holding a 2000-strong collection of ancient and modern ethnographic treasures.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance, lift & tiolet.</p>" + "<p><b>Amenities:</b> Good for kids, Restaurant</p>",
        },
        {
            coords: {
                lat: 52.659067333536164,
                lng: -8.62790903420211
            },
            content: "<h4>Limerick City Gallery of Art:</h4>" + "<p>Landmark contemporary Irish art gallery, with minimalist extension and changing exhibits, plus cafe.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible car park, entrance, lift & tiolet.</p>" + "<p><b>Amenities:</b> Good for kids, Restaurant, Toilets</p>",
        },
        {
            coords: {
                lat: 52.669014473880644,
                lng: -8.61397906489442
            },
            content: "<h4>Aura Leisure Centre:</h4>" + "<p>Leisure Centre is a public leisure facility with a gym, swimming pool, sauna, steam room and sports hall.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
        {
            coords: {
                lat: 52.68335928210222,
                lng: -8.738064475750312
            },
            content: "<h4>Cratloe Woods:</h4>" + "<p>State-owned, storied oak & softwood forest, with picnic tables & paths for walking.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
        {
            coords: {
                lat: 52.666432513426216,
                lng: -8.625121561336258
            },
            content: "<h4>Limerick Watersports & Activity Centre:</h4>" + "<p>Activity Centre offering a wide range of water and land based activities for all ages, abilities and group sizes.</p>",
        },
        {
            coords: {
                lat: 52.663665310677956,
                lng: -8.621588330297785
            },
            content: "<h4>Milk Market:</h4>" + "<p>Airy, covered market selling fruits, veggies, meats, dairy items, crafts & baked goods since 1852.</p>",
        },
        {
            coords: {
                lat: 52.64048373515425,
                lng: -8.64533731710641
            },
            content: "<h4>Crescent Shopping Centre:</h4>" + "<p>Large, modern mall featuring an assortment of brand-name retail shops, casual eateries & services.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible lift.</p>",
        },
        {
            coords: {
                lat: 52.66429243846216,
                lng: -8.627616913163683
            },
            content: "<h4>Hook & Ladder Sarsfield Street:</h4>" + "<p>Hook & Ladder “Living Café” offers customers a unique experience with a variety of store concepts under one roof – café, cookery school, furniture and home accessories store. Hook & Ladder have 4 cafés in Limerick.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible car park & entrance.</p>",
        },
        {
            coords: {
                lat: 52.661685,
                long: -8.628887
            },
            content: "<h4>Habit Coffee+Retail</h4>" + "<p>Habit Coffee+Retail is a coffee company aiming to deliver the best quality coffee by expertly trained baristas. Sit in or takeaway and enjoy wonderful Badger & Dodo coffees and sample some handmade artisan Irish snacks.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.661859,
                long: -8.626744
            },
            content: "<h4>Wildberry Café</h4>" + "<p>Wildberry Café is a reasonably-priced coffee shop located at a busy crossroads in the middle of Limerick City. There is a lovely outdoor seating area with a great view of the city.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible toilet.</p>",
        },
        {
            coords: {
                lat: 52.66408942507034,
                lng: -8.624508272279474
            },
            content: "<h4>Story Café</h4>" + "<p>A coffee shop located in the heart of Limerick on the famous Denmark Street known for great service and atmosphere. An outdoor seating area has been added recently.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.66124970285747,
                lng: -8.620798944456936
            },
            content: "<h4>Melt Chocolate & Coffee</h4>" + "<p>Melt Chocolate & Coffee is a cosy coffee shop located on the Little Catherine Street, a pedestrain walkway in the middle of Limerick City. There is a seating area inside and outside the shop to enjoy our coffee and treat.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.660338,
                long: -8.630977
            },
            content: "<h4>Caffe Waffe</h4>" + "<p>Caffe Waffe is a family-run café located on Lower Mallow Street. Frsehly baked scones, breads, pastries and waffles are available every morning. This reasonably-priced, cosy café is very popular among school students and young professionals working in the area.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
        {
            coords: {
                lat: 52.667349,
                long: -8.575986
            },
            content: "<h4>Delish Café</h4>" + "<p>Delish Café was originally founded in Limerick City April 2004. College friends, Lisa & Evelyn had a passion for making adventurous Sandwiches & sensational salads with only the freshest yet wide variety of ingredients. It was their aim to handle hungry people with taste and “Feeding People with Love” as their motto goes!</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.661750250196334,
                lng: -8.626151801661749
            },
            content: "<h4>Café Rose & Bistro</h4>" + "<p>Caffe Waffe is a family-run café located on Lower Mallow Street. Frsehly baked scones, breads, pastries and waffles are available every morning. This reasonably-priced, cosy café is very popular among school students and young professionals working in the area.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
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