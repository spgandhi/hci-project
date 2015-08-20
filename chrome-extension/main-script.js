// Global Variable

data = {};
replace_data = false;

// Hash Change Update Event
$(window).bind( 'hashchange', function(e) {
  var hash = location.hash;
 	replace_data = false;
 	data = {};
 	alert(data);
 	get_data("hash");
});

var url = document.URL;
var pageTitle = document.title;


// // If only google.com
// if(url.indexOf("https://www.google.") > -1 && (url.indexOf('#') == -1 && url.indexOf('q=') == -1)){
// 	$(document).ready(function(){
// 		only_get();	
// 	})
	
// }

if(url.indexOf("https://www.google.") > -1 && (url.indexOf('#') > -1 || url.indexOf('q=') > -1)){
	
	$(document).ready(function(){		
		var new_data = get_data("nothing");
	})

}


// function only_get(){
// 	chrome.storage.sync.get('hci-data',function(result){
		
// 		var old_date = result['hci-data'];

// 		if(isNaN(old_data)){
// 			update_data(0);
// 		}else{
// 			output(count);
// 		}
// 	});
// }

function get_data(what){
	

	start = new Date();

	var query_ = $('.gsfi').val();

	if(what=="hash"){
		// alert("hash");
		// alert(replace_data);
		// alert(start);
		// alert(query_);
	}

	data = {
		query: query_,
		time: [],
		number:[] 	
	}

	if(what=="hash"){
		console.log(data);
	}
	// console.log(data);

	$('.r a').bind('click',function(){
		if(what=="hash"){
		console.log("clicked");
	}

		var main_parent = $(this).parent().parent().parent();
		var number_ = main_parent.index();
		
		data.number.push(number_);

		stop = new Date();
		// console.log('Diff = ' + (stop-start) );
		diff = stop-start;	
		data.time.push(diff);

		chrome.storage.sync.get('hci-data',function(result){

			if(Object.keys(result).length==0){
				create_array();
				alert();
			}

			update_data(data);

		});
		
	})
}

function create_array(){
	chrome.storage.sync.set({'hci-data': []});
}

function update_data(new_data){	
	
	current_data = chrome.storage.sync.get('hci-data', function(result){

		if(replace_data==false){
			result['hci-data'].push(new_data);
			replace_data = true;
		}
		else{
			result['hci-data'].pop();
			result['hci-data'].push(new_data);
		}
		chrome.storage.sync.set({'hci-data': result['hci-data']});
		output(result['hci-data']);
	})
	
}	

//My Content On Page
function output(count){
	console.log(count);
	// Getting URLs
	// var options_page_URL = chrome.extension.getURL('options.html');
	// var gear_image_URL = 'http://simpleicon.com/wp-content/uploads/gear-2.png';
	

	// Removing previous instance of display
	// $('.googly').remove();
	

	// Creating New Instance
	// var append = '<div class="googly">Total Google Search : ' + count;
	// var append = append + '<img class="options-link" style="width:20px;cursor: pointer;position:relative; top:4px; left:15px;" src="'+gear_image_URL+'"></div>';
	

	// Appending the Instance
	// $(append).prependTo('body');


	// Script to open options page upon click
	// $( ".options-link" ).click(function() {
		// chrome.runtime.sendMessage({greeting: "OpenPage", filename:"options.html"}, function(response) {
			// console.log(response);
		// });
	// });


	// Appling CSS to the 
	$('.googly').css({
		'position': 'fixed',
		'right': 0,
		'width': '200px',
		'margin-right': '5px',
		'z-index': '100101010101',
		'background': 'rgb(240,240,240)',
		'font-size': '14px',
		'padding': '8px',
		'bottom': 0,
		'font-family': '"Jura", sans-serif',
		'color': 'rgb(65,65,65)',
		'font-weight': 'bolder',
		'border-radius': '4px',
	});



	$('.button').css({
		'background' : 'aquamarine',
		'width': '100%',
		'padding-top': '10px',
		'text-align': 'center',
		'margin': 0,
		'transition': 'all 0.3s ease-in-out'
	});
	
}



