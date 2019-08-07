(function() {
    angular.module("discordBot").component("discordBot", {
        templateUrl: "./app/views/discord-bot/discord-bot.template.html",
        controller: ["$routeParams", "$http", "tabTracker", "classManager", function DiscordController($routeParams, $http, tabTracker, classManager) {
            tabTracker.updateTab("discord");
            classManager.updateClass("discord-bot-view");

            let self = this;
            $http.get("./assets/discord-bots.json").then(function(response) {
                for (let bot of response.data) {
                    if (bot.id === $routeParams.botId) {
                        self.bot = bot;
                        break;
                    }
                }
            });
        }]
    });
})();