document.addEventListener('DOMContentLoaded', function() {
    var messageBox = document.getElementById('message-box');
    var replyButtons = document.querySelectorAll('.reply-btn');

    replyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var replyText = button.textContent;
            if (messageBox.value) {
                messageBox.value += ' ' + replyText;
            } else {
                messageBox.value = replyText;
            }
            messageBox.focus();
        });
    });
});