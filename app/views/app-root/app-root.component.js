(function() {
    angular.module("appRoot").component("appRoot", {
        templateUrl: "./app/views/app-root/app-root.template.html",
        controller: ["$rootScope", "$http", "tabTracker", "classManager", function AppRootController($rootScope, $http, tabTracker, classManager) {
            $rootScope.loadedClass = "loaded";

            let self = this;
            $http.get("./assets/crypto.json").then(function(response) {
                self.crypto = response.data;
            });

            tabTracker.addUpdateHandler(function(tabName) {
                self.tabId = tabName;
            });

            classManager.addUpdateHandler(function(className) {
                console.log(className);
                self.rootClassName = className;
            });
        }] 
    });
})();
