var angular = require('angular');
require('angular-resource'); // to showcase a shimmed module that depends on another shimmed module
var nv = require('nvd3'); // this shouldn't throw an error that d3 isn't defined
var d3 = require('d3');

alert('app.js loaded');

angular.module('foo', []).controller('bar', function () {
  // this shouldn't throw an error
});
