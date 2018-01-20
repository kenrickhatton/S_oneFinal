angular.module('UserService', [])
    .factory('UserAPIService', function($http) {
       
         UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        }
        return UserAPIService;
    });

angular.module('RegisterService', [])
    .factory('RegesterAPIService', function($http) {
        RegesterAPIService = {
            getTodos: function(url, data, token) {
                 header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username": data}}, header);
            },
            createTodo: function(url, data, token) {
                 header = "Authorization: JWT " + token;
                return $http.post(url, data, header);
            },
            editTodo: function(url, data, token) {
                 header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteTodo: function(url, token) {
                 header = "Authorization: JWT " + token;
                return $http.delete(url, token, header);
            }
        }
        return RegesterAPIService;
    });





    