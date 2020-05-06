$(document).ready(function(){


  //sticky manu
  $(".js--services-section").waypoint(function(direction){
if (direction == "down"){
$("nav").addclass("sticky");
} else{
$("nav").removeclass("sticky");
}
  });
  // misitup(portfolio)
  var mixer = mixitup('.container');
});
