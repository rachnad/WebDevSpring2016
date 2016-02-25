/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    angular
        .module("WhiteBoardApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "home.html"
                })
                .when("/profile", {
                    templateUrl: "views/user/profile.view.html"
                })
                .when("/admin", {
                    templateUrl: "views/user/admin.view.html"
                })
                .when("/login", {
                    templateUrl: "views/user/login.view.html"
                })
                .when("/register", {
                    templateUrl: "views/user/register.view.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();