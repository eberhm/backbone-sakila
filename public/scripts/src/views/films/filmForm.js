define(
    'src/views/films/filmForm',
    function() {
        return Backbone.View.extend({
            form: false,
            template: '#app_filmsForm_tpl',
            initialize: function() {
                if (!this.model) {
                    $(this.el).html('');
                } else {
                    this.model.bind('change', this.render, this);
                    this.render();
                }
            },
            events: {
                'click .save'   : 'save',
                'click .load'   : 'load'
            },
            editModel: function() {
                console.log(arguments);
            },
            save: function() {
                this.model.save();
            },
            load: function() {
                this.model.fetch();
            },
            render: function() {
                var changedAttributes, anAttribute, self = this;

                if (!this.form) {
                    var html = this.getHtml(this.model.toJSON());
                    this.form = $(html);
                    $(this.el).html(this.form);
                    this.form.on('keyup', 'input', function(e) {
                        var jqInput = $(e.target),
                            key = jqInput.attr('name'),
                            value = jqInput.val();

                        self.model.set(key, value);
                    });
                } else {
                    changedAttributes = this.model.changedAttributes();
                    for (anAttribute in changedAttributes) {
                        this.form.find('[name="' + anAttribute + '"').val(changedAttributes[anAttribute]);
                    }
                }
            },
            getHtml: function(data) {
                return _.template($(this.template).text(), data);
            },
            setModel: function(model) {
                this.model = model;
                this.render();
            }
        });
    });