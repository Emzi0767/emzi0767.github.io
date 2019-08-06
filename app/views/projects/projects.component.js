(function() {
    angular.module("projects").component("projects", {
        templateUrl: "./app/views/projects/projects.template.html",
        controller: ["$http", "tabTracker", function ProjectsController($http, tabTracker) {
            tabTracker.updateTab("projects");

            let self = this;
            $http.get("./assets/projects.json").then(function(response) {
                self.heroProjects = response.data.heroProjects;
                self.projects = response.data.projects;
            });
        }]
    });
})();