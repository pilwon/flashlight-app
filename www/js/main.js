define('main', function (require, exports, module) {
  var $ = require('jquery');
  var flashlight = window.plugins.flashlight;
  var on = false;

  flashlight.available(function (available) {
    if (!available) {
      return alert('Flashlight is not available on this device.');
    }
    var $body = $('body');
    $body.click(function () {
      $body.toggleClass('flashlight');
      if (on) {
        flashlight.switchOff();
      } else {
        flashlight.switchOn();
      }
      on = !on;
    });
  });
});

document.addEventListener('deviceready', function () {
  FastClick.attach(document.body);
  require(['main']);
}, false);
