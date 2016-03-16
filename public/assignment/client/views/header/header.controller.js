/**
 * Created by rachanadeshmukh on 2/23/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($location, $scope, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.user = $rootScope.currentUser;

        $scope.logout = logout;


        function logout(){
            $scope.currentUser = null;
            $rootScope.currentUser=null;
        }

        function isAdmin() {
            var user = UserService.getCurrentUser();
            return (user != null && user.roles.indexOf("admin") != -1);
        }

    }




})();