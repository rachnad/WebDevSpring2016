/**
 * Created by rachanadeshmukh on 2/28/16.
 */

(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($rootScope) {
        var currentUser;
        $rootScope.currentForms;

        var api = {
            findAllFormsForUser: findAllFormsForUser,
            createFormForUser: createFormForUser,
            deleteFormById: deleteFormById,
            updateForm: updateFormById,
            setCurrentForms: setCurrentForms
        };
        return api;

        function setCurrentForms(forms) {
            $rootScope.currentForms = forms;
        };


        function findAllFormsForUser(userId) {
            return $http.get("/api/assignment/user/" + userId + "/form");

            /*
            for (var userIndex in model.forms) {
                if (model.forms[userIndex]._id === userId) {
                    callback(model.forms[userIndex]);
                }
            }
            return [];
            */
        }

        function createFormForUser(userId, form) {
            return $http.post("/api/assignment/user/" + userId + "/form", form);
            /*
            var form_id = (new Date).getTime();
            var newForm = {
                _id: form_id,
                title: form.title,
                userId: userId
            }
            model.forms.push(newForm);
            callback(newForm);
            */
        }

        function deleteFormById(formId) {
            return $http.delete("/api/assignment/form/" + formId);
            /*
            for (var formIndex in model.forms) {
                if (model.forms[formIndex]._id === formId) {
                    model.forms.splice(formIndex, 1);
                    callback(model.users[formIndex])
                }
            }
            */
        }

        function updateFormById(formId, newForm) {

            return $http.put("/api/assignment/form/" + formId, newForm);

            /*
            var formIndex;
            for (formIndex in model.forms) {
                if (model.forms[formIndex]._id === formId) {
                    model.forms[formIndex].title = newForm.title;
                    model.forms[formIndex].userId = newForm.userId;

                    callback(model.forms[formIndex])
                }
            }
            */
        }
    }
})();
