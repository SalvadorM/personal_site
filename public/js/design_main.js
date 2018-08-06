$(function() {

  /*Parallac Effect*/
  function nav(){
    //read the current scroll pos
    var currS = $(this).scrollTop();

    //read the window width
    var widthWin = $(window).width();
    //large Screen animations
    //iphone image #1
    if(currS > 500){
      $('#iphone-img.row').css('opacity','1');
    }
    //animation for the hand_iphone
    if(!(widthWin < 752)){
      if(currS > 2900){
        $('#hand-img').css({
          'transform' : 'translate3d(0,0,0) rotate(-10deg)'
        });
      }
    }

    /*
    For Mobile screen sized
    */
    if(widthWin < 752){
      //For the menu icon
      if(currS < 15){
        $('.burger-box').removeClass('scrollNav');
        $('.icon').removeClass('icontog');
      }
      else{
        $('.icon').addClass('icontog');
        $('.burger-box').addClass('scrollNav');
      }
      //hand amimaiton
      if(currS > 2800){
        $('#hand-img').css({
          'transform' : 'translate3d(0,0,0) rotate(-10deg)'
        });
      }

    }

  }

  /*Listen to scroll*/
  $(window).scroll(nav);

  /*Menu toggle*/
  $('.burger-box').click(function(){
    $('.links-nav').toggleClass('togMenu');
    $('.burger-box').toggleClass('rotateM');
  });

});
