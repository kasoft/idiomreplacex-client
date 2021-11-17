(function(d, clientScriptsBaseUrl, filterServiceBaseUrl) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = function(){
    idiomReplaceX.ui(clientScriptsBaseUrl);
    // idiomReplaceX.minWordThreshold = 2;
    idiomReplaceX.filterServiceBaseUrl = filterServiceBaseUrl;
    var debug = false;
    idiomReplaceX.extractTextBlocks(debug);
    idiomReplaceX.requestForReplaceX();
  };
  script.src = clientScriptsBaseUrl + 'js/idiomReplaceX.js';
  d.getElementsByTagName('head')[0].appendChild(script);
}(document, 'https://bgbm14463lap/', 'https://bgbm14463lap/service/'));