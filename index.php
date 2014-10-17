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
	<?php require 'templates/header.html'; ?>
	<div id="wrapper">
		<?php require 'templates/search.html'; ?>
		<?php require 'templates/home-slider.html'; ?>
		<?php require 'templates/footer.html'; ?>
	</div>
	
    <!-- END BODY -->
</body>
	<script src="js/jquery-1.10.1.min.js"></script>
	<script src="js/demo.js"></script>
	<script src="js/slider.js"></script>	
	<script>
		$(".touchslider").touchSlider({mouseTouch: true,container: this});
	</script>
	<!--<script>
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
			$(".touchslider").data("touchslider").stop(); // stop the slider
			$(".touchslider").data("touchslider").start(); // start the slider
		});
	</script>-->
</html>