<?php
// Ruta al archivo DBF
// $dbfFile = 'C:\kk\dbf2sql\rebut.dbf';
$dbfFile = 'C:\\kk\\dbf2sql\\rebut.dbf';

// Abrir la base de datos DBF
$db = dbase_open($dbfFile, 0);

if (!$db) {
    die("Error al abrir la base de datos DBF.");
}

// Obtener el número de registros
$numRecords = dbase_numrecords($db);

// Obtener el número de campos
$numFields = dbase_numfields($db);

// Imprimir los nombres de los campos
echo "Nombres de los campos:\n";
$fieldInfo = dbase_get_header_info($db);
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

