<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script>
  function getrepo()
  { var query=new XMLHttpRequest();
  if (this.readyState==4 && this.status==200)
  {console.log(this.response.text);
  query.open("GET","auth.php?name=sayed",true);
  query.send();
  }
  </script>
</head>
<body>

 <button onclick="getrepo()">GET NAME</button>
 <div id="show"></div>
 

</body>
</html>
