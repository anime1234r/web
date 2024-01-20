const OtakuPlayhubApp = {
    showWelcomeMessage: function() {
        const usernameElement = document.getElementById('username');
        const savedUsername = localStorage.getItem('username');

        if (savedUsername) {
            usernameElement.textContent = `¡Hola, ${savedUsername}!`;
        } else {
            const username = prompt('¡Hola! Ingresa tu nombre:');
            if (username) {
                localStorage.setItem('username', username);
                usernameElement.textContent = `¡Hola, ${username}!`;
            }
        }
    },

    initialize: function() {
        OtakuPlayhubApp.showWelcomeMessage();
    },
};

const hasShownWelcomeMessage = localStorage.getItem('hasShownWelcomeMessage');

if (!hasShownWelcomeMessage) {
    document.addEventListener('DOMContentLoaded', function() {
        OtakuPlayhubApp.initialize();
        localStorage.setItem('hasShownWelcomeMessage', 'true');
    });
} else {
    document.addEventListener('DOMContentLoaded', OtakuPlayhubApp.initialize);
}
