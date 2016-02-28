/**
 * Created by rachanadeshmukh on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", headerController);

    function headerController($location, $scope) {
        $scope.$location = $location;

    }
})();