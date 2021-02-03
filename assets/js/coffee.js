let coffeeYouMayLike = [
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
    "description": "Delish Café was originally founded with a passion for sandwiches & salads with only the freshest ingredients.", 
    "service": "Delivery, Takeaway & Dine-in. The café promotes a “Meet, Greet & Seat Philosophy” in all shops so that each and every customer is handled with care & valued.", 
    "mapLink": "https://g.page/delish-cafe-castletroy?share",
    "externalLink": "https://www.delish.ie/"},
    
    {"title": "Café Rosé & Bistro", 
    "img": "https://cdn.pixabay.com/photo/2019/10/21/16/48/table-4566563__480.jpg", 
    "description": "Café Rosé is a café & bistro serving tasty, modern cuisine for breakfast, lunch as well as homemade desserts. This small, comfortable café is ideal for families with kids and also has the capability to cater for large groups.",
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/DshL6onvu9XMcF4c9",
    "externalLink": "https://www.facebook.com/caferose2016/"}
];

// Shuffle my array every 30 seconds
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
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
      const youMayLikeThisElement = shuffle(coffeeYouMayLike).slice(0,2).map(item =>{
        // Card 
        // https://getbootstrap.com/docs/4.0/components/card/
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
    });
  
  document.getElementById("coffeeYouMayLike").innerHTML =  youMayLikeThisElement;
}