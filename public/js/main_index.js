$(function() {
  //Parallax for Main page
  var sideContent = $('.side-content');
  var backImg = $('.side-jumbo');

  /*Welcome animation in jumbo*/
  function showText(){
    $('.side-content').addClass('showT');

  }
  /*function to set X/Y offsets*/
  function setCor(x,y,el){
    el.css({"transform": "translate3d(" + x + "," + y + "px, 0)"});
  }

  /*Parallac Effect*/
  function nav(){
    //read the current scroll pos
    var currS = $(this).scrollTop();

    //read the window width
    var widthWin = $(window).width();

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


    //set the parallax effect to element
    setCor(0, currS * .1, sideContent);
    setCor(0, currS * -.2, backImg);

    }
    /* For desktop format*/
    else {
      setCor(0, currS * -.2, sideContent);
      setCor(0, currS * .2, backImg);
    }
  }

  /*Listen to scroll*/
  $(window).scroll(nav);

  /*Menu toggle*/
  $('.burger-box').click(function(){
    $('.links-nav').toggleClass('togMenu');
    $('.burger-box').toggleClass('rotateM');
  });

  /*Jumbo animation*/
  window.setTimeout(showText, 1000);

});
