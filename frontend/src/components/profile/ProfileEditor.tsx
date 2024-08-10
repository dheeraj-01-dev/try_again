"use client";
import React, { MouseEventHandler, useState } from "react";
import styles from "./styles/profileEditor.module.css";
import Image from "next/image";

const ProfileEditor = ({
  editor = true,
  closeEditor,
  editorArray,
  profile,
}: {
  editor?: boolean;
  editorArray: {
    name: string;
    value: string | number;
    png: string;
  }[];
  profile: {
    name: string;
    email: string;
    phone: string | number;
    ffUid: string | number;
    userName: string;
  };
  closeEditor: MouseEventHandler<HTMLImageElement>;
}) => {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [FFUid, setFFUid] = useState(profile.ffUid);
  const [phone, setPhone] = useState(profile.phone);
  const [userName, setUserName] = useState(profile.userName);

  const [inpName, setInpName] = useState("");
  const [inpTemplate, setInpTemplate] = useState("");
  const [inpValue, setInpValue]: any = useState("");
  const [updatableInputBox, setUpdatableInputBox] = useState(false);

  const focusInput = (inpName: string) => {
    setInpTemplate("Enter Your " + inpName);
    if (inpName === "Name") {
      setInpValue(name);
      setInpName("Name");
    }
    if (inpName === "Phone") {
      setInpValue(phone);
      setInpName("Phone");
    }
    if (inpName === "FF Uid") {
      setInpValue(FFUid);
      setInpName("FF Uid");
    }
    if (inpName === "User Name") {
      setInpValue(userName);
      setInpName("User Name");
    }
    if (inpName === "Email") {
      setInpValue(email);
      setInpName("Email");
    }
    setUpdatableInputBox(true);
    const i = document.getElementById("focusUpdatableInput");
    const i2 = document.getElementById("focusUpdatableInput2");
    if (!i || !i2) {return};
    i.focus();
    console.log("KJdfjklaskdj")
    if(inpName==="Phone"){
      console.log("phone connsdfj")
    }
  };

  const closeInput = () => {
    setUpdatableInputBox(false);
    setInpValue("");
    setInpName("");
  };

  const saveInputValue = () => {
    if (inpName === "Name") {
      setName(inpValue);
    }
    if (inpName === "User Name") {
      setUserName(inpValue);
    }
    if (inpName === "FF Uid") {
      setFFUid(inpValue);
    }
    if (inpName === "Phone") {
      setPhone(inpValue);
    }
    if (inpName === "Email") {
      setEmail(inpValue);
    }
    closeInput();
  };

  const updateInpValue = (e: any) => {
    setInpValue(e.target.value);
  };

  const restrictTextareaEnterBtn = (e: any) => {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      saveInputValue();
      const i = document.getElementById("focusUpdatableInput2");
      if (!i) return;
      i.blur();
    }
  };

  return (
    <div className={`${styles.ProfileEditor} ${!editor && styles.hide}`}>
      <div style={{ opacity: 0.8, display: "flex", alignItems: "flex-end" }}>
        <Image
          onClick={closeEditor}
          height={15}
          width={15}
          alt="x"
          src="/icons/arrowLeftWhite.png"
        />
        <span style={{ marginLeft: "15px" }}>Personal Information</span>
      </div>
      <div className={styles.editors}>
        {editorArray.map(
          (editor: { name: string; value: string | number; png: string }) => {
            return (
              <div key={editor.name} className={styles.editor}>
                <Image
                  className={styles.editorPng}
                  height={18}
                  width={18}
                  alt="U"
                  src={`/icons/${editor.png}.png`}
                />
                <div className={styles.editorValue}>
                  <div>
                    <label className={styles.inputLables} htmlFor="name">
                      {editor.name}
                    </label>
                    <div className={styles.inputs}>
                      {editor.name === "Name"
                        ? name
                        : editor.name === "FF Uid"
                        ? FFUid
                        : editor.name === "User Name"
                        ? userName
                        : editor.name === "Phone"
                        ? phone
                        : editor.name === "Email"
                        ? email
                        : "undefined"}
                    </div>
                  </div>
                  <Image
                    alt="E"
                    width={18}
                    height={18}
                    onClick={() => {
                      focusInput(editor.name);
                    }}
                    className={styles.editorBtn}
                    src="/icons/edit-pen.png"
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
      <div
        className={`${styles.updatableInputBox} ${
          !updatableInputBox && styles.hide2
        }`}
      >
        <div className={styles.updatableContainer}>
          <div className={styles.updatableInfo}>
            <Image
              style={{ opacity: 0.8 }}
              height={18}
              width={18}
              alt="U"
              src="/icons/user.png"
            />
            <div style={{ marginLeft: "20px", width: "100%" }}>
              <div style={{ opacity: 0.7 }}>{inpTemplate}</div>
              {!(inpName==="Phone")&&<textarea
                onKeyDown={restrictTextareaEnterBtn}
                rows={1}
                spellCheck={false}
                autoComplete="off"
                id="focusUpdatableInput2"
                value={inpValue}
                onChange={updateInpValue}
                role="number"
                className={styles.editableInput}
                placeholder="Type...."
                maxLength={24}
              />}{ inpName==="Phone"&&
                <input type="number" 
                spellCheck={false}
                autoComplete="off"
                id="focusUpdatableInput"
                value={inpValue}
                onChange={updateInpValue}
                role="number"
                className={styles.editableInput}
                placeholder="Type...."
                maxLength={24} />
              }
            </div>
          </div>
          <div className={styles.updateChangesBtn}>
            <button onClick={closeInput}>cancel</button>
            <button onClick={saveInputValue}>update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditor;
