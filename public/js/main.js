$(document).ready(function() {
    $('#controls').show();
    var textWrapper = $('#text-wrapper'), 
        pause = $('#pause'),
        skip = $('#skip'),
        pausePlayButton = $('#pause-play-button'),
        isPaused = false;

    var profileContents = {
        data: null,
        init: function() {
            $.ajax({
                url: '/content.txt',
                async: true,
                success: function(data) {
                    profileContents.data = data; 
                }
            });
        }
    };

    profileContents.init();
    textWrapper.typed({
        strings: ["Hello :)^500 My name is Tyler^500; thanks for visiting!^500", profileContents.data],
        typeSpeed: 0,
        contentType: 'html'
    });

    pause.on('click', function() {
        if (!isPaused) {
            pausePlayButton.toggleClass('fa-pause');
            pausePlayButton.toggleClass('fa-play');
            pausePlayButton.prop('title', 'Resume animation.');
            textWrapper.data('typed').pauseTyping();
            isPaused = true;
        } else {
            pausePlayButton.toggleClass('fa-play');
            pausePlayButton.toggleClass('fa-pause');
            pausePlayButton.prop('title', 'Pause animation.');
            textWrapper.data('typed').continueTyping();
            isPaused = false;
        }
    });

    skip.on('click', function() {
        textWrapper.data('typed').reset();
        // skip.hide();
        document.getElementById('text-wrapper').innerHTML = profileContents.data;
    });
});
