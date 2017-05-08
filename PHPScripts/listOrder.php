<?php
	
	$open = "marcas.txt";
	$content = file($open);

	sort($content);

	// print_r($content);

	foreach ($content as $contents) {

		echo $contents. "<br/>";

	}


?>