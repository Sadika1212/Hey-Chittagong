
// (function ($) {
jQuery(document).ready(function ($) {
    'use strict';

    // *************loading effect*************
    $(".loader").delay(300).fadeOut("slow")

    const check = document.getElementById('checkbox')
    check.addEventListener('change', () => {
        document.body.classList.toggle('light')
    })

    //typing animation
    var typed = new Typed (".typing", {
        strings: ["Cox's Bazar","Saint Martin","Kaptai Lake","Bandarban", "Rangamati", "Sajek"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


    // document.getElementById('cbutton').addEventListener('click',
    // function(){
    //     document.querySelector('.bg-modal').style.display= 'block'
    // })
    // document.querySelector('.close').addEventListener('click', 
    // function(){
    //     document.querySelector('.bg-modal').style.display= 'none'
    // })


    $(function () {
        $(".openB").click(function () {
            $(".first").addClass("open");
            setTimeout(function () {
                $(".right").addClass("open");
            }, 250);
            setTimeout(function () {
                $(".back").addClass("open");
            }, 350);
            $(".closeB").delay(400).fadeIn();
        });

        $(".closeB").click(function () {
            setTimeout(function () {
                $(".first").removeClass("open");
            }, 250);
            $(".right").removeClass("open");
            setTimeout(function () {
                $(".back").removeClass("open");
            }, 600);
            $(".closeB").fadeOut();
        });
    });




    // **************posting new blog**************
    // try {
    //     var file_input_container = $('.js-input-file');
    //     if (file_input_container[0]) {
    //         file_input_container.each(function () {

    //             var that = $(this);

    //             var fileInput = that.find(".input-file");
    //             var info = that.find(".input-file__info");

    //             fileInput.on("change", function () {
    //                 var fileName;
    //                 fileName = $(this).val();
    //                 if (fileName.substring(3, 11) == 'fakepath') {
    //                     fileName = fileName.substring(12);
    //                 }
    //                 if (fileName == "") {
    //                     info.text("No file chosen");
    //                 } else {
    //                     info.text(fileName);
    //                 }
    //             })
    //         });
    //     }
    // }
    // catch (e) {
    //     console.log(e);
    // }


    // ***********Search bar spinner*********

    var search = document.getElementById('search')
    var button = document.getElementById('button')
    var input = document.getElementById('input')


    function loading() {
        search.classList.add('loading')
        setTimeout(function () {
            search.classList.remove('loading')
        }, 3500);
    }

    button.addEventListener('click', loading)
    input.addEventListener('keydown', function () {
        if (event.keycode == 13) loading();
    })

})


 // ***********Video Gallery*****************
 var videoPlayer = document.getElementById('videoPlayer');
 var myVideo = document.getElementById('myVideo');
 function stopVideo() {
     videoPlayer.style.display = "none";
     myVideo.pause();
 }
 function playVideo(file) {
     myVideo.src = file;
     videoPlayer.style.display = "block"
 }
 try {
    var file_input_container = $('.js-input-file');
    if (file_input_container[0]) {
        file_input_container.each(function () {

            var that = $(this);

            var fileInput = that.find(".input-file");
            var info = that.find(".input-file__info");

            fileInput.on("change", function () {
                var fileName;
                fileName = $(this).val();
                if (fileName.substring(3, 11) == 'fakepath') {
                    fileName = fileName.substring(12);
                }
                if (fileName == "") {
                    info.text("No file chosen");
                } else {
                    info.text(fileName);
                }
            })
        });
    }
}
catch (e) {
    console.log(e);
}




