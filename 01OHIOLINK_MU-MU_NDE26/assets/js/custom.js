(function () {
  ('use strict');
  ('use strict');
  var app = angular.module('viewCustom', ['angularLoad', 'externalSearch']);
  var LOCAL_VID = '01OHIOLINK_MU-MU_NDE';

  /*----------below is the code for libchat-----------*/
  // Adds the chat button
  (function () {
    var lc = document.createElement('script');
    lc.type = 'text/javascript';
    lc.async = 'true';
    lc.src =
      ('https:' == document.location.protocol ? 'https://' : 'http://') +
      'v2.libanswers.com/load_chat.php?hash=48597dfc1078556815ee78d6e99e7a7b';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(lc, s);
  })();
  /*---------------libchat code ends here---------------*/
})();
