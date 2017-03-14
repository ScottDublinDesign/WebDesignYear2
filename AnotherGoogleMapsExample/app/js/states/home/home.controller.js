angular.module("app")
    .controller('HomeController', function ($scope, locationService) {
        $scope.places = [];

        var dublin = { lat: 53.3416542, lng: -6.2570467 };
        var infoWindow = new google.maps.InfoWindow();

        var map = new google.maps.Map(document.getElementById('homeMap'), {
            center: dublin,
            zoom: 15,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            disableDefaultUI: true
        });

        locationService.getLocations()
        .then(function(places){
           $scope.places = places;
           $scope.places.forEach(function(place){
               addMarker(place);
           })
        });

        function addMarker(place) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.location,
                icon: {
                    url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
                    anchor: new google.maps.Point(10, 10),
                    scaledSize: new google.maps.Size(10, 17)
                }
            });

            google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent(place.name);
                    infoWindow.open(map, marker);
            });
        }
    })