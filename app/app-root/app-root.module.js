(function() {
    angular.module("appRoot", [
        "ngRoute"
    ]).config(["$routeProvider", function config($routeProvider) {
        $routeProvider.when("/", {
            template: "<landing></landing>"
        }).otherwise("/");
    }]);
})();
