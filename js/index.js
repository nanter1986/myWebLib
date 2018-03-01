$(document).ready(function() {

  const delay = 1000;
  var waypoints = [];

  $(window).on('load',function() {
     $('#loading').fadeOut(1500);
  });

  addNavbar();
  addTop();
  addCarousel();
  changeActiveNavBarItem();
  closeDropdownAfterClick();
  backToTopAfterPoint(100);
  scrollSlowlyToThePoint(0);
  zoomTransClassImageToScale(1.1);
  zoomOutTransClassImageToScale(1.0);
  rotateButtonOnHover();
  waypoints.push(createWaypoint('spacesOverlay', delay));
  waypoints.push(createWaypoint('poioiOverlay', delay));
  waypoints.push(createWaypoint('coffeeSectionOverlay', delay));
  waypoints.push(createWaypoint('drinkSectionOverlay', delay));
  waypoints.push(createWaypoint('foodSectionOverlay', delay));
  waypoints.push(createWaypoint("wineSectionOverlay", delay));

  //https://www.html5rocks.com/en/tutorials/webcomponents/imports/
  //to use for carousel


});
