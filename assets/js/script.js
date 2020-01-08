$(document).ready(function() {
  /*For the sticky navigation*/
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    {
      offset: "60px;"
    }
  );

  /* MOBILE NAVIGATION */
  $(".js--mobile-nav-icon").click(function() {
    var nav = $(".js--main-nav");
    nav.slideToggle(200);
  });
  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /*Animations on scroll*/
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "70%"
    }
  );
  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "70%"
    }
  );
  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );
  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );
});
