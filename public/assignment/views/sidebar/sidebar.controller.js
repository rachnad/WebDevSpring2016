/**
 * Created by rachanadeshmukh on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($location, $scope, UserService) {
        $scope.$location = $location;

        $scope.isAdmin = isAdmin;

        function isAdmin() {
            var user = UserService.getCurrentUser();
            return (user != null && user.roles.indexOf("admin") != -1);
        }
    }
})();