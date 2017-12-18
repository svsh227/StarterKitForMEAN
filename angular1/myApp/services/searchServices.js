app.service('searchService', function ($http) {
    this.get = function (url) {
        console.log("Service Called");
        return $http({
            method: 'GET',
            url: url
        })
        // .then(function (response) {
        //     return response;
        // }, function (response) {
        //     return response;
        // })
    }
})