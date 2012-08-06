define('src/router',
    function() {
        var loadedRoutes = {}, firstLoad = true;

        Router = Backbone.Router.extend({
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

        return new Router;
});