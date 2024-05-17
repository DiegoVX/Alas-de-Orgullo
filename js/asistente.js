
    // Función para alternar la visibilidad del asistente virtual
    function toggleChatbot() {
        var chatbotBody = document.getElementById('chatbotBody');
        if (chatbotBody.style.display === 'none' || chatbotBody.style.display === '') {
            chatbotBody.style.display = 'block';
        } else {
            chatbotBody.style.display = 'none';
        }
    }

    // Función para enviar un mensaje
    function sendMessage() {
        var input = document.getElementById('chatbotInput');
        var message = input.value.trim();
        if (message) {
            addMessage('user', message);
            input.value = '';

            // Respuesta del asistente virtual
            respondToMessage(message);
        }
    }

    // Función para añadir un mensaje al asistente virtual
    function addMessage(sender, text) {
        var chatbotBody = document.getElementById('chatbotBody');
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        var messageText = document.createElement('p');
        messageText.textContent = text;
        messageElement.appendChild(messageText);
        chatbotBody.appendChild(messageElement);
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }

    // Función para que el asistente virtual responda a un mensaje
    function respondToMessage(message) {
        // Ejemplo simple de respuestas predefinidas
        var response;
        switch (message.toLowerCase()) {
            case 'hola':
                response = '¡Hola! ¿En qué puedo ayudarte?';
                break;
            case 'adiós':
                response = '¡Hasta luego! Si necesitas algo más, no dudes en preguntar.';
                break;
            default:
                response = 'Gracias por tu mensaje. Estoy aquí para ayudarte.';
                break;
        }
        
        // Simulación de tiempo de respuesta
        setTimeout(function() {
            addMessage('bot', response);
        }, 1000);
    }