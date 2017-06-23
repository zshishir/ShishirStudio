<?php 
require_once("connection/include.php");
require_once("function.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $title?></title>
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<STYLE TYPE=text/css>@import url(css_main/default.css);</STYLE>
<STYLE TYPE=text/css>@import url(tab_menu_css/tab_ui.css);</STYLE>
<STYLE TYPE=text/css>@import url(css_main/according.css);</STYLE>
<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="js/according.js"></script>
<script type="text/javascript" src="js_tab_menu/tab_sprinkle.js"></script>
<script type="text/javascript" src="js_tab_menu/jquery_tab_menu.js"></script>
<script src="js_tab_menu/tab_uil.js" type="text/javascript"></script>
<script src="js_tab_menu/tab_ui.js" type="text/javascript"></script>
<script src="swf/AC_RunActiveContent.js" type="text/javascript"></script> 
        <script type="text/javascript">
            $(function() {
                $('#rotate > ul').tabs({ fx: { opacity: 'toggle' } }).tabs('rotate', 2000);
            });
        </script> 
     
</head>
<body>
<div id="body_container">
<div class="flash">
<script language="JavaScript" type="text/javascript">
	if (AC_FL_RunContent == 0) {
		alert("This page requires AC_RunActiveContent.js.");
	} else {
		AC_FL_RunContent( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0','width','870','height','120','id','nav','align','middle','src','swf/nav','quality','high','wmode','transparent','bgcolor','#ffffff','name','nav','allowscriptaccess','sameDomain','allowfullscreen','false','pluginspage','http://www.macromedia.com/go/getflashplayer','movie','swf/nav' ); //end AC code
	}
  </script>
  <noscript>
  <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="870" height="120" id="nav" align="middle">
    <param name="allowScriptAccess" value="sameDomain" />
    <param name="allowFullScreen" value="false" />
    <param name="movie" value="swf/nav.swf" />
    <param name="quality" value="high" />
    <param name="wmode" value="transparent" />
    <param name="bgcolor" value="#ffffff" />
    <embed src="swf/nav.swf" quality="high" wmode="transparent" bgcolor="#ffffff" width="870" height="120" name="nav" align="middle" allowscriptaccess="sameDomain" allowfullscreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />  
</object>
  </noscript>
</div>
	<!-- Header Start -->
  <div class="header">
		<div class="header_top">
			<div class="botton_header_top">
				<div id="header_nav_toolbar"><?php topHeaderMenu();?></div>
			</div>
		</div>
	
		<!--<div class="header_top_but">
			<div id="tabs4"><?/*php echo categoryHeaderMenu($CONNECTION);*/?></div>
	  </div> -->

  </div>
	<!-- Header Close -->
	
	<div class="fake">
		<div class="white_bg">
			<!-- Flash or Image Banner Start -->
			
				<div class="flash_banner_fake"></div>
                <div id="middle_banner">
				<div class="flash_banner"><img src="imges_background/banner_images.jpg" width="893" height="180" align="middle" /></div>
			</div>

			<div id="contaner">
				<!-- left Box -->
				<div class="left">
					<div id="tabvanilla" class="widget">
						<?php echo middleTabMenu($CONNECTION);?>
				
					</div>
				</div>
			   
			   <!-- right Box -->
			   <div class="right">   
				   <div class="accordion"><?php echo rightTabMenu($CONNECTION);?></div>
			   </div>
			</div>
		</div>
		
		<!-- Footer -->
		<div id="footer">
			<div id="contaner">
				
				<!-- Google Ads -->
				<div class="righttext">
					<div id="googlead_header">Add By Google</div>
					<div id="googlead">d</div>
				</div>
				
				<!-- Recent Comments -->
				<div class="lefttext">
					<div id="comments_heading">Recent Comments</div>
					<div id="comments_text"><?php echo recentComments($CONNECTION);?></div> 
				</div>
				<!-- Footer menu -->
				<div id="footer_menu"><?php echo footerMenu();?></div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
