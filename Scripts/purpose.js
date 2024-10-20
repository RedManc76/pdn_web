$('#necessity_container').click(function() {
    var video = document.getElementById('necessity_video');
    var button = document.getElementById('necessity_play_button');
    var cover = document.getElementById('necessity_cover');
    var title = document.getElementById('necessity_cover_title');

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

$('#motivation_container').click(function() {
    var video = document.getElementById('motivation_video');
    var button = document.getElementById('motivation_play_button');
    var cover = document.getElementById('motivation_cover');
    var title = document.getElementById('motivation_cover_title');
    
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

$('#concept_container').click(function() {
    var video = document.getElementById('concept_video');
    var button = document.getElementById('concept_play_button');
    var cover = document.getElementById('concept_cover');
    var title = document.getElementById('concept_cover_title');
    
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

$('#distinctive_1_container').click(function() {
    var video = document.getElementById('distinctive_1_video');
    var button = document.getElementById('distinctive_1_play_button');
    var cover = document.getElementById('distinctive_1_cover');
    var title = document.getElementById('distinctive_1_cover_title');
    
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

$('#distinctive_2_container').click(function() {
    var video = document.getElementById('distinctive_2_video');
    var button = document.getElementById('distinctive_2_play_button');
    var cover = document.getElementById('distinctive_2_cover');
    var title = document.getElementById('distinctive_2_cover_title');
    
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

$('#distinctive_3_container').click(function() {
    var video = document.getElementById('distinctive_3_video');
    var button = document.getElementById('distinctive_3_play_button');
    var cover = document.getElementById('distinctive_3_cover');
    var title = document.getElementById('distinctive_3_cover_title');
    
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

$('#encouragement_container').click(function() {
    var video = document.getElementById('encouragement_video');
    var button = document.getElementById('encouragement_play_button');
    var cover = document.getElementById('encouragement_cover');
    var title = document.getElementById('encouragement_cover_title');
    
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
    document.getElementById('motivation_video').pause();
    document.getElementById('necessity_video').pause();
    document.getElementById('concept_video').pause();
    document.getElementById('distinctive_1_video').pause();
    document.getElementById('distinctive_2_video').pause();
    document.getElementById('distinctive_3_video').pause();
    document.getElementById('encouragement_video').pause();
    $(document.getElementById('motivation_play_button')).css('opacity', '1');
    $(document.getElementById('necessity_play_button')).css('opacity', '1');
    $(document.getElementById('concept_play_button')).css('opacity', '1');
    $(document.getElementById('distinctive_1_play_button')).css('opacity', '1');
    $(document.getElementById('distinctive_2_play_button')).css('opacity', '1');
    $(document.getElementById('distinctive_3_play_button')).css('opacity', '1');
    $(document.getElementById('encouragement_play_button')).css('opacity', '1');
}