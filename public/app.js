var angular = require('angular');
require('angular-resource'); // to showcase a shimmed module that depends on another shimmed module

alert('app.js loaded');

angular.module('foo', []).controller('bar', function () {
  // this shouldn't throw an error
});
