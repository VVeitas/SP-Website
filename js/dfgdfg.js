jQuery(document).ready(function(){
  $("#myCarousel").carousel({interval: 500});
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item").click(function(){
    $("#myCarousel").carousel(3);
  });