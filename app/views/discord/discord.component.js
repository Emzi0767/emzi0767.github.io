(function() {
    angular.module("discord").component("discord", {
        templateUrl: "./app/views/discord/discord.template.html",
        controller: ["$http", "tabTracker", function DiscordController($http, tabTracker) {
            tabTracker.updateTab("discord");

            let self = this;
            $http.get("./assets/discord.json").then(function(response) {
                self.guild = response.data;
            });

            $http.get("./assets/discord-bots.json").then(function(response) {
                self.bots = response.data;
            });
        }]
    });
})();