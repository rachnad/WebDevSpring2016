/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);
    function LoginController($scope, $location, UserService) {
        $scope.$location = $location;

        $scope.login = login;


       function login(user) {
           console.log('clicked');
           var user = UserService.findUserByCredentials(user.username,user.password,
           function (response) {
               if (response) {
                   console.log(response);
                   UserService.setCurrentUser(user);
                   $location.url("/profile");
               }
               else {
                   console.log("user doesn't exist");
               }


           })
       }
    }})();





