// Click on toggle Nav

$('.toggle_btn_menu').click(function(){
  $('.menuLevel1').toggleClass('menu-open');
  $('.offCanvasBackground').toggleClass('getDarker');
});

// Click on item that trigger another menu

$('.getSubLevelMenu').click(function(){
  $('.menuLevel2').addClass('menu-open');
  $('.menuLevel1').addClass('getDarker');
  $('.SubOffCanvasBackground').addClass('getDarker');
});

//************ GO BACK ************//

// Click on the go back button in first level nav

$('.navGoBackBtn').click(function(){
	$('.menuLevel1').removeClass('menu-open');
	$('.offCanvasBackground').removeClass('getDarker');
});

// Click on the go back button in second level nav

$('.subNavGoBackBtn').click(function(){
	$('.menuLevel2').removeClass('menu-open');
	$('.menuLevel1').removeClass('getDarker');
	$('.SubOffCanvasBackground').removeClass('getDarker');
});

//************ GO BACK ************//


$(".USTabs .ymmeVinBtnSection button").click(function(event) {
    event.preventDefault();
    $(this).addClass("current-tab-selected", {duration:500});
    $(this).siblings().removeClass("current-tab-selected", {duration:500});
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn();
});