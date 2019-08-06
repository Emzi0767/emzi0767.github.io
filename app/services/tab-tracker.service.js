(function() {
    angular.module("app").factory("tabTracker", ["$rootScope", function($rootScope) {
        var tabTracker = {
            currentTab: "",
            handlers: []
        };

        tabTracker.addUpdateHandler = function(handler) {
            this.handlers.push(handler);
        }.bind(tabTracker);

        tabTracker.updateTab = function(tabName) {
            this.currentTab = tabName;
            for (let handler of this.handlers)
                handler(tabName);
        }.bind(tabTracker);

        tabTracker.getCurrentTab = function() {
            return this.currentTab;
        }.bind(tabTracker);

        return tabTracker;
    }]);
})();