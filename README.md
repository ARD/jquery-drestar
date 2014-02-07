jquery-drestar
==============

A simple jquery plugin for create star rating control 


Basic use. Simple rating.
```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Rating</title>
<style type="text/css">
ul#star{
	margin:0;
	padding:0;
}
ul#star li { list-style:none;display:inline-block; width:27px; height:25px; background:url(http://andrerainaud.com.br/projetos/jquery-drestar/star.png) no-repeat 0 0; cursor:pointer; }
ul#star li.active { background-position:0 -25px !important; }
</style>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.drestar.js"></script>
<script>
$( document ).ready(function() {
    $('#star').drestar();
});
</script>
</head>
<body>
<form name="form" method="post" action="rating.php">
<ul id="star">
</ul>
<input type="submit" />
</form>
</body>
</html>
```
rating.php
```php
<?php
echo $_POST['star-input-drestar-value'];
?>
```
DEMO: http://andrerainaud.com.br/projetos/jquery-drestar/demo.html

Multiple rating with 6 stars
```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Rating</title>
<style type="text/css">
ul.star{
	margin:0;
	padding:0;
}
ul.star li { list-style:none;display:inline-block; width:27px; height:25px; background:url(http://andrerainaud.com.br/projetos/jquery-drestar/star.png) no-repeat 0 0; cursor:pointer; }
ul.star li.active { background-position:0 -25px !important; }
</style>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="jquery.drestar.js"></script>
<script>
$( document ).ready(function() {
    $('.star').drestar({'total':6});
});
</script>
</head>
<body>
<form name="form" method="post" action="rating2.php">
<ul id="star1" class="star"></ul>
<ul id="star2" class="star"></ul>
<ul id="star3" class="star"></ul>
<input type="submit" />
</form>
</body>
</html>
```

rating2.php

```php
<?php
echo 'Rating 1: ',$_POST['star1-input-drestar-value'],'<br />','Rating 2: ',$_POST['star2-input-drestar-value'],'<br />','Rating 3: ',$_POST['star3-input-drestar-value'];
?>
```
DEMO: http://andrerainaud.com.br/projetos/jquery-drestar/demo2.html

Get value of selected rate
```javascript
$( document ).ready(function() {
    $('.star').drestar({
        'total':6,
        'onClick': function(s){
    	    alert('Rate:'+s);
        }
    });
});
```

5 stars, 3 selected and disabled
```javascript
$( document ).ready(function() {
    $('.star').drestar({
        'total':5,
        'startRate':3,
        'isDisabled':true
    });
});
```
