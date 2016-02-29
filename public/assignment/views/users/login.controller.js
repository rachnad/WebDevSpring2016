/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    function LoginController($scope, $rootScope, $location, UserService) {
        $scope.$location = $location;

        $scope.login = login;


       function login(user) {
           console.log('clicked');
           UserService.findUserByCredentials(user.username,user.password,
           function (response) {
               if (response != null) {
                   UserService.setCurrentUser(response);
                   console.log($rootScope.currentUser);
                   $location.url("/profile");
               }
               else {
                   console.log("user doesn't exist");
               }


           })
       }
    }})();





