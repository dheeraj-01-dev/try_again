"use client";
import React, { useState } from "react";
import styles from "./styles/persnolInfo.module.css";
import Image from "next/image";
import ProfileEditor from "./ProfileEditor";
import { tree } from "next/dist/build/templates/app-page";

const PersnolInfo = ({
  name,
  ffUid,
  phone,
  email,
  userName,
}: {
  name: string;
  ffUid: number;
  phone: number;
  email: string;
  userName: string;
}) => {
  const profile = {
    name,
    ffUid,
    phone,
    email,
    userName,
  };
  const [editor, setEditor] = useState(false);

  const launchEditor = () => {
    setEditor(true);
  };

  const closeEditor = () => {
    setEditor(false);
  };

  const editorArray = [
    {
      name: "Name",
      value: name,
      png: "user",
    },
    {
      name: "FF Uid",
      value: ffUid,
      png: "evaluation",
    },
    {
      name: "User Name",
      value: userName,
      png: "job",
    },
    {
      name: "Phone",
      value: phone,
      png: "support",
    },
    {
      name: "Email",
      value: email,
      png: "email",
    },
  ];

  return (
    <>
      <div className={styles.infoLable}>
        Persnol information
        <Image
          onClick={launchEditor}
          height={20}
          width={20}
          alt=" edit"
          src="/icons/edit.png"
          unoptimized
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <span>Name</span>
          {name}
        </div>
        <div className={styles.info}>
          <span>FF-Uid</span>
          {ffUid}
        </div>
        <div className={styles.info}>
          <span>Phone</span>
          {phone}
        </div>
        <div className={styles.info}>
          <span>Username</span>
          {userName}
        </div>
        <div className={styles.info}>
          <span>Email</span>
          {email}
        </div>
      </div>
      <ProfileEditor
        profile={profile}
        editorArray={editorArray}
        editor={editor}
        closeEditor={closeEditor}
      />
    </>
  );
};

export default PersnolInfo;
