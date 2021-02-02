function initMap() {
    // Map Default Display
    var options = {
        zoom: 15,
        center: {
            lat: 52.6647,
            lng: -8.62306

        }
    };

    // Home Page Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Click Listener
    google.maps.event.addListener(map, 'click', function(event) {
        // Adding Markers
        addMarker({
            coords: event.latLng
        });
    });

    // Array of markers
    var markers = [{
            coords: {
                lat: 52.66971206665039, 
                lng: -8.625608444213867
            },
            content: "<h4>King John's Castle</h4> <p>King John's Castle is a 13th-century castle located on Kings Island in Limerick, next to the River Shannon. The foundation of the city of Limerick, however, is generally dated to 922, when the Viking leader Thormodu Helgason established a permanent base on Kings Island, this is the area where King John's Castle now stands.</p>",
        },
        {
            coords: {
                lat: 52.6681899,
                lng: -8.6235454
            },
            content: "<h4>Saint Mary's Cathedral</h4>" + "<p>Saint Mary’s Cathedral was founded in 1168 AD and stands majestically over the City of Limerick on the banks of the River Shannon. It is one of the most important medieval buildings to survive intact in Ireland, which is still performing its original function. It is the oldest building in Limerick still in continuous daily use.</p>",
        },
        {
            coords: {
                lat: 52.6698134,
                lng: -8.6281917
            },
            content: "<h4>Treaty Stone</h4>" + "<p>The Treaty Stone is a monument with a stone said to be used in the signing of the 1691 Treaty of Limerick, marking the surrender of the city to William of Orange. The Treaty Stone stands across the River Shannon from King John's Castle.</p>",
        },
        {
            coords: {
                lat: 52.66546437993901,
                lng: -8.626859872110707
            },
            content: "<h4>Riverside Walk</h4>" + "<p>The Limerick City Riverside Walk is a scenic 3.25km shared walking and cycling trail which runs through the historic Shannon Fields and City Centre. There are many historic bridges, including Thomond Bridge and Sarsfield Bridge, to see on this walk. </p>",
        },
        {
            coords: {
                lat: 52.67363069366351,
                lng: -8.57273651495968
            },
            content: "<h4>UL Campus</h4>" + "<p>The University of Limerick campus is truly one of the most beautiful university campuses in the world. Visitors never fail to be impressed by this peaceful green place with its trees, its fountains and the beautiful River Shannon flowing gracefully through. In spring, UL is a symphony of birdsong, while in autumn, it is a celebration of colour.</p>",
        },
        {
            coords: {
                lat: 52.661808013916016,
                lng: -8.538951873779297
            },
            content: "<h4>Castletroy Neighbourhood Park</h4>" + "<p>Castletroy Neighbourhood Park is a large outdoor public park. It features an array of natural habitats, including a 4,300 sq. metre lake, wetlands, wildflower grass areas and woodlands. It also features 1.2 km of pedestrian pathways, a fully equipped children’s playground, skateboarding area and circular cycle route.</p>",
        },
        {
            coords: {
                lat: 52.65807342529297,
                lng: -8.627958297729492
            },
            content: "<h4>People's Park</h4>" + "<p>he People's Park is a large public park located near Pery Square in Limerick. It can be found just west of the railway station and bus terminal. At the northern edge of the park is the Limerick City Gallery of Art. The park was formally opened in 1877, in memory of Richard Russell, a prominent local businessman.</p>",
        },
        {
            coords: {
                lat: 52.6659174,
                lng: -8.6310764
            },
            content: "<h4>Sarsfield Bridge</h4>" + "<p>Sarsfield Bridge is a five-span limestone road bridge. It was built between 1824-35 connecting Sarsfield Street and Ennis Road. It was once a swivel bridge that could open allowing large vessels to pass into the upper quays. This function is no longer in use although the mechanisms can still be seen under the bridge.</p>",
        },
        {
            coords: {
                lat: 52.6978336,
                lng: -8.8121413
            },
            content: "<h4>Bunratty Castle & Folk Park</h4>" + "<p>Bunratty Castle is a 15th-century castle and living 19th-century village bringing the periods alive at this family-friendly museum. The castle and the adjoining folk park are run by Shannon Heritage as tourist attractions. It is widely recognised as the most complete and authentic castle in Ireland.</p>",
        },
        {
            coords: {
                lat: 52.66633987426758,
                lng: -8.624337196350098
            },
            content: "<h4>The Hunt Museum</h4>" + "<p>The Hunt Museum preserves and exhibits the original artefacts gathered, over a lifetime, by John and Gertrude Hunt and known as the Hunt Collection. The Hunt Museum Trust was established in 1974 to hold the Collection and the property at Craggaunowen, a 16th-century Irish tower house that the Hunts had restored.</p>",
        },
        {
            coords: {
                lat: 52.6588619,
                lng: -8.628419
            },
            content: "<h4>Limerick City Gallery of Art</h4>" + "<p>Limerick City Gallery of Art is the largest contemporary art gallery in the Mid-Western Region, annually exhibiting national and international artists in a diverse exhibition programme. Limerick City Gallery of Art is one of the leading contemporary art galleries in Ireland and home to an important collection of art.</p>",
        },
        {
            coords: {
                lat: 52.66879653930664,
                lng: -8.614601135253906
            },
            content: "<h4>Aura Leisure Centre</h4>" + "<p>Aura Leisure Centre is a public leisure facility with a gym, swimming pool, sauna, steam room and sports hall. Aura has a proven track record in working to support the delivery of public leisure facilities nationwide. It is located at Grove Island Shopping Centre on the Corbally side of the city.</p>",
        },
        {
            coords: {
                lat: 52.66879653930664,
                lng: -8.614601135253906
            },
            content: "<h4>Cratloe Woods</h4>" + "<p>Cratloe Woods is a forested area around the village of Cratloe, just outside of Limerick City. Cratloe Wood Car Park and Picnic Site is located adjacent to Cratloe village and on the western side Cratloe Forest property which is over 700 Hectares in extent. The site is operated by Coillte, who operate a number of forestry areas in Ireland.</p>",
        },
        {
            coords: {
                lat: 52.666432513426216,
                lng: -8.625121561336258
            },
            content: "<h4>Nevsail Watersports</h4>" + "<p>The Limerick Watersports & Activity Centre is based in the heart of Limerick City behind the Hunt Museum. A range of water and land based activities are on offer for all ages, abilities and group sizes. Group activities include team building, hen & stag parties as well as school tours and kids birthdays.</p>",
        },
        {
            coords: {
                lat: 52.663665310677956,
                lng: -8.621588330297785
            },
            content: "<h4>Milk Market</h4>" + "<p>The Milk Market is a covered market selling fresh fruits, vegetables, meats, dairy items, crafts & baked goods since 1852. It provides Limerick residents and visitors with access to a wide variety of local, in-season products, typically directly from the producer.</p>",
        },
        {
            coords: {
                lat: 52.64048373515425,
                lng: -8.64533731710641
            },
            content: "<h4>Crescent Shopping Centre</h4>" + "<p>he Crescent Shopping Centre is a major shopping centre serving Limerick. It is located in Dooradoyle, on the southern outskirts of the city. The Crescent Shopping Centre is the biggest and most successful shopping complex outside of Dublin. It is home to over 90 stores, a host of cafes and restaurants, creche and 12 screen cinema.</p>",
        },
        {
            coords: {
                lat: 52.66429243846216,
                lng: -8.627616913163683
            },
            content: "<h4>Hook & Ladder Sarsfield Street</h4>" + "<p>Hook & Ladder “Living Café” offers customers a unique experience with a variety of store concepts under one roof – café, cookery school, furniture and home accessories store. Hook & Ladder have 4 cafés in Limerick.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible car park & entrance.</p>",
        },
        {
            coords: {
                lat: 52.661639, 
                lng: -8.628799
            },
            content: "<h4>Habit Coffee+Retail</h4>" + "<p>Habit Coffee+Retail is a coffee company aiming to deliver the best quality coffee by expertly trained baristas. Sit in or takeaway and enjoy wonderful Badger & Dodo coffees and sample some handmade artisan Irish snacks.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.661857, 
                lng: -8.626671
            },
            content: "<h4>Wildberry Café</h4>" + "<p>Wildberry Café is a reasonably-priced coffee shop located at a busy crossroads in the middle of Limerick City. There is a lovely outdoor seating area with a great view of the city.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible toilet.</p>",
        },
        {
            coords: {
                lat: 52.664052, 
                lng: -8.624795
            },
            content: "<h4>Story Café</h4>" + "<p>A coffee shop located in the heart of Limerick on the famous Denmark Street known for great service and atmosphere. An outdoor seating area has been added recently.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.662858,
                lng: -8.625753
            },
            content: "<h4>Melt Chocolate & Coffee</h4>" + "<p>Melt Chocolate & Coffee is a cosy coffee shop located on the Little Catherine Street, a pedestrain walkway in the middle of Limerick City. There is a seating area inside and outside the shop to enjoy our coffee and treat.</p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.660226,
                long: -8.630977
            },
            content: "<h4>Caffe Waffe</h4>" + "<p>Caffe Waffe is a family-run café located on Lower Mallow Street. Frsehly baked scones, breads, pastries and waffles are available every morning. This reasonably-priced, cosy café is very popular among school students and young professionals working in the area.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
        {
            coords: {
                lat: 52.667264,
                long: -8.575986
            },
            content: "<h4>Delish Café</h4>" + "<p>Delish Café was originally founded in Limerick City April 2004. College friends, Lisa & Evelyn had a passion for making adventurous sandwiches & sensational salads with only the freshest yet wide variety of ingredients. </p>" + "<p><b>Accessibility:</b> Wheelchair-accessible entrance.</p>",
        },
        {
            coords: {
                lat: 52.661750250196334,
                lng: -8.626151801661749
            },
            content: "<h4>Café Rose & Bistro</h4>" + "<p>Caffe Waffe is a family-run café located on Lower Mallow Street. Frsehly baked scones, breads, pastries and waffles are available every morning. This reasonably-priced, cosy café is very popular among school students and young professionals working in the area.</p>" + "<p><b>Amenities:</b> Good for kids</p>",
        },
    ];

    // Looping Through Location Markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Adding Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            
        });

        // Checking for content for InfoWindow
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