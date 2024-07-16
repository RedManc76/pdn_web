$(document).ready(function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const from = urlParams.get('from');
    var return_link = document.getElementById('return_link');

    if (from != 'requirements'){
        $(return_link).css('display', 'none')
    }

    $('.full_video_container').click(function() {
        var video = document.getElementById('video_total_war');
        var button = document.getElementById('play_button');
        var cover = document.getElementById('total_war_cover');

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