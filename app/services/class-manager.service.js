(function() {
    angular.module("app").factory("classManager", ["$rootScope", function($rootScope) {
        var classManager = {
            currentClass: "",
            handlers: []
        };

        classManager.addUpdateHandler = function(handler) {
            this.handlers.push(handler);
        }.bind(classManager);

        classManager.updateClass = function(className) {
            this.currentClass = className;
            for (let handler of this.handlers)
                handler(className);
        }.bind(classManager);

        classManager.getCurrentClass = function() {
            return this.currentClass;
        }.bind(classManager);

        $rootScope.$on("$routeChangeStart", function($event, next, current) {
            classManager.updateClass("");
        });

        return classManager;
    }]);
})();