// JavaScript Document
var storRubrik = true;
var bildnummer;
var foregaendeScrollPosition;
var nuvarandeScrollPosition,
    nedatscroll,
    bildspelsTimer;

window.onload = function() {
    procentTillPixlar();
    $(window).on("resize", procentTillPixlar);

    taBortOnodigaPilarOchJusteraFadeBredd();
    $(window).on("resize", taBortOnodigaPilarOchJusteraFadeBredd);



    minimeraMeny();
    $("#menyknapp").on("click", expanderaMeny);
    $("article").on("click", minimeraMeny);
    $(".pil").on("click", expanderaMinimeraRegelbox);
    $(".infoText").on("click", expanderaRegelbox);
    $(".fadebox").on("click", expanderaRegelbox);

    $(".fadebox").hover(minskaOpacitet, okaOpacitet);

    //Bildspel
    bildspelsTimer = setInterval(bildBytePlus, 2000)
    bildBytePlus();
    $("#hoger").on("click", bildBytePlus);
    $("#hoger").on("click", stoppaBildspelsTimer);
    $("#vanster").on("click", bildByteMinus);
    $("#vanster").on("click", stoppaBildspelsTimer);
    $(".playPause").on("click", togglePlayPause);

};


function bildBytePlus() {
    var bilder = $(".bildspel");
    if (bildnummer == undefined) {
        bildnummer = 0;
    }

    bildnummer++;

    if (bildnummer > bilder.length - 1) {
        $(bilder[bilder.length - 1]).removeClass("aktivBild").addClass("inaktivBild");
        $(bilder[0]).removeClass("inaktivBild").addClass("aktivBild");
        bildnummer = 0;
    } else {
        $(bilder[bildnummer - 1]).removeClass("aktivBild").addClass("inaktivBild");
        $(bilder[bildnummer]).removeClass("inaktivBild").addClass("aktivBild");
    }

    var lyftarnamn = bilder[bildnummer].alt.replace(/bild på/i, "");

    if($(window).width() > 450) {
        $("#bildNamn").html(lyftarnamn);
    } else {
        $("#bildNamnMobil").html(lyftarnamn);
    }


}

function bildByteMinus() {
    var bilder = $(".bildspel");
    if (bildnummer == undefined) {
        bildnummer = 0;
    }

    bildnummer--;

    if (bildnummer < 0) {
        $(bilder[0]).removeClass("aktivBild").addClass("inaktivBild");
        $(bilder[bilder.length - 1]).removeClass("inaktivBild").addClass("aktivBild");
        bildnummer = bilder.length - 1;
    } else {
        $(bilder[bildnummer + 1]).removeClass("aktivBild").addClass("inaktivBild");
        $(bilder[bildnummer]).removeClass("inaktivBild").addClass("aktivBild");
    }
    var lyftarnamn = bilder[bildnummer].alt.replace(/bild på/i, "");

    if($(window).width() > 450) {
        $("#bildNamn").html(lyftarnamn);
    } else {
        $("#bildNamnMobil").html(lyftarnamn);
    }

}
function stoppaBildspelsTimer() {
    clearTimeout(bildspelsTimer);
    $(".playPause")[0].src = "bilder/pause.png";
    $($(".playPause")[0]).removeClass("play");

}
function togglePlayPause(){

    if($($(".playPause")[0]).is(".play")){
        stoppaBildspelsTimer();
        $(".playPause")[0].src = "bilder/pause.png";
        $($(".playPause")[0]).toggleClass("play");
    } else {
        bildspelsTimer = setInterval(bildBytePlus, 2000)
        $(".playPause")[0].src = "bilder/play.png";
        $($(".playPause")[0]).toggleClass("play");
    }
}

function scroll() {
    var scrollPosition = $(window).scrollTop(); //hur långt det är scrollat i webbläsaren
    var width = $(window).width();
    anpassaHeader();

}

