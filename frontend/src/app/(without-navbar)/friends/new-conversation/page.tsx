import React from "react";
import styles from "./page.module.css";
import AllFriends from "@/components/friends/new-conversation/AllFriends";
import { getallFriends } from "@/api/friends/get-allFriends";
import { apiType } from "@/api/types/apiTypes";
import { cookies } from "next/headers";
import Titles from "@/components/temp/Titles";
import FriendsSearchBox from "@/components/temp/FriendSearchBox";

const page = async () => {
  const cookieStore = cookies();
  const i_state = cookieStore.get("i_state")?.value;

  const json: apiType = await getallFriends({ auth: i_state });
  const friends: Array<any> = json.data.friend_details;

  return (
    <div className={styles.newConversation}>
      <Titles home={false} title="New Conversation" />
      <FriendsSearchBox style={{ marginBottom: "10px" }} />
      <AllFriends friends={friends} />
    </div>
  );
};

export default page;
