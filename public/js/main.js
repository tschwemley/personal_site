$(document).ready(function() {
    // var textWrapper = $('#text-wrapper'), 
    //     pause = $('#pause'),
    //     isPaused = false;
        

    jQuery.get('/content.txt', function(data) {
        $('#text-wrapper').typed({
            strings: ["Hello :)^500 My name is Tyler^500; thanks for visiting!^500", data],
            typeSpeed: 0,
            contentType: 'html'
        });

        $('#pause').on('click', function() {
                $('#pause').text('Play');
                $('#text-wrapper').data('typed').pauseTyping();
        });
    });
});
