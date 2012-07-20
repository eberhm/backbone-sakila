define('src/views/films/filmsTable',
    [
        'src/app'
    ],
    function(app) {
        return Backbone.View.extend({
            el: '#app_filmsTable',
            template: '#app_filmsTableRow_tpl',
            initialize: function() {
                this.model.on('change', this.render, this);
                this.model.on('remove', this.render, this);
                this.render();
            },
            render: function() {
                $(this.el).find('tbody').html(this.getHtml());
            },
            getHtml: function() {
                var compiledTemplate = _.template($(this.template).text());

                return this.model.reduce(function(memo, elem) {
                        return memo + compiledTemplate(elem.toJSON());
                    }, '');
            }
        });
    });