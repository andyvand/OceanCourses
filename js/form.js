$(document).ready(function() {
	var courseName = localStorage.getItem("course"); // retrieves the value associated with the key "courses" in localStorage;
	$('#selectedCourse').html(courseName); // sets the value of the '#selectedCourse' element to the same as var courseName;
});