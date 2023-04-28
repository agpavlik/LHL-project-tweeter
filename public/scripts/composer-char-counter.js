// Function calculates and return amount of character in new tweet string

$(document).ready(function() {
  $('#tweet-text').keyup(function(){
  // Max characters in one tweet
    const maxCharacters = 140;
  // Amount of characters from text area
    const tweetCharacters = $(this).val().length;
    const countCharacters = maxCharacters - tweetCharacters
  // Find counter in parent and set text equal the calculated amount of characters
    const countText = $(this).parent().children('.new-tweet-count').children('.counter');
    countText.text(countCharacters)
  //if the text = maxCharacters the font color turns red by adding a class
    if (countCharacters < 0) {
      countText.addClass("red");
    } else {
      countText.removeClass("red")
    }
  })
});