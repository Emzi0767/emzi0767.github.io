(function() {
    angular.module("project").component("project", {
        templateUrl: "./app/views/project/project.template.html",
        controller: ["$routeParams", "$http", "tabTracker", "classManager", function ProjectController($routeParams, $http, tabTracker, classManager) {
            tabTracker.updateTab("projects");
            classManager.updateClass("project-view");

            let self = this;
            $http.get("./assets/projects.json").then(function(response) {
                for (let project of response.data.heroProjects) {
                    if (project.id === $routeParams.projectId) {
                        self.project = project;
                        break;
                    }
                }
            });
        }]
    });
})();