<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="swipe.css">
	<title>OscaroParts.com</title>
</head>
<body>
	<div class="offCanvasBackground"></div>
	<div class="SubOffCanvasBackground"></div>
	<?php require 'header.html'; ?>
	<?php require 'search.html'; ?>
	<div class="categories-container">
	    <a class="arrows arrow-left" href="#"><</a> 
	    <a class="arrows arrow-right" href="#">></a>
	    <div class="swiper-container">
			<div class="swiper-slide"><img src="img/brakes.png"></div>
			<div class="swiper-slide"><img src="img/wiper.png"></div>
			<div class="swiper-slide"><img src="img/air_fuel.png"></div>
			<div class="swiper-slide"><img src="img/electrical_lighting.png"></div>
	    </div>
	</div>
    <!-- END BODY -->
</body>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="swipe.js"></script>
<script src="demo.js"></script>
<script>
	var mySwiper = new Swiper('.swiper-container',{
		pagination: '.pagination',
		loop:true,
		grabCursor: true,
		paginationClickable: true
	})
	$('.arrow-left').on('click', function(e){
		e.preventDefault()
		mySwiper.swipePrev()
	})
	$('.arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext()
	})
</script>
</html>