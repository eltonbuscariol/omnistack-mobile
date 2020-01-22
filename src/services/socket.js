import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.145:3333", {
  autoConnect: false
});

function connect(latiude, longitude, techs) {
  socket.io.opts.query = {
    latiude,
    longitude,
    techs
  };

  socket.connect();
}

function subscribeToNewDevs(subscribeFunction) {
  socket.on("new-dev", subscribeFunction);
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
