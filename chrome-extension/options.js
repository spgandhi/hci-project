
chrome.storage.sync.get('hci-data', function(result){
	print_data(result);
});

function print_data(result){

	html = '<table border="1"><tr><th>Query</th><th>Times Clicked</th><th>Indexes</th><th>Time</th></tr>';

	for (i=0; i<result['hci-data'].length; i++){

		html += '<tr><td>'+result['hci-data'][i]['query']+'</td>';
		html += '<td>'+result['hci-data'][i]['result_index'].length+'</td>';
		html += '<td>'+get_result_index(result['hci-data'][i]['result_index'])+'</td>';
		html += '<td>'+get_result_index(result['hci-data'][i]['click_time'])+'</td>';
		html += '</tr>';
		

	}

	html += '</table>'
	document.write(html);

}

function get_result_index(data){
	
	html = '';
	
	for (j=0; j<data.length; j++) {
		html += data[j];
		html += ', ';
	}

	return html;
}