# Flashlight App

Malware-free flashlight app, motivated by [this video](https://www.youtube.com/watch?v=Q8xz8xKEFvU).

## Dependencies

* [Bower](http://bower.io)
* [Cordova](http://cordova.apache.org)

## Installation

    git clone https://github.com/pilwon/flashlight.git flashlight && cd $_
    cordova platform add android && git add . && git commit -m "Added android platform."
    cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
    bower install

## Usage

    cordova run android  # run on device
    cordova build --release  # release build
    # platforms/android/ant-build/CordovaApp-release-unsigned.apk

## Credits

* [Cordova](http://cordova.apache.org/)
* [Flashlight-PhoneGap-Plugin](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin)

## License

<pre>
The MIT License (MIT)

Copyright (c) 2014 Pilwon Huh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>
