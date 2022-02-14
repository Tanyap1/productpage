function myFunction(imgs) { //Color picker img
        var expandImg = document.getElementById("expandedImg");
        expandImg.src = imgs.src;
        expandImg.parentElement.style.display = "block";
      }
      const displayBigImg = document.querySelector('img');//big img
const thumbnails = document.querySelector('ul');//thumbnails


thumbnails.onclick = function (event) {// execute the onclick 
  if (event.target && event.target.nodeName === 'IMG') {
    displayImage(event.target.src);
    displayFig(event.target.alt);
    this.parentNode.style.display = 'none';
} ;
}


    
//floating bar from the lab week10
$(document).ready(function() {
  //getting the floating bar offset
  var floatingBar  = $("#floatingbar");
  var navTop = floatingBar.offset().top;
  var backToTopButton = $("footer p a.top");
  //show and hide the presistant nav and the back to top button based on the scrolling
  $(window).scroll(function(){
      // console.log("scrolling")
      if($(window).scrollTop() > navTop){
          floatingBar.addClass("floater");
          backToTopButton.fadeIn(200);
      }else{
          floatingBar.removeClass("floater");
          backToTopButton.fadeOut(200);
      }
  });
  //add a click handler to animate scroll top
  backToTopButton.click(function(e){
      e.preventDefault();
      $("html,body").animate({scrollTop:0},500);
  });
 
});