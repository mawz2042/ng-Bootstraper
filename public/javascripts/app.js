/** ng-Bootstrap-JS - v0.1.1 - https://github.com/brian-frichette/ng-Bootstrap
  * Copyright (c) 2013 Brian Frichette. All rights reserved.
  * Licensed MIT - http://opensource.org/licenses/MIT
  */

(function() { // Create application
    var app = angular.module('myApp', []);

    app.controller('MainAppCtrl', [
        '$scope', function($scope) {
            $scope.title = 'Partners';
        }
    ]);
}());