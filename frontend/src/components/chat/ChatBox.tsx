// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import styles from "./styles/chatBox.module.css";
// import Image from "next/image";
// import { socket } from "@/socket";

// const ChatBox = ({
//   members,
//   auth,
// }: {
//   members: string[];
//   auth: string | undefined;
// }) => {
//   const [input, setInput] = useState<string>()
//   const textarea = useRef<HTMLTextAreaElement>(null);
//   const chats = useRef<HTMLDivElement>(null)

//   const submitHandle = () => {
//     textarea.current?.focus();

//     const lastChild :any = chats.current?.lastChild;
//     if(lastChild?.classList.value.startsWith("chatBox_outgoingChat")){
//       const div = document.createElement("div");
//       if(!input){return}
//       div.classList.add(styles.chat)
//       div.innerHTML = input;
  
//       chats.current?.lastChild?.appendChild(div)
//     }else{
//       const lastChild = document.createElement("div");
//       lastChild.classList.add(styles.outgoingChat);

//       const div = document.createElement("div");
//       if(!input){return}
//       div.classList.add(styles.chat)
//       div.innerHTML = input;

//       lastChild.append(div)
  
//       chats.current?.append(lastChild);

//     }

//     setInput("")

//     console.log(chats.current)
//   };
//   useEffect(() => {
//     socket.emit("joinToRoom", {
//       type: "directConversation",
//       members: "dheeraj.mafia,khutta.mafia",
//       auth,
//     });

//     return () => {
//       socket.off("message");
//       socket.emit("dis", "dheeraj.mafia,khutta.mafia");
//     };
//   }, [socket]);

//   socket.on("message", (payload) => {
//     console.log(payload);
//   });

//   const expandTextarea = (e: any) => {
//     // e.target.style.cssText = 'height:auto; padding: 0';
//     // e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
//     setTimeout(function () {
//       e.target.style.cssText = "height:auto; padding:0";
//       // for box-sizing other than "content-box" use:
//       // e.target.style.cssText = '-moz-box-sizing:content-box';
//       if (e.target.scrollHeight < 115) {
//         e.target.style.cssText = "height:" + e.target.scrollHeight + "px";
//       } else {
//         e.target.style.cssText = "height: 96px; padding: 0";
//       }
//     }, 0);
//   };

//   return (
//     <div className={styles.chatBox}>
//       <div ref={chats} className={styles.chats}>
//         <div className={styles.incomingChat}>
//           <div className={styles.chat}>he asdlkfj</div>
//           <div className={styles.chat}>he asdlkfsdfas sadfa </div>
//           <div className={styles.chat}>he asdlkfj kj kapar sdkf sdfbcjvue wucbdjshufds</div>
//         </div>
//         <div className={styles.outgoingChat}>
//           <div className={styles.chat}>ki re babu kate maun laglao hi hi hi</div>
//           <div className={styles.chat}>ki re babu kate maun laglao hi hi hi</div>
//         </div>
//       </div>

//       <div className={styles.inputArea}>
//         <div className={styles.inputBox}>
//           <textarea
//             onInput={expandTextarea}
//             value={input}
//             onChange={(e)=>{setInput(e.target.value)}}
//             ref={textarea}
//             rows={1}
//             id="textarea"
//             autoCorrect="off"
//             spellCheck={false}
//             name="input"
//             className={styles.input}
//             placeholder="Type...."
//           ></textarea>
//         </div>
//         <div className={styles.sendBtn}>
//           <Image
//             onClick={submitHandle}
//             height={20}
//             width={20}
//             alt=""
//             src="/icons/send.png"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;





"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./styles/chatBox.module.css";
import Image from "next/image";
import { socket } from "@/socket";

type ChatBoxProps = {
  members: string[];
  auth?: string;
};

const ChatBox: React.FC<ChatBoxProps> = ({ members, auth }) => {
  let originalHeight : number | undefined;
  const [input, setInput] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatsRef = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null)
  const chatBox = useRef<HTMLDivElement>(null)

  const addChatMessage = useCallback(
    (content: string, isOutgoing: boolean) => {
      if (!content) return;

      const chatDiv = document.createElement("div");
      chatDiv.className = styles.chat;
      chatDiv.textContent = content;

      if (isOutgoing) {

        const lastChild :any = chatsRef.current?.lastChild;

        if (lastChild?.classList.value.startsWith("chatBox_outgoingChat")) {
          chatsRef.current?.lastChild?.appendChild(chatDiv);
        } else {
          const outgoingDiv = document.createElement("div");
          outgoingDiv.className = styles.outgoingChat;
          outgoingDiv.appendChild(chatDiv);
          chatsRef.current?.appendChild(outgoingDiv);
        }
      } else {

        const lastChild :any = chatsRef.current?.lastChild;

        if (lastChild?.classList.value.startsWith("chatBox_incomingChat")) {
          chatsRef.current?.lastChild?.appendChild(chatDiv);
        } else {
          const incomingDiv = document.createElement("div");
          incomingDiv.className = styles.incomingChat;
          incomingDiv.appendChild(chatDiv);
          chatsRef.current?.appendChild(incomingDiv);
        }
      }
    },
    []
  );

  const handleSubmit = () => {
    textareaRef.current?.focus();
    addChatMessage(input, true);
    setInput("");
  };
  useEffect(() => {
    const viewPort = window.visualViewport?.height;
    originalHeight = viewPort;
  }, [])
  

  useEffect(() => {

    window.addEventListener("resize", (e :any)=>{
      const updatedHeight = window.visualViewport?.height;
      if(!(chatBox.current&&box.current&&originalHeight&&updatedHeight&&chatsRef.current)){return}
      box.current.style.bottom = `${originalHeight-updatedHeight+10}px`;
      chatsRef.current.style.height = `calc(${updatedHeight - 105}px)`;
      chatBox.current.style.height = `calc(${updatedHeight - 60}px)`;
    })
    socket.emit("joinToRoom", {
      type: "directConversation",
      members: members.join(","),
      auth,
    });

    const handleIncomingMessage = (payload: any) => {
      addChatMessage(payload.message, false);
    };

    socket.on("message", handleIncomingMessage);

    return () => {
      socket.off("message", handleIncomingMessage);
      socket.emit("dis", members.join(","));
    };
  }, [addChatMessage]);

  const expandTextarea = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = scrollHeight < 115 ? `${scrollHeight}px` : "96px";
  }, []);

  return (
    <div ref={chatBox} className={styles.chatBox}>
      <div ref={chatsRef} className={styles.chats}>
        {/* Initial Chats */}
        <div className={styles.incomingChat}>
          <div className={styles.chat}>Sample incoming message 1</div>
          <div className={styles.chat}>Sample incoming message 2</div>
          <div className={styles.chat}>Sample incoming message 3</div>
        </div>
        <div className={styles.outgoingChat}>
          <div className={styles.chat}>Sample outgoing message 1</div>
          <div className={styles.chat}>Sample outgoing message 2</div>
        </div>
      </div>

      <div ref={box} className={styles.inputArea}>
        <div className={styles.inputBox}>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onInput={expandTextarea}
            onFocus={(e:any)=>{
              e.preventDefault({preventScroll: true})
            }}
            rows={1}
            id="textarea"
            autoCorrect="off"
            spellCheck={false}
            name="input"
            className={styles.input}
            placeholder="Type...."
          />
        </div>
        <div className={styles.sendBtn}>
          <Image
            onClick={handleSubmit}
            height={20}
            width={20}
            alt="Send"
            src="/icons/send.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
