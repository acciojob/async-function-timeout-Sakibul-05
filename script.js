//your JS code here. If required.
 async function displayMessage() {
      const textInput = document.getElementById('text');
      const delayInput = document.getElementById('delay');
      const outputDiv = document.getElementById('output');

      const message = textInput.value;
      const delay = parseInt(delayInput.value)*1000;

      // if (!message || !delay) {
      //   outputDiv.textContent = 'Please enter a message and a delay.';
      //   return;
      // }

      // outputDiv.textContent = 'Waiting...';

      await new Promise(resolve => setTimeout(resolve, delay));

      outputDiv.textContent = message;
    }

    const btn = document.getElementById('btn');
    btn.addEventListener('click', displayMessage);