/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $rootScope, $location, UserService) {
        $scope.user = $rootScope.currentUser;
        $scope.$location = $location;
        $scope.update = update()


        console.log($scope.user)

        function update(user) {


            var updateUser = {
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                username: $scope.username,
                password: $scope.password
            }

            UserService.updateUser($rootScope.currentUser._id, $rootScope.currentUser,
                function(response) {
                    $rootScope.currentUser=response;
                });
        }
    }
})();
