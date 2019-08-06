(function() {
    angular.module("landing").component("landing", {
        templateUrl: "./app/views/landing/landing.template.html",
        controller: ["tabTracker", function LandingController(tabTracker) {
            tabTracker.updateTab("landing");
        }]
    });
})();