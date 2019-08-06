(function() {
    angular.module("appRoot", [
        "ngRoute"
    ]).config(["$routeProvider", function config($routeProvider) {
        $routeProvider.when("/", {
            template: "<landing></landing>"
        }).when("/about", {
            template: "<about></about>"
        }).when("/projects", {
            template: "<projects></projects>"
        }).when("/projects/:projectId", {
            template: "<project></project>"
        }).when("/discord", {
            template: "<discord></discord>"
        }).otherwise("/");
    }]);
})();
