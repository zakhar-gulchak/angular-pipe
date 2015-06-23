angular.module('pipeline', ['services'])
    .controller('mainController', ['$scope', 'News', function ($scope, News) {
        News.get(function (data) {
            $scope.articles = data;
        });
    }]);
