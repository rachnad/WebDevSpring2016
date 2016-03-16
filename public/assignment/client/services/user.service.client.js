/**
 * Created by rachanadeshmukh on 2/25/16.
 */

(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope, $http) {
        var currentUser;

        var api =  {

            findUserByCredentials: findUserByCredentials,
            findUserByUsername: findUserbyUsername,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return api;

        function getCurrentUser() {
            return $rootScope.currentUser;
        }

        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }

        function findUserbyUsername(username) {
            return $http.get("/api/assignment/user?username="+$rootScope.currentUser.username);

        }


        function findUserByCredentials(username, password) {
            return $http.get("/api/assignment/user?username="+$rootScope.currentUser.username
                +"&password="+$rootScope.currentUser.password);

            /*
            var userIndex;
            for (userIndex in model.users) {
                if (model.users[userIndex].username === username
                    && model.users[userIndex].password === password) {
                    //return model.users[userIndex];
                    callback(model.users[userIndex])
                }
            }
            callback(null); // don't return the callback, execute it
            */
        }

        function findAllUsers() {
            return $http.get("/api/assignment/user");
        }

        function createUser(user) {

            return $http.post("/api/assignment/user/", user);

            /*
            var _id = (new Date).getTime();
            var user = {
                _id: user.id,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
            model.users.push(user);
            callback(user);
            */
        }

        function deleteUserById(userId) {
            return $http.delete("/api/assignment/user/", userId);
            /*
            var userIndex;
            for (userIndex in model.users) {
                if (model.users[userIndex]._id === userId) {
                    model.pop(model.users[userIndex]);
                    //return model.users[userIndex];
                    callback(model.users[userIndex])
                }
            }
            */
        }

        function updateUser(userId, user) {
            return $http.put("/api/assignment/user/"+userId, user);

            /*
            var userIndex;
            for (userIndex in model.users) {
                if (model.users[userIndex]._id === userId) {
                    model.users[userIndex].firstName = user.firstName;
                    model.users[userIndex].lastName = user.lastName;
                    model.users[userIndex].username = user.username;
                    model.users[userIndex].password = user.password;
                    model.users[userIndex].roles= user.roles;
                    callback(model.users[userIndex])
                }
            }
             */
        }

    }
})();
