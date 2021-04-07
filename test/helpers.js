require('babel-register')();
var exposedProperties = ['window', 'navigator', 'document'];
var jsdom = require('jsdom');
const {JSDOM} = jsdom;  
const {document} = (new JSDOM('<!doctype html><html><body></body></html>',{
  url:"http://localhost" 
})).window;  
global.document = document;  
global.window = document.defaultView;
// global.document = jsdom('');
// global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js'
};
