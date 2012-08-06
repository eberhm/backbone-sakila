define(
    'src/routes/films',
    [
        'src/controllers/films/indexController'
    ],
    function(indexController) {
        return {
            'editFilm'  : ['edit/:id', indexController.editFilm],
            'loadFilms' : ['search/?:queryString', indexController.loadFilms],
            'addFilm'   : ['add', indexController.addFilm],
            'saveFilm'  : ['save', indexController.saveFilm],
            'removeFilm': ['remove/:id', indexController.removeFilm]
        };
    });