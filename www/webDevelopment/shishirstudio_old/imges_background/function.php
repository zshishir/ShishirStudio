<?php
/*
* Generate Category wise header menu
* Created By Abir (abirmmu@gmail.com)
* Create Date 15-10-2009
* Param $CON is Link Identifier of Database Server CONNECTION
*/
function categoryHeaderMenu($CONNECTION) {
	$sqlCatHeaderMenu = 'SELECT `id`, `parent_id`, `cat_name`, `page_title` FROM `category` WHERE `level` = 2 and `status` = 1';
	//echo $sqlCatHeaderMenu;
	$queryCatHeaderMenu = mysql_query($sqlCatHeaderMenu, $CONNECTION);
	if(mysql_num_rows($queryCatHeaderMenu) > 0) {
		echo '<ul>';
		while($resultCatHeaderMenu = mysql_fetch_assoc($queryCatHeaderMenu)) {
			echo '<li id="current"><a href="category.php?opt=cat&cid='.$resultCatHeaderMenu['id'].'"><span>'.$resultCatHeaderMenu['cat_name'].'</span></a></li>';
		}
		echo '</ul>';
	}
}

/*
* Generate Top basic header menu
* Created By Abir (abirmmu@gmail.com)
* Create Date 15-10-2009
*/
function topHeaderMenu() {
	echo '<ul>
	<li><a href="index.php"><span><img align="left" src="imges_background/home.png" alt="Home" />Home</span></a></li>
<li><a href="#"><span><img align="left" src="imges_background/comments.png" alt="Post Your Comments" />Comments</span></a></li>
	<li><a href="contact_me.php"><span><img align="left" src="imges_background/contact_me.png" alt="Contact With Me" />Contact Me</span></a></li>
	</ul>';
}

/*
* Generate Middle Tab based menu
* Created By Abir (abirmmu@gmail.com)
* Create Date 15-10-2009
* Param $CON is Link Identifier of Database Server CONNECTION
*/
function middleTabMenu($CON) {
/*	$sqlMiddleTabMenu = "select `home_category`, `description` from `home_category_text` order by `id`";
	$queryMiddleTabMenu = mysql_query($sqlMiddleTabMenu, $CON);
	if(mysql_num_rows($queryMiddleTabMenu) > 0){
		$details = "";
		echo '<ul id="tabMenu">';
		while($resultMiddleTabMenu = mysql_fetch_assoc($queryMiddleTabMenu)){
			echo '<li class="fab"><div class="span">' . $resultMiddleTabMenu["home_category"] . '</div></li>';
			$details .= htmlspecialchars_decode($resultMiddleTabMenu["description"], ENT_NOQUOTES);
		}
		echo '</ul>';
		echo '<div class="boxTop"></div>';
		echo '<div class="boxBody">';	
		echo '<div id="posts" class="show">';
		echo '<ul>';
		echo '<li>';
		echo $details;
	    echo '</ul>';
		echo '</li>';
		echo '</div>';
		echo '</div>';
	}	/*$select_sql = "select `id`, `home_category`, `description` from `home_category_text` order by `id` ";
$sql_query = mysql_query($select_sql, $CON);
if(mysql_num_rows($sql_query) > 0){
		//$details = "";
	echo '<">';
echo '<ul>';
		while($query = mysql_fetch_assoc($sql_query)) {
 echo "<li><a href=\"index.php?shishir=".$query["id"]."\">"
		
		."<span>".$query["home_category"]."</span>"."<span>".$query["description"]."</span>"</a></li>";
		}
		echo '</ul>'; // echo $query["description"];
		echo '</div>';
}



*/


$details = "";
$select_sql = "select * from `home_category_text` order by `id`";
$sql_query = mysql_query( $select_sql, $CON);
if(mysql_num_rows($sql_query) > 0){
	echo '<ul class="ui-tabs-nav">';
	while($cat_name = mysql_fetch_array($sql_query)){
		echo "<li><a href=\"#".$cat_name["id"]."\">"
		."<span>".$cat_name["home_category"]."</span></a></li>";
		$details .= "<div id=\"".$cat_name["id"]."\">".htmlspecialchars_decode($cat_name["description"], ENT_QUOTES)." </div>";
	}
	echo '</ul>';
	
	echo $details;
}


}


