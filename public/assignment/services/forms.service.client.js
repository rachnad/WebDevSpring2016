/**
 * Created by rachanadeshmukh on 2/28/16.
 */

(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($rootScope) {
        var currentUser;

        var model = {
            forms: []
            ,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return model;

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

        function findAllFormsForUser(userId, callback) {
            for (var userIndex in model.forms) {
                if (model.forms[userIndex]._id === userId) {
                    callback(model.forms[userIndex]);
                }
            }
            return [];
        }

        function createFormForUser(userId, form, callback) {
            var form_id = (new Date).getTime();
            var newForm = {
                _id: form_id,
                userId: userId
            }
            model.forms.push(newForm);
            callback(newForm);
        }

        function deleteFormById(formId, callback) {
            for (var formIndex in model.forms) {
                if (model.forms[formIndex]._id === formId) {
                    model.pop(model.forms[formIndex]);
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
