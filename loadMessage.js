function createPara() {
	var allPara = document.getElementsByTagName("p");
	var para = document.createElement("p");
	para.innerHTML = "aha";
	para.setAttribute("id","new");
	var element = document.getElementById("show");
	element.insertBefore(para, allPara[1]);
};
function loadXMLDoc(form) {
	createPara();
	document.getElementById("test").innerHTML = "get JB";
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("new").innerHTML=form.msg;
			document.getElementById("new").setAttribute("id", "old");
		}
	};
	xmlhttp.open("GET","/update", true);
	xmlhttp.send();
};
