(function() {
    angular.module("discord").component("discord", {
        templateUrl: "./app/views/discord/discord.template.html",
        controller: ["tabTracker", function DiscordController(tabTracker) {
            tabTracker.updateTab("discord");
        }]
    });
})();