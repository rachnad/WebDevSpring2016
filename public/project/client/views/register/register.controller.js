/**
 * Created by rachanadeshmukh on 3/3/16.
 */

(function(){
    angular
        .module("ConcertApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location) {

        $scope.submit = submit;
        $scope.$location = $location;


        function submit() {
            console.log($location);
            $location.path("/concert");
        }
    }
})();