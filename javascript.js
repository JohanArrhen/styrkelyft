// JavaScript Document
var storRubrik = true;
window.onload = function() {

	$("#menyknapp").on("click", expandera);




	var bilder;
	bilder =  $(".bildspel");




	console.log(bilder);
	//bildbyte

	$(bilder).on("click", bildByte);





















};


var i;
function bildByte(){


if(i == 5){
	console.log("test");
}

	else if(i == undefined){
		i = 5;
	}
	console.log("tab index: " + indexOf(this));
	// if(i == 0){
	// 	$(bilder[i]).removeClass("inaktivBild").addClass("aktivBild");
	// 	i++;
	// }else if(i > bilder.length){
	// 	i = 0;
	// }else
	// {
	// 	$(bilder[i - 1]).removeClass("aktivBild").addClass("inaktivBild");
	// 	$(bilder[i]).removeClass("inaktivBild").addClass("aktivBild");
	// }
	console.log(i);

}


function scroll(){
  var scrollPosition = $(window).scrollTop(); //hur långt det är scrollat i webbläsaren
  var width = $(window).width();

  if(width >= 800){
    toppHeight();
  }

function toppHeight(){
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
	}
}


function expandera() {
	$("nav").toggleClass("stangd", 1000);
}


document.addEventListener("scroll", scroll);
