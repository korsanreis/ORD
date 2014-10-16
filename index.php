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

		<div class="touchslider">
		    <span class="arrows touchslider-prev" href="#"><</span> 
		    <div class="touchslider-container">
			    <div class="touchslider-wrapper">
					<div class="touchslider-item"><img src="img/brakes.png"><img src="img/wiper.png"></div>
					<div class="touchslider-item"><img src="img/wiper.png"><img src="img/air_fuel.png"></div>
					<div class="touchslider-item"><img src="img/air_fuel.png"><img src="img/electrical_lighting.png"></div>
					<div class="touchslider-item"><img src="img/electrical_lighting.png"><img src="img/brakes.png"></div>
			    </div>
		    </div>
		    <span class="arrows touchslider-next" href="#">></span>
		</div>
		<footer>
			<h2>RECEIVE OUR GREAT DEALS !</h2>
			<form class="newsletter-form">
				<input type="text"><button>OK</button>
			</form>
			<section class="social-network">
				<span><a href="#">f</a></span>
				<span><a href="#">f</a></span>
				<span><a href="#">f</a></span>
				<span><a href="#">f</a></span>
			</section>
			<ul class="website-plan">
				<li><a href="#">Partner Brands</a></li>
				<li><a href="#">Featured Vehicle</a></li>
				<li><a href="#">All Auto Parts</a></li>
				<li><a href="#">Repair Tips</a></li>
				<li><a href="#">Our Commitments</a></li>
				<li><a href="#">How to Order</a></li>
				<li><a href="#">FAQ’s</a></li>
				<li><a href="#">Secure Shopping</a></li>
				<li><a href="#">Shipping Policy</a></li>
				<li><a href="#">Limited Warranty</a></li>
				<li><a href="#">Privacy policy</a></li>
				<li><a href="#">Legal Notices</a></li>
				<li><a href="#">Easy Return</a></li>
				<li><a href="#">About Oscaro</a></li>
				<li><a href="#">Career</a></li>
				<li><a href="#">Contact US</a></li>
			</ul>
		</footer>
	</div>
	
    <!-- END BODY -->
</body>
	<script src="js/jquery-1.10.1.min.js"></script>
	<script src="js/demo.js"></script>
	<script src="js/slider.js"></script>
	<script>
		jQuery(function($) {
		    $(".touchslider").touchSlider({
		    	container: this,
				duration: 350, // the speed of the sliding animation in milliseconds
				delay: 3000, // initial auto-scrolling delay for each loop
				margin: 5, // borders size. The margin is set in pixels.
				mouseTouch: true,
				namespace: "touchslider",
				next: ".touchslider-next", // jQuery object for the elements to which a "scroll forwards" action should be bound.
				pagination: ".touchslider-nav-item",
				currentClass: "touchslider-nav-item-current", // class name for current pagination item.
				prev: ".touchslider-prev", // jQuery object for the elements to which a "scroll backwards" action should be bound.
				scroller: viewport.children(),
				autoplay: false, // whether to move from image to image automatically
				viewport: ".touchslider-viewport"
			});
		});
	</script>
</html>