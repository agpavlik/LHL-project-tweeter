/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  // Function safely renders insecure text:
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  // Function takes in an array of tweet objects and then appends each one to the #tweets-container
  const renderTweets = (tweets) => {
    $('#tweets-container').empty(); // remove any existing child nodes before adding new ones
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet); // calls createTweetElement for each tweet
      $('#tweets-container').prepend($tweet); // takes return value and appends it to the tweets container / change for prepend in order to reverse tweet list
    }
  };


  // Function creates a new tweet element based on database tweetData
  const createTweetElement = (tweetData) => {
    const $tweet = $(`
    <article class="article-tweet">
      <div class="article-header">
        <div class="article-header-avatar"><img src="${tweetData.user.avatars}"/></div>
        <div class="article-header-username"><p>${tweetData.user.name}</p></div>
        <div class="article-header-nickname"><p>${tweetData.user.handle}</p></div>
      </div>
      <div class="article-tweet-text">
        <p>${escape(tweetData.content.text)}</p>
      </div>
      <div class="article-footer">
        <div class="article-footer-date"><p>${timeago.format(tweetData.created_at)}</p></div>
        <div class="article-footer-flag"><i class="fa-solid fa-flag"></i></div>
        <div class="article-footer-retweet"><i class="fa-sharp fa-solid fa-retweet"></i></div>
        <div class="article-footer-heart"><i class="fa-solid fa-heart"></i></div>
      </div>
    </article>`);
    return $tweet;
  };


  // Add a submit handler to the form
  const $form = $('.new-tweet-form');
  $form.on('submit', (event) => {
    event.preventDefault();
    const inputLength = $('#tweet-text').val().length
    if (inputLength < 1) {
      $(".error-empty").addClass("error-show")
    } else if (inputLength > 140) {
      $(".error-length").addClass("error-show")
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $form.serialize()
      }).then(loadTweets);
    }
  });

  // Make a GET request to load the tweet
  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).then(renderTweets);
  };

  loadTweets();

})