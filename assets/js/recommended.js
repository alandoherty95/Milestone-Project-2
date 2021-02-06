// // List of Recommended Attractions, Activities & Coffee Shops
var cards = document.querySelectorAll(".favourite-card");
for (var i=0; i<cards.length; i++) {
  cards[i].addEventListener('click', function(e) {
    var link = this.querySelector(".favourite-link");
    link.click();
  }, false);
}

let placesYouWillLove = [
    {"title": "Hook & Ladder Sarsfield Street", 
     "img": "https://cdn.pixabay.com/photo/2015/11/07/11/49/coffee-1031526__480.jpg", 
     "description": "Hook & Ladder offers customers a unique experience with a café, cookery school and furniture store under one roof. This casual and cosy café is very accommodating with a kids' menu and vegetarian options. Note: Wheelchair-accessible entrance, seating & toilet is available.", 
     "service": "Delivery, Takeaway, Dine-in & In-store shopping", 
     "mapLink": "https://g.page/Hookandladderofficial?share",
     "externalLink": "https://www.hookandladder.ie/sarsfield-street/"},
  
    {"title": "Habit Coffee+Retail", 
    "img": "https://cdn.pixabay.com/photo/2016/01/02/04/59/coffee-1117933_960_720.jpg", 
    "description": "Habit Coffee+Retail is a coffee company aiming to deliver the best quality coffee by expertly trained baristas. This café has the sleek, minimalist look of a modern coffee shop. Note: Wheelchair-accessible entrance is available.", 
    "service": "Takeaway, Dine-in & In-store shopping", 
    "mapLink": "https://g.page/habit-coffee-retail?share",
    "externalLink": "https://www.instagram.com/habit_coffee_retail/?hl=en"},
    
    {"title": "Wildberry Café", 
    "img": "https://cdn.pixabay.com/photo/2015/11/07/11/48/conservatory-1031494_960_720.jpg", 
    "description": "Wildberry Café is a reasonably-priced coffee shop located at a busy crossroads in the middle of Limerick City. This warm and cosy café provides a takeaway and local delivery service. The menu offers organic dishes and vegetarian options. Note: Wheelchair-accessible toilet is available.", 
    "service": "Delivery, Takeaway & Dine-in", 
    "mapLink": "https://g.page/Wildberry-Cafe?share",
    "externalLink": "https://www.facebook.com/pages/category/Coffee-Shop/Wildberry-Cafe-634674316980330/"},
    
    {"title": "Story Café", 
    "img": "https://cdn.pixabay.com/photo/2015/07/11/23/00/coffee-841425__480.jpg", 
    "description": "A coffee shop located on the famous Denmark Street known for great service and vibrant atmosphere. Story Café has takeaway and dine-in options and also has the ability to cater for groups and families. Note: Wheelchair-accessible entrance is available.", 
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/wPbyDBPnB8oxWWJe6",
    "externalLink": "https://www.facebook.com/StoryCafeLK"},

    {"title": "Melt Chocolate & Coffee", 
    "img": "https://cdn.pixabay.com/photo/2015/04/20/13/28/coffee-731330__480.jpg", 
    "description": "Melt Chocolate & Coffee is a quiet, comfortable coffee shop located at a busy pedestrian walkway on Little Catherine Street. The menu includes sandwiches, paninis and pastries made fresh every morning. Note: Wheelchair-accessible entrance is available.",
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/cf3UwFZP3rdz5m1g6",
    "externalLink": "https://www.facebook.com/meltchocolateandcoffee/"},
    
    {"title": "Caffe Waffe", 
    "img": "https://cdn.pixabay.com/photo/2016/02/19/10/25/breakfast-1209223__480.jpg", 
    "description": "Caffe Waffe is a family-run café with freshly baked scones, pastries and waffles are available every morning. This small, reasonably-priced café is very popular among school students and young professionals working in the area.", 
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/gjS7mrZLF4HVweYY8",
    "externalLink": "https://www.facebook.com/Caffe-Waffe-158333484228389/?ref=page_internal"},
    
    {"title": "Delish Café", 
    "img": "https://cdn.pixabay.com/photo/2014/08/21/09/27/coffee-423198__480.jpg", 
    "description": "Delish Café was originally founded with a passion for sandwiches & salads with only the freshest ingredients. The café promotes a “Meet, Greet & Seat Philosophy” in all shops so that each and every customer is handled with care & valued.", 
    "service": "Delivery, Takeaway & Dine-in.", 
    "mapLink": "https://g.page/delish-cafe-castletroy?share",
    "externalLink": "https://www.delish.ie/"},
    
    {"title": "Café Rosé & Bistro", 
    "img": "https://cdn.pixabay.com/photo/2019/10/21/16/48/table-4566563__480.jpg", 
    "description": "Café Rosé is a café & bistro serving tasty, modern cuisine for breakfast, lunch as well as homemade desserts. This small, comfortable café is ideal for families with kids and also has the capability to cater for large groups.",
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/DshL6onvu9XMcF4c9",
    "externalLink": "https://www.facebook.com/caferose2016/"},
  
    {"title": "King John's Castle", 
     "img": "https://raw.githubusercontent.com/alandoherty95/Milestone-Project-2/master/assets/images/king-johns-castle-home.jpg", 
     "description": "King John's Castle is a 13th-century castle located on Kings Island in Limerick, next to the River Shannon. Visitors can try on historic costumes - 18th century dresses or chainmail tunics. The sights, scenes and sounds of King John’s Castle and its environs all combine to recreate the atmosphere of the era.", 
     "service": "Good for kids", 
     "mapLink": "https://goo.gl/maps/izB18TvPC59JFPJb8",
     "externalLink": "https://www.kingjohnscastle.com/"},
  
    {"title": "Saint Mary's Cathedral", 
    "img": "https://raw.githubusercontent.com/alandoherty95/Milestone-Project-2/master/assets/images/stables.jpeg", 
    "description": "Saint Mary’s Cathedral was founded in 1168 AD and stands majestically over the City of Limerick on the banks of the River Shannon. It is one of the most important medieval buildings to survive intact in Ireland, which is still performing its original function. It is the oldest building in Limerick still in continuous daily use. Note: Wheelchair-accessible car park & entrance", 
    "service": "Wheelchair-accessible car park & entrance", 
    "mapLink": "https://goo.gl/maps/YL2uWJRtUi6FvnE76",
    "externalLink": "https://www.saintmaryscathedral.ie/"},
    
    {"title": "Treaty Stone", 
    "img": "https://irelandxo.com/sites/default/files/styles/full_width_image__780px_/public/default_images/Screen%20Shot%202019-07-03%20at%2012.09.41%20p.m..png?itok=6VxXjx_L", 
    "description": "The Treaty Stone is a monument with a stone said to be used in the signing of the 1691 Treaty of Limerick, marking the surrender of the city to William of Orange. The pedestal is decorated with an image of the castle, on the opposite side of the River Shannon, signifying that Limerick was a cathedral city. Note: Wheelchair-accessible entrance.", 
    "service": "Good for kids, Wheelchair-accessible entrance", 
    "mapLink": "https://goo.gl/maps/Y6yR7oUVSnPnWRtw7",
    "externalLink": "https://www.discoverireland.ie/limerick/treaty-stone"},
    
    {"title": "Riverside Walk", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/ariel-limerick.jpg?raw=true", 
    "description": "The Limerick City Riverside Walk is a scenic 3.25km shared walking and cycling trail which runs through the historic Shannon Fields and City Centre. There are many historic bridges, including Thomond Bridge and Sarsfield Bridge, to see on this walk. En route you will see some landmark buildings",
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/T1Go6rXhPZ9gykx56",
    "externalLink": "https://www.hookandladder.ie/sarsfield-street/"},

    {"title": "UL Campus", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/ul-bridge.jpeg?raw=true", 
    "description": "The University of Limerick campus is truly one of the most beautiful university campuses anywhere in the world. The University of Limerick has the longest footbridge in Ireland and one of the longest footbridges in Europe - it is called the Living Bridge! It consists of seven 50-metre spans linked together by piers which create four platforms of refuge for walkers.", 
    "service": "Good for kids, Wheelchair-accessible car park & entrance", 
    "mapLink": "https://goo.gl/maps/csiPxfTTaozTAdSJ9",
    "externalLink": "https://www.ul.ie/ul-campus"},
    
    {"title": "Castletroy Neighbourhood Park", 
    "img": "https://lh3.ggpht.com/RTfz1vOVrLOq_oOtkPugajh_HWFb5K84dgC-ui_7Xh8UyD5Pd9JSt5nM6duWFmL1qNZ2P1yYgHWsLwQS_FI", 
    "description": "Castletroy Neighbourhood Park is a large outdoor public park. It features an array of natural habitats, including a 4,300 sq. metre lake, wetlands, wildflower grass areas and woodlands. It also features 1.2 km of pedestrian pathways, a fully equipped children’s playground, skateboarding area, circular cycle route and central exhibition area with covering structure.", 
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/nSaXjnCCgPH6AURj9",
    "externalLink": "https://www.ilovelimerick.ie/castletroy-neighbourhood-park/"},
    
    {"title": "People's Park", 
    "img": "https://www.limerick.ie/sites/default/files/styles/hero_image/public/media/images/2017-03/People%27s-Park-Limerick-810x456.jpg?itok=n-ri4UsV", 
    "description": "The People's Park is a large public park located near Pery Square in Limerick. It can be found just west of the railway station and bus terminal. Items of interest in the People's Park include the refurbished drinking fountain, the Limerick City Gallery of Art, children's playground, a band stand and two park shelters.", 
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/LxeUR9GSb3Hb1ugW7",
    "externalLink": "https://limerickslife.com/peoples-park/"},
    
    {"title": "Sarsfield Bridge", 
    "img": "https://film.limerick.ie/sites/default/files/styles/full_screen/public/users/clare/images/locations/Sarsfield%20Bridge_0.jpg?itok=njX51_OH", 
    "description": "Sarsfield Bridge is a five-span limestone road bridge. It was built between 1824-35 connecting Sarsfield Street and Ennis Road. It was once a swivel bridge that could open allowing large vessels to pass into the upper quays. This function is no longer in use although the mechanisms can still be seen under the bridge.",
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/zhRnaqFJMQe99Bfd6",
    "externalLink": "https://www.buildingsofireland.ie/buildings-search/building/21512010/sarsfield-bridge-sarsfield-street-ennis-road-limerick-limerick-city"},
  
  {"title": "Cratloe Woods", 
     "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/woods.jpg?raw=true", 
     "description": "Cratloe Woods is a forested area around the village of Cratloe, just outside of Limerick City. It overlooks the Estuary of the River Shannon which is the longest river in Ireland and Great Britain. The Galtee Mountains in Co. Tipperary can be seen to the east, the Ballyhoura Mountains in North Cork to the south and Shannon Airport to the west.", 
     "service": "Good for kids", 
     "mapLink": "https://goo.gl/maps/QYeh7qyneNj9m1MAA",
     "externalLink": "https://www.coillte.ie/site/cratloe-wood/"},
  
    {"title": "Bunratty Castle & Folk Park", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/bunratty.jpeg?raw=true", 
    "description": "Bunratty Castle is a 15th-century castle and living 19th-century village bringing the periods alive at this family-friendly museum. The castle and the adjoining folk park are run by Shannon Heritage as tourist attractions. It is widely recognised as the most complete and authentic castle in Ireland.", 
    "service": "Good for kids, Wheelchair-accessible car park & entrance.", 
    "mapLink": "https://goo.gl/maps/wkexFeM1WtfzfAxp8",
    "externalLink": "https://www.bunrattycastle.ie/"},
    
    {"title": "The Hunt Museum", 
    "img": "https://cdn.pixabay.com/photo/2017/01/21/22/40/castle-1998435__340.jpg", 
    "description": "The Hunt Museum preserves and exhibits the original artefacts gathered, over a lifetime, by John and Gertrude Hunt and known as the Hunt Collection. The Museum also displays its own collections, as well as visiting exhibitions of Local, National and International significance with the overall aim of maximising their cultural and educational potential.", 
    "service": "Wheelchair-accessible entrance, lift & toilet.", 
    "mapLink": "https://g.page/huntmuseum?share",
    "externalLink": "https://www.huntmuseum.com/"},
    
    {"title": "Limerick City Gallery of Art", 
    "img": "https://cdn.pixabay.com/photo/2019/05/31/13/35/art-gallery-4242219__340.jpg", 
    "description": "Limerick City Gallery of Art is the largest contemporary art gallery in the Mid-Western Region, annually exhibiting national and international artists in a diverse exhibition programme. Limerick City Gallery of Art is one of the leading contemporary art galleries in Ireland and home to an important collection of Irish 18th -21st century art in all media.",
    "service": "Wheelchair-accessible car park, entrance, lift & toilet", 
    "mapLink": "https://goo.gl/maps/2MbVvUsuyvT9HDyu5",
    "externalLink": "http://gallery.limerick.ie/"},

    {"title": "Aura Leisure Centre", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/aura.png?raw=true", 
    "description": "Aura Leisure Centre is a public leisure facility with a gym, swimming pool, sauna, steam room and sports hall. It is located at Grove Island Shopping Centre on the Corbally side of the city.", 
    "service": "Good for kids", 
    "mapLink": "https://g.page/AuraLeisureGroveIsland?share",
    "externalLink": "https://www.auraleisure.ie/location/grove-island/"},
    
    {"title": "Nevsail Watersports", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/nevsail.png?raw=true", 
    "description": "The Limerick Watersports & Activity Centre is based in the heart of Limerick City behind the Hunt Museum. Nevsail Watersports promote the benefits of getting active, outdoors and experiencing extreme sports and adventure activities to positively develop personalities and improve people's overall health and happiness.", 
    "service": "Good for kids", 
    "mapLink": "https://goo.gl/maps/eARkjxtBCF3LpcM78",
    "externalLink": "https://www.limerickadventures.com/"},
    
    {"title": "Milk Market", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/milk-market.jpeg?raw=true", 
    "description": "The Milk Market is a covered market selling fresh fruits, vegetables, meats, dairy items, crafts & baked goods since 1852. It provides Limerick residents and visitors with access to a wide variety of local, in-season products, typically directly from the producer. From passionate amateur cooks to people on the look-out for variety and value.", 
    "service": "Wheelchair-accessible entrance, lift & toilet.", 
    "mapLink": "https://goo.gl/maps/PDzWvnRE6pJNjeoJ8",
    "externalLink": "https://www.milkmarketlimerick.ie/"},
    
    {"title": "Crescent Shopping Centre", 
    "img": "https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/images/crescent.jpeg?raw=true", 
    "description": "The Crescent Shopping Centre is a major shopping centre serving Limerick. It is located in Dooradoyle, on the southern outskirts of the city. It is home to over 90 stores, a host of cafes and restaurants, a drop in creche and a 12 screen cinema.",
    "service": "Wheelchair-accessible car park, entrance, lift & toilet", 
    "mapLink": "https://goo.gl/maps/G9HtaovKQNoPWUi96",
    "externalLink": "https://crescentshoppingcentre.ie/"}
];

// Shuffle my array every 30 seconds
// Inspiration from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remains elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

window.onload = function() {
    insertPopularSpots();
    setInterval(insertPopularSpots, 30000);
};

function insertPopularSpots(){
      const youMayLikeThisElement = shuffle(placesYouWillLove).slice(0,3).map(item =>{
        // Card Structure
        // Inspiration from https://getbootstrap.com/docs/4.0/components/card/
        return `<div id=${item.title}>
                <div class="single-card">
                    <img class="card-img-top" src="${item.img}" alt="Card Image Cap">
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-text">${item.description}</p>
                        <p class="card-service">${item.service}</p>
                        <a href="${item.mapLink}" target="_blank" class="btn btn-info">View on Maps</a>
                        <a href="${item.externalLink}" target="_blank" class="btn btn-info">View External Website</a>
                    </div>
                </div>
        </div>`;
    }).join("")
  
  document.getElementById("placesYouWillLove").innerHTML =  youMayLikeThisElement;
}