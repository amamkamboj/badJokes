// Get https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// Using promise we will fetch the data
// const generateJoke = () => {
// 	fetch('https://icanhazdadjoke.com',setHeader)
// 	.then((res)=> res.json() )
// 	.then((data)=>{
		
// 		jokes.innerHTML=data.joke;
// 	}).catch((error)=>{
// 		console.log(error);
// 	})
// }
// Using async await

const generateJoke = async () => {

	try{
		const setHeader = {
			headers:{
			Accept:'application/json'
			}
		}

	const res = await fetch('https://icanhazdadjoke.com',setHeader);
	const data = await res.json();
	jokes.innerHTML=data.joke;	
	
	}catch(err){
		console.log(`The error is ${err}`);
	}
}
generateJoke();
jokeBtn.addEventListener('click',generateJoke);