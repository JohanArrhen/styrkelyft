// JavaScript Document

window.onload = function() {



};


function scroll(e){
  var scrollPosition = $(window).scrollTop();
  console.log(scrollPosition);

  if (scrollPosition > 200){
    $("#topp").css("height", "30px");
  }else{
    $("#topp").css("height", "50px");
  }

}



document.addEventListener("scroll", scroll);
