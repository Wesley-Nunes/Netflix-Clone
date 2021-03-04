$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2.1
        },
        1000:{
            items:4.1
        }
    }
})


function play_video() {
    var iniciar_video = document.querySelector(".iniciar-video")
    iniciar_video.classList.toggle("active")

}

function stop_video() {
    var iniciar_video = document.querySelector(".iniciar-video")
    iniciar_video.classList.toggle("active")

    var iframe = document.querySelector( 'iframe');
    var video = document.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
}
}

function add_lista() {
    alert("O Titulo foi adicionado a sua lista");
}