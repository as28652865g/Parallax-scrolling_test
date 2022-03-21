$(document).ready(function(){
  var showSkill = false;
  
  $('.scrollTop').click(function() { 
    var target = $(this).attr("href");
    var targetPos = $(target).offset().top;
    $('html ,body').animate({scrollTop: targetPos}, 1000);
    
  });

  // $('.animated').click(function() {
  //   $(this).addClass('fadeIn');
  // })
  
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos, windowHeight);
    // console.log(scrollPos);

    $('.scrollTop').each(function(){
      var target = $(this).attr("href");
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();

      // console.log(target, targetPos, targetHeight);

      if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
        // console.log(target);
        $('.scrollTop').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // progress bar 
    var skillTop = $('#skills').position().top;
    // console.log("skillTop", skillTop);
    if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
      // console.log('Skill');
      showSkill = true;
      $('#skills .progress-bar').each(function() {
        var thisValue = $(this).data('progress');
        // console.log('thisValue', thisValue);
        $(this).css('width', thisValue + '%');
      });

    }

      

    // animate 
    $('.animated').each(function(){
      var thisPos = $(this).offset().top;
      // console.log('animated', thisPos);
      if ((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeIn');
      }
    })

    // bg scroll 
    $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px');
    $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )');
  });

});