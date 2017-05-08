// JavaScript Document
var storRubrik = true;
var bildnummer;
var foregaendeScrollPosition;
var nuvarandeScrollPosition,
		nedatscroll;

window.onload = function() {
	minimeraMeny();
	$("#menyknapp").on("click", expanderaMeny);
	$("article").on("click", minimeraMeny);


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

		var lyftarnamn = bilder[bildnummer].alt.replace(/bild på/i, "");
		$("#bildNamn").html(lyftarnamn);
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
	anpassaHeader();

}
function anpassaHeader(){

	//console.log("ären ner eller? " + nedatscroll);

		if(storRubrik == true && nedatscroll == true && $(window).scrollTop() > 200){
			if($(window).width() > 800){
				andraHeaderhojd();
			}else{
				taBortHeader();
			}

		}else if(storRubrik == false && nedatscroll == false && $(window).scrollTop() > 200){
			if($(window).width() > 800){
				andraHeaderhojd();
			}else{
				taBortHeader();
			}
		}

}
function andraHeaderhojd() {
	if(storRubrik == true){
		$("#huvudrubrik").animate({"font-size": "3rem"}, 100);
    $("#topp").animate({"height": "3rem"}, 100);
    storRubrik = false;
	}else{
		$("#huvudrubrik").animate({"font-size": "6rem"}, 100);
		$("#topp").animate({"height": "6rem"}, 100);
		storRubrik = true;
	}

}
function taBortHeader() {

	if(storRubrik == true){
			$("#topp").animate({"top": "-10rem"}, 500);
			storRubrik = false;
		}else{
			$("#topp").animate({"top": "0"}, 500);
			storRubrik = true;
		}

}


// function toppHeight(){
//   if(scrollPosition > 200 && storRubrik == true){ //scrollat mer än 200px men rubriken är stor
//     $("#huvudrubrik").animate({"font-size": "3rem"}, 100);
//     $("#topp").animate({"height": "3rem"}, 100);
//     storRubrik = false;
//   }
//   if(scrollPosition < 200 && storRubrik != true){ //scrollat mindre än 200px men rubriken är inte stor
//
// 			$("#huvudrubrik").animate({"font-size": "6rem"}, 100);
// 			$("#topp").animate({"height": "6rem"}, 100);
// 			storRubrik = true;
//   		}
// 	}
// }


function expanderaMeny() {
	$("nav").toggleClass("stangd", 1000);
};
function minimeraMeny() {
	$("nav").addClass("stangd");
};




function scrollarNer() {

	if(foregaendeScrollPosition == undefined || nuvarandeScrollPosition == undefined){
		foregaendeScrollPosition = $(window).scrollTop();
		nuvarandeScrollPosition = $(window).scrollTop();
	}

	nuvarandeScrollPosition = $(window).scrollTop();



		// console.log("nuvarandeScrollPosition: " + nuvarandeScrollPosition);
		// console.log("foregaendeScrollPosition: " + foregaendeScrollPosition);


	if(nuvarandeScrollPosition > foregaendeScrollPosition){
		//console.log("nedåtscroll");
		nedatscroll = true;
	}else if(nuvarandeScrollPosition < foregaendeScrollPosition){
		//console.log("uppåtscroll");
		nedatscroll = false;
	}
	foregaendeScrollPosition = nuvarandeScrollPosition;

};



funktion expanderaRegelbox() {
		
}




















document.addEventListener("scroll", scroll);
document.addEventListener("scroll", scrollarNer);
