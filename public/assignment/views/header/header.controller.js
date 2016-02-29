/**
 * Created by rachanadeshmukh on 2/23/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", headerController);

    function headerController($location, $scope, $rootScope) {
        $scope.$location = $location;
        $scope.logout = logout;
        $scope.user = $rootScope.user

    }

    function logout(user){
        $rootScope.user=null;
    }
})();