// Monthly Favourites Selections
var cards = document.querySelectorAll(".favourite-card");
for (var i=0; i<cards.length; i++) {
  cards[i].addEventListener('click', function(e) {
    var link = this.querySelector(".favourite-link");
    link.click();
  }, false);
}