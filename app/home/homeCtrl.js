/**
 * Created by huntermaxfield on 8/6/15.
 */
var app = angular.module('directivePractice');
app.controller('homeCtrl', function($scope){
    $scope.user = {
        name: 'Geoff McMammy',
        age: 43,
        email: 'geofdude@gmail.com'
    }
})