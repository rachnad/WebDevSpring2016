/**
 * Created by rachanadeshmukh on 2/28/16.
 */

(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($rootScope) {
        var currentUser;
        $rootScope.currentForms;

        var model = {
            forms: [
                {"_id": "000", "title": "Contacts", "userId": 123},
                {"_id": "010", "title": "ToDo",     "userId": 123},
                {"_id": "020", "title": "CDs",      "userId": 234},
            ]
            ,
            findAllFormsForUser: findAllFormsForUser,
            createForm: createFormForUser,
            deleteFormById: deleteFormById,
            updateForm: updateFormById,
            setCurrentForms: setCurrentForms
        };
        return model;

        function setCurrentForms(forms) {
            $rootScope.currentForms = forms;
        };


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
                title: form.title,
                userId: userId
            }
            model.forms.push(newForm);
            callback(newForm);
        }

        function deleteFormById(formId, callback) {
            for (var formIndex in model.forms) {
                if (model.forms[formIndex]._id === formId) {
                    model.forms.splice(formIndex, 1);
                    callback(model.users[formIndex])
                }
            }
        }

        function updateFormById(formId, newForm, callback) {
            var formIndex;
            for (formIndex in model.forms) {
                if (model.forms[formIndex]._id === formId) {
                    model.forms[formIndex].title = newForm.title;
                    model.forms[formIndex].userId = newForm.userId;

                    callback(model.forms[formIndex])
                }
            }
        }




    }



})();
