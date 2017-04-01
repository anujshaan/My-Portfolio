

  function parallax()
  {
    var back = document.getElementById('back');	<!-- blue box parallax effect -->
    back.style.top=(window.pageYOffset/2.5)+'px';
    var middle = document.getElementById('middle');	<!-- pink box parallax effect -->
    middle.style.top=-(window.pageYOffset/3.0)+'px';
  }
  window.addEventListener("scroll",parallax,false);

  $(window).scroll(function() {	   //Insert here what you want to do after the scroll
  var hT = $('.about-me h5').offset().top,
  hH = $('.about-me h5').outerHeight(),
  wH = $(window).height(),
  wS = $(this).scrollTop();
  if (wS > ( hT+hH-wH))
  {                //scroll animation for model section
    $('.about-me div').each(function()
      {
        setTimeout(function()
          {
            $('.about-me div').addClass('showing'); 		//Adding a class named "showing"
          },450);
      });
    }
});


// Long form
$(window).scroll(function() {
    var y = $(this).scrollTop(); // Pos
    var r = 10; // Rate
    $('.Timeline').css('background-position', 'center ' + parseInt(y/r) + 'px'); // Switch x polarity to reverse direction
});

  $(document).ready(function($)
  {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function()
    {
      if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75)
      {
        $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function()
    {
      $timeline_block.each(function()
      {
        if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') )
        {
          $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        }
      });
    });
  });

  $(function()
  {
    workBelt();
    workLoad();
    footerNavigation();
  });
  function workBelt()
  {
    $('.thumb-unit').click(function()
    {
      $('.work-belt').css('left','-100%');
      $('.work-container').show();
    });

    $('.work-return').click(function()
    {
      $('.work-belt').css('left','0%');
      $('.work-container').hide(800);
    });
  }

  function workLoad()
  {
    $.ajaxSetup({cache: false});
    $('.project1').click(function() {
      var spinner = '<div class="loader"> Loading...</div>';
      var kiwiHTML = '/work/proj-1/proj-1.html';
      $('.project-load').html(spinner).load(kiwiHTML);
    });
    $('.project2').click(function() {
      var spinner = '<div class="loader"> Loading...</div>';
      var maryliHTML = '/work/proj-2/proj-2.html';
      $('.project-load').html(spinner).load(maryliHTML);
    });
    $('.project3').click(function() {
      var spinner = '<div class="loader"> Loading...</div>';
      var augustusHTML = '/work/proj-3/proj-3.html';
      $('.project-load').html(spinner).load(augustusHTML);
    });
    $('.project4').click(function() {
      var spinner = '<div class="loader"> Loading...</div>';
      var aslHTML = '/work/proj-4/proj-4.html';
      $('.project-load').html(spinner).load(aslHTML);
    });
    $('.project5').click(function() {
      var spinner = '<div class="loader"> Loading...</div>';
      var panacheHTML = '/work/proj-5/proj-5.html';
      $('.project-load').html(spinner).load(panacheHTML);
    });
    $('.project6').click(function() {
      var spinner = '<div class="loader"> Loading...</div>';
      var buisnessHTML = '/work/proj-6/proj-6.html';
      $('.project-load').html(spinner).load(buisnessHTML);
    });

  }

  function footerNavigation()  <!-- Navigational script for the page in the footer section-->
  {	$('.footer-hire').click(function()
    {
      $('html, body').animate({
        scrollTop: $('.cover').offset().top
        }, 1000);

    });

    $('.footer-about').click(function()
    {
      $('html, body').animate({
        scrollTop: $('.about-me').offset().top-50
        }, 1000);

    });

    $('.footer-timeline').click(function()
    {
      $('html, body').animate({
        scrollTop: $('.Timeline').offset().top
        }, 1000);
    });

    $('.footer-work').click(function()
    {
          $('html, body').animate({
        scrollTop: $('.work-section').offset().top
        }, 1000);
    });
  }
