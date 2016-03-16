/**
 * Created by rachanadeshmukh on 2/28/16.
 */

(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService($rootScope) {
        var currentUser;
        $rootScope.currentForms;

        var api = {
            getFieldsForForm: getFieldForForms,
            getFieldForForm: getFieldForForm,
            findAllFormsForUser: findAllFormsForUser,
            createFieldForForm: createFieldForForm,
            deleteFieldFromForm: deleteFieldFromForm,
            updateField: updateField,
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

        function createFieldForForm(formId, field) {
            return $http.post("/api/assignment/form/"+formId+"/field", field);
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

        function getFieldsForForm(formId) {
            return $http.get("/api/assignment/form/"+formId+"/field");
        }

        function getFieldForForm(formId, fieldId) {
            return $http.get("/api/assignment/form/"+formId+"/field/"+fieldId);
        }


        function deleteFieldFromForm(formId, fieldId) {
            return $http.delete("/api/assignment/form/"+formId+"/field/"+fieldId);
            /*
             for (var formIndex in model.forms) {
             if (model.forms[formIndex]._id === formId) {
             model.forms.splice(formIndex, 1);
             callback(model.users[formIndex])
             }
             }
             */
        }

        function updateField(formId, fieldId, field) {

            return $http.put("/api/assignment/form/"+formId+"/field/"+fieldId, field);

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
