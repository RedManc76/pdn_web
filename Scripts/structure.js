$('#structure_container').click(function() {
    var video = document.getElementById('structure_video');
    var button = document.getElementById('structure_play_button');
    var cover = document.getElementById('structure_cover');
    var title = document.getElementById('structure_cover_title');

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
    document.getElementById('structure_video').pause();
    $(document.getElementById('structure_play_button')).css('opacity', '1');
}