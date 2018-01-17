
$(document).ready(function(){

  // Text effect on first slide
  // Wrap every letter in a span
  $('.ml12').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  // Slideshow initialization
  Reveal.initialize({
    controls: false,
    autoSlide: 5000,
    autoPlayMedia: true
  });



 var animateFirstPageText = function(){
    anime.timeline({loop: false})
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    });  
  }

  // Loading the music
  var sound = new Howl({
    src: ['/assets/music/background_music.mp3'],
    loop: true, 
    onload: function(){
      // Animate the text once all is loaded
      animateFirstPageText();
      $('.fullscreenloader').remove();
      $('#first').show();
    }
  });

  sound.play();

  // Fade out the music during video slide (on slide 9)
  Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.indexh == 9) {
      sound.fade(1.0, 0.2, 3);
    } 
    if (event.indexh == 10 || event.indexh == 8) {
      sound.fade(0.2, 1.0, 3);
    }

  } );


  //#########################################
  //##
  //## Functional Javascript
  //##
  //#########################################


  $('.speaker').click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('mute')) {
      sound.play();
      $(this).removeClass('mute');
    } else {
      sound.pause();
      $(this).addClass('mute');
    }
  });


});



