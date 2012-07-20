define('src/views/films/filmsTableRow',
    function() {
        return Backbone.View.extend({
            template: '#app_filmsTableRow_tpl',
            events : {
                'click': 'loadForm'
            },
            initialize: function() {
                this.model.on('change', this.render, this);
                this.render();
            },
            loadForm: function(e) {
                console.log(e);
                //this.getRouter().navigate();
            },
            render: function() {
                $(this.el).html(this.getHtml());
            },
            getHtml: function() {
                return _.template(
                    $(this.template).text(),
                    this.model.toJSON()
                );
            }
        });
    });