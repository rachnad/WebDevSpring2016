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


        function addForm(formname) {
            console.log(formname);

            var form = {
                title: formname.title
            };
            FormService
                .createForm(user._id, form, function(form) {
                    console.log(form.title);
                    FormService
                        .findAllFormsForUser(user._id, function(forms) {
                            $scope.forms = forms;
                        });
                });
        }

        function updateForm(formname) {
            console.log(formname);
            FormService.updateForm(formname._id, formname, function (response) {
                FormService.findAllFormsForUser(formname.userId, function (response) {
                    $scope.forms = response;
                });
            });
            $scope.form={};
        }

        function deleteForm(index) {
            FormService.deleteFormById($scope.forms[index]._id, function (response) {

            });
            $scope.form={};

        }

        function selectForm(index) {
            $scope.selectedIndex = index;

            $scope.form = {
                "_id": $scope.forms[index]._id,
                "userId": $scope.forms[index].userId,
                "title": $scope.forms[index].title
            };
        }

    }
})();/**
 * Created by rachanadeshmukh on 2/23/16.
 */
