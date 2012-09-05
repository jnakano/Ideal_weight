


/*
if ( $("radiobuttons1").attr("selected",true); ) {
alert("COOOL!!");
} */

/*
if(document.getElementById('radio1').checked) {
	alert("it works!");

} */

// If Male is selected
/*
$('#radio1').click(function() {
   if($('#radio1').is(':checked')) {
   			alert("you selected male");
   		
    }
});

//If Female is selected
$('#radio2').click(function() {
   if($('#radio2').is(':checked')) {
   			alert("you selected female");
   		
    }  
});   */

/*
function check() {

if ( $('#choice').attr('checked', false) ){

alert("choose gender");

}    
	
}
*/

function notEmpty() {

var height = document.getElementById("myheightft").value;

wkg = (height - 150) * 0.75 + 50;






if(height.value !="" && $('#radio1').is(':checked') ){
	
	idealweightMale();
	//alert("YES!");
	}
	
else if (height.value !="" && $('#radio2').is(':checked') ){

	idealweightFemale();
	//alert("female");
	
}

else if (height.value !="") {
		alert("Please enter height");
		
		}
	
}




function idealweightMale() {

var inch = document.getElementById("myheightin").value;
var cm = inch * 2.54;

var heightft = document.getElementById("myheightft").value;
var height = (heightft * 30.48) + cm;



var wkg = (height - 150) * 0.75 + 50;
var wlbs = wkg * 2.20462262;
var round = Math.floor(wlbs);
document.getElementById('ideal').innerHTML= round + "lbs"; <!-- This is the function I wanted to use to input the number dynamically -->
}

function idealweightFemale() {

var inch = document.getElementById("myheightin").value;
var cm = inch * 2.54;


var heightft = document.getElementById("myheightft").value;
var height = (heightft*30.48) + cm;

var wkg = (height - 150 ) * 0.6 + 50;
var wlbs = wkg * 2.20462262;
var round = Math.floor(wlbs);
document.getElementById('ideal').innerHTML= round + "lbs"; <!-- This is the function I wanted to use to input the number dynamically -->
}
