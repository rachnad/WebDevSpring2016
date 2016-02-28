/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope, $location, UserService) {
        $scope.currentUser = UserService.getCurrentUser();
        $scope.$location = $location;


        $scope.update = update()


        function update() {

            var updateUser = {
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                username: $scope.username,
                password: $scope.password
            }

            UserService.setCurrentUser(updateUser);

            $scope.currentUser = updateUser;

        }




    }




})();
