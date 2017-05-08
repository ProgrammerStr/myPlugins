<?php
	
	$fileL 		= "letters.txt";
	$letters 	= file($fileL);
	$file 		= "persona.txt";
	$list 		= file($file);

	sort($letters);
	sort($list);

echo "<ul class='menu-person-letters'>";

for($x = 0; $x < count($letters); $x++){
	echo "<li data-letter='{$letters[$x]}'>".$letters[$x]."</li>";
}

echo "</ul>";


echo "<ul class='a-z-filter'>";

	for($i = 0; $i < count($list); $i++){

		$letter = substr($list[$i], 0, 1);

		$html = "<li class='letter={$letter}'>";
		$html .= "<a href='/{$list[$i]}?PS=24'>{$list[$i]}</a>";
		$html .= "</li>";

		echo $html;

	}

echo "</ul>";

?>
