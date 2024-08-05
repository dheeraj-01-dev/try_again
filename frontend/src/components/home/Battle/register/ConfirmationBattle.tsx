"use client";
import React, { useState } from "react";
import styles from "./styles/confirmationBattle.module.css";
import Image from "next/image";
import SelectTeam from "./SelectTeam";
import UserTemplates from "@/components/temp/UserTemplates";
import toast from "@/scripts/toast";

const teamModeInt: string[] = ["", "Solo", "Duo", "", "Squad"];

const ConfirmationBattle = ({
  battleId,
  style,
  teams,
  battle,
  balance,
  authorization: { userName, ffUid, profile },
}: {
  battleId: string;
  style?: React.CSSProperties;
  teams?: any[];
  battle: {
    battleId: number;
    settings: { map: string; gameMode: string; teamMode: string; ammo: string };
    entry: number;
    winning: {
      _1: number;
      _2: number;
      _3: number;
    };
  };
  balance: number;
  authorization: {
    userName: string;
    ffUid: string | undefined;
    profile: string;
  };
}) => {
  const [selectedMembers, setSelectedMembers] = useState(new Set([userName]));

  const memberArray = Array.from(selectedMembers);
  const teamLenght = teamModeInt.indexOf(battle.settings.teamMode);

  const updateSelectedMembers = (member: string) => {
    selectedMembers?.has(member)
      ? setSelectedMembers((data: Set<string>) => {
          data.delete(member);
          return new Set(data);
        })
      : memberArray.length < teamLenght
      ? setSelectedMembers((data: Set<string>) => new Set(data.add(member)))
      : toast("Selected members reached max !");
  };

  return (
    <div style={style} className={styles.confirmationContainer}>
      <div className={styles.confirmationBox}>
        <img
          alt="map"
          src={"/maps/" + battle.settings.map + ".png"}
          className={styles.map}
        />
        <div className={styles.battleMode}>
          {battle.settings.gameMode}&nbsp; [{battle.settings.teamMode}]
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          #{battle.battleId}
        </div>

        <div className={styles.teamBox}>
          <div className={styles.teamSelector}>
            <div>
              {teams && teams[0].teamName}
              <span className={styles.selectedMemberLengthTemplate}>
                ({memberArray.length}/{teamLenght})
              </span>
            </div>
            <SelectTeam
              selectedMembers={selectedMembers}
              updateMembers={updateSelectedMembers}
              you={userName}
              teams={teams}
              params={{ battleId: battleId }}
            >
              <span className={styles.selectedMemberLengthTemplate}>
                ({memberArray.length}/{teamLenght})
              </span>
            </SelectTeam>
          </div>
          <div className={styles.selectedMemberBox}>
            {memberArray.map((member) => {
              return (
                <div className={styles.selectedMember} key={member}>
                  {memberArray.indexOf(member) + 1}. &nbsp; {member} &nbsp;
                  <span style={{ color: "#039cd8", fontWeight: 700 }}>
                    {member === userName && "(you)"}
                  </span>
                </div>
              );
            })}
            {/* <UserTemplates
              style={{ fontSize: "95%", marginTop: "10px", marginLeft: "10px" }}
              pic={false}
              picReplacer="1."
              profile={"/men.png"}
              dimension={37}
              userName={`${userName} (you)`}
            /> */}
          </div>
        </div>

        <div className={styles.balanceControllerBox}>
          <div className={styles.balanceInfo}>
            <span>Total</span> &nbsp; {balance} -/
          </div>
          <div className={styles.balanceInfo}>
            <span>Entry Fee</span> &nbsp; {battle.entry} -/
          </div>
          <div className={styles.balanceInfo}>
            <span>Balance</span> &nbsp; {balance - battle.entry} -/
          </div>
        </div>
        <button disabled className={styles.submitBtn}>
          Join now
        </button>
      </div>
    </div>
  );
};

export default ConfirmationBattle;
