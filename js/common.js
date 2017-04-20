$(document).ready(function() {
  
  //Burger menu
  /*$('.burger-wrap a').click(function(){
    $(this).toggleClass('active');
    $('.nav--ul').toggleClass('nav--ul_active')
    return false;
  });
  */
  $('.burger-wrap').click(function(){
    $(this).children().toggleClass('active');
     $('.nav-main').toggleClass('active');
    return false;
  });
  
});





