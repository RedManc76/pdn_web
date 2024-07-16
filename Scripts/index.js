$(document).ready(function() {
    $('#intro_desktop').click(function() {
        var video = document.getElementById('video_desktop');
        var button = document.getElementById('play_button_desktop');
        var cover = document.getElementById('intro_cover_desktop');

        if (video.paused || video.ended) {
            video.play();
            $(button).css('opacity', '0');
            $(cover).css('opacity', '0');
        } else {
            video.pause();
            $(button).css('opacity', '1');
        }
    });
    $('#intro_mobile').click(function() {
        var video = document.getElementById('video_mobile');
        var button = document.getElementById('play_button_mobile');
        var cover = document.getElementById('intro_cover_mobile');
    
        if (video.paused || video.ended) {
            video.play();
            $(button).css('opacity', '0');
            $(cover).css('opacity', '0');
        } else {
            video.pause();
            $(button).css('opacity', '1');
        }
    });
});