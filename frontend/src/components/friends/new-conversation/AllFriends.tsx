"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles/allFriends.module.css";
import Image from "next/image";

const AllFriends = ({ friends }: { friends: Array<any> }) => {
  const foucusTargetFriend = async (e: any) => {};

  return (
    <div>
      {friends.length < 0 ? (
        <div className={styles.noFriendTemplate}>
          Looks having no Friend !<div>Make Some ?</div>
        </div>
      ) : (
        <div>
          {friends.map((obj) => (
            <div
              onClick={foucusTargetFriend}
              key={obj.userName}
              className={styles.friendBox}
            >
              <Image
                className={styles.friendsProfile}
                height={50}
                width={50}
                alt=""
                src={obj.profile}
              />
              <div className={styles.names}>
                <div className={styles.userName}>{obj.userName}</div>
                <div className={styles.uid}>{obj.ffUid}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllFriends;
