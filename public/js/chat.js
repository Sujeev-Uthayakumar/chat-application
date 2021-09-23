const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

document.querySelector("#messageSend").addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.querySelector("#messageBox").value;
  socket.emit("sendMessage", message);
});
