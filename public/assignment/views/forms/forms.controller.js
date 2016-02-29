(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($location, $rootScope, $scope, FormService) {
        $scope.$location = $location;
        $scope.currentForms = FormService.findAllFormsForUser()

        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        var user = $rootScope.currentUser;
        $scope.forms = FormService.forms;


        // Execute init to fetch forms if user valid
        if (user) {
            init();
        } else {
            console.log('Login to use.');
        }

        /*
         * This function loads up the forms to the view
         */
        function init() {
            // Fetch all the current forms available from the user
            FormService
                .findAllFormsForUser(user._id, function(forms) {
                    $scope.forms = forms;

                });
        }

        console.log($rootScope.forms);

        function addForm(formname) {

            var form = {
                title: formname
            };
            console.log(form);

            FormService
                .createForm(user._id, form, function(form) {
                    FormService
                        .findAllFormsForUser(user._id, function(forms) {
                            $scope.forms = forms;
                        });
                });
        }

        function updateForm(form) {

        }

        function deleteForm(form) {

        }

        function selectForm(form) {

        }

    }
})();/**
 * Created by rachanadeshmukh on 2/23/16.
 */
