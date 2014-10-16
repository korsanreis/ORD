<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="css/style.css">
  	<link rel="stylesheet" href="css/idangerous.swiper.css">
	<title>OscaroParts.com</title>
</head>
<body>
	<div class="offCanvasBackground"></div>
	<div class="SubOffCanvasBackground"></div>
	<?php require 'header.html'; ?>
	<div id="wrapper">
		<?php require 'search.html'; ?>

		<div class="categories-container">
		    <a class="arrows arrow-left" href="#"><</a> 
		    <div class="swiper-container">
			    <div class="swipe-wrapper">
					<div class="swiper-slide"><img src="img/brakes.png"><img src="img/wiper.png"></div>
					<div class="swiper-slide"><img src="img/wiper.png"><img src="img/air_fuel.png"></div>
					<div class="swiper-slide"><img src="img/air_fuel.png"><img src="img/electrical_lighting.png"></div>
					<div class="swiper-slide"><img src="img/electrical_lighting.png"><img src="img/brakes.png"></div>
			    </div>
		    </div>
		    <a class="arrows arrow-right" href="#">></a>
		</div>
	</div>
	
    <!-- END BODY -->
</body>
	<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="js/idangerous.swiper.min.js"></script>
	<script>
		window.onload = function() {
			var mySwiper = new Swiper('#wrapper .categories-container .swiper-container',{
				mode:'horizontal',
				loop:true,
				grabCursor: true
			})
			$('.arrow-left').on('click', function(e){
				e.preventDefault()
				mySwiper.swipePrev()
			})
			$('.arrow-right').on('click', function(e){
				e.preventDefault()
				mySwiper.swipeNext()
			})
		}
	</script>
	<script src="demo.js"></script>
</html>