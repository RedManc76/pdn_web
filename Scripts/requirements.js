$('#requirements_container').click(function() {
    var video = document.getElementById('requirements_video');
    var button = document.getElementById('requirements_play_button');
    var cover = document.getElementById('requirements_cover');
    var title = document.getElementById('requirements_cover_title');

    if (video.paused || video.ended) {
        stop_all()
        video.play();
        $(button).css('opacity', '0');
        $(cover).css('opacity', '0');
        $(title).css('opacity', '0');
    } else {
        stop_all()
        $(button).css('opacity', '1');
    }
});

function stop_all(){
    document.getElementById('requirements_video').pause();
    $(document.getElementById('requirements_play_button')).css('opacity', '1');
}