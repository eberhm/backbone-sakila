require.config({
    baseUrl: 'scripts'
});

require(
    ['src/routes/films', 'src/collections/films', 'src/app'],
    function(FilmRoutes, FilmsCollection, app) {
        var loadedRoutes = {}, firstLoad = true;
            Router = Backbone.Router.extend({
                initialize: function(options) {
                    this.loadModuleRoutes('films');
                },
                loadModuleRoutes: function(moduleName) {
                    var self = this;
                    if (!loadedRoutes[moduleName]) {

                        require(['src/routes/'+moduleName], function(routes) {
                            var aRoute;
                            for (aRoute in routes) {
                                self.route(moduleName+'/'+routes[aRoute][0], aRoute, routes[aRoute][1]);
                            }
                            if (firstLoad) {
                                self.trigger('ready');
                            }
                        });

                        loadedRoutes[moduleName] = true;
                    }
                }
            });

        app.router = new Router;
        app.films = new FilmsCollection;

        Backbone.history.start();

        globalApp = app;

        console.log(app);
        return app;
    });