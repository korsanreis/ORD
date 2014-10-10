<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="style.css">
	<title>OscaroParts.com</title>
</head>
<body>
	<div class="offCanvasBackground"></div>
	<div class="SubOffCanvasBackground"></div>
	<?php require 'header.html'; ?>
	<form>
		<input type="text" class="searchBar" placeholder="Search by Part Number">		
		<button>Go</button>
	</form>
	<div class="USTabs">
		<div class="ymmeVinBtnSection">
			<button href="#YMME-tab" class="current-tab-selected">VEHICLE</button>
			<button href="#VIN-tab">VIN NUMBER</button>
		</div>
		<div class="tabsSection">
	        <div id="YMME-tab" class="tab-content">
				<select>
					<option value="" disabled selected>Year</option>
					<option value="">Test</option>
					<option value="">Test</option>
					<option value="">Test</option>
				</select>
				<select>
					<option value="" disabled selected>Make</option>
					<option value="">Test</option>
					<option value="">Test</option>
					<option value="">Test</option>
				</select>	
				<select>
					<option value="" disabled selected>Model</option>
					<option value="">Test</option>
					<option value="">Test</option>
					<option value="">Test</option>
				</select>	
				<button>FIND</button>        
	        </div>
	       	<div id="VIN-tab" class="tab-content">
	       		<div class="VIN-tab-wrapper">
					<input type="text" placeholder="EX : WXYZ12WX123456789">
					<button>GO</button> 
	       		</div>
			</div>
		</div>
	</div>
</body>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="demo.js"></script>
</html>