$(function(){
    Galleria.loadTheme('lib/galleria/themes/folio/galleria.folio.min.js');
    
    Galleria.run('.galleria', {
        flickr: 'set:72157642988346194',
        flickrOptions: {
            sort: 'date-posted-asc',
            description: true
        }
    });

});
