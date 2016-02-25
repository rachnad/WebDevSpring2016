/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("FormMakerApp")
        .controller("MainController", MainController);
    function MainController($scope, $location) {

        $scope.$location = $location;
    }
})();