$(document).ready(function() {
    var textWrapper = $('#text-wrapper'), 
        pause = $('#pause'),
        skip = $('#skip'),
        restart = $('#restart'),
        pausePlayButton = $('#pause-play-button'),
        isPaused = false,
        helloStr = "Hello :)^500 My name is Tyler^500; thanks for visiting!^500";

    var profileContents = {
        data: null,
        init: function() {
            $.ajax({
                url: '/content.txt',
                async: false,
                success: function(data) {
                    profileContents.data = data; 
                }
            });
        }
    };

    profileContents.init();
    startTyping();

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
        skip.hide();
        pausePlayButton.hide();
        document.getElementById('text-wrapper').innerHTML = profileContents.data;
    });

    restart.on('click', function() {
        location.reload(); 
    });

    var stringTyped = 0;
    function startTyping() {
        textWrapper.typed({
            strings: [helloStr, profileContents.data],
            typeSpeed: 0,
            backspaceSpeed: 0,
            contentType: 'html',
            onStringTyped: function() {
              if(stringTyped == 1) {
                skip.hide(); 
                pausePlayButton.hide();
              } else {
                stringTyped++;
              }
            }
        });
    }
});
