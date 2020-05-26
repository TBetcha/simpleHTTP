/** @format */

class SimpleHTTP {
	//make get request
	async get(url) {
		const response = await fetch(url);

		const resData = await response.json();
		return resData;
	}

	//make post request

	async post(url, data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'appliction/json',
			},
			body: JSON.stringify(data),
		});
	}

	async put(url, data) {
		const response = fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'appliction/json',
			},
			body: JSON.stringify(data),
		});
	}

	//HTTP delete request
	async delete(url) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-type': 'appliction/json',
			},
		});
		const resData = await 'Resouce deleted';
		return resData;
	}
}
