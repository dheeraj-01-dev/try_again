// "use server"
// import { cookies } from 'next/headers';
// import { io } from 'socket.io-client';
// const uri = "http://192.168.113.131:5400";

// const cookieStore = cookies();
// const auth = cookieStore.get("u_state")?.value;

// interface payloadType {
//   auth: string,
//   data: any
// };

// const socket = io(uri, {
//   reconnectionDelayMax: 10000
// });

// const emitEvents = async (event :string, payload :payloadType)=>{
//   socket.emit(event, payload)
// }

// const on = socket.on
// const emit = socket.emit;

// const fn = async () => {
//   return socket;
// }

// export { fn, on, emit, emitEvents }