$(function() {

  /*Parallac Effect*/
  function nav(){
    //read the current scroll pos
    var currS = $(this).scrollTop();

    //read the window width
    var widthWin = $(window).width();
    //large Screen animations
    //iphone image #1
    console.log(currS);
    if(currS > 500){
      $('#iphone-img.row').css('opacity','1');
    }
    //animation for the hand_iphone
    if(!(widthWin < 752)){
      //Triggers animation in brand to show imacs
      if(currS > 2100){
        $('.showItem').each(function (e){
          setTimeout(function(){
            $('.showItem').eq(e).css({
              'opacity':'1'
            });
          }, 100 *(e+1));
        });
      }
      //triggers animation on soup
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
      //triggers animation for imacs in Brand
      if(currS > 2000){
        $('.showItem').each(function (e){
          setTimeout(function(){
            $('.showItem').eq(e).css({
              'opacity':'1'
            });
          }, 100 *(e+1));
        });
      }
      //hand amimaiton for soup
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
