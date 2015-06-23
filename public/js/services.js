angular.module('services', [])
    .factory('News', ['$http', function ($http) {
        return {
            get: function (callback) {
                $http.get('http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json')
                    .success(function (data) {
                        callback(data.value.items);
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    })
            }
        };
    }]);
