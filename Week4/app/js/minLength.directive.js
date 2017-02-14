angular.module('app').directive('didMinLength', function () {

    return {
        restrict: 'EA',
        scope:{
           text: '='
        },
        controller: function ($scope, $element) {
            $scope.$watch('text', function() {
                if ($scope.text.length > 5) {
                    $element.addClass('not-valid');
                    $element.removeClass('is-valid');
                } else{
                    $element.addClass('is-valid');
                    $element.removeClass('not-valid');
                }
            });
        }
    }
})