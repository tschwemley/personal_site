$(document).ready(function() {
    var textWrapper = $('#text-wrapper'), 
        pause = $('#pause'),
        skip = $('#skip'),
        restart = $('#restart'),
        isPaused = false;

    jQuery.get('/content.txt', function(data) {
        textWrapper.typed({
            strings: ["Hello :)^500 My name is Tyler^500; thanks for visiting!^500", data],
            typeSpeed: 0,
            contentType: 'html'
        });
    });

    pause.on('click', function() {
        if (!isPaused) {
            pause.text('Play');
            textWrapper.data('typed').pauseTyping();
            isPaused = true;
        } else {
            pause.text('Pause');
            textWrapper.data('typed').continueTyping();
            isPaused = false;
        }
    });

    skip.on('click', function() {
        textWrapper.data('typed').pauseTyping();

        jQuery.get('/content.txt', function(data) {
            textWrapper.html(''); 
            textWrapper.html(data);
        });
    });
});
