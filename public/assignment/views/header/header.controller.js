/**
 * Created by rachanadeshmukh on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($location, $scope, UserService) {
        $scope.$location = $location;

    }
})();