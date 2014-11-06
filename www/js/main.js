define('flashlight', function (require, exports, module) {
  var _flashlight = window.plugins.flashlight;
  function available() {
    return _flashlight.available.apply(_flashlight, arguments);
  }
  function switchOff() {
    return _flashlight.switchOff.apply(_flashlight, arguments);
  }
  function switchOn() {
    return _flashlight.switchOn.apply(_flashlight, arguments);
  }
  exports.available = available;
  exports.switchOff = switchOff;
  exports.switchOn = switchOn;
});

define('main', function (require, exports, module) {
  var Engine = require('famous/core/Engine');
  var Modifier = require('famous/core/Modifier');
  var Surface = require('famous/core/Surface');
  var flashlight = require('flashlight');

  // var colors = {
  //   OFF: '#990000',
  //   ON: '#009900'
  // };
  var isOn = false;

  var modifier = new Modifier({
    align: [0.5, 0.5],
    origin: [0.5, 0.5]
  });

  var button = new Surface({
    properties: {
      // backgroundColor: colors.OFF
    }
  });

  Engine.createContext().add(modifier).add(button);

  flashlight.available(function (isAvailable) {
    if (!isAvailable) {
      return alert('Flashlight is not available on this device.');
    }
    button.on('click', function () {
      if (isOn) {
        flashlight.switchOff();
        button.setProperties({
          // backgroundColor: colors.OFF;
        });
      } else {
        flashlight.switchOn();
        button.setProperties({
          // backgroundColor: colors.ON;
        });
      }
      isOn = !isOn;
    });
  });
});

document.addEventListener('deviceready', function () {
  FastClick.attach(document.body);
  require(['main']);
}, false);
