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

$('#YMME-tab').addClass('hide-tab-content');
$('#VIN-tab').addClass('hide-tab-content');

function swTabCont (aTabCont,bTabCont){$(aTabCont).removeClass('hide-tab-content');$(bTabCont).addClass('hide-tab-content');}

$(".ymmeVinBtnSection button").click(function() {
    var TrgTab = $(this).attr("href");
    var LsTab = $(this).siblings().attr("href");
    if ($(this).siblings().hasClass('current-tab-selected')) {$(this).toggleClass('current-tab-selected');$(this).siblings().removeClass('current-tab-selected');swTabCont(TrgTab,LsTab);}
    else{
        $(this).toggleClass('current-tab-selected');$(this).siblings().removeClass('current-tab-selected');
        if ($(this).hasClass('current-tab-selected')){swTabCont(TrgTab,LsTab);}else{$(TrgTab).addClass('hide-tab-content');}
    }
});

//var baseUrl = 'http://localhost:8888/ORD/';
//var CurrentUrl = document.URL;


//=================================================================================================================================================================================================================

$(".touchslider").touchSlider({mouseTouch: true,container: this});

