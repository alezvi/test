<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		<input type="text" id="colourInput" name="colour" value="EEEEEE" placeholder="RGB" maxlength="6" required onchange="changeBgColor(this.value)">
		
		<script type="text/javascript">
			var colourInput = document.getElementById('colourInput').innerHTML;
			
			function changeBgColor(v) {
				document.body.style.background = '#' + v;
			}
		</script>
	</body>
</html>