function anpassaHeader() {

    //console.log("ären ner eller? " + nedatscroll);
    if ($(document).height() - $(window).height() > 200) { //hindrar menyn från att gå upp och ner när det är scroll upp på överta 200px

        var hogstaScrollvarde = $(document).height() - $(window).height(); //documentets höjd - skärmens höjd
        if (storRubrik == true && nedatscroll == true && $(window).scrollTop() > 200 && $(window).scrollTop() < hogstaScrollvarde - 100) {
            if ($(window).width() > 800) {
                andraHeaderhojd();
            } else {
                taBortHeader();
            }

        } else if (storRubrik == false && nedatscroll == false && $(window).scrollTop() > 200 && $(window).scrollTop() < hogstaScrollvarde - 100) {
            if ($(window).width() > 800) {
                andraHeaderhojd();
            } else {
                taBortHeader();
            }
        }
    }
}

function andraHeaderhojd() {
    if (storRubrik == true) {
        $("#huvudrubrik").animate({
            "font-size": "3rem"
        }, 100);
        $("#topp").animate({
            "height": "3rem"
        }, 100);
        storRubrik = false;
    } else {
        $("#huvudrubrik").animate({
            "font-size": "6rem"
        }, 100);
        $("#topp").animate({
            "height": "6rem"
        }, 100);
        storRubrik = true;
    }

}

