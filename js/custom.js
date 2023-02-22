(function($){

AOS.init({
    offset: 180,
    duration: 1000
  });

  
  $("#tr-form").validate({
  submitHandler: function(form) {
    // some other code
    // maybe disabling submit button
    // then:
    console.log(form)
    // $(form).submit();
  }
 });

  $("#tr-contact-form").validate({
  submitHandler: function(form) {
    // some other code
    // maybe disabling submit button
    // then:
    console.log(form)
    // $(form).submit();
  }
 });
   function onScrollInit(items, trigger)
    {
        items.each(function()
        {
            var osElement = $(this), osAnimationClass = osElement.attr('data-os-animation'), osAnimationDelay = osElement.attr
            ('data-os-animation-delay');
            osElement.css(
            {
                '-webkit-animation-delay' : osAnimationDelay,
                '-moz-animation-delay' : osAnimationDelay,
                'animation-delay' : osAnimationDelay
            });
            var osTrigger = (trigger) ? trigger : osElement;
            osTrigger.waypoint(function()
            {
                osElement.addClass('animate__animated').addClass(osAnimationClass);
            },
            {
                triggerOnce : true,
                offset : '90%'
            });
        });
    }

    onScrollInit($('.tr-animate'));


  $('.tr_services_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    responsive: [ 
    {
      breakpoint: 992,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    },]
  });

  $('.tr_team_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    autoplay: true,
    responsive: [ 
    {
      breakpoint: 992,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
        dots: true,
        arrows: false
      }
    },
     {
      breakpoint: 766,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    },]	
  });

  $('.tr_key_counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('.tr_members_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: true,
    arrows: true,
     responsive: [ 
     {
      breakpoint: 992,
      settings: {
        slidesToScroll: 2,
       slidesToShow: 2,
        dots: true,
        // arrows: false
      }
    },
     {
      breakpoint: 766,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
        arrows: false
      }
    },] 
  });

})(jQuery)