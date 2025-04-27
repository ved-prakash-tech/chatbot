var sendBtn = document.getElementById("sendBtn");
var textBox = document.getElementById("textbox");  // corrected id
var chatContainer = document.getElementById("chat-container");

function sendMessage(messageText) {
   var messageElement = document.createElement("div");
   messageElement.classList.add("w-50", "float-right", "shadow-sm");
   messageElement.style.margin = "10px";
   messageElement.style.padding = "5px";

   messageElement.innerHTML = "<span>You:</span> " +
                              "<span style='margin-top:10px; padding:10px'>" +
                              messageText +
                              "</span>";
   chatContainer.appendChild(messageElement);

   // Auto scroll to bottom
   chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendBtn.addEventListener("click", function(e) {
   let messageText = textBox.value;  // corrected value fetching
   if (messageText.trim() !== "") {
       sendMessage(messageText);
       textBox.value = "";
   }
});
