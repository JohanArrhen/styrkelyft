// JavaScript Document
var storRubrik = true;
window.onload = function() {



};




function scroll(){
  var scrollPosition = $(window).scrollTop(); //hur långt det är scrollat i webbläsaren



  if(scrollPosition > 200 && storRubrik == true){ //scrollat mer än 200px men rubriken är stor
    $("#huvudrubrik").animate({"font-size": "3rem"}, 100);
    $("#topp").animate({"height": "3rem"}, 100);
    storRubrik = false;
  }
  if(scrollPosition < 200 && storRubrik != true){ //scrollat mindre än 200px men rubriken är inte stor

    $("#huvudrubrik").animate({"font-size": "6rem"}, 100);
    $("#topp").animate({"height": "6rem"}, 100);
    storRubrik = true;
  }







  // if (scrollPosition === 200 || scrollPosition - 1 === ){
  //   $("#topp").css("height", "30px");
  //   // $("#huvudrubrik").css("font-size", 3 + "rem")
  //   $("#huvudrubrik").animate({"font-size": "3rem"}, 1000);
  //   // $("nav").css("padding-bottom", 0.2 + "rem")
  // }else{
  //   $("#topp").css("height", "60px");
  //   // $("#huvudrubrik").css("font-size", 6 + "rem") //tilbaka till ursprungsläget
  //   $("#huvudrubrik").animate({"font-size": "6rem"}, 1000);
  //   // $("nav").css("padding-bottom", 0.4 + "rem")
  // }
}


document.addEventListener("scroll", scroll);
