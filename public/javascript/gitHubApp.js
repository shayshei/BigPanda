/**
 * Created by shs on 8/22/15.
 */

var gitHubApp = angular.module('GitHubApp', []);
gitHubApp.controller('RestApiCtrl', function ($scope, $http) {
    $http.get('/status').success(function (data) {
       $scope.status = data;
    });
    $http.get('/messages').success(function (data) {
        $scope.messages = data;
    });
    $scope.name = "shay";
});

gitHubApp.filter('capitalize', function() {
    return function(input) {
        return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    }
});
