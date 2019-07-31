(function() {
    let script = document.currentScript;
    if (!script)
    {
        console.error("Could not load the application.");
        return;
    }

    let appendHead = function(el) {
        document.head.append(el);
    };
    let appendBody = function(el) {
        document.body.append(el);
    };

    let loadScript = function(src) {
        let elScript = document.createElement("script");
        elScript.src = src;
        elScript.onload = continueLoading;

        appendBody(elScript);
    };
    let loadStyle = function(src) {
        let elLink = document.createElement("link");
        elLink.rel = "stylesheet";
        elLink.href = src;
        elLink.onload = continueLoading;

        appendHead(elLink);
    }

    let iterator = {
        stylesheet: 0,
        script: 0,

        stylesheets: [],
        scripts: []
    };
    let continueLoading = function() {
        if (this.stylesheet++ < this.stylesheets.length) {
            // load a stylesheet
            let lStylesheet = this.stylesheets[this.stylesheet - 1];
            console.log("Loading stylesheet: " + lStylesheet);

            loadStyle(lStylesheet);
        } else if (this.script++ < this.scripts.length) {
            // load a script
            let lScript = this.scripts[this.script - 1];
            console.log("Loading script: " + lScript);

            loadScript(lScript);
        }
    };
    continueLoading = continueLoading.bind(iterator);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(xhr.responseText);

            let mScripts = data.js || [];
            if (data.onPreLoad)
                mScripts.unshift(data.onPreLoad);
            if (data.onPostLoad)
                mScripts.push(data.onPostLoad);

            let mStyles = data.css || [];

            iterator.stylesheets = mStyles;
            iterator.scripts = mScripts;

            continueLoading();
        } else if (this.readyState === 4) {
            console.log("Could not load manifest: " + xhr.statusText);
        }
    };

    let manifest = script.getAttribute("data-manifest-src");
    console.log("Fetching manifest: " + manifest);
    xhr.open("GET", manifest, true);
    xhr.send();
})();
