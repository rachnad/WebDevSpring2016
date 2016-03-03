/**
 * Created by rachanadeshmukh on 3/3/16.
 */

(function(){
    angular
        .module("ConcertApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location) {

        $scope.submit = submit;
        $scope.$location = $location;


        function submit() {
            console.log($location);
            $location.path("/homepage");
        }
    }
})();