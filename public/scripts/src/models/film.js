define('src/models/film', function() {
    return Backbone.Model.extend({
        urlRoot: 'api/films',
        idAttribute: 'film_id',
        defaults: {
            'film_id' : null,
            'title' : null,
            'description' : null,
            'release_year' : null,
            'language_id' : null,
            'original_language_id' : null,
            'rental_duration' : null,
            'rental_rate' : null,
            'length' : null,
            'replacement_cost' : null,
            'rating' : 'G',
            'special_features' : null
        }
    });
});