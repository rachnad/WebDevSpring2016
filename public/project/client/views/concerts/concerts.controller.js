/**
 * Created by rachanadeshmukh on 3/3/16.
 */

(function()
{
    angular
        .module("ConcertApp")
        .controller("ConcertsController", ConcertsController);

    function ConcertsController($scope)
    {
        $scope.concerts = [
            {name: "Head Full of Dreams", artist: "Coldplay", date: new Date(2016, 7, 4), venue: "Gillete" },
            {name: "Tour For The Fans", artist: "Lupe Fiasco", date: new Date(2016, 2, 10), venue: "Wilbur" },
            {name: "Innocence Tour", artist: "U2", date: new Date(2016, 5, 20), venue: "TD Garden" }
        ];

        $scope.addCourse = addCourse;
        $scope.removeCourse = removeCourse;
        $scope.selectCourse = selectCourse;
        $scope.updateCourse = updateCourse;

        function updateCourse(concert)
        {
            $scope.concerts[$scope.selectedConcertIndex] = {
                name: concert.name,
                artist: concert.artist,
                date: concert.date,
                venue: concert.venue
            };
        }

        function selectCourse(index)
        {
            $scope.selectedConcertIndex = index;
            console.log($scope.selectedConcertIndex);
            $scope.concert = {
                name: $scope.concerts[index].name,
                artist: $scope.concerts[index].artist,
                date: $scope.concerts[index].date,
                venue: $scope.concerts[index].venue
            };
        }

        function removeCourse(concert)
        {
            var index = $scope.concerts.indexOf(concert);
            $scope.concerts.splice(index, 1);
        }

        function addCourse(concert)
        {
            var newConcert = {
                name : concert.name,
                artist : concert.artist,
                date: concert.date,
                venue : concert.venue

            };
            $scope.concerts.push(newConcert);
        }
    }
})();


