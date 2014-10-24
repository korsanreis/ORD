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

$('.tabsSection').addClass('closed-tab');
$('#YMME-tab').addClass('hide-tab-content');
$('#VIN-tab').addClass('hide-tab-content');

function swTabCont (aTabCont,bTabCont){
    $(aTabCont).removeClass('hide-tab-content');
    $(bTabCont).addClass('hide-tab-content');
}

$('.ymmeVinBtnSection button.icon-car').click(function(){
    if ($('.ymmeVinBtnSection button.icon-barcode').hasClass('current-tab-selected')){
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-barcode').removeClass('current-tab-selected');
        swTabCont('#YMME-tab','#VIN-tab');
    }
    else{
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-barcode').removeClass('current-tab-selected');
        if ($(this).hasClass('current-tab-selected')){
            swTabCont('#YMME-tab','#VIN-tab');
        }else{
            $('#YMME-tab').addClass('hide-tab-content');
        }
    }
});

$('.ymmeVinBtnSection button.icon-barcode').click(function() {
    if ($('.ymmeVinBtnSection button.icon-car').hasClass('current-tab-selected')) {
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-car').removeClass('current-tab-selected');
        swTabCont('#VIN-tab','#YMME-tab');
    }else{
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-car').removeClass('current-tab-selected');
        if ($(this).hasClass('current-tab-selected')) {
            swTabCont('#VIN-tab','#YMME-tab');
        }else{
            $('#VIN-tab').addClass('hide-tab-content');
        }
    }
});

/*
function swTabHt (aTabHt,bTabHt) {
    $('.tabsSection').addClass(aTabHt);
    $('.tabsSection').removeClass(bTabHt);
}

function swTabCont (aTabCont,bTabCont){
    $(aTabCont).removeClass('hide-tab-content').css('position','relative');
    $(bTabCont).addClass('hide-tab-content').css('position','absolute');
}

$('.ymmeVinBtnSection button.icon-car').click(function(){
    if ($('.ymmeVinBtnSection button.icon-barcode').hasClass('current-tab-selected')){
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-barcode').removeClass('current-tab-selected');
        swTabHt('YMMHeight','VINHeight');
        $('#VIN-tab').addClass('hide-tab-content');
        setTimeout(function(){$('#YMME-tab').removeClass('hide-tab-content').css('position','relative');$('#VIN-tab').css('position','absolute');},200);
    }
    else{
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-barcode').removeClass('current-tab-selected');
        if ($(this).hasClass('current-tab-selected')){
            swTabHt('YMMHeight','VINHeight');
            setTimeout(function(){swTabCont('#YMME-tab','#VIN-tab');},200);
        }else{
            $('#YMME-tab').addClass('hide-tab-content');
            setTimeout(function() {$('.tabsSection').removeClass('YMMHeight');},200);
        }
    }
});

$('.ymmeVinBtnSection button.icon-barcode').click(function() {
    if ($('.ymmeVinBtnSection button.icon-car').hasClass('current-tab-selected')) {
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-car').removeClass('current-tab-selected');
        $('#YMME-tab').addClass('hide-tab-content');
        setTimeout(function(){swTabHt('VINHeight','YMMHeight');$('#VIN-tab').removeClass('hide-tab-content').css('position','relative');$('#YMME-tab').css('position','absolute');},200);
    }else{
        $(this).toggleClass('current-tab-selected');
        $('.ymmeVinBtnSection button.icon-car').removeClass('current-tab-selected');
        if ($(this).hasClass('current-tab-selected')) {
            swTabHt('VINHeight','YMMHeight');
            setTimeout(function(){
                swTabCont('#VIN-tab','#YMME-tab');
            },200);
        }else{
            $('#VIN-tab').addClass('hide-tab-content');
            setTimeout(function() {
                $('.tabsSection').removeClass('VINHeight');
                setTimeout(function() {
                    $('#VIN-tab').css('position','absolute');
                },200);
            },200);
        }
    }
});
*/

//=================================================================================================================================================================================================================

$(".touchslider").touchSlider({mouseTouch: true,container: this});

