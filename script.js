//your JS code here. If required.
 async function displayMessage() {
	 
      const textInput = document.getElementById('text');
      const delayInput = document.getElementById('delay');
      const outputDiv = document.getElementById('output');
	  outputDiv.innerText = "";
      const message = textInput.value;
      const delay = parseInt(delayInput.value);
    //The await keyword makes the function pause the execution and wait for a resolved promise before it continues
      await new Promise(resolve => setTimeout(resolve, delay));

      outputDiv.textContent = message;
    }

    const btn = document.getElementById('btn');
    btn.addEventListener('click', displayMessage);