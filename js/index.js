$(document).ready(function() {
	$('#courses div').click(function() {
		var courseName = $(this).html().split("-"); // gets the value without the 'T(n)'; the JS equivalent is .innerHTML();
		localStorage.setItem("course",courseName[1]); // localStorage is defined within HTML5 and JS. the data is being save as a key-value pair.
		window.location = "form.html" ; // 'window' is a pre-defined object of JS
	});
});