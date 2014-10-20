<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/social-icon.css">
	<title>OscaroParts.com | Product Detail</title>
</head>
<body>
	<div class="offCanvasBackground"></div>
	<div class="SubOffCanvasBackground"></div>
	<?php require 'templates/header.html'; ?>
	<div id="wrapper">
		<?php require 'templates/search.html'; ?>
		<?php require 'templates/part-detail.html' ?>
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
</html>