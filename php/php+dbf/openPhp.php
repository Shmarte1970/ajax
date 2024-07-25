<?php
// Ruta al archivo DBF
$dbfFile = 'C:\\kk\\dbf2sql\\rebut.dbf';  // Usa barras invertidas dobles en Windows

// Abrir el archivo DBF
$db = dbase_open($dbfFile, 0);  // El modo 0 es solo lectura

if (!$db) {
    die("Error al abrir el archivo DBF. Verifica la ruta, el archivo y los permisos.");
}

// Obtener el número de registros
$numRecords = dbase_numrecords($db);
echo "Número de registros: $numRecords\n";

// Obtener el número de campos
$numFields = dbase_numfields($db);
echo "Número de campos: $numFields\n";

// Obtener y mostrar los nombres de los campos
$fieldInfo = dbase_get_header_info($db);
echo "Nombres de los campos:\n";
foreach ($fieldInfo as $field) {
    echo $field['name'] . "\n";
}

// Leer y mostrar los registros
echo "\nRegistros:\n";
for ($i = 1; $i <= $numRecords; $i++) {
    $row = dbase_get_record_with_names($db, $i);
    print_r($row);
}

// Cerrar la base de datos
dbase_close($db);
?>

