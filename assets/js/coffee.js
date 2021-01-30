let coffeeYouMayLike = [
    {"title": "Hook & Ladder Sarsfield Street", 
     "img": "/assets/images/hook-and-ladder-front.jpg", 
     "description": "Hook & Ladder offers customers a unique experience with a café, cookery school and furniture store under one roof.", 
     "service": "Delivery, Takeaway, Dine-in & In-store shopping", 
     "mapLink": "https://g.page/Hookandladderofficial?share"},
  
    {"title": "Habit Coffee+Retail", 
    "img": "https://cdn.pixabay.com/photo/2016/01/02/04/59/coffee-1117933_960_720.jpg", 
    "description": "Habit Coffee+Retail is a coffee company aiming to deliver the best quality coffee by expertly trained baristas.", 
    "service": "Takeaway, Dine-in & In-store shopping", 
    "mapLink": "https://g.page/habit-coffee-retail?share"},
    
    {"title": "Wildberry Café", 
    "img": "https://cdn.pixabay.com/photo/2015/11/07/11/48/conservatory-1031494_960_720.jpg", 
    "description": "Wildberry Café is a reasonably-priced coffee shop located at a busy crossroads in the middle of Limerick City.", 
    "service": "Delivery, Takeaway & Dine-in", 
    "mapLink": "https://g.page/Wildberry-Cafe?share"},
    
    {"title": "Story Café", 
    "img": "assets/images/story.png", 
    "description": "A coffee shop located in the heart of Limerick on the famous Denmark Street known for great service and vibrant atmosphere.", 
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/wPbyDBPnB8oxWWJe6"},

    {"title": "Melt Chocolate & Coffee", 
    "img": "/assets/images/melt.jpeg", 
    "description": "Melt Chocolate & Coffee is a quiet, comfortable coffee shop located on Little Catherine Street. It is facing a busy pedestrian walkway in the middle of Limerick City.", 
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/cf3UwFZP3rdz5m1g6"},
    
    {"title": "Caffe Waffe", 
    "img": "/assets/images/caffe-waffe.jpeg", 
    "description": "Caffe Waffe is a family-run café located on Lower Mallow Street. Freshly baked bread, scones, pastries and waffles are available every morning.", 
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/gjS7mrZLF4HVweYY8"},
    
    {"title": "Delish Café", 
    "img": "/assets/images/delish.jpeg", 
    "description": "Delish Café was originally founded in Limerick City April 2004. College friends, Lisa & Evelyn had a passion for making adventurous sandwiches & sensational salads with only the freshest yet wide variety of ingredients.", 
    "service": "Delivery, Takeaway & Dine-in", 
    "mapLink": "https://g.page/delish-cafe-castletroy?share"},
    
    {"title": "Café Rosé & Bistro", 
    "img": "/assets/images/cafe-rose.jpeg", 
    "description": "Café Rosé is a café & bistro in the heart of Limerick city serving tasty, modern cuisine. Café Rosé serves healthy breakfast, lunch, homemade desserts to eat in and to take away.",
    "service": "Takeaway & Dine-in", 
    "mapLink": "https://goo.gl/maps/DshL6onvu9XMcF4c9"}
];

// Shuffle my array every 8 seconds
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
    setInterval(insertPopularSpots, 8000);
};

function insertPopularSpots(){
      const youMayLikeThisElement = shuffle(coffeeYouMayLike).slice(0,3).map(item =>{
        // Card 
        // https://getbootstrap.com/docs/4.0/components/card/
        return `<div id=${item.title}>
                <div class="card">
                    <img class="card-img-top" src="${item.img}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">${item.service}</p>
                        <a href="${item.mapLink}" target="_blank" class="btn btn-primary">View on Maps</a>
                    </div>
                </div>
        </div>`;
    });
  
  document.getElementById("coffeeYouMayLike").innerHTML =  youMayLikeThisElement;
}