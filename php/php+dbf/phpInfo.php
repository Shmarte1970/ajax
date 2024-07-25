<?php
// Archivo de destino
$file = 'phpinfo.txt';

// Captura la salida de phpinfo() en un buffer
ob_start();
phpinfo();
$phpinfo = ob_get_clean();

// Escribe la información en un archivo de texto
file_put_contents($file, $phpinfo);

echo "La información de phpinfo() se ha guardado en $file";
?>