/*
* Generate Quick View Right Tab based menu
* Created By Abir (abirmmu@gmail.com)
* Create Date 15-10-2009
* Param $CON is Link Identifier of Database Server CONNECTION
*/
function rightTabMenu($CON) {
	$sqlRightTabMenu = "select `template_home`, `description` from `home_template` where `status` = '1' order by `id`";
	$queryRightTabMenu = mysql_query($sqlRightTabMenu, $CON);
	if(mysql_num_rows($queryRightTabMenu) > 0){
		$details = "";
		while($resultRightTabMenu = mysql_fetch_assoc($queryRightTabMenu)){
			$details .=  '<h3>' . $resultRightTabMenu["template_home"] . '</h3>';
			$details .= '<p>' . htmlspecialchars_decode($resultRightTabMenu["description"], ENT_QUOTES) . '</p>';
		}
		echo $details;
	}
}

/*
* Generate Footer menu
* Created By Abir (abirmmu@gmail.com)
* Create Date 15-10-2009
*/
function footerMenu() {
	echo '<ul><li><a href="index.php">Home </a></li>||<li><a href="category.php?cid=2&scid=118&opt=scat"> My Biography </a></li>||<li><a href="#"> Comments</a></li> ||<li><a href="contact_me.php"> Contact Me</a> </li>||
</ul><a href ="http://www.shishirstudio.com">&copy; 2010 Shishir studio</a>';
}

/*
* Generate Quick View Right Tab based menu
* Created By Abir (abirmmu@gmail.com)
* Create Date 15-10-2009
* Param $CON is Link Identifier of Database Server CONNECTION
*/
function recentComments($CON) {
	$sqlRecentComments = "SELECT `id`, `name`, `comments` FROM `blog` order by `id` desc limit 1";
	$queryRecentComments = mysql_query($sqlRecentComments, $CON);
	if(mysql_num_rows($queryRecentComments) > 0){
		$details = "";
		while($resultRecentComments = mysql_fetch_assoc($queryRecentComments)){
			if(strlen($resultRecentComments["comments"]) > 150) {
				$details .= '<p>' . $resultRecentComments["comments"] . '</p>';
				echo substr($result_object->comments, 0, 90);
				echo "&nbsp;&nbsp;<a href=\"comments.php\">More...</a>";
			} else {
				$details .= '<p>' . $resultRecentComments["comments"] . '</p>';
			}
		}
		echo $details;
	}
}

/*
* Generate Left Menu of Sub Category on Main Category
* Created By Abir (abirmmu@gmail.com)
* Create Date 16-10-2009
* Param $catID is Main Category ID and $CONNECTION is Link Identifier of Database Server CONNECTION
*/
function leftSubCatMenuOnCatID($catID=0, $CONNECTION) {
	if($catID > 0){
		$sqlSCatMenu = 'select `id`, `cat_name` from `category` where `parent_id` = '.$catID.' and `level` = 3 and `status` = 1 order by `cat_name` asc';
		//echo $sqlSCatMenu;
		$querySCatMenu = mysql_query($sqlSCatMenu, $CONNECTION);
		if(mysql_num_rows($querySCatMenu) > 0){
			while($resultSCatMenu = mysql_fetch_assoc($querySCatMenu)){
				$sqlSCatMenuChild = "select `id`, `cat_name` from `category` where `parent_id` = ".$resultSCatMenu["id"]." and `status` = 1 order by `cat_name` asc";
				$querySCatMenuChild = mysql_query($sqlSCatMenuChild, $CONNECTION);
				echo '<li><a href="category.php?cid=' . $catID . '&scid=' . $resultSCatMenu["id"] . '&opt=scat">'. $resultSCatMenu["cat_name"] . '</a>';
				if(mysql_num_rows($querySCatMenuChild) > 0) {
					echo '<ul>';		
					while($resultSCatMenuChild = mysql_fetch_assoc($querySCatMenuChild)){	
						echo '<li><a href="category.php?cid=' . $catID . '&scid=' . $resultSCatMenu["id"] . '&ccid=' . $resultSCatMenuChild["id"] . '&opt=ccat">' . $resultSCatMenuChild["cat_name"] . '</a></li>';
					}
					echo '</ul>';
				}
				echo '</li>';
			}
		}
	}
}


