const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

document.querySelector("#messageSend").addEventListener("click", (e) => {
  e.preventDefault();
  const message = document.querySelector("#messageBox").value;
  socket.emit("sendMessage", message, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message delivered!");
  });
});

document.querySelector("#send-location").addEventListener("click", (e) => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        console.log("Location shared!");
      }
    );
  });
});
