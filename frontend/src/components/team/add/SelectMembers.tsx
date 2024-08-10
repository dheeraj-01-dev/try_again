import React from "react";

interface friendType {
  ffUid: number;
  profile: string;
  userName: string;
}

const SelectMembers = ({ Friends }: { Friends: friendType[] | undefined }) => {
  return (
    <div>
      {Friends?.map((friend: friendType) => {
        return <div key={friend.userName}>{friend.userName}</div>;
      })}
    </div>
  );
}; 

export default SelectMembers;
