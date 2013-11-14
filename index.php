<?php
	$array01 = array('01/01.jpg', '01/02.jpg', '01/03.jpg', '01/04.jpg');
	$array02 = array('02/01.jpg', '02/02.jpg', '02/03.jpg', '02/04.jpg');
	$array03 = array('03/01.jpg', '03/02.jpg', '03/03.jpg', '03/04.jpg');
	$array04 = array('04/01.jpg', '04/02.jpg', '04/03.jpg', '04/04.jpg', '04/05.jpg');
	$array05 = array('05/01.jpg', '05/02.jpg', '05/03.jpg');
	$array06 = array('06/01.jpg', '06/02.jpg');
	$array07 = array('07/01.jpg', '07/02.jpg', '07/03.jpg', '07/04.jpg');
	$array08 = array('08/01.jpg', '08/02.jpg', '08/03.jpg', '08/04.jpg');
	$array09 = array('09/01.jpg', '09/02.jpg', '09/03.jpg', '09/04.jpg');
	$array10 = array('10/01.jpg', '10/02.jpg', '10/03.jpg', '10/04.jpg', '10/05.jpg', '10/06.jpg', '10/07.jpg', '10/08.jpg', '10/09.jpg', '10/10.jpg');
	$select = $_POST['styleSelect'];
	if ( $select ==  '01' ) {
		$array = $array01;
	} elseif ( $select == '02' ) {
		$array = $array02;
	} elseif ( $select == '03' ) {
		$array = $array03;
	} elseif ( $select == '04' ) {
		$array = $array04;
	} elseif ( $select == '05' ) {
		$array = $array05;
	} elseif ( $select == '06' ) {
		$array = $array06;
	} elseif ( $select == '07' ) {
		$array = $array07;
	} elseif ( $select == '08' ) {
		$array = $array08;
	} elseif ( $select == '09' ) {
		$array = $array09;
	} elseif ( $select == '10' ) {
		$array = $array10;
	}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1">
	<title>Document</title>
	<link rel="stylesheet" href="css/all.css">
</head>
<body>
<div class="wrapper jsc-animation-page" id="jsi-wrapper">
	<header class="header">
		<div class="header-inner"><p>Header</p></div>
		<p class="btn-header btn-header-left"><a href="javascript:void(0);" class="btn-open jsc-open-side jsc-open-left">Left</a></p>
		<p class="btn-header btn-header-right"><a href="javascript:void(0);" class="btn-open jsc-open-side jsc-open-right">Right</a></p>
	</header>
	<div class="contents" id="jsi-contents">
		<section class="contents-inner">
			<h1 class="page-head">PAGE HEAD</h1>
			<section class="sec">
				<h2 class="sec-head">Section HeadLine</h2>
				<p class="sec-inner">
					<form action="/originals/bar_select_swipe/index.php" method="post" id="styleSelectForm" class="styleSelectForm">
					<select name="styleSelect" id="styleSelect" class="jsc-style-select">
						<option value="" selected>選択して下さい</option>
						<option value="01">01 空</option>
						<option value="02">02 海</option>
						<option value="03">03 山</option>
						<option value="04">04 コーヒー</option>
						<option value="05">05 パン</option>
						<option value="06">06 ラーメン</option>
						<option value="07">07 餃子</option>
						<option value="08">08 かつ丼</option>
						<option value="09">09 ブーツ</option>
						<option value="10">10 鬼</option>
					</select>
					</form>
				</p>
			</section>
			<section class="sec">
				<h2 class="sec-head">Section HeadLine</h2>
				<div class="sec-inner">
					<div class="jsc-carousel-container carousel-container">
						<div class="jsc-carousel carousel">
							<ul class="carousel-list">
								<?php
								foreach ($array as $val) {
									echo '<li><img src="img/'.$val.'"></li>';
								}
								?>
							</ul>
							<a href="javascript:void(0);" class="jsc-prev btn-prev btn-carousel">＜</a>
							<a href="javascript:void(0);" class="jsc-next btn-next btn-carousel">＞</a>
						</div>
					</div>
				</div>
			</section>
			<section class="sec">
				<h2 class="sec-head">Section HeadLine</h2>
				<p class="sec-inner"><a href="//yahoo.co.jp" class="jsc-location">Hello World! This is Section's Inner. And This is Dummy Text. This is Dummy Text. This is Dummy Text. This is Dummy Text. This is Dummy Text. This is Dummy Text. This Contents is for SideBar JavaScript. </a></p>
			</section>
			<section class="sec">
				<h2 class="sec-head">Section HeadLine</h2>
				<p class="sec-inner">Hello World! This is Section's Inner. And This is Dummy Text. This is Dummy Text. This is Dummy Text. This is Dummy Text. This is Dummy Text. This is Dummy Text. This Contents is for SideBar JavaScript. </p>
			</section>
		</section>
	</div>
	<!-- <div class="side side-left jsc-side jsc-side-left">
		<div class="side-inner">
			<h4 class="side-head">Left Side</h4>
			<ul class="side-menu">
				<li><a href="#">Left Menu 1</a></li>
				<li><a href="#">Left Menu 2</a></li>
				<li><a href="#">Left Menu 3</a></li>
				<li><a href="#">Left Menu 4</a></li>
				<li><a href="#">Left Menu 5</a></li>
			</ul>
			<p class="btn-side btn-side-left"><a href="javascript:void(0);" class="btn-close jsc-close-side">Close</a></p>
		</div>
	</div>
	<div class="side side-right jsc-side jsc-side-right">
		<div class="side-inner">
			<h4 class="side-head">Right Side</h4>
			<ul class="side-menu">
				<li><a href="#">Right Menu 1</a></li>
				<li><a href="#">Right Menu 2</a></li>
				<li><a href="#">Right Menu 3</a></li>
				<li><a href="#">Right Menu 4</a></li>
				<li><a href="#">Right Menu 5</a></li>
			</ul>
			<p class="btn-side btn-side-right"><a href="javascript:void(0);" class="btn-close jsc-close-side">Close</a></p>
		</div>
	</div> -->
</div>
<script src="/jquery/jquery.js"></script>
<!--<script src="js/sidebar.js"></script>-->
<script src="js/style_select.js"></script>
<script src="js/jquery.touchSwipe.js"></script>
<script src="js/swipe.js"></script>
<script src="js/loadAnimation.js"></script>
<script>
	$(function () {
		var $select = $('.jsc-style-select');
		$select.styleSelect({
			// click or mouseover
			mouseEventType : 'click',

			// fade or slide
			animationType : 'fade',

			// アニメーション速度
			animationDuration : 200
		});

		$('.jsc-animation-page').loadAnimation({
			inAnimation: true,
			// IN Effect : fadeIn', 'scaleFromOver', 'scaleFromSmall', 'slideToLeft', 'slideToRight'
			inAnimationEffect: "slideToRight",

			outAnimation: true,
			// OUT Effect : fadeOut', 'scaleToOver', 'scaleToSmall', 'slideToLeft', 'slideToRight'
			outAnimationEffect: "slideToLeft",

			// AnimationDuration is You Set Transition's Duration on Your CSS. 
			animationDuration: 500,

			// This Name like a Css Selecter
			submitFormName: ".styleSelectForm",
			submitName: ".style-option",
			locationName: ".jsc-location"
		});
	});
</script>
</body>
</html>