/*
* Generate Content List On Main Category Wise ID
* Created By Abir (abirmmu@gmail.com)
* Create Date 16-10-2009
* Parameter are Main Category ID ($catID) and CONNECTION Resource ($CONNECTION)
*/
function viewContentListOnMainCategoryID ($catID=0, $CONNECTION) {
	if($catID > 0) {
		include('paging.php');	//include your code to pagging
		$sqlSCatBody = "select `category_item_main`.`item_id`, `category_item_main`.`category_id`, `child_cat_item`.`item_title`, `child_cat_item`.`description_one`, `child_cat_item`.`description_two`, `child_cat_item`.`downloads` from `category_item_main` inner join `child_cat_item` on `child_cat_item`.`item_id` = `category_item_main`.`item_id` and `child_cat_item` . `status` = 1 where `category_item_main`.`category_id` = " . $catID . " order by `category_item_main` . `ordering` asc";
		//echo "$sqlSCatBody<br>";
		$querySCatBody = mysql_query($sqlSCatBody, $CONNECTION);
		$total_pages = mysql_num_rows($querySCatBody);
		if($total_pages > 0){

			/* Setup vars for query. */
			$targetpage = "category.php"; 	//your file name  (the name of this file)
			$limit = 2; 								//how many items to show per page
			$page = $_GET['page'];
			if($page) 
				$start = ($page - 1) * $limit; 			//first item to display on this page
			else
				$start = 0;								//if no page var is given, set start to 0
			$param = '&opt=cat&cid='.$catID;
			/* Get data. */
			$sqlSCatBody1 = $sqlSCatBody . " LIMIT $start, $limit";
			$querySCatBody1 = mysql_query($sqlSCatBody1, $CONNECTION);
			
			//=============================
			while($resultSCatBody = mysql_fetch_assoc($querySCatBody1)) {
				//echo '<div class="date">Aug <span>11</span></div>
				echo '<div class="right_con">';	
				//<div class="picture">
				//<div class="picture1"><img src="imges_background/flower200.jpg" width="180" height="120" /></div>
				//</div>';
				echo '<div class="description">';
				echo htmlspecialchars_decode($resultSCatBody['description_one'], ENT_QUOTES);
				
				//echo '<div class="destitle">'.$resultSCatBody['item_title'].'</div>
				//<div class="comments_image"><img src="imges_background/comments.gif" width="44" height="46" /></div>
				//<div class="description_text">'.htmlspecialchars_decode($resultSCatBody['description_one'], ENT_QUOTES).'</div>';
				
							echo '<div class="view_download">';
				if($resultSCatBody['downloads'] == '1')
					//echo 'Downloads | ';
				echo '<a href="category.php?cid='.$catID.'&scid='.$scatID.'&iid='.$resultSCatBody['item_id'].'&opt=diview"><img src="imges_background/view.jpg" alt="View Deatials" border="0" /></a>';
				
				echo $resultSCatBody['download_link'];echo '</div>';
				echo '</div>';
				echo '</div>';
	
				
				//echo '</div>';//&scid='.$_GET["scid"].'
			}//End While
			echo '<!-- Paging Start -->';
			echo phpPagingNavigation($total_pages, $page, $limit, $targetpage, $param);
			echo '<!--Paging End -->';
	   }//End Num Rows IF
	} else {
		echo '';
	}
}




