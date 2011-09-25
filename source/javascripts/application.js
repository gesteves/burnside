twttr.events.bind('follow', trackFollow);
twttr.events.bind('tweet', trackTweet);
function trackFollow(intent_event) {
    if (intent_event) {
      var label = intent_event.data.screen_name;
      _gaq.push(['_trackSocial', 'Twitter', 'Follow', label]);
    }
  }
function trackTweet(intent_event) {
    if (intent_event) {
      var label = location.href;
      _gaq.push(['_trackSocial', 'Twitter', 'Tweet', label]);
    }
  }
FB.Event.subscribe('edge.create', function(targetUrl) {
  _gaq.push(['_trackSocial', 'Facebook', 'Like', targetUrl]);
});
FB.Event.subscribe('edge.remove', function(targetUrl) {
  _gaq.push(['_trackSocial', 'Facebook', 'Unlike', targetUrl]);
});
FB.Event.subscribe('message.send', function(targetUrl) {
  _gaq.push(['_trackSocial', 'Facebook', 'Send', targetUrl]);
});
FB.Event.subscribe('comment.create', function(targetUrl) {
  _gaq.push(['_trackSocial', 'Facebook', 'Comment', targetUrl]);
});
FB.Event.subscribe('comment.remove', function(targetUrl) {
  _gaq.push(['_trackSocial', 'Facebook', 'Remove comment', targetUrl]);
});