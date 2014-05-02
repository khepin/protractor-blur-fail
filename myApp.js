angular
    .module('MyApp', [])
    .controller('DemoCtrl', function($scope){
        $scope.onBlur = function() {
            $scope.blurEmail = $scope.email;
        }

        $scope.onChange = function() {
            $scope.changeEmail = $scope.email;
        }
    })