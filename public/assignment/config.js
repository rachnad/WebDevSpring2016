/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "/assignment/views/home/home.view.html"
                })
                .when("/profile", {
                    templateUrl: "/assignment/views/users/profile.view.html"
                })
                .when("/admin", {
                    templateUrl: "/assignment/views/admin/admin.view.html"
                })
                .when("/login", {
                    templateUrl: "/assignment/views/users/login.view.html"
                })
                .when("/register", {
                    templateUrl: "/assignment/views/users/register.view.html"
                })
                .when("/forms", {
                    templateUrl: "/assignment/views/forms/forms.view.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();