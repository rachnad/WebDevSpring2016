/**
 * Created by rachanadeshmukh on 3/3/16.
 */
/**
 * Created by rachanadeshmukh on 3/3/16.
 */

(function(){
    angular
        .module("ConcertApp")
        .controller("HomepageController", HomepageController);

    function HomepageController($scope, $location) {

        $scope.submit = submit;
        $scope.$location = $location;

    }
})();