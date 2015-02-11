var personal = angular.module('personal', ['ngRoute', 'ngResource']);

personal.config(['$routeProvider', function($routeProvider) {
    // Route code will go here
    $routeProvider.
        when('/', {
            templateUrl: '/static/js/views/landing.html',
            controller: landingController
        }).
        when('/start/', {
            templateUrl: '/static/js/views/start.html',
            controller: startController
        }).
        otherwise({redirectTo: '/home/'});
}]);

personal.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);