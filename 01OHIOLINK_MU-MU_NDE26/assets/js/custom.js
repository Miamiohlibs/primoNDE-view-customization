(function () {
  ('use strict');
  ('use strict');

  // Adds the chat button
  (function () {
    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = 'true';
    lc.src =
      ('https:' == document.location.protocol ? 'https://' : 'http://') +
      'libanswers.lib.miamioh.edu/load_chat.php?hash=b81f60084589f2d6a37b0cf4420a7a9d11eb67b362a45685ae5b79b41005310d';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(lc, s);
  })();
  // End the chat button
  
})();