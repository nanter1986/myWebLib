$(document).ready(function() {

  const delay=1000;

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

  var waypoint = createWaypoint('spacesOverlay',delay);
  var waypoint = createWaypoint('poioiOverlay',delay);
  var waypoint = createWaypoint('coffeeSectionOverlay',delay);
  var waypoint = createWaypoint('drinkSectionOverlay',delay);
  var waypoint = createWaypoint('foodSectionOverlay',delay);
  var waypoint = createWaypoint("wineSectionOverlay",delay);

  function createWaypoint(id,timeInMillis){
    var waypoint = new Waypoint({
      element: document.getElementById(id),
      handler: function() {
        console.log("into view");
        $("#"+id).animate({opacity:1},timeInMillis);
      },
      offset:'50%'
    });
    return waypoint;
  }






});
