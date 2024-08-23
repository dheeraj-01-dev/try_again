
const joinEvent = (payload)=>{
  if(!payload.auth) { return }
  socket.join(payload.auth);
}

export { joinEvent }