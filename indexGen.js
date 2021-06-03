function UrlExists(url) {
	if ($.get(url) != undefined) {
		return true;
	} else {
		return false;
	}
}

function setSkel() {
	skel = $.get("skeleton.html");
	$("html").html(skel.responseText);
}

function generate() {
	var pageData = $.get("./page.json");
	
	$("title").html = pageData.title;
	$("#content").html = pageData.content;
}

function run() {
	setSkel();
	generate();
	console.log("Hello world!");
}