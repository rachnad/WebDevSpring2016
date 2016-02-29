/**
 * Created by rachanadeshmukh on 2/25/16.
 */

(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var currentUser;

        var model = {
            users: [
                {
                    "_id": 123, "firstName": "Alice", "lastName": "Wonderland",
                    "username": "alice", "password": "alice", "roles": ["student"]
                },
                {
                    "_id": 234, "firstName": "Bob", "lastName": "Hope",
                    "username": "bob", "password": "bob", "roles": ["admin"]
                },
                {
                    "_id": 345, "firstName": "Charlie", "lastName": "Brown",
                    "username": "charlie", "password": "charlie", "roles": ["faculty"]
                },
                {
                    "_id": 456, "firstName": "Dan", "lastName": "Craig",
                    "username": "dan", "password": "dan", "roles": ["faculty", "admin"]
                },
                {
                    "_id": 567, "firstName": "Edward", "lastName": "Norton",
                    "username": "ed", "password": "ed", "roles": ["student"]
                }
            ],

            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return model;

        function getCurrentUser() {
            return $rootScope.currentUser;
        }

        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }



        function findUserByCredentials(username, password, callback) {
            var userIndex;
            for (userIndex in model.users) {
                if (model.users[userIndex].username === username
                    && model.users[userIndex].password === password) {
                    //return model.users[userIndex];
                    callback(model.users[userIndex])
                }
            }
            callback(null); // don't return the callback, execute it
        }

        function findAllUsers(callback) {
            callback(model.users);
        }

        function createUser(user, callback) {
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
        }

        function deleteUserById(userId) {
            var userIndex;
            for (userIndex in model.users) {
                if (model.users[userIndex]._id === userId) {
                    model.pop(model.users[userIndex]);
                    //return model.users[userIndex];
                    callback(model.users[userIndex])
                }
            }
        }

        function updateUser(userId, user, callback) {
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
        }
    }
})();
