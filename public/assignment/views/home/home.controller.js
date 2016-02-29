/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);
    function HomeController($scope, $location, $rootScope) {

        $scope.$location = $location;
    }
})();/**
 * Created by rachanadeshmukh on 2/23/16.
 */
