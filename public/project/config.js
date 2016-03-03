/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("ConcertApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "/project/client/views/home/home.view.html"
                    //controller: "HomeController"
                })
                .when("/about", {
                    templateUrl: "/project/client/views/about/about.view.html"
                    //controller: "HomeController"
                })
                .when("/profile", {
                    templateUrl: "/assignment/views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "/assignment/views/admin/admin.view.html"
                    //controller: "AdminController"
                })
                .when("/login", {
                    templateUrl: "/project/client/views/login/login.view.html",
                    controller: "LoginController"
                })
                .when("/about", {
                    templateUrl: "/project/client/views/about/about.view.html",
                    controller: "AboutController"
                })
                .when("/concert", {
                    templateUrl: "/project/client/views/concerts/concerts.view.html",
                    controller: "ConcertsController"
                })
                .when("/register", {
                    templateUrl: "/project/client/views/register/register.view.html",
                    controller: "RegisterController"
                })
                .when("/homepage", {
                    templateUrl: "/project/client/views/homepage/homepage.view.html",
                    controller: "HomepageController"
                })
                .otherwise({
                    redirectTo: "/homepage"
                });
        });
})();