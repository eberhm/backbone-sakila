define(
    'src/collections/films',
    ['src/models/film'],
    function(filmModel) {
        return Backbone.Collection.extend({
            model: filmModel,
            url: 'api/films/search'
        });
    });