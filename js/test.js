;(function($){
    
    $(document).ready(function() {
        console.log( "Woo, we are ready!" );
        $('.js-toggle-sidebar').on('click', function(event) {
            event.preventDefault();
            $('body').toggleClass('sidebar-active');
        });
    });
    
}(jQuery));