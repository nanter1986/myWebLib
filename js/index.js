$(document).ready(function() {

  $(".nav li").on("click", function() {
    console.log("clicked on item");
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });

  $('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });

  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    $(".nav li").removeClass("active");
    return false;
  });

  $("#messageCall").fadeIn(2000, function() {
    $("#messageCall2").fadeIn(2000, function() {
      $("#buttonCall").fadeIn(2000);
    });

  });

  $("#buttonCall").click(function() {
    document.getElementById('topothesia').scrollIntoView();
  });



  var waypoint = new Waypoint({
    element: document.getElementById('spacesOverlay'),
    handler: function() {
      console.log("into view");
      $("#spacesOverlay").animate({opacity:1},500);
    },
    offset:'50%'
  });

  var waypoint = new Waypoint({
    element: document.getElementById('poioiOverlay'),
    handler: function() {
      console.log("into view");
      $("#poioiOverlay").animate({opacity:1},500);
    },
    offset:'50%'
  });






});
