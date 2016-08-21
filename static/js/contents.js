var main = function() {
    var imageClicked = false;
    var keyClicked = false;
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

    if(isiPhone > -1){
        //Redirect to iPhone Version of the website.
        $('.page-heading').addClass("ios");
        $('#title').addClass("ios");
    }
    if(isiPad > -1){
        $('.page-heading').addClass("ios");
        $('#title').addClass("ios");
    }
    if(isiPod > -1){
        $('.page-heading').addClass("ios");
        $('#title').addClass("ios");
    }

    $('body').scrollspy({
        target: '.contents-sidebar',
        offset: 16
    });

    if ($('#sidebar').length > 0) {
        $('#sidebar').affix({
            offset: {
                top: $('#sidebar').offset().top - 90,
            }
        });
    }

    $('#solution-byline > h3 > a').click(function(){
        $('body').animate({scrollTop:$('.info-container:visible:first').offset().top}, 400);
    });

    $('.next-section-btn').click(function(){
        $('body').animate({scrollTop:$(this).parent().next().offset().top},400);
        return false;
    });

    $('a[href*=#]').click(function(){
        $('body').animate({scrollTop:$( $.attr(this, 'href') ).offset().top},400);
    });

    if ($('#notebook-key-button').length > 0) {
        $('#notebook-key-button').affix({
            offset: {
                bottom: $('#foot').height() + $('#notebook-key-button').outerHeight(true)
            }
        });
    }

    $('#notebook-key-button').click(function() {
        if (keyClicked) {
            $('#notebook-key').removeClass("active");
            $('#notebook-key-button').removeClass("active");
            keyClicked = false;
        }
        else {
            $('#notebook-key').addClass("active");
            $('#notebook-key-button').addClass("active");
            keyClicked = true;
        };
    })

    $('#notebook-key-button').on('affix-bottom.bs.affix', function () {
        if (keyClicked) {
            $('#notebook-key').removeClass("active");
            $('#notebook-key-button').removeClass("active");
            keyClicked = false;
        }
    })

    $(window).resize(function() {
        $('#sidebar').affix('checkPosition');
        $('#notebook-key-button').affix('checkPosition');
    })

    $('.image').click(function() {
        if (imageClicked) {
            $('.image').removeClass("lightbox");
            imageClicked = false;
        }
        else {
            $(this).addClass("lightbox");
            imageClicked = true;
        }
    });
    $(document).scroll(function() {
        if(imageClicked) {
            $('.image').removeClass("lightbox");
            imageClicked = false;
        }
    })
    $('.definition').popover({
        trigger:'click',
        placement:'auto top'
    })
}

$(document).ready(main);