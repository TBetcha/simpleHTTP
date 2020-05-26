/** @format */

const http = new SimpleHTTP();

//get users
http
	.get('https://jsonplaceholder.typicode.com/users')
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

//user data
const data = {
	name: 'John Dee',
	username: 'johnnn',
	email: 'jdoe@mailme.com',
};

// //create user
http
	.post('https://jsonplaceholder.typicode.com/users')
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

//update user
http
	.put('https://jsonplaceholder.typicode.com/users/2', data)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

// //http delete

http
	.delete('https://jsonplaceholder.typicode.com/users/2')
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
