<?php

$dbfFile = 'C:\\kk\\dbf2sql\\rebut.dbf';

// Leer el archivo para verificar permisos
$contents = @file_get_contents($dbfFile);

if ($contents === false) {
    die("No se puede leer el archivo DBF. Verifique los permisos.");
}

echo "Archivo DBF leído correctamente.";
?>
