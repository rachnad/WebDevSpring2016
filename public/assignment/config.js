/**
 * Created by rachanadeshmukh on 2/24/16.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "/assignment/views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/profile", {
                    templateUrl: "/assignment/views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "/assignment/views/admin/admin.view.html",
                    //controller: "AdminController"
                })
                .when("/login", {
                    templateUrl: "/assignment/views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("/register", {
                    templateUrl: "/assignment/views/users/register.view.html",
                    controller: "RegisterController"
                })
                .when("/forms", {
                    templateUrl: "/assignment/views/forms/forms.view.html",
                    controller: "FormController"
                })
                .when("/fields", {
                    templateUrl: "/assignment/views/forms/form-field.view.html",
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();