function taBortHeader() {

    if (storRubrik == true) {
        $("#topp").animate({
            "top": "-10rem"
        }, 500);
        storRubrik = false;
    } else {
        $("#topp").animate({
            "top": "0"
        }, 500);
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

    if (foregaendeScrollPosition == undefined || nuvarandeScrollPosition == undefined) {
        foregaendeScrollPosition = $(window).scrollTop();
        nuvarandeScrollPosition = $(window).scrollTop();
    }

    nuvarandeScrollPosition = $(window).scrollTop();



    // console.log("nuvarandeScrollPosition: " + nuvarandeScrollPosition);
    // console.log("foregaendeScrollPosition: " + foregaendeScrollPosition);


    if (nuvarandeScrollPosition > foregaendeScrollPosition) {
        //console.log("nedåtscroll");
        nedatscroll = true;
    } else if (nuvarandeScrollPosition < foregaendeScrollPosition) {
        //console.log("uppåtscroll");
        nedatscroll = false;
    }
    foregaendeScrollPosition = nuvarandeScrollPosition;

};



function expanderaMinimeraRegelbox() {

    var infoboxMinusPilar = $(this).parent().parent().children()[0];
    var fade = $($(this).prev()).children()[0];
    //.css("height", "auto");
    //infoboxMinusPilar.animate({"height": "auto"}, 500);
    var uppNerPilar = this;




    if ($(fade).css("opacity") != 0) {
        $(fade).animate({
            "opacity": "0"
        }, 0);
        this.src = "bilder/PilUpp.png";
        $(infoboxMinusPilar).animate({
            "max-height": "2000px"
        }, 1200, function() {
            var height = $(infoboxMinusPilar).css("height");

            //ändra max-height till rätt höjd så att animationen startar direkt på uppvägen
            $(infoboxMinusPilar).css("max-height", height);

        });

    } else {
        $(infoboxMinusPilar).animate({
            "max-height": "30rem"
        }, 300, function() {
            $(fade).animate({
                "opacity": "100"
            }, 300, function() {
                uppNerPilar.src = "bilder/PilNer.png";
            });
        });



    }
};

function expanderaRegelbox() {

    var kanskeFade = $(this).children()[0];

    if ($(kanskeFade).attr("class") == "fade") {
        var fade = $(this).children()[0];
        var infoboxMinusPilar = $($(this).parents([0])).prev()[0];
        var uppNerPilar = $($(infoboxMinusPilar).siblings()[0]).children()[1];

    } else {
        var infoboxMinusPilar = $(this).parent()[0];
        var fade = $($($(infoboxMinusPilar).siblings()[0]).children()[0]).children()[0];
        var uppNerPilar = $($(infoboxMinusPilar).siblings()[0]).children()[1];
    }

    $(infoboxMinusPilar).animate({
        "max-height": "2000px"
    }, 1200, function() {
        var height = $(infoboxMinusPilar).css("height");

        $(infoboxMinusPilar).css("max-height", height);
    });



    $(fade).animate({
        "opacity": "0"
    }, 0);

	uppNerPilar.src = "bilder/PilUpp.png";




}

function minimeraAllaRegelBoxar() {

    var infoboxMinusPilar = $(".infoboxMinusPilar");
    var fade = $(".fade");
    var pilar = $(".pil");


    for (var i = 0; i < infoboxMinusPilar.length; i++) {
        $(infoboxMinusPilar[i]).animate({
            "max-height": "30rem"
        }, 300);
        $(fade[i]).animate({
            "opacity": "100"
        }, 0);
        console.log(pilar[i]);
        pilar[i].src = "bilder/PilNer.png";

    }

}


// if(infoboxMinusPilar.css("height") == "auto"){
// 	this.src = "bilder/PilUpp.png";
// 	console.log("lång jävel");
//
// }else{
// 	this.src = "bilder/PilNer.png";
// 	down = true;
//
// }

function minskaOpacitet() {
    var fade = $(this).children()[0];
    $(fade).animate({
        "height": "2rem"
    }, 200);
}

function okaOpacitet() {
    var fade = $(this).children()[0];
    $(fade).animate({
        "height": "5rem"
    }, 200);
}


function taBortOnodigaPilarOchJusteraFadeBredd() {

    if ($(window).width > 800) { //zoom ut på mobil räknas som resize och drar in boxarna.
        minimeraAllaRegelBoxar();
    }


    var textIbox = $(".infoText");
    var box = $(".infoboxMinusPilar");
    var uppNerPilar = $(".uppNerPilar");

    var pilWidth = $($(".pil")[0]).width();
    var boxWidth = $(box[0]).width();
    var fadebox = $(".fadebox");

    var boxBild = $(".infoboxMinusPilar img");

    var bildpadding = $($(".platsForRubrikOchBild img")[0]).css("padding-left");
    bildpadding = parseInt(bildpadding);


    for (var i = 0; i < textIbox.length; i++) {


        var fadeWidth = boxWidth - pilWidth;
        var textIboxHojd = $(textIbox[i]).css("height");
        //console.log("text " + i + " " + textIboxHojd);
        var boxhojd = $(box[i]).css("height");



        textIboxHojd = parseInt(textIboxHojd);
        boxhojd = parseInt(boxhojd);

        // console.log("textIboxHojd " + i + " : " + textIboxHojd);
        // console.log("boxhojd " + i + " : " + boxhojd);
        if ($(window).width() > 450) { //dvs inte för mobilversionen
            if (textIboxHojd < boxhojd) {

                $(uppNerPilar[i]).css("opacity", "0");
            } else {
                $(uppNerPilar[i]).css("opacity", "100");
            }
            boxBildBredd = $(boxBild[i]).width()
            fadeWidth = boxWidth - pilWidth - boxBildBredd - bildpadding - 5;

        }
        $(fadebox[i]).css("width", fadeWidth);
        $($(".pil")[i]).css("margin-right", "1.4rem");

    }

}


function procentTillPixlar() {
    var sidlangdKlickbarBild = $("#klickbarBild").height();

    var cirkel1 = $(".cirkelLank")[0];
    var cirkel2 = $(".cirkelLank")[1];
    var cirkel3 = $(".cirkelLank")[2];

    //cirkel 1
    var cirkel1Top = sidlangdKlickbarBild * -0.42;
    var cirkel1Left = sidlangdKlickbarBild * 0.48;
    $(cirkel1).css("top", cirkel1Top);
    $(cirkel1).css("left", cirkel1Left);


    //cirkel 2
    var cirkel2Top = sidlangdKlickbarBild * -0.67;
    var cirkel2Left = sidlangdKlickbarBild * 0.46;
    $(cirkel2).css("top", cirkel2Top);
    $(cirkel2).css("left", cirkel2Left);

    //cirkel 3
    var cirkel3Top = sidlangdKlickbarBild * -0.88;
    var cirkel3Left = sidlangdKlickbarBild * 0.58;
    $(cirkel3).css("top", cirkel3Top);
    $(cirkel3).css("left", cirkel3Left);









    // console.log("höjd: " + sidlangdKlickbarBild);
    // console.log("bredd: " + sidlangdKlickbarBild);

}









document.addEventListener("scroll", scroll);
document.addEventListener("scroll", scrollarNer);
