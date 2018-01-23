// $(document).ready(() => {
// 	$('.sortinate')
// 	  .submit((event) => {
// 	  	const message = {
// 	  		unsorted: $('input[name=unsorted').val()
// 	  	};

// 	  	$.ajax({
// 	  		url: $form.attr('action').
// 	  		data: message,
// 	  		dataType: 'json',
// 	  		type: 'POST',
// 	  	}).done((data) => {
// 	  		console.log(data);
// 	  	});
// 	  	event.preventDefault();
// 	  });
// });

// const $ = require('jquery');

const submitString = () => {

	const url = 'http://localhost:3000/sortinate';
	const unsorted = document.getElementsByClassName('unsorted')[0].value;

	const message = { 
		unsorted,
	};

	fetch(url, {
		method: 'POST',
		body: JSON.stringify(message),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then((response) => {
	  	console.log(`response: ${response}`);
	  	return response.json()
	  })
	  .catch(error => console.log(`Error: ${error}`))
	  .then(result => console.log(`Success: ${JSON.stringify(result)}`));
};

