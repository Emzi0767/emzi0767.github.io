(function() {
    angular.module("appRoot").component("appRoot", {
        templateUrl: "./app/app-root/app-root.template.html",
        controller: ["$rootScope", "$http", function AppRootController($rootScope, $http) {
            $rootScope.loadedClass = "loaded";

            let self = this;
            $http.get("./assets/crypto.json").then(function(response) {
                self.crypto = response.data;
            });
        }] 
    });
})();
