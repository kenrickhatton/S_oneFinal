angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Angular Todo!";
    })
    .controller('FirstController', function($scope) {
        $scope.info = "This is only a guide that we used first.";
    })
    .controller('SupplierController', function($scope) {
        $scope.topLine = "This is a List Of Supplys for Raw Feeding.";
    })
    .controller('GalleryController', function($scope) {
        $scope.gtopLine = "Photos of the Site.";
    })
    

    .controller('RegisterController', function($scope, $location, UserAPIService, store) {
        $scope.registrationUser = {};
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(url + "accounts/api-token-auth/", $scope.data).then(function(results){
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
                $location.path("/FirstStep");
            }).catch(function(err) {
                console.log(err.data);
            });
        }

       $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(url + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    if ($scope.data.username == $scope.registrationUser.username 
                        && $scope.data.password == $scope.registrationUser.password) {
                        
                        $scope.login();
                        $location.path("/FirstStep");
                    alert("You have successfully registered to Angular Todo");
                    }
                }).catch(function(err) {
                    alert("Oops! Something went wrong!");
                    console.log(err);
                });
            }
        }
    })
    .controller('LoginController', function($scope, $location, UserAPIService, store) {
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.submitForm = function() {
            if ($scope.loginForm.$valid) {
                $scope.loginUser.username = $scope.user.username;
                $scope.loginUser.password = $scope.user.password;

                UserAPIService.callAPI(url + "accounts/api-token-auth", $scope.loginUser).then(function(results) {
                    $scope.token = results.data.token;
                    store.set('username', $scope.loginUser.username);
                    store.set('authToken', $scope.token);
                    store.set('password', $scope.loginUser.password);
                    $location.path("/FirstStep");
                }).catch(function(err) {
                    console.log(err);
                });
            }
        };
    })

    .controller('ctrlController', function($scope, $location, UserAPIService, store){
    var ImgAgeP = "Puppy.png";
    var ImgAgeA = "teenDog.jpg";
    /*.controller('ctrlController', function($scope) {*/
    $scope.ImgAge = ImgAgeP;
    $scope.calc = "Hello And welcome!.";
        $("button").mouseenter(function(){
            $(this).fadeTo(1000,0.5);        
        });
    //and a fadaTo effent on current button on mouseout
    $("button").mouseout(function(){
        $(this).fadeTo(1000,1);     
    });
        //creates slide toggle on paragraph on button click
        $("button").click(function(){
            $("#slider1").roundSlider({
                value:0
                });
        });

    $("#slider1").roundSlider({
    sliderType: "min-range",
    mouseScrollAction: true,
    radius: 100,
    min: 0,
    max:  13,
    steps:1,
    value: 4,
    tooltipFormat:  function (a) {
    var val = a.value, ImgAge;
    if (val < 13) ImgAge = "Puppy";
    else ImgAge = "Adult";

    return val + " Months " + "<div>" + ImgAge + "<div>";
},
});
    $("#slider2").roundSlider({
    sliderType: "min-range",
    mouseScrollAction: true,
    radius: 100,
    value: 10,
    tooltipFormat:function changeTooltip(w) {
    var val = w.value, weight;
    if (val < 20) weight = "Slow";
    else if (val < 40) weight = "Normal";
    else if (val < 70) weight = "Speed";
    else weight = "Very Speed";

    return val + " ( kg )" + "<div>" + weight + "<div>";
}





});
    $("#slider3").roundSlider({
        sliderType: "min-range",
    mouseScrollAction: true,
    radius: 100,
    value: 10
    });
        $("#slider4")
          $scope.value = 75;
          $scope.min = 10;
          $scope.max = 90;

        })












    .controller('LogoutController', function(store) {
        store.remove('username');
        store.remove('authToken');
    })
    .controller('TodoController', function($scope, $location, TodoAPIService, store) {
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');

        $scope.todo = {};

        $scope.editTodo = function(id) {
            $location.path("/todo/edit/" + id);
        };

        $scope.deleteTodo = function(id) {
            TodoAPIService.deleteTodo(url + "todo/" + id, $scope.username, $scope.authToken).then(function(results) {
                console.log(results);
            }).catch(function(err) {
                console.log(err);
            });
        };

        if (!store.get('authToken')) {
            $location.path("/");
        }

        TodoAPIService.getTodos(url + "todo/", $scope.username, $scope.authToken).then(function(results) {
            $scope.todos = results.data;
            console.log($scope.todos);
        }).catch(function(err) {
            console.log(err);
        });

        $scope.submitForm = function() {
            if ($scope.todoForm.$valid) {
                $scope.todo.title = $scope.todo.title;
                $scope.todo.description = $scope.todo.description;
                $scope.todo.status = $scope.todo.status;
                $scope.todo.username = $scope.username;

                console.log($scope.todo.username)

                TodoAPIService.createTodo(url + "todo/", $scope.todo, $scope.authToken).then(function(results) {
                    console.log(results)
                }).catch(function(err) {
                    console.log(err)
                })
            }
        }
    })
    .controller('EditTodoController', function($scope, $location, $routeParams, TodoAPIService, store) {
        var id = $routeParams.id;
        var url = "https://morning-castle-91468.herokuapp.com/";

        $scope.submitForm = function() {
            if ($scope.todoForm.$valid) {
                $scope.todo.title = $scope.todo.title;
                $scope.todo.description = $scope.todo.description;
                $scope.todo.status = $scope.todo.status;
                $scope.todo.username = $scope.username;

                console.log($scope.todo.username)

                console.log(url + "todo/" + id);

                TodoAPIService.editTodo(url + "todo/" + id, $scope.todo, $scope.authToken).then(function(results) {
                    console.log(results)
                }).catch(function(err) {
                    console.log(err)
                })
            }
        }
    });