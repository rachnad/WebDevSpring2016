/**
 * Created by rachanadeshmukh on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", sidebarController);

    function sidebarController($location, $scope) {
        $scope.$location = $location;

    }
})();