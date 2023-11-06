<?php  
session_start();  
?>  
<html>  
<body>  
<?php  
echo "User is: ".$_SESSION["user"]. " User role of this person is: ".$_SESSION["type"];  
?>  
</body>  
</html>  