define('src/controllers/films/indexController', [
    'src/views/films/filmForm',
    'src/views/films/filmsTable',
    'src/app'
],
    function(filmFormView, filmsTable, app) {
        var initFilmsTable, filmsTableInstance, initFilmForm;

        initFilmsTable = function() {
            if (!filmsTableInstance) {
                filmsTableInstance = new filmsTable({
                    model: app.films
                });
            } else {
                filmsTableInstance.render();
            }
        };

        initFilmForm = function(film) {
            filmView = new filmFormView({
                model: film,
                el: '#app_filmForm'
            });
        };


        var self = {
            editFilm: function(id) {
                //function to read films in router
                var film = app.films.get(id),
                    filmView;

                if (!film) {
                    return self.addFilm(id)
                }

                initFilmForm(film);
            },
            loadFilms: function(queryString) {
                app.films.fetch({
                    add:true,
                    success: initFilmsTable
                });
            },
            addFilm: function(id) {
                var options, newFilm;

                initFilmsTable();
                if (id) {
                    options = {
                        film_id: id
                    };
                }

                newFilm = app.films.create(options);
                initFilmForm(newFilm);
            },
            saveFilm: function(id) {
                var film = app.films.get(id);
                if (film) {
                    film.save({
                        success: function() {
                            alert('Saved');
                        }
                    });
                } else {
                    alert('ERROR: Could not save');
                }
            },
            removeFilm: function(id) {
                app.films.remove(id);
                initFilmForm();
            }
        };
        return self;
    });