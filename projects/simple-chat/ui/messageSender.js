export default class MessageSender {
  constructor(element, onSend) {
    this.onSend = onSend;

    const messageInput = element.querySelector('[data-role=message-input]');
    const messageSendButton = element.querySelector('[data-role=message-send-button]');

    messageInput.addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        messageSendButton.click();
      }
    });

    messageSendButton.addEventListener('click', () => {
      const message = messageInput.value.trim();
      if (message) {
        this.onSend(message);
        messageInput.value = '';
      }
    });
  }
}
