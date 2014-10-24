//=================================================================================================================================================================================================================

//************ GET NAV MENU ************//
    // Click on toggle Nav
    $('.toggle_btn_menu').click(function(){
        $('.menuLevel1').toggleClass('menu-open');
        $('.offCanvasBackground').toggleClass('getDarker');
        if($('.menuLevel2').hasClass('menu-open')){
            $('.menuLevel2').removeClass('menu-open');
            $('.menuLevel1').removeClass('getDarker');
            $('.SubOffCanvasBackground').removeClass('getDarker');
        }
    });
    // Click on item that trigger another menu
    $('.getSubLevelMenu').click(function(){$('.menuLevel2').addClass('menu-open');$('.menuLevel1').addClass('getDarker');$('.SubOffCanvasBackground').addClass('getDarker');});

//************ GO BACK ITEM MENU ************//
    // First level nav
    $('.navGoBackBtn').click(function(){$('.menuLevel1').removeClass('menu-open');$('.offCanvasBackground').removeClass('getDarker');});
    // Second level nav
    $('.subNavGoBackBtn').click(function(){$('.menuLevel2').removeClass('menu-open');$('.menuLevel1').removeClass('getDarker');$('.SubOffCanvasBackground').removeClass('getDarker');});

//=================================================================================================================================================================================================================
//=================================================================================================================================================================================================================

//************ GET FILTERS MENU ************//
    // Click on toggle Filters
    $('#filter-trigger').click(function(){
        $('.filter-menu-level-1').toggleClass('filter-open');
        $('.offCanvasBackground').toggleClass('getDarker');
        if($('.filter-menu-level-2').hasClass('filter-open')){
            $('.filter-menu-level-2').removeClass('filter-open');
            $('.filter-menu-level-1').removeClass('getDarker');
            $('.SubOffCanvasBackground').removeClass('getDarker');
        }
    });
    // Click on item that trigger another menu
    $('.getSubLevelFilter').click(function(){$('.filter-menu-level-2').addClass('filter-open');$('.filter-menu-level-1').addClass('getDarker');$('.SubOffCanvasBackground').addClass('getDarker');});

//************ GO BACK ITEM FILTERS ************//
    // First level nav
    $('.navGoBackBtn').click(function(){$('.filter-menu-level-1').removeClass('filter-open');$('.offCanvasBackground').removeClass('getDarker');});
    // Second level nav
    $('.subNavGoBackBtn').click(function(){$('.filter-menu-level-2').removeClass('filter-open');$('.filter-menu-level-1').removeClass('getDarker');$('.SubOffCanvasBackground').removeClass('getDarker');});

//=================================================================================================================================================================================================================
//=================================================================================================================================================================================================================

//************ TAB CLOSE EXPAND ************//

$(".USTabs .ymmeVinBtnSection button").click(function(event) {
    event.preventDefault();
    $('.tabsSection').removeClass('closed-tab');
    $(this).addClass("current-tab-selected", {duration:500});
    $(this).siblings().removeClass("current-tab-selected", {duration:500});
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css('display','none');
    $(tab).fadeIn();
});

var baseUrl = 'http://localhost:8888/ORD/';
var CurrentUrl = document.URL;

if (CurrentUrl === baseUrl + 'index.php') {
    $('#YMME-tab').css('display','block');
}
else{
    $(".ymmeVinBtnSection button").removeClass("current-tab-selected");
    $('.tabsSection').addClass('closed-tab');
}

//=================================================================================================================================================================================================================

$(".touchslider").touchSlider({mouseTouch: true,container: this});

