/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

// Function takes in an array of tweet objects and then appends each one to the #tweets-container
  const renderTweets = (tweets) => {
    $('#tweets-container').empty(); // remove any existing child nodes before adding new ones
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
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
        ${tweetData.content.text}
      </div>
      <div class="article-footer">
        <div class="article-footer-date"><p>${tweetData.created_at}</p></div>
        <div class="article-footer-flag"><i class="fa-solid fa-flag"></i></div>
        <div class="article-footer-retweet"><i class="fa-sharp fa-solid fa-retweet"></i></div>
        <div class="article-footer-heart"><i class="fa-solid fa-heart"></i></div>
      </div>
    </article>`);
    return $tweet;
  };

renderTweets(tweetData)









