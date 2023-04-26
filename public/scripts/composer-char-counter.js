// Function calculates and return amount of character in new tweet string

$(document).ready(function() {
  $('#tweet-text').keyup(function(){
  // Max characters in one tweet
    let maxCharacters = 140;
  // Amount of characters from text area
    let tweetCharacters = $(this).val().length;
    let countCharacters = tweetCharacters - maxCharacters
  // Find counter in parent and set text equal the calculated amount of characters
    let countText = $(this).parent().children('.new-tweet-count').children('.counter');
    countText.text(countCharacters)
  //if the text = maxCharacters the font color turns red by adding a class
    if (countCharacters > 0) {
      countText.addClass("red");
    } else {
      countText.removeClass("red")
    }
  })
});