/*
* Generate Content List On Main Category Wise ID
* Created By Abir (abirmmu@gmail.com)
* Create Date 16-10-2009
* Parameter are Main Category ID ($catID) and CONNECTION Resource ($CONNECTION)
*/
function viewContentListOnSubCategoryID ($catID=0, $scatID=0, $CONNECTION) {
	if($catID > 0 && $scatID > 0) {
		include('paging.php');	//include your code to pagging
		$sqlSubCatBody = "select `category_item_sub`.`item_id`, `category_item_sub`.`category_id`, `child_cat_item`.`item_title`, `child_cat_item`.`description_one`, `child_cat_item`.`download_link`, `child_cat_item`.`description_two`,`child_cat_item`.`downloads` from `category_item_sub` inner join `child_cat_item` on `child_cat_item`.`item_id` = `category_item_sub`.`item_id` and `child_cat_item` . `status` = 1 where `category_item_sub`.`category_id` = " . $scatID . " order by `category_item_sub` . `ordering` asc";
		//echo "$sqlSubCatBody<br>";
		$querySCatBody = mysql_query($sqlSubCatBody, $CONNECTION);
		$total_pages = mysql_num_rows($querySCatBody);
		if($total_pages > 0){
			/* Setup vars for query. */
			$targetpage = "category.php"; 	//your file name  (the name of this file)
			$limit = 2; 								//how many items to show per page
			$page = $_GET['page'];
			if($page) 
				$start = ($page - 1) * $limit; 			//first item to display on this page
			else
				$start = 0;								//if no page var is given, set start to 0
			$param = '&opt=scat&cid='.$catID . '&scid='.$scatID;
			/* Get data. */
			$sqlSubCatBody1 = $sqlSubCatBody . " LIMIT $start, $limit";
			$querySCatBody1 = mysql_query($sqlSubCatBody1, $CONNECTION);
			
			while($resultSCatBody = mysql_fetch_assoc($querySCatBody1)) {
				//echo '<div class="date">Aug <span>11</span></div>
				echo '<div class="right_con">';	
				//<div class="picture">
				//<div class="picture1"><img src="imges_background/flower200.jpg" width="180" height="120" /></div>
				//</div>';
				echo '<div class="description">';
				echo htmlspecialchars_decode($resultSCatBody['description_one'], ENT_QUOTES);
				
				//echo '<div class="destitle">'.$resultSCatBody['item_title'].'</div>
				//<div class="comments_image"><img src="imges_background/comments.gif" width="44" height="46" /></div>
				//<div class="description_text">'.htmlspecialchars_decode($resultSCatBody['description_one'], ENT_QUOTES).'</div>';
				
				echo '<div class="view_download">';
				if($resultSCatBody['downloads'] == '1')
					//echo 'Downloads | ';
				echo '<a href="category.php?cid='.$catID.'&scid='.$scatID.'&iid='.$resultSCatBody['item_id'].'&opt=diview"><img src="imges_background/view.jpg" border="0" alt="View Deatials" /></a>';
				
				echo $resultSCatBody['download_link'];echo '</div>';
				echo '</div>';
				echo '</div>';
	
				
				//echo '</div>';//&scid='.$_GET["scid"].'
			}//End While
			echo '<!-- Paging Start -->';
			echo phpPagingNavigation($total_pages, $page, $limit, $targetpage, $param);
			echo '<!--Paging End -->';
	   }//End Num Rows IF
	} else {
		echo '';
	}
}


