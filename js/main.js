Galleria.loadTheme('lib/galleria/themes/folio/galleria.folio.min.js');

// Initialize Galleria
Galleria.run('.galleria', {
    // The user & album. This example fetches the album "Demo" from the user "galleriajs"
    picasa: 'useralbum:anti.suck.tw/Taiwan_20140324',
    //picasa: 'useralbum:galleriajs/Demo'
    picasaOptions: {
    max: 200,
    sort: 'date-posted-asc',
    thumbSize: 'medium'
    }
});

