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

function changeActiveNavBarItem(){
  $(".nav li").on("click", function() {
    console.log("clicked on item");
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
}

function closeDropdownAfterClick(){
  $('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });
}



function backToTopAfterPoint(desiredHeight){
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > desiredHeight) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });
}






function scrollSlowlyToThePoint(point){
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: point
    }, "slow");
    $(".nav li").removeClass("active");
    return false;
  });
}

$("#messageCall").fadeIn(2000, function() {
  $("#messageCall2").fadeIn(2000, function() {
    $("#buttonCall").css("display","inline-block");
  });

});



function zoomTransClassImageToScale(scale){
  $(".trans").on("mouseenter",function(){
    console.log("over trans");
    var value='scale('+scale+')';
    $(this).css('transform',value);
  });
}



function zoomOutTransClassImageToScale(scale){
  $(".trans").on("mouseleave",function(){
    console.log("over trans");
    var value='scale('+scale+')';
    $(this).css('transform',value);
  });
}

function rotateButtonOnHover(){
  $("#back2TopImage").on("mouseenter",function(){
    $(this).css('transform','rotateY(180deg)');
  });
}
