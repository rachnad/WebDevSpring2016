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
                    templateUrl: "/assignment/client/views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/profile", {
                    templateUrl: "/assignment/client/views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "/assignment/client/views/admin/admin.view.html",
                    //controller: "AdminController"
                })
                .when("/login", {
                    templateUrl: "/assignment/client/views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("/register", {
                    templateUrl: "/assignment/client/views/users/register.view.html",
                    controller: "RegisterController"
                })
                .when("/forms", {
                    templateUrl: "/assignment/client/views/forms/forms.view.html",
                    controller: "FormController"
                })
                .when("/fields", {
                    templateUrl: "/assignment/client/views/forms/form-field.view.html",
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();