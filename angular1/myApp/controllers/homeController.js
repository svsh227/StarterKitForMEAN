
app.controller('homeCtrl', function ($scope, searchService) {
    $scope.home = 'homeCtrl';
    searchService.get('http://localhost:3000/test')
        .then(function (response) {
            console.log(response);
            console.log("Response: ", response);

        }, function (err) {
            console.log(err);
            console.log("err: ", err);
        })
})
