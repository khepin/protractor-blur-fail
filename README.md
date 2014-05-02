This shows the failures happening in protractor when using the blur event in
Angular.

 * clone the repository
 * run `protractor protractor.conf.js`
 * __everything fine__

### Make it fail

To make the test fail, you need to run this again but immediately after protractor
opens the Chrome window, minimize it.

Then let it run and it fails