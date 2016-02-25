/**
 * Created by rachanadeshmukh on 2/23/16.
 */
(function(){
    angular
        .module("FormMakerApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($location, $scope, UserService) {
        $scope.$location = $location;

    }
})();