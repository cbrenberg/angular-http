console.log('client.js');

const shellApp = angular.module('ShellApp', []);

shellApp.controller('ShellController', ['$http', function($http) {
  console.log('angularHttpController loaded');

  const self = this;
  self.number = 7;

}]);