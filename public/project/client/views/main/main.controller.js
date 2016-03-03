/**
 * Created by rachanadeshmukh on 3/3/16.
 */

(function(){
    angular
        .module("ConcertApp")
        .controller("MainController", mainController);

    function mainController($scope, $location) {
        $scope.$location = $location;
    }
})();
