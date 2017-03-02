angular.module('app', [])
    .controller('SearchController', function ($scope) {
        $scope.text = "Some places";

        $scope.places = [];
        var dublin = { lat: 53.3416542, lng: -6.2570467 };

        var service = new google.maps.places.PlacesService(document.createElement('div'));
        service.nearbySearch({
            location: dublin,
            radius: 500,
            type: ['store']
        }, callback);


        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                $scope.$apply(function () {
                    $scope.places = results;
                });
            }
        }

    })