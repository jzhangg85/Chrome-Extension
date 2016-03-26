document.addEventListener('DOMContentLoaded', function() {
  var saveActionButton = document.getElementById('saveActionId');
  saveActionButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document; 
      var url_link = tab.url 

      var f = d.createElement('form');
      f.action = 'smmry.com';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);