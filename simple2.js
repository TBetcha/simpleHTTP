/** @format */

class SimpleHTTP {
	//make get request
	get(url) {
		//wrap everything in a promise
		return new Promise((resolve, reject) => {
			fetch(url)
				.then((res) => res.json())
				//pass in resolve because this is on success
				.then((data) => resolve(data))
				//pass in reject because this is on failure
				.catch((err) => reject(err));
		});
	}

	//make post request

	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'appliction/json',
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'appliction/json',
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	//HTTP delete request
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'DELETE',
				headers: {
					'Content-type': 'appliction/json',
				},
			})
				.then((res) => res.json())
				.then(() => resolve('Resource deleted'))
				.catch((err) => reject(err));
		});
	}
}
