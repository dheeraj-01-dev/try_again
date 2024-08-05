"use client";
import React, { MouseEventHandler } from "react";
import styles from "./styles/userTemplates.module.css";
import Image from "next/image";
import { apiType } from "@/api/types/apiTypes";
import toast from "@/scripts/toast";

const UserTemplates = ({
  userName,
  uid,
  profile,
  dimension,
  alt = "",
  style,
  requestBtn = false,
  requestFun,
  pic = true,
  picReplacer,
}: {
  userName: string;
  uid ?:number;
  profile: string;
  dimension: number;
  alt?: string;
  pic?: boolean;
  picReplacer?: string;
  requestBtn?: boolean;
  requestFun?: Function;
  style?: React.CSSProperties;
}) => {
  const createRequest = async () => {
    if (requestFun) {
      const json: apiType = await requestFun({ to: userName });
      if (json.data) {
        toast(json.data);
      } else {
        toast(json.error);
      }
    }
  };

  return (
    <div style={style} className={styles.userTemplate}>
      <div className={styles.userProfileSection}>
        {pic && (
          <Image
            className={styles.userProfile}
            height={dimension}
            width={dimension}
            alt={alt}
            src={profile}
          />
        )}
        <div className={styles.userProfile}>{picReplacer}</div>
        <div>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.uid}>{uid}</div>
        </div>
      </div>
      {requestBtn && (
        <div onClick={createRequest} className={styles.reqBtn}>
          <Image
            style={{ opacity: 0.8 }}
            width={20}
            alt="+"
            height={20}
            src="/icons/add-friend.png"
          />
        </div>
      )}
    </div>
  );
};

export default UserTemplates;
