var app = angular.module('trailApp');

app.controller('mapCtrl', function($scope, mapService) {
	
	var mapOptions = {
    center: new google.maps.LatLng(39.8282, -98.5795),
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.TERRAIN
};

new google.maps.Map(document.getElementById('map'), mapOptions);
});