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
	})
	  .then((response) => response.json())
	  .catch(error => console.log(`Error: ${error}`))
	  .then((sorted) => {
	  	addNewSubmission(unsorted, sorted);

      document.getElementsByClassName('unsorted')[0].value = '';

	  });
};

const addNewSubmission = (unsorted, sorted) => {
	const table = document.getElementById('submissions');
  const newSubmission = table.insertRow(-1);
  const input = newSubmission.insertCell(0);
  const output = newSubmission.insertCell(1);
	input.innerHTML = unsorted;
  output.innerHTML = sorted;
};