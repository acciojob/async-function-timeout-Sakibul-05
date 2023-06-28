//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");
let output = document.getElementById("output");
async function showMessage(){
	// await return new Promise((resolve,reject)=>{
	// 	if(text.value){
	// 		setTimeout(()=>{
	// 			resolve(text.value);
	// 		},delay*1000)
	// 	}
	// })

	setTimeout(()=>{
		output.innerText = text.value;
	},delay.value*1000)
}
 
submit.addEventListener("click", showMessage);