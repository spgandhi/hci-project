var url = document.URL;

if(url.indexOf("https://www.google.") > -1 && (url.indexOf('#') > -1 || url.indexOf('q=') > -1)){
	$(document).ready(function(){		
		var new_data = new_query();
	})

}


// Global Variable

query_data = {};

replace_data = false;

// Hash Change Update Event
$(window).bind( 'hashchange', function(e) {
  var hash = location.hash;
 	replace_data = false;

 	query_data.click_time = [];
 	query_data.result_index = [];

 	query_data.query = $('.gsfi').val()
 	start_time = new Date();

 	setTimeout(function(){ 
	$('.r a').bind('click',function(){
		
		var main_parent = $(this).parent().parent().parent();
		var number_ = main_parent.index();
		
		query_data.result_index.push(number_);

		
		
		time_diff = new Date() - start_time;	
		query_data.click_time.push(time_diff);

		chrome.storage.sync.get('hci-data',function(result){

			if(Object.keys(result).length==0)
				create_array();
			
			update_data(query_data);

		});
		
	})

}, 1000);
	
});


function new_query(){
	
	start_time = new Date();
	user_query = $('.gsfi').val();

	query_data = {
		query: user_query,
		click_time: [],
		result_index:[] 	
	}

	click_time = new Date();

	click_binding();


}

function click_binding(){

	$('.r a').bind('click',function(){
		
		var main_parent = $(this).parent().parent().parent();
		var number_ = main_parent.index();
		
		query_data.result_index.push(number_);

		
		
		time_diff = new Date() - start_time;	
		query_data.click_time.push(time_diff);

		chrome.storage.sync.get('hci-data',function(result){

			if(Object.keys(result).length==0)
				create_array();
			
			update_data(query_data);

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
		}else{
			result['hci-data'].pop();
			result['hci-data'].push(new_data);
		}

		chrome.storage.sync.set({'hci-data': result['hci-data']});
		output(result['hci-data']);

	})
	
}

function output(all_data){
	// console.log(all_data);	
}