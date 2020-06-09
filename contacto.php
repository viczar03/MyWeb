<?php
	
	include("conectar.php");

	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$mensaje = $_POST['mensaje'];

	$insertar = "INSERT INTO contacto (nombre_contacto,correo_contacto,mensaje_contacto) VALUES ('$nombre','$correo','$mensaje')";

	$resultado = mysqli_query($conexion, $insertar);

	if (!$resultado) {
		echo "<script>";
		echo "alert('No se puede Enviar el Mensaje');";
		echo "history.back();";
		echo "</script>";
	}else {
		echo "<script>";
		echo "alert('Mensaje Enviado');";
		echo "history.back();";
		echo "</script>";
	}

	mysqli_close($conexion);

?>