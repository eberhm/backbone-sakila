require.config({
    baseUrl: 'scripts'
});

require(
    ['src/router', 'src/collections/films', 'src/app'],
    function(router, FilmsCollection, app) {
        app.films = new FilmsCollection;

        app.router = router;
        app.router.loadModuleRoutes('films');
        app.router.bind('ready', function() {
            Backbone.history.start();
        });

        globalApp = app;
    });