angular.module('pipeline', [])
    .controller('mainController', ['$scope', '$http',

function mainController($scope, $http) {
    // when landing on the page, get all todos and show them
    $http.get('http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json')
        .success(function(data) {
            $scope.count = data.count;
            $scope.articles = data.value.items;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}]);
