// JavaScript Document
var storRubrik = true;
var bildnummer;
var foregaendeScrollPosition;
var nuvarandeScrollPosition,
		nedatscroll;

window.onload = function() {



	taBortOnodigaPilar();
	$(window).on("resize", taBortOnodigaPilar);



	minimeraMeny();
	$("#menyknapp").on("click", expanderaMeny);
	$("article").on("click", minimeraMeny);
	$(".pil").on("click", expanderaMinimeraRegelbox);
	$(".reglerText").on("click", expanderaRegelbox);
	$(".fadebox").on("click", expanderaRegelbox);

	$(".fadebox").hover(minskaOpacitet, okaOpacitet);

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
		var lyftarnamn = bilder[bildnummer].alt.replace(/bild på/i, "");
		$("#bildNamn").html(lyftarnamn);

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



function expanderaMinimeraRegelbox() {

	var reglerboxMinusPilar = $(this).parent().parent().children()[0];
	var fade = $($(this).prev()).children()[0];
	//.css("height", "auto");
	//reglerboxMinusPilar.animate({"height": "auto"}, 500);
	var uppNerPilar = this;




	if($(fade).css("opacity") != 0){
		$(reglerboxMinusPilar).animate({"max-height": "2000px"}, 1200, function(){
				var height = $(reglerboxMinusPilar).css("height");

				//ändra max-height till rätt höjd så att animationen startar direkt
				$(reglerboxMinusPilar).css("max-height", height);

				 //testinnnk
			});
		$(fade).animate({"opacity": "0"}, 0);
		this.src = "bilder/PilUpp.png";


	}else{
		$(reglerboxMinusPilar).animate({"max-height": "30rem"}, 300, function(){
				$(fade).animate({"opacity": "100"}, 300)
				uppNerPilar.src = "bilder/PilNer.png";

			});



	}
};

function expanderaRegelbox(){
	var kanskeFade = $(this).children()[0];
	if(kanskeFade != undefined){
		var fade = $(this).children()[0];
		var reglerboxMinusPilar = $($(this).parent()[0]).prev();

		var uppNerPilar = $($(reglerboxMinusPilar).siblings()[0]).children()[1];

	}else{
		var	reglerboxMinusPilar = $(this).parent();
		var fade = $($($(reglerboxMinusPilar).siblings()[0]).children()[0]).children()[0];
		var uppNerPilar = $($(reglerboxMinusPilar).siblings()[0]).children()[1];
	}

	$(reglerboxMinusPilar).animate({"max-height": "2000px"}, 1200, function(){
			var height = $(reglerboxMinusPilar).css("height");

			$(reglerboxMinusPilar).css("max-height", height);
		});



		$(fade).animate({"opacity": "0"}, 0);
		uppNerPilar.src = "bilder/PilUpp.png";

}



// if(reglerboxMinusPilar.css("height") == "auto"){
// 	this.src = "bilder/PilUpp.png";
// 	console.log("lång jävel");
//
// }else{
// 	this.src = "bilder/PilNer.png";
// 	down = true;
//
// }

function minskaOpacitet(){
	var fade = $(this).children()[0];
	$(fade).animate({"height": "2rem"}, 200);
}
function okaOpacitet(){
	var fade = $(this).children()[0];
	$(fade).animate({"height": "5rem"}, 200);
}


function taBortOnodigaPilar() {
	var textIbox = $(".reglerText");
	var box = $(".reglerboxMinusPilar");
	var uppNerPilar = $(".uppNerPilar");

	for(var i = 0; i < textIbox.length; i++){
		var textIboxHojd = $(textIbox[i]).css("height");
		var boxhojd = $(box[i]).css("height")

		if(textIboxHojd < boxhojd){
			$(uppNerPilar[i]).css("opacity", "0");
		}else{
			$(uppNerPilar[i]).css("opacity", "100");
		}
	}

}















document.addEventListener("scroll", scroll);
document.addEventListener("scroll", scrollarNer);
