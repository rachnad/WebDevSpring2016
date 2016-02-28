/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);
    function RegisterController($rootScope, $location, UserService) {

        $rootScope.$location = $location;
        $rootScope.register = register;





        function register(user) {


                UserService
                    .createUser(user,function() {
                            $location.path("/profile")});

            }
        }




})();