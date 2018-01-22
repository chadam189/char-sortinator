$(document).ready(() => {
	$('.sortinate')
	  .submit((event) => {
	  	const message = {
	  		unsorted: $('input[name=unsorted').val()
	  	};

	  	$.ajax({
	  		url: $form.attr('action').
	  		data: message,
	  		dataType: 'json',
	  		type: 'POST',
	  	}).done((data) => {
	  		console.log(data);
	  	});
	  	event.preventDefault();
	  });
});