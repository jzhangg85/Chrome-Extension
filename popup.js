document.addEventListener('DOMContentLoaded', function() {
  
  // set variable to gather element from button in html
  var checkPageButton = document.getElementById('checkPage');
  
  // listen for button click and run callback function
  checkPageButton.addEventListener('click', function() {
    
    // select active tab
    chrome.tabs.getSelected(null, function(tab) {
      
      // make AJAX call
      $.ajax({
        
        // create GET request to API key with specified parameters
        method: "GET",
        dataType: "json",
        url: "http://api.smmry.com/SM_API_KEY=FE22353752&SM_LENGTH=4&SM_QUOTE_AVOID&SM_KEYWORD_COUNT=5&SM_URL=" + tab.url
      })
      
      // upon data return from API key 
      .done(function( data ) {
        
        // initalize empty body for output
        var b = $("body")
        b.empty();
        
        // store and append article title to body
        var h1 = $("<h1>");
        h1.text(data["sm_api_title"]);
        b.append(h1);
        
        // store and append article url to body
        var h2 = $("<h2>");
        h2.text(tab.url);
        b.append(h2);

        // store and append article summary content to body
        var p1 = $("<p>");
        p1.text(data["sm_api_content"]);
        b.append(p1); 

        // store and append keywords to body
        var p2 = $("<p>");
        p2.text("Keywords: " + data["sm_api_keyword_array"].join(", "));
        b.append(p2); 

        // store and append character count to body
        var p3 = $("<p>");
        p3.text("Character count: " + data["sm_api_character_count"]);
        b.append(p3);        
      });
    });
  }, false);
}, false);