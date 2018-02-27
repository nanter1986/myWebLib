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