/*
* Generate Content List On Child Category Wise ID
* Created By Abir (abirmmu@gmail.com)
* Create Date 16-10-2009
* Parameter are Main Category ID ($catID), Sub Category ID ($scatID), Child Category ID ($ccatID) and CONNECTION Resource ($CONNECTION)
*/
function viewContentListOnChildCategoryID ($catID=0, $scatID=0, $ccatID=0, $CONNECTION) {
	if($catID > 0 && $scatID > 0 && $ccatID > 0) {
		include('paging.php');
		$sqlChildCatBody = "select `category_item_child`.`item_id`, `category_item_child`.`category_id`, `child_cat_item`.`item_title`, `child_cat_item`.`description_one`, `child_cat_item`.`description_two`, `child_cat_item`.`downloads` from `category_item_child` inner join `child_cat_item` on `child_cat_item`.`item_id` = `category_item_child`.`item_id` and `child_cat_item` . `status` = 1 where `category_item_child`.`category_id` = " . $ccatID . " order by `category_item_child` . `ordering` asc";;
		//echo "$sqlChildCatBody<br>";
		$querySCatBody = mysql_query($sqlChildCatBody, $CONNECTION);
		
	$total_pages = mysql_num_rows($querySCatBody);
		if($total_pages > 0){
			/* Setup vars for query. */
			$targetpage = "category.php"; 	//your file name  (the name of this file)
			$limit = 2; 								//how many items to show per page
			$page = $_GET['page'];
			if($page) 
				$start = ($page - 1) * $limit; 			//first item to display on this page
			else
				$start = 0;								//if no page var is given, set start to 0
			$param = '&opt=ccat&cid='.$catID . '&scid='.$scatID . '&ccid='.$ccatID;
			/* Get data. */
			$sqlChildCatBody1 = $sqlChildCatBody . " LIMIT $start, $limit";
			$queryChildCatBody1 = mysql_query($sqlChildCatBody1, $CONNECTION);
			
			while($resultSCatBody = mysql_fetch_assoc($querySCatBody)) {
				//echo '<div class="date">Aug <span>11</span></div>
						echo '<div class="right_con">';	
							//<div class="picture">
							//	<div class="picture1"><img src="imges_background/flower200.jpg" width="180" height="120" /></div>
							//</div>
						echo '<div class="description">';
							//echo htmlspecialchars_decode($resultSCatBody['description_one'], ENT_QUOTES);
								//<div class="destitle">'.$resultSCatBody['item_title'].'</div>
								//<div class="comments_image"><img src="imges_background/comments.gif" width="44" height="46" /></div>
								//<div class="description_text">'.htmlspecialchars_decode($resultSCatBody['description_one'], ENT_NOQUOTES).'</div><div class="view_download">';
								if($resultSCatBody['downloads'] == '1')
									echo 'Downloads | ';
								echo '<a href="category.php?cid='.$catID.'&scid='.$scatID.'&ccid='.$ccatID.'&iid='.$resultSCatBody['item_id'].'&opt=diview"><img align="left" src="imges_background/view.jpg" alt="View Deatials" border="0" /></a></div>
							
						</div>';//&scid='.$_GET["scid"].'
			}//End While
			echo '<!-- Paging Start -->';
			echo phpPagingNavigation($total_pages, $page, $limit, $targetpage, $param);
			echo '<!--Paging End -->';
	   }//End Num Rows IF
	} else {
		echo '';
	}
}

/*
* Generate Content List On Main Category Wise ID
* Parameter are Main Category ID ($catID) and CONNECTION Resource ($CONNECTION)
*/
function viewContentDetailsOnID ($catID=0, $itemID=0, $CONNECTION) {
	if($catID > 0 && $itemID > 0) {
		$sqlContentDetails = "select `item_id`, `item_title`, `description_one`, `description_two`, `downloads` from `child_cat_item` where `item_id` = '".$itemID."' and `status` = 1 limit 1";
		//echo "$sqlContentDetails<br>";
		$queryContentDetails = mysql_query($sqlContentDetails, $CONNECTION);
		if(mysql_num_rows($queryContentDetails) == 1){
			$resultContentDetails = mysql_fetch_array($queryContentDetails);
			
			echo '<div class="description_title">'.$resultContentDetails['item_title'].'</div>
			<div class="details_description">'.htmlspecialchars_decode($resultContentDetails['description_two'], ENT_QUOTES).'</div>
			</div>';
		}
	} else {
		echo '';
	}
}
?>