document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        // Add user message to chatbox
        var messagesDiv = document.getElementById('messages');
        var userMessage = document.createElement('div');
        userMessage.textContent = "You: " + userInput;
        messagesDiv.appendChild(userMessage);

        // Send message to backend
        fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            var botMessage = document.createElement('div');
            botMessage.textContent = "Fire Bot: " + data.response;
            messagesDiv.appendChild(botMessage);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });

        // Clear the input field
        document.getElementById('user-input').value = '';
    }
});
