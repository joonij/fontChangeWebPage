$(document).ready(function(){

    // 해상도 높이
    var ht = $(window).height();
    var conht = ht-150;
    var fontboxht = conht/6
    function htcheck(){
        if ($(window).width() >= 1360){
            $("#content").css("height", conht);
            $(".font_box").css("height", fontboxht);
            $(".font_box:nth-child(1), .font_box:nth-child(7), .font_box:nth-child(12)").css("height", fontboxht*2);
        }
        if ($(window).width() <= 1360) {
            $("#content").css("height", conht);
            $(".font_box").css("height", fontboxht);
            $(".font_box:nth-child(1), .font_box:nth-child(7), .font_box:nth-child(12)").css("height", fontboxht);
        }
        if ($(window).width() <= 800) {
            $("#content").css("height", fontboxht*17);
            $(".font_box").css("height", fontboxht);
            $(".font_box:nth-child(1), .font_box:nth-child(7), .font_box:nth-child(12)").css("height", fontboxht);
        } 
    }
    htcheck()
    $(window).resize(function(){
        htcheck()
        if ($(window).width() >= 1360){
            $("#content").css("height", conht);
            $(".font_box").css("height", fontboxht);
            $(".font_box:nth-child(1), .font_box:nth-child(7), .font_box:nth-child(12)").css("height", fontboxht*2);
        }
        if ($(window).width() <= 1360) {
            $("#content").css("height", conht);
            $(".font_box").css("height", fontboxht);
            $(".font_box:nth-child(1), .font_box:nth-child(7), .font_box:nth-child(12)").css("height", fontboxht);
        }
        if ($(window).width() <= 700) {
            $("#content").css("height", fontboxht*17);
            $(".font_box").css("height", fontboxht);
            $(".font_box:nth-child(1), .font_box:nth-child(7), .font_box:nth-child(12)").css("height", fontboxht);
        } 
    });
    
    // 랜덤 font
    var fontkor = new Array("Nanum Gothic","Kirang Haerang","Nanum Myeongjo","Sunflower","Nanum Pen Script","Do Hyeon","Gaegu","Nanum Gothic Coding","Nanum Brush Script","Poor Story","Gothic A1","Black Han Sans","Jua","Hi Melody","Song Myung","Gugi","East Sea Dokdo","Gamja Flower","Stylish","Black And White ,icture","Dokdo","Cute Font","Yeon Sung");
    var font = new Array("Roboto","Nanum Gothic","Hanalei Fill","Kirang Haerang","Open Sans","Lato","Nanum Myeongjo","Montserrat","Eczar","Roboto Condensed","Oswald","Source Sans Pro","Slabo 27px","Sunflower","Raleway","Nanum Pen Script","Merriweather","PT Sans","Roboto Slab","Do Hyeon","Poppins","Ubuntu","Noto Sans","Open Sans Condensed","Gaegu","Nanum Gothic Coding","Playfair Display","Lora","PT Serif","Titillium Web","Roboto Mono","Muli","Arimo","PT Sans Narrow","Fira Sans","Nanum ,rush Script","Inconsolata","Noto Serif","Nunito","Work Sans","Dosis","Merienda","Indie Flower","Oxygen","Josefin ,ans","Bitter","Crimson Text","Anton","Cabin","Quicksand");
    var fontall = fontkor.concat(font);
    var random = [];
    var randomall = [];
    function newfont(){
        for (var i = 0; i < fontkor.length; i++) {
            random[i] = Math.floor(Math.random() * fontkor.length);
            for(var j=0;j<i;j++){
                if(random[i]==random[j]){
                    i--;
                    break;
                }
            }
        }
        for (var i = 0; i < fontall.length; i++) {
            randomall[i] = Math.floor(Math.random() * fontall.length);
            for(var j=0;j<i;j++){
                if(randomall[i]==randomall[j]){
                    i--;
                    break;
                }
            }
        }
    }

    newfont()
    for(var i=0; i<17;i++) {
        $(".font_box").eq(i).children(".infor").text('');
        $(".font_box").eq(i).css("font-family", '');
        $(".font_box").eq(i).children(".infor").text(fontall[randomall[i]] + " - ");
        $(".font_box").eq(i).css("font-family", fontall[randomall[i]]);
    }
    
    $("#check_box").on("click", function(){
        if($("#check_box").is(":checked")) {
            for(var i=0; i<17;i++) {
                $(".font_box").eq(i).children(".infor").text('');
                $(".font_box").eq(i).css("font-family", '');
                $(".font_box").eq(i).children(".infor").text(fontkor[random[i]] + " - ");
                $(".font_box").eq(i).css("font-family", fontkor[random[i]]);
            }
        } else {
            for(var i=0; i<17;i++) {
                $(".font_box").eq(i).children(".infor").text('');
                $(".font_box").eq(i).css("font-family", '');
                $(".font_box").eq(i).children(".infor").text(fontall[randomall[i]] + " - ");
                $(".font_box").eq(i).css("font-family", fontall[randomall[i]]);
            }
        }
    });

    // research button spin
    $("#research_btn").mouseover(function(){
        $(this).addClass('fa-spin');
    }).mouseout(function(){
        $(this).removeClass('fa-spin');
    });
    // research button
    $("#research_btn").on("click", function(){
        newfont()
        if($("#check_box").is(":checked")) {
            for(var i=0; i<17;i++) {
                $(".font_box").eq(i).children(".infor").text('');
                $(".font_box").eq(i).css("font-family", '');
                $(".font_box").eq(i).children(".infor").text(fontkor[random[i]] + " - ");
                $(".font_box").eq(i).css("font-family", fontkor[random[i]]);
            }
        } else {
            for(var i=0; i<17;i++) {
                $(".font_box").eq(i).children(".infor").text('');
                $(".font_box").eq(i).css("font-family", '');
                $(".font_box").eq(i).children(".infor").text(fontall[randomall[i]] + " - ");
                $(".font_box").eq(i).css("font-family", fontall[randomall[i]]);
            }
        }
    });
});