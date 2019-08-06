(function() {
    angular.module("about").component("about", {
        templateUrl: "./app/views/about/about.template.html",
        controller: ["tabTracker", function AboutController(tabTracker) {
            tabTracker.updateTab("about");
        }]
    });
})();
