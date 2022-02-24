// JavaScript Document
function directHome() {
	$('#headerText').text(titleArray[0]);

	$('.headerIcons').hide();
	$('#footer').show("slide", { direction: "down" }, 500);

	$('#page-'+intCurrentPage).hide("slide", { direction: "right" }, 500);
	$('#page-0').show("slide", { direction: "left" }, 500);

	intCurrentPage = 0;
}



function navigateForward(getPage,getParam) {
	$('#headerText').text(titleArray[getPage]);

	if (getPage==1){
		drawDeptPage(getParam);
	} else if (getPage==2) {
		drawCatPage(getParam);
	} else if (getPage==3) {
		drawProductPage(getParam);
	}
	
	if (intCurrentPage == 0) {
		$('.headerIcons').show();
		$('#footer').hide("slide", { direction: "down" }, 500);
	}

	$('#page-'+intCurrentPage).hide("slide", { direction: "left" }, 500);
	$('#page-'+getPage).show("slide", { direction: "right" }, 500);

	navArray.push(intCurrentPage);
	intCurrentPage = getPage;
}

function navigateBackward() {
	var strNavBack = navArray.pop();

	$('#headerText').text(titleArray[strNavBack]);

	if (strNavBack == 0) { //If navTo page is 0, hide header icons
		$('.headerIcons').hide();
		$('#footer').show("slide", { direction: "down" }, 500);
	}

	$('#page-'+intCurrentPage).hide("slide", { direction: "right" }, 500);
	$('#page-'+strNavBack).show("slide", { direction: "left" }, 500);

	intCurrentPage = strNavBack;
}
