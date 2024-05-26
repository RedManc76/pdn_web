$(document).ready(function() {
    $('.full_video_container').click(function() {
        var video = document.getElementById('video_intro');
        var button = document.getElementById('play_button');

        if (video.paused || video.ended) {
            video.play();
            $(button).css('opacity', '0');
        } else {
            video.pause();
            $(button).css('opacity', '1');
        }
    });
});