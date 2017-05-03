// JavaScript Document
var storRubrik = true;
var bildnummer;

window.onload = function() {

	$("#menyknapp").on("click", expandera);



	var bilder =  $(".bildspel");

	$("#hoger").on("click", bildBytePlus);
	$("#vanster").on("click", bildByteMinus);















};


function bildBytePlus(){
		var bilder =  $(".bildspel");
		if(bildnummer == undefined){
			bildnummer = 0;
		}

		bildnummer++;

		if(bildnummer > bilder.length - 1){
			$(bilder[bilder.length - 1]).removeClass("aktivBild").addClass("inaktivBild");
	 		$(bilder[0]).removeClass("inaktivBild").addClass("aktivBild");
			bildnummer = 0;
		}else {
			$(bilder[bildnummer - 1]).removeClass("aktivBild").addClass("inaktivBild");
	 		$(bilder[bildnummer]).removeClass("inaktivBild").addClass("aktivBild");
		}
		$("#bildNamn").html(bilder[bildnummer].alt);
		console.log(bildnummer);
}
function bildByteMinus(){
		var bilder =  $(".bildspel");
		if(bildnummer == undefined){
			bildnummer = 0;
		}

		bildnummer--;

		if(bildnummer < 0){
			$(bilder[0]).removeClass("aktivBild").addClass("inaktivBild");
	 		$(bilder[bilder.length - 1]).removeClass("inaktivBild").addClass("aktivBild");
			bildnummer = bilder.length - 1;
		}

		else {
			$(bilder[bildnummer + 1]).removeClass("aktivBild").addClass("inaktivBild");
	 		$(bilder[bildnummer]).removeClass("inaktivBild").addClass("aktivBild");
		}
		$("#bildNamn").html(bilder[bildnummer].alt);
		console.log(bildnummer);
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
